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
  const found = products.find((p) => p.slug === params.id) || products.find((p) => p.id === parseInt(params.id));

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
  const found = products.find((p) => p.slug === params.id) || products.find((p) => p.id === parseInt(params.id));

  return <ProductClient initialProduct={found || null} initialAllProducts={products} params={params} />;
}
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
  const found = products.find((p) => p.slug === params.id) || products.find((p) => p.id === parseInt(params.id));

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
  const found = products.find((p) => p.slug === params.id) || products.find((p) => p.id === parseInt(params.id));

  return <ProductClient initialProduct={found || null} initialAllProducts={products} params={params} />;
}
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
    // if file missing or parse error, return an empty array
    return [];
  }
}

export async function generateMetadata({ params }) {
  const products = await readProducts();
  const found = products.find((p) => p.slug === params.id) || products.find((p) => p.id === parseInt(params.id));

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
  const found = products.find((p) => p.slug === params.id) || products.find((p) => p.id === parseInt(params.id));

  return <ProductClient initialProduct={found || null} initialAllProducts={products} params={params} />;
}
      turnaround: "2-3 Business Days"
    },
    reviews: [
      {
        name: "Ifeanyi Ugwu",
        rating: 5,
        comment: "Brilliant colors! Used them for our church event and got lots of compliments.",
        date: "Jan 3, 2026",
        verified: true
      },
      {
        name: "Zainab Mohammed",
        rating: 5,
        comment: "Great quality flyers. The double-sided printing is perfect!",
        date: "Dec 29, 2025",
        verified: true
      },
      {
        name: "Chinedu Obi",
        rating: 4,
        comment: "Good value for money. Quick turnaround time.",
        date: "Dec 21, 2025",
        verified: true
      }
    ],
    relatedProducts: [1, 19, 6]
  },
  {
    id: 12,
    name: "Branded Nylon",
    price: "28,000",
    category: "Branding",
    image: "/image/Branded-Nylon.png",
    unit: "Per one",
    description: "Custom printed nylon bags for shopping, promotions, and events. Durable and reusable with vibrant branding.",
    features: [
      "Custom full-color printing",
      "Durable nylon material",
      "Reinforced handles",
      "Various sizes available",
      "Eco-friendly reusable",
      "Perfect for retail & events"
    ],
    specifications: {
      material: "High-Quality Nylon",
      sizes: "Small/Medium/Large",
      printing: "Screen Print/Digital",
      handles: "Reinforced Stitched",
      thickness: "40-50 microns",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      {
        name: "Amarachi Nwankwo",
        rating: 5,
        comment: "Perfect for my boutique! Customers love the branded bags.",
        date: "Jan 2, 2026",
        verified: true
      },
      {
        name: "Tayo Adeyemi",
        rating: 5,
        comment: "Strong and durable. The printing quality is excellent!",
        date: "Dec 27, 2025",
        verified: true
      },
      {
        name: "Hadiza Abubakar",
        rating: 4,
        comment: "Good quality bags. Great for promotional giveaways.",
        date: "Dec 19, 2025",
        verified: true
      }
    ],
    relatedProducts: [39, 40, 56]
  },
  {
    id: 13,
    name: "Pen Branding",
    price: "1,200",
    category: "Design",
    image: "/image/Pen-Branding.png",
    unit: "Per one",
    description: "Custom branded pens for corporate gifts, events, and promotional campaigns. Quality writing instruments with your logo.",
    features: [
      "Full-color logo printing",
      "Smooth writing experience",
      "Multiple color options",
      "Bulk orders available",
      "Perfect for corporate gifts",
      "Long-lasting ink"
    ],
    specifications: {
      type: "Ballpoint Pen",
      printing: "Screen Print/Pad Print",
      ink: "Blue/Black",
      material: "Plastic/Metal options",
      branding: "Logo on barrel",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      {
        name: "Obinna Okoro",
        rating: 5,
        comment: "Ordered 500 for our conference. Everyone loved them! Quality pens.",
        date: "Jan 1, 2026",
        verified: true
      },
      {
        name: "Fatima Bello",
        rating: 5,
        comment: "Perfect corporate gift. The logo printing is very clear.",
        date: "Dec 28, 2025",
        verified: true
      },
      {
        name: "Kenneth Eze",
        rating: 4,
        comment: "Good quality pens at affordable price. Will order again.",
        date: "Dec 20, 2025",
        verified: true
      }
    ],
    relatedProducts: [14, 16, 8]
  },
  {
    id: 14,
    name: "A5 Jotter (Soft Cover)",
    price: "1,200",
    category: "Prints",
    image: "/image/A5-Jotter.png",
    unit: "Per one",
    description: "Affordable A5 jotters with soft cover. Perfect for students, meetings, and daily note-taking.",
    features: [
      "Custom cover design",
      "80 pages quality paper",
      "Soft flexible cover",
      "Spiral/perfect binding",
      "Lightweight & portable",
      "Bulk discounts"
    ],
    specifications: {
      size: "A5 (148 x 210mm)",
      pages: "80 pages",
      paper: "70gsm Bond Paper",
      cover: "250gsm Soft Cover",
      binding: "Spiral Bound",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      {
        name: "Chidinma Okeke",
        rating: 5,
        comment: "Great for students! Affordable and good quality paper.",
        date: "Jan 3, 2026",
        verified: true
      },
      {
        name: "Usman Ibrahim",
        rating: 5,
        comment: "Ordered for my team. Everyone finds them very useful.",
        date: "Dec 30, 2025",
        verified: true
      },
      {
        name: "Peace Akinola",
        rating: 4,
        comment: "Nice jotters. The custom branding looks professional.",
        date: "Dec 22, 2025",
        verified: true
      }
    ],
    relatedProducts: [16, 8, 29]
  },
  {
    id: 15,
    name: "A2 Posters",
    price: "80,000",
    category: "Branding",
    image: "/image/A2-Posters.png",
    unit: "Per one",
    description: "Large A2 posters for maximum visibility. Ideal for advertising, events, and promotional displays.",
    features: [
      "High-resolution printing",
      "Indoor/outdoor use",
      "Lamination available",
      "Vibrant color reproduction",
      "Large format impact",
      "Weather-resistant options"
    ],
    specifications: {
      size: "A2 (420 x 594mm)",
      paper: "200gsm Glossy Paper",
      printing: "Full Color CMYK",
      finishing: "Glossy/Matte/Laminated",
      quantity: "10 pieces minimum",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      {
        name: "Segun Olawale",
        rating: 5,
        comment: "Excellent quality! The colors are so vibrant. Perfect for our storefront.",
        date: "Jan 2, 2026",
        verified: true
      },
      {
        name: "Ngozi Ibe",
        rating: 5,
        comment: "Beautiful large posters. Very professional finish.",
        date: "Dec 28, 2025",
        verified: true
      },
      {
        name: "Yakubu Musa",
        rating: 4,
        comment: "Good quality posters. Worth the investment.",
        date: "Dec 24, 2025",
        verified: true
      }
    ],
    relatedProducts: [17, 21, 28]
  },
  {
    id: 16,
    name: "A5 Jotter (Hard Cover)",
    price: "1,800",
    category: "Prints",
    image: "/image/A5-Jotter2.png",
    unit: "Per one",
    description: "Premium A5 jotters with hard cover for durability. Perfect for executives and professionals.",
    features: [
      "Durable hard cover",
      "100 pages premium paper",
      "Professional appearance",
      "PU leather finish available",
      "Elastic band closure",
      "Bookmark ribbon"
    ],
    specifications: {
      size: "A5 (148 x 210mm)",
      pages: "100 pages",
      paper: "80gsm Cream Paper",
      cover: "Hard Cover (PU/Card)",
      binding: "Perfect Bound",
      turnaround: "4-6 Business Days"
    },
    reviews: [
      {
        name: "Dr. Adebayo Ogunlesi",
        rating: 5,
        comment: "Premium quality jotter. Perfect for executive meetings.",
        date: "Jan 1, 2026",
        verified: true
      },
      {
        name: "Blessing Udoh",
        rating: 5,
        comment: "Love the hard cover! Very durable and professional looking.",
        date: "Dec 29, 2025",
        verified: true
      },
      {
        name: "Ibrahim Yusuf",
        rating: 4,
        comment: "Excellent quality. Great for corporate gifting.",
        date: "Dec 21, 2025",
        verified: true
      }
    ],
    relatedProducts: [14, 44, 8]
  },
  {
    id: 17,
    name: "A3 Posters",
    price: "35,000",
    category: "Branding",
    image: "/image/A3-Posters.png",
    unit: "Per one",
    description: "Medium-sized A3 posters perfect for indoor displays, announcements, and promotional materials.",
    features: [
      "Sharp high-quality print",
      "Perfect for indoor displays",
      "Full color printing",
      "Matte or glossy finish",
      "Quick turnaround",
      "Affordable pricing"
    ],
    specifications: {
      size: "A3 (297 x 420mm)",
      paper: "170gsm Art Paper",
      printing: "Full Color CMYK",
      finishing: "Glossy/Matte",
      quantity: "20 pieces minimum",
      turnaround: "1-2 Business Days"
    },
    reviews: [
      {
        name: "Chioma Nwachukwu",
        rating: 5,
        comment: "Perfect size for our office displays. Great print quality!",
        date: "Jan 3, 2026",
        verified: true
      },
      {
        name: "Ahmed Tijani",
        rating: 5,
        comment: "Fast delivery and excellent quality. Very satisfied!",
        date: "Dec 30, 2025",
        verified: true
      },
      {
        name: "Gloria Eze",
        rating: 4,
        comment: "Good quality posters at reasonable price.",
        date: "Dec 23, 2025",
        verified: true
      }
    ],
    relatedProducts: [15, 21, 11]
  },
  {
    id: 18,
    name: "Roll Up Banner + Machine",
    price: "60,000",
    category: "Design",
    image: "/image/Roll-Up-Banner.png",
    unit: "Per one",
    description: "Professional roll-up banner with retractable stand. Perfect for exhibitions, events, and retail displays.",
    features: [
      "Retractable aluminum stand",
      "High-resolution printing",
      "Portable & lightweight",
      "Easy setup in seconds",
      "Carrying case included",
      "Reusable graphics"
    ],
    specifications: {
      size: "85cm x 200cm",
      material: "Premium Flex Banner",
      stand: "Aluminum Retractable",
      printing: "Full Color HD",
      weight: "3-4 kg",
      turnaround: "3-4 Business Days"
    },
    reviews: [
      {
        name: "Femi Afolabi",
        rating: 5,
        comment: "Excellent for exhibitions! Easy to set up and looks very professional.",
        date: "Jan 2, 2026",
        verified: true
      },
      {
        name: "Mary Okafor",
        rating: 5,
        comment: "Great investment! The print quality is superb and the stand is sturdy.",
        date: "Dec 29, 2025",
        verified: true
      },
      {
        name: "Musa Abdullahi",
        rating: 4,
        comment: "Good quality banner. Very portable and convenient.",
        date: "Dec 20, 2025",
        verified: true
      }
    ],
    relatedProducts: [26, 28, 31]
  },
  {
    id: 19,
    name: "A6 Flyer",
    price: "15,000",
    category: "Prints",
    image: "/image/A6-Flyer.png",
    unit: "Per 100",
    description: "Compact A6 flyers perfect for handouts, promotions, and direct mail campaigns. Cost-effective marketing solution.",
    features: [
      "Pocket-sized convenience",
      "Full color printing",
      "High-quality paper stock",
      "Perfect for mass distribution",
      "Cost-effective solution",
      "Quick production time"
    ],
    specifications: {
      size: "A6 (105 x 148mm)",
      paper: "130gsm Glossy Paper",
      printing: "Full Color (One Side)",
      finishing: "Glossy/Matte",
      quantity: "100 pieces",
      turnaround: "1-2 Business Days"
    },
    reviews: [
      {
        name: "Tunde Bakare",
        rating: 5,
        comment: "Perfect size for street marketing! Easy to distribute.",
        date: "Jan 3, 2026",
        verified: true
      },
      {
        name: "Amara Obi",
        rating: 5,
        comment: "Great quality at affordable price. Ordered 1000 pieces!",
        date: "Dec 31, 2025",
        verified: true
      },
      {
        name: "Suleiman Hassan",
        rating: 4,
        comment: "Good for promotional campaigns. Quick delivery.",
        date: "Dec 25, 2025",
        verified: true
      }
    ],
    relatedProducts: [1, 11, 5]
  },
  {
    id: 20,
    name: "Stickers",
    price: "8,000",
    category: "Branding",
    image: "/image/Stickers3.png",
    unit: "Per 50",
    description: "Versatile vinyl stickers for branding, packaging, and promotional use. Waterproof and durable.",
    features: [
      "Waterproof vinyl material",
      "Weather resistant",
      "Strong adhesive",
      "Custom shapes & sizes",
      "Glossy finish",
      "Indoor/outdoor use"
    ],
    specifications: {
      material: "Vinyl Sticker Paper",
      sizes: "Custom (Die-cut available)",
      printing: "Full Color CMYK",
      finish: "Glossy/Matte",
      adhesive: "Permanent/Removable",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      {
        name: "Oluwatoyin Adebisi",
        rating: 5,
        comment: "Amazing quality! The stickers are waterproof and last long.",
        date: "Jan 2, 2026",
        verified: true
      },
      {
        name: "Chukwudi Nnamdi",
        rating: 5,
        comment: "Perfect for product branding. Strong adhesive!",
        date: "Dec 28, 2025",
        verified: true
      },
      {
        name: "Khadija Sani",
        rating: 4,
        comment: "Good quality stickers. Great for packaging.",
        date: "Dec 22, 2025",
        verified: true
      }
    ],
    relatedProducts: [5, 46, 38]
  },
  {
    id: 21,
    name: "Billboard banner",
    price: "55,000",
    category: "Branding",
    image: "/image/Billboard-banner.png",
    unit: "Per one",
    description: "Large-scale billboard banners for outdoor advertising. High-visibility marketing for businesses and events.",
    features: [
      "Weather-resistant material",
      "UV-protected printing",
      "Large format visibility",
      "Rope reinforcement",
      "Outdoor durability",
      "Vibrant color output"
    ],
    specifications: {
      material: "Premium Flex Banner",
      sizes: "Custom (10ft x 6ft typical)",
      printing: "Full Color UV Print",
      finishing: "Eyelets & Rope",
      durability: "6-12 months outdoor",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      {
        name: "Adewale Johnson",
        rating: 5,
        comment: "Excellent for outdoor advertising! Very visible from the road.",
        date: "Jan 4, 2026",
        verified: true
      },
      {
        name: "Rukayat Lawal",
        rating: 5,
        comment: "Strong material that withstands rain and sun. Great investment!",
        date: "Dec 31, 2025",
        verified: true
      },
      {
        name: "Victor Nwosu",
        rating: 4,
        comment: "Good quality billboard. Attracts lots of attention.",
        date: "Dec 24, 2025",
        verified: true
      }
    ],
    relatedProducts: [15, 28, 31]
  },
  {
    id: 22,
    name: "Original Jersey Prints",
    price: "25,000",
    category: "Prints",
    image: "/image/Original-Jersey.png",
    unit: "Per one",
    description: "Premium sports jerseys with custom printing. Perfect for teams, tournaments, and corporate sports events.",
    features: [
      "High-quality jersey fabric",
      "Sublimation printing",
      "Breathable material",
      "Custom designs",
      "Team numbers & names",
      "Professional finish"
    ],
    specifications: {
      material: "Polyester Jersey",
      printing: "Sublimation Print",
      sizes: "S, M, L, XL, XXL",
      design: "Full Customization",
      durability: "Wash-resistant",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      {
        name: "Coach Emeka Obi",
        rating: 5,
        comment: "Perfect jerseys for our football team! Quality is top-notch.",
        date: "Jan 5, 2026",
        verified: true
      },
      {
        name: "Aisha Mohammed",
        rating: 5,
        comment: "Beautiful prints that don't fade. My team loves them!",
        date: "Jan 1, 2026",
        verified: true
      },
      {
        name: "Daniel Okoro",
        rating: 4,
        comment: "Great quality jerseys. Comfortable and professional.",
        date: "Dec 27, 2025",
        verified: true
      }
    ],
    relatedProducts: [3, 27, 55]
  },
  {
    id: 23,
    name: "Double side Business Card",
    price: "35,000",
    category: "Branding",
    image: "/image/Double-side.png",
    unit: "Per one",
    description: "Premium double-sided business cards with special finishes. Make a lasting impression with luxury cardstock.",
    features: [
      "Premium 350gsm cardstock",
      "Double-sided printing",
      "Special finishes available",
      "Embossing/Spot UV options",
      "Luxury feel",
      "Professional design"
    ],
    specifications: {
      size: "90mm x 50mm",
      paper: "350gsm Premium Card",
      printing: "Full Color Both Sides",
      finishing: "Matte/Glossy/Spot UV",
      quantity: "200 pieces",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      {
        name: "Barrister Tunde Adeyemi",
        rating: 5,
        comment: "Luxury business cards! Clients are always impressed.",
        date: "Jan 4, 2026",
        verified: true
      },
      {
        name: "Nkechi Okafor",
        rating: 5,
        comment: "The spot UV finish is gorgeous! Worth every naira.",
        date: "Dec 30, 2025",
        verified: true
      },
      {
        name: "Yusuf Abubakar",
        rating: 5,
        comment: "Premium quality cards. Great for networking.",
        date: "Dec 26, 2025",
        verified: true
      }
    ],
    relatedProducts: [2, 10, 37]
  },
  {
    id: 24,
    name: "Outdoor Signage",
    price: "300,000",
    category: "Design",
    image: "/image/Outdoor-Signage.png",
    unit: "Per piece",
    description: "Professional outdoor signage for businesses. Illuminated and non-illuminated options available.",
    features: [
      "Weather-resistant materials",
      "LED illumination option",
      "Aluminum frame",
      "3D letters available",
      "Professional installation",
      "Long-lasting durability"
    ],
    specifications: {
      material: "Aluminum/Acrylic/Steel",
      sizes: "Custom Sizes",
      illumination: "LED/Non-LED",
      installation: "Professional Service",
      warranty: "1-2 Years",
      turnaround: "10-14 Business Days"
    },
    reviews: [
      {
        name: "Mr. Adekunle Ogunleye",
        rating: 5,
        comment: "Excellent signage for our shop! Very visible at night with LED.",
        date: "Jan 3, 2026",
        verified: true
      },
      {
        name: "Mrs. Chioma Eze",
        rating: 5,
        comment: "Professional installation and quality materials. Highly recommended!",
        date: "Dec 29, 2025",
        verified: true
      },
      {
        name: "Ibrahim Suleiman",
        rating: 5,
        comment: "Worth the investment! Attracted more customers to my business.",
        date: "Dec 21, 2025",
        verified: true
      }
    ],
    relatedProducts: [25, 47, 52]
  },
  {
    id: 25,
    name: "Indoor Signage",
    price: "60,000",
    category: "Prints",
    image: "/image/Indoor-Signage.png",
    unit: "Per piece",
    description: "Professional indoor signage for offices, shops, and facilities. Clean and modern designs.",
    features: [
      "Acrylic/PVC materials",
      "3D lettering options",
      "Clean modern design",
      "Easy installation",
      "Various mounting options",
      "Custom branding"
    ],
    specifications: {
      material: "Acrylic/PVC/Foam Board",
      sizes: "Custom Dimensions",
      thickness: "3mm-10mm",
      mounting: "Wall/Ceiling/Standoff",
      finish: "Matte/Glossy",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      {
        name: "Dr. Oluwaseun Adebayo",
        rating: 5,
        comment: "Beautiful signage for my clinic! Professional and clean look.",
        date: "Jan 5, 2026",
        verified: true
      },
      {
        name: "Grace Okonkwo",
        rating: 5,
        comment: "Perfect for our office reception. Installation was smooth.",
        date: "Jan 2, 2026",
        verified: true
      },
      {
        name: "Mahmud Bello",
        rating: 4,
        comment: "Good quality indoor signs. Very professional finish.",
        date: "Dec 28, 2025",
        verified: true
      }
    ],
    relatedProducts: [24, 47, 32]
  },
  {
    id: 26,
    name: "Feather Banner",
    price: "25,000",
    category: "Branding",
    image: "/image/Feather-Banner.png",
    unit: "Per piece",
    description: "Eye-catching feather banners for outdoor promotions. Portable and attention-grabbing display solution.",
    features: [
      "Lightweight & portable",
      "Wind-resistant design",
      "Easy assembly",
      "Fiberglass pole",
      "Ground spike included",
      "Vibrant printing"
    ],
    specifications: {
      height: "3-5 meters",
      material: "Polyester Fabric",
      printing: "Dye Sublimation",
      base: "Water/Ground Base",
      pole: "Fiberglass",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      {
        name: "Folake Williams",
        rating: 5,
        comment: "Great for outdoor events! Very visible and easy to set up.",
        date: "Jan 4, 2026",
        verified: true
      },
      {
        name: "Chukwuma Obi",
        rating: 5,
        comment: "Perfect for my shop entrance. Attracts customers!",
        date: "Dec 31, 2025",
        verified: true
      },
      {
        name: "Halima Hassan",
        rating: 4,
        comment: "Good quality banner. Withstands wind well.",
        date: "Dec 26, 2025",
        verified: true
      }
    ],
    relatedProducts: [18, 28, 30]
  },
  {
    id: 27,
    name: "Branded Hoodie",
    price: "12,000",
    category: "Prints",
    image: "/image/Branded-Hoodie.png",
    unit: "Per one",
    description: "Custom branded hoodies for teams, events, and corporate wear. Comfortable and stylish.",
    features: [
      "Premium cotton blend",
      "Screen print/embroidery",
      "Multiple color options",
      "Adjustable hood",
      "Kangaroo pocket",
      "Sizes S-XXL"
    ],
    specifications: {
      material: "Cotton/Polyester Blend",
      printing: "Screen Print/Embroidery",
      sizes: "S, M, L, XL, XXL",
      weight: "280-320gsm",
      colors: "Multiple Options",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      {
        name: "Biodun Akinola",
        rating: 5,
        comment: "Very comfortable hoodies! The embroidery is top quality.",
        date: "Jan 5, 2026",
        verified: true
      },
      {
        name: "Jennifer Ade",
        rating: 5,
        comment: "Perfect for our team! Great quality and fit.",
        date: "Jan 1, 2026",
        verified: true
      },
      {
        name: "Abdullahi Musa",
        rating: 4,
        comment: "Good quality hoodies. Worth the price.",
        date: "Dec 29, 2025",
        verified: true
      }
    ],
    relatedProducts: [3, 22, 48]
  },
  {
    id: 28,
    name: "Backdrop Banners",
    price: "45,000",
    category: "Branding",
    image: "/image/Backdrop-Banners.png",
    unit: "Per piece",
    description: "Professional backdrop banners for events, photo sessions, and exhibitions. Create stunning backgrounds.",
    features: [
      "High-resolution printing",
      "Wrinkle-resistant fabric",
      "Easy to transport",
      "Reusable material",
      "Various sizes available",
      "Frame options"
    ],
    specifications: {
      material: "Flex/Fabric Banner",
      sizes: "8ft x 8ft (Custom available)",
      printing: "Full Color HD",
      finish: "Matte/Semi-Gloss",
      mounting: "Frame/Stand included",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      {
        name: "Event Planner Funke",
        rating: 5,
        comment: "Perfect for all our events! Print quality is amazing.",
        date: "Jan 4, 2026",
        verified: true
      },
      {
        name: "Pastor John Okafor",
        rating: 5,
        comment: "Beautiful backdrop for our church events. Very professional!",
        date: "Dec 30, 2025",
        verified: true
      },
      {
        name: "Ngozi Ibe",
        rating: 4,
        comment: "Great for photo sessions. Easy to set up.",
        date: "Dec 25, 2025",
        verified: true
      }
    ],
    relatedProducts: [31, 21, 18]
  },
  {
    id: 29,
    name: "A5 jotter",
    price: "1,200",
    category: "Design",
    image: "/image/A5-jotter3.png",
    unit: "Per 50",
    description: "Bulk A5 jotters for corporate gifts and events. Affordable solution for large orders.",
    features: [
      "Bulk pricing available",
      "Custom branding",
      "Quality paper",
      "Spiral binding",
      "Perfect for events",
      "Corporate gifting"
    ],
    specifications: {
      size: "A5 (148 x 210mm)",
      pages: "80 pages",
      paper: "70gsm Bond Paper",
      cover: "250gsm Card Cover",
      binding: "Spiral Bound",
      turnaround: "4-6 Business Days"
    },
    reviews: [
      {
        name: "Corporate Relations - Sarah",
        rating: 5,
        comment: "Ordered 200 for our conference. Everyone loved them!",
        date: "Jan 3, 2026",
        verified: true
      },
      {
        name: "Uche Okeke",
        rating: 5,
        comment: "Great bulk pricing. Quality is consistent across all units.",
        date: "Dec 29, 2025",
        verified: true
      },
      {
        name: "Fatima Abdullahi",
        rating: 4,
        comment: "Good for corporate gifts. Fast delivery on bulk order.",
        date: "Dec 23, 2025",
        verified: true
      }
    ],
    relatedProducts: [14, 16, 44]
  },
  {
    id: 30,
    name: "Flag Banner",
    price: "0,000",
    category: "Prints",
    image: "/image/Flag-Banner.png",
    unit: "Per piece",
    description: "Custom flag banners for outdoor advertising and events. Wind-resistant and eye-catching.",
    features: [
      "Wind-resistant design",
      "Durable fabric",
      "Vibrant colors",
      "Ground spike included",
      "Easy to assemble",
      "Portable solution"
    ],
    specifications: {
      height: "2.5-4 meters",
      material: "Polyester Fabric",
      printing: "Dye Sublimation",
      base: "Ground/Water Base",
      pole: "Aluminum/Fiberglass",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      {
        name: "Solomon Adebisi",
        rating: 5,
        comment: "Perfect for roadside advertising! Very durable.",
        date: "Jan 5, 2026",
        verified: true
      },
      {
        name: "Blessing Okonkwo",
        rating: 5,
        comment: "Great visibility from distance. Wind doesn't affect it much.",
        date: "Jan 1, 2026",
        verified: true
      },
      {
        name: "Ahmed Hassan",
        rating: 4,
        comment: "Good quality flag banner. Easy to install.",
        date: "Dec 27, 2025",
        verified: true
      }
    ],
    relatedProducts: [26, 18, 21]
  },
  {
    id: 31,
    name: "Backdrop",
    price: "75,000",
    category: "Branding",
    image: "/image/Backdrop.png",
    unit: "Per piece",
    description: "Premium backdrop for professional events, weddings, and photo studios. High-quality seamless background.",
    features: [
      "Seamless design",
      "Professional finish",
      "Wrinkle-free fabric",
      "Vibrant HD printing",
      "Frame system included",
      "Easy setup"
    ],
    specifications: {
      material: "Premium Fabric/Vinyl",
      sizes: "10ft x 8ft (Custom)",
      printing: "HD Dye Sublimation",
      finish: "Matte Fabric",
      stand: "Adjustable Frame",
      turnaround: "4-6 Business Days"
    },
    reviews: [
      {
        name: "Photographer Tunde",
        rating: 5,
        comment: "Perfect for studio shoots! Colors are vibrant and no wrinkles.",
        date: "Jan 4, 2026",
        verified: true
      },
      {
        name: "Wedding Planner Amara",
        rating: 5,
        comment: "Used for multiple weddings. Always looks professional!",
        date: "Dec 31, 2025",
        verified: true
      },
      {
        name: "Kemi Olowu",
        rating: 5,
        comment: "Excellent quality backdrop. Worth the investment.",
        date: "Dec 26, 2025",
        verified: true
      }
    ],
    relatedProducts: [28, 35, 32]
  },
  {
    id: 32,
    name: "Canvas Prints",
    price: "25,000",
    category: "Branding",
    image: "/image/Canvas-prints.png",
    unit: "Per one",
    description: "Premium canvas prints for art, photography, and home decor. Gallery-quality printing on stretched canvas.",
    features: [
      "Museum-quality canvas",
      "Stretched on frame",
      "Fade-resistant inks",
      "Ready to hang",
      "Various sizes",
      "Protective coating"
    ],
    specifications: {
      material: "Premium Canvas Fabric",
      sizes: "Custom (A4-A0)",
      frame: "Wooden Stretcher Bars",
      printing: "Giclée Print",
      coating: "UV Protective",
      turnaround: "4-6 Business Days"
    },
    reviews: [
      {
        name: "Art Lover Chioma",
        rating: 5,
        comment: "Beautiful canvas print! Colors are rich and vibrant.",
        date: "Jan 5, 2026",
        verified: true
      },
      {
        name: "Interior Designer Femi",
        rating: 5,
        comment: "Perfect for client projects. Professional quality!",
        date: "Jan 2, 2026",
        verified: true
      },
      {
        name: "Victoria Nnamdi",
        rating: 4,
        comment: "Great canvas quality. Looks amazing on the wall.",
        date: "Dec 28, 2025",
        verified: true
      }
    ],
    relatedProducts: [60, 45, 31]
  },
  {
    id: 33,
    name: "Face Cap Branding",
    price: "5,000",
    category: "Branding",
    image: "/image/Face-cap.png",
    unit: "Per one",
    description: "Custom branded face caps for corporate wear, events, and promotional giveaways.",
    features: [
      "Embroidery/print options",
      "Quality cotton blend",
      "Adjustable strap",
      "Various colors",
      "Bulk discounts",
      "Durable construction"
    ],
    specifications: {
      material: "Cotton/Polyester Blend",
      branding: "Embroidery/Screen Print",
      closure: "Adjustable Snapback",
      colors: "Multiple Options",
      sizes: "One Size Fits Most",
      turnaround: "4-6 Business Days"
    },
    reviews: [
      {
        name: "Adeola Fashola",
        rating: 5,
        comment: "Great caps for our team! Embroidery looks professional.",
        date: "Jan 4, 2026",
        verified: true
      },
      {
        name: "Babatunde Lawal",
        rating: 5,
        comment: "Perfect for promotional events. Good quality at fair price.",
        date: "Dec 30, 2025",
        verified: true
      },
      {
        name: "Chinwe Okeke",
        rating: 4,
        comment: "Nice caps. Comfortable and well-made.",
        date: "Dec 24, 2025",
        verified: true
      }
    ],
    relatedProducts: [41, 43, 27]
  },
  {
    id: 34,
    name: "Road Poll banner",
    price: "0,000",
    category: "Prints",
    image: "/image/Road-poll.png",
    unit: "Per piece",
    description: "Road poll banners for maximum visibility on highways and busy streets. Weather-resistant outdoor advertising.",
    features: [
      "Heavy-duty material",
      "UV-resistant printing",
      "Wind-resistant design",
      "Reinforced edges",
      "Mounting hardware",
      "Large format"
    ],
    specifications: {
      material: "PVC Flex Banner",
      sizes: "Custom Large Format",
      printing: "UV Digital Print",
      finishing: "Eyelets & Reinforcement",
      durability: "12+ months outdoor",
      turnaround: "4-6 Business Days"
    },
    reviews: [
      {
        name: "Business Owner Segun",
        rating: 5,
        comment: "Excellent visibility from the highway! Very durable.",
        date: "Jan 3, 2026",
        verified: true
      },
      {
        name: "Rahman Tijani",
        rating: 5,
        comment: "Survived heavy rain and wind. Great investment!",
        date: "Dec 29, 2025",
        verified: true
      },
      {
        name: "Mrs. Bukola Adeniyi",
        rating: 4,
        comment: "Good for roadside advertising. Professional installation.",
        date: "Dec 22, 2025",
        verified: true
      }
    ],
    relatedProducts: [21, 15, 28]
  },
  {
    id: 35,
    name: "Birthday Banner",
    price: "65,000",
    category: "Branding",
    image: "/image/Birthday-banner.png",
    unit: "Per piece",
    description: "Custom birthday banners for celebrations. Colorful and festive designs for memorable parties.",
    features: [
      "Custom personalization",
      "Vibrant colors",
      "Large format printing",
      "Indoor/outdoor use",
      "Easy hanging",
      "Reusable material"
    ],
    specifications: {
      material: "Flex/Vinyl Banner",
      sizes: "6ft x 3ft (Custom)",
      printing: "Full Color",
      finish: "Glossy/Matte",
      mounting: "Eyelets included",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      {
        name: "Party Planner Bisola",
        rating: 5,
        comment: "Perfect for birthday parties! Colors are so vibrant.",
        date: "Jan 5, 2026",
        verified: true
      },
      {
        name: "Oluwatoyin Adebisi",
        rating: 5,
        comment: "My daughter's party was amazing with this banner! Thank you!",
        date: "Jan 1, 2026",
        verified: true
      },
      {
        name: "Samuel Eze",
        rating: 4,
        comment: "Great birthday banner. Good quality and fast delivery.",
        date: "Dec 27, 2025",
        verified: true
      }
    ],
    relatedProducts: [31, 28, 57]
  },
  {
    id: 36,
    name: "Custom Calendar",
    price: "6,500",
    category: "Design",
    image: "/image/Custom-calender.png",
    unit: "Per 50",
    description: "Custom calendars for corporate gifting and promotions. Wall or desk calendars with your branding.",
    features: [
      "12-month custom design",
      "Company branding",
      "Quality paper stock",
      "Wire-O binding",
      "Wall/desk options",
      "Bulk pricing"
    ],
    specifications: {
      sizes: "A4/A5 Wall/Desk",
      paper: "170gsm Glossy Paper",
      pages: "13 sheets (Cover + 12 months)",
      binding: "Wire-O/Spiral",
      printing: "Full Color",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      {
        name: "Corporate Manager Chukwudi",
        rating: 5,
        comment: "Perfect corporate gift! Clients love them every year.",
        date: "Jan 4, 2026",
        verified: true
      },
      {
        name: "Khadija Sani",
        rating: 5,
        comment: "Beautiful calendars with our company branding. Excellent!",
        date: "Dec 30, 2025",
        verified: true
      },
      {
        name: "Daniel Okoro",
        rating: 4,
        comment: "Good quality calendars. Great for end of year gifts.",
        date: "Dec 23, 2025",
        verified: true
      }
    ],
    relatedProducts: [51, 8, 14]
  },
  {
    id: 37,
    name: "Envelope Printing",
    price: "25,000",
    category: "Prints",
    image: "/image/Envelope.png",
    unit: "Per 50",
    description: "Custom printed envelopes for business correspondence. Professional branding for every letter.",
    features: [
      "Multiple sizes available",
      "Full color printing",
      "Company branding",
      "Quality paper",
      "Gummed seal",
      "Window options"
    ],
    specifications: {
      sizes: "C5/DL/C4",
      paper: "100gsm Envelope Paper",
      printing: "Full Color (Front/Back)",
      seal: "Gummed/Self-Seal",
      window: "With/Without Window",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      {
        name: "Secretary Mercy Udoh",
        rating: 5,
        comment: "Professional envelopes! Makes our mail look very corporate.",
        date: "Jan 3, 2026",
        verified: true
      },
      {
        name: "Tope Adeyemi",
        rating: 5,
        comment: "Quality envelopes with perfect printing. Very satisfied!",
        date: "Dec 29, 2025",
        verified: true
      },
      {
        name: "Chief Adamu Bello",
        rating: 4,
        comment: "Good for official correspondence. Professional finish.",
        date: "Dec 21, 2025",
        verified: true
      }
    ],
    relatedProducts: [10, 2, 6]
  },
  {
    id: 38,
    name: "Card Label",
    price: "18,000",
    category: "Branding",
    image: "/image/Card-Label.png",
    unit: "Per 100",
    description: "Custom card labels for products, packaging, and branding. Professional die-cut labels.",
    features: [
      "Die-cut shapes",
      "Glossy/matte finish",
      "Strong adhesive",
      "Full color printing",
      "Various materials",
      "Waterproof options"
    ],
    specifications: {
      material: "Vinyl/Paper Sticker",
      sizes: "Custom Die-Cut",
      printing: "Full Color CMYK",
      finish: "Glossy/Matte/Clear",
      adhesive: "Permanent/Removable",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      {
        name: "Product Manager Ifeanyi",
        rating: 5,
        comment: "Perfect labels for our products! Professional finish.",
        date: "Jan 5, 2026",
        verified: true
      },
      {
        name: "Zainab Mohammed",
        rating: 5,
        comment: "High quality labels. Strong adhesive that lasts!",
        date: "Jan 1, 2026",
        verified: true
      },
      {
        name: "Chinedu Obi",
        rating: 4,
        comment: "Good for product labeling. Custom shapes work perfectly.",
        date: "Dec 26, 2025",
        verified: true
      }
    ],
    relatedProducts: [5, 20, 46]
  },
  {
    id: 39,
    name: "A5 Paper Bag",
    price: "20,600",
    category: "Prints",
    image: "/image/A5-Paper.png",
    unit: "Per 100",
    description: "Eco-friendly A5 paper bags for retail and events. Custom branded shopping bags.",
    features: [
      "Eco-friendly paper",
      "Custom printing",
      "Reinforced handles",
      "Various sizes",
      "Bulk pricing",
      "Recyclable material"
    ],
    specifications: {
      size: "A5 (170 x 240mm)",
      material: "Kraft/White Paper",
      printing: "Full Color/Single Color",
      handles: "Twisted Paper/Flat",
      weight: "120-150gsm",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      {
        name: "Boutique Owner Amarachi",
        rating: 5,
        comment: "Perfect size for my products! Customers love the branded bags.",
        date: "Jan 4, 2026",
        verified: true
      },
      {
        name: "Tayo Adeyemi",
        rating: 5,
        comment: "Eco-friendly and strong. Great for retail packaging!",
        date: "Dec 31, 2025",
        verified: true
      },
      {
        name: "Hadiza Abubakar",
        rating: 4,
        comment: "Good quality paper bags. Handles are sturdy.",
        date: "Dec 25, 2025",
        verified: true
      }
    ],
    relatedProducts: [40, 56, 12]
  },
  {
    id: 40,
    name: "A2 Paper Bag",
    price: "2,000",
    category: "Prints",
    image: "/image/A2-Paper.png",
    unit: "Per one",
    description: "Large A2 paper bags for shopping and gifts. Durable and spacious with custom branding.",
    features: [
      "Large capacity",
      "Strong construction",
      "Custom branding",
      "Reinforced base",
      "Rope/twisted handles",
      "Premium finish"
    ],
    specifications: {
      size: "A2 (300 x 400mm)",
      material: "Kraft/Coated Paper",
      printing: "Full Color",
      handles: "Rope/PP/Twisted",
      weight: "150-200gsm",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      {
        name: "Gift Shop Owner Obinna",
        rating: 5,
        comment: "Perfect for gift packaging! Strong and attractive.",
        date: "Jan 3, 2026",
        verified: true
      },
      {
        name: "Fatima Bello",
        rating: 5,
        comment: "Large bags that can hold plenty! Quality is excellent.",
        date: "Dec 29, 2025",
        verified: true
      },
      {
        name: "Kenneth Eze",
        rating: 4,
        comment: "Good size for shopping bags. Durable handles.",
        date: "Dec 23, 2025",
        verified: true
      }
    ],
    relatedProducts: [39, 56, 53]
  },
  {
    id: 41,
    name: "Face Cap",
    price: "5,000",
    category: "Branding",
    image: "/image/Face-Cap2.png",
    unit: "Per one",
    description: "Quality face caps with custom embroidery. Perfect for teams, events, and corporate branding.",
    features: [
      "Premium embroidery",
      "Cotton fabric",
      "Adjustable fit",
      "Multiple colors",
      "3D puff embroidery",
      "Breathable material"
    ],
    specifications: {
      material: "100% Cotton",
      branding: "3D Embroidery",
      closure: "Adjustable Buckle",
      colors: "10+ Options",
      sizes: "One Size",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      {
        name: "Sports Coach Chidinma",
        rating: 5,
        comment: "Quality caps with beautiful embroidery! Team loves them.",
        date: "Jan 5, 2026",
        verified: true
      },
      {
        name: "Usman Ibrahim",
        rating: 5,
        comment: "Perfect for our company uniform. Professional finish!",
        date: "Jan 2, 2026",
        verified: true
      },
      {
        name: "Peace Akinola",
        rating: 4,
        comment: "Nice caps. Comfortable and well-branded.",
        date: "Dec 28, 2025",
        verified: true
      }
    ],
    relatedProducts: [33, 43, 27]
  },
  {
    id: 42,
    name: "Silicone Wristband",
    price: "200",
    category: "Design",
    image: "/image/Silicone-Wristband.png",
    unit: "Per one",
    description: "Custom silicone wristbands for events, fundraisers, and promotions. Durable and comfortable.",
    features: [
      "Soft silicone material",
      "Debossed/embossed text",
      "Multiple colors",
      "Adjustable sizes",
      "Water resistant",
      "Bulk discounts"
    ],
    specifications: {
      material: "100% Silicone",
      width: "12mm-25mm",
      printing: "Debossed/Embossed/Printed",
      sizes: "Adult/Youth/Child",
      colors: "Custom Pantone Match",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      {
        name: "Event Organizer Segun",
        rating: 5,
        comment: "Perfect for our charity event! Affordable for large orders.",
        date: "Jan 4, 2026",
        verified: true
      },
      {
        name: "Ngozi Ibe",
        rating: 5,
        comment: "Great quality wristbands. Comfortable to wear all day.",
        date: "Dec 30, 2025",
        verified: true
      },
      {
        name: "Yakubu Musa",
        rating: 4,
        comment: "Good for promotional campaigns. Durable material.",
        date: "Dec 24, 2025",
        verified: true
      }
    ],
    relatedProducts: [54, 33, 13]
  },
  {
    id: 43,
    name: "Face Cap",
    price: "5,000",
    category: "Prints",
    image: "/image/Face-Cap3.png",
    unit: "Per one",
    description: "Classic face caps with screen printing. Affordable option for bulk orders and events.",
    features: [
      "Screen print branding",
      "Cotton/polyester blend",
      "Snapback closure",
      "Various colors",
      "Cost-effective",
      "Bulk friendly"
    ],
    specifications: {
      material: "Cotton/Polyester",
      branding: "Screen Print",
      closure: "Plastic Snapback",
      colors: "15+ Options",
      sizes: "One Size Fits All",
      turnaround: "4-6 Business Days"
    },
    reviews: [
      {
        name: "Adewale Johnson",
        rating: 5,
        comment: "Great for promotional giveaways! Good quality at low price.",
        date: "Jan 3, 2026",
        verified: true
      },
      {
        name: "Rukayat Lawal",
        rating: 4,
        comment: "Nice caps for events. Print quality is decent.",
        date: "Dec 29, 2025",
        verified: true
      },
      {
        name: "Victor Nwosu",
        rating: 4,
        comment: "Good value for money. Perfect for bulk orders.",
        date: "Dec 22, 2025",
        verified: true
      }
    ],
    relatedProducts: [33, 41, 3]
  },
  {
    id: 44,
    name: "A5 Birthday NoteBook",
    price: "1,800",
    category: "Branding",
    image: "/image/A5-Birthday.png",
    unit: "Per one",
    description: "Special birthday notebooks with personalized covers. Perfect gifts for celebrations.",
    features: [
      "Custom personalization",
      "Colorful designs",
      "Quality paper",
      "Hard cover option",
      "Gift-ready packaging",
      "Various themes"
    ],
    specifications: {
      size: "A5 (148 x 210mm)",
      pages: "100 pages",
      paper: "80gsm Cream Paper",
      cover: "Hard/Soft Cover",
      binding: "Perfect Bound",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      {
        name: "Gift Buyer Blessing",
        rating: 5,
        comment: "Perfect birthday gift! Personalization makes it special.",
        date: "Jan 5, 2026",
        verified: true
      },
      {
        name: "Ibrahim Yusuf",
        rating: 5,
        comment: "Beautiful notebooks! My niece loved her personalized one.",
        date: "Jan 1, 2026",
        verified: true
      },
      {
        name: "Dr. Adebayo Ogunlesi",
        rating: 4,
        comment: "Nice quality notebook. Great for gifts.",
        date: "Dec 27, 2025",
        verified: true
      }
    ],
    relatedProducts: [16, 14, 59]
  },
  {
    id: 45,
    name: "Acrylic Award",
    price: "20,000",
    category: "Branding",
    image: "/image/Acrylic-Award.png",
    unit: "Per piece",
    description: "Premium acrylic awards for recognition and appreciation. Elegant designs with custom engraving.",
    features: [
      "Clear acrylic material",
      "Laser engraving",
      "Custom designs",
      "Various shapes/sizes",
      "Premium finish",
      "Gift box included"
    ],
    specifications: {
      material: "Premium Acrylic",
      thickness: "8mm-15mm",
      engraving: "Laser/UV Print",
      sizes: "Small/Medium/Large",
      finish: "Polished Edges",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      {
        name: "HR Manager Chioma",
        rating: 5,
        comment: "Beautiful awards for employee recognition! Very professional.",
        date: "Jan 4, 2026",
        verified: true
      },
      {
        name: "Ahmed Tijani",
        rating: 5,
        comment: "Quality acrylic with perfect engraving. Highly recommend!",
        date: "Dec 30, 2025",
        verified: true
      },
      {
        name: "Gloria Eze",
        rating: 4,
        comment: "Elegant awards. Recipients were very pleased.",
        date: "Dec 25, 2025",
        verified: true
      }
    ],
    relatedProducts: [60, 32, 54]
  },
  {
    id: 46,
    name: "Sticker",
    price: "100",
    category: "Branding",
    image: "/image/Stickers3.png",
    unit: "Per one",
    description: "Single custom stickers for individual use. Perfect for personal branding and small projects.",
    features: [
      "Waterproof vinyl",
      "Custom design",
      "Die-cut shape",
      "Strong adhesive",
      "UV resistant",
      "Small quantity friendly"
    ],
    specifications: {
      material: "Vinyl Sticker",
      sizes: "Custom (Min 5cm)",
      printing: "Full Color",
      finish: "Glossy/Matte",
      adhesive: "Permanent",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      {
        name: "Small Business Owner Femi",
        rating: 5,
        comment: "Perfect for testing designs! Quality is excellent.",
        date: "Jan 3, 2026",
        verified: true
      },
      {
        name: "Mary Okafor",
        rating: 5,
        comment: "Great for personal projects. Durable and waterproof!",
        date: "Dec 31, 2025",
        verified: true
      },
      {
        name: "Musa Abdullahi",
        rating: 4,
        comment: "Good quality single stickers. Fast delivery.",
        date: "Dec 26, 2025",
        verified: true
      }
    ],
    relatedProducts: [5, 20, 38]
  },
  {
    id: 47,
    name: "Neon Signage",
    price: "120,000",
    category: "Branding",
    image: "/image/Neon-Signage.png",
    unit: "Per piece",
    description: "LED neon signage for modern businesses. Eye-catching illuminated displays for shops and restaurants.",
    features: [
      "LED neon flex",
      "Energy efficient",
      "Custom designs",
      "Indoor/outdoor use",
      "Long lifespan",
      "Remote control option"
    ],
    specifications: {
      material: "LED Neon Flex",
      power: "12V Low Voltage",
      colors: "RGB/Single Color",
      mounting: "Acrylic Backing",
      warranty: "1 Year",
      turnaround: "10-14 Business Days"
    },
    reviews: [
      {
        name: "Restaurant Owner Tunde",
        rating: 5,
        comment: "Amazing neon sign! Attracts customers at night. Worth it!",
        date: "Jan 5, 2026",
        verified: true
      },
      {
        name: "Amara Obi",
        rating: 5,
        comment: "Beautiful and energy efficient. Installation was professional!",
        date: "Jan 1, 2026",
        verified: true
      },
      {
        name: "Suleiman Hassan",
        rating: 4,
        comment: "Great neon signage. Adds modern touch to my shop.",
        date: "Dec 27, 2025",
        verified: true
      }
    ],
    relatedProducts: [24, 25, 52]
  },
  {
    id: 48,
    name: "Reflective Jacket",
    price: "5,000",
    category: "Prints",
    image: "/image/Reflective-jacket.png",
    unit: "Per one",
    description: "Safety reflective jackets with custom branding. Essential for security, construction, and event staff.",
    features: [
      "High-visibility reflective strips",
      "Custom logo printing",
      "Durable fabric",
      "Multiple pockets",
      "Various sizes",
      "Safety certified"
    ],
    specifications: {
      material: "Polyester/Cotton Blend",
      reflective: "3M Reflective Tape",
      branding: "Screen Print/Embroidery",
      sizes: "M, L, XL, XXL",
      colors: "Yellow/Orange/Green",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      {
        name: "Safety Officer Oluwatoyin",
        rating: 5,
        comment: "Excellent safety jackets! Highly visible and comfortable.",
        date: "Jan 4, 2026",
        verified: true
      },
      {
        name: "Construction Manager Chukwudi",
        rating: 5,
        comment: "Quality jackets for our workers. Meet all safety standards!",
        date: "Dec 30, 2025",
        verified: true
      },
      {
        name: "Event Coordinator Khadija",
        rating: 4,
        comment: "Good for event staff. Branding looks professional.",
        date: "Dec 24, 2025",
        verified: true
      }
    ],
    relatedProducts: [27, 3, 22]
  },
  // Add more products as needed
];

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState("Matte");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageZoomed, setImageZoomed] = useState(false);
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductData();
  }, [params.id]);

  const fetchProductData = async () => {
    try {
      const response = await fetch("/api/products");
      const products = await response.json();
      setAllProducts(products);
      
      // Find by slug first (for new URLs), then fallback to ID (for old URLs)
      const foundProduct = products.find((p) => p.slug === params.id) || 
                          products.find((p) => p.id === parseInt(params.id));
      
      if (!foundProduct) {
        // Fallback to default products
        const fallbackProduct = DEFAULT_PRODUCTS.find((p) => p.slug === params.id) || 
                               DEFAULT_PRODUCTS.find((p) => p.id === parseInt(params.id));
        setProduct(fallbackProduct);
        setAllProducts(DEFAULT_PRODUCTS);
      } else {
        setProduct(foundProduct);
      }
    } catch (error) {
      // Fallback to default products
      const fallbackProduct = DEFAULT_PRODUCTS.find((p) => p.slug === params.id) || 
                             DEFAULT_PRODUCTS.find((p) => p.id === parseInt(params.id));
      setProduct(fallbackProduct);
      setAllProducts(DEFAULT_PRODUCTS);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/Products" className="text-[var(--primary-color)] underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const images = product.gallery || [product.image, product.image, product.image];
  const relatedProducts = allProducts.filter(p => 
    product.relatedProducts?.includes(p.id)
  );

  // Default features if not specified
  const defaultFeatures = [
    "High-quality printing",
    "Professional finish",
    "Fast delivery available",
    "Affordable pricing",
    "Custom designs welcome"
  ];

  // Default specifications if not specified
  const defaultSpecifications = {
    quality: "Premium Quality",
    printing: "Full Color",
    delivery: "2-5 Business Days",
    customization: "Available"
  };

  // Default reviews if not specified
  const defaultReviews = [
    {
      name: "Oluwaseun Adebayo",
      rating: 5,
      comment: "Very satisfied with the quality. Aphamed Prints always delivers excellent work!",
      date: "Jan 2, 2026",
      verified: true
    },
    {
      name: "Blessing Okonkwo",
      rating: 5,
      comment: "Outstanding service and quality. They met my deadline perfectly.",
      date: "Dec 28, 2025",
      verified: true
    },
    {
      name: "Tunde Bakare",
      rating: 4,
      comment: "Good quality prints. Will definitely order again.",
      date: "Dec 20, 2025",
      verified: true
    }
  ];

  const displayFeatures = product.features || defaultFeatures;
  const displaySpecifications = product.specifications || defaultSpecifications;
  const displayReviews = product.reviews || defaultReviews;

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in ordering:\n\n` +
      `Product: ${product.name}\n` +
      `Quantity: ${quantity} ${product.unit}\n` +
      `Finish: ${selectedFinish}\n` +
      `Total: ₦${(parseInt(product.price.replace(/,/g, "")) * quantity).toLocaleString()}\n\n` +
      `Please provide more details.`
    );
    window.open(`https://wa.me/2349091643613?text=${message}`, "_blank");
  };

  const averageRating = displayReviews 
    ? (displayReviews.reduce((acc, r) => acc + r.rating, 0) / displayReviews.length).toFixed(1)
    : 5.0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* BREADCRUMB & BACK BUTTON */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1 text-gray-600 hover:text-[var(--primary-color)] transition-colors group text-sm"
            >
              <HiArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back</span>
            </button>

            <div className="hidden md:flex items-center gap-2 text-xs text-gray-600">
              <Link href="/" className="hover:text-[var(--primary-color)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/Products" className="hover:text-[var(--primary-color)] transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-[var(--primary-color)] font-medium">{product.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS SECTION */}
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* LEFT SIDE - IMAGE GALLERY */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* MAIN IMAGE */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg group">
                <div 
                  className="aspect-square lg:aspect-video lg:max-h-96 relative cursor-pointer"
                  onClick={() => setImageZoomed(true)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      src={images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  {/* ZOOM BUTTON */}
                  <button
                    onClick={() => setImageZoomed(!imageZoomed)}
                    className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <HiZoomIn size={16} className="text-gray-700" />
                  </button>

                  {/* CATEGORY BADGE */}
                  <div className="absolute top-2 left-2 bg-[var(--primary-color)] text-white px-3 py-1 rounded-full font-medium text-xs shadow-md">
                    {product.category}
                  </div>

                  {/* NAVIGATION ARROWS */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                      >
                        <FaChevronLeft className="text-gray-700" size={14} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                      >
                        <FaChevronRight className="text-gray-700" size={14} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* THUMBNAIL GALLERY */}
              {images.length > 1 && (
                <div className="flex justify-center">
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-w-md">
                    {images.map((img, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative aspect-square bg-white rounded-lg overflow-hidden shadow-sm transition-all ${
                        selectedImage === index
                          ? "ring-2 ring-[var(--primary-color)] ring-offset-1"
                          : "hover:shadow-md"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-contain p-1"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
              )}

              {/* IMAGE ZOOM MODAL/LIGHTBOX */}
              {imageZoomed && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
                    onClick={() => setImageZoomed(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="relative max-w-7xl max-h-[90vh] w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* CLOSE BUTTON */}
                      <button
                        onClick={() => setImageZoomed(false)}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
                      >
                        <FaTimes className="text-gray-700" size={20} />
                      </button>

                      {/* ZOOMED IMAGE */}
                      <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                        <img
                          src={images[selectedImage]}
                          alt={product.name}
                          className="w-full h-auto max-h-[90vh] object-contain"
                        />
                      </div>

                      {/* NAVIGATION ARROWS IN MODAL */}
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
                          >
                            <FaChevronLeft className="text-gray-700" size={18} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
                          >
                            <FaChevronRight className="text-gray-700" size={18} />
                          </button>
                        </>
                      )}

                      {/* IMAGE COUNTER */}
                      {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm font-medium text-gray-700">
                          {selectedImage + 1} / {images.length}
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              )}

              {/* TRUST BADGES */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="bg-white rounded-lg p-2 shadow-sm text-center">
                  <FaTruck className="text-[var(--primary-color)] text-lg mx-auto mb-1" />
                  <p className="text-[10px] font-semibold text-gray-700">Fast Delivery</p>
                  <p className="text-[9px] text-gray-500">2-3 Days</p>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm text-center">
                  <FaShieldAlt className="text-[var(--primary-color)] text-lg mx-auto mb-1" />
                  <p className="text-[10px] font-semibold text-gray-700">Quality Assured</p>
                  <p className="text-[9px] text-gray-500">100% Guarantee</p>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm text-center">
                  <FaHeadset className="text-[var(--primary-color)] text-lg mx-auto mb-1" />
                  <p className="text-[10px] font-semibold text-gray-700">24/7 Support</p>
                  <p className="text-[9px] text-gray-500">Always Here</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - PRODUCT INFO */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-24 space-y-3"
            >
              {/* PRODUCT NAME & RATING */}
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-[#1B1B1B] mb-2">
                  {product.name}
                </h1>
                
                {product.reviews && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.floor(averageRating) ? "text-yellow-400" : "text-gray-300"}
                          size={14}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-700">{averageRating}</span>
                    <span className="text-xs text-gray-500">({displayReviews.length} reviews)</span>
                  </div>
                )}
              </div>

              {/* PRICE, QUANTITY & TOTAL ROW */}
              <div className="grid grid-cols-3 gap-2">
                {/* PRICE */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-2 border border-green-100">
                  <p className="text-[9px] text-gray-600 mb-1">Price</p>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[var(--primary-color)]">
                      ₦{product.price}
                    </span>
                    <span className="text-gray-600 text-[9px]">/ {product.unit}</span>
                  </div>
                </div>

                {/* QUANTITY SELECTOR */}
                <div className="bg-white rounded-xl p-2 shadow-sm">
                  <label className="block text-[9px] font-bold text-gray-700 mb-1">
                    Quantity:
                  </label>
                  <div className="flex items-center gap-1">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition-all shadow-sm"
                    >
                      <FaMinus size={8} />
                    </motion.button>
                    
                    <div className="flex-1 text-center">
                      <span className="text-lg font-bold text-[var(--primary-color)]">
                        {quantity}
                      </span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition-all shadow-sm"
                    >
                      <FaPlus size={8} />
                    </motion.button>
                  </div>
                </div>

                {/* TOTAL PRICE */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-2 shadow-lg">
                  <p className="text-[9px] text-gray-300 mb-1">Total</p>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">
                      ₦{(parseInt(product.price.replace(/,/g, "")) * quantity).toLocaleString()}
                    </span>
                    <span className="text-[9px] text-gray-300">{quantity}x</span>
                  </div>
                </div>
              </div>

              {/* DESCRIPTION */}
              {product.description && (
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* FINISH OPTIONS */}
              {product.name.includes("Business Card") && (
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Select Finish:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Matte", "Glossy"].map((finish) => (
                      <motion.button
                        key={finish}
                        onClick={() => setSelectedFinish(finish)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                          selectedFinish === finish
                            ? "border-[var(--primary-color)] bg-[var(--primary-color)] text-white shadow-md"
                            : "border-gray-200 text-gray-700 hover:border-[var(--primary-color)] bg-white"
                        }`}
                      >
                        {selectedFinish === finish && (
                          <FaCheck className="absolute top-1 right-1" size={12} />
                        )}
                        {finish}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-2 gap-2">
                <motion.button
                  onClick={handleWhatsAppOrder}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
                >
                  <FaWhatsapp size={16} />
                  Order Now
                </motion.button>

                <motion.a
                  href="https://wa.me/2349091643613"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border-2 border-[var(--primary-color)] text-[var(--primary-color)] py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[var(--primary-color)] hover:text-white transition-all shadow-sm"
                >
                  Get Quote
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* TABS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* TAB NAVIGATION */}
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "specifications", label: "Specifications" },
                  { id: "reviews", label: `Reviews (${displayReviews.length})` }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 font-semibold text-xs whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? "text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]"
                        : "text-gray-600 hover:text-[var(--primary-color)]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB CONTENT */}
            <div className="p-4">
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {displayFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="w-4 h-4 bg-[var(--primary-color)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <FaCheck className="text-white" size={10} />
                          </div>
                          <p className="text-sm text-gray-700 font-medium">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "specifications" && (
                  <motion.div
                    key="specifications"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Technical Specifications</h3>
                    <div className="space-y-2">
                      {Object.entries(displaySpecifications).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <span className="font-semibold text-sm text-gray-700 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span className="text-sm text-gray-600 font-medium">{value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "reviews" && (
                  <motion.div
                    key="reviews"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Customer Reviews</h3>
                    
                    <div className="space-y-4">
                      {/* RATING SUMMARY */}
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-100">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900">{averageRating}</div>
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <FaStar
                                  key={i}
                                  className={i < Math.floor(averageRating) ? "text-yellow-400" : "text-gray-300"}
                                  size={14}
                                />
                              ))}
                            </div>
                            <p className="text-xs text-gray-600 mt-1">{displayReviews.length} reviews</p>
                          </div>
                          <div className="flex-1">
                            {[5, 4, 3, 2, 1].map((star) => {
                              const count = displayReviews.filter(r => r.rating === star).length;
                              const percentage = (count / displayReviews.length) * 100;
                                return (
                                  <div key={star} className="flex items-center gap-3 mb-2">
                                    <span className="text-sm font-medium w-8">{star}★</span>
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                      <div
                                        className="bg-yellow-400 h-2 rounded-full transition-all"
                                        style={{ width: `${percentage}%` }}
                                      />
                                    </div>
                                    <span className="text-sm text-gray-600 w-12">{count}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>


                      {/* INDIVIDUAL REVIEWS */}
                      <div className="space-y-3">
                        {displayReviews.map((review, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-9 h-9 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {review.name.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-bold text-sm text-gray-900">{review.name}</h4>
                                      {review.verified && (
                                        <MdVerified className="text-[var(--primary-color)]" size={14} />
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-500">{review.date}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <FaStar
                                      key={i}
                                      className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                                      size={12}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
                            </motion.div>
                          ))}
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <h2 className="text-xl font-bold text-[#1B1B1B] mb-4 text-center">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/Products/${relatedProduct.id}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="aspect-square bg-gray-50 p-2">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-[var(--primary-color)]">
                          ₦{relatedProduct.price}
                        </span>
                        <span className="text-xs text-gray-500">{relatedProduct.unit}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* TRUST SECTION */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-8 px-4 mt-8">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold text-xl md:text-2xl text-white leading-tight mb-2">
              APHAMED PRINTS
            </h1>
            <p className="italic text-sm md:text-base font-medium text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Quality is our Job, and Your Satisfaction is our Priority.
            </p>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" size={16} />
              ))}
              <span className="text-white font-bold text-sm ml-2">5.0 Rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
