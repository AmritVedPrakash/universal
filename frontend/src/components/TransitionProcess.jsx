import React from "react";
import { motion } from "framer-motion";
import {
  FileCheck,
  Users,
  ClipboardCheck,
  Settings2,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  Clock3,
} from "lucide-react";

// Apne actual image filename ke according change karo
import transitionImage from "../assets/hero/transition-process.jpg";

export default function TransitionProcess() {
  const processSteps = [
    {
      number: "01",
      title: "LOI / RECD",
      icon: <FileCheck size={22} />,
    },
    {
      number: "02",
      title: "Transition Team Moves In",
      icon: <Users size={22} />,
    },
    {
      number: "03",
      title: "Facility Audit & Transaction Lists",
      icon: <ClipboardCheck size={22} />,
    },
    {
      number: "04",
      title: "Customization of SOPs / Assets Register",
      icon: <Settings2 size={22} />,
    },
    {
      number: "05",
      title: "Setting up of All Client Processes & Standards",
      icon: <ShieldCheck size={22} />,
    },
    {
      number: "06",
      title: "Training by OEM / Experts",
      icon: <Users size={22} />,
    },
    {
      number: "07",
      title: "Review & Handover to Operations Team",
      icon: <ClipboardCheck size={22} />,
    },
    {
      number: "08",
      title: "Operations Commence",
      icon: <PlayCircle size={22} />,
    },
  ];

  const timeline = [
    "Service Setup & Mobilisation – 15 Days",
    "Transition Phase 21 to 30 Days",
    "Go Live / Independent Operations – End of 30 Days",
    "Review Phase ; 3 months from Go Live",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d83b32]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#192235]/10 blur-3xl" />

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

            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#d83b32]">
              Seamless Operations
            </span>

            <span className="h-[2px] w-10 bg-[#d83b32]" />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#24272d] sm:text-5xl lg:text-6xl">
            Transition <span className="text-[#d83b32]">Process</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            A structured transition process designed to ensure smooth
            mobilisation, proper handover, operational readiness and
            uninterrupted security services.
          </p>
        </motion.div>

        {/* ================= PROCESS INTRO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-4xl rounded-3xl bg-[#192235] p-7 text-white shadow-xl sm:p-9"
        >
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#d83b32]">
              <ShieldCheck size={32} />
            </div>

            <div>
              <h2 className="text-xl font-extrabold sm:text-2xl">
                Structured Transition. Reliable Operations.
              </h2>

              <p className="mt-2 leading-7 text-gray-300">
                Every transition stage is carefully planned and monitored to
                make sure that the operational team is fully prepared before the
                final handover.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= PROCESS CARDS ================= */}

        <div className="mt-16">
          <div className="mb-9 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
              Step By Step
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#24272d] sm:text-4xl">
              Our Transition Journey
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <motion.div
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-xl"
                >
                  {/* Number */}
                  <span className="absolute -right-2 -top-5 text-[90px] font-black leading-none text-gray-100 transition-colors duration-300 group-hover:text-[#d83b32]/10">
                    {step.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#192235] text-white transition-all duration-300 group-hover:bg-[#d83b32]">
                      {step.icon}
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#d83b32]">
                      Step {step.number}
                    </p>

                    <h3 className="mt-2 min-h-[58px] text-lg font-extrabold leading-6 text-[#24272d]">
                      {step.title}
                    </h3>

                    <div className="mt-5 h-1 w-10 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-20" />
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ================= TIMELINE + IMAGE ================= */}

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-[#192235] p-7 text-white shadow-xl sm:p-9"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d83b32]">
                <Clock3 size={25} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                  Mobilisation Timeline
                </p>

                <h2 className="mt-1 text-2xl font-extrabold">
                  Transition Schedule
                </h2>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {timeline.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  className="flex gap-4"
                >
                  <div className="relative flex shrink-0 flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d83b32] text-sm font-bold">
                      {index + 1}
                    </div>

                    {index !== timeline.length - 1 && (
                      <div className="absolute top-9 h-10 w-px bg-white/20" />
                    )}
                  </div>

                  <div className="pt-1">
                    <p className="font-semibold leading-6 text-gray-200">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[360px] overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={transitionImage}
              alt="Security team transition process"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#192235]/90 via-[#192235]/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
              <div className="flex items-center gap-2 text-[#ef6359]">
                <CheckCircle2 size={20} />
                <span className="text-sm font-bold uppercase tracking-[0.15em]">
                  Operational Readiness
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Ready for a Smooth Handover
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-gray-200">
                The transition concludes with a structured review, expert
                training and handover to the operations team.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= FINAL FLOW ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {["Mobilise", "Audit", "Customise", "Train", "Review", "Operate"].map(
            (item, index, array) => (
              <React.Fragment key={item}>
                <div className="rounded-full border border-[#d83b32]/30 bg-white px-5 py-2.5 text-sm font-bold text-[#24272d] shadow-sm">
                  {item}
                </div>

                {index !== array.length - 1 && (
                  <ArrowRight size={17} className="text-[#d83b32]" />
                )}
              </React.Fragment>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
