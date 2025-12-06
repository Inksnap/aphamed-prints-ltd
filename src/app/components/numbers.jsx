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
  const [visible, setVisible] = useState({
    projects: false,
    clients: false,
    designs: false,
    years: false,
  });

  const targets = { projects: 250, clients: 180, designs: 500, years: 10 };
  const duration = 2000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          setVisible({ projects: true, clients: true, designs: true, years: true });
        } else {
          setStartCount(false);
          setCounts({ projects: 0, clients: 0, designs: 0, years: 0 });
          setVisible({ projects: false, clients: false, designs: false, years: false });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const newCounts = {};
      Object.keys(targets).forEach((key) => {
        newCounts[key] = Math.floor(targets[key] * progress);
      });
      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [startCount]);

  const items = [
    { key: "projects", label: "Projects Completed", value: counts.projects },
    { key: "clients", label: "Satisfied Clients", value: counts.clients },
    { key: "designs", label: "Designs Created", value: counts.designs },
    { key: "years", label: "Years of Experience", value: counts.years },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-[linear-gradient(90deg,#062B21_0%,#14916F_100%)] py-10 lg:py-12 mb-12"
    >
      <div className="flex flex-wrap justify-center gap-10 md:gap-20 lg:gap-40 items-center text-center">
        {items.map((item) => (
          <div
            key={item.key}
            className={`group transition transform hover:scale-110 hover:-translate-y-1
              ${visible[item.key] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              transition-all duration-700 ease-out`}
          >
            <span className="text-sm md:text-3xl lg:text-4xl font-bold text-(--neutral-color)">
              {item.value}+
            </span>
            <span className="block text-xs md:text-sm lg:text-sm text-(--neutral-color) font-extralight leading-4">
              {item.label.split(" ").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
