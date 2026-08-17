import React from "react";
import { motion } from "framer-motion";

import guardImg from "../assets/services/security-guard.jpg";
import guardIcon from "../assets/services/security-icon.png";

import supervisorImg from "../assets/services/supervisor.jpg";
import supervisorIcon from "../assets/services/supervisor-icon.png";

import surveillanceImg from "../assets/services/surveillance.jpg";
import surveillanceIcon from "../assets/services/surveillance-icon.png";

import asoImg from "../assets/services/aso.jpg";
import asoIcon from "../assets/services/aso-icon.png";

import fireImg from "../assets/services/fire.jpg";
import fireIcon from "../assets/services/fire-icon.png";

import gunmanImg from "../assets/services/gunman.jpg";
import gunmanIcon from "../assets/services/gunman-icon.png";

import armedImg from "../assets/services/armed.jpg";
import armedIcon from "../assets/services/armed-icon.png";

import bouncerImg from "../assets/services/bouncer.jpg";
import bouncerIcon from "../assets/services/bouncer-icon.png";

const services = [
  {
    title: "Security Guard",
    image: guardImg,
    icon: guardIcon,
  },
  {
    title: "Security Supervisor",
    image: supervisorImg,
    icon: supervisorIcon,
  },
  {
    title: "Surveillance Room",
    image: surveillanceImg,
    icon: surveillanceIcon,
  },
  {
    title: "ASO",
    image: asoImg,
    icon: asoIcon,
  },
  {
    title: "Fire Safety Expert",
    image: fireImg,
    icon: fireIcon,
  },
  {
    title: "Gunman",
    image: gunmanImg,
    icon: gunmanIcon,
  },
  {
    title: "Armed PSO",
    image: armedImg,
    icon: armedIcon,
  },
  {
    title: "Bouncer",
    image: bouncerImg,
    icon: bouncerIcon,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2
          className="
        text-4xl md:text-5xl
        font-bold
        text-[#d83b32]
        tracking-wide
        "
        >
          Range of Security Services
        </h2>
      </motion.div>

      {/* Cards */}

      <div
        className="
      max-w-[1250px]
      mx-auto
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-10
      px-6
      "
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -12,
            }}
            className="
          group
          relative
          bg-white
          border
          border-gray-200
          rounded-xl
          overflow-hidden
          shadow-sm
          hover:shadow-2xl
          transition
          "
          >
            {/* Image */}

            <div
              className="
          h-[260px]
          overflow-hidden
          relative
          "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
            "
              />

              {/* Icon */}

              <div
                className="
            absolute
            bottom-[-25px]
            left-8
            bg-white
            w-20
            h-20
            rounded-lg
            flex
            items-center
            justify-center
            shadow-lg
            "
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>

            {/* Content */}

            <div
              className="
          pt-12
          px-6
          pb-8
          "
            >
              <h3
                className="
          text-xl
          font-semibold
          text-gray-800
          mb-5
          "
              >
                {item.title}
              </h3>

              <a
                href="#"
                className="
          text-[#d83b32]
          font-medium
          text-lg
          hover:underline
          "
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
