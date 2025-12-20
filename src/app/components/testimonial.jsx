"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: "/image/Testimonial1.png",
    text: `Aphamed prints have been a reliable and dependable brand, always delivering even at the most impossible,
urgent hour. And this is without compromise on the quality. I have trusted this brand for over 5 years, and
they have always delivered the optimum quality of service. Well done Aphamed prints`,
    name: "Dr. (Barr) Mayomi Williams",
    title: "CEO COZY HAVENS",
  },
  {
    id: 2,
    image: "/image/Testimonial2.png",
    text: `I was introduced to Aphamed Prints Ltd through a friend, and ever since then, my experience has been nothing short of exceptional. From the very first interaction, the level of professionalism, care, and attention to detail has stood out. He has never once disappointed me, every service delivered has been timely, efficient, and of the highest quality.

I’m truly grateful for the peace of mind and confidence Aphamed(Olawale) provides. I wholeheartedly recommend his services to anyone looking for excellence and integrity. I sincerely pray he gets all the recognition and success he truly deserves.`,
    name: "Masrurat Oloruntobiloba Akintayo",
    title: "CEO KICHIES DELIGHT",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <div className="mx-5 my-20 lg:mx-40 lg:my-32">
      {/* Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="michroma-font text-xl lg:text-5xl font-bold">
          TESTIMONIAL
        </h3>
        <p className="font-medium text-sm lg:text-md italic mt-2 lg:mt-4">
          Here is what people say about us
        </p>
      </motion.div>

      {/* Testimonial Card */}
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-10 w-full max-w-5xl"
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 w-full px-5 lg:px-0">
              {/* Image */}
              <motion.div
                className="flex-shrink-0"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={current.image}
                  alt="testimonial-img"
                  className="w-full max-w-xs lg:max-w-sm h-auto "
                />
              </motion.div>

              {/* Text */}
              <motion.div
                className="max-w-lg text-center lg:text-left"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="font-light text-md text-[#1F1F1F] leading-7 lg:leading-8">
                  {current.text}
                </p>
                <h3 className="mt-6 font-bold text-md lg:text-lg text-[var(--primary-color)]">
                  {current.name}
                </h3>
                <p className="font-bold text-xs lg:text-sm italic">{current.title}</p>
              </motion.div>
            </div>

            {/* Dots */}
            <div className="flex gap-3 mt-5">
              {testimonials.map((_, i) => (
                <motion.div
                  key={i}
                  onClick={() => setIndex(i)}
                  className="cursor-pointer h-1 rounded-full bg-gray-400"
                  animate={{
                    width: index === i ? 30 : 10,
                    backgroundColor:
                      index === i ? "var(--primary-color)" : "#c4c4c4",
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}




// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     id: 1,
//     image: "/image/Testimonial1.png",
//     text: `Aphamed prints have been a reliable and dependable brand, always delivering even at the most impossible,
//     urgent hour. And this is without compromise on the quality. I have trusted this brand for over 5 years, and
//     they have always delivered the optimum quality of service. Well done Aphamed prints`,
//     name: "Dr. (Barr) Mayomi Williams",
//     title: "CEO COZY HAVENS",
//   },
//   {
//     id: 2,
//     image: "/image/Testimonial2.png",
//     text: `Aphamed prints have been a reliable and dependable brand, always delivering even at the most impossible,
//     urgent hour. And this is without compromise on the quality. I have trusted this brand for over 5 years, and
//     they have always delivered the optimum quality of service. Well done Aphamed prints`,
//     name: "Masrurat Oloruntobiloba Akintayo",
//     title: "CEO KICHIES DELIGHT",
//   },
// ];

// export default function Testimonial() {
//   const [index, setIndex] = useState(0);

  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const current = testimonials[index];

//   return (
//     <div className="m-20">
//       <div className="text-center mb-10">
//         <h3 className="michroma-font text-xl lg:text-5xl font-bold">TESTIMONIAL</h3>
//         <p className="font-medium text-sm lg:text-md italic">Here is what people say about us</p>
//       </div>

//       <div className="flex items-center justify-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current.id}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col items-center gap-10"
//           >
//             <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
//               <div>
//                 <img src={current.image} alt="testimonial-img" className="w-[300px] h-auto" />
//               </div>

//               <div className="max-w-lg text-center lg:text-left">
//                 <p className="font-light text-md text-[#1F1F1F] leading-6 max-w-md">
//                   {current.text}
//                 </p>

//                 <h3 className="mt-8 font-bold text-md text-[var(--primary-color)]">
//                   {current.name}
//                 </h3>
//                 <p className="font-bold text-xs italic">{current.title}</p>
//               </div>
//             </div>

//             <div className="flex gap-3 mt-5">
//               {testimonials.map((_, i) => (
//                 <motion.div
//                   key={i}
//                   onClick={() => setIndex(i)}
//                   className="cursor-pointer h-1 rounded-full bg-gray-400"
//                   animate={{
//                     width: index === i ? 30 : 10,
//                     backgroundColor: index === i ? "var(--primary-color)" : "#c4c4c4",
//                   }}
//                   transition={{ duration: 0.3 }}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
