"use client";
import { motion } from "framer-motion";
import Numbers from "./components/numbers.jsx";
import Portfolio from "./components/portfolio.jsx";
import Footerone from "./components/footerone.jsx";
import HeroImages from "./components/HeroImages.jsx";
import AllProducts from "./components/AllProduct.jsx";
import CreativitySection from "./components/Creativity.jsx"
import WhatWeDoBest from "./components/WhatWeDoBest.jsx"
import WhatWeDoBestLg from "./components/WhatWeDoBestLg.jsx"
import UiUxProcess from "./components/UiUxProcess.jsx"
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <main>
      {/*Hero Section */}
      <div className="HeroSection px-4 py-10 lg:px-10 lg:py-10">
        {/* Hero Text */}
        <motion.div
          className="HeroText flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-(--Primary-color) leading-7 md:leading-12 lg:leading-[65px]"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            WE DON’T JUST PRINT, <br /> WE PRINT EXPERIENCE <br /> THAT LAST
          </motion.h1>

          <motion.p
            className="text-sm md:text-lg lg:text-lg font-light md:font-medium lg:font-medium mt-2 md:mt-4 leading-4 md:leading-5 lg:leading-6 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
          >
            From prints to brands to digital design, we deliver creativity with
            perfection.
          </motion.p>

          <div className="buttons flex md:flex-row gap-4 md:gap-6 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-(--secondary-color) p-3 rounded-md flex items-center gap-2 text-sm md:text-md font-medium shadow-md hover:bg-(--primary-color) hover:text-white"
            >
              See our work
              <FaArrowRightLong className="text-(--accent-color) hover:text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-(--button-color) p-3 rounded-md flex items-center gap-2 text-sm md:text-md font-medium shadow-md hover:bg-(--accent-color) hover:text-white"
            >
              Start your projects
              <FaArrowRightLong className="text-(--accent-color) hover:text-white" />
            </motion.button>
          </div>
        </motion.div>

        {/* Hero Images */}
        <HeroImages />
      </div>

      <AllProducts />

      <CreativitySection />

      <WhatWeDoBest />

      <WhatWeDoBestLg />

      <UiUxProcess />

      <Numbers />
   
      <Portfolio />
      <Footerone />
    </main>
  );
}
