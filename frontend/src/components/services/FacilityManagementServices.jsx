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

// Apne actual filenames ke according names change kar dena
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
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#d83b32]" />

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
              Integrated Solutions
            </span>

            <span className="h-[2px] w-10 bg-[#d83b32]" />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#24272d] sm:text-5xl lg:text-6xl">
            Facility Management <span className="text-[#d83b32]">Services</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Comprehensive facility management solutions designed to keep
            workplaces, commercial spaces and managed facilities efficient,
            clean, safe and operational.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ================= SERVICES ================= */}

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
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-xl"
              >
                {/* Category Header */}

                <div className="flex items-center gap-4 bg-[#192235] px-6 py-5 text-white">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d83b32]">
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

                {/* Items */}

                <div className="grid gap-2 p-5 sm:grid-cols-2">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      className="group/item flex items-start gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-300 hover:border-[#d83b32]/20 hover:bg-[#fdf0ee]"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fdf0ee] text-[#d83b32] transition-all duration-300 group-hover/item:bg-[#d83b32] group-hover/item:text-white">
                        {React.cloneElement(item.icon, {
                          size: 16,
                        })}
                      </div>

                      <p className="text-sm font-semibold leading-6 text-gray-700">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= IMAGE GALLERY ================= */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="rounded-3xl bg-[#192235] p-4 shadow-2xl sm:p-5">
              <div className="mb-5 flex items-center justify-between px-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                    Our Expertise
                  </p>

                  <h2 className="mt-1 text-2xl font-extrabold text-white">
                    Complete Facility Care
                  </h2>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-[#d83b32] sm:flex">
                  <Building2 size={22} className="text-white" />
                </div>
              </div>

              {/* Masonry-like Gallery */}

              <div className="grid grid-cols-2 gap-3">
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
                    className={`group relative overflow-hidden rounded-2xl ${
                      index === 0 || index === 3 ? "h-64" : "h-48"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Facility management service ${index + 1}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#192235]/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </div>

              {/* Bottom info */}

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d83b32]">
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <p className="font-bold text-white">
                      Integrated Facility Support
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      Housekeeping, technical, business support and mall
                      management services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM SUMMARY ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-3xl border border-[#d83b32]/20 bg-[#fdf0ee] px-7 py-8 text-center sm:px-12"
        >
          <p className="text-xl font-extrabold text-[#24272d] sm:text-2xl">
            One Facility.{" "}
            <span className="text-[#d83b32]">Complete Management.</span>
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-gray-600">
            From housekeeping and business support to technical operations and
            mall management, our integrated services help maintain efficient and
            well-managed facilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
