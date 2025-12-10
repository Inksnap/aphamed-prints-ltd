"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp, FaTiktok, FaSearch } from "react-icons/fa";
import { Clock } from "lucide-react";
import { TiMail } from "react-icons/ti";
import { CiFacebook, CiLinkedin, CiInstagram } from "react-icons/ci";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP BAR — MOBILE ONLY */}
      <div className="flex justify-center items-center gap-3 p-4 md:hidden">
        <div className="bg-(--secondary-color) h-6 w-6 rounded flex items-center justify-center">
          <Clock className="w-4 h-4" />
        </div>
        <p className="text-sm">We are open: 9:00am - 6:00pm</p>
      </div>

      {/* TOP CONTACT BAR — ALWAYS VISIBLE */}
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
                We are open <br />
                9:00am - 6:00pm
              </p>
            </div>

            <div className="md:flex items-center gap-2">
              <div className="bg-(--secondary-color) h-6 w-6 rounded flex items-center justify-center">
                <TiMail size={14} />
              </div>
              <p>
                Email <br />
                <a href="mailto:aphamed0@gmail.com">Send a mail</a>
              </p>
            </div>

            <div className="md:flex items-center gap-3 ml-6 animate-bounce">
              <CiFacebook className="text-blue-600" />
              <CiLinkedin className="text-blue-700" />
              <CiInstagram className="text-pink-500" />
              <FaTiktok className="text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR — BECOMES FIXED ON SCROLL */}
      <div
        className={`
          w-full z-50 transition-all duration-300
          ${isFixed ? "fixed top-0 left-0 bg-(--primary-color)/70 backdrop-blur-lg shadow-md" : "relative bg-(--primary-color)"}
        `}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

          {/* MOBILE LOGO */}
          <img src="/image/footer-logo.png" alt="logo" className="w-24 md:hidden" />

          {/* MENU LINKS */}
          <div
            className={`
              ${menuOpen ? "flex" : "hidden"}
              flex-col absolute top-16 left-0 w-full bg-(--primary-color) text-center space-y-4 py-5
              md:static md:flex md:flex-row md:space-y-0 md:space-x-5 md:w-auto md:bg-transparent
            `}
          >
            {["/", "/About", "/Products", "/Service", "/Portfolio", "/Contact"].map((path, i) => (
              <Link
                key={i}
                href={path}
                className="text-white font-bold"
                onClick={() => setMenuOpen(false)}
              >
                {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
              </Link>
            ))}
          </div>

          {/* RIGHT BUTTONS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-(--secondary-color) p-2 rounded text-(--accent-color)">
              <FaSearch size={18} />
            </button>
            <button className="bg-(--secondary-color) py-2 px-4 rounded text-sm font-medium text-(--accent-color)">
              GET A QUOTE
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>
      </div>
    </>
  );
}





// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaWhatsapp, FaTiktok, FaSearch } from "react-icons/fa";
// import { Clock } from "lucide-react";
// import { TiMail } from "react-icons/ti";
// import { CiFacebook, CiLinkedin, CiInstagram } from "react-icons/ci";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* TOP BAR — MOBILE ONLY */}
//       <div className="flex justify-center items-center gap-3 p-4  md:hidden">
//         <div className="bg-(--secondary-color) h-6 w-6 rounded flex items-center justify-center">
//           <Clock className="w-4 h-4" />
//         </div>
//         <p className="text-sm">We are open: 9:00am - 6:00pm</p>
//       </div>

//       {/* TOP CONTACT BAR — DESKTOP/TABLET */}
//       <div className="hidden md:block ">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
//           {/* Logo */}
//           <img src="/image/logo2.png" className="w-28" alt="Logo" />

//           {/* Contact Items */}
//           <div className="hidden md:flex items-center gap-5 text-xs">
//             <div className="flex items-center gap-2">
//               <div className="bg-(--secondary-color) h-6 w-6 rounded flex items-center justify-center">
//                 <FaWhatsapp size={14} />
//               </div>
//               <p>
//                 Get Support <br />
//                 <a href="https://wa.me/+2349091643613">Chat on WhatsApp</a>
//               </p>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="bg-(--secondary-color) h-6 w-6 rounded flex items-center justify-center">
//                 <Clock size={14} />
//               </div>
//               <p>
//                 We are open <br />
//                 9:00am - 6:00pm
//               </p>
//             </div>

//             <div className="md:flex items-center gap-2">
//               <div className="bg-(--secondary-color) h-6 w-6 rounded flex items-center justify-center">
//                 <TiMail size={14} />
//               </div>
//               <p>
//                 Email <br />
//                 <a href="mailto:aphamed0@gmail.com">Send a mail</a>
//               </p>
//             </div>

//             {/* Socials */}
//             <div className="md:flex items-center gap-3 ml-6 animate-bounce">
//               <CiFacebook className="text-blue-600" />
//               <CiLinkedin className="text-blue-700" />
//               <CiInstagram className="text-pink-500" />
//               <FaTiktok className="text-black" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVBAR */}
//       <div
//         className={`sticky top-0 z-50 w-full transition-all duration-300 shadow-md ${
//           isSticky
//             ? "bg-(--primary-color)/70 backdrop-blur-lg"
//             : "bg-(--primary-color)"
//         }`}
//       >
//         <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
//           {/* Mobile Logo */}
//           <img
//             src="/image/footer-logo.png"
//             alt="logo"
//             className="w-24 md:hidden"
//           />

//           {/* Menu Links */}
//           <div
//             className={`
//               ${menuOpen ? "flex" : "hidden"}
//               flex-col absolute top-16 left-0 w-full bg-(--primary-color) text-center space-y-4 py-5
//               md:static md:flex md:flex-row md:space-y-0 md:space-x-5 md:w-auto md:bg-transparent
//             `}
//           >
//             <Link
//               href="/"
//               className="text-white font-bold"
//               onClick={() => setMenuOpen(false)}
//             >
//               HOME
//             </Link>
//             <Link
//               href="/About"
//               className="text-white font-bold"
//               onClick={() => setMenuOpen(false)}
//             >
//               ABOUT
//             </Link>
//             <Link
//               href="/Products"
//               className="text-white font-bold"
//               onClick={() => setMenuOpen(false)}
//             >
//               PRODUCTS
//             </Link>
//             <Link
//               href="/Service"
//               className="text-white font-bold"
//               onClick={() => setMenuOpen(false)}
//             >
//               SERVICES
//             </Link>
//             <Link
//               href="/Portfolio"
//               className="text-white font-bold"
//               onClick={() => setMenuOpen(false)}
//             >
//               PORTFOLIO
//             </Link>
//             <Link
//               href="/Contact"
//               className="text-white font-bold"
//               onClick={() => setMenuOpen(false)}
//             >
//               CONTACT
//             </Link>
//           </div>

//           {/* Right Buttons (Desktop) */}
//           <div className="hidden md:flex items-center gap-4">
//             <button className="bg-(--secondary-color) p-2 rounded text-(--accent-color)">
//               <FaSearch size={18} />
//             </button>
//             <button className="bg-(--secondary-color) py-2 px-4 rounded text-sm font-medium text-(--accent-color)">
//               GET A QUOTE
//             </button>
//           </div>

//           {/* Hamburger (Mobile) */}
//           <button
//             className="md:hidden text-2xl text-white"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>
//         </nav>
//       </div>
//     </>
//   );
// }