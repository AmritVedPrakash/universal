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
// Apne actual filename ke according change karna
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
    
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d83b32]/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#d83b32]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#192235]/5 blur-3xl" />


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

          <div className="flex items-center justify-center gap-4">

            <span className="h-[2px] w-12 bg-[#d83b32]" />

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d83b32]">
              Our Standards
            </p>

            <span className="h-[2px] w-12 bg-[#d83b32]" />

          </div>


          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#24272d] sm:text-5xl lg:text-6xl">
            Qualities of a
            <span className="text-[#d83b32]"> Trained Security Guard</span>
          </h1>


          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            Every trained security professional is expected to demonstrate
            discipline, awareness, integrity and the knowledge required to
            deliver dependable security services.
          </p>

        </motion.div>


        {/* =====================================================
            DESKTOP ORBIT SECTION
        ====================================================== */}

        <div className="relative mx-auto mt-16 hidden h-[700px] max-w-[1150px] lg:block">

          {/* Orbit Ring */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d83b32]/10"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d83b32]/20"
          />


          {/* Connecting dots */}

          <div className="absolute left-1/2 top-[105px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#d83b32]" />

          <div className="absolute right-[170px] top-[245px] h-3 w-3 rounded-full bg-[#d83b32]" />

          <div className="absolute right-[170px] bottom-[230px] h-3 w-3 rounded-full bg-[#d83b32]" />

          <div className="absolute left-1/2 bottom-[90px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#d83b32]" />

          <div className="absolute left-[170px] bottom-[230px] h-3 w-3 rounded-full bg-[#d83b32]" />

          <div className="absolute left-[170px] top-[245px] h-3 w-3 rounded-full bg-[#d83b32]" />


          {/* =================================================
              CENTER LOGO
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
            }}
            className="absolute left-1/2 top-1/2 z-20 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          >

            {/* Pulse */}

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
              className="absolute inset-0 rounded-full bg-[#d83b32]"
            />

            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[6px] border-[#d83b32] bg-white p-5 shadow-2xl">

              <img
                src={qualityLogo}
                alt="Universal Security"
                className="h-full w-full object-contain"
              />

            </div>

          </motion.div>


          {/* =================================================
              QUALITY CARDS
          ================================================= */}

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

          {/* Center Logo */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border-[6px] border-[#d83b32] bg-white p-6 shadow-2xl"
          >

            <img
              src={qualityLogo}
              alt="Universal Security"
              className="h-full w-full object-contain"
            />

          </motion.div>


          {/* Mobile Cards */}

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
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-xl"
              >

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d83b32]/10 text-[#d83b32] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-lg font-bold capitalize text-[#24272d]">
                      {item.title}
                    </h3>

                    <div className="mt-2 h-1 w-8 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-14" />

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>


        {/* =====================================================
            BOTTOM INFORMATION STRIP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#d83b32]/10 bg-[#fff7f6] px-6 py-6 text-center"
        >

          <p className="text-sm font-semibold leading-7 text-gray-600 sm:text-base">
            <span className="font-bold text-[#d83b32]">
              Professional • Vigilant • Loyal • Fit • Knowledgeable
            </span>
            {" "}
            — the qualities that define a trained security professional.
          </p>

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

      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-lg transition-all duration-300 group-hover:border-[#d83b32]/40 group-hover:shadow-2xl">

        {/* Decorative red line */}

        <div className="absolute left-0 top-0 h-full w-1 bg-[#d83b32] transition-all duration-300 group-hover:w-2" />


        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d83b32]/10 text-[#d83b32] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
            {item.icon}
          </div>


          <div>

            <h3 className="text-base font-extrabold capitalize text-[#24272d]">
              {item.title}
            </h3>

            <div className="mt-2 h-1 w-7 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-12" />

          </div>

        </div>


        <p className="mt-4 text-sm leading-6 text-gray-600">
          {item.description}
        </p>

      </div>

    </motion.div>
  );
  
  
}