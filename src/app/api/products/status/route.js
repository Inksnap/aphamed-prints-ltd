import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const PRODUCTS_FILE = path.join(process.cwd(), "data", "products.json");
    const raw = fs.readFileSync(PRODUCTS_FILE, "utf8");
    const products = JSON.parse(raw || "[]");
    const slugs = products.slice(0, 10).map((p) => ({ id: p.id, slug: p.slug || null, name: p.name }));
    return NextResponse.json({ count: products.length, sample: slugs });
  } catch (err) {
    return NextResponse.json({ error: "failed to read local products", details: String(err) }, { status: 500 });
  }
}
