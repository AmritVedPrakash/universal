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
    <section className="relative overflow-hidden bg-[#06152e] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      {/* =====================================================
          PREMIUM DARK BLUE BACKGROUND
          NO GRID / NO PATTERN
      ====================================================== */}

      {/* Top Left Glow */}
      <div className="pointer-events-none absolute -left-52 -top-44 h-[600px] w-[600px] rounded-full bg-[#0d5bd7]/15 blur-[140px]" />

      {/* Top Right Glow */}
      <div className="pointer-events-none absolute -right-52 -top-20 h-[600px] w-[600px] rounded-full bg-[#1557a6]/15 blur-[140px]" />

      {/* Bottom Left Glow */}
      <div className="pointer-events-none absolute -bottom-52 -left-44 h-[600px] w-[600px] rounded-full bg-[#0d5bd7]/10 blur-[140px]" />

      {/* Bottom Right Red Glow */}
      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[500px] w-[500px] rounded-full bg-[#d83b32]/5 blur-[140px]" />

      {/* Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#0d5bd7]/7 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}

          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#d83b32]" />

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
              What We Offer
            </span>

            <span className="h-[2px] w-10 bg-[#d83b32]" />
          </div>

          {/* Heading */}

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Scope of <span className="text-[#ef6359]">Services</span>
          </h1>

          {/* Description */}

          <p className="mt-5 text-base leading-8 text-blue-100/65 sm:text-lg">
            We offer a wide spectrum of professional services designed to
            provide comprehensive security, management and operational
            solutions.
          </p>
        </motion.div>

        {/* =====================================================
            INTRO CARD
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
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
          }}
          className="group relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-blue-200/10 bg-gradient-to-br from-[#102f57] via-[#0b2344] to-[#081b35] px-7 py-9 text-center shadow-[0_25px_75px_rgba(0,0,0,0.35)] sm:px-12"
        >
          {/* Blue Glow */}

          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#0d5bd7]/15 blur-[100px]" />

          {/* Red Glow */}

          <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-[#d83b32]/5 blur-[90px]" />

          <div className="relative">
            {/* Icon */}

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d83b32] text-white shadow-[0_10px_35px_rgba(216,59,50,0.25)] transition-transform duration-300 group-hover:scale-105">
              <ShieldCheck size={29} />
            </div>

            {/* Heading */}

            <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
              Comprehensive Security & Management Solutions
            </h2>

            {/* Description */}

            <p className="mx-auto mt-3 max-w-3xl leading-7 text-blue-100/60">
              From trained security personnel and technology solutions to
              facility management, manpower and specialised services, our
              solutions cover diverse operational requirements.
            </p>

            {/* Accent */}

            <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-[#d83b32]" />
          </div>
        </motion.div>

        {/* =====================================================
            SERVICES
        ====================================================== */}

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
              className="group relative overflow-hidden rounded-2xl border border-blue-200/10 bg-[#0b2344]/85 p-6 shadow-[0_15px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#d83b32]/40 hover:bg-[#102b50] hover:shadow-[0_22px_60px_rgba(0,0,0,0.4)]"
            >
              {/* =================================================
                  CARD GLOW
              ================================================== */}

              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#0d5bd7]/0 blur-3xl transition-all duration-500 group-hover:bg-[#0d5bd7]/15" />

              <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[#d83b32]/0 blur-3xl transition-all duration-500 group-hover:bg-[#d83b32]/5" />

              {/* =================================================
                  NUMBER
              ================================================== */}

              <span className="absolute -right-2 -top-5 text-[82px] font-black leading-none text-white/[0.035] transition-all duration-300 group-hover:text-[#d83b32]/10">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                {/* =================================================
                    ICON
                ================================================== */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102f57] text-[#8db8e8] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(216,59,50,0.25)]">
                  {React.cloneElement(service.icon, {
                    size: 23,
                  })}
                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h3 className="mt-6 min-h-[56px] text-lg font-extrabold leading-7 text-white">
                  {service.title}
                </h3>

                {/* =================================================
                    ACCENT
                ================================================== */}

                <div className="mt-5 h-1 w-8 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-16" />
              </div>

              {/* =================================================
                  BOTTOM HOVER LINE
              ================================================== */}

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d83b32] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            SERVICE COUNT
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
            duration: 0.6,
          }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-blue-200/10 bg-gradient-to-r from-[#0b2344] via-[#102f57] to-[#0b2344] px-6 py-7 text-center shadow-[0_18px_55px_rgba(0,0,0,0.3)]"
        >
          {/* Glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-[450px] -translate-x-1/2 rounded-full bg-[#d83b32]/8 blur-[70px]" />

          <div className="relative flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Count */}

            <span className="text-4xl font-black text-[#ef6359]">
              {services.length}+
            </span>

            {/* Text */}

            <span className="font-semibold text-blue-100/75">
              Professional Services Across Multiple Operational Domains
            </span>
          </div>

          {/* Accent */}

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#d83b32]" />
        </motion.div>

        {/* =====================================================
            BOTTOM FEATURE CARD
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
          className="relative mt-8 overflow-hidden rounded-3xl border border-blue-200/10 bg-[#081b35] px-7 py-9 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:px-12"
        >
          {/* Blue Glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[500px] -translate-x-1/2 rounded-full bg-[#0d5bd7]/10 blur-[90px]" />

          <div className="relative">
            {/* Icon */}

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#d83b32] text-white shadow-[0_8px_25px_rgba(216,59,50,0.2)]">
              <Building2 size={23} />
            </div>

            {/* Heading */}

            <h3 className="mt-4 text-xl font-extrabold text-white sm:text-2xl">
              One Partner.{" "}
              <span className="text-[#ef6359]">Multiple Solutions.</span>
            </h3>

            {/* Description */}

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-blue-100/50">
              Comprehensive services designed to support your security,
              operational and management requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
