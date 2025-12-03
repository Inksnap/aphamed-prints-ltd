"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Preloader duration (2s)

    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <Image
        src="/image/logo.svg"   // <-- place your logo inside /public/logo.png
        width={140}
        height={140}
        alt="Loading..."
        className="animate-pulse"
      />
    </div>
  );
}
