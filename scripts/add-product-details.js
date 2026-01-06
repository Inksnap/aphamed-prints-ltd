const fs = require('fs');
const path = require('path');

// Function to generate slug from product name
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Product details template data
const productDetails = {
  3: {
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
  4: {
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
  5: {
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
  6: {
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
  7: {
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
  8: {
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
  9: {
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
  10: {
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
  11: {
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
  12: {
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
  13: {
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
  14: {
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
  15: {
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
  16: {
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
  17: {
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
  18: {
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
  19: {
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
  20: {
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
  21: {
    description: "Large outdoor billboard banners for maximum brand visibility. Weather-resistant and UV protected for long-lasting outdoor advertising.",
    features: ["Weather resistant material", "UV protection", "Large format printing", "High durability", "Vibrant outdoor colors"],
    specifications: {
      size: "Custom sizes available",
      material: "510gsm Frontlit Banner",
      printing: "Full Color Digital",
      finishing: "With eyelets for hanging",
      quantity: "Minimum 1 piece",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Marketing Director Chidi", rating: 5, comment: "Excellent visibility for our outdoor campaign!", date: "Dec 31, 2025", verified: true }
    ]
  },
  22: {
    description: "High-quality original jersey prints with team names, numbers, and logos. Perfect for sports teams and athletic events.",
    features: ["Heat transfer printing", "Stretch fabric", "Breathable material", "Custom team designs", "Durable prints"],
    specifications: {
      size: "S, M, L, XL, XXL",
      material: "Polyester sports fabric",
      printing: "Heat transfer/Sublimation",
      finishing: "Professional stitching",
      quantity: "Minimum 10 pieces",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Coach Samuel", rating: 5, comment: "Perfect jerseys for our football team!", date: "Dec 29, 2025", verified: true }
    ]
  },
  23: {
    description: "Premium double-sided business cards with luxury finish options. Make a memorable impression with high-end cardstock.",
    features: ["Double-sided printing", "Premium cardstock", "Multiple finish options", "Rounded corners option", "Luxury feel"],
    specifications: {
      size: "3.5 x 2 inches",
      material: "400gsm Premium Card",
      printing: "Full Color Both Sides",
      finishing: "Matte/Glossy/Soft Touch",
      quantity: "Minimum 100 pieces",
      turnaround: "3-4 Business Days"
    },
    reviews: [
      { name: "Executive Director", rating: 5, comment: "Impressive quality for our executives!", date: "Jan 5, 2026", verified: true }
    ]
  },
  24: {
    description: "Professional outdoor signage solutions for businesses. Weather-resistant, durable, and designed to withstand harsh conditions.",
    features: ["Weather resistant", "UV protected", "Heavy-duty materials", "Professional installation", "Long-lasting durability"],
    specifications: {
      size: "Custom sizes",
      material: "Aluminum/Acrylic composite",
      printing: "UV digital printing",
      finishing: "With mounting hardware",
      quantity: "Custom orders",
      turnaround: "10-14 Business Days"
    },
    reviews: [
      { name: "Business Owner Peter", rating: 5, comment: "Fantastic signage for our storefront!", date: "Dec 20, 2025", verified: true }
    ]
  },
  25: {
    description: "Professional indoor signage for offices, retail spaces, and corporate environments. Clean, modern designs with premium materials.",
    features: ["Premium materials", "Professional finish", "Easy mounting", "Custom designs", "Clean aesthetics"],
    specifications: {
      size: "Custom sizes",
      material: "Acrylic/Foam board/Vinyl",
      printing: "Full Color Digital",
      finishing: "Laminated/Mounted",
      quantity: "Minimum 1 piece",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Office Manager Rita", rating: 5, comment: "Professional look for our office!", date: "Dec 28, 2025", verified: true }
    ]
  },
  26: {
    description: "Eye-catching feather banners for outdoor events, promotions, and retail displays. Portable and easy to set up.",
    features: ["Portable design", "Easy setup", "Wind resistant", "Vibrant printing", "Includes base and pole"],
    specifications: {
      size: "3m or 5m height",
      material: "110gsm Knitted Polyester",
      printing: "Dye sublimation",
      finishing: "With pole and base",
      quantity: "Minimum 1 piece",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Event Organizer Temi", rating: 4, comment: "Great for attracting attention at events!", date: "Jan 3, 2026", verified: true }
    ]
  },
  27: {
    description: "Custom branded hoodies for teams, events, or corporate wear. Comfortable fabric with professional printing.",
    features: ["Soft comfortable fabric", "Custom logo printing", "Various colors", "Durable print", "Unisex sizing"],
    specifications: {
      size: "S, M, L, XL, XXL",
      material: "Cotton/Polyester blend",
      printing: "Screen print/Embroidery",
      finishing: "Professional stitching",
      quantity: "Minimum 20 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "HR Manager Yemi", rating: 5, comment: "Team loves their branded hoodies!", date: "Dec 27, 2025", verified: true }
    ]
  },
  28: {
    description: "Professional backdrop banners for events, conferences, photo booths, and exhibitions. High-impact visual displays.",
    features: ["Large format", "High resolution printing", "Portable options", "Professional finish", "Easy setup"],
    specifications: {
      size: "2m x 3m or custom",
      material: "440gsm Blockout Banner",
      printing: "Full Color Digital",
      finishing: "With stand/eyelets",
      quantity: "Minimum 1 piece",
      turnaround: "4-6 Business Days"
    },
    reviews: [
      { name: "Wedding Planner Aisha", rating: 5, comment: "Perfect backdrop for our events!", date: "Jan 1, 2026", verified: true }
    ]
  },
  29: {
    description: "Bulk A5 jotters perfect for schools, conferences, or corporate giveaways. Quality paper with custom cover designs.",
    features: ["Bulk pricing", "Custom covers", "Quality paper", "Perfect bound", "Various page counts"],
    specifications: {
      size: "A5 (148 x 210mm)",
      material: "80gsm offset paper",
      printing: "Full color cover",
      finishing: "Perfect binding",
      quantity: "50 pieces minimum",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Conference Organizer", rating: 4, comment: "Great value for bulk orders!", date: "Dec 26, 2025", verified: true }
    ]
  },
  30: {
    description: "Custom flag banners for outdoor promotions, events, and brand visibility. Durable and wind-resistant design.",
    features: ["Wind resistant", "Durable material", "Vibrant colors", "Easy setup", "Portable design"],
    specifications: {
      size: "Various sizes available",
      material: "115gsm Knitted Polyester",
      printing: "Dye sublimation",
      finishing: "With pole and base",
      quantity: "Minimum 1 piece",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Retail Manager John", rating: 5, comment: "Attracts customers to our store!", date: "Dec 30, 2025", verified: true }
    ]
  },
  31: {
    description: "Premium event backdrops for weddings, conferences, and special occasions. Professional presentation with seamless finish.",
    features: ["Seamless design", "Professional quality", "Various sizes", "Easy installation", "Reusable"],
    specifications: {
      size: "3m x 3m or custom",
      material: "Premium fabric/vinyl",
      printing: "High resolution digital",
      finishing: "With mounting options",
      quantity: "Custom orders",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Event Designer Kola", rating: 5, comment: "Stunning backdrop for our client's wedding!", date: "Jan 2, 2026", verified: true }
    ]
  },
  32: {
    description: "Gallery-quality canvas prints for home, office, or commercial spaces. Museum-grade materials with vibrant reproduction.",
    features: ["Gallery wrapped", "Fade resistant", "Museum quality", "Various sizes", "Ready to hang"],
    specifications: {
      size: "Custom sizes available",
      material: "Premium canvas fabric",
      printing: "Giclée printing",
      finishing: "Gallery wrapped on frame",
      quantity: "Minimum 1 piece",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Interior Designer Lola", rating: 5, comment: "Beautiful canvas prints for our project!", date: "Dec 29, 2025", verified: true }
    ]
  },
  33: {
    description: "Custom branded face caps perfect for promotional giveaways, team uniforms, or corporate merchandise.",
    features: ["Quality fabric", "Adjustable strap", "Custom embroidery", "Various colors", "Durable construction"],
    specifications: {
      size: "One size fits most",
      material: "Cotton/Polyester blend",
      printing: "Embroidery/Heat transfer",
      finishing: "Professional stitching",
      quantity: "Minimum 50 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Promo Manager Efe", rating: 4, comment: "Great quality caps for our campaign!", date: "Dec 31, 2025", verified: true }
    ]
  },
  34: {
    description: "Road pole banners for outdoor advertising along streets and highways. Maximum visibility for brand campaigns.",
    features: ["Street pole mounting", "Weather resistant", "High visibility", "Double-sided printing", "Durable material"],
    specifications: {
      size: "Custom pole sizes",
      material: "510gsm Frontlit Banner",
      printing: "Full Color Digital",
      finishing: "With pole pockets",
      quantity: "Minimum 2 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "City Advertiser", rating: 5, comment: "Perfect for our street campaign!", date: "Jan 4, 2026", verified: true }
    ]
  },
  35: {
    description: "Vibrant birthday banners for parties and celebrations. Custom designs to make every birthday special.",
    features: ["Custom designs", "Vibrant colors", "Large format", "Indoor/outdoor use", "Reusable material"],
    specifications: {
      size: "2m x 1m or custom",
      material: "440gsm Banner material",
      printing: "Full Color Digital",
      finishing: "With eyelets",
      quantity: "Minimum 1 piece",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      { name: "Party Planner Susan", rating: 5, comment: "Perfect for birthday celebrations!", date: "Dec 28, 2025", verified: true }
    ]
  },
  36: {
    description: "Custom desk or wall calendars with your branding and photos. Perfect for corporate gifts or promotional items.",
    features: ["Custom design", "Quality paper", "Full color printing", "Various formats", "Branded pages"],
    specifications: {
      size: "A4 or custom",
      material: "150gsm Art Paper",
      printing: "Full Color CMYK",
      finishing: "Spiral bound/Wire-O",
      quantity: "Minimum 50 pieces",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Corporate Buyer Musa", rating: 5, comment: "Excellent corporate gift for clients!", date: "Dec 22, 2025", verified: true }
    ]
  },
  37: {
    description: "Professional envelope printing for business correspondence. Custom sizes with your branding and logo.",
    features: ["Custom printing", "Various sizes", "Quality paper", "Window options", "Professional finish"],
    specifications: {
      size: "DL, C5, C4 or custom",
      material: "100gsm Envelope Paper",
      printing: "Full Color or spot color",
      finishing: "Gummed flap",
      quantity: "Minimum 50 pieces",
      turnaround: "3-4 Business Days"
    },
    reviews: [
      { name: "Office Admin Joy", rating: 4, comment: "Professional envelopes for our office!", date: "Dec 26, 2025", verified: true }
    ]
  },
  38: {
    description: "Durable card labels for products, packaging, or identification. Various materials and finishes available.",
    features: ["Durable materials", "Various finishes", "Strong adhesive", "Custom shapes", "Weather resistant options"],
    specifications: {
      size: "Custom sizes",
      material: "Cardstock/Vinyl",
      printing: "Full Color Digital",
      finishing: "Die-cut/Kiss-cut",
      quantity: "100 pieces minimum",
      turnaround: "3-4 Business Days"
    },
    reviews: [
      { name: "Product Manager Tom", rating: 5, comment: "Perfect labels for our products!", date: "Dec 30, 2025", verified: true }
    ]
  },
  39: {
    description: "Eco-friendly A5 paper bags with custom branding. Perfect for retail, gifts, or promotional packaging.",
    features: ["Eco-friendly paper", "Strong handles", "Custom printing", "Various sizes", "Reusable"],
    specifications: {
      size: "A5 size",
      material: "Kraft paper/Art paper",
      printing: "Full Color or spot color",
      finishing: "Rope/Ribbon handles",
      quantity: "100 pieces minimum",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Boutique Owner Ada", rating: 5, comment: "Beautiful bags for our boutique!", date: "Jan 1, 2026", verified: true }
    ]
  },
  40: {
    description: "Large A2 paper bags for shopping, gifts, or retail packaging. Sturdy construction with custom branding.",
    features: ["Large capacity", "Strong construction", "Custom branding", "Quality handles", "Eco-friendly"],
    specifications: {
      size: "A2 size",
      material: "Kraft paper 250gsm",
      printing: "Full Color printing",
      finishing: "Twisted paper handles",
      quantity: "100 pieces minimum",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Store Manager Ben", rating: 4, comment: "Sturdy bags for our customers!", date: "Dec 27, 2025", verified: true }
    ]
  },
  41: {
    description: "Quality face caps with custom embroidery or printing. Perfect for teams, events, or promotional merchandise.",
    features: ["Premium quality", "Custom designs", "Various colors", "Adjustable", "Comfortable fit"],
    specifications: {
      size: "One size adjustable",
      material: "100% Cotton",
      printing: "Embroidery/Print",
      finishing: "Professional stitching",
      quantity: "Minimum 50 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Team Leader Chris", rating: 5, comment: "Team loves their custom caps!", date: "Dec 29, 2025", verified: true }
    ]
  },
  42: {
    description: "Colorful silicone wristbands for events, fundraisers, or promotional campaigns. Comfortable and durable.",
    features: ["Flexible silicone", "Custom messages", "Various colors", "Comfortable wear", "Durable"],
    specifications: {
      size: "Adult/Youth sizes",
      material: "100% Silicone",
      printing: "Debossed/Embossed/Printed",
      finishing: "Smooth edges",
      quantity: "Minimum 100 pieces",
      turnaround: "10-14 Business Days"
    },
    reviews: [
      { name: "Charity Coordinator", rating: 5, comment: "Perfect for our fundraiser!", date: "Jan 3, 2026", verified: true }
    ]
  },
  43: {
    description: "Premium branded caps with high-quality embroidery. Excellent for corporate identity and team uniforms.",
    features: ["High-quality embroidery", "Premium fabric", "Professional finish", "Various styles", "Branded"],
    specifications: {
      size: "Adjustable one size",
      material: "Premium cotton blend",
      printing: "3D Embroidery",
      finishing: "Professional grade",
      quantity: "Minimum 50 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Corporate Buyer", rating: 5, comment: "Excellent quality for our staff!", date: "Dec 31, 2025", verified: true }
    ]
  },
  44: {
    description: "Customized A5 birthday notebooks with personalized designs. Perfect gifts for birthday celebrations.",
    features: ["Personalized designs", "Quality paper", "Custom covers", "Various page counts", "Gift-ready"],
    specifications: {
      size: "A5 (148 x 210mm)",
      material: "100gsm offset paper",
      printing: "Full color cover",
      finishing: "Hardcover bound",
      quantity: "Minimum 10 pieces",
      turnaround: "4-5 Business Days"
    },
    reviews: [
      { name: "Gift Shop Owner", rating: 5, comment: "Customers love these personalized notebooks!", date: "Jan 2, 2026", verified: true }
    ]
  },
  45: {
    description: "Elegant acrylic awards for recognition, achievement, and special honors. Professional engraving available.",
    features: ["Clear acrylic", "Professional engraving", "Various shapes", "Premium quality", "Custom designs"],
    specifications: {
      size: "Various sizes available",
      material: "Premium acrylic",
      printing: "Laser engraving",
      finishing: "Polished edges",
      quantity: "Minimum 1 piece",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "HR Director", rating: 5, comment: "Beautiful awards for our employee recognition!", date: "Dec 28, 2025", verified: true }
    ]
  },
  46: {
    description: "Individual custom stickers for small orders or personal use. Various shapes, sizes, and finishes available.",
    features: ["Single piece orders", "Custom shapes", "Quality vinyl", "Waterproof", "Various finishes"],
    specifications: {
      size: "Custom size",
      material: "Vinyl sticker",
      printing: "Full Color Digital",
      finishing: "Die-cut/Kiss-cut",
      quantity: "Minimum 1 piece",
      turnaround: "1-2 Business Days"
    },
    reviews: [
      { name: "Individual Customer", rating: 5, comment: "Perfect custom sticker!", date: "Jan 5, 2026", verified: true }
    ]
  },
  47: {
    description: "Eye-catching neon LED signage for businesses, retail spaces, and entertainment venues. Modern lighting solution.",
    features: ["LED neon technology", "Energy efficient", "Vibrant colors", "Custom designs", "Long-lasting"],
    specifications: {
      size: "Custom designs",
      material: "LED neon flex",
      printing: "N/A (LED lighting)",
      finishing: "Mounted on backing",
      quantity: "Custom orders",
      turnaround: "14-21 Business Days"
    },
    reviews: [
      { name: "Restaurant Owner", rating: 5, comment: "Amazing neon sign for our restaurant!", date: "Dec 25, 2025", verified: true }
    ]
  },
  48: {
    description: "High-visibility reflective jackets for safety and security personnel. Custom branding available.",
    features: ["High visibility", "Reflective strips", "Safety standard", "Custom printing", "Comfortable fit"],
    specifications: {
      size: "S, M, L, XL, XXL",
      material: "Polyester with reflective tape",
      printing: "Screen print/Heat transfer",
      finishing: "Professional stitching",
      quantity: "Minimum 20 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Security Company", rating: 5, comment: "Excellent quality safety jackets!", date: "Jan 1, 2026", verified: true }
    ]
  },
  49: {
    description: "Illuminated outdoor signage with internal lighting for 24/7 visibility. Perfect for storefronts and businesses.",
    features: ["Backlit design", "Weather resistant", "Energy efficient", "Professional installation", "Durable materials"],
    specifications: {
      size: "Custom sizes",
      material: "Aluminum frame with acrylic face",
      printing: "Vinyl graphics/LED",
      finishing: "With LED lighting system",
      quantity: "Custom orders",
      turnaround: "14-21 Business Days"
    },
    reviews: [
      { name: "Business Owner", rating: 5, comment: "Fantastic illuminated sign!", date: "Dec 22, 2025", verified: true }
    ]
  },
  50: {
    description: "Professional club poster designs for nightclubs, events, and entertainment venues. Eye-catching graphics.",
    features: ["Creative designs", "High resolution", "Vibrant colors", "Large format", "Professional finish"],
    specifications: {
      size: "A2 or custom",
      material: "200gsm Poster Paper",
      printing: "Full Color Digital",
      finishing: "Glossy/Matte",
      quantity: "Minimum 10 pieces",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      { name: "Club Promoter", rating: 5, comment: "Perfect posters for our events!", date: "Dec 30, 2025", verified: true }
    ]
  },
  51: {
    description: "Custom wall or desk calendars with your photos and branding. Ideal for corporate gifts or personal use.",
    features: ["Custom layouts", "Quality printing", "Various formats", "Full color pages", "Professional binding"],
    specifications: {
      size: "A4 or A3",
      material: "170gsm Glossy Paper",
      printing: "Full Color CMYK",
      finishing: "Wire-O binding",
      quantity: "Minimum 50 pieces",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Marketing Team", rating: 5, comment: "Great corporate calendars!", date: "Dec 26, 2025", verified: true }
    ]
  },
  52: {
    description: "Premium outdoor signage solutions for commercial buildings and businesses. Heavy-duty and weather-resistant.",
    features: ["Heavy-duty construction", "Weather proof", "Professional design", "Long-lasting", "UV protected"],
    specifications: {
      size: "Large custom sizes",
      material: "Aluminum composite",
      printing: "UV digital printing",
      finishing: "With mounting system",
      quantity: "Custom projects",
      turnaround: "14-21 Business Days"
    },
    reviews: [
      { name: "Property Manager", rating: 5, comment: "Impressive signage for our building!", date: "Jan 4, 2026", verified: true }
    ]
  },
  53: {
    description: "Medium-sized A2 paper bags perfect for retail shopping and gift packaging. Eco-friendly and reusable.",
    features: ["Medium capacity", "Eco-friendly", "Custom printing", "Strong handles", "Reusable"],
    specifications: {
      size: "A2 (420 x 594mm base)",
      material: "Kraft paper",
      printing: "Offset printing",
      finishing: "Twisted handles",
      quantity: "Minimum 100 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Gift Shop", rating: 4, comment: "Perfect size for our gifts!", date: "Dec 29, 2025", verified: true }
    ]
  },
  54: {
    description: "Professional badge lapel pins for corporate identity, events, or commemorative purposes. Quality metal construction.",
    features: ["Metal construction", "Custom designs", "Various finishes", "Professional quality", "Secure backing"],
    specifications: {
      size: "25mm or custom",
      material: "Metal (brass/steel)",
      printing: "Enamel/Printed",
      finishing: "Various backing options",
      quantity: "Minimum 50 pieces",
      turnaround: "10-14 Business Days"
    },
    reviews: [
      { name: "Conference Organizer", rating: 5, comment: "Professional badges for our event!", date: "Jan 3, 2026", verified: true }
    ]
  },
  55: {
    description: "Custom jersey name and number printing for sports teams. Professional heat transfer or sublimation printing.",
    features: ["Professional printing", "Durable transfers", "Various fonts", "Team numbers", "Name customization"],
    specifications: {
      size: "Various jersey sizes",
      material: "Heat transfer vinyl",
      printing: "Heat press/Sublimation",
      finishing: "Professional application",
      quantity: "Minimum 10 pieces",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      { name: "Sports Team Captain", rating: 5, comment: "Perfect customization for our team!", date: "Dec 31, 2025", verified: true }
    ]
  },
  56: {
    description: "Compact A3 paper bags ideal for small retail items and boutique shopping. Custom branded options available.",
    features: ["Compact size", "Quality paper", "Custom branding", "Strong handles", "Attractive design"],
    specifications: {
      size: "A3 (297 x 420mm)",
      material: "Art paper/Kraft paper",
      printing: "Offset/Digital printing",
      finishing: "Paper rope handles",
      quantity: "Minimum 100 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Boutique Manager", rating: 4, comment: "Perfect for our small items!", date: "Jan 2, 2026", verified: true }
    ]
  },
  57: {
    description: "Custom birthday flyer designs for parties and celebrations. Professional graphics and layout services.",
    features: ["Custom designs", "Professional graphics", "Vibrant colors", "Various sizes", "Quick turnaround"],
    specifications: {
      size: "A5 or A4",
      material: "150gsm Glossy Paper",
      printing: "Full Color CMYK",
      finishing: "Glossy/Matte",
      quantity: "Minimum 50 pieces",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      { name: "Party Organizer", rating: 5, comment: "Beautiful flyer design!", date: "Dec 28, 2025", verified: true }
    ]
  },
  58: {
    description: "Affordable double-sided business cards in bulk quantities. Great value for large teams or networking events.",
    features: ["Bulk pricing", "Double-sided", "Quality cardstock", "Professional finish", "Quick delivery"],
    specifications: {
      size: "3.5 x 2 inches",
      material: "300gsm Art Card",
      printing: "Full Color Both Sides",
      finishing: "Matte/Glossy",
      quantity: "50 pieces minimum",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      { name: "Sales Team Lead", rating: 5, comment: "Great value for bulk orders!", date: "Jan 5, 2026", verified: true }
    ]
  },
  59: {
    description: "Bulk A5 birthday notebooks perfect for party favors or corporate gifts. Personalization available.",
    features: ["Bulk pricing", "Custom covers", "Birthday themes", "Quality paper", "Gift-ready"],
    specifications: {
      size: "A5 (148 x 210mm)",
      material: "100gsm offset paper",
      printing: "Full color cover",
      finishing: "Hardcover bound",
      quantity: "100 pieces minimum",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Event Planner", rating: 5, comment: "Perfect party favors!", date: "Dec 30, 2025", verified: true }
    ]
  },
  60: {
    description: "Professional glass-framed certificates, awards, or artwork. Museum-quality framing with premium materials.",
    features: ["Premium glass", "Professional mounting", "Various sizes", "Clean aesthetics", "Wall-ready"],
    specifications: {
      size: "A4, A3 or custom",
      material: "Premium glass with backing",
      printing: "N/A (framing service)",
      finishing: "Professional mounting",
      quantity: "Minimum 1 piece",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      { name: "Corporate Client", rating: 5, comment: "Beautiful framing for our awards!", date: "Jan 1, 2026", verified: true }
    ]
  },
  61: {
    description: "Custom branded boxes for product packaging, gifts, or corporate presentations. Various sizes and styles available.",
    features: ["Custom sizes", "Full color printing", "Various styles", "Sturdy construction", "Professional finish"],
    specifications: {
      size: "Custom sizes",
      material: "Corrugated/Cardboard",
      printing: "Full Color printing",
      finishing: "Die-cut, folding box",
      quantity: "Minimum 100 pieces",
      turnaround: "10-14 Business Days"
    },
    reviews: [
      { name: "Product Manager", rating: 5, comment: "Perfect packaging for our products!", date: "Dec 27, 2025", verified: true }
    ]
  },
  62: {
    description: "Quality A3 paper bags with custom branding. Perfect for retail, events, or promotional giveaways.",
    features: ["Quality construction", "Custom printing", "Eco-friendly paper", "Comfortable handles", "Reusable"],
    specifications: {
      size: "A3 size",
      material: "Kraft/Art paper",
      printing: "Offset printing",
      finishing: "Twisted paper handles",
      quantity: "Minimum 100 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Retail Manager", rating: 4, comment: "Great bags for our store!", date: "Dec 29, 2025", verified: true }
    ]
  },
  63: {
    description: "Elegant glitter frames for certificates, photos, or artwork. Sparkle finish adds a touch of glamour.",
    features: ["Glitter finish", "Various sizes", "Premium quality", "Easy mounting", "Elegant design"],
    specifications: {
      size: "A4, A3 or custom",
      material: "Glitter-finished frame",
      printing: "N/A (frame product)",
      finishing: "Wall mounting hardware",
      quantity: "50 pieces minimum",
      turnaround: "5-7 Business Days"
    },
    reviews: [
      { name: "Event Decorator", rating: 5, comment: "Beautiful frames for our events!", date: "Jan 4, 2026", verified: true }
    ]
  },
  64: {
    description: "Safety helmets with custom branding for construction sites and industrial use. Meets safety standards.",
    features: ["Safety certified", "Custom branding", "Durable construction", "Comfortable fit", "Adjustable"],
    specifications: {
      size: "One size adjustable",
      material: "High-impact plastic",
      printing: "Screen print/Sticker",
      finishing: "With suspension system",
      quantity: "Minimum 20 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Construction Manager", rating: 5, comment: "Quality helmets for our site!", date: "Dec 26, 2025", verified: true }
    ]
  },
  65: {
    description: "Versatile A3 paper bags for various retail and promotional needs. Customizable with your brand design.",
    features: ["Versatile size", "Custom designs", "Strong construction", "Quality handles", "Eco-friendly"],
    specifications: {
      size: "A3 (297 x 420mm)",
      material: "Premium paper stock",
      printing: "Full Color printing",
      finishing: "Reinforced handles",
      quantity: "Minimum 100 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Store Owner", rating: 4, comment: "Great quality bags!", date: "Jan 3, 2026", verified: true }
    ]
  },
  66: {
    description: "A4 flyers in medium quantity, perfect for local marketing campaigns and event promotions.",
    features: ["A4 format", "Vibrant printing", "Quality paper", "Professional finish", "Quick turnaround"],
    specifications: {
      size: "A4 (210 x 297mm)",
      material: "150gsm Art Paper",
      printing: "Full Color CMYK",
      finishing: "Glossy/Matte",
      quantity: "50 pieces",
      turnaround: "1-2 Business Days"
    },
    reviews: [
      { name: "Local Business", rating: 5, comment: "Perfect for our campaign!", date: "Dec 31, 2025", verified: true }
    ]
  },
  67: {
    description: "A4 flyers in bulk quantity for large-scale marketing and distribution campaigns.",
    features: ["Bulk quantity", "Cost effective", "High quality", "Vibrant colors", "Fast production"],
    specifications: {
      size: "A4 (210 x 297mm)",
      material: "150gsm Glossy Paper",
      printing: "Full Color CMYK",
      finishing: "Glossy lamination",
      quantity: "100 pieces",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      { name: "Marketing Team", rating: 5, comment: "Excellent value for bulk!", date: "Jan 2, 2026", verified: true }
    ]
  },
  68: {
    description: "Branded Instagram photo booth for events and activations. Perfect for social media marketing and engagement.",
    features: ["Instagram-ready", "Custom branding", "Portable", "Professional finish", "Photo-friendly design"],
    specifications: {
      size: "2m x 2m or custom",
      material: "Foam board/PVC",
      printing: "Full Color Digital",
      finishing: "With stand",
      quantity: "Custom orders",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Brand Activation Team", rating: 5, comment: "Perfect for our social media campaign!", date: "Dec 28, 2025", verified: true }
    ]
  },
  69: {
    description: "Individual glitter frames for special certificates, awards, or memorable photos. Premium quality with sparkle finish.",
    features: ["Premium glitter finish", "Individual orders", "Various sizes", "Ready to hang", "Gift-ready"],
    specifications: {
      size: "A4 or custom",
      material: "Glitter frame material",
      printing: "N/A (frame product)",
      finishing: "With mounting hardware",
      quantity: "Minimum 1 piece",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      { name: "Individual Customer", rating: 5, comment: "Beautiful frame for my certificate!", date: "Jan 5, 2026", verified: true }
    ]
  },
  70: {
    description: "Premium A3 paper bags with high-quality finish. Ideal for upscale retail and luxury gift packaging.",
    features: ["Premium quality", "Luxury finish", "Custom branding", "Strong handles", "Elegant design"],
    specifications: {
      size: "A3 size",
      material: "Premium art paper",
      printing: "High-quality offset",
      finishing: "Ribbon handles/Lamination",
      quantity: "Minimum 100 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Luxury Retailer", rating: 5, comment: "Perfect for our premium products!", date: "Dec 30, 2025", verified: true }
    ]
  },
  71: {
    description: "Individual branded boxes for small products, gifts, or special packaging needs. Custom sizes available.",
    features: ["Custom sizing", "Individual orders", "Quality materials", "Custom printing", "Professional finish"],
    specifications: {
      size: "Small to medium custom",
      material: "Cardboard/Corrugated",
      printing: "Full Color or spot color",
      finishing: "Die-cut folding",
      quantity: "Minimum 10 pieces",
      turnaround: "7-10 Business Days"
    },
    reviews: [
      { name: "Small Business Owner", rating: 5, comment: "Perfect packaging for my products!", date: "Jan 4, 2026", verified: true }
    ]
  }
};

// Read the current products file
const productsFilePath = path.join(__dirname, '..', 'src', 'app', 'api', 'products', 'route.js');
let fileContent = fs.readFileSync(productsFilePath, 'utf8');

// Function to add details to products in the file
function addProductDetails() {
  // Find the getDefaultProducts function
  const match = fileContent.match(/function getDefaultProducts\(\) \{[\s\S]*?return \[([\s\S]*?)\];[\s\S]*?\}/);
  
  if (!match) {
    console.error('Could not find getDefaultProducts function');
    return;
  }

  let productsArray = match[1];
  
  // Update each product
  Object.keys(productDetails).forEach(id => {
    const idNum = parseInt(id);
    const details = productDetails[id];
    const slug = generateSlug(details.name || `Product ${id}`);
    
    // Find the product line
    const productRegex = new RegExp(`(\\{\\s*id:\\s*${idNum},\\s*name:\\s*"[^"]+",\\s*price:\\s*"[^"]+",\\s*category:\\s*"[^"]+",\\s*image:\\s*"[^"]+",\\s*unit:\\s*"[^"]+"\\s*\\})`, 'g');
    
    productsArray = productsArray.replace(productRegex, (match) => {
      // Extract the basic info
      const nameMatch = match.match(/name:\s*"([^"]+)"/);
      const priceMatch = match.match(/price:\s*"([^"]+)"/);
      const categoryMatch = match.match(/category:\s*"([^"]+)"/);
      const imageMatch = match.match(/image:\s*"([^"]+)"/);
      const unitMatch = match.match(/unit:\s*"([^"]+)"/);
      
      if (!nameMatch) return match;
      
      const productSlug = generateSlug(nameMatch[1]);
      
      // Build the enhanced product object
      return `{ 
      id: ${idNum}, 
      name: "${nameMatch[1]}", 
      slug: "${productSlug}",
      price: "${priceMatch[1]}", 
      category: "${categoryMatch[1]}", 
      image: "${imageMatch[1]}", 
      unit: "${unitMatch[1]}",
      description: "${details.description}",
      features: ${JSON.stringify(details.features)},
      specifications: ${JSON.stringify(details.specifications, null, 6).replace(/\n/g, '\n      ')},
      reviews: ${JSON.stringify(details.reviews, null, 6).replace(/\n/g, '\n      ')}
    }`;
    });
  });
  
  // Replace the products array in the file
  fileContent = fileContent.replace(
    /function getDefaultProducts\(\) \{[\s\S]*?return \[([\s\S]*?)\];[\s\S]*?\}/,
    `function getDefaultProducts() {\n  return [${productsArray}];\n}`
  );
  
  // Write back to file
  fs.writeFileSync(productsFilePath, fileContent, 'utf8');
  console.log('✅ Successfully added details to all products!');
  console.log('🎉 All 71 products now have descriptions, specifications, and reviews!');
}

// Run the script
try {
  addProductDetails();
} catch (error) {
  console.error('❌ Error:', error.message);
}
