import { NextResponse } from "next/server";

export const runtime = "nodejs";

// This route uploads files to Cloudinary.
// If CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET are set, it uses a signed upload (recommended).
// Otherwise it falls back to unsigned uploads using CLOUDINARY_UPLOAD_PRESET.
// Required env vars for signed: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
// Required env vars for unsigned fallback: CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET

import crypto from 'crypto';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    if (!cloudName) {
      // No Cloudinary configured — save uploads to public/uploads (works without env vars)
      try {
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        await fs.mkdir(uploadDir, { recursive: true });

        // Derive filename and extension
        const originalFilename = file.name || `upload-${Date.now()}`;
        const ext = path.extname(originalFilename) || (file.type ? '.' + file.type.split('/').pop() : '.jpg');
        const baseName = (originalFilename.replace(/\.[^.]+$/, '') || 'upload').replace(/\s+/g, '-');
        const timestamp = Math.floor(Date.now() / 1000);
        const fileName = `${timestamp}-${baseName}${ext}`;
        const filePath = path.join(uploadDir, fileName);

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        await fs.writeFile(filePath, buffer);

        // Return a relative URL that the client can use
        return NextResponse.json({ success: true, imageUrl: `/uploads/${fileName}` });
      } catch (err) {
        console.error('Local upload failed:', err);
        return NextResponse.json({ error: 'Local upload failed', details: err.message }, { status: 500 });
      }
    }

    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;
    const uploadFolder = process.env.CLOUDINARY_UPLOAD_FOLDER || "";

    const proxyForm = new FormData();
    proxyForm.append("file", file);

    // Build a public_id to keep images organized: optional folder + timestamp + filename
    const originalName = (file.name || 'upload').replace(/\.[^.]+$/, '').replace(/\s+/g, '-');
    const timestamp = Math.floor(Date.now() / 1000);
    const publicId = uploadFolder ? `${uploadFolder}/${timestamp}-${originalName}` : `${timestamp}-${originalName}`;
    proxyForm.append('public_id', publicId);

    // If API key/secret present, do signed upload
    if (apiKey && apiSecret) {
      // Cloudinary signature must include all signed params (sorted by key) joined with '&'
      // We'll sign `public_id` and `timestamp` here.
      const paramsToSign = `public_id=${publicId}&timestamp=${timestamp}`;
      const toSign = paramsToSign + apiSecret;
      const signature = crypto.createHash('sha1').update(toSign).digest('hex');

      proxyForm.append('api_key', apiKey);
      proxyForm.append('timestamp', String(timestamp));
      proxyForm.append('signature', signature);
    } else if (uploadPreset) {
      // unsigned fallback
      proxyForm.append("upload_preset", uploadPreset);
    } else {
      return NextResponse.json(
        { error: "No valid Cloudinary configuration found (signed keys or unsigned preset)." },
        { status: 500 }
      );
    }

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: "POST",
      body: proxyForm,
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Cloudinary upload failed:", data);
      return NextResponse.json({ error: "Cloudinary upload failed", details: data }, { status: 502 });
    }

    // Cloudinary returns secure_url (https)
    return NextResponse.json({ success: true, imageUrl: data.secure_url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload image", details: error.message }, { status: 500 });
  }
}
