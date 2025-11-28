"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: "/image/Testimonial1.png",
    text: `Aphamed prints have been a reliable and dependable brand, always delivering even at the most impossible,
    urgent hour. And this is without compromise on the quality. I have trusted this brand for over 5 years, and
    they have always delivered the optimum quality of service. Well done Aphamed prints`,
    name: "Dr. (Barr) Mayomi Williams",
    title: "CEO COZY HAVENS",
  },
  {
    id: 2,
    image: "/image/Testimonial2.png",
    text: `Aphamed prints have been a reliable and dependable brand, always delivering even at the most impossible,
    urgent hour. And this is without compromise on the quality. I have trusted this brand for over 5 years, and
    they have always delivered the optimum quality of service. Well done Aphamed prints`,
    name: "Masrurat Oloruntobiloba Akintayo",
    title: "CEO KICHIES DELIGHT",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <div className="m-20">
      <div className="text-center mb-10">
        <h3 className="michroma-font text-5xl font-bold">TESTIMONIAL</h3>
        <p className="font-medium text-md italic">Here is what people say about us</p>
      </div>

      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-10"
          >
            <div className="flex items-center justify-center gap-20">
              <div>
                <img src={current.image} alt="testimonial-img" className="w-[300px] h-auto" />
              </div>

              <div>
                <p className="font-light text-md text-[#1F1F1F] leading-6 max-w-md">
                  {current.text}
                </p>

                <h3 className="mt-8 font-bold text-md text-[var(--primary-color)]">
                  {current.name}
                </h3>
                <p className="font-bold text-xs italic">{current.title}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              {testimonials.map((_, i) => (
                <motion.div
                  key={i}
                  onClick={() => setIndex(i)}
                  className="cursor-pointer h-1 rounded-full bg-gray-400"
                  animate={{
                    width: index === i ? 30 : 10,
                    backgroundColor: index === i ? "var(--primary-color)" : "#c4c4c4",
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
