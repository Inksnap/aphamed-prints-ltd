import MapSection from "../components/map.jsx";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <main>
      <div className="[background:linear-gradient(90deg,#0CE7AC_0%,#00543D_100%)] h-50 p-8 min-[768px]:max-[1023px]:p-10 lg:p-10">
        <div className="flex items-center gap-20 min-[768px]:max-[1023px]:gap-70 lg:gap-130">
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
              <img src="/image/anglebracket.png" alt="line" className="w-5 min-[768px]:max-[1023px]:w-10 lg:w-10" />
              <img src="/image/dot1.png" alt="line" className="w-3 h-3 min-[768px]:max-[1023px]:w-5 min-[768px]:max-[1023px]:h-5 lg:w-5 lg:h-5" />
              <img src="/image/dot2.png" alt="line" className="w-3 h-3 min-[768px]:max-[1023px]:w-5 min-[768px]:max-[1023px]:h-5 lg:w-5 lg:h-5" />
              <img src="/image/dot3.png" alt="line" className="w-3 h-3 min-[768px]:max-[1023px]:w-5 min-[768px]:max-[1023px]:h-5 lg:w-5 lg:h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-15 lg:mt-20 lg:mb-30">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-25 ">
          <div className="min-[768px]:max-[1023px]:w-170">
            <div className="flex items-center gap-2 p-2 rounded-sm bg-(--secondary-color) w-[130px] h-[30px]">
              <img src="/image/Cdot.png" alt="cdot" />
              <p className="font-bold text-xs ">Contact Us </p>
              <img src="/image/Cdot.png" alt="cdot" />
            </div>
            <h3 className="font-bold text-md leading-10">
              We’d love to hear from you!
            </h3>
            <p className="font-medium text-sm leading-6">
              Have a project, question, or idea in mind? <br />
              Reach out, our team is ready to bring your <br />
              vision to life.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 bg-(--primary-color) flex items-center justify-center rounded-xs">
                <MdLocationOn className="text-(--neutral-color) text-2xl" />
              </div>
              <div>
                <h4 className="font-medium text-xs">Head Office</h4>
                <p className="font-light text-xs">
                  42, Market Street somolu Lagos.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 bg-(--primary-color) flex items-center justify-center rounded-xs">
                <MdEmail className="text-(--neutral-color) text-2xl" />
              </div>
              <div>
                <h4 className="font-medium text-xs">Email</h4>
                <p className="font-light text-xs">aphamed0@gmail.com </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 bg-(--primary-color) flex items-center justify-center rounded-xs">
                <MdCall className="text-(--neutral-color) text-2xl" />
              </div>
              <div>
                <h4 className="font-medium text-xs">Call Us</h4>
                <p className="font-light text-xs">
                  P: +234 701 397 2790 W: +234 909 164 3613{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="w-90 h-auto  min-[768px]:max-[1023px]:w-170  lg:w-[611px] lg:h-[505px]">
            <MapSection className="w-90 h-auto min-[768px]:max-[1023px]:w-170  lg:w-[611px] lg:h-[505px]" />
          </div>
        </div>
      </div>

      <div className="mt-15 mb-20 lg:mt-30 lg:mb-60 relative">
        <div className="h-30 lg:h-50 bg-diamond-gradient p-20 lg:p-40 text-center">
          <h3 className="font-bold text-md min-[768px]:max-[1023px]:text-xl lg:text-2xl text-(--neutral-color)">
            Send us a message
          </h3>
          <p className="font-medium text-xs text-(--neutral-color)">
            Your next project start here
          </p>
        </div>

        <div className="max-w-sm min-[768px]:max-[1023px]:max-w-xl lg:max-w-xl mx-auto p-6 bg-white rounded-xl shadow-xl absolute top-30 left-1 min-[768px]:max-[1023px]:top-35 min-[768px]:max-[1023px]:left-38 lg:top-55 lg:left-100">
          <form className="space-y-4">
            {/* Name */}
            <div className="flex items-center gap-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-2 bg-[#F0F0F0] placeholder:text-xs placeholder:font-light focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-(--primary-color)"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  className="w-full px-4 py-2 bg-[#F0F0F0] placeholder:text-xs placeholder:font-light focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-(--primary-color)"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-[#F0F0F0] placeholder:text-xs placeholder:font-light focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-(--primary-color)"
              />
            </div>

            {/* Product */}
            <div>
              <label
                htmlFor="product"
                className="block text-sm font-medium mb-1"
              >
                Product
              </label>
              <input
                type="text"
                id="product"
                name="product"
                placeholder="Product name"
                className="w-full px-4 py-2 bg-[#F0F0F0] placeholder:text-xs placeholder:font-light focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-(--primary-color)"
              />
            </div>

            {/* Product Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
              >
                Product Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe your product or requirements"
                rows={4}
                className="w-full px-4 py-2 bg-[#F0F0F0] placeholder:text-xs placeholder:font-light focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-(--primary-color)"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full mt-4 px-6 py-3 bg-(--primary-color) text-white font-semibold rounded-md shadow-md hover:bg-(--primary-hover) transition-colors duration-300"
              >
                Get a Quote
              </button>
            </div>
          </form> 
        </div>
          <div>
            <div className="mx-auto min-[768px]:max-[1023px]:mt-130 mt-120">
              <div className="text-center font-bold text-lg">
                <h4>FOLLOW OUR SOCIAL MEDIA</h4>
              </div>
              <div className="flex items-center gap-2 mt-4 justify-center  animate-bounce">
                <div className="w-6 h-6 bg-(--primary-color) flex items-center justify-center rounded-full">
                <CiFacebook className="text-(--neutral-color) text-md" />
              </div>
              <div className="w-6 h-6 bg-(--primary-color) flex items-center justify-center rounded-full">
                <CiLinkedin className="text-(--neutral-color) text-md" />
              </div>
              <div className="w-6 h-6 bg-(--primary-color) flex items-center justify-center rounded-full">
                <CiInstagram className="text-(--neutral-color) text-md" />
              </div>
              <div className="w-6 h-6 bg-(--primary-color) flex items-center justify-center rounded-full">
                <PiTiktokLogoThin className="text-(--neutral-color) text-md" />
              </div>
              <div className="w-6 h-6 bg-(--primary-color) flex items-center justify-center rounded-full">
                <FaXTwitter className="text-(--neutral-color) text-md" />
              </div>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
}
