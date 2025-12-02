import Testimonial from "../components/testimonial.jsx";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
export default function ServicePage() {
  return (
    <main>
      <div className="[background:linear-gradient(90deg,#0CE7AC_0%,#00543D_100%)] h-50 p-8 min-[768px]:max-[1023px]:p-10 lg:p-10">
        <div className="flex items-center gap-25 min-[768px]:max-[1023px]:gap-70 lg:gap-130">
          <div className="ml-2 mt-10 min-[768px]:max-[1023px]:mt-5 min-[768px]:max-[1023px]:ml-10 lg:mt-5 lg:ml-25">
            <h1 className="text-md min-[768px]:max-[1023px]:text-3xl lg:text-5xl font-bold text-(--neutral-color)">
              OUR SERVICES
            </h1>
            <div className="flex items-center  gap-3 text-[#080808] text-xs font-medium lg:text-sm lg:font-medium mt-2 lg:mt-5">
              <p>HOME</p>
              <img src="/image/Lineicon2.png" alt="line" className="h-3" />
              <p>GET QOUTE</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mt-10 min-[768px]:max-[1023px]:mt-5 lg:mt-5">
              <img src="/image/anglebracket.png" alt="line" className="w-5 lg:w-10" />
              <img src="/image/dot1.png" alt="line" className="w-3 h-3 min-[768px]:max-[1023px]:w-5 min-[768px]:max-[1023px]:h-5 lg:w-5 lg:h-5" />
              <img src="/image/dot2.png" alt="line" className="w-3 h-3 min-[768px]:max-[1023px]:w-5 min-[768px]:max-[1023px]:h-5 lg:w-5 lg:h-5" />
              <img src="/image/dot3.png" alt="line" className="w-3 h-3 min-[768px]:max-[1023px]:w-5 min-[768px]:max-[1023px]:h-5 lg:w-5 lg:h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="m-5 min-[768px]:max-[1023px]:m-10 lg:m-30  ">
        <div className="flex flex-wrap items-center justify-center gap-20">
          <div className="w-full h-auto min-[768px]:max-[1023px]:w-full min-[768px]:max-[1023px]:h-auto lg:w-[400px] lg:h-[750px] border border-gray-400  rounded-tr-xl rounded-bl-xl shadow-xl bg-(--neutral-color)/80 p-10 ">
            <div className="flex items-center gap-3">
              <img
                src="/image/Wwdbimg1.png"
                alt="whatwedobest"
                className="w-10 h-10"
              />
              <h1 className="font-bold text-2xl text-[#151515]">
                Graphic Design{" "}
              </h1>
            </div>
            <p className="font-medium text-sm text-[#151515] leading-5 mt-5">
              We design with intention, blending creativity, strategy, and
              experience to create visuals that inspire action. Logos, flyers,
              social media graphics, or print layouts — whatever your design
              needs, we bring them to life with detail and excellence.
            </p>
            <img
              src="/image/Service-img1.png"
              alt="graphic-img"
              className="mt-10"
            />
            <ul className="font-extralight text-[15px] leading-6 mt-10 ">
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
            <button className="text-(--neutral-color) [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] px-3 py-1 rounded-md mt-5 mx-20 relative">
              ORDER NOW{" "}
              <HiOutlineArrowLongRight className="absolute top-5 left-25" />
            </button>
          </div>
          <div className="w-full h-auto min-[768px]:max-[1023px]:w-full min-[768px]:max-[1023px]:h-auto lg:w-[400px] lg:h-[750px] border border-gray-400  rounded-tr-xl rounded-bl-xl shadow-xl bg-(--neutral-color)/80 p-10 ">
            <div className="flex items-center gap-3">
              <img
                src="/image/Wwdbimg2.png"
                alt="whatwedobest"
                className="w-10 h-10"
              />
              <h1 className="font-bold text-2xl text-[#151515]">
                Printing Solution{" "}
              </h1>
            </div>
            <p className="font-medium text-sm text-[#151515] leading-5 mt-5">
              We provide high-quality printing solutions that transform ideas
              into tangible, lasting impressions. Whether it’s on paper, fabric,
              or promotional materials, our prints are designed to deliver
              excellence in every detail.
            </p>
            <img
              src="/image/Service-img2.png"
              alt="printing-img"
              className="mt-5"
            />
            <ul className="font-extralight text-[15px] leading-6 mt-10 ">
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
            <button className="text-(--neutral-color) [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] px-3 py-1 rounded-md mt-5 mx-20 relative">
              ORDER NOW{" "}
              <HiOutlineArrowLongRight className="absolute top-5 left-25" />
            </button>
          </div>
          <div className="w-full h-auto min-[768px]:max-[1023px]:w-full min-[768px]:max-[1023px]:h-auto lg:w-[400px] lg:h-[750px] border border-gray-400  rounded-tr-xl rounded-bl-xl shadow-xl bg-(--neutral-color)/80 p-10 ">
            <div className="flex items-center gap-3">
              <img
                src="/image/Wwdbimg3.png"
                alt="whatwedobest"
                className="w-10 h-10"
              />
              <h1 className="font-bold text-2xl text-[#151515] leading-5">
                Branding & <br /> Merchandise{" "}
              </h1>
            </div>
            <p className="font-medium text-sm text-[#151515] leading-5 mt-5">
              Our Branding & Merchandise services are designed to help you make
              a lasting impression — turning everyday items into powerful brand
              tools. From custom apparel to corporate souvenirs, we blend
              creativity and quality to help your brand stand out wherever it
              goes.
            </p>
            <img
              src="/image/Service-img3.png"
              alt="branding-img"
              className="mt-10"
            />
            <ul className="font-extralight text-[15px] leading-6 mt-10 ">
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
            <button className="text-(--neutral-color) [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] px-3 py-1 rounded-md mt-5 mx-20 relative">
              ORDER NOW{" "}
              <HiOutlineArrowLongRight className="absolute top-5 left-25" />
            </button>
          </div>
          <div className="w-[400px] h-[750px]">
            <div>
              <div>
                <div className="w-[400px] h-[350px] [background:linear-gradient(90deg,#062B21_0%,#14916F_100%)] p-5  rounded-xl">
                  <div className="flex items-center gap-2 p-3">
                    <img
                      src="/image/uiuximg.png"
                      alt="uiuximg"
                      className="w-10 h-10"
                    />
                    <h1 className="font-bold text-2xl text-(--neutral-color) ">
                      UI/UX Design
                    </h1>
                  </div>
                  <div className="m-2 relative">
                    <p className="font-medium text-md text-(--neutral-color) ">
                      Smart, user-focused digital experiences
                    </p>
                    <p className="font-light text-[17.29px] text-(--neutral-color) text-end leading-98">
                      ORDER NOW
                    </p>
                    <HiOutlineArrowLongRight className="text-(--neutral-color) text-end absolute top-12 left-100" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-[320px] h-87 rounded-4xl bg-[#484848] p-3 absolute top-[50] left-0 "></div>
                <div className="w-[320px] h-87 rounded-4xl bg-[#383838] p-3 absolute top-[50] left-10 "></div>
                <div className="w-[320px] h-87 rounded-4xl bg-[#151515] p-3 absolute top-[50] left-20 "></div>
                <div>
                  <img
                    src="/image/uiuximg2.png"
                    alt="ourprocess"
                    className=" absolute top-30 left-12"
                  />
                  <img
                    src="/image/uiuximg3.png"
                    alt="ourprocess"
                    className=" absolute top-40 left-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 my-10 lg:m-30 ">
        <div className="text-center">
          <h1 className="michroma-font font-bold text-xl lg:text-4xl leading-10">
            WHY CHOOSE US
          </h1>
          <p className="font-medium text-sm lg:text-md leading-5">
            At Aphamed Prints, we blend creativity, precision, and commitment{" "}
            <br />
            to deliver designs and prints that speak quality.
            <br />
            Here’s why our clients trust us:
          </p>
        </div>
        <div className="m-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-15 lg:gap-30">
            <div className="relative flex flex-col items-center lg:hidden">
              <img src="/image/Ark1.png" alt="ark" />
              <img
                src="/image/Ark-img1.png"
                alt="ark-img"
                className="absolute top-5 left-29 min-[768px]:max-[1023px]:left-73"
              />
              <div className="text-center mt-3">
                <h3 className="font-bold text-md text-[#062B21] leading-5">
                  QUALITY
                </h3>
                <p className="font-medium font-sm leading-5">
                  We use premium materials and expert techniques to ensure every
                  print and design stands out clean, vibrant, and lasting
                </p>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img src="/image/Ark1.png" alt="ark" />
              <img
                src="/image/Ark-img1.png"
                alt="ark-img"
                className="absolute top-5 left-10"
              />
            </div>

            <div className="relative flex flex-col items-center lg:hidden">
              <img src="/image/Ark1.png" alt="ark" />
              <img
                src="/image/Ark-img2.png"
                alt="ark-img"
                className="absolute top-5 left-30 min-[768px]:max-[1023px]:left-73"
              />
              <div className="text-center mt-3">
                <h3 className="font-bold text-md text-[#062B21] leading-5">
                  FAST & RELIABLE
                </h3>
                <p className="font-medium font-sm leading-5">
                  We respect your time. Every project is delivered promptly
                  without compromising quality even when deadlines are tight.
                </p>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img src="/image/Ark1.png" alt="ark" />
              <img
                src="/image/Ark-img2.png"
                alt="ark-img"
                className="absolute top-5 left-10"
              />
            </div>

            <div className="relative flex flex-col items-center lg:hidden">
              <img src="/image/Ark1.png" alt="ark" />
              <img
                src="/image/Ark-img3.png"
                alt="ark-img"
                className="absolute top-5 left-30 min-[768px]:max-[1023px]:left-73"
              />
              <div className="text-center mt-3">
                <h3 className="font-bold text-md text-[#062B21] leading-5">
                  CREATIVE EXCELLENCE
                </h3>
                <p className="font-medium font-sm leading-5">
                  Our designs go beyond visuals, they tell stories, capture
                  attention, and represent your brand with originality.
                </p>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img src="/image/Ark1.png" alt="ark" />
              <img
                src="/image/Ark-img3.png"
                alt="ark-img"
                className="absolute top-5 left-10"
              />
            </div>

            <div className="relative flex flex-col items-center lg:hidden">
              <img src="/image/Ark1.png" alt="ark" />
              <img
                src="/image/Ark-img4.png"
                alt="ark-img"
                className="absolute top-5 left-30 min-[768px]:max-[1023px]:left-73"
              />
              <div className="text-center mt-3">
                <h3 className="font-bold text-md text-[#062B21] leading-5">
                  CUSTOMER FOCUSED
                </h3>
                <p className="font-medium font-sm leading-5">
                  Your satisfaction is our priority. We listen, customize, and
                  deliver exactly what your brand needs to shine.
                </p>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img src="/image/Ark1.png" alt="ark" />
              <img
                src="/image/Ark-img4.png"
                alt="ark-img"
                className="absolute top-5 left-10"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-15 m-10 ">
            <div className="text-cente hidden lg:block">
              <h3 className="font-bold text-md text-[#062B21] leading-5">
                QUALITY
              </h3>
              <p className="font-medium font-sm leading-5">
                We use premium materials and expert techniques to ensure every
                print and design stands out clean, vibrant, and lasting
              </p>
            </div>
            <div className="text-center hidden lg:block">
              <h3 className="font-bold text-md text-[#062B21] leading-5">
                FAST & RELIABLE
              </h3>
              <p className="font-medium font-sm leading-5">
                We respect your time. Every project is delivered promptly
                without compromising quality even when deadlines are tight.
              </p>
            </div>
            <div className="text-center hidden lg:block">
              <h3 className="font-bold text-md text-[#062B21] leading-5">
                CREATIVE EXCELLENCE
              </h3>
              <p className="font-medium font-sm leading-5">
                Our designs go beyond visuals, they tell stories, capture
                attention, and represent your brand with originality.
              </p>
            </div>
            <div className="text-center hidden lg:block">
              <h3 className="font-bold text-md text-[#062B21] leading-5">
                CUSTOMER FOCUSED
              </h3>
              <p className="font-medium font-sm leading-5">
                Your satisfaction is our priority. We listen, customize, and
                deliver exactly what your brand needs to shine.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </main>
  );
}
