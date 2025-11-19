"use client";
import Link from "next/link";

export default function Footerone() {
  return (
    <>
      {/* Desktop / Large Screens */}
      <div className="hidden lg:block">
        <div className="bg-(--footer-color) w-full h-60 mt-30 p-8 relative">
          <div className="text-center merienda-font">
            <p className="text-(--neutral-color) text-3xl leading-15">
              Got something in mind?
            </p>
            <p className="text-(--neutral-color) text-sm font-extralight leading-10">
              Let’s talk about it, we’ll give you the best offer for your
              project.
            </p>
          </div>
          <div className="text-center">
            <button className="bg-(--accent-color) p-2 mt-2 text-sm rounded-full text-(--neutral-color)">
              Request Quote
            </button>
          </div>
          <div>
            <img
              src="/image/footerone-img.png"
              alt="footerimg"
              className="absolute top-[-50] left-[1000] animate-bounce"
            />
          </div>
        </div>
      </div>

      {/* Mobile / Tablet */}
      <div className="lg:hidden block relative mt-20">
        <div className="bg-(--footer-color) w-full py-10 px-5 text-center flex flex-col items-center gap-4 relative">
          <img
            src="/image/footerone-img.png"
            alt="footerimg"
            className="w-[150px] absolute -top-15 min-[768px]:max-[1023px]:left-180 left-75 -translate-x-1/2 z-0 animate-bounce"
          />

          <p className="text-(--neutral-color) text-2xl font-semibold merienda-font z-10">
            Got something in mind?
          </p>

          <p className="text-(--neutral-color) text-sm font-light max-w-[300px] z-10">
            Let’s talk about it, we’ll give you the best offer for your project.
          </p>

          <button className="bg-(--accent-color) py-2 px-6 text-sm rounded-full text-(--neutral-color) z-10">
            Request Quote
          </button>
        </div>
      </div>
    </>
  );
}

// "use client";
// import Link from "next/link";

// export default function Footerone() {

//   return (
//     <>
//       <div className="hidden lg:block">
//         <div className="bg-(--footer-color) w-full h-60 mt-30 p-8 relative">
//           <div className="text-center merienda-font">
//             <p className="text-(--neutral-color) text-3xl leading-15">Got something in mind?</p>
//             <p className="text-(--neutral-color) text-sm font-extralight leading-10">Let’s talk about it, we’ll give you the best offer for your project.</p>
//           </div>
//           <div className="text-center">
//             <button className="bg-(--accent-color) p-2 mt-2 text-sm rounded-full text-(--neutral-color)">Request Quote</button>
//           </div>
//           <div>
//             <img src="/image/footerone-img.png" alt="footerimg" className="absolute top-[-50] left-[1000]" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
