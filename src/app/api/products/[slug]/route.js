import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const PRODUCTS_FILE = path.join(process.cwd(), "data", "products.json");

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const data = await fs.readFile(PRODUCTS_FILE, "utf8");
    const products = JSON.parse(data);
    
    const product = products.find(p => p.slug === slug);
    
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
