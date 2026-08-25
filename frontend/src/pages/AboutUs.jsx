import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Users,
  Globe2,
  BadgeCheck,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

import aboutImage from "../assets/aboutus/aboutus.jpg";
import ManagementTeam from "../components/aboutus/ManagementTeam";

export default function AboutUs() {
  const highlights = [
    {
      icon: <Award size={28} />,
      number: "16+",
      title: "Years of Experience",
      text: "Our Founder Chairman, Mr. Sudhir Singh, brings over 25 years of experience in security and allied services.",
    },
    {
      icon: <Users size={28} />,
      number: "2500+",
      title: "Security Personnel",
      text: "A strong workforce of over 2500 Security and FMS personnel.",
    },
    {
      icon: <BadgeCheck size={28} />,
      number: "PSARA",
      title: "Certified",
      text: "PSARA certified organization with a commitment to professional security standards.",
    },
    {
      icon: <Globe2 size={28} />,
      number: "Pan India",
      title: "Service Presence",
      text: "Providing security, facility management and allied services across India.",
    },
  ];

  const managementPoints = [
    "Veterans of Military",
    "Central Police Organisations",
    "Para Military Forces",
    "Seasoned Security Professionals",
    "Facility Management Professionals",
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#06152e] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-12 lg:pb-24">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-40 -top-32 h-[500px] w-[500px] rounded-full bg-[#0d5bd7]/20 blur-[120px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#d83b32]/10 blur-[120px]" />

        <div className="pointer-events-none absolute left-[40%] top-[30%] h-[300px] w-[300px] rounded-full bg-[#1466c8]/10 blur-[100px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="relative mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Label */}
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#d83b32]" />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ef6359]">
                About Us
              </p>
            </div>

            {/* Heading */}
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Security Built on
              <span className="text-[#ef6359]"> Experience</span>
              <br />& Professional Excellence.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100/65">
              UNIVERSAL is committed to providing security, facility management
              and allied services in line with international standards while
              delivering innovative solutions tailored to client requirements.
            </p>

            {/* Tags */}
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#d83b32] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-red-950/20">
                PSARA Certified
              </span>

              <span className="rounded-full border border-blue-200/15 bg-white/[0.05] px-5 py-2 text-sm font-semibold text-blue-100 backdrop-blur-md">
                2500+ Workforce
              </span>

              <span className="rounded-full border border-blue-200/15 bg-white/[0.05] px-5 py-2 text-sm font-semibold text-blue-100 backdrop-blur-md">
                Security & FMS
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAIN ABOUT CONTENT
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#071a35] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        {/* Glow */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-[#0d5bd7]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1350px] items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              A Vision Driven by
              <span className="text-[#ef6359]"> Leadership</span>
            </h2>

            <div className="mt-6 space-y-5 text-[17px] leading-8 text-blue-100/65">
              <p>
                A vision of our Founder Chairman,
                <strong className="text-white"> Mr. Sudhir Singh</strong>, who
                has additional expertise in Manned Guarding, FMS & Allied
                Services.
              </p>

              <p>
                He has demonstrated success in delivering results, optimizing
                business efficiency, business development & marketing. He drives
                operations & organization development at Regional and All India
                level.
              </p>

              <p>
                He has
                <strong className="text-white"> 16 years of experience</strong>
                in top-level Management Positions with leading Security & Allied
                Services Companies, operating in India & Overseas, since 1995.
              </p>
            </div>

            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 rounded-2xl border border-blue-200/10 border-l-4 border-l-[#d83b32] bg-[#0c2548]/80 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d83b32] text-white shadow-lg shadow-red-950/30">
                  <BriefcaseBusiness size={24} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#ef6359]">
                    Founder Chairman
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    Mrs. Saroj Singh
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-blue-100/60">
                    16+ years of management experience across Security, Facility
                    Management and Allied Services.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Corner */}
            <div className="absolute -left-5 -top-5 z-10 h-28 w-28 border-l-4 border-t-4 border-[#d83b32]" />

            <div className="relative overflow-hidden rounded-2xl border border-blue-200/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <img
                src={aboutImage}
                alt="Universal Security Services"
                className="h-[480px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[600px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06152e]/90 via-transparent to-transparent" />

              {/* Image Badge */}
              <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-[#071a35]/90 px-6 py-4 shadow-xl backdrop-blur-xl">
                <p className="text-2xl font-extrabold text-[#ef6359]">16+</p>

                <p className="text-sm font-semibold text-blue-100/80">
                  Years of Leadership Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          KEY HIGHLIGHTS
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#06152e] px-5 py-20 sm:px-8 lg:px-12">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#0d5bd7]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
              Our Strength
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-white">
              Why Choose <span className="text-[#ef6359]">UNIVERSAL?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100/60">
              Our experience, people and professional approach enable us to
              deliver reliable security and allied solutions.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-2xl border border-blue-200/10 bg-[#0b2344]/80 p-7 shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#d83b32]/40 hover:bg-[#102b50]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl transition-all duration-500 group-hover:bg-[#d83b32]/10" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#102f57] text-[#8db8e8] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
                  {item.icon}
                </div>

                <p className="relative mt-6 text-3xl font-extrabold text-[#ef6359]">
                  {item.number}
                </p>

                <h3 className="relative mt-2 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-blue-100/55">
                  {item.text}
                </p>

                <div className="mt-6 h-1 w-8 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-14" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MANAGEMENT CADRE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#071a35] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#d83b32]/5 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1350px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
              Our Management
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Experienced People.
              <br />
              <span className="text-[#ef6359]">Strong Leadership.</span>
            </h2>

            <p className="mt-6 leading-8 text-blue-100/60">
              Our management cadre comprises veterans and seasoned professionals
              from security, military, police, para-military and facility
              management backgrounds.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="grid gap-4 sm:grid-cols-2">
            {managementPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group flex items-center gap-4 rounded-xl border border-blue-200/10 bg-[#0c2548]/70 p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#d83b32]/40 hover:bg-[#102b50]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#102f57] transition-all duration-300 group-hover:bg-[#d83b32]">
                  <CheckCircle2
                    size={22}
                    className="text-[#8db8e8] transition-colors group-hover:text-white"
                  />
                </div>

                <span className="font-semibold text-blue-50/85">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR COMMITMENT
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#06152e] px-5 py-24 text-white sm:px-8 lg:px-12">
        {/* Glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#0d5bd7]/15 blur-[120px]" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-[#d83b32]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1100px] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d83b32] shadow-[0_10px_40px_rgba(216,59,50,0.25)]">
              <ShieldCheck size={32} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
              Our Commitment
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">
              International Standards.
              <br />
              <span className="text-[#ef6359]">Innovative Solutions.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100/60">
              UNIVERSAL is committed to providing Security, Facility Management
              & Allied Services in line with International Standards. We provide
              integrated, innovative solutions crafted to meet our clients'
              specific challenges and facilitate the fulfilment of their
              business requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL STATEMENT
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0b2344] via-[#102f57] to-[#0b2344] px-5 py-14 text-center text-white">
        <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[500px] -translate-x-1/2 rounded-full bg-[#d83b32]/10 blur-[80px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <p className="text-2xl font-extrabold sm:text-3xl">
            We Delever <span className="text-[#ef6359]">YOU DREAM!</span>
          </p>

          <p className="mt-2 text-sm font-medium text-blue-100/60">
            Security • Facility Management • Allied Services
          </p>
        </motion.div>
      </section>

      {/* MANAGEMENT TEAM */}
      {/* <ManagementTeam /> */}
    </>
  );
}
