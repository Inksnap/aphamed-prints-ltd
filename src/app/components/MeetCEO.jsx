"use client";
import { motion } from "framer-motion";

export default function MeetCEO() {
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
            <p className="font-bold text-xs">Meet the CEO</p>
            <img src="/image/Cdot.png" alt="dot" className="h-2 w-2" />
          </div>

          {/* About text */}
          <div className="mt-5 space-y-4 text-sm leading-6 lg:text-base lg:leading-7 font-medium text-[#080808]/90">
            <p>I’ve always believed that design isn’t just about what you see it’s
          about how it makes you feel. That belief became the foundation
          of Aphamed Prints.</p>
          <p>Hi! Welcome here.</p>
          <p>I’m Ahmed Mustapha Olawale, a passionate Design, Print, and Brand
          Technologist with years of professional experience in the
          creative and printing industry. </p>
          <p>I’m a proud graduate of Yaba College of Technology, where I built a
          strong foundation in printing technology and creative design.
          My journey began long before Aphamed Prints officially launched
          in 2018. With hands-on experience in printing, machine{" "}
          operation, and brand development from SO&L Communication to ARK
          Creative Agency, I’ve learned that true excellence is achieved
          through consistency, innovation, and teamwork.</p>
          <p>Through Aphamed Prints, my mission has always been to redefine what
          quality means in the print and branding space not just through{" "}
          the final result, but through  the entire creative process.
          Every client we work with becomes part of our story, and every
          project is a new opportunity to raise the standard higher.</p>
          <p>At Aphamed Prints, quality isn’t just our job — it’s our identity.</p>   
          </div>
        </motion.div>

        {/* RIGHT: IMAGES */}
        <motion.div
             initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: [0, -5, 0] // subtle floating
      }}
      transition={{
        opacity: { duration: 1.2, ease: "easeOut" }, // fade-in
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" } // floating
      }}
          className="flex-1 relative flex justify-center"
        >
          {/* MAIN IMAGE */}
          <div className="w-[90%]  rounded-xl overflow-hidden shadow-xl relative">
            <img
              src="/image/CeoImg.png"
              alt="Aphamed Prints workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
