import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  CalendarDays,
  UserRoundCheck,
  Building2,
  Route,
  Car,
  WalletCards,
  Dog,
  RadioTower,
  Users,
  SearchCheck,
  Fingerprint,
  MessageSquareText,
  Hotel,
  Utensils,
  Banknote,
} from "lucide-react";

export default function ScopeOfService() {
  const services = [
    {
      title: "Manned Guarding",
      icon: <ShieldCheck />,
    },
    {
      title: "Security Technology and Equipment",
      icon: <Cpu />,
    },
    {
      title: "Event Management",
      icon: <CalendarDays />,
    },
    {
      title: "Executive Protection & Specialised Protective Services",
      icon: <UserRoundCheck />,
    },
    {
      title: "Facility and Housekeeping Services",
      icon: <Building2 />,
    },
    {
      title: "Tolls and Highway Management",
      icon: <Route />,
    },
    {
      title: "Parking Management",
      icon: <Car />,
    },
    {
      title: "Cash Management Services",
      icon: <WalletCards />,
    },
    {
      title: "Canine Squads",
      icon: <Dog />,
    },
    {
      title: "Telecom Tower Construction and Management",
      icon: <RadioTower />,
    },
    {
      title: "Manpower Outsourcing",
      icon: <Users />,
    },
    {
      title: "Background Checks Division",
      icon: <SearchCheck />,
    },
    {
      title: "Detective/Investigation Services",
      icon: <Fingerprint />,
    },
    {
      title: "Consultancy Services",
      icon: <MessageSquareText />,
    },
    {
      title: "Dormitory Management/ Hotel Management",
      icon: <Hotel />,
    },
    {
      title: "Canteen Management",
      icon: <Utensils />,
    },
    {
      title: "Payroll Management",
      icon: <Banknote />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      {/* Subtle background decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#d83b32]" />

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
              What We Offer
            </span>

            <span className="h-[2px] w-10 bg-[#d83b32]" />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#24272d] sm:text-5xl lg:text-6xl">
            Scope of <span className="text-[#d83b32]">Services</span>
          </h1>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            We offer a wide spectrum of professional services designed to
            provide comprehensive security, management and operational
            solutions.
          </p>
        </motion.div>

        {/* ================= INTRO CARD ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-5xl rounded-3xl bg-[#192235] px-7 py-8 text-center shadow-xl sm:px-12"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d83b32] text-white">
            <ShieldCheck size={29} />
          </div>

          <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
            Comprehensive Security & Management Solutions
          </h2>

          <p className="mx-auto mt-3 max-w-3xl leading-7 text-gray-300">
            From trained security personnel and technology solutions to facility
            management, manpower and specialised services, our solutions cover
            diverse operational requirements.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                delay: (index % 6) * 0.06,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-xl"
            >
              {/* Number */}
              <span className="absolute -right-2 -top-5 text-[82px] font-black leading-none text-gray-100 transition-colors duration-300 group-hover:text-red-50">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdf0ee] text-[#d83b32] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
                  {React.cloneElement(service.icon, {
                    size: 23,
                  })}
                </div>

                {/* Title */}
                <h3 className="mt-6 min-h-[56px] text-lg font-extrabold leading-7 text-[#24272d]">
                  {service.title}
                </h3>

                {/* Bottom accent */}
                <div className="mt-5 h-1 w-8 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-16" />
              </div>

              {/* Hover border effect */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d83b32] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* ================= SERVICE COUNT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-6 text-center sm:flex-row"
        >
          <span className="text-3xl font-black text-[#d83b32]">
            {services.length}+
          </span>

          <span className="font-semibold text-[#24272d]">
            Professional Services Across Multiple Operational Domains
          </span>
        </motion.div>
      </div>
    </section>
  );
}
