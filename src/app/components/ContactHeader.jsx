"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactHeader() {
  return (
    <div className="bg-gradient-to-r from-[#0CE7AC] to-[#00543D] py-8 lg:py-14">
      <div className="container mx-auto px-4">
        <div className="flex  flex-row max-[360px]:flex-col items-center justify-around gap-10 lg:gap-64">
          {/* Left Side */}
          <div>
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl lg:text-5xl font-bold text-(--neutral-color)"
            >
              CONTACTS
            </motion.h1>

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2 text-xs lg:text-sm text-[#080808] mt-3"
            >
              <Link href="/">
                <p className="font-medium hover:underline">HOME</p>
              </Link>
              <img src="/image/Lineicon2.png" alt="" className="h-3" />
              <a
                href="https://wa.me/2349091643613"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                GET QUOTE
              </a>
            </motion.div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 lg:gap-5">
            {[
              "/image/anglebracket.png",
              "/image/dot1.png",
              "/image/dot2.png",
              "/image/dot3.png",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="icon"
                className={i === 0 ? "w-6 lg:w-10" : "w-3 h-3 lg:w-5 lg:h-5"}
                animate={{
                  y: [0, -6, 0],
                  scale: [1, 1.05, 1],
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 3 + i * 0.7, 
                  delay: i * 0.3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 