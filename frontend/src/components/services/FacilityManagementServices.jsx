import React from "react";
import { motion } from "framer-motion";
import {
  Utensils,
  Sparkles,
  Trash2,
  Building2,
  Mail,
  Users,
  Paintbrush,
  Trees,
  Wind,
  Zap,
  Settings2,
  Flame,
  Droplets,
  Store,
  ParkingSquare,
  Camera,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

// =====================================================
// MANUAL IMAGE IMPORTS
// =====================================================

import facility1 from "../../assets/services/FacilityManagement/facility-1.jpg";
import facility2 from "../../assets/services/FacilityManagement/facility-2.jpg";
import facility3 from "../../assets/services/FacilityManagement/facility-3.jpg";
import facility4 from "../../assets/services/FacilityManagement/facility-4.jpg";
import facility5 from "../../assets/services/FacilityManagement/facility-5.jpg";
import facility6 from "../../assets/services/FacilityManagement/facility-6.jpg";

export default function FacilityManagementServices() {
  const categories = [
    {
      title: "House Keeping Services",
      icon: <Sparkles />,
      items: [
        {
          text: "Catering & Pantry Services",
          icon: <Utensils />,
        },
        {
          text: "Cleaning Services",
          icon: <Sparkles />,
        },
        {
          text: "Waste Management/Garbage disposal",
          icon: <Trash2 />,
        },
        {
          text: "Façade/Glass/Window Cleaning",
          icon: <Building2 />,
        },
        {
          text: "Specialized Floor Polishing and Crystallization",
          icon: <Sparkles />,
        },
        {
          text: "Carpet Shampooing & Upholstery Cleaning",
          icon: <Sparkles />,
        },
      ],
    },

    {
      title: "Business Support Services",
      icon: <Users />,
      items: [
        {
          text: "Mail & Courier Services",
          icon: <Mail />,
        },
        {
          text: "Guest House Management",
          icon: <Users />,
        },
        {
          text: "Front Desk Management",
          icon: <Users />,
        },
        {
          text: "Reprographics",
          icon: <Paintbrush />,
        },
        {
          text: "Horticulture/Landscaping",
          icon: <Trees />,
        },
        {
          text: "Indoor Plant Management",
          icon: <Trees />,
        },
      ],
    },

    {
      title: "Technical Services",
      icon: <Settings2 />,
      items: [
        {
          text: "HVAC",
          icon: <Wind />,
        },
        {
          text: "Electrical Systems",
          icon: <Zap />,
        },
        {
          text: "Transformers & HTCT Panels",
          icon: <Settings2 />,
        },
        {
          text: "DG & UPS",
          icon: <Zap />,
        },
        {
          text: "Fire Alarms & Sprinklers & Hydrants",
          icon: <Flame />,
        },
        {
          text: "WTP/STP",
          icon: <Droplets />,
        },
      ],
    },

    {
      title: "Mall Management Services",
      icon: <Store />,
      items: [
        {
          text: "Integrated House keeping, Security, Parking & Technical Services",
          icon: <Building2 />,
        },
        {
          text: "Branding & Signage's",
          icon: <Paintbrush />,
        },
        {
          text: "CAM Management",
          icon: <Camera />,
        },
        {
          text: "Event & Kiosk Management",
          icon: <CalendarDays />,
        },
      ],
    },
  ];

  const images = [
    facility1,
    facility2,
    facility3,
    facility4,
    facility5,
    facility6,
  ];

  return (
    <section className="relative overflow-hidden bg-[#06152e] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      {/* =====================================================
          PREMIUM DARK BLUE BACKGROUND
          NO GRID
      ====================================================== */}

      {/* Top Left Blue Glow */}
      <div className="pointer-events-none absolute -left-48 -top-40 h-[550px] w-[550px] rounded-full bg-[#0d5bd7]/15 blur-[130px]" />

      {/* Top Right Blue Glow */}
      <div className="pointer-events-none absolute -right-48 top-20 h-[550px] w-[550px] rounded-full bg-[#1466c8]/15 blur-[130px]" />

      {/* Bottom Left Blue Glow */}
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#123e78]/20 blur-[130px]" />

      {/* Bottom Right Red Glow */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#d83b32]/5 blur-[130px]" />

      {/* Center Blue Glow */}
      <div className="pointer-events-none absolute left-[40%] top-[35%] h-[350px] w-[350px] rounded-full bg-[#0d5bd7]/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
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
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#d83b32]" />

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
              Integrated Solutions
            </span>

            <span className="h-[2px] w-10 bg-[#d83b32]" />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Facility Management <span className="text-[#ef6359]">Services</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100/65 sm:text-lg">
            Comprehensive facility management solutions designed to keep
            workplaces, commercial spaces and managed facilities efficient,
            clean, safe and operational.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* =====================================================
              SERVICES
          ====================================================== */}

          <div className="space-y-6">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  x: -40,
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
                  duration: 0.6,
                  delay: categoryIndex * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-blue-200/10 bg-[#0b2344]/80 shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-[0_22px_65px_rgba(0,0,0,0.35)]"
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#0d5bd7]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#0d5bd7]/15" />

                {/* Red Glow */}
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#d83b32]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#d83b32]/5" />

                {/* =====================================================
                    CATEGORY HEADER
                ====================================================== */}

                <div className="relative flex items-center gap-4 bg-gradient-to-r from-[#102f57] to-[#0c2444] px-6 py-5 text-white">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d83b32] shadow-[0_8px_25px_rgba(216,59,50,0.25)] transition-transform duration-300 group-hover:scale-105">
                    {React.cloneElement(category.icon, {
                      size: 24,
                    })}
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ef6359]">
                      Service Category
                    </p>

                    <h2 className="mt-1 text-xl font-extrabold sm:text-2xl">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* =====================================================
                    ITEMS
                ====================================================== */}

                <div className="relative grid gap-2 p-5 sm:grid-cols-2">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      className="group/item flex items-start gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-300 hover:border-[#d83b32]/25 hover:bg-[#102f57]"
                    >
                      {/* Icon */}
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#102f57] text-[#8db8e8] transition-all duration-300 group-hover/item:bg-[#d83b32] group-hover/item:text-white">
                        {React.cloneElement(item.icon, {
                          size: 16,
                        })}
                      </div>

                      {/* Text */}
                      <p className="text-sm font-semibold leading-6 text-blue-100/75 transition-colors duration-300 group-hover/item:text-white">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* =====================================================
              IMAGE GALLERY
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="relative overflow-hidden rounded-3xl border border-blue-200/10 bg-gradient-to-br from-[#102f57] via-[#0b2344] to-[#071a35] p-4 shadow-[0_25px_75px_rgba(0,0,0,0.35)] sm:p-5">
              {/* Gallery Glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#0d5bd7]/15 blur-[100px]" />

              <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#d83b32]/5 blur-[100px]" />

              {/* =====================================================
                  GALLERY HEADER
              ====================================================== */}

              <div className="relative mb-5 flex items-center justify-between px-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                    Our Expertise
                  </p>

                  <h2 className="mt-1 text-2xl font-extrabold text-white">
                    Complete Facility Care
                  </h2>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-[#d83b32] shadow-[0_8px_25px_rgba(216,59,50,0.25)] sm:flex">
                  <Building2 size={22} className="text-white" />
                </div>
              </div>

              {/* =====================================================
                  IMAGE GALLERY
              ====================================================== */}

              <div className="relative grid grid-cols-2 gap-3">
                {images.map((image, index) => (
                  <motion.div
                    key={image}
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
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      scale: 1.03,
                    }}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                      index === 0 || index === 3 ? "h-64" : "h-48"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Facility management service ${index + 1}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Dark Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06152e]/80 via-[#06152e]/10 to-transparent opacity-70 transition duration-300 group-hover:opacity-100" />

                    {/* Red Hover Border */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 group-hover:border-[#d83b32]/60" />

                    {/* Hover Label */}
                    <div className="absolute bottom-4 left-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                        Facility Services
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* =====================================================
                  BOTTOM INFO
              ====================================================== */}

              <div className="relative mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d83b32] shadow-[0_8px_25px_rgba(216,59,50,0.2)]">
                    <CheckCircle2 size={20} className="text-white" />
                  </div>

                  <div>
                    <p className="font-bold text-white">
                      Integrated Facility Support
                    </p>

                    <p className="mt-1 text-xs leading-5 text-blue-100/45">
                      Housekeeping, technical, business support and mall
                      management services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM SUMMARY
        ====================================================== */}

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
            duration: 0.7,
          }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-blue-200/10 bg-gradient-to-r from-[#0b2344] via-[#102f57] to-[#0b2344] px-7 py-9 text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:px-12"
        >
          {/* Summary Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[500px] -translate-x-1/2 rounded-full bg-[#d83b32]/8 blur-[80px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d83b32] shadow-[0_10px_30px_rgba(216,59,50,0.25)]">
              <Building2 size={27} className="text-white" />
            </div>

            <p className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
              One Facility.{" "}
              <span className="text-[#ef6359]">Complete Management.</span>
            </p>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-blue-100/55">
              From housekeeping and business support to technical operations and
              mall management, our integrated services help maintain efficient
              and well-managed facilities.
            </p>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#d83b32]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
