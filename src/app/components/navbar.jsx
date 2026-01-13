"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaWhatsapp, FaTiktok, FaSearch, FaImage, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Clock } from "lucide-react";
import { TiMail } from "react-icons/ti";
import { CiFacebook, CiLinkedin, CiInstagram } from "react-icons/ci";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const [products, setProducts] = useState([]);
  const [productsSearch, setProductsSearch] = useState("");
  const [mobileProductsSearch, setMobileProductsSearch] = useState("");
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showMobileProducts, setShowMobileProducts] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [showDesktopProductsDropdown, setShowDesktopProductsDropdown] = useState(false);
  const [expandedDesktopCategory, setExpandedDesktopCategory] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleScroll = () => setIsFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          console.error("Failed to fetch products:", res.status, res.statusText);
          setProducts([]);
          return;
        }
        const data = await res.json();
        // Check if response is an error object
        if (data && !Array.isArray(data) && data.error) {
          console.error("API error:", data.error);
          setProducts([]);
          return;
        }
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    
    const handleOutside = (e) => {
      if (showProductsDropdown && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowProductsDropdown(false);
      }
      // Also handle desktop products dropdown
      if (showDesktopProductsDropdown && !e.target.closest('[data-products-dropdown]')) {
        setShowDesktopProductsDropdown(false);
        setExpandedDesktopCategory(null);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, [showProductsDropdown, showDesktopProductsDropdown]);

  const categories = Array.from(new Set((products || []).map((p) => p.category || "Other")));

  return (
    <>
      {/* TOP BAR */}
      <div className="flex justify-center items-center gap-3 p-4 md:hidden">
        <div className="bg-(--secondary-color) h-6 w-6 rounded flex items-center justify-center">
          <Clock className="w-4 h-4" />
        </div>
        <p className="text-sm">We are open: 9:00am - 6:00pm</p>
      </div>

      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          <img src="/image/logo2.png" className="w-28" alt="Logo" />

          <div className="hidden md:flex items-center gap-5 text-xs">
            <div className="flex items-center gap-2">
              <div className="bg-(--secondary-color) h-6 w-6 rounded flex items-center justify-center">
                <FaWhatsapp size={14} />
              </div>
              <p>
                Get Support <br />
                <a href="https://wa.me/+2349091643613">Chat on WhatsApp</a>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-(--secondary-color) h-6 w-6 rounded flex items-center justify-center">
                <Clock size={14} />
              </div>
              <p>
                We are open <br /> 9:00am - 6:00pm
              </p>
            </div>

            <div className="md:flex items-center gap-2">
              <div className="bg-(--secondary-color) h-6 w-6 rounded flex items-center justify-center">
                <TiMail size={14} />
              </div>
              <p>
                Email <br /> <a href="mailto:aphamed0@gmail.com">Send a mail</a>
              </p>
            </div>

            <div className="md:flex items-center gap-3 ml-6 animate-bounce">
              <a href="#" target="_blank" rel="noreferrer"><CiFacebook className="text-blue-600" /></a>
              <a href="#" target="_blank" rel="noreferrer"><CiLinkedin className="text-blue-700" /></a>
              <a href="#" target="_blank" rel="noreferrer"><CiInstagram className="text-pink-500" /></a>
              <a href="#" target="_blank" rel="noreferrer"><FaTiktok className="text-black" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className={`w-full z-50 transition-all duration-300 ${isFixed ? "fixed top-0 left-0 bg-(--primary-color)/70 backdrop-blur-lg shadow-md" : "relative bg-(--primary-color)"}`}>
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <img src="/image/footer-logo.png" alt="logo" className="w-24 md:hidden" />

          <div className={`${menuOpen ? 'flex' : 'hidden'} flex-col absolute top-16 left-0 w-full bg-(--primary-color) text-center space-y-4 py-5 md:static md:flex md:flex-row md:space-y-0 md:space-x-5 md:w-auto md:bg-transparent`}>
            <Link href="/" className="text-white font-bold" onClick={() => setMenuOpen(false)}>HOME</Link>
            <Link href="/About" className="text-white font-bold" onClick={() => setMenuOpen(false)}>ABOUT</Link>
            <Link href="/Service" className="text-white font-bold" onClick={() => setMenuOpen(false)}>SERVICE</Link>
            
            {/* PRODUCTS - Dropdown (works on both mobile and desktop) */}
            <div className="relative w-full md:w-auto" data-products-dropdown>
              <button
                type="button"
                onClick={() => setShowDesktopProductsDropdown(!showDesktopProductsDropdown)}
                className="text-white font-bold flex items-center justify-center gap-1 hover:text-white/80 transition-colors w-full md:w-auto"
                onMouseEnter={() => setShowDesktopProductsDropdown(true)}
              >
                PRODUCTS
                <FaChevronDown className={`text-xs transition-transform ${showDesktopProductsDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showDesktopProductsDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 w-full md:w-80 bg-white shadow-lg rounded-lg z-50 max-h-96 overflow-auto border"
                  onMouseLeave={() => {
                    setShowDesktopProductsDropdown(false);
                    setExpandedDesktopCategory(null);
                  }}
                >
                  <div className="p-3 border-b">
                    <input
                      value={productsSearch}
                      onChange={(e) => setProductsSearch(e.target.value)}
                      placeholder="Search products..."
                      className="w-full px-3 py-2 text-sm rounded border"
                    />
                  </div>

                  {categories.length === 0 ? (
                    <div className="p-4 text-sm text-gray-600">No products</div>
                  ) : (
                    <div className="py-2">
                      {categories.map((cat) => {
                        const categoryProducts = (products || [])
                          .filter((p) => (p.category || "Other") === cat)
                          .filter(p => p.name.toLowerCase().includes((productsSearch||"").toLowerCase()));

                        if (categoryProducts.length === 0 && productsSearch) return null;

                        return (
                          <div key={cat}>
                            <button
                              type="button"
                              onClick={() => setExpandedDesktopCategory(expandedDesktopCategory === cat ? null : cat)}
                              className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 text-left"
                            >
                              <span className="font-semibold text-gray-800">{cat}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">({categoryProducts.length})</span>
                                <FaChevronRight className={`text-xs text-gray-400 transition-transform ${expandedDesktopCategory === cat ? 'rotate-90' : ''}`} />
                              </div>
                            </button>

                            {expandedDesktopCategory === cat && (
                              <div className="bg-gray-50">
                                {categoryProducts.map((p) => (
                                  <Link
                                    key={p.id}
                                    href={`/Products/${p.slug || p.id}`}
                                    className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100 border-b last:border-b-0"
                                    onClick={() => {
                                      setShowDesktopProductsDropdown(false);
                                      setExpandedDesktopCategory(null);
                                      setMenuOpen(false);
                                    }}
                                  >
                                    <img
                                      src={p.image || "/image/placeholder.png"}
                                      alt={p.name}
                                      className="w-10 h-10 object-cover rounded"
                                      onError={(e) => { e.currentTarget.src = "/image/placeholder.png"; }}
                                    />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-sm font-medium text-gray-800 truncate">{p.name}</div>
                                      <div className="text-xs text-gray-500">₦{p.price}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link href="/Portfolio" className="text-white font-bold" onClick={() => setMenuOpen(false)}>PORTFOLIO</Link>
            <Link href="/Contact" className="text-white font-bold" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          </div>

          {/* RIGHT BUTTONS (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative" ref={dropdownRef}>
              <button type="button" onClick={() => setShowProductsDropdown(s => !s)} className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-50 flex items-center gap-2">
                <FaImage />
                <span className="hidden sm:inline">Products</span>
                <span className="ml-2 text-sm text-gray-600">({products.length})</span>
                <FaChevronDown className={`${showProductsDropdown ? 'rotate-180' : ''} ml-1`} />
              </button>

              {showProductsDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-50 max-h-80 overflow-auto border">
                  <div className="p-2">
                    <input value={productsSearch} onChange={(e) => setProductsSearch(e.target.value)} placeholder="Search products..." className="w-full px-3 py-2 text-sm rounded border" />
                  </div>

                  {products.length === 0 ? <div className="p-4 text-sm text-gray-600">No products</div> : (
                    products.filter(p => p.name.toLowerCase().includes((productsSearch||"").toLowerCase())).map(p => (
                      <Link key={p.id} href={`/Products/${p.id}`} className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 border-b last:border-b-0" onClick={() => setShowProductsDropdown(false)}>
                        <img src={p.image || "/image/placeholder.png"} alt={p.name} className="w-12 h-12 object-cover rounded" onError={(e)=>{e.currentTarget.src='/image/placeholder.png'}} />
                        <div className="flex-1 min-w-0"><div className="text-sm font-medium text-gray-800 truncate">{p.name}</div><div className="text-xs text-gray-500">₦{p.price}</div></div>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>

            <button className="bg-(--secondary-color) py-2 px-4 rounded text-sm font-medium text-(--accent-color)">
              <a href="https://wa.me/2349091643613" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">GET QUOTE</a>
            </button>
          </div>

          {/* HAMBURGER (mobile) */}
          <button className="md:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </nav>
      </div>
    </>
  );
}
