import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

// ===============================
// MANUAL IMAGE IMPORTS
// ===============================
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";

export default function Team() {
  const teamMembers = [
    {
      image: team1,
      name: "Brig Harry Sandhu",
      designation: "CEO",
      icon: <Award size={22} />,
      shortTitle: "Security & Defence Specialist",
      description:
        "M Sc, M Phil in Management & Defence Studies. A postgraduate of Defence Services Staff College, Higher Command at Army War College and also Command & Staff Course Central Artillery Academy Lengrid, USSR.",
      experience:
        "Over 35 years of experience in Indian Army with expertise in Counter Insurgency, Anti Terrorist and Security Operations in J&K and North East.",
      additional:
        "A veteran of Bangladesh & Kargil Wars. He has held top level Management Positions with leading Security & Allied Services.",
    },

    {
      image: team2,
      name: "Mr Rohit Jha",
      designation: "CFO",
      icon: <BriefcaseBusiness size={22} />,
      shortTitle: "Finance & Cost Management",
      description:
        "Cost Management Accountant, MBA Finance and B. Com (Hons.). He has expertise in cash management, direct & indirect taxation, fund management and implementing accounting SOPs in the organization.",
      experience:
        "15 years of experience in FMS, Security, Education Industry and Construction Industry.",
      additional:
        "His experience in financial management and accounting systems contributes to efficient organizational operations.",
    },

    {
      image: team3,
      name: "Mr Vishal Chandel",
      designation: "Management",
      icon: <ShieldCheck size={22} />,
      shortTitle: "Security & Allied Services",
      description:
        "Chartered Accountant, Company Secretary and Cost Management Accountant with additional expertise in Manned Guarding, FMS & Allied Services.",
      experience:
        "Demonstrated success in delivering results, optimizing business efficiency, business development and marketing.",
      additional:
        "Drives operations and organization development at Regional and All India level.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#d83b32]/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#d83b32]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1350px]">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#d83b32]" />

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d83b32]">
              Our Leadership
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-extrabold text-[#24272d] sm:text-5xl">
                Team <span className="text-[#d83b32]">Universal</span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Meet the experienced professionals behind our security, facility
                management and allied services. Our leadership combines defence,
                security, finance and management expertise.
              </p>
            </div>

            <div className="hidden shrink-0 rounded-xl bg-[#24272d] px-6 py-4 text-white md:block">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Leadership
              </p>

              <p className="mt-1 text-lg font-bold">
                Experience • Discipline • Excellence
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= TEAM GRID ================= */}

        <div className="grid gap-8 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{
                opacity: 0,
                y: 60,
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
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-2xl"
            >
              {/* ================= IMAGE ================= */}

              <div className="relative h-[360px] overflow-hidden bg-[#e9e9e9]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-70" />

                {/* Red corner */}
                <div className="absolute left-0 top-0 h-20 w-20 border-l-4 border-t-4 border-[#d83b32]" />

                {/* Designation */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d83b32]">
                    {member.icon}
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-200">
                      {member.designation}
                    </p>

                    <p className="font-bold">{member.shortTitle}</p>
                  </div>
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold leading-tight text-[#24272d]">
                      {member.name}
                    </h3>

                    <div className="mt-3 h-1 w-12 rounded-full bg-[#d83b32]" />
                  </div>

                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d83b32]/10 text-[#d83b32] sm:flex">
                    <GraduationCap size={20} />
                  </div>
                </div>

                <p className="mt-6 text-sm font-semibold leading-6 text-[#d83b32]">
                  {member.shortTitle}
                </p>

                <p className="mt-4 text-[15px] leading-7 text-gray-600">
                  {member.description}
                </p>

                <div className="my-5 h-px bg-gray-200" />

                {/* Experience */}
                <div className="rounded-xl bg-[#fafafa] p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#d83b32]">
                    Experience
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {member.experience}
                  </p>
                </div>

                {/* Additional */}
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {member.additional}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM HIGHLIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 overflow-hidden rounded-2xl bg-[#192235] p-7 text-white sm:p-9"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#d83b32]">
                <ShieldCheck size={28} />
              </div>

              <div>
                <h3 className="text-xl font-bold sm:text-2xl">
                  Experienced Leadership. Trusted Security.
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-300 sm:text-base">
                  Our experienced leadership team brings together expertise from
                  defence, security, finance, facility management and allied
                  services to deliver professional solutions.
                </p>
              </div>
            </div>

            <div className="shrink-0 rounded-lg border border-white/10 px-5 py-3 text-sm font-bold text-[#ef6359]">
              TEAM UNIVERSAL
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
