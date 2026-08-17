import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import guardImage from "../assets/hero/experience.png";
// apne hero folder ke image ka naam yaha laga dena

const points = [
  {
    title: "Client Focussed",
    text: "Services to meet client's specific needs and aspirations through comprehensive training programs and budget-friendly solutions.",
  },
  {
    title: "We build future",
    text: "Our specialized team provides services to the best of our abilities and follows the highest standards possible.",
  },
  {
    title: "Efficient Building",
    text: "Emphasis on recruitment, selection & training to serve our clients with state-of-the-art skilled services.",
  },
  {
    title: "Skilled Contractors",
    text: "Scrutinize each aspect while hiring contractors to offer skilled and well-trained staff.",
  },
];

export default function Experience() {
  return (
    <section
      className="
    bg-[#192235]
    py-24
    overflow-hidden
    "
    >
      <div
        className="
      max-w-[1400px]
      mx-auto
      px-6
      grid
      lg:grid-cols-2
      gap-16
      items-center
      "
      >
        {/* LEFT IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
        relative
        flex
        justify-center
        "
        >
          {/* Red Frame */}

          <div
            className="
          absolute
          top-10
          left-10
          w-[80%]
          h-[90%]
          border-[14px]
          border-[#ef3f32]
          "
          ></div>

          <motion.img
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            src={guardImage}
            alt="Security Guard"
            className="
          relative
          z-10
          w-[85%]
          max-h-[650px]
          object-cover
          "
          />
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <h2
            className="
          text-white
          text-4xl
          md:text-5xl
          font-bold
          leading-tight
          mb-12
          "
          >
            We have over 19 years
            <br />
            experience in Next Level
            <br />
            Security
          </h2>

          <div
            className="
          grid
          md:grid-cols-2
          gap-6
          "
          >
            {points.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
              bg-[#222d42]
              border
              border-white/10
              p-6
              rounded-xl
              hover:border-[#ef3f32]
              transition
              "
              >
                <h3
                  className="
                text-white
                text-xl
                font-bold
                flex
                items-center
                gap-2
                mb-4
                "
                >
                  <ArrowRight size={20} className="text-[#ef3f32]" />

                  {item.title}
                </h3>

                <p
                  className="
                text-gray-300
                leading-7
                "
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
