"use client";
import { motion } from "framer-motion";
import { MdLocationOn, MdEmail, MdCall } from "react-icons/md";
import MapSection from "../components/map.jsx";

export default function ContactDetails() {
  return (
    <div className="mt-10 mb-15 lg:mt-20 lg:mb-30 px-5 lg:px-0">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-10">

        {/* LEFT SECTION */}
        <motion.div
          className="w-full max-w-md lg:max-w-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* CONTACT TAG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 p-2 rounded-sm bg-(--secondary-color) w-[130px] h-[30px]"
          >
            <img src="/image/Cdot.png" alt="cdot" />
            <p className="font-bold text-xs">Contact Us</p>
            <img src="/image/Cdot.png" alt="cdot" />
          </motion.div>

          <h3 className="font-bold text-lg leading-10 mt-3">
            We’d love to hear from you!
          </h3>

          <p className="font-medium text-sm leading-6">
            Have a project, question, or idea in mind? <br />
            Reach out — our team is ready to bring your <br />
            vision to life.
          </p>

          {/* CONTACT ITEMS */}
          <div className="flex flex-col gap-5 mt-6">

            {/* LOCATION */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-(--primary-color) flex items-center justify-center rounded-xs">
                <MdLocationOn className="text-(--neutral-color) text-2xl" />
              </div>
              <div>
                <h4 className="font-medium text-xs">Head Office</h4>
                <p className="font-light text-xs">
                  42, Market Street Somolu, Lagos.
                </p>
              </div>
            </motion.div>

            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-(--primary-color) flex items-center justify-center rounded-xs">
                <MdEmail className="text-(--neutral-color) text-2xl" />
              </div>
              <div>
                <h4 className="font-medium text-xs">Email</h4>
                <p className="font-light text-xs">aphamed0@gmail.com</p>
              </div>
            </motion.div>

            {/* PHONE */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-(--primary-color) flex items-center justify-center rounded-xs">
                <MdCall className="text-(--neutral-color) text-2xl" />
              </div>
              <div>
                <h4 className="font-medium text-xs">Call Us</h4>
                <p className="font-light text-xs">
                  P: +234 701 397 2790    W: +234 909 164 3613
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* MAP SECTION */}
        <motion.div
          className="w-full max-w-md lg:max-w-[611px] h-auto lg:h-[505px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <MapSection className="w-full h-full rounded-lg overflow-hidden shadow-md" />
        </motion.div>

      </div>
    </div>
  );
}
