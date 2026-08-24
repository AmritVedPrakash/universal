import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardCheck,
  Users,
  Clock3,
  SearchCheck,
  Siren,
  Flame,
  UserCheck,
  Target,
  FileText,
  Eye,
  BarChart3,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

export default function QualityAssurance() {
  const operations = [
    {
      icon: <Users size={22} />,
      title: "Multi Tier Inspection & Control Team",
    },
    {
      icon: <Clock3 size={22} />,
      title: "24x7 Round the Clock Security Control Rooms",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Highly Responsive Operations & Management Team",
    },
    {
      icon: <SearchCheck size={22} />,
      title: "Mobile Patrolling and Regular/Surprise Checks",
    },
  ];

  const procedures = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Security Processes",
    },
    {
      icon: <Siren size={22} />,
      title: "Emergency Procedures",
    },
    {
      icon: <Flame size={22} />,
      title: "Fire Procedures & Location of Fire Equipment",
    },
    {
      icon: <UserCheck size={22} />,
      title: "Access Control Procedures",
      description: "Staff, managers and visitors",
    },
  ];

  const qualitySteps = [
    {
      number: "01",
      icon: <Target size={25} />,
      title: "Predefined Goals",
      description: "Clearly established performance goals",
    },
    {
      number: "02",
      icon: <FileText size={25} />,
      title: "Creating Job Description & Scheduling",
      description: "Defined responsibilities and work schedules",
    },
    {
      number: "03",
      icon: <Eye size={25} />,
      title: "Monitoring & Inspection",
      description: "Weekly and monthly monitoring",
    },
    {
      number: "04",
      icon: <BarChart3 size={25} />,
      title: "Analysis of Reports by Management",
      description: "Management review of performance reports",
    },
    {
      number: "05",
      icon: <MessageSquare size={25} />,
      title: "Client Feedback",
      description: "Feedback collected from clients",
    },
    {
      number: "06",
      icon: <ClipboardCheck size={25} />,
      title: "Performance Review",
      description: "Reviewing results and overall performance",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#06152e] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      {/* =====================================================
          PREMIUM DARK BLUE BACKGROUND
          NO GRID / NO PATTERN
      ====================================================== */}

      {/* Top-left blue glow */}
      <div className="pointer-events-none absolute -left-52 -top-48 h-[600px] w-[600px] rounded-full bg-[#0d5bd7]/15 blur-[140px]" />

      {/* Top-right blue glow */}
      <div className="pointer-events-none absolute -right-52 -top-32 h-[600px] w-[600px] rounded-full bg-[#1557a6]/15 blur-[140px]" />

      {/* Middle-left glow */}
      <div className="pointer-events-none absolute -left-48 top-[45%] h-[500px] w-[500px] rounded-full bg-[#0d5bd7]/8 blur-[140px]" />

      {/* Middle-right glow */}
      <div className="pointer-events-none absolute -right-48 top-[55%] h-[500px] w-[500px] rounded-full bg-[#123e78]/15 blur-[140px]" />

      {/* Bottom glow */}
      <div className="pointer-events-none absolute -bottom-52 left-1/2 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-[#0d5bd7]/8 blur-[150px]" />

      {/* Subtle red glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#d83b32]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            MAIN HEADER
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

            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#ef6359]">
              Our Standards
            </span>

            <span className="h-[2px] w-10 bg-[#d83b32]" />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Quality in <span className="text-[#ef6359]">Operations</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100/65 sm:text-lg">
            We ensure a highly professional approach on all our assignments;
            this includes continuous monitoring, responsive operations and
            disciplined security procedures.
          </p>
        </motion.div>

        {/* =====================================================
            PROFESSIONAL OPERATIONS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="flex items-center gap-4">
            {/* Icon */}

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102f57] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <ShieldCheck size={25} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white">
                Professional Operations
              </h2>

              <p className="mt-1 text-sm text-blue-100/50">
                Continuous supervision and operational control
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            OPERATIONS CARDS
        ====================================================== */}

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {operations.map((item, index) => (
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -7,
              }}
              className="group relative overflow-hidden rounded-2xl border border-blue-200/10 bg-[#0b2344]/85 p-6 shadow-[0_15px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#d83b32]/40 hover:bg-[#102b50] hover:shadow-[0_22px_55px_rgba(0,0,0,0.35)]"
            >
              {/* Blue hover glow */}

              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#0d5bd7]/0 blur-3xl transition-all duration-500 group-hover:bg-[#0d5bd7]/15" />

              {/* Icon */}

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#102f57] text-[#8db8e8] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(216,59,50,0.25)]">
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="relative mt-5 text-lg font-bold leading-7 text-white">
                {item.title}
              </h3>

              {/* Accent */}

              <div className="relative mt-5 h-1 w-10 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-16" />

              {/* Bottom hover line */}

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d83b32] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            KEY PROCEDURES
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl border border-blue-200/10 bg-gradient-to-br from-[#102f57] via-[#0b2344] to-[#081b35] p-7 text-white shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:p-10">
            {/* Background glows */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#0d5bd7]/12 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#d83b32]/5 blur-[100px]" />

            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                  Security Awareness
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  Are all security personnel aware of key procedures?
                </h2>
              </div>

              <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#d83b32] shadow-[0_10px_30px_rgba(216,59,50,0.2)] lg:flex">
                <ClipboardCheck size={30} />
              </div>
            </div>

            {/* Procedure cards */}

            <div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {procedures.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                  }}
                  className="group rounded-2xl border border-white/10 bg-[#071a33]/70 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#d83b32]/30 hover:bg-[#102b50]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d83b32] text-white shadow-[0_8px_25px_rgba(216,59,50,0.2)]">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-bold leading-6 text-white">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="mt-1 text-sm text-blue-100/45">
                      ({item.description})
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            QUALITY ASSURANCE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#d83b32]" />

              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#ef6359]">
                Continuous Improvement
              </span>

              <span className="h-[2px] w-10 bg-[#d83b32]" />
            </div>

            <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              Quality <span className="text-[#ef6359]">Assurance</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100/60">
              A structured quality assurance process helps us monitor
              performance, gather feedback and continuously improve our security
              operations.
            </p>
          </div>

          {/* =====================================================
              PROCESS CARDS
          ====================================================== */}

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {qualitySteps.map((step, index) => (
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
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-blue-200/10 bg-[#0b2344]/85 p-7 shadow-[0_15px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#d83b32]/45 hover:bg-[#102b50] hover:shadow-[0_22px_60px_rgba(0,0,0,0.4)]"
                >
                  {/* Number */}

                  <div className="absolute right-5 top-5 text-5xl font-black text-white/[0.04] transition-colors duration-300 group-hover:text-[#d83b32]/10">
                    {step.number}
                  </div>

                  {/* Blue glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0d5bd7]/0 blur-3xl transition-all duration-500 group-hover:bg-[#0d5bd7]/15" />

                  <div className="relative">
                    {/* Icon */}

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102f57] text-[#8db8e8] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(216,59,50,0.25)]">
                      {step.icon}
                    </div>

                    {/* Step */}

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#ef6359]">
                      Step {step.number}
                    </p>

                    {/* Title */}

                    <h3 className="mt-2 text-xl font-extrabold text-white">
                      {step.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-3 text-sm leading-6 text-blue-100/55">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom accent */}

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d83b32] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </React.Fragment>
            ))}
          </div>

          {/* =====================================================
              IMPROVEMENT CARD
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
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
            className="mx-auto mt-10 max-w-3xl"
          >
            <div className="relative overflow-hidden rounded-2xl border border-red-300/20 bg-gradient-to-r from-[#b52f28] via-[#d83b32] to-[#b52f28] px-7 py-7 text-center text-white shadow-[0_20px_55px_rgba(216,59,50,0.18)] sm:px-10">
              {/* Decorative circles */}

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />

              <div className="absolute -bottom-14 -left-10 h-32 w-32 rounded-full bg-white/10" />

              <div className="relative">
                <TrendingUp className="mx-auto" size={30} />

                <h3 className="mt-3 text-xl font-extrabold sm:text-2xl">
                  Further Inputs to Improve the Performance
                </h3>

                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/90">
                  Feedback, performance reviews and management analysis help
                  identify further opportunities for continuous improvement.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
