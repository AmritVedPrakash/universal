import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: 19,
    label: "Years of Next Level Security",
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

// Counter Animation
function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = value / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
}

export default function StatsSection() {
  return (
    <section
      className="
bg-[#d83b32]
py-8
overflow-hidden
"
    >
      <div
        className="
      max-w-[1400px]
      mx-auto
      grid
      grid-cols-1
      md:grid-cols-4
      "
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              scale: 1.05,
            }}
            className={`
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-4
py-5
          relative

          ${index !== stats.length - 1 ? "md:border-r border-white/40" : ""}

          `}
          >
            {/* Number */}

            <motion.h2
              initial={{
                scale: 0.5,
              }}
              whileInView={{
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="
          text-white
          text-4xl
md:text-5xl
          font-semibold
          mb-4
          "
            >
              <Counter value={item.number} />

              {item.number > 1000 && "+"}
            </motion.h2>

            {/* Label */}

            <p
              className="
          text-white
          text-lg
          md:text-xl
          font-medium
          max-w-[250px]
          "
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
