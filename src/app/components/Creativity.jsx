"use client";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CreativitySection() {
  return (
    <div className="px-5 lg:px-10 py-10 relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 lg:gap-8 relative">
        {/* Image Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
          whileHover={{ y: -8 }}
          className="relative w-[350px] h-[350px] lg:w-[520px] lg:h-[500px] flex-shrink-0 cursor-pointer"
        >
          {/* Card 1 */}
          <motion.div
            whileHover={{ x: -5, y: -5 }}
            className="absolute top-0 left-0 w-[200px] h-[270px] lg:w-[280px] lg:h-[380px] 
            bg-[#073226] rounded-3xl shadow-lg"
          ></motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ x: -3, y: -8 }}
            className="absolute top-0 left-18 lg:left-20 w-[200px] h-[270px] lg:w-[280px] lg:h-[380px] 
            bg-[#024230] rounded-3xl shadow-lg"
          ></motion.div>

          {/* Image card */}
          <motion.div
            whileHover={{ x: -2, y: -12 }}
            className="absolute top-0 left-36 lg:left-40 w-[200px] h-[270px] lg:w-[280px] lg:h-[380px] 
            rounded-3xl overflow-hidden shadow-xl"
          >
            <motion.img
              src="/image/Creativity-image.png"
              alt="creativity image"
              className="w-full h-full object-cover rounded-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>

        {/* Text & Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
            delay: 0.2,
          }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg gap-5"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-(--primary-color) leading-8 lg:leading-13">
            CREATIVITY <br /> MEETS <br /> PRECISION
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-[#151515] font-light leading-relaxed">
            At Aphamed Prints, we go beyond ink and paper. We are designers,
            creators, and problem-solvers who combine printing technology,
            branding expertise, and UI/UX design to help individuals and
            businesses stand out. Our journey started with printing and
            branding, and today, we’re expanding into digital product design—
            because we believe creativity has no limits.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-3 bg-(--secondary-color) text-[#151515] 
            font-medium rounded-md hover:bg-(--accent-color) hover:text-white transition-colors duration-300"
          >
            ORDER NOW
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
