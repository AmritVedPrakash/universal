import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

import heroImage from "../assets/hero/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-140px)] min-h-[600px] overflow-hidden">
      {/* ================= HERO IMAGE ================= */}
      <img
        src={heroImage}
        alt="Security Services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ================= LIGHT OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/5" />

      {/* ================= SLIDER ARROW ================= */}
      <button
        className="
          absolute
          left-6
          top-1/2
          -translate-y-1/2
          z-20
          text-white
          text-4xl
          hover:scale-110
          transition-transform
        "
      >
        ‹
      </button>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 h-full flex items-end">
        <div
          className="
            max-w-[1450px]
            w-full
            mx-auto
            px-6
            pb-10
            md:pb-14
            lg:pb-16
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-stretch
              lg:items-end
              justify-between
              gap-6
              lg:gap-10
            "
          >
            {/* ================= HEADING CARD ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                max-w-[800px]
                bg-black/1
                backdrop-blur-md
                border
                border-white/10
                rounded-2xl
                px-7
                py-6
                shadow-xl
              "
            >
              <h1
                className="
                  text-[#d83b32]
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                  leading-tight
                  tracking-wide
                  drop-shadow-lg
                "
              >
                Your Safety Is Our Responsibility —  <br /> Trusted Security Services.
               
               
              </h1>
            </motion.div>

            {/* ================= RIGHT CONTACT SECTION ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4 shrink-0"
            >
              {/* PHONE CARD */}
              <div
                className="
                  w-full
                  sm:w-[340px]
                  md:w-[360px]
                  px-6
                  py-5
                  flex
                  items-center
                  gap-5
                  rounded-2xl
                  bg-black/20
                  backdrop-blur-md
                  border
                  border-white/25
                  shadow-xl
                "
              >
                <div
                  className="
                    border
                    border-white/40
                    rounded-xl
                    p-3
                    shrink-0
                  "
                >
                  <PhoneCall size={30} className="text-white" />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    +91 9560662367
                  </h3>

                  <p className="text-white/80 mt-1 text-sm">
                    Call For Urgent Services
                  </p>
                </div>
              </div>

              {/* CONTACT BUTTON CARD */}
              <motion.a
                href="tel:+919560662367"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
    w-full
    sm:w-[340px]
    md:w-[360px]
    bg-[#d83b32]
    text-white
    py-4
    rounded-2xl
    font-semibold
    text-lg
    shadow-xl
    hover:bg-[#c3312a]
    transition-colors
    text-center
    cursor-pointer
  "
              >
                Contact Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
