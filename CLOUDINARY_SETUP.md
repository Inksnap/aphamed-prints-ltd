Cloudinary setup for this project

This project uploads images via `/api/upload` and requires Cloudinary or Supabase storage configured in your hosting environment.

Recommended (signed) — more secure
- Set these environment variables in your hosting provider (Production):
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`
  - (optional) `CLOUDINARY_UPLOAD_FOLDER` — folder name to keep uploads organized

Alternate single-variable fallback
- `CLOUDINARY_URL` (single value) is supported and parsed by the server. Format:

  cloudinary://<API_KEY>:<API_SECRET>@<CLOUD_NAME>

Unsigned uploads (no API secret on server)
- Create an Upload Preset in the Cloudinary dashboard and set:
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_UPLOAD_PRESET`

Local development
- You can keep values in `.env.local` during local dev. Restart the dev server after changes:

```bash
npm run dev
```

Netlify
1. Go to Site → Site settings → Build & deploy → Environment → Environment variables.
2. Add the variables (same names as above) for the `Production` environment.
3. Trigger a redeploy (or push a new commit) so the server starts with the new env.

Vercel
1. Go to Project → Settings → Environment Variables.
2. Add the variables for the `Production` environment.
3. Re-deploy the project.

Testing uploads
- After deploying with env variables present, use the admin UI: Admin → Products → Add Product → Upload Image.
- Alternatively `curl` a multipart POST to `/api/upload` with a file field named `file`.

Notes and security
- Prefer signed uploads (API key + secret) for production.
- If you must avoid server secrets, use an unsigned upload preset and set `CLOUDINARY_UPLOAD_PRESET`.
- Avoid committing `.env.local` to version control; remove API secrets from the repo if present.

If you want, I can:
- Prepare the exact env values to paste (I can read them from your local `.env.local`).
- Switch the app to prefer unsigned uploads by default and add a toggle in the admin UI.
