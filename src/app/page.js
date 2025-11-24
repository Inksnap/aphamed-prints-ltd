"use client";
import { motion } from "framer-motion";
import Numbers from "./components/numbers.jsx";
import Portfolio from "./components/portfolio.jsx";
import Footerone from "./components/footerone.jsx";
import HeroImages from "./components/HeroImages.jsx";
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Home() {
  // Define initial positions for each image
  // const [positions, setPositions] = useState([
  //   { top: "400px", left: "100px" },    // Image 1
  //   { top: "650px", left: "500px" },  // Image 2
  //   { top: "700px", left: "800px" },  // Image 3
  //   { top: "500px", left: "1200px" },  // Image 4
  // ]);

  // const images = [
  //   "/image/Heroimg1.png",
  //   "/image/Heroimg2.png",
  //   "/image/Heroimg3.png",
  //   "/image/Heroimg4.png",
  // ];

  //Cycle through positions (move each image to the next one's position)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPositions((prev) => {
  //       const updated = [...prev];
  //       const first = updated.pop(); // Remove first position
  //       updated.unshift(first);           // Add it to the end (rotate)
  //       return updated;
  //     });
  //   }, 60000); // every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <main>
      {/*Hero Section */}
      <div className="HeroSection m-5 lg:m-20">
        {/*Hero Text */}
        <motion.div
          className="HeroText"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-2xl min-[768px]:max-[1023px]:text-5xl lg:text-6xl text-(--Primary-color) text-center font-extrabold mt-8 leading-8  min-[768px]:max-[1023px]:leading-12 lg:leading-15"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            WE DON’T JUST PRINT, <br /> WE PRINT EXPERIENCE <br /> THAT LAST
          </motion.h1>

          <motion.p
            className="text-sm min-[768px]:max-[1023px]:text-lg lg:text-lg text-(--Primary-color) text-center font-light min-[768px]:max-[1023px]:font-medium lg:font-medium leading-5 m-5 lg:m-0 lg:leading-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
          >
            From prints to brands to digital design, We delivers creativity with
            perfection.
          </motion.p>
          <div className="buttons flex justify-center items-center gap-6 mt-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-(--secondary-color) p-3 rounded-md flex items-center gap-2 text-xs min-[768px]:max-[1023px]:text-md lg:text-md font-medium min-[768px]:max-[1023px]:font-medium lg:font-medium shadow-md hover:bg-(--primary-color) hover:text-white"
            >
              See our work
              <FaArrowRightLong className="text-(--accent-color) hover:text-white " />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-(--button-color) p-3 rounded-md flex items-center gap-2 text-sm min-[768px]:max-[1023px]:text-md lg:text-md min-[768px]:max-[1023px]:font-medium lg:font-medium  shadow-md hover:bg-(--accent-color) hover:text-white "
            >
              Start your projects
              <FaArrowRightLong className="text-(--accent-color) hover:text-white " />
            </motion.button>
          </div>
        </motion.div>
        <HeroImages />
      </div>
      {/* All Products Section Small screen */}
      <div className="mt-10 mb-20 ml-5 mr-5 min-[768px]:max-[1023px]:ml-20 min-[768px]:max-[1023px]:mr-20 lg:hidden">
        {/* <AllProducts /> */}
        <div className="flex flex-wrap items-center gap-2 min-[768px]:max-[1023px]:gap-1 justify-evenly">
          <div className="bg-(--neutral-color) p-2 flex items-center gap-2 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/Producticon1.png"
              alt="producticon"
              className="w-8 h-8"
            />
            <p className="font-extralight min-[768px]:max-[1023px]:font-medium min-[768px]:max-[1023px]:text-md text[19px] leading-5">
              UIUX <br /> Design
            </p>
          </div>
          <div className="bg-(--neutral-color) p-2 flex items-center gap-2 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/Producticon2.png"
              alt="producticon"
              className="w-8 h-8"
            />
            <p className="font-extralight min-[768px]:max-[1023px]:font-medium min-[768px]:max-[1023px]:text-md text[19px] leading-5">
              Corporate <br /> Branding{" "}
            </p>
          </div>
          <div className="bg-(--neutral-color) p-2 flex items-center gap-2 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/producticon3.png"
              alt="producticon"
              className="w-8 h-8 "
            />
            <p className="font-extralight min-[768px]:max-[1023px]:font-medium min-[768px]:max-[1023px]:text-md text[19px] leading-5">
              Printing <br /> Services{" "}
            </p>
          </div>
          <div className="bg-(--neutral-color) p-2 flex items-center gap-2 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/producticon4.png"
              alt="producticon"
              className="w-8 h-8"
            />
            <p className="font-extralight min-[768px]:max-[1023px]:font-medium min-[768px]:max-[1023px]:text-md text[19px] leading-5">
              Signages
            </p>
          </div>
          <div className="bg-(--neutral-color) p-2 flex items-center gap-2 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/producticon5.png"
              alt="producticon"
              className="w-8 h-8"
            />
            <p className="font-extralight min-[768px]:max-[1023px]:font-medium min-[768px]:max-[1023px]:text-md text[19px] leading-5">
              Customized <br /> Branding
            </p>
          </div>
          <div className="bg-(--neutral-color) p-2 flex items-center gap-2 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/producticon6.png"
              alt="producticon"
              className="w-8 h-8"
            />
            <p className="font-extralight min-[768px]:max-[1023px]:font-medium min-[768px]:max-[1023px]:text-md text[19px] leading-5">
              Gift Items & <br /> Souvenirs
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center gap-3 mt-3 ">
            <p className="text-(--products-color) font-medium text-bold hover:text-(--accent-color)">
              SEE ALL PRODUCTS
            </p>
            <FaArrowRightLong className="text-(--products-color) hover:text-(--accent-color) " />
          </div>
        </div>
      </div>
      {/* All Products Section */}
      <div className="mt-10 mb-20 ml-20 mr-20 hidden lg:block">
        {/* <AllProducts /> */}
        <div className="flex items-center gap-10 justify-center">
          <div className="bg-(--neutral-color) p-3 flex items-center gap-3 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/Producticon1.png"
              alt="producticon"
              className="w-10 h-10"
            />
            <p className="font-light text[19px] leading-5">
              UIUX <br /> Design
            </p>
          </div>
          <div className="bg-(--neutral-color) p-3 flex items-center gap-3 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/Producticon2.png"
              alt="producticon"
              className="w-10 h-10"
            />
            <p className="font-light text[19px] leading-5">
              Corporate <br /> Branding{" "}
            </p>
          </div>
          <div className="bg-(--neutral-color) p-3 flex items-center gap-3 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/producticon3.png"
              alt="producticon"
              className="w-10 h-10"
            />
            <p className="font-light text[19px] leading-5">
              Printing <br /> Services{" "}
            </p>
          </div>
          <div className="bg-(--neutral-color) p-3 flex items-center gap-3 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/producticon4.png"
              alt="producticon"
              className="w-10 h-10"
            />
            <p className="font-light text[19px] leading-5">Signages</p>
          </div>
          <div className="bg-(--neutral-color) p-3 flex items-center gap-3 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/producticon5.png"
              alt="producticon"
              className="w-10 h-10"
            />
            <p className="font-light text[19px] leading-5">
              Customized <br /> Branding
            </p>
          </div>
          <div className="bg-(--neutral-color) p-3 flex items-center gap-3 shadow-gray-400 shadow-md rounded-md">
            <img
              src="/image/producticon6.png"
              alt="producticon"
              className="w-10 h-10"
            />
            <p className="font-light text[19px] leading-5">
              Gift Items & <br /> Souvenirs
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-end gap-3 mr-5 mt-3 ">
            <p className="text-(--products-color) font-medium text-bold hover:text-(--accent-color)">
              SEE ALL PRODUCTS
            </p>
            <FaArrowRightLong className="text-(--products-color) hover:text-(--accent-color) " />
          </div>
        </div>
      </div>
      {/* Creativity meets Precesion */}
      <div className="mb-30  lg:block">
        <div className="">
          <div className=" flex flex-col min-[768px]:max-[1023px]:flex-row lg:flex-row items-center justify-center gap-20 m-6 lg:m-8 relative">
            <div className="">
              <div className="w-[200.62px] h-[270px] lg:w-[281.26px] lg:h-[380px] bg-[#073226] rounded-3xl absolute top-0 left-[8] lg:top-0 lg:left-20"></div>
              <div className="w-[200.62px] h-[270px] lg:w-[281.26px] lg:h-[380px] bg-[#024230] rounded-3xl absolute top-0 left-[60] lg:top-0 lg:left-40"></div>
              <div className="w-[200.62px] h-[200px] lg:w-[281.26px] lg:h-[380px]  rounded-3xl absolute top-0 left-[110] lg:top-0 lg:left-60">
                <img
                  src="/image/Creativity-image.png"
                  alt="creativity image"
                  className=""
                />
              </div>
            </div>
            <div className="absolute top-80 min-[768px]:max-[1023px]:-top-5 lg:top-0 left-5 min-[768px]:max-[1023px]:left-90 lg:left-150">
              <div className="text-(--primary-color) font-extrabold text-4xl leading-11 mb-2">
                <h1 className="lg:hidden text-center text-[24.4px] leading-9 font-extrabold">
                  CREATIVITY MEETS <br /> PRECISION
                </h1>
                <h1 className="hidden lg:block">
                  CREATIVITY <br /> MEETS <br /> PRECISION
                </h1>
              </div>
              <div className="text-[#151515] font-light text-[17px] leading-7 mb-5 mx-3">
                <p className="lg:hidden  text-[14px] text-justify leading-6 font-light min-[768px]:max-[1023px]:font-medium ">
                  At Aphamed Prints, we go beyond ink and paper. We are
                  designers, creators, and problem-solvers who combine printing
                  technology, branding expertise, and UI/UX design to help
                  individuals and businesses stand out. Our journey started with
                  printing and branding, and today, we’re expanding into digital
                  product design, because we believe creativity has no limits.
                </p>
                <p className="hidden  lg:block">
                  At Aphamed Prints, we go beyond ink and paper. We are <br />
                  designers, creators, and problem-solvers who combine printing
                  <br /> technology, branding expertise, and UI/UX design to
                  help <br /> individuals and businesses stand out. <br /> Our
                  journey started with printing and branding, and today, we’re
                  <br /> expanding into digital product design—because we
                  believe <br /> creativity has no limits.
                </p>
              </div>
              <div className="hidden min-[768px]:max-[1023px]:block lg:block">
                <button className="flex items-center gap-2 p-3 bg-(--secondary-color) min-[768px]:max-[1023px]:font-medium min-[768px]:max-[1023px]:text-md text-[#151515] hover:bg-(--accent-color) hover:text-(--neutral-color) rounded-md  ">
                  ORDER NOW
                  <FaArrowRightLong className="text-[#151515] hover:text-(--neutral-color)" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What we do best Mobile & ipad screens */}
      <div className="mt-180 mb-20 min-[768px]:max-[1023px]:mt-110 lg:hidden">
        <div>
          <div className="">
            <button className="bg-(--secondary-color) p-2 rounded-md mx-auto my-3 block font-bold text-xl text-center text-(--primary-color) ">
              WHAT WE DO BEST
            </button>
            <p className="text-center font-medium text-sm text-(--primary-color)">
              FROM LOGOS TO CUSTOM WEAR, WE TURN <br /> BRANDS INTO EXPERIENCE
              PEOPLE REMEMBER.
            </p>
          </div>
          <div className="hidden min-[768px]:max-[1023px]:flex min-[768px]:max-[1023px]:flex-wrap min-[768px]:max-[1023px]:items-center min-[768px]:max-[1023px]:justify-center min-[768px]:max-[1023px]:gap-5 mt-10 ">
            <div className="flex items-center justify-center gap-5 mt-10 ">
              <div className="w-[400px] h-auto bg-(--primary-color) border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5">
                <div className="flex items-center gap-2 mt-3 mb-3 ">
                  <img
                    src="/image/Wwdbimg1.png"
                    alt="whatwedobest"
                    className=""
                  />
                  <h1 className="font-bold text-2xl text-(--neutral-color)">
                    Graphic Design
                  </h1>
                </div>
                <p className="font-bold text-lg text-(--neutral-color)">
                  Designs that speak louder than words.
                </p>
                <p className="font-bold text-lg text-(--neutral-color)">
                  We design with intention, blending creativity, strategy, and
                  experience to create visuals that inspire action. Logos,
                  flyers, social media graphics, or print layouts — whatever
                  your design needs, we bring them to life with detail and
                  excellence.
                </p>
                <p className="font-bold text-lg mt-10 text-(--neutral-color)">
                  ORDER NOW
                </p>
                <HiOutlineArrowLongRight className="absolute top-101 left-33 text-xl text-(--neutral-color)" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 mt-10">
              <div className="w-[400px] h-auto bg-(--secondary-color) border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5">
                <div className="flex items-center gap-2 mt-3 mb-3 ">
                  <img
                    src="/image/Wwdbimg2.png"
                    alt="whatwedobest"
                    className=""
                  />
                  <h1 className="font-bold text-2xl text-[#151515]">
                    Printing Solutions
                  </h1>
                </div>
                <p className="font-bold text-lg text-[#151515]">
                  From paper to fabric, your vision perfectly printed.
                </p>
                <p className="font-bold text-lg text-[#151515]">
                  We provide high-quality printing solutions that transform ideas into tangible, lasting impressions. Whether it’s on paper, fabric, or promotional materials, our prints are designed to deliver excellence in every detail.
                </p>
                <p className="font-bold text-lg mt-10 text-[#151515]">
                  ORDER NOW
                </p>
                <HiOutlineArrowLongRight className="absolute top-99 left-33 mt-1 text-[#151515] text-xl" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 mt-10">
              <div className="w-[400px] h-auto bg-(--footer-color) border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5">
                <div className="flex items-center gap-2 mt-3 mb-3 ">
                  <img
                    src="/image/Wwdbimg1.png"
                    alt="whatwedobest"
                    className=""
                  />
                  <h1 className="font-bold text-2xl text-[#151515]">
                    UI/UX Design
                  </h1>
                </div>
                <p className="font-bold text-lg  text-[#151515]">
                  Smart, user-focused digital experiences
                </p>
                 <p className="font-bold text-lg  text-[#151515]">
                We provide high-quality printing solutions that transform ideas
                into tangible, lasting impressions. Whether it’s on paper,
                fabric, or promotional materials, our prints are designed to
                deliver excellence in every detail.
              </p>
                <p className="font-bold text-lg mt-10 text-[#151515]">
                  ORDER NOW
                </p>
                <HiOutlineArrowLongRight className="absolute top-100 left-33 mt-1 text-[#151515] text-xl" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 mt-10">
              <div className="w-[400px] h-auto bg-(--accent-color) border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5">
                <div className="flex items-center gap-2 mt-3 mb-3 ">
                  <img
                    src="/image/Wwdbimg3.png"
                    alt="whatwedobest"
                    className=""
                  />
                  <h1 className="font-bold text-2xl text-(--neutral-color) ">
                    Branding & Merchandise
                  </h1>
                </div>
                <p className="font-bold text-lg text-(--neutral-color) ">
                  Wear it. Share it. Live your brand.
                </p>
                <p className="font-bold text-lg text-(--neutral-color) hover:text-(--primary-color) ">
                Our Branding & Merchandise services are designed to help you
                make a lasting impression — turning everyday items into powerful
                brand tools. From custom apparel to corporate souvenirs, we
                blend creativity and quality to help your brand stand out
                wherever it goes.
              </p>
                <p className="font-bold text-lg mt-5 text-(--neutral-color) ">
                  ORDER NOW
                </p>
                <HiOutlineArrowLongRight className="absolute top-99 left-33 mt-1 text-(--neutral-color)  font-bold text-xl" />
              </div>
            </div>
          </div>
          {/* Small Screens */}
          <div className="flex items-center justify-center gap-5 mt-10 min-[768px]:max-[1023px]:hidden">
            <div className="w-[350px] h-[300.48px] bg-(--primary-color) border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5">
              <div className="flex items-center gap-2 mt-3 mb-3 ">
                <img
                  src="/image/Wwdbimg1.png"
                  alt="whatwedobest"
                  className=""
                />
                <h1 className="font-bold text-2xl text-(--neutral-color)">
                  Graphic Design
                </h1>
              </div>
              <p className="font-medium text-xs leading-10 text-(--neutral-color)">
                Designs that speak louder than words.
              </p>
              <p className="font-medium text-xs text-(--neutral-color)">
                We design with intention, blending creativity, strategy, and
                experience to create visuals that inspire action. Logos, flyers,
                social media graphics, or print layouts — whatever your design
                needs, we bring them to life with detail and excellence.
              </p>
              <p className="font-medium text-xs mt-10 text-(--neutral-color)">
                ORDER NOW
              </p>
              <HiOutlineArrowLongRight className="absolute top-65 left-23 mt-1 text-(--neutral-color)" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mt-10 min-[768px]:max-[1023px]:hidden">
            <div className="w-[350px] h-[300.48px] bg-(--secondary-color) border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5">
              <div className="flex items-center gap-2 mt-3 mb-3 ">
                <img
                  src="/image/Wwdbimg2.png"
                  alt="whatwedobest"
                  className=""
                />
                <h1 className="font-bold text-2xl text-[#151515]">
                  Printing Solutions
                </h1>
              </div>
              <p className="font-bold text-xs text-[#151515]">
                From paper to fabric, your vision perfectly printed.
              </p>
              <p className="font-bold text-xs text-[#151515]">
                  We provide high-quality printing solutions that transform ideas into tangible, lasting impressions. Whether it’s on paper, fabric, or promotional materials, our prints are designed to deliver excellence in every detail.
              </p>
              <p className="font-bold text-xs mt-32 text-[#151515]">
                ORDER NOW
              </p>
              <HiOutlineArrowLongRight className="absolute top-65 left-23 mt-1 text-[#151515]" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mt-10 min-[768px]:max-[1023px]:hidden">
            <div className="w-[350px] h-auto bg-(--footer-color) border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5">
              <div className="flex items-center gap-2 mt-3 mb-3 ">
                <img
                  src="/image/Wwdbimg1.png"
                  alt="whatwedobest"
                  className=""
                />
                <h1 className="font-bold text-2xl text-[#151515]">
                  UI/UX Design
                </h1>
              </div>
              <p className="font-bold text-xs text-[#151515]">
                Smart, user-focused digital experiences
              </p>
              <p className="font-bold text-xs text-[#151515]">
                We provide high-quality printing solutions that transform ideas
                into tangible, lasting impressions. Whether it’s on paper,
                fabric, or promotional materials, our prints are designed to
                deliver excellence in every detail.
              </p>
              <p className="font-bold text-xs mt-10 text-[#151515]">
                ORDER NOW
              </p>
              <HiOutlineArrowLongRight className="absolute top-59 left-23 mt-1 text-[#151515] font-bold" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mt-10 min-[768px]:max-[1023px]:hidden">
            <div className="w-[350px] h-auto bg-(--accent-color) border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5 hover:text-(--accent-color) ">
              <div className="flex items-center gap-2 mt-5 mb-3 ">
                <img
                  src="/image/Wwdbimg3.png"
                  alt="whatwedobest"
                  className=""
                />
                <h1 className="font-bold text-2xl text-(--neutral-color) hover:text-(--primary-color) ">
                  Branding & Merchandise
                </h1>
              </div>
              <p className="font-bold text-xs text-(--neutral-color) hover:text-(--primary-color) ">
                Wear it. Share it. Live your brand.
              </p>
              <p className="font-bold text-xs text-(--neutral-color) hover:text-(--primary-color) ">
                Our Branding & Merchandise services are designed to help you
                make a lasting impression — turning everyday items into powerful
                brand tools. From custom apparel to corporate souvenirs, we
                blend creativity and quality to help your brand stand out
                wherever it goes.
              </p>
              <p className="font-bold text-xs mt-10 text-(--neutral-color) hover:text-(--accent-color)">
                ORDER NOW
              </p>
              <HiOutlineArrowLongRight className="absolute top-69 left-23 mt-1 text-(--neutral-color)  font-bold hover:text-(--accent-color)" />
            </div>
          </div>
        </div>
      </div>
      {/* What we do best */}
      <div className="mt-150 mb-40 hidden lg:block">
        <div>
          <div className="">
            <button className="bg-(--secondary-color) p-3 rounded-md mx-auto my-5 block font-bold text-2xl text-center text-(--primary-color) ">
              WHAT WE DO BEST
            </button>
            <p className="text-center font-medium text-lg text-(--primary-color)">
              FROM LOGOS TO CUSTOM WEAR, WE TURN BRANDS INTO EXPERIENCE <br />{" "}
              PEOPLE REMEMBER.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 mt-10">
            <div className="w-[373px] h-[595px] bg-(--neutral-color)/80 border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5">
              <div className="flex items-center gap-2 mt-3 mb-3 ">
                <img
                  src="/image/Wwdbimg1.png"
                  alt="whatwedobest"
                  className=""
                />
                <h1 className="font-bold text-2xl text-[#151515]">
                  Graphic Design{" "}
                </h1>
              </div>
              <p className="font-medium text-[17.93px]  text-[#151515] mb-10">
                We design with intention, blending creativity, strategy, and
                experience to create visuals that inspire action. Logos, flyers,
                social media graphics, or print layouts — whatever your design
                needs, we bring them to life with detail and excellence.
              </p>
              <ul className="font-extralight text-[15px] leading-6 ">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Logo & Brand Identity Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Flyers, Posters & Brochures</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Business Cards & Corporate Stationery</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Product Packaging & Labels</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Social Media Graphics</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Event & Campaign Designs</span>
                </li>
              </ul>
              <button className="text-(--neutral-color) [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] p-2 rounded-md mt-15 mx-20 relative">
                ORDER NOW{" "}
                <HiOutlineArrowLongRight className="absolute top-6 left-20" />
              </button>
            </div>
            <div className="w-[373px] h-[595px] bg-(--neutral-color)/80 border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5">
              <div className="flex items-center gap-2 mt-3 mb-3 ">
                <img
                  src="/image/Wwdbimg2.png"
                  alt="whatwedobest"
                  className=""
                />
                <h1 className="font-bold text-2xl text-[#151515]">
                  Printing Solution{" "}
                </h1>
              </div>
              <p className="font-medium text-[17.93px] text-[#151515] mb-10">
                We provide high-quality printing solutions that transform ideas
                into tangible, lasting impressions. Whether it’s on paper,
                fabric, or promotional materials, our prints are designed to
                deliver excellence in every detail.
              </p>
              <ul className="font-extralight text-[15px] leading-6 ">
                <p className="font-medium text-xl italic">
                  Our Printing Services Include:
                </p>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Digital Printing</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Offset Printing </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Large Format Printing</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Sublimation & DTG Printing</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Sticker & Label Printing</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Corporate & Event Printing</span>
                </li>
              </ul>
              <button className="text-(--neutral-color) [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] p-2 rounded-md mt-10 mx-20 relative">
                ORDER NOW{" "}
                <HiOutlineArrowLongRight className="absolute top-6 left-20" />
              </button>
            </div>
            <div className="w-[373px] h-[595px] bg-(--neutral-color)/80 border-gradient-animate shadow-gray-400 shadow-xl rounded-tr-2xl rounded-bl-2xl p-5">
              <div className="flex items-center gap-2 mt-2 mb-2 ">
                <img
                  src="/image/Wwdbimg3.png"
                  alt="whatwedobest"
                  className=""
                />
                <h1 className="font-bold text-2xl text-[#151515]">
                  Branding & Merchandise
                </h1>
              </div>
              <p className="font-medium text-[17.93px] text-[#151515] mb-10">
                Our Branding & Merchandise services are designed to help you
                make a lasting impression — turning everyday items into powerful
                brand tools. From custom apparel to corporate souvenirs, we
                blend creativity and quality to help your brand stand out
                wherever it goes.
              </p>
              <ul className="font-extralight text-[15px] leading-6 ">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Corporate Merchandise</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Branded Apparel</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Gift Items & Souvenirs</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Packaging & Labels</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-(--primary-color)" />{" "}
                  <span>Event Branding</span>
                </li>
              </ul>
              <button className="text-(--neutral-color) [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] p-2 rounded-md mt-5 mx-20 relative">
                ORDER NOW{" "}
                <HiOutlineArrowLongRight className="absolute top-6 left-20" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* UI/UX & Our process */}
      <div className="mb-20 ml-10 mr-10 hidden lg:block">
        <div className="flex items-center justify-between relative mx-30 my-10 ">
          <div>
            <div className="w-[458px] h-[187px] [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] p-3 ">
              <div className="flex items-center gap-2 p-3">
                <img src="/image/uiuximg.png" alt="uiuximg" className="" />
                <h1 className="font-bold text-2xl text-(--neutral-color) ">
                  UI/UX Design
                </h1>
              </div>
              <div className="m-2 relative">
                <p className="font-extralight text-[20.7px] text-(--neutral-color) ">
                  Smart, user-focused digital experiences
                </p>
                <p className="font-extralight text-[17.29px] text-(--neutral-color) text-end">
                  ORDER NOW
                </p>
                <HiOutlineArrowLongRight className="text-(--neutral-color) text-end absolute top-12 left-100" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-[350px] h-60 rounded-4xl bg-[#484848] p-3 absolute top-[-30] left-130 "></div>
            <div className="w-[350px] h-60 rounded-4xl bg-[#383838] p-3 absolute top-[-30] left-150 "></div>
            <div className="w-[350px] h-60 rounded-4xl bg-[#151515] p-3 absolute top-[-30] left-170 "></div>
          </div>
          <div>
            <img
              src="/image/uiuximg2.png"
              alt="ourprocess"
              className=" absolute top-8 left-155"
            />
            <img
              src="/image/uiuximg3.png"
              alt="ourprocess"
              className=" absolute top-15 left-210"
            />
          </div>
        </div>
      </div>
      <Numbers />
      {/* Explore our portfolio */}
      <Portfolio />
      <Footerone />
    </main>
  );
}
