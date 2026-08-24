import React from "react";
import { motion } from "framer-motion";
import {
  Dog,
  ShieldCheck,
  Search,
  Footprints,
  Crosshair,
  Bomb,
  UserRound,
  MapPin,
} from "lucide-react";

// =====================================================
// MANUAL IMAGE IMPORTS
// =====================================================

import canineImage1 from "../../assets/services/cannesquads/canine-1.jpg";
import canineImage2 from "../../assets/services/cannesquads/canine-2.jpg";
import canineImage3 from "../../assets/services/cannesquads/canine-3.jpg";
import canineImage4 from "../../assets/services/cannesquads/canine-4.jpg";

export default function CanneSquads() {
  const categories = [
    {
      icon: <ShieldCheck size={23} />,
      title: "Guard Dogs",
      description:
        "Highly trained dogs prepared to support security personnel and protect designated premises.",
    },
    {
      icon: <Footprints size={23} />,
      title: "Patrol Dogs",
      description:
        "Trained canine teams for patrol duties and continuous monitoring of assigned areas.",
    },
    {
      icon: <Search size={23} />,
      title: "Tracker Dogs",
      description:
        "Specially trained dogs capable of tracking individuals and following specific scents.",
    },
    {
      icon: <Bomb size={23} />,
      title: "Narcotic Detection Dogs",
      description:
        "Specialized detection dogs trained to assist in identifying narcotic substances.",
    },
    {
      icon: <Crosshair size={23} />,
      title: "Explosive Detection Dogs",
      description:
        "Trained canine units designed to assist security teams in detecting explosive threats.",
    },
    {
      icon: <UserRound size={23} />,
      title: "Executive Protection Dog",
      description:
        "Professional canine protection support for executive and high-security requirements.",
    },
    {
      icon: <MapPin size={23} />,
      title: "Area Protection Dog",
      description:
        "Canine support for securing and monitoring defined areas, premises and facilities.",
    },
  ];

  const images = [canineImage1, canineImage2, canineImage3, canineImage4];

  return (
    <section className="relative overflow-hidden bg-[#06152e] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      {/* =====================================================
          PREMIUM DARK BLUE BACKGROUND
      ====================================================== */}

      {/* Top-left blue glow */}
      <div className="pointer-events-none absolute -left-48 -top-32 h-[550px] w-[550px] rounded-full bg-[#0d5bd7]/15 blur-[130px]" />

      {/* Top-right blue glow */}
      <div className="pointer-events-none absolute -right-48 top-[20%] h-[500px] w-[500px] rounded-full bg-[#1466c8]/15 blur-[130px]" />

      {/* Bottom-left glow */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#123e78]/20 blur-[130px]" />

      {/* Bottom-right red ambient glow */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#d83b32]/5 blur-[130px]" />

      {/* Small center glow */}
      <div className="pointer-events-none absolute left-[45%] top-[35%] h-[300px] w-[300px] rounded-full bg-[#0d5bd7]/8 blur-[110px]" />

      <div className="relative mx-auto max-w-[1350px]">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#d83b32]" />

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ef6359]">
              Specialized Security
            </p>

            <span className="h-[2px] w-12 bg-[#d83b32]" />
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Canine <span className="text-[#ef6359]">Squads</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100/65 sm:text-lg">
            Highly trained canine teams supported by experienced trainers and
            handlers from professional security backgrounds.
          </p>
        </motion.div>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-blue-200/10 bg-gradient-to-br from-[#102c52] to-[#081b35] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.3)] sm:p-10">
            {/* Card Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0d5bd7]/15 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#d83b32]/5 blur-[80px]" />

            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start">
              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#d83b32] text-white shadow-[0_10px_35px_rgba(216,59,50,0.25)] transition-transform duration-300 group-hover:scale-105">
                <Dog size={34} />
              </div>

              <div>
                <p className="text-lg font-bold text-white sm:text-xl">
                  Professional Canine Security Teams
                </p>

                <div className="mt-3 h-1 w-10 rounded-full bg-[#d83b32]" />

                <p className="mt-5 leading-8 text-blue-100/65">
                  Our Canine Squad combines the very best breeds, which are
                  highly trained for all tasks.
                </p>

                <p className="mt-2 leading-8 text-blue-100/65">
                  Our Trainers and Handlers are picked from Army, Police & other
                  forces.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-[1fr_0.95fr]">
          {/* =====================================================
              CATEGORIES
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                Our Canine Services
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Categories of <span className="text-[#ef6359]">Dogs</span>
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-blue-100/60">
                Our canine units are trained for different security, protection,
                tracking and detection requirements.
              </p>
            </div>

            {/* Cards */}

            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={`group relative overflow-hidden rounded-2xl border border-blue-200/10 bg-[#0b2344]/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:border-[#d83b32]/40 hover:bg-[#102b50] hover:shadow-[0_18px_50px_rgba(0,0,0,0.3)] ${
                    index === categories.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0d5bd7]/0 blur-3xl transition-all duration-500 group-hover:bg-[#0d5bd7]/15" />

                  {/* Number */}
                  <span className="absolute right-4 top-2 text-4xl font-black text-white/[0.035] transition-colors duration-300 group-hover:text-[#d83b32]/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102f57] text-[#8db8e8] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
                      {category.icon}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white sm:text-lg">
                        {category.title}
                      </h3>

                      <div className="mt-2 h-1 w-8 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-14" />

                      <p className="mt-3 text-sm leading-6 text-blue-100/55">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              IMAGE COLLAGE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Corners */}
            <div className="absolute -right-4 -top-4 z-10 h-24 w-24 rounded-tr-3xl border-r-2 border-t-2 border-[#d83b32]/60" />

            <div className="absolute -bottom-4 -left-4 z-10 h-24 w-24 rounded-bl-3xl border-b-2 border-l-2 border-[#d83b32]/60" />

            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                Trained & Specialized
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Canine <span className="text-[#ef6359]">Protection</span>
              </h2>
            </div>

            {/* Image Grid */}

            <div className="relative grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative overflow-hidden rounded-2xl border border-blue-200/10 bg-[#0b2344] shadow-[0_18px_50px_rgba(0,0,0,0.35)] ${
                    index === 0 || index === 3 ? "h-[250px]" : "h-[200px]"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Canine security service ${index + 1}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Permanent Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06152e]/75 via-[#06152e]/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />

                  {/* Red Hover Border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 group-hover:border-[#d83b32]/60" />

                  {/* Image Label */}
                  <div className="absolute bottom-4 left-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                      Canine Unit
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* =====================================================
                  FLOATING K9 BADGE
              ====================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                className="absolute left-1/2 top-[55%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#06152e] bg-[#d83b32] text-center text-white shadow-[0_15px_50px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <Dog size={27} className="mx-auto" />

                  <p className="mt-1 text-[9px] font-extrabold uppercase tracking-wider">
                    K9 Unit
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-20 overflow-hidden rounded-3xl border border-blue-200/10 bg-gradient-to-r from-[#0b2344] via-[#102f57] to-[#0b2344] px-7 py-10 text-center shadow-[0_25px_70px_rgba(0,0,0,0.3)] sm:px-12"
        >
          {/* CTA Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[500px] -translate-x-1/2 rounded-full bg-[#d83b32]/10 blur-[80px]" />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d83b32] text-white shadow-[0_10px_35px_rgba(216,59,50,0.25)]">
              <Dog size={28} />
            </div>

            <h3 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
              Trained Canines.
              <span className="text-[#ef6359]"> Enhanced Security.</span>
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-blue-100/60 sm:text-base">
              Specially trained canine teams provide reliable support for
              protection, detection, tracking and security operations.
            </p>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#d83b32]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
