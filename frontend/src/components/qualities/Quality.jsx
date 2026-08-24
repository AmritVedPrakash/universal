import React from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Eye,
  HeartHandshake,
  Award,
  Brain,
  UserRoundCheck,
} from "lucide-react";

// =====================================================
// MANUAL IMAGE IMPORT
// =====================================================

import qualityLogo from "../../assets/quality/quality-logo.png";

export default function Quality() {
  const qualities = [
    {
      title: "Physically Fit",
      icon: <Dumbbell size={25} />,
      position: "top",
      description:
        "Physically fit and prepared to perform security duties effectively.",
    },
    {
      title: "Vigilant & Aware",
      icon: <Eye size={25} />,
      position: "rightTop",
      description:
        "Alert, observant and aware of the surrounding environment at all times.",
    },
    {
      title: "Turnout & Personality",
      icon: <UserRoundCheck size={25} />,
      position: "rightBottom",
      description:
        "Professional appearance, confident personality and disciplined presentation.",
    },
    {
      title: "Knowledge of Security Operations",
      icon: <Brain size={25} />,
      position: "bottom",
      description:
        "Strong understanding and knowledge of security operations and procedures.",
    },
    {
      title: "Pride in Duty",
      icon: <Award size={25} />,
      position: "leftBottom",
      description:
        "Dedicated professionals who take pride in their responsibilities and duties.",
    },
    {
      title: "Loyal & Honest",
      icon: <HeartHandshake size={25} />,
      position: "leftTop",
      description:
        "Loyal, trustworthy and honest personnel committed to their responsibilities.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#06152e] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      {/* =====================================================
          PREMIUM DARK BLUE BACKGROUND
          NO GRID / NO PATTERN
      ====================================================== */}

      {/* Large top-left blue glow */}
      <div className="pointer-events-none absolute -left-48 -top-40 h-[550px] w-[550px] rounded-full bg-[#0d5bd7]/15 blur-[130px]" />

      {/* Large top-right blue glow */}
      <div className="pointer-events-none absolute -right-48 top-0 h-[550px] w-[550px] rounded-full bg-[#1466c8]/15 blur-[130px]" />

      {/* Bottom-left blue glow */}
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#123e78]/20 blur-[130px]" />

      {/* Bottom-right subtle red glow */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#d83b32]/5 blur-[130px]" />

      {/* Center blue glow */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#0d5bd7]/8 blur-[140px]" />

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
              Our Standards
            </p>

            <span className="h-[2px] w-12 bg-[#d83b32]" />
          </div>

          {/* Heading */}

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Qualities of a
            <span className="text-[#ef6359]"> Trained Security Guard</span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100/65">
            Every trained security professional is expected to demonstrate
            discipline, awareness, integrity and the knowledge required to
            deliver dependable security services.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP ORBIT SECTION
        ====================================================== */}

        <div className="relative mx-auto mt-16 hidden h-[700px] max-w-[1150px] lg:block">
          {/* =====================================================
              OUTER ORBIT
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
              duration: 1,
            }}
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4f8ed8]/20"
          />

          {/* =====================================================
              INNER ORBIT
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
              duration: 1.2,
              delay: 0.2,
            }}
            className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d83b32]/25"
          />

          {/* =====================================================
              ORBIT GLOW
          ====================================================== */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0d5bd7]/5 blur-[80px]" />

          {/* =====================================================
              CONNECTING DOTS
          ====================================================== */}

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-[105px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#d83b32] shadow-[0_0_18px_rgba(216,59,50,0.7)]"
          />

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.4,
            }}
            className="absolute right-[170px] top-[245px] h-3 w-3 rounded-full bg-[#d83b32] shadow-[0_0_18px_rgba(216,59,50,0.7)]"
          />

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.8,
            }}
            className="absolute right-[170px] bottom-[230px] h-3 w-3 rounded-full bg-[#d83b32] shadow-[0_0_18px_rgba(216,59,50,0.7)]"
          />

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1.2,
            }}
            className="absolute left-1/2 bottom-[90px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#d83b32] shadow-[0_0_18px_rgba(216,59,50,0.7)]"
          />

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1.6,
            }}
            className="absolute left-[170px] bottom-[230px] h-3 w-3 rounded-full bg-[#d83b32] shadow-[0_0_18px_rgba(216,59,50,0.7)]"
          />

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 2,
            }}
            className="absolute left-[170px] top-[245px] h-3 w-3 rounded-full bg-[#d83b32] shadow-[0_0_18px_rgba(216,59,50,0.7)]"
          />

          {/* =====================================================
              CENTER LOGO
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
            }}
            className="absolute left-1/2 top-1/2 z-20 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          >
            {/* Outer Glow */}

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.25, 0.08, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-[#d83b32] blur-xl"
            />

            {/* Pulse Ring */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.08, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-2 rounded-full border-2 border-[#d83b32]"
            />

            {/* Logo Container */}

            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[6px] border-[#d83b32] bg-[#102f57] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-2 rounded-full border border-blue-200/10" />

              <img
                src={qualityLogo}
                alt="Universal Security"
                className="relative z-10 h-full w-full object-contain"
              />
            </div>
          </motion.div>

          {/* =====================================================
              QUALITY CARDS
          ====================================================== */}

          {/* TOP */}

          <QualityCard
            item={qualities[0]}
            className="absolute left-1/2 top-0 w-[270px] -translate-x-1/2"
            delay={0.1}
          />

          {/* LEFT TOP */}

          <QualityCard
            item={qualities[5]}
            className="absolute left-0 top-[170px] w-[280px]"
            delay={0.2}
          />

          {/* RIGHT TOP */}

          <QualityCard
            item={qualities[1]}
            className="absolute right-0 top-[170px] w-[280px]"
            delay={0.3}
          />

          {/* LEFT BOTTOM */}

          <QualityCard
            item={qualities[4]}
            className="absolute bottom-[115px] left-0 w-[280px]"
            delay={0.4}
          />

          {/* RIGHT BOTTOM */}

          <QualityCard
            item={qualities[2]}
            className="absolute bottom-[115px] right-0 w-[280px]"
            delay={0.5}
          />

          {/* BOTTOM */}

          <QualityCard
            item={qualities[3]}
            className="absolute bottom-0 left-1/2 w-[290px] -translate-x-1/2"
            delay={0.6}
          />
        </div>

        {/* =====================================================
            MOBILE / TABLET VERSION
        ====================================================== */}

        <div className="mt-14 lg:hidden">
          {/* =====================================================
              CENTER LOGO
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full border-[6px] border-[#d83b32] bg-[#102f57] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          >
            <div className="absolute inset-2 rounded-full border border-blue-200/10" />

            <img
              src={qualityLogo}
              alt="Universal Security"
              className="relative z-10 h-full w-full object-contain"
            />
          </motion.div>

          {/* =====================================================
              MOBILE CARDS
          ====================================================== */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {qualities.map((item, index) => (
              <motion.div
                key={item.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-2xl border border-blue-200/10 bg-[#0b2344]/90 p-6 shadow-[0_15px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#d83b32]/40 hover:bg-[#102b50] hover:shadow-[0_20px_55px_rgba(0,0,0,0.35)]"
              >
                {/* Card Glow */}

                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0d5bd7]/0 blur-3xl transition-all duration-500 group-hover:bg-[#0d5bd7]/15" />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102f57] text-[#8db8e8] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(216,59,50,0.25)]">
                    {item.icon}
                  </div>

                  <div>
                    {/* Title */}

                    <h3 className="text-lg font-bold capitalize text-white">
                      {item.title}
                    </h3>

                    {/* Accent */}

                    <div className="mt-2 h-1 w-8 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-14" />

                    {/* Description */}

                    <p className="mt-3 text-sm leading-6 text-blue-100/55">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Hover Line */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d83b32] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM INFORMATION STRIP
        ====================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-blue-200/10 bg-gradient-to-r from-[#0b2344] via-[#102f57] to-[#0b2344] px-6 py-7 text-center shadow-[0_18px_55px_rgba(0,0,0,0.3)]"
        >
          {/* Glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-[400px] -translate-x-1/2 rounded-full bg-[#d83b32]/8 blur-[70px]" />

          <p className="relative text-sm font-semibold leading-7 text-blue-100/65 sm:text-base">
            <span className="font-bold text-[#ef6359]">
              Professional • Vigilant • Loyal • Fit • Knowledgeable
            </span>{" "}
            — the qualities that define a trained security professional.
          </p>

          {/* Accent */}

          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#d83b32]" />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   REUSABLE QUALITY CARD
========================================================= */

function QualityCard({ item, className, delay }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
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
        delay,
      }}
      whileHover={{
        y: -7,
        scale: 1.02,
      }}
      className={`${className} group z-10`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-blue-200/10 bg-[#0b2344]/95 p-5 shadow-[0_15px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#d83b32]/40 group-hover:bg-[#102b50] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        {/* =====================================================
            RED SIDE ACCENT
        ====================================================== */}

        <div className="absolute left-0 top-0 h-full w-1 bg-[#d83b32] transition-all duration-300 group-hover:w-2" />

        {/* =====================================================
            BLUE CARD GLOW
        ====================================================== */}

        <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#0d5bd7]/0 blur-3xl transition-all duration-500 group-hover:bg-[#0d5bd7]/15" />

        <div className="relative flex items-center gap-4">
          {/* Icon */}

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102f57] text-[#8db8e8] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(216,59,50,0.25)]">
            {item.icon}
          </div>

          <div>
            {/* Title */}

            <h3 className="text-base font-extrabold capitalize text-white">
              {item.title}
            </h3>

            {/* Accent */}

            <div className="mt-2 h-1 w-7 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-12" />
          </div>
        </div>

        {/* Description */}

        <p className="relative mt-4 text-sm leading-6 text-blue-100/55">
          {item.description}
        </p>

        {/* Bottom Hover Line */}

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d83b32] transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}
