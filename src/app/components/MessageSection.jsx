"use client";
import { motion } from "framer-motion";
import { CiFacebook, CiLinkedin, CiInstagram } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { useRef, useState } from "react"; 
import emailjs from "@emailjs/browser"; 

export default function MessageSection() {
  const formRef = useRef(null); 
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
  e.preventDefault();
  setStatus("sending");

  emailjs
    .sendForm(
      "service_dovth2b",
         "template_67uq6x5",
         formRef.current,
         "AQJ9t1y8Kb7IXusL9"
    )
    .then(() => {
      setStatus("success");

      // Clear the form
      formRef.current.reset();

      // ✅ Automatically clear success message after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    })
    .catch(() => {
      setStatus("error");

      // ✅ Automatically clear error message after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    });
};

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

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          {/* Name + Phone */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="from_name" 
                placeholder="Your full name"
                className="w-full px-4 py-2 bg-[#F0F0F0] rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                name="phone" 
                placeholder="Enter Your Phone Number"
                className="w-full px-4 py-2 bg-[#F0F0F0] rounded-md"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="from_email" 
              placeholder="Your email address"
              className="w-full px-4 py-2 bg-[#F0F0F0] rounded-md"
              required
            />
          </div>

          {/* Product */}
          <div>
            <label className="block text-sm font-medium mb-1">Product</label>
            <input
              type="text"
              name="product" 
              placeholder="Product name"
              className="w-full px-4 py-2 bg-[#F0F0F0] rounded-md"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Description
            </label>
            <textarea
              rows={4}
              name="message" 
              placeholder="Describe your product or requirements"
              className="w-full px-4 py-2 bg-[#F0F0F0] rounded-md"
              required
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
              {status === "sending" ? "Sending..." : "Get a Quote"}
            </motion.button>

            {/* ✅ feedback */}
            {status === "success" && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully ✅
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm mt-2">
                Failed to send message ❌
              </p>
            )}
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
          {[
            CiFacebook,
            CiLinkedin,
            CiInstagram,
            PiTiktokLogoThin,
            FaXTwitter,
          ].map((Icon, i) => (
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
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}