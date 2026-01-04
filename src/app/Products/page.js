"use client";

import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Link from "next/link";


// PRODUCT LIST 

const PRODUCTS = [
  {
    id: 1,
    name: "A5 Flyers",
    price: "25,000",
    category: "Prints",
    image: "/image/A4-flyers.png",
    unit: "Per 50",
  },
  {
    id: 2,
    name: "Double side Business Card",
    price: "19,000",
    category: "Branding",
    image: "/image/Business-Card.png",
    unit: "Per 100",
  },
  {
    id: 3,
    name: "Shirts",
    price: "8,000",
    category: "Design",
    image: "/image/Shirts.png",
    unit: "Per one",
  },
  {
    id: 4,
    name: "Invitation Cards",
    price: "15,000",
    category: "Prints",
    image: "/image/Invitation.png",
    unit: "Per one",
  },
  {
    id: 5,
    name: "Stickers",
    price: "12,000",
    category: "Branding",
    image: "/image/Stickers2.png",
    unit: "Per 100",
  },

  {
    id: 6,
    name: "A4 Brochure",
    price: "6,500",
    category: "Prints",
    image: "/image/A4-Brochure.png",
    unit: "Per one",
  },
  {
    id: 7,
    name: "Burial Programme",
    price: "5,500",
    category: "Branding",
    image: "/image/Burial-programme.png",
    unit: "Per one",
  },
  {
    id: 8,
    name: "Notepad",
    price: "5,500",
    category: "Design",
    image: "/image/Notepad.png",
    unit: "Per one",
  },
  {
    id: 9,
    name: "Exercise Book ",
    price: "0,000",
    category: "Prints",
    image: "/image/Exercise-book.png",
    unit: "Per one",
  },
  {
    id: 10,
    name: "Conqueror Letterhead",
    price: "20,000",
    category: "Branding",
    image: "/image/Conqueror-Letterhead.png",
    unit: "Per one",
  },
  {
    id: 11,
    name: "A4 Flyers",
    price: "45,000",
    category: "Prints",
    image: "/image/A4-Flyers3.png",
    unit: "Per one",
  },
  {
    id: 12,
    name: "Branded Nylon ",
    price: "28,000",
    category: "Branding",
    image: "/image/Branded-Nylon.png",
    unit: "Per one",
  },
  {
    id: 13,
    name: "Pen Branding ",
    price: "1,200",
    category: "Design",
    image: "/image/Pen-Branding.png",
    unit: "Per one",
  },
  {
    id: 14,
    name: "A5 Jotter (Soft Cover) ",
    price: "1,200",
    category: "Prints",
    image: "/image/A5-Jotter.png",
    unit: "Per one",
  },
  {
    id: 15,
    name: "A2 Posters",
    price: "80,000",
    category: "Branding",
    image: "/image/A2-Posters.png",
    unit: "Per one",
  },
  {
    id: 16,
    name: "A5 Jotter (Hard Cover)",
    price: "1,800",
    category: "Prints",
    image: "/image/A5-Jotter2.png",
    unit: "Per one",
  },
  {
    id: 17,
    name: "A3 Posters ",
    price: "35,000",
    category: "Branding",
    image: "/image/A3-Posters.png",
    unit: "Per one",
  },
  {
    id: 18,
    name: "Roll Up Banner + Machine  ",
    price: "60,000",
    category: "Design",
    image: "/image/Roll-Up-Banner.png",
    unit: "Per one",
  },
  {
    id: 19,
    name: "A6 Flyer ",
    price: "15,000",
    category: "Prints",
    image: "/image/A6-Flyer.png",
    unit: "Per 100",
  },
  {
    id: 20,
    name: "Stickers",
    price: "8,000",
    category: "Branding",
    image: "/image/Stickers3.png",
    unit: "Per 50",
  },
  {
    id: 21,
    name: "Billboard banner",
    price: "55,000",
    category: "Branding",
    image: "/image/Billboard-banner.png",
    unit: "Per one",
  },
  {
    id: 22,
    name: "Original Jersey Prints",
    price: "25,000",
    category: "Prints",
    image: "/image/Original-Jersey.png",
    unit: "Per one",
  },
  {
    id: 23,
    name: "Double side Business Card ",
    price: "35,000",
    category: "Branding",
    image: "/image/Double-side.png",
    unit: "Per one",
  },
  {
    id: 24,
    name: "Outdoor Signage ",
    price: "300,000",
    category: "Design",
    image: "/image/Outdoor-Signage.png",
    unit: "Per piece",
  },
  {
    id: 25,
    name: "Indoor Signage",
    price: "60,000",
    category: "Prints",
    image: "/image/Indoor-Signage.png",
    unit: "Per piece",
  },
  {
    id: 26,
    name: "Feather Banner",
    price: "25,000",
    category: "Branding",
    image: "/image/Feather-Banner.png",
    unit: "Per piece",
  },
  {
    id: 27,
    name: "Branded Hoodie",
    price: "12,000",
    category: "Prints",
    image: "/image/Branded-Hoodie.png",
    unit: "Per one",
  },
  {
    id: 28,
    name: "Backdrop Banners ",
    price: "45,000",
    category: "Branding",
    image: "/image/Backdrop-Banners.png",
    unit: "Per piece",
  },
  {
    id: 29,
    name: "A5 jotter  ",
    price: "1,200",
    category: "Design",
    image: "/image/A5-jotter3.png",
    unit: "Per 50",
  },
  {
    id: 30,
    name: "Flag Banner ",
    price: "0,000",
    category: "Prints",
    image: "/image/Flag-Banner.png",
    unit: "Per piece",
  },
  {
    id: 31,
    name: "Backdrop",
    price: "75,000",
    category: "Branding",
    image: "/image/Backdrop.png",
    unit: "Per piece",
  },
  {
    id: 32,
    name: "Canvas Prints",
    price: "25,000",
    category: "Branding",
    image: "/image/Canvas-prints.png",
    unit: "Per one",
  },
  {
    id: 33,
    name: "Face Cap Branding ",
    price: "5,000",
    category: "Branding",
    image: "/image/Face-cap.png",
    unit: "Per one",
  },
  {
    id: 34,
    name: "Road Poll banner",
    price: "0,000",
    category: "Prints",
    image: "/image/Road-poll.png",
    unit: "Per piece",
  },
  {
    id: 35,
    name: "Birthday Banner ",
    price: "65,000",
    category: "Branding",
    image: "/image/Birthday-banner.png",
    unit: "Per piece",
  },
  {
    id: 36,
    name: "Custom Calendar ",
    price: "6,500",
    category: "Design",
    image: "/image/Custom-calender.png",
    unit: "Per 50",
  },
  {
    id: 37,
    name: "Envelope Printing",
    price: "25,000",
    category: "Prints",
    image: "/image/Envelope.png",
    unit: "Per 50",
  },
  {
    id: 38,
    name: "Card Label",
    price: "18,000",
    category: "Branding",
    image: "/image/Card-Label.png",
    unit: "Per 100",
  },
  {
    id: 39,
    name: "A5 Paper Bag ",
    price: "20,600",
    category: "Prints",
    image: "/image/A5-Paper.png",
    unit: "Per 100",
  },
  {
    id: 40,
    name: "A2 Paper Bag ",
    price: "2,000",
    category: "Prints",
    image: "/image/A2-Paper.png",
    unit: "Per one",
  },
  {
    id: 41,
    name: "Face Cap ",
    price: "5,000",
    category: "Branding",
    image: "/image/Face-Cap2.png",
    unit: "Per one",
  },
  {
    id: 42,
    name: "Silicone Wristband ",
    price: "200",
    category: "Design",
    image: "/image/Silicone-Wristband.png",
    unit: "Per one",
  },
  {
    id: 43,
    name: "Face Cap",
    price: "5,000",
    category: "Prints",
    image: "/image/Face-Cap3.png",
    unit: "Per one",
  },
  {
    id: 44,
    name: "A5 Birthday NoteBook",
    price: "1,800",
    category: "Branding",
    image: "/image/A5-Birthday.png",
    unit: "Per one",
  },
  {
    id: 45,
    name: "Acrylic Award ",
    price: "20,000",
    category: "Branding",
    image: "/image/Acrylic-Award.png",
    unit: "Per piece",
  },
  {
    id: 46,
    name: "Sticker",
    price: "100",
    category: "Branding",
    image: "/image/Stickers3.png",
    unit: "Per one",
  },
  {
    id: 47,
    name: "Neon Signage ",
    price: "120,000",
    category: "Branding",
    image: "/image/Neon-Signage.png",
    unit: "Per piece",
  },
  {
    id: 48,
    name: "Reflective Jacket",
    price: "5,000",
    category: "Prints",
    image: "/image/Reflective-jacket.png",
    unit: "Per one",
  },
  {
    id: 49,
    name: "Luminous outdoor Signage",
    price: "450,000",
    category: "Branding",
    image: "/image/Luminous-outdoor-signage.png",
    unit: "Per piece",
  },
  {
    id: 50,
    name: "Club Poster Design ",
    price: "17,000",
    category: "Design",
    image: "/image/Club-Poster.png",
    unit: "Per piece",
  },
  {
    id: 51,
    name: "Custom Calendar",
    price: "6,500",
    category: "Prints",
    image: "/image/Custom-calender2.png",
    unit: "Per 50",
  },
  {
    id: 52,
    name: "Outdoor Signage",
    price: "550,000",
    category: "Branding",
    image: "/image/Outdoor-signage2.png",
    unit: "Per piece",
  },
  {
    id: 53,
    name: "A2 Paper Bag ",
    price: "2,000",
    category: "Prints",
    image: "/image/A2-Paper.png",
    unit: "Per one",
  },
  {
    id: 54,
    name: "Badge Lapel",
    price: "4,000",
    category: "Branding",
    image: "/image/Badge-Lapel.png",
    unit: "Per one",
  },
  {
    id: 55,
    name: "Jersey name customization",
    price: "15,000",
    category: "Design",
    image: "/image/Jersey-name-customization.png",
    unit: "Per piece",
  },
  {
    id: 56,
    name: "A3 Paper Bag",
    price: "1,600",
    category: "Prints",
    image: "/image/A3-Paperbag.png",
    unit: "Per one",
  },
  {
    id: 57,
    name: "Birthday flier Design",
    price: "20,000",
    category: "Branding",
    image: "/image/Birthday-flier-design.png",
    unit: "Per piece",
  },
  {
    id: 58,
    name: "Double side Business Card",
    price: "20,000",
    category: "Branding",
    image: "/image/Double-side-Business-card.png",
    unit: "Per 50",
  },
  {
    id: 59,
    name: "A5 Birthday NoteBook",
    price: "40,000",
    category: "Branding",
    image: "/image/A5-Birthday.png",
    unit: "Per 100",
  },
  {
    id: 60,
    name: "Glass Frame",
    price: "25,000",
    category: "Branding",
    image: "/image/Glass-Frame.png",
    unit: "Per piece",
  },
  {
    id: 61,
    name: "Branded Box",
    price: "25,000",
    category: "Branding",
    image: "/image/Branded-box.png",
    unit: "Per piece",
  },
  {
    id: 62,
    name: "A3 Paper Bag",
    price: "1,600",
    category: "Branding",
    image: "/image/A3-Paper-bag.png",
    unit: "Per one",
  },
  {
    id: 63,
    name: "Glitters Frame",
    price: "25,000",
    category: "Branding",
    image: "/image/Glitters-frame.png",
    unit: "Per 50",
  },
  {
    id: 64,
    name: "Site Helmet",
    price: "6,000",
    category: "Branding",
    image: "/image/Site-helmet.png",
    unit: "Per piece",
  },
  {
    id: 65,
    name: "A3 Paper Bag",
    price: "1,600",
    category: "Branding",
    image: "/image/A3-paperbag2.png",
    unit: "Per piece",
  },
  {
    id: 66,
    name: "A4 Flyers",
    price: "45,000",
    category: "Branding",
    image: "/image/A4-Flyers5.png",
    unit: "Per 50",
  },
  {
    id: 67,
    name: "A4 Flyers",
    price: "35,000",
    category: "Branding",
    image: "/image/A4-Flyers4.png",
    unit: "Per 100",
  },
  {
    id: 68,
    name: "Site Instagram Booth",
    price: "50,000",
    category: "Branding",
    image: "/image/Site-Instagram-booth.png",
    unit: "Per piece",
  },
  {
    id: 69,
    name: "Glitters Frame",
    price: "25,000",
    category: "Branding",
    image: "/image/Glitters-frame1.png",
    unit: "Per piece",
  },
  {
    id: 70,
    name: "A3 Paper Bag",
    price: "1,600",
    category: "Branding",
    image: "/image/A3-paperbag3.png",
    unit: "Per piece",
  },
  {
    id: 71,
    name: "Branded Box",
    price: "8,000",
    category: "Branding",
    image: "/image/Branded-Box2.png",
    unit: "Per piece",
  },
];

const CATEGORIES = ["All", "Prints", "Branding", "Design"];

export default function ProductPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

 
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      
      {/* HERO FILTER AREA WITH ANIMATION */}
   
      <div className="bg-gradient-to-r from-[#0CE7AC] to-[#00543D] py-10">
        <div className="container mx-auto px-4">
          {/* FILTER BAR */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-full p-4 bg-white w-full max-w-md lg:max-w-xl h-12 mx-auto flex items-center gap-4 shadow-lg"
          >
            <BsFilterLeft className="hidden lg:block text-2xl text-gray-500" />

            {/* CATEGORY DROPDOWN */}
            <div className="w-32">
              <Listbox value={category} onChange={setCategory}>
                <div className="relative">
                  <Listbox.Button className="w-full py-2 px-3 text-xs flex items-center gap-2">
                    <span>{category}</span>
                    <ChevronUpDownIcon className="w-4 h-4 text-black" />
                  </Listbox.Button>

                  <Listbox.Options className="absolute mt-1 max-h-60 w-full bg-[var(--primary-color)] rounded-md py-2 z-50 shadow-lg">
                    {CATEGORIES.map((cat) => (
                      <Listbox.Option
                        key={cat}
                        value={cat}
                        className={({ active }) =>
                          `cursor-pointer select-none py-2 px-3 text-xs 
                          ${
                            active ? "bg-white/10 text-white" : "text-gray-200"
                          }`
                        }
                      >
                        {({ selected }) => (
                          <div className="flex justify-between items-center">
                            <span
                              className={
                                selected ? "font-semibold" : "font-normal"
                              }
                            >
                              {cat}
                            </span>
                            {selected && (
                              <CheckIcon className="h-4 w-4 text-white" />
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            {/* SEARCH INPUT */}
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 text-xs outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="bg-[var(--primary-color)] p-2 rounded-full text-white cursor-pointer">
              <FaSearch size={12} />
            </div>
          </motion.div>

          {/* BREADCRUMB */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 text-[#080808] text-sm font-medium mt-5"
          >
            <Link href="/">
                <p className="font-medium hover:underline">HOME</p>
              </Link>
              <img src="/image/Lineicon2.png" alt="" className="h-3" />
              <a
                href="https://wa.me/2349091643613"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                GET QUOTE
              </a>
          </motion.div>
        </div>
      </div>

      {/* TITLE */}
      <div className="container mx-auto px-4 mt-10">
        <div className="text-center">
          <h1 className="text-lg lg:text-xl font-bold text-[#026445]">
            ALL PRODUCTS
          </h1>

          <img
            src="image/Lineicon3.png"
            className="mx-auto w-24 lg:w-32 mt-1"
            alt="line"
          />

          <p className="italic text-sm lg:text-lg font-medium mt-2">
            Quality that speaks louder than words
          </p>
        </div>

        {/* FEATURES */}
        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 mt-5">
          <div className="flex items-center gap-2">
            <img src="image/Productdot.png" alt="dot" className="w-3 h-3" />
            <p className="text-sm lg:text-lg font-medium">Bold Prints</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="image/Productdot.png" alt="dot" className="w-3 h-3" />
            <p className="text-sm lg:text-lg font-medium">Fast Delivery</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="image/Productdot.png" alt="dot" className="w-3 h-3" />
            <p className="text-sm lg:text-lg font-medium">Happy Client</p>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID SECTION */}
      
      <div className="container mx-auto px-1 lg:px-4 py-12">

        {/* PRODUCT GRID */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3
            lg:grid-cols-5 
            gap-1 lg:gap-10
          "
        >
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/Products/${product.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="overflow-hidden p-4 cursor-pointer hover:scale-105 transition-transform"
              >
                <img src={product.image} alt={product.name} loading="lazy" className="w-full" />

                <div className=" text-center mt-4 h-auto rounded-md p-2 shadow-lg">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.unit}</p>

                  <button className="mt-2 text-(--primary-color) font-semibold border border-[#5E5E5E] rounded-sm p-1">
                    ₦{product.price}
                  </button>
                </div> 
              </motion.div>
            </Link>
          ))}
        </div>
        
      </div>
      <div className="bg-[#D9D9D9] py-10 px-4">
          <div className="container mx-auto text-center">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-[#1B1B1B] leading-tight">
              APHAMED PRINTS
            </h1>

            <p className="italic text-sm md:text-base lg:text-lg font-medium text-[#1B1B1B] mt-2 leading-relaxed">
              Quality is our Job, and Your Satisfaction is our Priority.
            </p>
          </div>
        </div>
    </div>
  );
}