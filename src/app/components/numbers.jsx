"use client";
import { useEffect, useRef, useState } from "react";

export default function Numbers() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    designs: 0,
    years: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Reset counts to 0 before starting
          setCounts({
            projects: 0,
            clients: 0,
            designs: 0,
            years: 0,
          });
          setStartCount(true);
        } else {
          setStartCount(false);
        }
      },
      { threshold: 0.5 } // adjust if needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    const targets = { projects: 250, clients: 180, designs: 500, years: 10 };
    const duration = 2000;
    const intervalTime = 20;

    Object.keys(targets).forEach((key) => {
      let start = 0;
      const end = targets[key];
      const step = end / (duration / intervalTime);

      const counter = setInterval(() => {
        if (!startCount) {
          clearInterval(counter);
          return;
        }

        start += step;

        setCounts((prev) => ({
          ...prev,
          [key]: Math.floor(Math.min(start, end)),
        }));

        if (start >= end) {
          clearInterval(counter);
        }
      }, intervalTime);
    });
  }, [startCount]);

  return (
    <div
      ref={sectionRef}
      className="[background:linear-gradient(90deg,#062B21_0%,#14916F_100%)]
      py-10 lg:py-12 mb-12"
    >
      <div
        className="
        flex 
        flex-wrap 
        justify-center 
        gap-10
        min-[768px]:max-[1023px]:gap-20 
        lg:gap-40 
        items-center 
        text-center
      "
      >
        <div className="group transition transform hover:scale-110 hover:-translate-y-1">
          <span className="text-sm min-[768px]:max-[1023px]:text-3xl lg:text-4xl font-bold text-(--neutral-color)">
            {counts.projects}+
          </span>
          <span className="block text-xs min-[768px]:max-[1023px]:text-sm lg:text-sm text-(--neutral-color) font-extralight leading-4">
            Projects <br /> Completed
          </span>
        </div>

        <div className="group transition transform hover:scale-110 hover:-translate-y-1">
          <span className="text-sm min-[768px]:max-[1023px]:text-3xl lg:text-4xl font-bold text-(--neutral-color)">
            {counts.clients}+
          </span>
          <span className="block text-xs min-[768px]:max-[1023px]:text-sm lg:text-sm text-(--neutral-color) font-extralight leading-4">
            Satisfied <br /> Clients
          </span>
        </div>

        <div className="group transition transform hover:scale-110 hover:-translate-y-1">
          <span className="text-sm min-[768px]:max-[1023px]:text-3xl lg:text-4xl font-bold text-(--neutral-color)">
            {counts.designs}+
          </span>
          <span className="block text-xs min-[768px]:max-[1023px]:text-sm lg:text-sm text-(--neutral-color) font-extralight leading-4">
            Designs <br /> Created
          </span>
        </div>

        <div className="group transition transform hover:scale-110 hover:-translate-y-1">
          <span className="text-sm min-[768px]:max-[1023px]:text-3xl lg:text-4xl font-bold text-(--neutral-color)">
            {counts.years}+
          </span>
          <span className="block text-xs min-[768px]:max-[1023px]:text-sm lg:text-sm text-(--neutral-color) font-extralight leading-4">
            Years of <br /> Experience
          </span>
        </div>
      </div>
    </div>
  );
}