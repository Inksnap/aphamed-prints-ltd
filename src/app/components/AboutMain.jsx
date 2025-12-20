"use client";
import { motion } from "framer-motion";

export default function AboutMain() {
  return (
    <section className="mt-14 lg:mt-24 mb-20 lg:mb-32">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

        {/* LEFT: TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-[600px]"
        >
          {/* Label pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-sm bg-(--secondary-color) w-fit">
            <img src="/image/Cdot.png" alt="dot" className="h-2 w-2" />
            <p className="font-bold text-xs">About Us</p>
            <img src="/image/Cdot.png" alt="dot" className="h-2 w-2" />
          </div>

          {/* About text */}
          <div className="mt-5 space-y-4 text-sm leading-6 lg:text-base lg:leading-7 font-medium text-[#080808]/90">
            <p>
              Aphamed Prints is a full-service branding, design, and printing company committed to bringing ideas to life through creativity, precision, and quality craftsmanship.
            </p>

            <p>
              We believe every design tells a story, one that deserves to be printed with care, passion, and purpose. Since our inception in 2018, we’ve grown from a small print brand into a trusted name known for premium-quality printing and branding solutions across Lagos and beyond.
            </p>

            <p>
              We specialize in digital printing, brand design, and creative production. From business cards to large banners, and from corporate branding to custom merchandise, our goal is simple: make your brand stand out beautifully and professionally.
            </p>

            <p>
              Guided by the belief that “Quality is our Job,” we don’t just print; we partner with clients to bring their ideas to life.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 relative flex justify-center"
        >
          {/* MAIN IMAGE */}
          <div className="w-[90%] max-w-[500px] h-[260px] lg:h-[340px] rounded-xl overflow-hidden shadow-xl relative">
            <img
              src="/image/Aboutimg.png"
              alt="Aphamed Prints workspace"
              className="w-full h-full object-cover"
            />
          </div>
          {/* FLOATING SMALL IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute right-6 -bottom-6 lg:right-10 lg:-bottom-10 w-[65%] max-w-[320px] h-[180px] lg:h-[220px] bg-white rounded-lg overflow-hidden shadow-lg border border-white"
          >
            <img
              src="/image/Aboutimg.png"
              alt="Aphamed Prints equipment"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
