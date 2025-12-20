"use client";
import { useState, useEffect } from "react";

const mobileImagesArray = [
  "/image/Newheroimg1.png",
  "/image/Newheroimg2.png",
];

const desktopImagesArray = [
  "/image/Heroimg1.png",
  "/image/Heroimg2.png",
  "/image/Newheroimg1.png",
  "/image/Heroimg4.png",
];

export default function HeroImages() {
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  const [mobileImages, setMobileImages] = useState(mobileImagesArray);
  const [desktopImages, setDesktopImages] = useState(desktopImagesArray);

  //  Mobile rotation 
  useEffect(() => {
    if (window.innerWidth >= 1024) return; // Skip for desktop

    const interval = setInterval(() => {
      setMobileImages((prev) => {
        const arr = [...prev];
        arr.push(arr.shift());
        return arr;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Desktop rotation
  useEffect(() => {
    if (window.innerWidth < 1024) return; // Skip for mobile

    const interval = setInterval(() => {
      setDesktopImages((prev) => {
        const arr = [...prev];
        arr.push(arr.shift());
        return arr;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center">

      {/* Mobile */}
      <div className="flex lg:hidden gap-4 p-5 mt-10">
        {mobileImages.map((src, i) => (
          <img key={i} src={src} alt="hero" className="w-40 md:w-50 h-auto" />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex justify-center items-center gap-8 m-10">
        {desktopImages.map((src, i) => (
          <img key={i} src={src} alt="hero" className="w-80" />
        ))}
      </div>
    </div>
  );
}