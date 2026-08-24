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
      text: "Timely payment to staff every month through secure salary systems.",
    },
    {
      icon: <ShieldCheck />,
      title: "Strict Supervision",
      text: "Strict supervision with day & night checks from Senior Management.",
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
      text: "Complete uniform and safety accessories support.",
    },
    {
      icon: <RefreshCw />,
      title: "Quick Reinforcement",
      text: "Sufficient reinforcement within shortest possible time.",
    },
    {
      icon: <BadgeCheck />,
      title: "No Labour Issues",
      text: "No IR issues, labour issues or union problems.",
    },
    {
      icon: <Network />,
      title: "Strong Liaison Network",
      text: "Strong liaison network with Police, Civil Administration and Media.",
    },
    {
      icon: <Building2 />,
      title: "Strong Infrastructure",
      text: "Regional offices, training academies and customized vehicles.",
    },
    {
      icon: <Network />,
      title: "Advanced Communication",
      text: "State of the art communication & IT infrastructure.",
    },
    {
      icon: <WalletCards />,
      title: "Financially Stable",
      text: "Financially stable company with reliable operations.",
    },
    {
      icon: <BadgeCheck />,
      title: "Certified Professionals",
      text: "Trained & certified security professionals.",
    },
  ];

  return (
    <section
      className="
relative
overflow-hidden
bg-[#081426]
px-5
py-20
sm:px-8
lg:px-12
lg:py-24
"
    >
      {/* Background Glow */}

      <div
        className="
absolute
-left-40
top-20
h-96
w-96
rounded-full
bg-blue-500/10
blur-3xl
"
      />

      <div
        className="
absolute
-right-40
bottom-10
h-96
w-96
rounded-full
bg-red-500/10
blur-3xl
"
      />

      <div
        className="
relative
mx-auto
max-w-7xl
"
      >
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p
            className="
text-sm
font-bold
uppercase
tracking-[0.25em]
text-red-400
"
          >
            Why Choose Us
          </p>

          <h1
            className="
mt-5
text-4xl
font-extrabold
text-white
sm:text-5xl
lg:text-6xl
"
          >
            Why
            <span className="text-red-400">Universal?</span>
          </h1>

          <p
            className="
mx-auto
mt-5
max-w-3xl
leading-8
text-gray-300
"
          >
            Our commitment towards professional security, trained manpower and
            operational excellence makes us a trusted security partner.
          </p>
        </motion.div>

        {/* HIGHLIGHTS */}

        <div
          className="
mt-14
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
        >
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
              whileHover={{
                y: -8,
              }}
              className="
rounded-2xl
border
border-white/10
bg-[#102238]
p-6
text-center
shadow-xl
"
            >
              <div
                className="
mx-auto
flex
h-14
w-14
items-center
justify-center
rounded-xl
bg-red-500
text-white
"
              >
                {item.icon}
              </div>

              <div
                className="
mt-5
text-4xl
font-black
text-red-400
"
              >
                {item.value}
              </div>

              <p
                className="
mt-2
font-semibold
text-gray-200
"
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FEATURE */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
mt-16
rounded-3xl
border
border-white/10
bg-[#102238]
p-8
text-white
shadow-2xl
sm:p-10
"
        >
          <div
            className="
grid
gap-8
lg:grid-cols-[1fr_2fr]
"
          >
            <div>
              <div
                className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-red-500
"
              >
                <ShieldCheck size={30} />
              </div>

              <h2
                className="
mt-6
text-3xl
font-extrabold
"
              >
                Built Around
                <span
                  className="
block
text-red-400
"
                >
                  Trust & Reliability
                </span>
              </h2>
            </div>

            <div>
              <p
                className="
leading-8
text-gray-300
"
              >
                Universal maintains professional security operations with strong
                supervision, trained personnel and reliable infrastructure.
              </p>

              <div
                className="
mt-7
grid
gap-3
sm:grid-cols-2
"
              >
                {[
                  "Professional Security Workforce",
                  "Strong Operational Infrastructure",
                  "Continuous Supervision",
                  "Reliable Client Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="
flex
items-center
gap-3
rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
"
                  >
                    <CheckCircle2 size={18} className="text-red-400" />

                    <span
                      className="
text-sm
font-semibold
text-gray-200
"
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARDS */}

        <div
          className="
mt-10
grid
gap-6
sm:grid-cols-2
lg:grid-cols-3
"
        >
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{ y: -8 }}
              className="
group
relative
overflow-hidden
rounded-2xl
border
border-white/10
bg-[#102238]
p-6
shadow-xl
"
            >
              <span
                className="
absolute
-right-2
-top-5
text-[80px]
font-black
text-white/5
"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div
                  className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-red-500/20
text-red-400
group-hover:bg-red-500
group-hover:text-white
transition
"
                >
                  {React.cloneElement(item.icon, {
                    size: 22,
                  })}
                </div>

                <h3
                  className="
mt-5
text-lg
font-extrabold
text-white
"
                >
                  {item.title}
                </h3>

                <p
                  className="
mt-2
text-sm
leading-7
text-gray-300
"
                >
                  {item.text}
                </p>

                <div
                  className="
mt-5
h-1
w-10
rounded-full
bg-red-500
group-hover:w-20
transition-all
"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}

        <div
          className="
mt-16
rounded-3xl
border
border-red-500/20
bg-[#102238]
px-8
py-10
text-center
"
        >
          <p
            className="
text-2xl
font-extrabold
text-white
"
          >
            Professional People. Strong Infrastructure.
            <span className="text-red-400">Reliable Security.</span>
          </p>

          <p
            className="
mt-3
text-gray-300
"
          >
            Delivering dependable security solutions through experience,
            discipline and technology.
          </p>
        </div>
      </div>
    </section>
  );
}
