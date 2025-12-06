"use client";
import { FaCheck } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const servicesLg = [
  {
    title: "Graphic Design",
    description:
      "We design with intention, blending creativity, strategy, and experience to create visuals that inspire action. Logos, flyers, social media graphics, or print layouts — whatever your design needs, we bring them to life with detail and excellence.",
    features: [
      "Logo & Brand Identity Design",
      "Flyers, Posters & Brochures",
      "Business Cards & Corporate Stationery",
      "Product Packaging & Labels",
      "Social Media Graphics",
      "Event & Campaign Designs",
    ],
    img: "/image/Wwdbimg1.png",
  },
  {
    title: "Printing Solution",
    description:
      "We provide high-quality printing solutions that transform ideas into tangible, lasting impressions. Whether it’s on paper, fabric, or promotional materials, our prints are designed to deliver excellence in every detail.",
    features: [
      "Digital Printing",
      "Offset Printing",
      "Large Format Printing",
      "Sublimation & DTG Printing",
      "Sticker & Label Printing",
      "Corporate & Event Printing",
    ],
    img: "/image/Wwdbimg2.png",
  },
  {
    title: "Branding & Merchandise",
    description:
      "Our Branding & Merchandise services are designed to help you make a lasting impression — turning everyday items into powerful brand tools. From custom apparel to corporate souvenirs, we blend creativity and quality to help your brand stand out wherever it goes.",
    features: [
      "Corporate Merchandise",
      "Branded Apparel",
      "Gift Items & Souvenirs",
      "Packaging & Labels",
      "Event Branding",
    ],
    img: "/image/Wwdbimg3.png",
  },
];

export default function WhatWeDoBestLg() {
  return (
    <div className="mt-20 mb-20 hidden lg:block px-30">
      {/* Header */}
      <div className="text-center mb-12">
        <button className="bg-(--secondary-color) p-3 rounded-md font-bold text-2xl text-(--primary-color)">
          WHAT WE DO BEST
        </button>
        <p className="mt-3 font-medium text-lg text-(--primary-color)">
          FROM LOGOS TO CUSTOM WEAR, WE TURN BRANDS INTO EXPERIENCE PEOPLE REMEMBER.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-3 gap-8 justify-center">
        {servicesLg.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-(--neutral-color)/80 border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5 relative flex flex-col"
          >
            {/* Title */}
            <div className="flex items-center gap-2 mb-3">
              <img src={service.img} alt={service.title} className="w-10 h-10" />
              <h2 className="font-bold text-2xl text-[#151515]">{service.title}</h2>
            </div>

            {/* Description */}
            <p className="font-medium text-[17.93px] text-[#151515] mb-5">{service.description}</p>

            {/* Features */}
            <ul className="font-extralight text-[15px] leading-6 mb-5">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Order Button */}
            <button className="text-(--neutral-color) [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] p-2 rounded-md mt-auto mx-auto relative flex items-center justify-center gap-2">
              ORDER NOW
              <HiOutlineArrowRight className="text-xl" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
