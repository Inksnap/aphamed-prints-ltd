"use client";
import { motion } from "framer-motion";
import { CiFacebook, CiLinkedin, CiInstagram } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

export default function MessageSection() {
  return (
    <div className="mt-15 mb-20 lg:mt-30 lg:mb-60 relative">

      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="h-30 lg:h-50 bg-diamond-gradient p-10 lg:p-20 text-center rounded-lg"
      >
        <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-(--neutral-color)">
          Send us a message
        </h3>
        <p className="font-medium text-xs text-(--neutral-color) mt-1">
          Your next project starts here
        </p>
      </motion.div>

      {/* FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-sm md:max-w-xl lg:max-w-xl mx-auto p-6 bg-white rounded-xl shadow-xl absolute left-1/2 transform -translate-x-1/2 top-23 lg:top-35 w-full"
      >
        <form className="space-y-4">

          {/* Name + Phone */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2 bg-[#F0F0F0] placeholder:text-xs placeholder:font-light rounded-md focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Enter Your Phone Number"
                className="w-full px-4 py-2 bg-[#F0F0F0] placeholder:text-xs placeholder:font-light rounded-md focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 bg-[#F0F0F0] rounded-md placeholder:text-xs placeholder:font-light focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
            />
          </div>

          {/* Product */}
          <div>
            <label htmlFor="product" className="block text-sm font-medium mb-1">
              Product
            </label>
            <input
              id="product"
              type="text"
              placeholder="Product name"
              className="w-full px-4 py-2 bg-[#F0F0F0] rounded-md placeholder:text-xs placeholder:font-light focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Product Description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Describe your product or requirements"
              className="w-full px-4 py-2 bg-[#F0F0F0] rounded-md placeholder:text-xs placeholder:font-light focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full mt-4 px-6 py-3 bg-(--primary-color) text-white font-semibold rounded-md shadow-md transition-all"
            >
              Get a Quote
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* SOCIAL MEDIA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mt-[550px] md:mt-[500px] lg:mt-[500px] text-center"
      >
        <h4 className="font-bold text-lg">FOLLOW OUR SOCIAL MEDIA</h4>

        <motion.div
          className="flex items-center gap-3 mt-4 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {[CiFacebook, CiLinkedin, CiInstagram, PiTiktokLogoThin, FaXTwitter].map(
            (Icon, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="w-7 h-7 bg-(--primary-color) flex items-center justify-center rounded-full shadow-md animate-bounce"
              >
                <Icon className="text-(--neutral-color) text-md" />
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
