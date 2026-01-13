import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { put } from "@vercel/blob";

const PRODUCTS_FILE = path.join(process.cwd(), "data", "products.json");
const BLOB_URL = process.env.PRODUCTS_BLOB_URL; // public blob URL where products.json is stored
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN; // Vercel Blob read/write token

// Generate slug from product name
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Ensure data directory exists (local dev fallback)
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Initialize local products file if it doesn't exist
async function initProductsFile() {
  await ensureDataDir();
  try {
    await fs.access(PRODUCTS_FILE);
    // Check if file is empty or has empty array
    const data = await fs.readFile(PRODUCTS_FILE, "utf8");
    const products = JSON.parse(data);
    if (products.length === 0) {
      await fs.writeFile(PRODUCTS_FILE, JSON.stringify(getDefaultProducts(), null, 2));
    }
  } catch {
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(getDefaultProducts(), null, 2));
  }
}

// --- Vercel Blob helpers (production friendly) ---
async function readFromBlob() {
  if (!BLOB_URL || !BLOB_TOKEN) return null;
  try {
    const res = await fetch(BLOB_URL, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Failed to read products from blob:", err);
    return null;
  }
}

async function writeToBlob(products) {
  if (!BLOB_TOKEN) return null;
  try {
    const result = await put("products.json", JSON.stringify(products, null, 2), {
      access: "public",
      contentType: "application/json",
      token: BLOB_TOKEN,
      addRandomSuffix: false,
    });
    // If the blob URL changed (first write), log it so it can be set as PRODUCTS_BLOB_URL
    if (result?.url && result.url !== BLOB_URL) {
      console.log("Products blob URL:", result.url);
    }
    return result?.url || BLOB_URL;
  } catch (err) {
    console.error("Failed to write products to blob:", err);
    return null;
  }
}

async function readProducts() {
  // 1) Try Supabase first if configured
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (SUPABASE_URL && SUPABASE_KEY) {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, { global: { fetch } });
    try {
      const { data, error } = await supabase.from("products").select("*").order("id", { ascending: true });
      if (error) throw error;
      return data.map((p) => ({ ...p, slug: p.slug || generateSlug(p.name) }));
    } catch (err) {
      console.error("Supabase fetch failed, falling back to blob/local:", err);
    }
  }

  // 2) Try Vercel Blob if configured
  const blobProducts = await readFromBlob();
  if (blobProducts) {
    return blobProducts.map((p) => ({ ...p, slug: p.slug || generateSlug(p.name) }));
  }

  // 3) Fallback to local file (dev)
  await initProductsFile();
  const data = await fs.readFile(PRODUCTS_FILE, "utf8");
  let products = JSON.parse(data);
  products = products.map((product) => ({
    ...product,
    slug: product.slug || generateSlug(product.name),
  }));
  return products;
}

async function writeProducts(products) {
  // Try Supabase if configured
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (SUPABASE_URL && SUPABASE_KEY) {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, { global: { fetch } });
    try {
      // Upsert products (requires PK constraint in DB)
      const { error } = await supabase.from("products").upsert(products);
      if (error) throw error;
      return { source: 'supabase' };
    } catch (err) {
      console.error("Supabase write failed, falling back to blob/local:", err);
    }
  }

  // Try Vercel Blob
  if (BLOB_TOKEN) {
    const url = await writeToBlob(products);
    if (!url) throw new Error("Failed to persist products to blob");
    return { source: 'blob', url };
  }

  // Local dev fallback
  await ensureDataDir();
  await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));
  return { source: 'local', path: PRODUCTS_FILE };
}

// Default products to populate on first load
function getDefaultProducts() {
  return [
    { 
      id: 1, 
      name: "A5 Flyers", 
      slug: "a5-flyers",
      price: "25,000", 
      category: "Prints", 
      image: "/image/A4-flyers.png", 
      unit: "Per 50",
      description: "Eye-catching A5 flyers perfect for promotions, events, and marketing campaigns. High-quality print on premium paper stock with vibrant colors that capture attention.",
      features: ["Full color CMYK printing", "130gsm glossy art paper", "Professional design support", "Fast turnaround", "Vibrant color reproduction"],
      specifications: {
        size: "A5 (148 x 210mm)",
        material: "130gsm Glossy Art Paper",
        printing: "Full Color CMYK (One Side)",
        finishing: "Glossy",
        quantity: "50 pieces",
        turnaround: "1-2 Business Days"
      },
      reviews: [
        { name: "Funke Ajayi", rating: 5, comment: "Amazing quality flyers! Colors are vibrant.", date: "Dec 29, 2025", verified: true },
        { name: "Emeka Nwosu", rating: 5, comment: "Fast delivery and excellent print quality.", date: "Dec 22, 2025", verified: true }
      ]
    },
    { 
      id: 2, 
      name: "Double side Business Card", 
      slug: "double-side-business-card",
      price: "19,000", 
      category: "Branding", 
      image: "/image/Business-Card.png", 
      unit: "Per 100",
      description: "Premium quality double-sided business cards printed on high-grade cardstock. Perfect for making a lasting impression on clients and business partners.",
      features: ["Double-sided full-color printing", "Premium 350gsm cardstock", "Matte or glossy finish options", "Standard size: 3.5\" x 2\"", "Professional design assistance"],
      specifications: {
        size: "3.5 x 2 inches (Standard)",
        material: "350gsm Art Card",
        printing: "Full Color CMYK (Both Sides)",
        finishing: "Matte/Glossy Lamination",
        quantity: "100 pieces minimum",
        turnaround: "2-3 Business Days"
      },
      reviews: [
        { name: "Adewale Johnson", rating: 5, comment: "Best business cards I've ever ordered!", date: "Jan 2, 2026", verified: true }
      ]
    },
    { 
      id: 3, 
      name: "Shirts", 
      slug: "custom-printed-shirts",
      price: "8,000", 
      category: "Design", 
      image: "/image/Shirts.png", 
      unit: "Per one",
      description: "Custom printed shirts with your logo or design. High-quality fabric with vibrant DTG printing for events, teams, or corporate branding.",
      features: ["Direct-to-garment printing", "100% cotton fabric", "Durable print quality", "Various sizes available", "Custom design support"],
      specifications: {
        size: "S, M, L, XL, XXL",
        material: "100% Cotton (160gsm)",
        printing: "DTG Full Color",
        finishing: "Pre-washed fabric",
        quantity: "Minimum 1 piece",
        turnaround: "3-5 Business Days"
      },
      reviews: [
        { name: "Chioma Okafor", rating: 5, comment: "Perfect for our team event! Great quality.", date: "Dec 28, 2025", verified: true }
      ]
    },
    { 
      id: 4, 
      name: "Invitation Cards", 
      slug: "invitation-cards",
      price: "15,000", 
      category: "Prints", 
      image: "/image/Invitation.png", 
      unit: "Per one",
      description: "Elegant invitation cards for weddings, birthdays, and special events. Premium cardstock with custom designs that make lasting impressions.",
      features: ["Premium cardstock", "Custom design options", "Various finishing options", "Professional layout", "Fast delivery"],
      specifications: {
        size: "5 x 7 inches (Standard)",
        material: "300gsm Art Card",
        printing: "Full Color CMYK",
        finishing: "Matte/Glossy/Embossed options",
        quantity: "Minimum 50 pieces",
        turnaround: "3-4 Business Days"
      },
      reviews: [
        { name: "Blessing Eze", rating: 5, comment: "Beautiful cards for our wedding!", date: "Jan 1, 2026", verified: true }
      ]
    },
    { 
      id: 5, 
      name: "Stickers", 
      slug: "vinyl-stickers",
      price: "12,000", 
      category: "Branding", 
      image: "/image/Stickers2.png", 
      unit: "Per 100",
      description: "Durable vinyl stickers perfect for branding, packaging, or promotional campaigns. Waterproof and weather-resistant with vibrant colors.",
      features: ["Waterproof vinyl", "UV resistant", "Strong adhesive", "Custom shapes available", "Full color printing"],
      specifications: {
        size: "Custom sizes available",
        material: "Vinyl Sticker Material",
        printing: "Full Color Digital",
        finishing: "Glossy/Matte options",
        quantity: "100 pieces minimum",
        turnaround: "2-3 Business Days"
      },
      reviews: [
        { name: "Tunde Bakare", rating: 5, comment: "Great quality stickers for our products!", date: "Dec 30, 2025", verified: true }
      ]
    },
    { 
      id: 6, 
      name: "A4 Brochure", 
      slug: "a4-brochure",
      price: "6,500", 
      category: "Prints", 
      image: "/image/A4-Brochure.png", 
      unit: "Per one",
      description: "Professional A4 brochures ideal for showcasing products, services, or company information. Available in bi-fold or tri-fold formats.",
      features: ["Bi-fold or tri-fold options", "High-quality paper", "Full color printing", "Professional finishing", "Design assistance available"],
      specifications: {
        size: "A4 (210 x 297mm)",
        material: "150gsm Glossy Art Paper",
        printing: "Full Color CMYK",
        finishing: "Folded and trimmed",
        quantity: "Minimum 50 pieces",
        turnaround: "2-3 Business Days"
      },
      reviews: [
        { name: "Ngozi Udeh", rating: 4, comment: "Good quality brochures for our business.", date: "Dec 27, 2025", verified: true }
      ]
    },
    { 
      id: 7, 
      name: "Burial Programme", 
      slug: "burial-programme",
      price: "5,500", 
      category: "Branding", 
      image: "/image/Burial-programme.png", 
      unit: "Per one",
      description: "Respectful and professionally designed burial programmes for memorial services. High-quality printing with customizable layouts.",
      features: ["Custom design layouts", "Premium paper quality", "Full color printing", "Professional binding", "Quick turnaround"],
      specifications: {
        size: "A5 (148 x 210mm)",
        material: "120gsm Art Paper",
        printing: "Full Color CMYK",
        finishing: "Saddle stitched",
        quantity: "Minimum 50 pieces",
        turnaround: "1-2 Business Days"
      },
      reviews: [
        { name: "Pastor Adebayo", rating: 5, comment: "Very professional and respectful design.", date: "Dec 25, 2025", verified: true }
      ]
    },
    { 
      id: 8, 
      name: "Notepad", 
      slug: "custom-notepad",
      price: "5,500", 
      category: "Design", 
      image: "/image/Notepad.png", 
      unit: "Per one",
      description: "Branded notepads perfect for office use, giveaways, or corporate gifts. Custom printed with your logo on quality paper.",
      features: ["Custom logo printing", "50 sheets per pad", "Quality paper", "Cardboard backing", "Various sizes available"],
      specifications: {
        size: "A5 or custom",
        material: "80gsm Bond Paper",
        printing: "Single color or full color",
        finishing: "Glued top binding",
        quantity: "Minimum 50 pads",
        turnaround: "3-4 Business Days"
      },
      reviews: [
        { name: "Oluwaseun Bello", rating: 4, comment: "Great for our office supplies.", date: "Dec 24, 2025", verified: true }
      ]
    },
    { 
      id: 9, 
      name: "Exercise Book", 
      slug: "exercise-book",
      price: "0,000", 
      category: "Prints", 
      image: "/image/Exercise-book.png", 
      unit: "Per one",
      description: "Standard exercise books for schools and educational institutions. Durable covers with quality ruled pages.",
      features: ["Durable cover", "Quality ruled pages", "Standard ruling", "Various page counts", "Bulk discounts available"],
      specifications: {
        size: "A4 or A5",
        material: "60gsm offset paper",
        printing: "Ruled lines",
        finishing: "Saddle stitched",
        quantity: "Minimum 100 pieces",
        turnaround: "5-7 Business Days"
      },
      reviews: [
        { name: "Mrs. Adeyemi", rating: 5, comment: "Perfect for our school students.", date: "Dec 20, 2025", verified: true }
      ]
    },
    { 
      id: 10, 
      name: "Conqueror Letterhead", 
      slug: "conqueror-letterhead",
      price: "20,000", 
      category: "Branding", 
      image: "/image/Conqueror-Letterhead.png", 
      unit: "Per one",
      description: "Premium Conqueror letterhead paper for executive correspondence. Luxurious feel with professional branding.",
      features: ["Premium Conqueror paper", "Watermarked quality", "Full color printing", "Professional finish", "Luxurious texture"],
      specifications: {
        size: "A4 (210 x 297mm)",
        material: "100gsm Conqueror Paper",
        printing: "Full Color CMYK",
        finishing: "Trimmed to size",
        quantity: "Minimum 100 sheets",
        turnaround: "3-4 Business Days"
      },
      reviews: [
        { name: "CEO Ahmed", rating: 5, comment: "Excellent quality for executive use.", date: "Jan 3, 2026", verified: true }
      ]
    },
    { 
      id: 11, 
      name: "A4 Flyers", 
      slug: "a4-flyers",
      price: "45,000", 
      category: "Prints", 
      image: "/image/A4-Flyers3.png", 
      unit: "Per one",
      description: "Large format A4 flyers for maximum impact. Perfect for posters, announcements, and promotional materials.",
      features: ["Large A4 format", "Vibrant color printing", "Premium paper quality", "Professional finish", "Design support available"],
      specifications: {
        size: "A4 (210 x 297mm)",
        material: "150gsm Glossy Art Paper",
        printing: "Full Color CMYK",
        finishing: "Glossy lamination",
        quantity: "Minimum 50 pieces",
        turnaround: "2-3 Business Days"
      },
      reviews: [
        { name: "Ibrahim Musa", rating: 5, comment: "Eye-catching flyers for our event!", date: "Dec 29, 2025", verified: true }
      ]
    },
    { 
      id: 12, 
      name: "Branded Nylon", 
      slug: "branded-nylon-bags",
      price: "28,000", 
      category: "Branding", 
      image: "/image/Branded-Nylon.png", 
      unit: "Per one",
      description: "Custom branded nylon bags for shopping, events, or promotions. Durable and reusable with vibrant printing.",
      features: ["Durable nylon material", "Custom color printing", "Strong handles", "Various sizes", "Eco-friendly option"],
      specifications: {
        size: "Medium/Large sizes",
        material: "High-grade nylon",
        printing: "Screen printing or digital",
        finishing: "Heat-sealed handles",
        quantity: "Minimum 100 pieces",
        turnaround: "5-7 Business Days"
      },
      reviews: [
        { name: "Kemi Adeoye", rating: 4, comment: "Sturdy bags for our retail store.", date: "Dec 26, 2025", verified: true }
      ]
    },
    { 
      id: 13, 
      name: "Pen Branding", 
      slug: "custom-branded-pens",
      price: "1,200", 
      category: "Design", 
      image: "/image/Pen-Branding.png", 
      unit: "Per one",
      description: "Custom branded pens perfect for corporate gifts, events, or promotional giveaways. Quality writing instruments with your logo.",
      features: ["Smooth writing", "Logo printing", "Quality ink", "Various colors available", "Bulk pricing"],
      specifications: {
        size: "Standard pen size",
        material: "Plastic/Metal options",
        printing: "Screen printing/Engraving",
        finishing: "Logo on barrel",
        quantity: "Minimum 50 pieces",
        turnaround: "5-7 Business Days"
      },
      reviews: [
        { name: "Grace Okonkwo", rating: 5, comment: "Great promotional items for our conference.", date: "Dec 23, 2025", verified: true }
      ]
    },
    { 
      id: 14, 
      name: "A5 Jotter (Soft Cover)", 
      slug: "a5-jotter-soft-cover",
      price: "1,200", 
      category: "Prints", 
      image: "/image/A5-Jotter.png", 
      unit: "Per one",
      description: "Affordable A5 jotters with soft cover. Ideal for notes, meetings, or student use. Custom branding available.",
      features: ["Soft cover design", "Ruled pages", "Compact A5 size", "Custom cover printing", "Affordable pricing"],
      specifications: {
        size: "A5 (148 x 210mm)",
        material: "80gsm offset paper, card cover",
        printing: "Full color cover",
        finishing: "Perfect bound",
        quantity: "Minimum 50 pieces",
        turnaround: "4-5 Business Days"
      },
      reviews: [
        { name: "Student David", rating: 4, comment: "Perfect for my lecture notes.", date: "Dec 21, 2025", verified: true }
      ]
    },
    { 
      id: 15, 
      name: "A2 Posters", 
      slug: "a2-posters",
      price: "80,000", 
      category: "Branding", 
      image: "/image/A2-Posters.png", 
      unit: "Per one",
      description: "Large A2 posters for maximum visibility. Perfect for advertising, events, or indoor displays with vibrant colors.",
      features: ["Large format printing", "High resolution output", "Vibrant colors", "Indoor/outdoor options", "Matte or glossy finish"],
      specifications: {
        size: "A2 (420 x 594mm)",
        material: "170gsm Poster Paper",
        printing: "Full Color Digital",
        finishing: "Glossy/Matte options",
        quantity: "Minimum 10 pieces",
        turnaround: "2-3 Business Days"
      },
      reviews: [
        { name: "Event Planner Joy", rating: 5, comment: "Amazing quality for our concert promotion!", date: "Jan 4, 2026", verified: true }
      ]
    },
    { 
      id: 16, 
      name: "A5 Jotter (Hard Cover)", 
      slug: "a5-jotter-hard-cover",
      price: "1,800", 
      category: "Prints", 
      image: "/image/A5-Jotter2.png", 
      unit: "Per one",
      description: "Premium A5 jotter with hardcover for durability. Perfect for executives, students, or corporate gifts.",
      features: ["Durable hard cover", "Quality paper", "Professional appearance", "Custom branding", "Long-lasting"],
      specifications: {
        size: "A5 (148 x 210mm)",
        material: "90gsm offset paper, hardcover",
        printing: "Full color cover",
        finishing: "Case bound",
        quantity: "Minimum 50 pieces",
        turnaround: "5-7 Business Days"
      },
      reviews: [
        { name: "Manager Femi", rating: 5, comment: "Excellent quality for our team.", date: "Dec 28, 2025", verified: true }
      ]
    },
    { 
      id: 17, 
      name: "A3 Posters", 
      slug: "a3-posters",
      price: "35,000", 
      category: "Branding", 
      image: "/image/A3-Posters.png", 
      unit: "Per one",
      description: "Medium-large A3 posters perfect for indoor displays, retail promotions, or office announcements.",
      features: ["A3 format", "High-quality printing", "Vibrant colors", "Multiple finish options", "Quick turnaround"],
      specifications: {
        size: "A3 (297 x 420mm)",
        material: "150gsm Poster Paper",
        printing: "Full Color CMYK",
        finishing: "Glossy/Matte/Satin",
        quantity: "Minimum 20 pieces",
        turnaround: "1-2 Business Days"
      },
      reviews: [
        { name: "Sarah Obi", rating: 4, comment: "Great for our retail store displays.", date: "Dec 30, 2025", verified: true }
      ]
    },
    { 
      id: 18, 
      name: "Roll Up Banner + Machine", 
      slug: "roll-up-banner-with-stand",
      price: "60,000", 
      category: "Design", 
      image: "/image/Roll-Up-Banner.png", 
      unit: "Per one",
      description: "Professional roll-up banner with portable stand. Perfect for exhibitions, events, trade shows, or retail displays.",
      features: ["Portable aluminum stand", "Easy setup mechanism", "High-resolution printing", "Durable banner material", "Carrying case included"],
      specifications: {
        size: "85 x 200cm (Standard)",
        material: "440gsm Blockout Banner",
        printing: "Full Color Digital",
        finishing: "With retractable stand",
        quantity: "Minimum 1 piece",
        turnaround: "3-5 Business Days"
      },
      reviews: [
        { name: "Expo Coordinator Mike", rating: 5, comment: "Professional setup for our booth!", date: "Jan 2, 2026", verified: true }
      ]
    },
    { 
      id: 19, 
      name: "A6 Flyer", 
      slug: "a6-flyers",
      price: "15,000", 
      category: "Prints", 
      image: "/image/A6-Flyer.png", 
      unit: "Per 100",
      description: "Compact A6 flyers perfect for handheld distribution, menus, or promotional leaflets. Cost-effective marketing solution.",
      features: ["Compact size", "Easy to distribute", "Full color printing", "Glossy or matte finish", "Bulk discounts"],
      specifications: {
        size: "A6 (105 x 148mm)",
        material: "130gsm Art Paper",
        printing: "Full Color CMYK",
        finishing: "Glossy/Matte",
        quantity: "100 pieces minimum",
        turnaround: "1-2 Business Days"
      },
      reviews: [
        { name: "Restaurant Owner Ade", rating: 5, comment: "Perfect size for our menu flyers!", date: "Dec 27, 2025", verified: true }
      ]
    },
    { 
      id: 20, 
      name: "Stickers", 
      slug: "custom-stickers",
      price: "8,000", 
      category: "Branding", 
      image: "/image/Stickers3.png", 
      unit: "Per 50",
      description: "Versatile custom stickers for packaging, branding, or promotional use. Available in various shapes and finishes.",
      features: ["Custom shapes", "Waterproof options", "Strong adhesive", "Vibrant printing", "Various finishes"],
      specifications: {
        size: "Custom sizes",
        material: "Vinyl or Paper",
        printing: "Full Color Digital",
        finishing: "Glossy/Matte/Die-cut",
        quantity: "50 pieces minimum",
        turnaround: "2-3 Business Days"
      },
      reviews: [
        { name: "Startup Founder Bola", rating: 4, comment: "Great for our product packaging.", date: "Dec 25, 2025", verified: true }
      ]
    },
    { 
      id: 21, 
      name: "Billboard banner", 
      slug: "billboard-banner",
      price: "55,000", 
      category: "Branding", 
      image: "/image/Billboard-banner.png", 
      unit: "Per one",
      description: "Large outdoor billboard banners for maximum brand visibility. Weather-resistant and UV protected for long-lasting outdoor advertising.",
      features: ["Weather resistant material","UV protection","Large format printing","High durability","Vibrant outdoor colors"],
      specifications: {
            "size": "Custom sizes available",
            "material": "510gsm Frontlit Banner",
            "printing": "Full Color Digital",
            "finishing": "With eyelets for hanging",
            "quantity": "Minimum 1 piece",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Marketing Director Chidi",
                  "rating": 5,
                  "comment": "Excellent visibility for our outdoor campaign!",
                  "date": "Dec 31, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 22, 
      name: "Original Jersey Prints", 
      slug: "original-jersey-prints",
      price: "25,000", 
      category: "Prints", 
      image: "/image/Original-Jersey.png", 
      unit: "Per one",
      description: "High-quality original jersey prints with team names, numbers, and logos. Perfect for sports teams and athletic events.",
      features: ["Heat transfer printing","Stretch fabric","Breathable material","Custom team designs","Durable prints"],
      specifications: {
            "size": "S, M, L, XL, XXL",
            "material": "Polyester sports fabric",
            "printing": "Heat transfer/Sublimation",
            "finishing": "Professional stitching",
            "quantity": "Minimum 10 pieces",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Coach Samuel",
                  "rating": 5,
                  "comment": "Perfect jerseys for our football team!",
                  "date": "Dec 29, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 23, 
      name: "Double side Business Card", 
      slug: "double-side-business-card",
      price: "35,000", 
      category: "Branding", 
      image: "/image/Double-side.png", 
      unit: "Per one",
      description: "Premium double-sided business cards with luxury finish options. Make a memorable impression with high-end cardstock.",
      features: ["Double-sided printing","Premium cardstock","Multiple finish options","Rounded corners option","Luxury feel"],
      specifications: {
            "size": "3.5 x 2 inches",
            "material": "400gsm Premium Card",
            "printing": "Full Color Both Sides",
            "finishing": "Matte/Glossy/Soft Touch",
            "quantity": "Minimum 100 pieces",
            "turnaround": "3-4 Business Days"
      },
      reviews: [
            {
                  "name": "Executive Director",
                  "rating": 5,
                  "comment": "Impressive quality for our executives!",
                  "date": "Jan 5, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 24, 
      name: "Outdoor Signage", 
      slug: "outdoor-signage",
      price: "300,000", 
      category: "Signage", 
      image: "/image/Outdoor-Signage.png", 
      unit: "Per piece",
      description: "Professional outdoor signage solutions for businesses. Weather-resistant, durable, and designed to withstand harsh conditions.",
      features: ["Weather resistant","UV protected","Heavy-duty materials","Professional installation","Long-lasting durability"],
      specifications: {
            "size": "Custom sizes",
            "material": "Aluminum/Acrylic composite",
            "printing": "UV digital printing",
            "finishing": "With mounting hardware",
            "quantity": "Custom orders",
            "turnaround": "10-14 Business Days"
      },
      reviews: [
            {
                  "name": "Business Owner Peter",
                  "rating": 5,
                  "comment": "Fantastic signage for our storefront!",
                  "date": "Dec 20, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 25, 
      name: "Indoor Signage", 
      slug: "indoor-signage",
      price: "60,000", 
      category: "Signage", 
      image: "/image/Indoor-Signage.png", 
      unit: "Per piece",
      description: "Professional indoor signage for offices, retail spaces, and corporate environments. Clean, modern designs with premium materials.",
      features: ["Premium materials","Professional finish","Easy mounting","Custom designs","Clean aesthetics"],
      specifications: {
            "size": "Custom sizes",
            "material": "Acrylic/Foam board/Vinyl",
            "printing": "Full Color Digital",
            "finishing": "Laminated/Mounted",
            "quantity": "Minimum 1 piece",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Office Manager Rita",
                  "rating": 5,
                  "comment": "Professional look for our office!",
                  "date": "Dec 28, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 26, 
      name: "Feather Banner", 
      slug: "feather-banner",
      price: "25,000", 
      category: "Branding", 
      image: "/image/Feather-Banner.png", 
      unit: "Per piece",
      description: "Eye-catching feather banners for outdoor events, promotions, and retail displays. Portable and easy to set up.",
      features: ["Portable design","Easy setup","Wind resistant","Vibrant printing","Includes base and pole"],
      specifications: {
            "size": "3m or 5m height",
            "material": "110gsm Knitted Polyester",
            "printing": "Dye sublimation",
            "finishing": "With pole and base",
            "quantity": "Minimum 1 piece",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Event Organizer Temi",
                  "rating": 4,
                  "comment": "Great for attracting attention at events!",
                  "date": "Jan 3, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 27, 
      name: "Branded Hoodie", 
      slug: "branded-hoodie",
      price: "12,000", 
      category: "Prints", 
      image: "/image/Branded-Hoodie.png", 
      unit: "Per one",
      description: "Custom branded hoodies for teams, events, or corporate wear. Comfortable fabric with professional printing.",
      features: ["Soft comfortable fabric","Custom logo printing","Various colors","Durable print","Unisex sizing"],
      specifications: {
            "size": "S, M, L, XL, XXL",
            "material": "Cotton/Polyester blend",
            "printing": "Screen print/Embroidery",
            "finishing": "Professional stitching",
            "quantity": "Minimum 20 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "HR Manager Yemi",
                  "rating": 5,
                  "comment": "Team loves their branded hoodies!",
                  "date": "Dec 27, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 28, 
      name: "Backdrop Banners", 
      slug: "backdrop-banners",
      price: "45,000", 
      category: "Branding", 
      image: "/image/Backdrop-Banners.png", 
      unit: "Per piece",
      description: "Professional backdrop banners for events, conferences, photo booths, and exhibitions. High-impact visual displays.",
      features: ["Large format","High resolution printing","Portable options","Professional finish","Easy setup"],
      specifications: {
            "size": "2m x 3m or custom",
            "material": "440gsm Blockout Banner",
            "printing": "Full Color Digital",
            "finishing": "With stand/eyelets",
            "quantity": "Minimum 1 piece",
            "turnaround": "4-6 Business Days"
      },
      reviews: [
            {
                  "name": "Wedding Planner Aisha",
                  "rating": 5,
                  "comment": "Perfect backdrop for our events!",
                  "date": "Jan 1, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 29, 
      name: "A5 jotter", 
      slug: "a5-jotter",
      price: "1,200", 
      category: "Design", 
      image: "/image/A5-jotter3.png", 
      unit: "Per 50",
      description: "Bulk A5 jotters perfect for schools, conferences, or corporate giveaways. Quality paper with custom cover designs.",
      features: ["Bulk pricing","Custom covers","Quality paper","Perfect bound","Various page counts"],
      specifications: {
            "size": "A5 (148 x 210mm)",
            "material": "80gsm offset paper",
            "printing": "Full color cover",
            "finishing": "Perfect binding",
            "quantity": "50 pieces minimum",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Conference Organizer",
                  "rating": 4,
                  "comment": "Great value for bulk orders!",
                  "date": "Dec 26, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 30, 
      name: "Flag Banner", 
      slug: "flag-banner",
      price: "0,000", 
      category: "Prints", 
      image: "/image/Flag-Banner.png", 
      unit: "Per piece",
      description: "Custom flag banners for outdoor promotions, events, and brand visibility. Durable and wind-resistant design.",
      features: ["Wind resistant","Durable material","Vibrant colors","Easy setup","Portable design"],
      specifications: {
            "size": "Various sizes available",
            "material": "115gsm Knitted Polyester",
            "printing": "Dye sublimation",
            "finishing": "With pole and base",
            "quantity": "Minimum 1 piece",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Retail Manager John",
                  "rating": 5,
                  "comment": "Attracts customers to our store!",
                  "date": "Dec 30, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 31, 
      name: "Backdrop", 
      slug: "backdrop",
      price: "75,000", 
      category: "Branding", 
      image: "/image/Backdrop.png", 
      unit: "Per piece",
      description: "Premium event backdrops for weddings, conferences, and special occasions. Professional presentation with seamless finish.",
      features: ["Seamless design","Professional quality","Various sizes","Easy installation","Reusable"],
      specifications: {
            "size": "3m x 3m or custom",
            "material": "Premium fabric/vinyl",
            "printing": "High resolution digital",
            "finishing": "With mounting options",
            "quantity": "Custom orders",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Event Designer Kola",
                  "rating": 5,
                  "comment": "Stunning backdrop for our client's wedding!",
                  "date": "Jan 2, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 32, 
      name: "Canvas Prints", 
      slug: "canvas-prints",
      price: "25,000", 
      category: "Branding", 
      image: "/image/Canvas-prints.png", 
      unit: "Per one",
      description: "Gallery-quality canvas prints for home, office, or commercial spaces. Museum-grade materials with vibrant reproduction.",
      features: ["Gallery wrapped","Fade resistant","Museum quality","Various sizes","Ready to hang"],
      specifications: {
            "size": "Custom sizes available",
            "material": "Premium canvas fabric",
            "printing": "Giclée printing",
            "finishing": "Gallery wrapped on frame",
            "quantity": "Minimum 1 piece",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Interior Designer Lola",
                  "rating": 5,
                  "comment": "Beautiful canvas prints for our project!",
                  "date": "Dec 29, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 33, 
      name: "Face Cap Branding", 
      slug: "face-cap-branding",
      price: "5,000", 
      category: "Branding", 
      image: "/image/Face-cap.png", 
      unit: "Per one",
      description: "Custom branded face caps perfect for promotional giveaways, team uniforms, or corporate merchandise.",
      features: ["Quality fabric","Adjustable strap","Custom embroidery","Various colors","Durable construction"],
      specifications: {
            "size": "One size fits most",
            "material": "Cotton/Polyester blend",
            "printing": "Embroidery/Heat transfer",
            "finishing": "Professional stitching",
            "quantity": "Minimum 50 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Promo Manager Efe",
                  "rating": 4,
                  "comment": "Great quality caps for our campaign!",
                  "date": "Dec 31, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 34, 
      name: "Road Poll banner", 
      slug: "road-poll-banner",
      price: "0,000", 
      category: "Prints", 
      image: "/image/Road-poll.png", 
      unit: "Per piece",
      description: "Road pole banners for outdoor advertising along streets and highways. Maximum visibility for brand campaigns.",
      features: ["Street pole mounting","Weather resistant","High visibility","Double-sided printing","Durable material"],
      specifications: {
            "size": "Custom pole sizes",
            "material": "510gsm Frontlit Banner",
            "printing": "Full Color Digital",
            "finishing": "With pole pockets",
            "quantity": "Minimum 2 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "City Advertiser",
                  "rating": 5,
                  "comment": "Perfect for our street campaign!",
                  "date": "Jan 4, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 35, 
      name: "Birthday Banner", 
      slug: "birthday-banner",
      price: "65,000", 
      category: "Branding", 
      image: "/image/Birthday-banner.png", 
      unit: "Per piece",
      description: "Vibrant birthday banners for parties and celebrations. Custom designs to make every birthday special.",
      features: ["Custom designs","Vibrant colors","Large format","Indoor/outdoor use","Reusable material"],
      specifications: {
            "size": "2m x 1m or custom",
            "material": "440gsm Banner material",
            "printing": "Full Color Digital",
            "finishing": "With eyelets",
            "quantity": "Minimum 1 piece",
            "turnaround": "2-3 Business Days"
      },
      reviews: [
            {
                  "name": "Party Planner Susan",
                  "rating": 5,
                  "comment": "Perfect for birthday celebrations!",
                  "date": "Dec 28, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 36, 
      name: "Custom Calendar", 
      slug: "custom-calendar",
      price: "6,500", 
      category: "Design", 
      image: "/image/Custom-calender.png", 
      unit: "Per 50",
      description: "Custom desk or wall calendars with your branding and photos. Perfect for corporate gifts or promotional items.",
      features: ["Custom design","Quality paper","Full color printing","Various formats","Branded pages"],
      specifications: {
            "size": "A4 or custom",
            "material": "150gsm Art Paper",
            "printing": "Full Color CMYK",
            "finishing": "Spiral bound/Wire-O",
            "quantity": "Minimum 50 pieces",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Corporate Buyer Musa",
                  "rating": 5,
                  "comment": "Excellent corporate gift for clients!",
                  "date": "Dec 22, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 37, 
      name: "Envelope Printing", 
      slug: "envelope-printing",
      price: "25,000", 
      category: "Prints", 
      image: "/image/Envelope.png", 
      unit: "Per 50",
      description: "Professional envelope printing for business correspondence. Custom sizes with your branding and logo.",
      features: ["Custom printing","Various sizes","Quality paper","Window options","Professional finish"],
      specifications: {
            "size": "DL, C5, C4 or custom",
            "material": "100gsm Envelope Paper",
            "printing": "Full Color or spot color",
            "finishing": "Gummed flap",
            "quantity": "Minimum 50 pieces",
            "turnaround": "3-4 Business Days"
      },
      reviews: [
            {
                  "name": "Office Admin Joy",
                  "rating": 4,
                  "comment": "Professional envelopes for our office!",
                  "date": "Dec 26, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 38, 
      name: "Card Label", 
      slug: "card-label",
      price: "18,000", 
      category: "Branding", 
      image: "/image/Card-Label.png", 
      unit: "Per 100",
      description: "Durable card labels for products, packaging, or identification. Various materials and finishes available.",
      features: ["Durable materials","Various finishes","Strong adhesive","Custom shapes","Weather resistant options"],
      specifications: {
            "size": "Custom sizes",
            "material": "Cardstock/Vinyl",
            "printing": "Full Color Digital",
            "finishing": "Die-cut/Kiss-cut",
            "quantity": "100 pieces minimum",
            "turnaround": "3-4 Business Days"
      },
      reviews: [
            {
                  "name": "Product Manager Tom",
                  "rating": 5,
                  "comment": "Perfect labels for our products!",
                  "date": "Dec 30, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 39, 
      name: "A5 Paper Bag", 
      slug: "a5-paper-bag",
      price: "20,600", 
      category: "Prints", 
      image: "/image/A5-Paper.png", 
      unit: "Per 100",
      description: "Eco-friendly A5 paper bags with custom branding. Perfect for retail, gifts, or promotional packaging.",
      features: ["Eco-friendly paper","Strong handles","Custom printing","Various sizes","Reusable"],
      specifications: {
            "size": "A5 size",
            "material": "Kraft paper/Art paper",
            "printing": "Full Color or spot color",
            "finishing": "Rope/Ribbon handles",
            "quantity": "100 pieces minimum",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Boutique Owner Ada",
                  "rating": 5,
                  "comment": "Beautiful bags for our boutique!",
                  "date": "Jan 1, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 40, 
      name: "A2 Paper Bag", 
      slug: "a2-paper-bag",
      price: "2,000", 
      category: "Prints", 
      image: "/image/A2-Paper.png", 
      unit: "Per one",
      description: "Large A2 paper bags for shopping, gifts, or retail packaging. Sturdy construction with custom branding.",
      features: ["Large capacity","Strong construction","Custom branding","Quality handles","Eco-friendly"],
      specifications: {
            "size": "A2 size",
            "material": "Kraft paper 250gsm",
            "printing": "Full Color printing",
            "finishing": "Twisted paper handles",
            "quantity": "100 pieces minimum",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Store Manager Ben",
                  "rating": 4,
                  "comment": "Sturdy bags for our customers!",
                  "date": "Dec 27, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 41, 
      name: "Face Cap", 
      slug: "face-cap",
      price: "5,000", 
      category: "Branding", 
      image: "/image/Face-Cap2.png", 
      unit: "Per one",
      description: "Quality face caps with custom embroidery or printing. Perfect for teams, events, or promotional merchandise.",
      features: ["Premium quality","Custom designs","Various colors","Adjustable","Comfortable fit"],
      specifications: {
            "size": "One size adjustable",
            "material": "100% Cotton",
            "printing": "Embroidery/Print",
            "finishing": "Professional stitching",
            "quantity": "Minimum 50 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Team Leader Chris",
                  "rating": 5,
                  "comment": "Team loves their custom caps!",
                  "date": "Dec 29, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 42, 
      name: "Silicone Wristband", 
      slug: "silicone-wristband",
      price: "200", 
      category: "Design", 
      image: "/image/Silicone-Wristband.png", 
      unit: "Per one",
      description: "Colorful silicone wristbands for events, fundraisers, or promotional campaigns. Comfortable and durable.",
      features: ["Flexible silicone","Custom messages","Various colors","Comfortable wear","Durable"],
      specifications: {
            "size": "Adult/Youth sizes",
            "material": "100% Silicone",
            "printing": "Debossed/Embossed/Printed",
            "finishing": "Smooth edges",
            "quantity": "Minimum 100 pieces",
            "turnaround": "10-14 Business Days"
      },
      reviews: [
            {
                  "name": "Charity Coordinator",
                  "rating": 5,
                  "comment": "Perfect for our fundraiser!",
                  "date": "Jan 3, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 43, 
      name: "Face Cap", 
      slug: "face-cap",
      price: "5,000", 
      category: "Prints", 
      image: "/image/Face-Cap3.png", 
      unit: "Per one",
      description: "Premium branded caps with high-quality embroidery. Excellent for corporate identity and team uniforms.",
      features: ["High-quality embroidery","Premium fabric","Professional finish","Various styles","Branded"],
      specifications: {
            "size": "Adjustable one size",
            "material": "Premium cotton blend",
            "printing": "3D Embroidery",
            "finishing": "Professional grade",
            "quantity": "Minimum 50 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Corporate Buyer",
                  "rating": 5,
                  "comment": "Excellent quality for our staff!",
                  "date": "Dec 31, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 44, 
      name: "A5 Birthday NoteBook", 
      slug: "a5-birthday-notebook",
      price: "1,800", 
      category: "Branding", 
      image: "/image/A5-Birthday.png", 
      unit: "Per one",
      description: "Customized A5 birthday notebooks with personalized designs. Perfect gifts for birthday celebrations.",
      features: ["Personalized designs","Quality paper","Custom covers","Various page counts","Gift-ready"],
      specifications: {
            "size": "A5 (148 x 210mm)",
            "material": "100gsm offset paper",
            "printing": "Full color cover",
            "finishing": "Hardcover bound",
            "quantity": "Minimum 10 pieces",
            "turnaround": "4-5 Business Days"
      },
      reviews: [
            {
                  "name": "Gift Shop Owner",
                  "rating": 5,
                  "comment": "Customers love these personalized notebooks!",
                  "date": "Jan 2, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 45, 
      name: "Acrylic Award", 
      slug: "acrylic-award",
      price: "20,000", 
      category: "Branding", 
      image: "/image/Acrylic-Award.png", 
      unit: "Per piece",
      description: "Elegant acrylic awards for recognition, achievement, and special honors. Professional engraving available.",
      features: ["Clear acrylic","Professional engraving","Various shapes","Premium quality","Custom designs"],
      specifications: {
            "size": "Various sizes available",
            "material": "Premium acrylic",
            "printing": "Laser engraving",
            "finishing": "Polished edges",
            "quantity": "Minimum 1 piece",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "HR Director",
                  "rating": 5,
                  "comment": "Beautiful awards for our employee recognition!",
                  "date": "Dec 28, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 46, 
      name: "Sticker", 
      slug: "sticker",
      price: "100", 
      category: "Branding", 
      image: "/image/Stickers3.png", 
      unit: "Per one",
      description: "Individual custom stickers for small orders or personal use. Various shapes, sizes, and finishes available.",
      features: ["Single piece orders","Custom shapes","Quality vinyl","Waterproof","Various finishes"],
      specifications: {
            "size": "Custom size",
            "material": "Vinyl sticker",
            "printing": "Full Color Digital",
            "finishing": "Die-cut/Kiss-cut",
            "quantity": "Minimum 1 piece",
            "turnaround": "1-2 Business Days"
      },
      reviews: [
            {
                  "name": "Individual Customer",
                  "rating": 5,
                  "comment": "Perfect custom sticker!",
                  "date": "Jan 5, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 47, 
      name: "Neon Signage", 
      slug: "neon-signage",
      price: "120,000", 
      category: "Signage", 
      image: "/image/Neon-Signage.png", 
      unit: "Per piece",
      description: "Eye-catching neon LED signage for businesses, retail spaces, and entertainment venues. Modern lighting solution.",
      features: ["LED neon technology","Energy efficient","Vibrant colors","Custom designs","Long-lasting"],
      specifications: {
            "size": "Custom designs",
            "material": "LED neon flex",
            "printing": "N/A (LED lighting)",
            "finishing": "Mounted on backing",
            "quantity": "Custom orders",
            "turnaround": "14-21 Business Days"
      },
      reviews: [
            {
                  "name": "Restaurant Owner",
                  "rating": 5,
                  "comment": "Amazing neon sign for our restaurant!",
                  "date": "Dec 25, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 48, 
      name: "Reflective Jacket", 
      slug: "reflective-jacket",
      price: "5,000", 
      category: "Prints", 
      image: "/image/Reflective-jacket.png", 
      unit: "Per one",
      description: "High-visibility reflective jackets for safety and security personnel. Custom branding available.",
      features: ["High visibility","Reflective strips","Safety standard","Custom printing","Comfortable fit"],
      specifications: {
            "size": "S, M, L, XL, XXL",
            "material": "Polyester with reflective tape",
            "printing": "Screen print/Heat transfer",
            "finishing": "Professional stitching",
            "quantity": "Minimum 20 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Security Company",
                  "rating": 5,
                  "comment": "Excellent quality safety jackets!",
                  "date": "Jan 1, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 49, 
      name: "Luminous outdoor Signage", 
      slug: "luminous-outdoor-signage",
      price: "450,000", 
      category: "Signage", 
      image: "/image/Luminous-outdoor-signage.png", 
      unit: "Per piece",
      description: "Illuminated outdoor signage with internal lighting for 24/7 visibility. Perfect for storefronts and businesses.",
      features: ["Backlit design","Weather resistant","Energy efficient","Professional installation","Durable materials"],
      specifications: {
            "size": "Custom sizes",
            "material": "Aluminum frame with acrylic face",
            "printing": "Vinyl graphics/LED",
            "finishing": "With LED lighting system",
            "quantity": "Custom orders",
            "turnaround": "14-21 Business Days"
      },
      reviews: [
            {
                  "name": "Business Owner",
                  "rating": 5,
                  "comment": "Fantastic illuminated sign!",
                  "date": "Dec 22, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 50, 
      name: "Club Poster Design", 
      slug: "club-poster-design",
      price: "17,000", 
      category: "Design", 
      image: "/image/Club-Poster.png", 
      unit: "Per piece",
      description: "Professional club poster designs for nightclubs, events, and entertainment venues. Eye-catching graphics.",
      features: ["Creative designs","High resolution","Vibrant colors","Large format","Professional finish"],
      specifications: {
            "size": "A2 or custom",
            "material": "200gsm Poster Paper",
            "printing": "Full Color Digital",
            "finishing": "Glossy/Matte",
            "quantity": "Minimum 10 pieces",
            "turnaround": "2-3 Business Days"
      },
      reviews: [
            {
                  "name": "Club Promoter",
                  "rating": 5,
                  "comment": "Perfect posters for our events!",
                  "date": "Dec 30, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 51, 
      name: "Custom Calendar", 
      slug: "custom-calendar",
      price: "6,500", 
      category: "Prints", 
      image: "/image/Custom-calender2.png", 
      unit: "Per 50",
      description: "Custom wall or desk calendars with your photos and branding. Ideal for corporate gifts or personal use.",
      features: ["Custom layouts","Quality printing","Various formats","Full color pages","Professional binding"],
      specifications: {
            "size": "A4 or A3",
            "material": "170gsm Glossy Paper",
            "printing": "Full Color CMYK",
            "finishing": "Wire-O binding",
            "quantity": "Minimum 50 pieces",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Marketing Team",
                  "rating": 5,
                  "comment": "Great corporate calendars!",
                  "date": "Dec 26, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 52, 
      name: "Outdoor Signage", 
      slug: "outdoor-signage",
      price: "550,000", 
      category: "Signage", 
      image: "/image/Outdoor-signage2.png", 
      unit: "Per piece",
      description: "Premium outdoor signage solutions for commercial buildings and businesses. Heavy-duty and weather-resistant.",
      features: ["Heavy-duty construction","Weather proof","Professional design","Long-lasting","UV protected"],
      specifications: {
            "size": "Large custom sizes",
            "material": "Aluminum composite",
            "printing": "UV digital printing",
            "finishing": "With mounting system",
            "quantity": "Custom projects",
            "turnaround": "14-21 Business Days"
      },
      reviews: [
            {
                  "name": "Property Manager",
                  "rating": 5,
                  "comment": "Impressive signage for our building!",
                  "date": "Jan 4, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 53, 
      name: "A2 Paper Bag", 
      slug: "a2-paper-bag",
      price: "2,000", 
      category: "Prints", 
      image: "/image/A2-Paper.png", 
      unit: "Per one",
      description: "Medium-sized A2 paper bags perfect for retail shopping and gift packaging. Eco-friendly and reusable.",
      features: ["Medium capacity","Eco-friendly","Custom printing","Strong handles","Reusable"],
      specifications: {
            "size": "A2 (420 x 594mm base)",
            "material": "Kraft paper",
            "printing": "Offset printing",
            "finishing": "Twisted handles",
            "quantity": "Minimum 100 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Gift Shop",
                  "rating": 4,
                  "comment": "Perfect size for our gifts!",
                  "date": "Dec 29, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 54, 
      name: "Badge Lapel", 
      slug: "badge-lapel",
      price: "4,000", 
      category: "Branding", 
      image: "/image/Badge-Lapel.png", 
      unit: "Per one",
      description: "Professional badge lapel pins for corporate identity, events, or commemorative purposes. Quality metal construction.",
      features: ["Metal construction","Custom designs","Various finishes","Professional quality","Secure backing"],
      specifications: {
            "size": "25mm or custom",
            "material": "Metal (brass/steel)",
            "printing": "Enamel/Printed",
            "finishing": "Various backing options",
            "quantity": "Minimum 50 pieces",
            "turnaround": "10-14 Business Days"
      },
      reviews: [
            {
                  "name": "Conference Organizer",
                  "rating": 5,
                  "comment": "Professional badges for our event!",
                  "date": "Jan 3, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 55, 
      name: "Jersey name customization", 
      slug: "jersey-name-customization",
      price: "15,000", 
      category: "Design", 
      image: "/image/Jersey-name-customization.png", 
      unit: "Per piece",
      description: "Custom jersey name and number printing for sports teams. Professional heat transfer or sublimation printing.",
      features: ["Professional printing","Durable transfers","Various fonts","Team numbers","Name customization"],
      specifications: {
            "size": "Various jersey sizes",
            "material": "Heat transfer vinyl",
            "printing": "Heat press/Sublimation",
            "finishing": "Professional application",
            "quantity": "Minimum 10 pieces",
            "turnaround": "3-5 Business Days"
      },
      reviews: [
            {
                  "name": "Sports Team Captain",
                  "rating": 5,
                  "comment": "Perfect customization for our team!",
                  "date": "Dec 31, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 56, 
      name: "A3 Paper Bag", 
      slug: "a3-paper-bag",
      price: "1,600", 
      category: "Prints", 
      image: "/image/A3-Paperbag.png", 
      unit: "Per one",
      description: "Compact A3 paper bags ideal for small retail items and boutique shopping. Custom branded options available.",
      features: ["Compact size","Quality paper","Custom branding","Strong handles","Attractive design"],
      specifications: {
            "size": "A3 (297 x 420mm)",
            "material": "Art paper/Kraft paper",
            "printing": "Offset/Digital printing",
            "finishing": "Paper rope handles",
            "quantity": "Minimum 100 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Boutique Manager",
                  "rating": 4,
                  "comment": "Perfect for our small items!",
                  "date": "Jan 2, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 57, 
      name: "Birthday flier Design", 
      slug: "birthday-flier-design",
      price: "20,000", 
      category: "Branding", 
      image: "/image/Birthday-flier-design.png", 
      unit: "Per piece",
      description: "Custom birthday flyer designs for parties and celebrations. Professional graphics and layout services.",
      features: ["Custom designs","Professional graphics","Vibrant colors","Various sizes","Quick turnaround"],
      specifications: {
            "size": "A5 or A4",
            "material": "150gsm Glossy Paper",
            "printing": "Full Color CMYK",
            "finishing": "Glossy/Matte",
            "quantity": "Minimum 50 pieces",
            "turnaround": "2-3 Business Days"
      },
      reviews: [
            {
                  "name": "Party Organizer",
                  "rating": 5,
                  "comment": "Beautiful flyer design!",
                  "date": "Dec 28, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 58, 
      name: "Double side Business Card", 
      slug: "double-side-business-card",
      price: "20,000", 
      category: "Branding", 
      image: "/image/Double-side-Business-card.png", 
      unit: "Per 50",
      description: "Affordable double-sided business cards in bulk quantities. Great value for large teams or networking events.",
      features: ["Bulk pricing","Double-sided","Quality cardstock","Professional finish","Quick delivery"],
      specifications: {
            "size": "3.5 x 2 inches",
            "material": "300gsm Art Card",
            "printing": "Full Color Both Sides",
            "finishing": "Matte/Glossy",
            "quantity": "50 pieces minimum",
            "turnaround": "2-3 Business Days"
      },
      reviews: [
            {
                  "name": "Sales Team Lead",
                  "rating": 5,
                  "comment": "Great value for bulk orders!",
                  "date": "Jan 5, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 59, 
      name: "A5 Birthday NoteBook", 
      slug: "a5-birthday-notebook",
      price: "40,000", 
      category: "Branding", 
      image: "/image/A5-Birthday.png", 
      unit: "Per 100",
      description: "Bulk A5 birthday notebooks perfect for party favors or corporate gifts. Personalization available.",
      features: ["Bulk pricing","Custom covers","Birthday themes","Quality paper","Gift-ready"],
      specifications: {
            "size": "A5 (148 x 210mm)",
            "material": "100gsm offset paper",
            "printing": "Full color cover",
            "finishing": "Hardcover bound",
            "quantity": "100 pieces minimum",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Event Planner",
                  "rating": 5,
                  "comment": "Perfect party favors!",
                  "date": "Dec 30, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 60, 
      name: "Glass Frame", 
      slug: "glass-frame",
      price: "25,000", 
      category: "Branding", 
      image: "/image/Glass-Frame.png", 
      unit: "Per piece",
      description: "Professional glass-framed certificates, awards, or artwork. Museum-quality framing with premium materials.",
      features: ["Premium glass","Professional mounting","Various sizes","Clean aesthetics","Wall-ready"],
      specifications: {
            "size": "A4, A3 or custom",
            "material": "Premium glass with backing",
            "printing": "N/A (framing service)",
            "finishing": "Professional mounting",
            "quantity": "Minimum 1 piece",
            "turnaround": "3-5 Business Days"
      },
      reviews: [
            {
                  "name": "Corporate Client",
                  "rating": 5,
                  "comment": "Beautiful framing for our awards!",
                  "date": "Jan 1, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 61, 
      name: "Branded Box", 
      slug: "branded-box",
      price: "25,000", 
      category: "Branding", 
      image: "/image/Branded-box.png", 
      unit: "Per piece",
      description: "Custom branded boxes for product packaging, gifts, or corporate presentations. Various sizes and styles available.",
      features: ["Custom sizes","Full color printing","Various styles","Sturdy construction","Professional finish"],
      specifications: {
            "size": "Custom sizes",
            "material": "Corrugated/Cardboard",
            "printing": "Full Color printing",
            "finishing": "Die-cut, folding box",
            "quantity": "Minimum 100 pieces",
            "turnaround": "10-14 Business Days"
      },
      reviews: [
            {
                  "name": "Product Manager",
                  "rating": 5,
                  "comment": "Perfect packaging for our products!",
                  "date": "Dec 27, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 62, 
      name: "A3 Paper Bag", 
      slug: "a3-paper-bag",
      price: "1,600", 
      category: "Branding", 
      image: "/image/A3-Paper-bag.png", 
      unit: "Per one",
      description: "Quality A3 paper bags with custom branding. Perfect for retail, events, or promotional giveaways.",
      features: ["Quality construction","Custom printing","Eco-friendly paper","Comfortable handles","Reusable"],
      specifications: {
            "size": "A3 size",
            "material": "Kraft/Art paper",
            "printing": "Offset printing",
            "finishing": "Twisted paper handles",
            "quantity": "Minimum 100 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Retail Manager",
                  "rating": 4,
                  "comment": "Great bags for our store!",
                  "date": "Dec 29, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 63, 
      name: "Glitters Frame", 
      slug: "glitters-frame",
      price: "25,000", 
      category: "Branding", 
      image: "/image/Glitters-frame.png", 
      unit: "Per 50",
      description: "Elegant glitter frames for certificates, photos, or artwork. Sparkle finish adds a touch of glamour.",
      features: ["Glitter finish","Various sizes","Premium quality","Easy mounting","Elegant design"],
      specifications: {
            "size": "A4, A3 or custom",
            "material": "Glitter-finished frame",
            "printing": "N/A (frame product)",
            "finishing": "Wall mounting hardware",
            "quantity": "50 pieces minimum",
            "turnaround": "5-7 Business Days"
      },
      reviews: [
            {
                  "name": "Event Decorator",
                  "rating": 5,
                  "comment": "Beautiful frames for our events!",
                  "date": "Jan 4, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 64, 
      name: "Site Helmet", 
      slug: "site-helmet",
      price: "6,000", 
      category: "Branding", 
      image: "/image/Site-helmet.png", 
      unit: "Per piece",
      description: "Safety helmets with custom branding for construction sites and industrial use. Meets safety standards.",
      features: ["Safety certified","Custom branding","Durable construction","Comfortable fit","Adjustable"],
      specifications: {
            "size": "One size adjustable",
            "material": "High-impact plastic",
            "printing": "Screen print/Sticker",
            "finishing": "With suspension system",
            "quantity": "Minimum 20 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Construction Manager",
                  "rating": 5,
                  "comment": "Quality helmets for our site!",
                  "date": "Dec 26, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 65, 
      name: "A3 Paper Bag", 
      slug: "a3-paper-bag",
      price: "1,600", 
      category: "Branding", 
      image: "/image/A3-paperbag2.png", 
      unit: "Per piece",
      description: "Versatile A3 paper bags for various retail and promotional needs. Customizable with your brand design.",
      features: ["Versatile size","Custom designs","Strong construction","Quality handles","Eco-friendly"],
      specifications: {
            "size": "A3 (297 x 420mm)",
            "material": "Premium paper stock",
            "printing": "Full Color printing",
            "finishing": "Reinforced handles",
            "quantity": "Minimum 100 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Store Owner",
                  "rating": 4,
                  "comment": "Great quality bags!",
                  "date": "Jan 3, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 66, 
      name: "A4 Flyers", 
      slug: "a4-flyers",
      price: "45,000", 
      category: "Branding", 
      image: "/image/A4-Flyers5.png", 
      unit: "Per 50",
      description: "A4 flyers in medium quantity, perfect for local marketing campaigns and event promotions.",
      features: ["A4 format","Vibrant printing","Quality paper","Professional finish","Quick turnaround"],
      specifications: {
            "size": "A4 (210 x 297mm)",
            "material": "150gsm Art Paper",
            "printing": "Full Color CMYK",
            "finishing": "Glossy/Matte",
            "quantity": "50 pieces",
            "turnaround": "1-2 Business Days"
      },
      reviews: [
            {
                  "name": "Local Business",
                  "rating": 5,
                  "comment": "Perfect for our campaign!",
                  "date": "Dec 31, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 67, 
      name: "A4 Flyers", 
      slug: "a4-flyers",
      price: "35,000", 
      category: "Branding", 
      image: "/image/A4-Flyers4.png", 
      unit: "Per 100",
      description: "A4 flyers in bulk quantity for large-scale marketing and distribution campaigns.",
      features: ["Bulk quantity","Cost effective","High quality","Vibrant colors","Fast production"],
      specifications: {
            "size": "A4 (210 x 297mm)",
            "material": "150gsm Glossy Paper",
            "printing": "Full Color CMYK",
            "finishing": "Glossy lamination",
            "quantity": "100 pieces",
            "turnaround": "2-3 Business Days"
      },
      reviews: [
            {
                  "name": "Marketing Team",
                  "rating": 5,
                  "comment": "Excellent value for bulk!",
                  "date": "Jan 2, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 68, 
      name: "Site Instagram Booth", 
      slug: "site-instagram-booth",
      price: "50,000", 
      category: "Branding", 
      image: "/image/Site-Instagram-booth.png", 
      unit: "Per piece",
      description: "Branded Instagram photo booth for events and activations. Perfect for social media marketing and engagement.",
      features: ["Instagram-ready","Custom branding","Portable","Professional finish","Photo-friendly design"],
      specifications: {
            "size": "2m x 2m or custom",
            "material": "Foam board/PVC",
            "printing": "Full Color Digital",
            "finishing": "With stand",
            "quantity": "Custom orders",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Brand Activation Team",
                  "rating": 5,
                  "comment": "Perfect for our social media campaign!",
                  "date": "Dec 28, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 69, 
      name: "Glitters Frame", 
      slug: "glitters-frame",
      price: "25,000", 
      category: "Branding", 
      image: "/image/Glitters-frame1.png", 
      unit: "Per piece",
      description: "Individual glitter frames for special certificates, awards, or memorable photos. Premium quality with sparkle finish.",
      features: ["Premium glitter finish","Individual orders","Various sizes","Ready to hang","Gift-ready"],
      specifications: {
            "size": "A4 or custom",
            "material": "Glitter frame material",
            "printing": "N/A (frame product)",
            "finishing": "With mounting hardware",
            "quantity": "Minimum 1 piece",
            "turnaround": "2-3 Business Days"
      },
      reviews: [
            {
                  "name": "Individual Customer",
                  "rating": 5,
                  "comment": "Beautiful frame for my certificate!",
                  "date": "Jan 5, 2026",
                  "verified": true
            }
      ]
    },
    { 
      id: 70, 
      name: "A3 Paper Bag", 
      slug: "a3-paper-bag",
      price: "1,600", 
      category: "Branding", 
      image: "/image/A3-paperbag3.png", 
      unit: "Per piece",
      description: "Premium A3 paper bags with high-quality finish. Ideal for upscale retail and luxury gift packaging.",
      features: ["Premium quality","Luxury finish","Custom branding","Strong handles","Elegant design"],
      specifications: {
            "size": "A3 size",
            "material": "Premium art paper",
            "printing": "High-quality offset",
            "finishing": "Ribbon handles/Lamination",
            "quantity": "Minimum 100 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Luxury Retailer",
                  "rating": 5,
                  "comment": "Perfect for our premium products!",
                  "date": "Dec 30, 2025",
                  "verified": true
            }
      ]
    },
    { 
      id: 71, 
      name: "Branded Box", 
      slug: "branded-box",
      price: "8,000", 
      category: "Branding", 
      image: "/image/Branded-Box2.png", 
      unit: "Per piece",
      description: "Individual branded boxes for small products, gifts, or special packaging needs. Custom sizes available.",
      features: ["Custom sizing","Individual orders","Quality materials","Custom printing","Professional finish"],
      specifications: {
            "size": "Small to medium custom",
            "material": "Cardboard/Corrugated",
            "printing": "Full Color or spot color",
            "finishing": "Die-cut folding",
            "quantity": "Minimum 10 pieces",
            "turnaround": "7-10 Business Days"
      },
      reviews: [
            {
                  "name": "Small Business Owner",
                  "rating": 5,
                  "comment": "Perfect packaging for my products!",
                  "date": "Jan 4, 2026",
                  "verified": true
            }
      ]
    }
  ];
}

// GET - Fetch all products
export async function GET() {
  try {
    const products = await readProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST - Create new product
export async function POST(request) {
  try {
    const newProduct = await request.json();

    if (!newProduct.name || !newProduct.price || !newProduct.category) {
      return NextResponse.json(
        { error: "Missing required fields: name, price, and category are required" },
        { status: 400 }
      );
    }

    const products = await readProducts();
    const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const slug = newProduct.slug || generateSlug(newProduct.name);

    const productToSave = {
      ...newProduct,
      id: newId,
      slug,
      features: newProduct.features || [],
      specifications: newProduct.specifications || {},
      gallery: newProduct.gallery || [],
      reviews: newProduct.reviews || [],
    };

    products.push(productToSave);
    const writeResult = await writeProducts(products);

    return NextResponse.json({ product: productToSave, writeResult }, { status: 201 });
  } catch (error) {
    console.error("Failed to create product:", error);
    return NextResponse.json({ error: "Failed to create product", details: error.message }, { status: 500 });
  }
}

// PUT - Update product
export async function PUT(request) {
  try {
    const updatedProduct = await request.json();

    if (!updatedProduct.id) {
      return NextResponse.json({ error: "Product ID is required for update" }, { status: 400 });
    }

    const products = await readProducts();
    const index = products.findIndex((p) => p.id === updatedProduct.id);
    if (index === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const slug = updatedProduct.slug || generateSlug(updatedProduct.name || products[index].name);
    products[index] = { ...products[index], ...updatedProduct, slug };

    const writeResult = await writeProducts(products);
    return NextResponse.json({ product: products[index], writeResult });
  } catch (error) {
    console.error("Failed to update product:", error);
    return NextResponse.json({ error: "Failed to update product", details: error.message }, { status: 500 });
  }
}

// DELETE - Delete product
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id"));
    if (!id) return NextResponse.json({ error: "Product ID is required" }, { status: 400 });

    let products = await readProducts();
    const initialLength = products.length;
    products = products.filter((p) => p.id !== id);

    if (products.length === initialLength) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    await writeProducts(products);
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Failed to delete product:", error);
    return NextResponse.json({ error: "Failed to delete product", details: error.message }, { status: 500 });
  }
}
