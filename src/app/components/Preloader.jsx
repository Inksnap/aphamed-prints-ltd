"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const [loading, setLoading] = useState(true); // start with true!
  const pathname = usePathname();

  // Hide preloader after page is fully loaded
  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (document.readyState === "complete") {
        setLoading(false);
      } else {
        window.addEventListener("load", handleLoad);
      }

      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Optional: show preloader briefly on route change
  useEffect(() => {
    if (!loading) { // don't trigger on first load
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 500); // adjust duration
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <Image
        src="/image/logo2.png"
        width={140}
        height={140}
        alt="Loading..."
        className="animate-pulse"
      />
    </div>
  );
}
