"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillBehanceSquare } from "react-icons/ai";
import { FaGoogleDrive } from "react-icons/fa";


const portfolioItems = [
  {
    id: 1,
    category: "Print & Brand",
    image: "/image/Portimg7.jpg",
    description: "Signage Design",
  },
  {
    id: 2,
    category: "Print & Brand",
    image: "/image/Newportfolioimg2.png",
    description: "Jersey Prints",
  },
  {
    id: 3,
    category: "Print & Brand",
    image: "/image/Portimg2.jpg",
    description: "Club Poster Design",
  },
  {
    id: 4,
    category: "Print & Brand",
    image: "/image/Newportfolioimg4.jpeg",
    description: "Double side Business Card",
  },
  {
    id: 5,
    category: "Print & Brand",
    image: "/image/Newportfolioimg5.jpeg",
    description: "Site Helmet",
  },
  {
    id: 6,
    category: "Print & Brand",
    image: "/image/Portimg8.jpg",
    description: "A3 Paper Bag",
  },
  {
    id: 7,
    category: "Print & Brand",
    image: "/image/Newportfolioimg7.jpeg",
    description: "Luminous outdoor Signage",
  },
  {
    id: 8,
    category: "Print & Brand",
    image: "/image/Newportfolioimg8.png",
    description: "A3 Paper Bag",
  },
  {
    id: 9,
    category: "Print & Brand",
    image: "/image/Newportfolioimg9.png",
    description: "A5 Jotter (Soft Cover)",
  },
  {
    id: 10,
    category: "Print & Brand",
    image: "/image/Newportfolioimg10.jpeg",
    description: "Double side Business Card",
  },
  {
    id: 11,
    category: "Graphic Design",
    image: "/image/Portimg3.jpg",
    description: "Birthday Poster design",
  },
  {
    id: 12,
    category: "Graphic Design",
    image: "/image/portimg1.jpg",
    description: "Birthday Poster design",
  },
  {
    id: 13,
    category: "Graphic Design",
    image: "/image/Newportfolioimg13.jpeg",
    description: "A2 Paper Bag",
  },
  {
    id: 14,
    category: "Graphic Design",
    image: "/image/Portimg5.jpg",
    description: "A5 Paper Bag",
  },
  {
    id: 15,
    category: "Print & Brand",
    image: "/image/Portimg4.jpg",
    description: "Branded Nylon",
  },
  {
    id: 16,
    category: "Print & Brand",
    image: "/image/Portimg6.jpg",
    description: "A3 Paper Bag",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [flippedId, setFlippedId] = useState(null);

  const filteredData =
    activeCategory === "All Work"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center">
        <h1 className="merienda-font font-extrabold text-xl sm:text-3xl lg:text-3xl text-(--primary-color) leading-10">
          EXPLORE OUR PORTFOLIO
        </h1>
        <p className="michroma-font text-xl sm:text-2xl lg:text-2xl text-(--primary-color) leading-6 sm:leading-10 lg:leading-10">
          Design - Prints - Quality Results
        </p>
        <p className="merienda-font font-medium text-xs sm:text-md lg:text-sm text-(--primary-color)">
          Our portfolio shows our hard work and devotion to helping our clients{" "}
          <br />
          succeed. Don't just take our word for it. <br />
          Check out the latest work.
        </p>
      </div>

      {/* Category Buttons */}
<div className="text-center mt-5 lg:block">
  <div
    className="
      flex flex-wrap items-center justify-center 
      gap-2 text-sm 
      bg-(--neutral-color)/50 mx-auto 
      p-2 rounded-md md:rounded-full shadow-gray-400 shadow-xl
      max-w-[90%]   /* prevents overflow on 360px */
      lg:max-w-fit  /* restores normal on large screens */
      lg:gap-3 lg:text-md
    "
  >
    {["All Work", "Print & Brand", "Graphic Design", "UI/UX Design"].map(
      (cat) => {
        const isActive = activeCategory === cat;

        return (
          <p
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              cursor-pointer px-3 py-2 rounded-full transition-all whitespace-nowrap
              ${
                isActive
                  ? "bg-(--primary-color)/50 text-[--accent-color] font-bold scale-105 shadow-md"
                  : "hover:bg-(--primary-color)/50"
              }
            `}
          >
            {cat}
          </p>
        );
      }
    )}
  </div>
</div>


      {/* Flip Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 
    2xl:grid-cols-4  gap-6 mt-10"
        layout
      >
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              layout
              className="relative w-full h-60 lg:h-55 2xl:h-100  cursor-pointer perspective-[1000px]"
              onClick={() =>
                setFlippedId(flippedId === item.id ? null : item.id)
              }
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flippedId === item.id ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-lg shadow-lg"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  
                  <Image
  src={item.image}
  alt={item.description}
  fill
  className="object-cover"
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    (max-width: 1536px) 25vw,
    20vw
  "
/>

                  
                  {/* <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-full object-cover"
                  /> */}
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-(--primary-color) text-(--neutral-color)"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <p className="text-center text-sm">{item.description}</p>
                  <button className="bg-(--secondary-color) rounded-sm p-2 merienda-font mt-2">
                    <a
                      href="https://wa.me/2349091643613"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Now
                    </a>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* See More Buttons */}
      <div className="text-center mt-10">
        <div className="text-center michroma-font text-(--accent-color) mb-4">
          <p>See More</p>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          <button className="bg-(--secondary-color) rounded-sm py-2 px-8 merienda-font mt-2">
            <a
              href="https://www.behance.net/gallery/226929635/APHAMED-PROJECT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillBehanceSquare className="text-(--accent-color) text-xl" />
            </a>
          </button>
          <button className="bg-(--secondary-color) rounded-sm py-2 px-8 merienda-font mt-2">
            <a
              href="https://drive.google.com/drive/folders/1CoAou0NdC5bKnvCPlQTUU1thQ5VqCX4X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogleDrive className="text-(--accent-color) text-xl" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
