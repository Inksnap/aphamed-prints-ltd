"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMinus, FaPlus, FaWhatsapp, FaStar, FaCheck, FaTruck, 
  FaShieldAlt, FaHeadset, FaChevronLeft, FaChevronRight 
} from "react-icons/fa";
import { HiArrowLeft, HiZoomIn } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

// PRODUCT DATA (same as in Products page)
const PRODUCTS = [
  {
    id: 1,
    name: "A5 Flyers",
    price: "25,000",
    category: "Prints",
    image: "/image/A4-flyers.png",
    unit: "Per 50",
    description: "Eye-catching A5 flyers perfect for promotions, events, and marketing campaigns. High-quality print on premium paper stock.",
    features: [
      "Full color CMYK printing",
      "130gsm glossy art paper",
      "Professional design support",
      "Vibrant color reproduction",
      "Suitable for indoor/outdoor use"
    ],
    specifications: {
      size: "A5 (148 x 210mm)",
      paper: "130gsm Glossy Art Paper",
      printing: "Full Color CMYK (One Side)",
      finishing: "Glossy",
      quantity: "50 pieces",
      turnaround: "1-2 Business Days"
    },
    reviews: [
      {
        name: "Funke Ajayi",
        rating: 5,
        comment: "The flyers came out beautifully! Colors are vibrant and paper quality is excellent.",
        date: "Dec 29, 2025",
        verified: true
      },
      {
        name: "Emeka Nwosu",
        rating: 5,
        comment: "Used them for my product launch. Very impressed with the quality and quick turnaround.",
        date: "Dec 22, 2025",
        verified: true
      },
      {
        name: "Aisha Bello",
        rating: 4,
        comment: "Good quality flyers at affordable price. Will order again.",
        date: "Dec 18, 2025",
        verified: true
      }
    ],
    relatedProducts: [6, 11, 37]
  },
  {
    id: 2,
    name: "Double side Business Card",
    price: "19,000",
    category: "Branding",
    image: "/image/Business-Card.png",
    unit: "Per 100",
    description: "Premium quality double-sided business cards printed on high-grade cardstock. Perfect for making a lasting impression on clients and business partners.",
    gallery: [
      "/image/Business-Card.png",
      "/image/Business-Card.png",
      "/image/Business-Card.png",
      "/image/Business-Card.png"
    ],
    features: [
      "Double-sided full-color printing",
      "Premium 350gsm cardstock",
      "Matte or glossy finish options",
      "Standard size: 3.5\" x 2\"",
      "Fast turnaround time (2-3 business days)",
      "Professional design assistance available",
      "Water-resistant lamination",
      "UV coating protection available"
    ],
    specifications: {
      material: "350gsm Art Card",
      size: "3.5 x 2 inches (Standard)",
      printing: "Full Color CMYK (Both Sides)",
      finishing: "Matte/Glossy Lamination",
      quantity: "100 pieces minimum",
      turnaround: "2-3 Business Days",
      customization: "Available"
    },
    reviews: [
      {
        name: "Adewale Johnson",
        rating: 5,
        comment: "Excellent quality! The cards look very professional and the finish is perfect.",
        date: "Dec 15, 2025",
        verified: true
      },
      {
        name: "Chioma Okafor",
        rating: 5,
        comment: "Fast delivery and amazing print quality. Highly recommended!",
        date: "Dec 10, 2025",
        verified: true
      },
      {
        name: "Ibrahim Musa",
        rating: 4,
        comment: "Good quality cards. The matte finish looks really professional.",
        date: "Dec 5, 2025",
        verified: true
      }
    ],
    relatedProducts: [1, 10, 38]
  },
  {
    id: 3,
    name: "Shirts",
    price: "8,000",
    category: "Design",
    image: "/image/Shirts.png",
    unit: "Per one",
    description: "Custom branded t-shirts with high-quality screen printing or heat transfer. Perfect for corporate events, uniforms, and promotional giveaways.",
    features: [
      "100% cotton fabric",
      "Screen printing or heat transfer",
      "Multiple color options",
      "Durable and washable",
      "Available in all sizes (S-XXL)",
      "Bulk discounts available"
    ],
    specifications: {
      material: "100% Cotton",
      printing: "Screen Print/Heat Transfer",
      colors: "Multiple Options Available",
      sizes: "S, M, L, XL, XXL",
      minimum: "1 piece",
      turnaround: "3-5 Business Days"
    },
    reviews: [
      {
        name: "Yusuf Abdullahi",
        rating: 5,
        comment: "Ordered 20 shirts for my company. Quality is top-notch and print is very clear!",
        date: "Jan 1, 2026",
        verified: true
      },
      {
        name: "Grace Okonkwo",
        rating: 5,
        comment: "Love the fabric quality! The print hasn't faded after multiple washes.",
        date: "Dec 27, 2025",
        verified: true
      },
      {
        name: "Daniel Okoro",
        rating: 4,
        comment: "Great shirts for the price. Delivery was prompt.",
        date: "Dec 20, 2025",
        verified: true
      }
    ],
    relatedProducts: [41, 43, 48]
  },
  {
    id: 4,
    name: "Invitation Cards",
    price: "15,000",
    category: "Prints",
    image: "/image/Invitation.png",
    unit: "Per one",
    description: "Elegant invitation cards for weddings, birthdays, and special events. Available in various designs with premium finishing options.",
    features: [
      "Premium cardstock material",
      "Full color printing both sides",
      "Customizable designs",
      "Matte or glossy lamination",
      "Includes envelopes",
      "Professional layout service"
    ],
    specifications: {
      material: "300gsm Art Card",
      size: "5 x 7 inches (Standard)",
      printing: "Full Color (Both Sides)",
      finishing: "Laminated",
      quantity: "1 piece (Bulk available)",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      {
        name: "Bisola Adeniran",
        rating: 5,
        comment: "Used for my wedding! Beautiful cards, everyone complimented them. Thank you Aphamed!",
        date: "Dec 30, 2025",
        verified: true
      },
      {
        name: "Samuel Eze",
        rating: 5,
        comment: "Excellent quality and the design team was very helpful. Highly recommended.",
        date: "Dec 24, 2025",
        verified: true
      },
      {
        name: "Ngozi Ibe",
        rating: 5,
        comment: "Perfect for my daughter's birthday party. The colors came out exactly as I wanted.",
        date: "Dec 16, 2025",
        verified: true
      }
    ],
    relatedProducts: [2, 7, 6]
  },
  {
    id: 5,
    name: "Stickers",
    price: "12,000",
    category: "Branding",
    image: "/image/Stickers2.png",
    unit: "Per 100",
    description: "Custom vinyl stickers perfect for branding, packaging, and promotional purposes. Waterproof and durable for long-lasting use.",
    features: [
      "Waterproof vinyl material",
      "UV resistant printing",
      "Any shape and size",
      "Strong adhesive backing",
      "Suitable for indoor and outdoor",
      "Glossy or matte finish"
    ],
    specifications: {
      material: "Vinyl Sticker Paper",
      printing: "Full Color CMYK",
      sizes: "Custom Sizes Available",
      finishing: "Glossy/Matte Lamination",
      quantity: "100 pieces minimum",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      {
        name: "Tope Adeyemi",
        rating: 5,
        comment: "Perfect stickers for my product packaging. Waterproof and looks professional!",
        date: "Dec 28, 2025",
        verified: true
      },
      {
        name: "Mercy Udoh",
        rating: 5,
        comment: "The quality exceeded my expectations. Colors are bright and adhesive is strong.",
        date: "Dec 21, 2025",
        verified: true
      },
      {
        name: "Chukwuma Obi",
        rating: 4,
        comment: "Good value for money. Using them for my business branding.",
        date: "Dec 14, 2025",
        verified: true
      }
    ],
    relatedProducts: [38, 46, 12]
  },
  {
    id: 6,
    name: "A4 Brochure",
    price: "6,500",
    category: "Prints",
    image: "/image/A4-Brochure.png",
    unit: "Per one",
    description: "Professional A4 brochures with bi-fold or tri-fold options. Ideal for product catalogs, company profiles, and marketing materials.",
    features: [
      "Bi-fold or tri-fold design",
      "Full color printing",
      "170gsm glossy paper",
      "Professional layout design",
      "Perfect for presentations",
      "High-quality finishing"
    ],
    specifications: {
      size: "A4 (210 x 297mm)",
      paper: "170gsm Glossy Art Paper",
      printing: "Full Color (Both Sides)",
      fold: "Bi-fold/Tri-fold",
      quantity: "1 piece minimum",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      {
        name: "Kemi Olowu",
        rating: 5,
        comment: "Used for my business presentation. The quality impressed my clients!",
        date: "Jan 2, 2026",
        verified: true
      },
      {
        name: "Ahmed Hassan",
        rating: 5,
        comment: "Professional finish and great paper quality. Will definitely reorder.",
        date: "Dec 26, 2025",
        verified: true
      },
      {
        name: "Victoria Nnamdi",
        rating: 4,
        comment: "Good brochures for the price. Delivery was on time.",
        date: "Dec 19, 2025",
        verified: true
      }
    ],
    relatedProducts: [1, 11, 14]
  },
  {
    id: 7,
    name: "Burial Programme",
    price: "5,500",
    category: "Branding",
    image: "/image/Burial-programme.png",
    unit: "Per one",
    description: "Respectful and elegant burial/funeral programmes with professional designs. Available in booklet or folded formats.",
    features: [
      "Booklet or folded format",
      "Full color or black and white",
      "Quality paper stock",
      "Custom layout design",
      "Fast turnaround time",
      "Respectful designs"
    ],
    specifications: {
      size: "A5 (148 x 210mm)",
      paper: "150gsm Bond Paper",
      printing: "Full Color/B&W",
      pages: "4-16 pages available",
      quantity: "1 piece minimum",
      turnaround: "24-48 Hours (Express)"
    },
    reviews: [
      {
        name: "Pastor John Okafor",
        rating: 5,
        comment: "Very professional and delivered on time. The family was pleased with the quality.",
        date: "Dec 31, 2025",
        verified: true
      },
      {
        name: "Mrs. Folake Williams",
        rating: 5,
        comment: "Beautiful programme design. Thank you for the quick delivery during our difficult time.",
        date: "Dec 23, 2025",
        verified: true
      },
      {
        name: "Solomon Adebisi",
        rating: 5,
        comment: "Excellent service. They understood the urgency and delivered perfectly.",
        date: "Dec 17, 2025",
        verified: true
      }
    ],
    relatedProducts: [4, 6, 10]
  },
  {
    id: 8,
    name: "Notepad",
    price: "5,500",
    category: "Design",
    image: "/image/Notepad.png",
    unit: "Per one",
    description: "Custom branded notepads for corporate use, gifts, or daily note-taking. Available in various sizes with quality binding.",
    features: [
      "Custom branding on cover",
      "50-100 sheets available",
      "Quality bond paper",
      "Glued or spiral binding",
      "Multiple size options",
      "Corporate gifting ready"
    ],
    specifications: {
      size: "A5/A6 (Multiple sizes)",
      paper: "70gsm Bond Paper",
      sheets: "50-100 sheets",
      binding: "Glued/Spiral",
      cover: "250gsm Card Cover",
      turnaround: "3-4 Business Days"
    },
    reviews: [
      {
        name: "Chinwe Okeke",
        rating: 5,
        comment: "Ordered 50 notepads for my office. Everyone loves them! Quality is superb.",
        date: "Dec 29, 2025",
        verified: true
      },
      {
        name: "Babatunde Lawal",
        rating: 4,
        comment: "Nice notepads with good paper quality. Great for daily use.",
        date: "Dec 25, 2025",
        verified: true
      },
      {
        name: "Jennifer Ade",
        rating: 5,
        comment: "Perfect for corporate gifts. My clients loved them!",
        date: "Dec 15, 2025",
        verified: true
      }
    ],
    relatedProducts: [14, 16, 8]
  },
  {
    id: 9,
    name: "Exercise Book",
    price: "0,000",
    category: "Prints",
    image: "/image/Exercise-book.png",
    unit: "Per one",
  },
  {
    id: 10,
    name: "Conqueror Letterhead",
    price: "20,000",
    category: "Branding",
    image: "/image/Conqueror-Letterhead.png",
    unit: "Per one",
    description: "Premium conqueror letterhead paper for official correspondence. Features elegant watermark texture and professional appearance.",
    features: [
      "Premium conqueror paper",
      "Watermark texture",
      "Full color header printing",
      "Professional appearance",
      "Suitable for laser printers",
      "Perfect for corporate use"
    ],
    specifications: {
      size: "A4 (210 x 297mm)",
      paper: "100gsm Conqueror Paper",
      printing: "Full Color (Header)",
      texture: "Watermark Finish",
      quantity: "50 sheets minimum",
      turnaround: "2-3 Business Days"
    },
    reviews: [
      {
        name: "Chief Adamu Bello",
        rating: 5,
        comment: "Excellent quality letterhead! Gives our company a very professional image.",
        date: "Jan 1, 2026",
        verified: true
      },
      {
        name: "Dr. Amina Yusuf",
        rating: 5,
        comment: "Love the texture and quality. Perfect for official letters.",
        date: "Dec 27, 2025",
        verified: true
      },
      {
        name: "Michael Ogunleye",
        rating: 4,
        comment: "Premium quality paper. Worth the price for important documents.",
        date: "Dec 18, 2025",
        verified: true
      }
    ],
    relatedProducts: [2, 37, 6]
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

  const product = PRODUCTS.find((p) => p.id === parseInt(params.id));

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
  const relatedProducts = PRODUCTS.filter(p => 
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
                <div className="aspect-square relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      src={images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
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
                        onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                      >
                        <FaChevronLeft className="text-gray-700" size={14} />
                      </button>
                      <button
                        onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
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
