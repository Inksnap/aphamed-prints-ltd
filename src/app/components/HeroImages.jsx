"use client";
import { useState, useEffect } from "react";

// ⭐ Mobile: ONLY 3 images
const mobileImagesArray = [
  "/image/Heroimg1.png",
  "/image/Heroimg2.png",
  "/image/Heroimg3.png",
];

// ⭐ Desktop: ALL 4 images
const desktopImagesArray = [
  "/image/Heroimg1.png",
  "/image/Heroimg2.png",
  "/image/Heroimg3.png",
  "/image/Heroimg4.png",
];

export default function HeroImages() {
  const [mobileImages, setMobileImages] = useState(mobileImagesArray);
  const [desktopImages, setDesktopImages] = useState(desktopImagesArray);

  // ⭐ Rotate the 3 mobile images
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileImages((prev) => {
        const arr = [...prev];
        arr.push(arr.shift());
        return arr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ⭐ Rotate the 4 desktop images
  useEffect(() => {
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
    <div className="relative w-full">

      {/* ⭐ MOBILE / TABLET — Only 3 images */}
      <div className="lg:hidden flex justify-center items-center gap-4 p-5 m-5">
        {mobileImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="hero"
            className="w-30 h-auto min-[768px]:max-[1023px]:w-50"
          />
        ))}
      </div>

      {/* ⭐ DESKTOP — All 4 images */}
      <div className="hidden lg:flex justify-center items-center gap-8 relative m-10">
        {desktopImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="hero"
            className=""
          />
        ))}
      </div>
    </div>
  );
}
