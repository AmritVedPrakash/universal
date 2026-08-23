import React from "react";
import { motion } from "framer-motion";
import {
  MapPinned,
  Users,
  ShieldCheck,
  Clock3,
  FileCheck2,
  Headphones,
  Shirt,
  RefreshCw,
  Network,
  Building2,
  BadgeCheck,
  WalletCards,
  CheckCircle2,
} from "lucide-react";

export default function WhyUniversal() {
  const highlights = [
    {
      icon: <MapPinned size={24} />,
      value: "16",
      label: "States / Union Territories",
    },
    {
      icon: <Users size={24} />,
      value: "90%+",
      label: "Client Retention",
    },
    {
      icon: <ShieldCheck size={24} />,
      value: "100%",
      label: "Statutory Compliance",
    },
    {
      icon: <Clock3 size={24} />,
      value: "24 Hrs",
      label: "Operational Control",
    },
  ];

  const reasons = [
    {
      icon: <Users />,
      title: "High Client Retention",
      text: "Client retention rate of over 90%.",
    },
    {
      icon: <Users />,
      title: "Employee Retention",
      text: "Employee retention rate over 85%.",
    },
    {
      icon: <FileCheck2 />,
      title: "Statutory Compliance",
      text: "100% statutory compliances maintained.",
    },
    {
      icon: <WalletCards />,
      title: "Timely Payments",
      text: "Timely payment to staff every month, directly into ATM salary accounts.",
    },
    {
      icon: <ShieldCheck />,
      title: "Strict Supervision",
      text: "Strict supervision in terms of day & night checks from Senior Management.",
    },
    {
      icon: <RefreshCw />,
      title: "Monthly MIS",
      text: "Monthly MIS reports and feedback system.",
    },
    {
      icon: <Headphones />,
      title: "24 Hours Support",
      text: "24 Hrs Operational Control Room & QTR Support.",
    },
    {
      icon: <Shirt />,
      title: "Uniform & Accessories",
      text: "Uniform & accessories including shirts, pants, rain coats, torches, batons, jackets, whistle and safety vests.",
    },
    {
      icon: <RefreshCw />,
      title: "Quick Reinforcement",
      text: "Sufficient reinforcement within the shortest possible time.",
    },
    {
      icon: <BadgeCheck />,
      title: "No Labour Issues",
      text: "No IR issues, labour issues or union problems.",
    },
    {
      icon: <Network />,
      title: "Strong Liaison Network",
      text: "Strong liaison network with Police, Civil Administration, Media etc.",
    },
    {
      icon: <Building2 />,
      title: "Strong Infrastructure",
      text: "Strong infrastructure including regional/branch offices, training academies and a fleet of customized vehicles.",
    },
    {
      icon: <Network />,
      title: "Advanced Communication",
      text: "State of the art communication & IT infrastructure.",
    },
    {
      icon: <WalletCards />,
      title: "Financially Stable",
      text: "Financially stable company with a reliable operational structure.",
    },
    {
      icon: <BadgeCheck />,
      title: "Certified Professionals",
      text: "Trained & certified security professionals.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d83b32]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#192235]/10 blur-3xl" />

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
              Why Choose Us
            </span>

            <span className="h-[2px] w-10 bg-[#d83b32]" />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#24272d] sm:text-5xl lg:text-6xl">
            Why <span className="text-[#d83b32]">Universal?</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Our commitment to professional security, reliable operations,
            trained personnel and consistent service standards makes us a
            trusted security partner.
          </p>
        </motion.div>

        {/* ================= HIGHLIGHTS ================= */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -7 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-xl"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#192235] text-white transition-all duration-300 group-hover:bg-[#d83b32]">
                {item.icon}
              </div>

              <div className="mt-4 text-3xl font-black text-[#d83b32]">
                {item.value}
              </div>

              <p className="mt-1 text-sm font-semibold text-[#24272d]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= MAIN CONTENT ================= */}

       {/* ================= MAIN CONTENT ================= */}

<div className="mt-16">

  {/* Featured dark card */}
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="overflow-hidden rounded-3xl bg-[#192235] p-8 text-white shadow-2xl sm:p-10"
  >
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_2fr]">

      <div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d83b32]">
          <ShieldCheck size={30} />
        </div>

        <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
          Built Around
          <span className="block text-[#ef6359]">
            Trust & Reliability
          </span>
        </h2>
      </div>

      <div>
        <p className="leading-8 text-gray-300">
          Universal maintains a professional approach towards security
          operations with strong supervision, trained personnel,
          operational support and infrastructure designed to meet
          demanding client requirements.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {[
            "Professional Security Workforce",
            "Strong Operational Infrastructure",
            "Continuous Supervision",
            "Reliable Client Support",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <CheckCircle2
                size={19}
                className="shrink-0 text-[#ef6359]"
              />

              <span className="text-sm font-semibold text-gray-200">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </motion.div>


  {/* ================= REASONS GRID ================= */}

  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

    {reasons.map((item, index) => (
      <motion.div
        key={item.title}
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
        }}
        whileHover={{
          y: -7,
        }}
        className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-xl"
      >

        {/* Number */}
        <span className="absolute -right-2 -top-5 text-[80px] font-black leading-none text-gray-100 transition-colors duration-300 group-hover:text-[#d83b32]/10">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative">

          {/* Icon */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fdf0ee] text-[#d83b32] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
            {React.cloneElement(item.icon, {
              size: 22,
            })}
          </div>

          {/* Title */}
          <h3 className="mt-5 text-lg font-extrabold text-[#24272d]">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm leading-7 text-gray-600">
            {item.text}
          </p>

          {/* Bottom line */}
          <div className="mt-5 h-1 w-8 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-16" />

        </div>
      </motion.div>
    ))}

  </div>

</div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-[#d83b32]/20 bg-[#fdf0ee] px-7 py-8 text-center sm:px-12"
        >
          <p className="text-xl font-extrabold text-[#24272d] sm:text-2xl">
            Professional People. Strong Infrastructure.
            <span className="text-[#d83b32]"> Reliable Security.</span>
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-gray-600">
            Our focus remains on delivering dependable security solutions backed
            by trained professionals, operational discipline and continuous
            support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
