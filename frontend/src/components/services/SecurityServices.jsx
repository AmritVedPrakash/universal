import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Cpu,
  Users,
  WalletCards,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";

// ==========================================
// MANUAL IMAGE IMPORTS
// ==========================================
// Apne actual image filenames yahan use karo
import securityImage1 from "../../assets/services/security-service-1.jpg";
import securityImage2 from "../../assets/services/security-service-2.jpg";
import ServicesSection from "../ServicesSection";
import MannedGuarding from "./MannedGuarding";
import CanneSquads from "./CanneSquads";
import FacilityManagementServices from "./FacilityManagementServices";
import ScopeOfService from "./ScopeOfService";

export default function SecurityServices() {
  const process = [
    {
      number: "01",
      icon: <Search size={25} />,
      title: "Security Threat Analysis",
      text: "Analysis of the security threats and concerns to Business Continuity.",
    },
    {
      number: "02",
      icon: <ShieldCheck size={25} />,
      title: "Security Architecture",
      text: "Designing a security architecture to include Manned Guarding, Canine Squads, Communications, Physical Security means, Electronic Security Hardware / Software and Emergency Response.",
    },
    {
      number: "03",
      icon: <Cpu size={25} />,
      title: "Threat Reduction",
      text: "Recommending security encompassing processes and passive measures to reduce threat.",
    },
    {
      number: "04",
      icon: <Users size={25} />,
      title: "Client Interaction",
      text: "Interact with Client to develop a Specific Model.",
    },
    {
      number: "05",
      icon: <WalletCards size={25} />,
      title: "Cost Effective Solution",
      text: "Provide the most cost effective solution, which is specifically designed.",
    },
    {
      number: "06",
      icon: <RefreshCcw size={25} />,
      title: "Continuous Improvement",
      text: "Implement, review, monitor, share, modify and improve constantly.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      {/* ==========================================
          DECORATIVE BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#d83b32]/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#d83b32]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1350px]">
        {/* ==========================================
            HEADER
        ========================================== */}

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
              What We Do
            </p>

            <span className="h-[2px] w-12 bg-[#d83b32]" />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#24272d] sm:text-5xl lg:text-6xl">
            Security <span className="text-[#d83b32]">Services</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            We aim to provide a comprehensive security solution which is
            site/industry specific. Our process is designed around the unique
            requirements, risks and challenges of every client.
          </p>
        </motion.div>

        {/* ==========================================
            MAIN INTRO
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-14 max-w-5xl rounded-2xl border border-[#d83b32]/10 bg-[#fff8f7] p-7 text-center sm:p-10"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#d83b32] text-white shadow-lg shadow-red-900/10">
            <ShieldCheck size={28} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-[#24272d] sm:text-3xl">
            A Comprehensive Security Solution
          </h2>

          <p className="mx-auto mt-3 max-w-3xl leading-7 text-gray-600">
            Every security assignment requires a carefully planned approach. We
            analyse risks, design the right security architecture and
            continuously improve the solution according to changing
            requirements.
          </p>
        </motion.div>

        {/* ==========================================
            PROCESS CARDS
        ========================================== */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 50,
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-xl"
            >
              {/* Number */}
              <span className="absolute right-5 top-4 text-5xl font-black text-gray-100 transition-colors duration-300 group-hover:text-[#d83b32]/10">
                {item.number}
              </span>

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#d83b32]/10 text-[#d83b32] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="relative mt-6 text-xl font-bold text-[#24272d]">
                {item.title}
              </h3>

              <div className="mt-3 h-1 w-10 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-16" />

              <p className="mt-5 text-[15px] leading-7 text-gray-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ==========================================
            IMAGES
        ========================================== */}

        <div className="mt-16 grid gap-7 md:grid-cols-2">
          {/* IMAGE 1 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={securityImage1}
              alt="Professional Security Service"
              className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[400px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-200">
                Professional Security
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                Trained Security Personnel
              </h3>
            </div>
          </motion.div>

          {/* IMAGE 2 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={securityImage2}
              alt="Security Inspection Service"
              className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[400px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-200">
                Site Specific Solutions
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                Security Assessment
              </h3>
            </div>
          </motion.div>
        </div>

        {/* ==========================================
            FINAL
        ========================================== */}
        {/* <ServicesSection/> */}
        <MannedGuarding/>
        <CanneSquads/>
        <FacilityManagementServices/>
        <ScopeOfService/>
      </div>
    </section>
  );
}
