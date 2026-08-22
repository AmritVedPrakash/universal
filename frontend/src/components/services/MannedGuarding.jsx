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
// Apne actual image filenames yahan use karo

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
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#d83b32]/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#d83b32]/5 blur-3xl" />


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
              Security Solutions
            </p>

            <span className="h-[2px] w-12 bg-[#d83b32]" />

          </div>


          <h1 className="mt-5 text-4xl font-extrabold text-[#24272d] sm:text-5xl lg:text-6xl">
            Manned <span className="text-[#d83b32]">Guarding</span>
          </h1>


          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Manned Guarding is based on strong support, coordination and
            communication between our internal operations team and you,
            our client.
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
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-[#192235] p-7 text-white shadow-lg"
          >

            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#d83b32]/20 blur-2xl" />

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d83b32]">
                <Shield size={28} />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                Internal
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Officers, Site & Operations Managers
              </h2>

              <p className="mt-3 leading-7 text-gray-300">
                Our internal operations team ensures effective coordination,
                supervision and communication across every security assignment.
              </p>

            </div>

          </motion.div>


          {/* EXTERNAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-2xl border border-[#d83b32]/20 bg-[#fff7f6] p-7 shadow-lg"
          >

            <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-[#d83b32]/10 blur-2xl" />

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d83b32] text-white">
                <Users size={28} />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#d83b32]">
                External
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#24272d]">
                You, Our Client
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                We work closely with our clients to understand their
                requirements and deliver security solutions aligned with
                their specific needs.
              </p>

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

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
                Our Workforce
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-[#24272d] sm:text-4xl">
                Security <span className="text-[#d83b32]">Categories</span>
              </h2>

              <p className="mt-3 text-gray-600">
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
                  className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-lg"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#d83b32]/10 text-[#d83b32] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
                    {category.icon}
                  </div>

                  <div className="flex-1">

                    <p className="text-[15px] font-bold text-[#24272d]">
                      {category.title}
                    </p>

                  </div>

                  <ArrowRight
                    size={17}
                    className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d83b32]"
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

            <div className="grid grid-cols-2 gap-4">

              {images.map((image, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className={`group relative overflow-hidden rounded-xl ${
                    index === 0 || index === 5
                      ? "h-[220px]"
                      : "h-[180px]"
                  }`}
                >

                  <img
                    src={image}
                    alt={`Manned guarding service ${index + 1}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                </motion.div>

              ))}

            </div>


            {/* Center Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#d83b32] text-center text-white shadow-2xl"
            >
              <div>
                <Shield
                  size={25}
                  className="mx-auto"
                />

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


      </div>

    </section>
  );
}