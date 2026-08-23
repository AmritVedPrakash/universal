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
  ArrowDown,
  ArrowLeft,
  ArrowRight,
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
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d83b32]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#192235]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            QUALITY IN OPERATIONS
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

            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#d83b32]">
              Our Standards
            </span>

            <span className="h-[2px] w-10 bg-[#d83b32]" />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#24272d] sm:text-5xl lg:text-6xl">
            Quality in <span className="text-[#d83b32]">Operations</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            We ensure a highly professional approach on all our assignments;
            this includes continuous monitoring, responsive operations and
            disciplined security procedures.
          </p>
        </motion.div>

        {/* Operations heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#192235] text-white">
              <ShieldCheck size={25} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#24272d]">
                Professional Operations
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Continuous supervision and operational control
              </p>
            </div>
          </div>
        </motion.div>

        {/* Operations cards */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {operations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -7 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#d83b32]/40 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d83b32]/10 text-[#d83b32] transition-all duration-300 group-hover:bg-[#d83b32] group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold leading-7 text-[#24272d]">
                {item.title}
              </h3>

              <div className="mt-5 h-1 w-10 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-16" />
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
          <div className="rounded-3xl bg-[#192235] p-7 text-white shadow-xl sm:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                  Security Awareness
                </p>

                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                  Are all security personnel aware of key procedures?
                </h2>
              </div>

              <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#d83b32] lg:flex">
                <ClipboardCheck size={30} />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {procedures.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d83b32]">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-bold leading-6">{item.title}</h3>

                  {item.description && (
                    <p className="mt-1 text-sm text-gray-400">
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

              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#d83b32]">
                Continuous Improvement
              </span>

              <span className="h-[2px] w-10 bg-[#d83b32]" />
            </div>

            <h2 className="mt-4 text-4xl font-extrabold text-[#24272d] sm:text-5xl">
              Quality <span className="text-[#d83b32]">Assurance</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              A structured quality assurance process helps us monitor
              performance, gather feedback and continuously improve our security
              operations.
            </p>
          </div>

          {/* Process Cards */}
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
                  className="group relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#d83b32]/50 hover:shadow-xl"
                >
                  {/* Number */}
                  <div className="absolute right-5 top-5 text-5xl font-black text-gray-100 transition-colors group-hover:text-[#d83b32]/10">
                    {step.number}
                  </div>

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#192235] text-white transition-all duration-300 group-hover:bg-[#d83b32]">
                      {step.icon}
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#d83b32]">
                      Step {step.number}
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold text-[#24272d]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>

          {/* Improvement card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#d83b32] px-7 py-7 text-center text-white shadow-xl sm:px-10">
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
