"use client";

import { useState, useEffect } from "react";
import FALLBACK_PRODUCTS from "../../../../data/products.json";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMinus, FaPlus, FaWhatsapp, FaStar, FaCheck, FaTruck,
  FaShieldAlt, FaHeadset, FaChevronLeft, FaChevronRight, FaTimes
} from "react-icons/fa";
import { HiArrowLeft, HiZoomIn } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

export default function ProductClient({ initialProduct = null, initialAllProducts = [], params = {} }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState("Matte");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageZoomed, setImageZoomed] = useState(false);
  const [product, setProduct] = useState(initialProduct);
  const [allProducts, setAllProducts] = useState(initialAllProducts);
  const [loading, setLoading] = useState(!initialProduct);

  // DEFAULT_PRODUCT data copied from original for fallback (trimmed if needed)
  const DEFAULT_PRODUCTS =
    initialAllProducts && initialAllProducts.length
      ? initialAllProducts
      : FALLBACK_PRODUCTS || [];

  useEffect(() => {
    // If server already provided the product, skip fetching
    if (initialProduct) {
      setProduct(initialProduct);
      setAllProducts(initialAllProducts);
      setLoading(false);
      return;
    }

    fetchProductData();
  }, [params?.id]);

  const fetchProductData = async () => {
    try {
      const response = await fetch("/api/products");
      const products = await response.json();
      setAllProducts(products);

      function normalize(s){
        return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      }
      const idParam = params.id;
      const decoded = decodeURIComponent(String(idParam || ""));

      const foundProduct =
        products.find((p) => p.slug === idParam) ||
        products.find((p) => p.slug === decoded) ||
        products.find((p) => String(p.id) === String(idParam)) ||
        products.find((p) => normalize(p.slug) === normalize(idParam)) ||
        products.find((p) => normalize(p.name) === normalize(idParam)) ||
        products.find((p) => normalize(p.name) === normalize(decoded));

      if (!foundProduct) {
        const fallbackProduct =
          DEFAULT_PRODUCTS.find((p) => p.slug === idParam) ||
          DEFAULT_PRODUCTS.find((p) => p.slug === decoded) ||
          DEFAULT_PRODUCTS.find((p) => String(p.id) === String(idParam)) ||
          DEFAULT_PRODUCTS.find((p) => normalize(p.slug) === normalize(idParam)) ||
          DEFAULT_PRODUCTS.find((p) => normalize(p.name) === normalize(idParam)) ||
          DEFAULT_PRODUCTS.find((p) => normalize(p.name) === normalize(decoded));
        setProduct(fallbackProduct);
      } else {
        setProduct(foundProduct);
      }
    } catch (error) {
      const fallbackProduct =
        DEFAULT_PRODUCTS.find((p) => p.slug === idParam) ||
        DEFAULT_PRODUCTS.find((p) => p.slug === decoded) ||
        DEFAULT_PRODUCTS.find((p) => String(p.id) === String(idParam)) ||
        DEFAULT_PRODUCTS.find((p) => normalize(p.slug) === normalize(idParam)) ||
        DEFAULT_PRODUCTS.find((p) => normalize(p.name) === normalize(idParam)) ||
        DEFAULT_PRODUCTS.find((p) => normalize(p.name) === normalize(decoded));
      setProduct(fallbackProduct);
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
        <div className="text-2xl text-gray-600">Product not found.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          <img src={product.image} alt={product.name} className="w-full rounded-md" />
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold text-[var(--primary-color)]">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.unit} • ₦{product.price}</p>

          <div className="mt-4">
            <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded">Contact via WhatsApp</button>
          </div>

          {product.description && (
            <div className="mt-6 bg-white rounded-xl p-3 shadow-sm">
              <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
