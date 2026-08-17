import React from "react";
import { motion } from "framer-motion";

import pioneer from "../assets/ourclient/pioneer.png";
import learningHub from "../assets/ourclient/learninghub.png";
import cresa from "../assets/ourclient/cresa.png";
import speedo from "../assets/ourclient/speedo.png";
import unplugged from "../assets/ourclient/unplugged.png";
import transworld from "../assets/ourclient/transworld.png";

const clients = [pioneer, learningHub, cresa, speedo, unplugged, transworld];

export default function OurClients() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-center mb-14"
      >
        <h2
          className="
        text-4xl
        md:text-5xl
        font-bold
        text-[#24272d]
        tracking-wide
        "
        >
          Our Clients
        </h2>
      </motion.div>

      {/* Logo Slider */}

      <div
        className="
      relative
      w-full
      overflow-hidden
      "
      >
        {/* Fade Left */}

        <div
          className="
      absolute
      left-0
      top-0
      w-32
      h-full
      bg-gradient-to-r
      from-white
      to-transparent
      z-10
      "
        />

        {/* Moving Container */}

        <motion.div
          className="
      flex
      gap-24
      items-center
      w-max
      "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          whileHover={{
            animationPlayState: "paused",
          }}
        >
          {[...clients, ...clients].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.15,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
          w-[180px]
          h-[90px]
          flex
          items-center
          justify-center
          "
            >
              <img
                src={logo}
                alt="Client Logo"
                className="
            max-w-full
            max-h-full
            object-contain
            grayscale
            hover:grayscale-0
            transition
            duration-500
            "
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Fade Right */}

        <div
          className="
      absolute
      right-0
      top-0
      w-32
      h-full
      bg-gradient-to-l
      from-white
      to-transparent
      z-10
      "
        />
      </div>
    </section>
  );
}
