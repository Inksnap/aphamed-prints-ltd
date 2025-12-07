"use client";
import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <div className="bg-gradient-to-r from-[#0CE7AC] to-[#00543D] py-8 lg:py-14">
      <div className="container mx-auto px-4">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left Side */}
          <div>
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl lg:text-5xl font-bold text-(--neutral-color)"
            >
              ABOUT US
            </motion.h1>

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2 text-xs lg:text-sm text-[#080808] mt-3"
            >
              <p className="font-medium">HOME</p>
              <img src="/image/Lineicon2.png" alt="" className="h-3" />
              <p className="font-medium">GET QUOTE</p>
            </motion.div>
          </div>

          {/* Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 lg:gap-5"
          >
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
                className="w-6 lg:w-10"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

        </div>

      </div>
    </div>
  );
}
