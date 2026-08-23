import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: 25,
    label: "Years of Experience",
  },
  {
    number: 5200,
    label: "Security Guards Deployed",
  },
  {
    number: 16,
    label: "Locations",
  },
  {
    number: 6,
    label: "States Presence",
  },
];

function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const stepTime = 20;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
}

export default function StatsSection() {
  return (
    <section className="bg-white px-5 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#d83b32] shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              className={`
                relative flex min-h-[145px] flex-col
                items-center justify-center
                px-4 py-7 text-center
                transition-all duration-300
                ${index < 2 ? "border-b border-white/25" : ""}
                ${index % 2 === 0 ? "border-r border-white/25" : ""}
                md:min-h-[170px]
                md:border-b-0
                ${
                  index !== stats.length - 1
                    ? "md:border-r md:border-white/30"
                    : ""
                }
              `}
            >
              {/* Number */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12 + 0.15,
                }}
                className="flex items-baseline justify-center"
              >
                <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  <Counter value={item.number} />
                </span>

                {item.number >= 1000 && (
                  <span className="ml-1 text-3xl font-bold text-white sm:text-4xl">
                    +
                  </span>
                )}

                {item.number === 25 && (
                  <span className="ml-1 text-xl font-semibold text-white/90">
                    +
                  </span>
                )}
              </motion.div>

              {/* Label */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12 + 0.3,
                }}
                className="mt-2 max-w-[180px] text-sm font-medium leading-5 text-white/95 sm:text-base"
              >
                {item.label}
              </motion.p>

              {/* Small decorative line */}
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 35 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12 + 0.4,
                }}
                className="mt-3 h-[2px] rounded-full bg-white/70"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
