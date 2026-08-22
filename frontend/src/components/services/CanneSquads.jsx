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
// Apne actual filenames ke according names change karna.
// import.meta.glob() use nahi kiya hai.

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
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#d83b32]/5 blur-3xl" />

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
              Specialized Security
            </p>

            <span className="h-[2px] w-12 bg-[#d83b32]" />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#24272d] sm:text-5xl lg:text-6xl">
            Canine <span className="text-[#d83b32]">Squads</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
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
          <div className="relative overflow-hidden rounded-3xl bg-[#192235] p-8 shadow-xl sm:p-10">
            {/* Decorative circle */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d83b32]/20 blur-2xl" />

            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start">
              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#d83b32] text-white shadow-lg">
                <Dog size={34} />
              </div>

              <div>
                <p className="text-lg font-bold text-white sm:text-xl">
                  Professional Canine Security Teams
                </p>

                <p className="mt-4 leading-8 text-gray-300">
                  Our Canine Squad combines the very best breeds, which are
                  highly trained for all tasks.
                </p>

                <p className="mt-2 leading-8 text-gray-300">
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
                Our Canine Services
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-[#24272d] sm:text-4xl">
                Categories of <span className="text-[#d83b32]">Dogs</span>
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-gray-600">
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
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-xl ${
                    index === categories.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* Number */}

                  <span className="absolute right-4 top-3 text-4xl font-black text-gray-100 transition-colors duration-300 group-hover:text-[#d83b32]/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d83b32]/10 text-[#d83b32] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
                      {category.icon}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#24272d] sm:text-lg">
                        {category.title}
                      </h3>

                      <div className="mt-2 h-1 w-8 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-14" />

                      <p className="mt-3 text-sm leading-6 text-gray-600">
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
            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
                Trained & Specialized
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-[#24272d] sm:text-4xl">
                Canine <span className="text-[#d83b32]">Protection</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
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
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg ${
                    index === 0 || index === 3 ? "h-[250px]" : "h-[200px]"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Canine security service ${index + 1}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Image label */}

                  <div className="absolute bottom-4 left-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      Canine Unit
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Badge */}

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
              className="absolute left-1/2 top-[55%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#d83b32] text-center text-white shadow-2xl"
            >
              <div>
                <Dog size={27} className="mx-auto" />

                <p className="mt-1 text-[9px] font-extrabold uppercase tracking-wider">
                  K9 Unit
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
