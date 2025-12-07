"use client";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "QUALITY",
      desc: "We use premium materials and expert techniques to ensure every print and design stands out clean, vibrant, and lasting",
      img: "/image/Ark-img1.png",
    },
    {
      title: "FAST & RELIABLE",
      desc: "We respect your time. Every project is delivered promptly without compromising quality even when deadlines are tight.",
      img: "/image/Ark-img2.png",
    },
    {
      title: "CREATIVE EXCELLENCE",
      desc: "Our designs go beyond visuals, they tell stories, capture attention, and represent your brand with originality.",
      img: "/image/Ark-img3.png",
    },
    {
      title: "CUSTOMER FOCUSED",
      desc: "Your satisfaction is our priority. We listen, customize, and deliver exactly what your brand needs to shine.",
      img: "/image/Ark-img4.png",
    },
  ];

  return (
    <div className="mx-5 my-10 lg:m-30">
      {/* Heading */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="michroma-font font-bold text-xl lg:text-4xl leading-10">
          WHY CHOOSE US
        </h1>
        <p className="font-medium text-sm lg:text-md leading-5 mt-2 lg:mt-4">
          At Aphamed Prints, we blend creativity, precision, and commitment <br />
          to deliver designs and prints that speak quality.
          <br />
          Here’s why our clients trust us:
        </p>
      </motion.div>

      {/* Features Cards */}
      <div className="m-10 flex flex-col lg:flex-row items-center justify-center gap-15 lg:gap-30">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col items-center mt-10`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img src="/image/Ark1.png" alt="ark" className="hidden lg:block" />
            <img
              src={feature.img}
              alt="ark-img"
              className={`absolute -top-15 lg:top-5 ${
                i === 0
                  ? "left-26 lg:left-10"
                  : i === 1
                  ? "left-26 lg:left-10"
                  : i === 2
                  ? "left-26 lg:left-10"
                  : "left-26 lg:left-10"
              }`}
            />
            <div className="text-center mt-3">
              <h3 className="font-bold text-md text-[#062B21] leading-5 lg:hidden">{feature.title}</h3>
              <p className="font-medium font-sm leading-5 lg:hidden">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop text */}
      <div className="flex items-center justify-center gap-15 m-10">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="text-center hidden lg:block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <h3 className="font-bold text-md text-[#062B21] leading-5">{feature.title}</h3>
            <p className="font-medium font-sm leading-5">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
