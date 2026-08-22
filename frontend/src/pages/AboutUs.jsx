import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Users,
  Globe2,
  BadgeCheck,
  Target,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

import aboutImage from "../assets/aboutus/aboutus.jpg";

export default function AboutUs() {
  const highlights = [
    {
      icon: <Award size={28} />,
      number: "25+",
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
      <section className="relative overflow-hidden bg-[#f7f7f5] px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        {/* Decorative background */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#d83b32]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#d83b32]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#d83b32]" />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d83b32]">
                About Us
              </p>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-[#25282d] sm:text-5xl lg:text-6xl">
              Security Built on
              <span className="text-[#d83b32]"> Experience</span>
              <br />& Professional Excellence.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              UNIVERSAL is committed to providing security, facility management
              and allied services in line with international standards while
              delivering innovative solutions tailored to client requirements.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#d83b32] px-5 py-2 text-sm font-semibold text-white">
                PSARA Certified
              </span>

              <span className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700">
                2500+ Workforce
              </span>

              <span className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700">
                Security & FMS
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAIN ABOUT CONTENT
      ====================================================== */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1350px] items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#25282d] sm:text-4xl">
              A Vision Driven by
              <span className="text-[#d83b32]"> Leadership</span>
            </h2>

            <div className="mt-6 space-y-5 text-[17px] leading-8 text-gray-600">
              <p>
                A vision of our Founder Chairman,
                <strong className="text-gray-900"> Mr. Sudhir Singh</strong>,
                who has additional expertise in Manned Guarding, FMS & Allied
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
                <strong className="text-gray-900">
                  {" "}
                  25 years of experience
                </strong>
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
              className="mt-8 rounded-2xl border-l-4 border-[#d83b32] bg-[#fff7f6] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d83b32] text-white">
                  <BriefcaseBusiness size={24} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#d83b32]">
                    Founder Chairman
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-[#25282d]">
                    Mr. Sudhir Singh
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    25+ years of management experience across Security, Facility
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
            <div className="absolute -left-5 -top-5 h-28 w-28 border-l-4 border-t-4 border-[#d83b32]" />

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={aboutImage}
                alt="Universal Security Services"
                className="h-[480px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[600px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-xl bg-white/95 px-6 py-4 shadow-xl backdrop-blur">
                <p className="text-2xl font-extrabold text-[#d83b32]">25+</p>

                <p className="text-sm font-semibold text-gray-700">
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
      <section className="bg-[#f7f7f7] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
              Our Strength
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-[#25282d]">
              Why Choose <span className="text-[#d83b32]">UNIVERSAL?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
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
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:border-[#d83b32]/40 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d83b32]/10 text-[#d83b32] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
                  {item.icon}
                </div>

                <p className="mt-6 text-3xl font-extrabold text-[#d83b32]">
                  {item.number}
                </p>

                <h3 className="mt-2 text-lg font-bold text-[#25282d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MANAGEMENT CADRE
      ====================================================== */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1350px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
              Our Management
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#25282d] sm:text-4xl">
              Experienced People.
              <br />
              <span className="text-[#d83b32]">Strong Leadership.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
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
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-[#fafafa] p-5 transition hover:border-[#d83b32]/40 hover:bg-[#fff7f6]"
              >
                <CheckCircle2 size={23} className="shrink-0 text-[#d83b32]" />

                <span className="font-semibold text-gray-800">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR COMMITMENT
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#192235] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d83b32]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1100px] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d83b32] shadow-lg">
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

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
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
      <section className="bg-[#d83b32] px-5 py-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl font-extrabold sm:text-3xl">
            We deliver what YOU DREAM !!!!!
          </p>

          <p className="mt-2 text-sm font-medium text-red-100">
            Security • Facility Management • Allied Services
          </p>
        </motion.div>
      </section>
    </>
  );
}
