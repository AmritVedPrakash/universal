import React from "react";
import { motion } from "framer-motion";

// Replace these names according to your actual files inside assets/ourclient
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
    <section className="overflow-hidden bg-white py-20">
      {/* Heading */}
      <motion.div
        initial={{
          opacity: 0,
          y: -30,
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
        className="mb-14 text-center"
      >
        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
          tracking-wide
          text-[#24272d]
        "
        >
          Our Clients
        </h2>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#d83b32]" />
      </motion.div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade */}
        <div
          className="
          absolute
          left-0
          top-0
          z-10
          h-full
          w-24
          bg-gradient-to-r
          from-white
          to-transparent
        "
        />

        <motion.div
          className="
            flex
            w-max
            items-center
            gap-20
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                flex
                h-[110px]
                w-[190px]
                items-center
                justify-center
              "
            >
              <img
                src={logo}
                alt="Our Client"
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
          w-24
          bg-gradient-to-l
          from-white
          to-transparent
        "
        />
      </div>
    </section>
  );
}
