"use client";
import { FaCheck } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";


export default function Services() {
  return (
    <div className="m-5 sm:m-10 lg:m-20">
      <div className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-10">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-[45%] lg:w-[400px] h-auto lg:h-[750px] border border-gray-400 rounded-tr-xl rounded-bl-xl shadow-xl bg-(--neutral-color)/80 p-6 lg:p-10"
        >
          <div className="flex items-center gap-3">
            <img src="/image/Wwdbimg1.png" alt="Graphic Design" className="w-10 h-10" />
            <h1 className="font-bold text-2xl text-[#151515]">Graphic Design</h1>
          </div>
          <p className="font-medium text-sm text-[#151515] leading-5 mt-5">
            We design with intention, blending creativity, strategy, and
              experience to create visuals that inspire action. Logos, flyers,
              social media graphics, or print layouts — whatever your design
              needs, we bring them to life with detail and excellence.
          </p>
          <img src="/image/Service-img1.png" alt="graphic-img" className="mt-5 rounded" />
          <ul className="font-extralight text-[15px] leading-5 mt-5 space-y-2">
            {[
              "Logo & Brand Identity Design",
              "Flyers, Posters & Brochures",
              "Business Cards & Corporate Stationery",
              "Product Packaging & Labels",
              "Social Media Graphics",
              "Event & Campaign Designs",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaCheck className="text-(--primary-color)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-(--neutral-color) [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] px-5 py-2 rounded-md mt-5 mx-auto block relative"
          >
            ORDER NOW <HiOutlineArrowLongRight className="absolute top-1/2 left-[85%] -translate-y-1/2" />
          </motion.button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full sm:w-[45%] lg:w-[400px] h-auto lg:h-[750px] border border-gray-400 rounded-tr-xl rounded-bl-xl shadow-xl bg-(--neutral-color)/80 p-6 lg:p-10"
        >
          <div className="flex items-center gap-3">
            <img src="/image/Wwdbimg2.png" alt="Printing Solution" className="w-10 h-10" />
            <h1 className="font-bold text-2xl text-[#151515]">Printing Solution</h1>
          </div>
          <p className="font-medium text-sm text-[#151515] leading-5 mt-5">
            We provide high-quality printing solutions that transform ideas
              into tangible, lasting impressions. Whether it’s on paper, fabric,
              or promotional materials, our prints are designed to deliver
              excellence in every detail.
          </p>
          <img src="/image/Service-img2.png" alt="printing-img" className="mt-5 rounded" />
          <ul className="font-extralight text-[15px] leading-6 mt-5 space-y-2">
            {[
              "Digital Printing",
              "Offset Printing",
              "Large Format Printing",
              "Sublimation & DTG Printing",
              "Sticker & Label Printing",
              "Corporate & Event Printing",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaCheck className="text-(--primary-color)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-(--neutral-color) [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] px-5 py-2 rounded-md mt-5 mx-auto block relative"
          >
            ORDER NOW <HiOutlineArrowLongRight className="absolute top-1/2 left-[85%] -translate-y-1/2" />
          </motion.button>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full sm:w-[45%] lg:w-[400px] h-auto lg:h-[750px] border border-gray-400 rounded-tr-xl rounded-bl-xl shadow-xl bg-(--neutral-color)/80 p-6 lg:p-10"
        >
          <div className="flex items-center gap-3">
            <img src="/image/Wwdbimg3.png" alt="Branding & Merchandise" className="w-10 h-10" />
            <h1 className="font-bold text-2xl text-[#151515] leading-5">
              Branding & <br /> Merchandise
            </h1>
          </div>
          <p className="font-medium text-sm text-[#151515] leading-5 mt-5">
            Our Branding & Merchandise services are designed to help you make
              a lasting impression — turning everyday items into powerful brand
              tools. From custom apparel to corporate souvenirs, we blend
              creativity and quality to help your brand stand out wherever it
              goes.
          </p>
          <img src="/image/Service-img3.png" alt="branding-img" className="mt-10 rounded" />
          <ul className="font-extralight text-[15px] leading-6 mt-5 space-y-2">
            {[
              "Corporate Merchandise",
              "Branded Apparel",
              "Gift Items & Souvenirs",
              "Packaging & Labels",
              "Event Branding",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaCheck className="text-(--primary-color)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-(--neutral-color) [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] px-5 py-2 rounded-md mt-5 mx-auto block relative"
          >
            ORDER NOW <HiOutlineArrowLongRight className="absolute top-1/2 left-[85%] -translate-y-1/2" />
          </motion.button>
        </motion.div>

        {/* Last stacked card (UI/UX) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full sm:w-[45%] lg:w-[400px] h-[750px] relative gap-10 hidden"
        >
          <div className="[background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] p-5 rounded-xl shadow-lg h-[300px] z-10 relative">
            <div className="flex items-center gap-2 p-3">
              <img src="/image/uiuximg.png" alt="UI/UX" className="w-10 h-10" />
              <h1 className="font-bold text-2xl text-(--neutral-color)">UI/UX Design</h1>
            </div>
            <p className="font-medium text-md text-(--neutral-color) mt-2">
              Smart, user-focused digital experiences
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-(--neutral-color) mt-30 px-5 py-2 rounded-md ml-auto block flex items-center justify-center"
            >
              ORDER NOW <HiOutlineArrowLongRight className="ml-2" />
            </motion.button>
          </div>

          {/* Stacked layers */}
          <div className="relative -top-10">
          <div className="absolute top-32 left-0 w-[220px] h-[300px] rounded-4xl bg-[#484848]"></div>
          <div className="absolute top-32 left-20 w-[220px] h-[300px] rounded-4xl bg-[#383838]"></div>
          <div className="absolute top-32 left-40  w-[220px] h-[300px] rounded-4xl bg-[#151515]"></div>
          <img src="/image/uiuximg2.png" alt="process" className="absolute top-55 left-30" />
          <img src="/image/uiuximg3.png" alt="process" className="absolute top-60 left-60" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
