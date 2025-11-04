"use client";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import { Clock } from "lucide-react";
import { TiMail } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en" data-theme="inline" className={`${montserrat.className}`}>
      <body>
        {/* Navigation visible on only smaller screens*/}
        <div className="flex justify-center items-center gap-3 p-5 bg-(--neutral-color) w-full h-5 lg:hidden">
          <div className=" bg-(--secondary-color)  h-6 w-6 rounded relative">
            <Clock className="w-5 h-5 align-center absolute top-0.5 left-0.5" />
          </div>
          <p className="text-sm leading-tight">
            we are open Every day 9:00am - 6:00pm
          </p>
        </div>
        {/* Main Navigation bar 1 */}
        <div className="Navigation bar1 hidden lg:block">
          <nav className="flex justify-between items-center ml-10 mr-10 mb-5 mt-5">
            <div>
              <div>
                <a href="#">
                  <img
                    src="/image/logo.svg"
                    alt="Logo"
                    className=" ml-30 hidden lg:block"
                  />
                </a>
              </div>
            </div>
            <div className="lg:flex lg:gap-8 lg:items-center hidden lg:justify-between mt-2 mr-2 lg:mr-30 relative">
              <div className="flex gap-2 items-center">
                <div className=" bg-(--secondary-color) h-6 w-6 rounded relative">
                  <FaWhatsapp className="w-5 h-5 align-center absolute top-0.5 left-0.5" />
                </div>
                <p className="text-xs leading-tight">
                  Get Support <br />
                  <a href="https://wa.me/+2349091643613">
                    Chat with us on WhatsApp
                  </a>
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className=" bg-(--secondary-color)  h-6 w-6 rounded relative">
                  <Clock className="w-5 h-5 align-center absolute top-0.5 left-0.5" />
                </div>
                <p className="text-xs leading-tight">
                  we are open <br />
                  Every day 9:00am - 6:00pm
                </p>
              </div>
              <div className="gap-2 items-center hidden lg:flex">
                <div className=" bg-(--secondary-color)  h-6 w-6 rounded relative">
                  <TiMail className="w-5 h-5 align-center absolute top-0.5 left-0.5" />
                </div>

                <p className="text-xs leading-tight">
                  E-mail <br />
                  <a href="mailto:aphamed0@gmail.com">Send us a mail</a>
                </p>
              </div>{" "}
              <br />
              <div className="gap-2 justify-end items-center mr-10 mt-0 pt-0 absolute top-9 left-110 hidden lg:flex">
                <CiFacebook className="text-blue-600 hover:text-blue-800 transition-colors duration-300 animate-bounce" />
                <CiLinkedin className="text-blue-700 hover:text-blue-900 transition-colors duration-300 animate-bounce" />
                <CiInstagram className="text-pink-500 hover:text-pink-800 transition-colors duration-300 animate-bounce" />
                <FaTiktok className="text-black-500 hover:text-black-800 transition-colors duration-300 animate-bounce" />
              </div>
            </div>
          </nav>
        </div>
        {/* Main Navigation bar 2 with responsivenesson smaller screens  */}
        <div className="Navigation bar2 sticky top-0 z-50 left-0 w-full shadow-md">
          <nav
            className={`flex justify-between lg:justify-center items-center gap-6 py-4 bg-(--neutral-color) lg:bg-(--primary-color) shadow px-4 transition-all duration-500 backdrop-blur-lg lg:backdrop-blur-lg ${
              isSticky
                ? "bg-(--primary-color)/50 lg:bg-(--primary-color)/50 shadow-md py-2"
                : "bg-(--neutral-color) lg:bg-(--primary-color) py-4"
            }`}
          >
            <div className="flex items-center gap-50 justify-evenly lg:justify-between lg:gap-6">
              {/* Mobile Logo */}
              <a href="#">
                <img
                  src="/image/logo.svg"
                  alt="Logo"
                  className="lg:hidden ml-5"
                />
              </a>

              {/* Hamburger Menu Button */}
              <button
                className="lg:hidden text-xl text-(--primary-color) mr-5"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>

              {/* Menu Items */}
              <div
                className={`${
                  menuOpen ? "flex" : "hidden"
                } flex-col absolute top-16 left-0 w-full bg-(--primary-color) text-center space-y-4 py-4 z-10 lg:static lg:flex lg:flex-row lg:w-auto lg:bg-transparent lg:space-y-0 lg:space-x-8 lg:py-0`}
              >
                <a href="/" className="text-white font-medium hover:underline">
                  Home
                </a>
                <a
                  href="/About"
                  className="text-white font-medium hover:underline"
                >
                  About
                </a>
                <a
                  href="/Products"
                  className="text-white font-medium hover:underline"
                >
                  Products
                </a>
                <a
                  href="/Portfolio"
                  className="text-white font-medium hover:underline"
                >
                  Portfolio
                </a>
                <a
                  href="/Contact"
                  className="text-white font-medium hover:underline"
                >
                  Contact
                </a>
              </div>
              <div className="hidden lg:flex items-center gap-4">
                <button className="bg-(--secondary-color) p-2 rounded">
                  <FaSearch className="h-5 w-5" />
                </button>
                <button className="bg-(--secondary-color) py-2 px-4 rounded">
                  Get a Quote
                </button>
              </div>
            </div>
          </nav>
        </div>
        {/* Main Page content */}
        <main className="pt-5">{children}</main>
      </body>
    </html>
  );
}
