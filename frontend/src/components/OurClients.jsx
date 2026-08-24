import React from "react";
import { motion } from "framer-motion";

import amrapali from "../assets/ourclient/amrapali.png";
import idbi from "../assets/ourclient/idbi.png";
import adityaBirla from "../assets/ourclient/adityabirla.png";
import schand from "../assets/ourclient/schand.png";
import tanishq from "../assets/ourclient/tanishq.png";
import atlas from "../assets/ourclient/atlas.png";
import manorama from "../assets/ourclient/manorama.png";
import uf from "../assets/ourclient/uf.png";
import itdc from "../assets/ourclient/itdc.png";
import nokia from "../assets/ourclient/nokia.png";
import pcJewellers from "../assets/ourclient/pcjewellers.png";
import mcroe from "../assets/ourclient/mcroe.png";

const clients = [
  amrapali,
  idbi,
  adityaBirla,
  schand,
  tanishq,
  atlas,
  manorama,
  uf,
  itdc,
  nokia,
  pcJewellers,
  mcroe,
];

export default function OurClients() {
  return (
    <section
      className="
    relative
    overflow-hidden
    bg-[#0b172a]
    py-20
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
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
        relative
        mb-14
        text-center
        "
      >
        <p
          className="
        text-sm
        font-bold
        uppercase
        tracking-[0.25em]
        text-red-400
        "
        >
          Trusted Partners
        </p>

        <h2
          className="
        mt-4
        text-4xl
        font-extrabold
        tracking-wide
        text-white
        md:text-5xl
        "
        >
          Our
          <span className="text-red-400"> Clients</span>
        </h2>

        <div
          className="
        mx-auto
        mt-5
        h-1
        w-16
        rounded-full
        bg-red-500
        "
        />

        <p
          className="
        mx-auto
        mt-5
        max-w-2xl
        text-gray-300
        "
        >
          Trusted by leading organizations for professional security and
          operational excellence.
        </p>
      </motion.div>

      {/* Slider */}

      <div
        className="
      relative
      w-full
      overflow-hidden
      "
      >
        {/* Left Fade */}

        <div
          className="
          absolute
          left-0
          top-0
          z-10
          h-full
          w-32
          bg-gradient-to-r
          from-[#0b172a]
          to-transparent
          "
        />

        <motion.div
          className="
          flex
          w-max
          items-center
          gap-8
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
              flex
              h-[130px]
              w-[220px]
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white
              p-6
              shadow-xl
              "
            >
              <img
                src={logo}
                alt="Client Logo"
                className="
                max-h-full
                max-w-full
                object-contain
                "
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Fade */}

        <div
          className="
          absolute
          right-0
          top-0
          z-10
          h-full
          w-32
          bg-gradient-to-l
          from-[#0b172a]
          to-transparent
          "
        />
      </div>
    </section>
  );
}
