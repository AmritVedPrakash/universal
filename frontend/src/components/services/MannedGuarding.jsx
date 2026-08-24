import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  UserCheck,
  Crosshair,
  Radio,
  Car,
  Siren,
  Dog,
  ArrowRight,
} from "lucide-react";

// =====================================================
// MANUAL IMAGE IMPORTS
// =====================================================

import guardImage1 from "../../assets/services/mannedguarding/manned-guarding-1.jpg";
import guardImage2 from "../../assets/services/mannedguarding/manned-guarding-2.jpg";
import guardImage3 from "../../assets/services/mannedguarding/manned-guarding-3.jpg";
import guardImage4 from "../../assets/services/mannedguarding/manned-guarding-4.jpg";
import guardImage5 from "../../assets/services/mannedguarding/manned-guarding-5.jpg";
import guardImage6 from "../../assets/services/mannedguarding/manned-guarding-6.jpg";

export default function MannedGuarding() {
  const categories = [
    {
      icon: <Shield size={23} />,
      title: "Security Officers",
    },
    {
      icon: <UserCheck size={23} />,
      title: "Security Supervisors",
    },
    {
      icon: <Users size={23} />,
      title: "Security Facilitators",
    },
    {
      icon: <Crosshair size={23} />,
      title: "Executive Protection Executives",
    },
    {
      icon: <Shield size={23} />,
      title: "PSOs – Armed/Unarmed",
    },
    {
      icon: <Users size={23} />,
      title: "Bouncers",
    },
    {
      icon: <UserCheck size={23} />,
      title: "Lady Searchers",
    },
    {
      icon: <Shield size={23} />,
      title: "Armed Guards",
    },
    {
      icon: <Shield size={23} />,
      title: "Security Guards",
    },
    {
      icon: <Car size={23} />,
      title: "Mobile Patrols",
    },
    {
      icon: <Siren size={23} />,
      title: "Traffic Marshals",
    },
    {
      icon: <Car size={23} />,
      title: "Driver cum PSO",
    },
    {
      icon: <Dog size={23} />,
      title: "Dog Squads",
    },
  ];

  const images = [
    guardImage1,
    guardImage2,
    guardImage3,
    guardImage4,
    guardImage5,
    guardImage6,
  ];

  return (
    <section className="relative overflow-hidden bg-[#06152e] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      {/* =====================================================
          PREMIUM DARK BLUE BACKGROUND
      ====================================================== */}

      {/* Top-right blue glow */}
      <div className="pointer-events-none absolute -right-40 -top-20 h-[550px] w-[550px] rounded-full bg-[#0d5bd7]/20 blur-[130px]" />

      {/* Bottom-left blue glow */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#123e78]/20 blur-[130px]" />

      {/* Center subtle blue glow */}
      <div className="pointer-events-none absolute left-[40%] top-[25%] h-[350px] w-[350px] rounded-full bg-[#1466c8]/10 blur-[120px]" />

      {/* Small red ambient glow */}
      <div className="pointer-events-none absolute right-[20%] top-[45%] h-[250px] w-[250px] rounded-full bg-[#d83b32]/5 blur-[100px]" />

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

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ef6359]">
              Security Solutions
            </p>

            <span className="h-[2px] w-12 bg-[#d83b32]" />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Manned <span className="text-[#ef6359]">Guarding</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-blue-100/65 sm:text-lg">
            Manned Guarding is based on strong support, coordination and
            communication between our internal operations team and you, our
            client.
          </p>
        </motion.div>

        {/* =====================================================
            INTERNAL / EXTERNAL
        ====================================================== */}

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {/* INTERNAL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -7 }}
            className="group relative overflow-hidden rounded-2xl border border-blue-200/10 bg-gradient-to-br from-[#102c52] to-[#0a1d38] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-[#d83b32]/30"
          >
            {/* Card Glow */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#0d5bd7]/15 blur-3xl transition-all duration-500 group-hover:bg-[#d83b32]/10" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d83b32] text-white shadow-lg shadow-red-950/30 transition-transform duration-300 group-hover:scale-105">
                <Shield size={28} />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                Internal
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">
                Officers, Site & Operations Managers
              </h2>

              <p className="mt-3 leading-7 text-blue-100/60">
                Our internal operations team ensures effective coordination,
                supervision and communication across every security assignment.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-16" />
            </div>
          </motion.div>

          {/* EXTERNAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -7 }}
            className="group relative overflow-hidden rounded-2xl border border-blue-200/10 bg-[#0b2344]/80 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#d83b32]/30"
          >
            {/* Card Glow */}
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-[#d83b32]/8 blur-3xl transition-all duration-500 group-hover:bg-[#0d5bd7]/15" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d83b32] text-white shadow-lg shadow-red-950/30 transition-transform duration-300 group-hover:scale-105">
                <Users size={28} />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                External
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">
                You, Our Client
              </h2>

              <p className="mt-3 leading-7 text-blue-100/60">
                We work closely with our clients to understand their
                requirements and deliver security solutions aligned with their
                specific needs.
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-16" />
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            CATEGORIES + IMAGES
        ====================================================== */}

        <div className="mt-20 grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ================= CATEGORIES ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                Our Workforce
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Security <span className="text-[#ef6359]">Categories</span>
              </h2>

              <p className="mt-3 max-w-xl text-blue-100/60">
                Our manned guarding services cover a comprehensive range of
                trained security professionals.
              </p>
            </div>

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
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -5,
                    x: 3,
                  }}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-blue-200/10 bg-[#0b2344]/75 p-4 shadow-[0_10px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-[#d83b32]/40 hover:bg-[#102b50] hover:shadow-[0_15px_45px_rgba(0,0,0,0.3)]"
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -left-10 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#d83b32]/0 blur-2xl transition-all duration-300 group-hover:bg-[#d83b32]/10" />

                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#102f57] text-[#8db8e8] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
                    {category.icon}
                  </div>

                  <div className="relative flex-1">
                    <p className="text-[15px] font-bold text-white">
                      {category.title}
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="relative text-blue-200/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ef6359]"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= IMAGE COLLAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Frame */}
            <div className="absolute -right-4 -top-4 z-0 h-24 w-24 rounded-tr-3xl border-r-2 border-t-2 border-[#d83b32]/60" />

            <div className="absolute -bottom-4 -left-4 z-0 h-24 w-24 rounded-bl-3xl border-b-2 border-l-2 border-[#d83b32]/60" />

            <div className="relative grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.92,
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
                  className={`group relative overflow-hidden rounded-xl border border-blue-200/10 bg-[#0b2344] shadow-[0_15px_45px_rgba(0,0,0,0.3)] ${
                    index === 0 || index === 5 ? "h-[220px]" : "h-[180px]"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Manned guarding service ${index + 1}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06152e]/75 via-transparent to-transparent opacity-70 transition duration-300 group-hover:opacity-100" />

                  {/* Hover Border */}
                  <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-300 group-hover:border-[#d83b32]/50" />
                </motion.div>
              ))}
            </div>

            {/* Center Badge */}
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
                delay: 0.4,
              }}
              className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#06152e] bg-[#d83b32] text-center text-white shadow-[0_10px_45px_rgba(0,0,0,0.5)]"
            >
              <div>
                <Shield size={25} className="mx-auto" />

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider">
                  Security
                </p>
              </div>
            </motion.div>
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
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d83b32] text-white shadow-lg shadow-red-950/30">
              <Radio size={27} />
            </div>

            <h3 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
              Professional Security.
              <span className="text-[#ef6359]"> Reliable Protection.</span>
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-blue-100/60 sm:text-base">
              Our trained security professionals provide dependable, disciplined
              and client-focused manned guarding solutions.
            </p>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#d83b32]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
