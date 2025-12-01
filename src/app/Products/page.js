"use client";
import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";

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
    category: "Fashion",
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
    category: "Fashion",
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
    category: "Fashion",
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
    category: "Fashion",
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
    category: "Fashion",
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
    category: "Fashion",
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
    category: "Fashion",
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
    category: "Fashion",
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
    category: "Fashion",
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
    category: "Fashion",
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

const CATEGORIES = ["All", "Prints", "Branding", "Fashion"];

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
    <main>
      {/* HERO / FILTER BAR */}
      <div className="[background:linear-gradient(90deg,#0CE7AC_0%,#00543D_100%)] h-50 p-5">
        <div className="rounded-full p-5 lg:p-4 bg-white w-[100%] lg:w-[90%] max-w-[500px] lg:max-w-[500px] h-12 lg:h-12 mx-auto mt-10 flex items-center gap-3 lg:gap-10 shadow">
          <div className="flex items-center gap-1 lg:gap-3 text-gray-500 w-full">
            <BsFilterLeft className="hidden lg:block lg:text-2xl" />

            {/* Category Dropdown */}
            <div className="w-30">
              <Listbox value={category} onChange={setCategory}>
                <div className="relative mt-1">
                  {/* Button */}
                  <Listbox.Button
                    className="
              relative w-full cursor-pointer rounded-md 
               py-2 px-3 text-xs outline-none border-none
              flex items-center gap-3
              focus:ring-0 focus:ring-white/30
            "
                  >
                    <span>{category || "Select Category"}</span>
                    <ChevronUpDownIcon className="w-4 h-4 text-[var(--primary-color)]" />
                  </Listbox.Button>

                  {/* Options */}
                  <Listbox.Options
                    className="
              absolute mt-1 max-h-60 w-full overflow-auto rounded-md
              bg-[var(--primary-color)] shadow-lg py-2 z-50
            "
                  >
                    {CATEGORIES.map((cat) => (
                      <Listbox.Option
                        key={cat}
                        value={cat}
                        className={({ active }) =>
                          `
                  cursor-pointer select-none py-2 px-3 text-xs rounded-md
                  ${active
                            ? "bg-white/10 text-white"
                            : "text-[var(--neutral-color)]"
                          }
                `
                        }
                      >
                        {({ selected }) => (
                          <div className="flex justify-between items-center">
                            <span
                              className={`${selected ? "font-semibold" : "font-normal"
                                }`}
                            >
                              {cat}
                            </span>

                            {selected && (
                              <CheckIcon className="h-4 w-4 text-[var(--neutral-color)]" />
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            <img src="/image/Lineicon.png" alt="line" />

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 text-xs outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="bg-(--primary-color) p-2 text-xs rounded-full text-white -ml-5 l">
            <FaSearch />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-3 text-[#080808] text-sm font-medium mt-5">
          <p>HOME</p>
          <img src="/image/Lineicon2.png" alt="line" className="h-3" />
          <p>GET QOUTE</p>
        </div>
      </div>

      {/* TITLE */}
      <div className="mx-auto mt-10">
        <h1 className="text-center text-lg lg:text-xl font-medium text-[#026445]">
          ALL PRODUCTS
        </h1>
        <img src="image/Lineicon3.png" className="mx-auto" alt="" />
        <p className="text-center italic text-sm lg:text-lg font-medium">
          Quality that speaks louder than words
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 lg:gap-5 mt-5">
        <div className="flex items-center gap-1 lg:gap-2">
          <img src="image/Productdot.png" alt="dot" className="w-3 h-3" />
          <p className="text-sm lg:text-lg font-medium">Bold Prints</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="image/Productdot.png" alt="dot" className="w-3 h-3" />
          <p className="text-sm lg:text-lgfont-medium">Fast Delivery</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="image/Productdot.png" alt="dot" className="w-3 h-3" />
          <p className="text-sm lg:text-lg font-medium">Happy Client</p>
        </div>
      </div>

      {/*PRODUCT SECTION USING FLEX*/}
      <div className="flex flex-wrap items-center lg:justify-center gap-1 px-2 mt-5 lg:gap-3 lg:px-5 lg:pb-20 lg:mt-20">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-[195px] min-[300px]:max-[391px]:w-[170px] lg:w-[200px] h-auto mb-0 lg:mb-3"
            />

            <div className="w-[135px] h-[113px] bg-white rounded-md p-2 shadow-lg">
              <h1 className="text-center font-semibold text-sm  leading-5">
                {product.name}
              </h1>
              <p className="text-center text-(--primary-color) leading-5 font-bold text-md">
                ₦{product.price}
              </p>

              <button className="block mx-auto mt-2 px-5 py-1 border border-[#5E5E5E] text-[#5E5E5E] rounded-sm text-sm">
                {product.unit}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#D9D9D9] p-10 block mx-auto">
        <div className="mx-auto text-center">
          <h1 className="font-bold text-xl lg:text-2xl text-[#1B1B1B] leading-5 lg:leading-10">
            APHAMED PRINTS
          </h1>
          <p className="italic text-sm font-medium text-[#1B1B1B] leading-5 lg:leading-10">
            Quality is our Job, and Your Satisfaction is our Priority.
          </p>
        </div>
      </div>
    </main>
  );
}
