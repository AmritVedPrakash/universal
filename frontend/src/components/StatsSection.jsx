import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: 16,
    label: "Years of Experience",
  },
  {
    number: 1500,
    label: "Security Guards Deployed",
  },
  {
    number: 77,
    label: "Locations",
  },
  {
    number: 6,
    label: "States Presence",
  },
];

// Counter Animation Starts From 0
function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
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
    <section
      className="
    relative
    overflow-hidden
    bg-[#081426]
    px-5
    py-14
    sm:px-8
    sm:py-16
    lg:px-12
    "
    >
      {/* Background Glow */}

      <div
        className="
      absolute
      -left-40
      top-0
      h-96
      w-96
      rounded-full
      bg-blue-500/10
      blur-3xl
      "
      />

      <div
        className="
      absolute
      -right-40
      bottom-0
      h-96
      w-96
      rounded-full
      bg-red-500/10
      blur-3xl
      "
      />

      <div
        className="
      relative
      mx-auto
      max-w-7xl
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-[#102238]
      shadow-2xl
      "
      >
        <div
          className="
        grid
        grid-cols-2
        md:grid-cols-4
        "
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              className={`
          relative
          flex
          min-h-[160px]
          flex-col
          items-center
          justify-center
          px-4
          py-8
          text-center
          transition-all
          
          border-white/10

          ${index < 2 ? "border-b md:border-b-0" : ""}

          ${index % 2 === 0 ? "border-r" : ""}

          md:border-r

          ${index === stats.length - 1 ? "md:border-r-0" : ""}
          `}
            >
              {/* Icon Glow Circle */}

              <div
                className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/5
            to-transparent
            opacity-0
            transition
            duration-500
            hover:opacity-100
            "
              />

              {/* Number */}

              <motion.div
                initial={{
                  scale: 0.5,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="
            relative
            flex
            items-baseline
            justify-center
            "
              >
                <span
                  className="
              text-4xl
              font-black
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
              "
                >
                  <Counter value={item.number} />
                </span>

                <span
                  className="
              ml-1
              text-3xl
              font-bold
              text-[#d83b32]
              sm:text-4xl
              "
                >
                  +
                </span>
              </motion.div>

              {/* Label */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.2,
                }}
                className="
            relative
            mt-3
            max-w-[180px]
            text-sm
            font-semibold
            leading-6
            text-gray-300
            sm:text-base
            "
              >
                {item.label}
              </motion.p>

              {/* Bottom Line */}

              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 45,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15 + 0.3,
                }}
                className="
            relative
            mt-4
            h-[3px]
            rounded-full
            bg-[#d83b32]
            "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
