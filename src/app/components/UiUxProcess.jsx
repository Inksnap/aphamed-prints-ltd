"use client";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

export default function UiUxProcessLg() {
  return (
    <div className="mt-30 mb-20 px-40 hidden lg:block">
      <div className="relative flex items-start justify-between ">
        {/* UI/UX Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[458px] h-[187px] [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] p-3"
        >
          <div className="flex items-center gap-2 p-3">
            <img src="/image/uiuximg.png" alt="uiuximg" className="w-10 h-10" />
            <h1 className="font-bold text-2xl text-(--neutral-color)">UI/UX Design</h1>
          </div>
          <div className="m-2 relative">
            <p className="font-extralight text-[20.7px] text-(--neutral-color)">
              Smart, user-focused digital experiences
            </p>
            <div className="flex items-center justify-end gap-2 mt-2 cursor-pointer">
              <span className="font-extralight text-[17.29px] text-(--neutral-color)">ORDER NOW</span>
              <HiOutlineArrowRight className="text-(--neutral-color) text-xl" />
            </div>
          </div>
        </motion.div>

        {/* Layered Cards Background */}
        <div className="relative w-[500px] h-[200px]">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1 } }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[350px] h-60 rounded-4xl bg-[#484848] absolute top-[-30px] left-[10px]"
          />
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[350px] h-60 rounded-4xl bg-[#383838] absolute top-[-30px] left-[80px]"
          />
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3 } }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[350px] h-60 rounded-4xl bg-[#151515] absolute top-[-30px] left-[150px]"
          />

          {/* Images on top of layered cards */}
          <motion.img
            src="/image/uiuximg2.png"
            alt="ourprocess"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.4 } }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute top-8 left-[100px] h-auto rounded-xl"
          />
          <motion.img
            src="/image/uiuximg3.png"
            alt="ourprocess"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.5 } }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute top-15 left-[300px]  h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
