import fs from "fs/promises";
import path from "path";
import ProductClient from "./ProductClient";

function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function readProducts() {
  const PRODUCTS_FILE = path.join(process.cwd(), "data", "products.json");
  try {
    const data = await fs.readFile(PRODUCTS_FILE, "utf8");
    const products = JSON.parse(data || "[]");
    return products.map((p) => ({ ...p, slug: p.slug || generateSlug(p.name) }));
  } catch (err) {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const products = await readProducts();
  function normalize(s){
    return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  const idParam = params.id;
  const decoded = decodeURIComponent(String(idParam || ""));

  const found =
    products.find((p) => p.slug === idParam) ||
    products.find((p) => p.slug === decoded) ||
    products.find((p) => String(p.id) === String(idParam)) ||
    products.find((p) => normalize(p.slug) === normalize(idParam)) ||
    products.find((p) => normalize(p.name) === normalize(idParam)) ||
    products.find((p) => normalize(p.name) === normalize(decoded));

  if (!found) {
    return {
      title: "Aphamed Prints LTD - Product",
      description: "High quality printing and branding products from Aphamed Prints LTD.",
    };
  }

  return {
    title: `${found.name} | Aphamed Prints LTD`,
    description: found.description || "Products from Aphamed Prints LTD",
    openGraph: {
      title: `${found.name} | Aphamed Prints LTD`,
      description: found.description || "Products from Aphamed Prints LTD",
      images: [
        {
          url: found.image?.startsWith("/") ? `https://aphamed.com${found.image}` : found.image,
          width: 800,
          height: 600,
          alt: found.name,
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: `${found.name} | Aphamed Prints LTD`,
      description: found.description || "Products from Aphamed Prints LTD",
      images: [found.image?.startsWith("/") ? `https://aphamed.com${found.image}` : found.image],
    },
  };
}

export default async function Page({ params }) {
  const products = await readProducts();
  function normalize(s){
    return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  const idParam = params.id;
  const decoded = decodeURIComponent(String(idParam || ""));

  const found2 =
    products.find((p) => p.slug === idParam) ||
    products.find((p) => p.slug === decoded) ||
    products.find((p) => String(p.id) === String(idParam)) ||
    products.find((p) => normalize(p.slug) === normalize(idParam)) ||
    products.find((p) => normalize(p.name) === normalize(idParam)) ||
    products.find((p) => normalize(p.name) === normalize(decoded));

  return <ProductClient initialProduct={found2 || null} initialAllProducts={products} params={params} />;
}
