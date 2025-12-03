"use client";
import { Montserrat, Merienda, Michroma } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar.jsx"
import Preloader from "./components/Preloader.jsx";
import Footertwo from "./components/footertwo.jsx";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
  variable: "--font-montserrat",
});

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-merienda",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
}); 

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="inline" className={`${montserrat.variable} ${merienda.variable} ${michroma.variable}`}>
      <body>
        <Preloader />
        {/* Navbar */}
        <Navbar />
        {/* Main Page content */}
        <main className="">{children}</main>
        
        <Footertwo />
      </body>
    </html>
  );
}
