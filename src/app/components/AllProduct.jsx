"use client";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  { icon: "/image/Producticon1.png", name: "UIUX\nDesign" },
  { icon: "/image/Producticon2.png", name: "Corporate\nBranding" },
  { icon: "/image/producticon3.png", name: "Printing\nServices" },
  { icon: "/image/producticon4.png", name: "Signages" },
  { icon: "/image/producticon5.png", name: "Customized\nBranding" },
  { icon: "/image/producticon6.png", name: "Gift Items &\nSouvenirs" },
];

export default function AllProducts() {
  return (
    <div className="px-4 py-10 lg:px-20 lg:py-10">
      <motion.div
        className="flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-5 lg:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            className="bg-(--neutral-color) p-3 flex md:flex-row items-center gap-2 shadow-md rounded-md w-[150px] md:w-[170px] lg:w-[180px] hover:shadow-lg transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } },
            }}
          >
            <img
              src={product.icon}
              alt={product.name}
              className="w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
            <p className="text-center text-[13px] md:text-sm lg:text-base font-light md:font-medium lg:font-medium leading-5 whitespace-pre-line">
              {product.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <Link href="/Products">
      <div className="flex items-center justify-center lg:justify-end gap-2 mt-6 cursor-pointer hover:text-(--accent-color)">
        
        <p className="text-(--products-color) font-medium text-sm md:text-base lg:text-lg">
          SEE ALL PRODUCTS
        </p>
        <FaArrowRight className="text-(--products-color) hover:text-(--accent-color) transition-colors duration-300" />
      </div>
      </Link>
    </div>
  );
}
