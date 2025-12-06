"use client";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const services = [
  {
    title: "Graphic Design",
    subtitle: "Designs that speak louder than words.",
    description:
      "We design with intention, blending creativity, strategy, and experience to create visuals that inspire action. Logos, flyers, social media graphics, or print layouts — whatever your design needs, we bring them to life with detail and excellence.",
    bgColor: "bg-(--primary-color)",
    textColor: "text-(--neutral-color)",
    img: "/image/Wwdbimg1.png",
  },
  {
    title: "Printing Solutions",
    subtitle: "From paper to fabric, your vision perfectly printed.",
    description:
      "We provide high-quality printing solutions that transform ideas into tangible, lasting impressions. Whether it’s on paper, fabric, or promotional materials, our prints are designed to deliver excellence in every detail.",
    bgColor: "bg-(--secondary-color)",
    textColor: "text-[#151515]",
    img: "/image/Wwdbimg2.png",
  },
  {
    title: "UI/UX Design",
    subtitle: "Smart, user-focused digital experiences",
    description:
      "We provide high-quality digital design solutions that transform ideas into seamless, user-friendly experiences. Whether it’s websites, apps, or digital products, we craft interfaces with precision and creativity.",
    bgColor: "bg-(--footer-color)",
    textColor: "text-[#151515]",
    img: "/image/Wwdbimg1.png",
  },
  {
    title: "Branding & Merchandise",
    subtitle: "Wear it. Share it. Live your brand.",
    description:
      "Our Branding & Merchandise services are designed to help you make a lasting impression — turning everyday items into powerful brand tools. From custom apparel to corporate souvenirs, we blend creativity and quality to help your brand stand out wherever it goes.",
    bgColor: "bg-(--accent-color)",
    textColor: "text-(--neutral-color)",
    img: "/image/Wwdbimg3.png",
  },
];

export default function WhatWeDoBest() {
  return (
    <div className="block lg:hidden mt-15 mb-20 px-5">
      {/* Header */}
      <div className="text-center mb-10">
        <button className="bg-(--secondary-color) p-2 rounded-md font-bold text-xl text-(--primary-color)">
          WHAT WE DO BEST
        </button>
        <p className="mt-2 font-medium text-sm text-(--primary-color)">
          FROM LOGOS TO CUSTOM WEAR, WE TURN BRANDS INTO EXPERIENCE PEOPLE REMEMBER.
        </p>
      </div>

      {/* Services with staggered slide animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // slide from left/right alternately
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            viewport={{ once: false, amount: 0.3 }}
            className={`${service.bgColor} w-full shadow-xl shadow-gray-400 border-gradient-animate rounded-tr-2xl rounded-bl-2xl p-5 relative`}
          >
            <div className="flex items-center gap-2 mb-3">
              <img src={service.img} alt={service.title} className="w-10 h-10" />
              <h2 className={`font-bold text-2xl ${service.textColor}`}>{service.title}</h2>
            </div>
            <p className={`font-bold text-lg ${service.textColor} mb-2`}>{service.subtitle}</p>
            <p className={`font-bold text-sm ${service.textColor} mb-5`}>{service.description}</p>
            <div className={`font-bold text-lg ${service.textColor} flex items-center gap-2 cursor-pointer`}>
              <span>ORDER NOW</span>
              <HiOutlineArrowRight className={`${service.textColor} text-xl`} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
