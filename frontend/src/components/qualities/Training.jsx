import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  RefreshCw,
  TrendingUp,
  Settings2,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

// =====================================================
// MANUAL IMAGE IMPORTS
// =====================================================
// Apne actual image filenames ke according change karna

import trainingImage1 from "../../assets/quality/training-1.jpg";
import trainingImage2 from "../../assets/quality/training-2.jpg";
import trainingImage3 from "../../assets/quality/training-3.jpg";

export default function Training() {
  const trainingPrograms = [
    {
      number: "01",
      title: "Basic",
      icon: <ShieldCheck size={25} />,
      shortText: "Foundation Training",
      description:
        "Initial training including Disaster Management, First Aid, Security drill procedures, Use of hand held metal detectors, General frisking, Fire fighting, General etiquette.",
      image: trainingImage1,
    },
    {
      number: "02",
      title: "Refresher",
      icon: <RefreshCw size={25} />,
      shortText: "Role & Responsibility",
      description:
        "Briefing or refreshing the employees about their roles & job responsibilities just prior to the beginning of shift.",
      image: trainingImage2,
    },
    {
      number: "03",
      title: "Continual",
      icon: <TrendingUp size={25} />,
      shortText: "Continuous Development",
      description:
        "In order to enhance the job specific knowledge and development of employees for future. This training is given on a regular basis.",
      image: trainingImage3,
    },
    {
      number: "04",
      title: "Customised",
      icon: <Settings2 size={25} />,
      shortText: "Site Specific Training",
      description:
        "Specific training related to the nature of the job. For example Industrial, Hospitality, Residential, BPO training, specific to the Role & Nature of Duties. Also on specific equipment or Processes.",
      image: trainingImage1,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d83b32]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#192235]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1250px]">
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
              Professional Development
            </p>

            <span className="h-[2px] w-12 bg-[#d83b32]" />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#24272d] sm:text-5xl lg:text-6xl">
            Security <span className="text-[#d83b32]">Training</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Our training programs are designed to prepare, refresh and
            continuously develop security personnel according to their roles,
            responsibilities and operational requirements.
          </p>
        </motion.div>

        {/* =====================================================
            TRAINING INTRO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-14 max-w-4xl rounded-2xl bg-[#192235] p-7 text-white shadow-xl sm:p-9"
        >
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#d83b32] shadow-lg">
              <GraduationCap size={32} />
            </div>

            <div>
              <p className="text-xl font-bold sm:text-2xl">
                Training for Every Stage
              </p>

              <p className="mt-2 leading-7 text-gray-300">
                From initial induction to regular refresher programs and
                customised site-specific training, our approach focuses on
                developing knowledgeable and capable security personnel.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TRAINING PROGRAMS
        ====================================================== */}

        <div className="mt-16 space-y-7">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-[190px_1fr_290px]">
                {/* =================================================
                    NUMBER / TITLE
                ================================================= */}

                <div className="relative flex min-h-[150px] flex-col justify-center overflow-hidden bg-[#192235] p-7 text-white">
                  <span className="absolute -right-3 -top-7 text-[100px] font-black leading-none text-white/5">
                    {program.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d83b32]">
                      {program.icon}
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#ef6359]">
                      {program.shortText}
                    </p>

                    <h2 className="mt-1 text-2xl font-extrabold">
                      {program.title}
                    </h2>
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="flex flex-col justify-center p-7 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#d83b32]" />

                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#d83b32]">
                      Training Program
                    </p>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-[#24272d] sm:text-2xl">
                    {program.title} Training
                  </h3>

                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-gray-600">
                    {program.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#24272d] transition-colors group-hover:text-[#d83b32]">
                    <span>Professional Training</span>

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="relative h-[230px] overflow-hidden lg:h-auto">
                  <img
                    src={program.image}
                    alt={`${program.title} security training`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-lg bg-[#d83b32] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    Training
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            TRAINING HIGHLIGHTS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
              Our Approach
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#24272d] sm:text-4xl">
              Training That Builds
              <span className="text-[#d83b32]"> Confidence</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Prepared",
                text: "Personnel receive structured training before taking on their responsibilities.",
                icon: <ShieldCheck size={24} />,
              },
              {
                title: "Refreshed",
                text: "Regular refreshers help employees remain aware of their roles and responsibilities.",
                icon: <RefreshCw size={24} />,
              },
              {
                title: "Developed",
                text: "Continual and customised programs enhance job-specific knowledge and skills.",
                icon: <TrendingUp size={24} />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-[#d83b32]/30 hover:shadow-lg"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#d83b32]/10 text-[#d83b32]">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xl font-bold text-[#24272d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
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
