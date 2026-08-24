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
  ShieldCheck,
  Clock3,
} from "lucide-react";

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
pointer-events-none
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
pointer-events-none
absolute
-right-40
bottom-20
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <div
            className="
inline-flex
items-center
gap-3
"
          >
            <span
              className="
h-[2px]
w-10
bg-red-500
"
            />

            <span
              className="
text-sm
font-bold
uppercase
tracking-[0.22em]
text-red-400
"
            >
              Seamless Operations
            </span>

            <span
              className="
h-[2px]
w-10
bg-red-500
"
            />
          </div>

          <h1
            className="
mt-5
text-4xl
font-extrabold
tracking-tight
text-white
sm:text-5xl
lg:text-6xl
"
          >
            Transition
            <span className="text-red-400"> Process</span>
          </h1>

          <p
            className="
mx-auto
mt-5
max-w-3xl
text-base
leading-8
text-gray-300
sm:text-lg
"
          >
            A structured transition process designed to ensure smooth
            mobilisation, proper handover, operational readiness and
            uninterrupted security services.
          </p>
        </motion.div>

        {/* INTRO CARD */}

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
            duration: 0.6,
          }}
          className="
mx-auto
mt-12
max-w-4xl
rounded-3xl
border
border-white/10
bg-[#102238]
p-7
text-white
shadow-2xl
sm:p-9
"
        >
          <div
            className="
flex
flex-col
items-center
gap-5
text-center
sm:flex-row
sm:text-left
"
          >
            <div
              className="
flex
h-16
w-16
shrink-0
items-center
justify-center
rounded-2xl
bg-red-500
"
            >
              <ShieldCheck size={32} />
            </div>

            <div>
              <h2
                className="
text-xl
font-extrabold
sm:text-2xl
"
              >
                Structured Transition. Reliable Operations.
              </h2>

              <p
                className="
mt-2
leading-7
text-gray-300
"
              >
                Every transition stage is carefully planned and monitored to
                ensure complete operational readiness before final handover.
              </p>
            </div>
          </div>
        </motion.div>

        {/* PROCESS CARDS */}

        <div className="mt-16">
          <div className="mb-9 text-center">
            <p
              className="
text-sm
font-bold
uppercase
tracking-[0.2em]
text-red-400
"
            >
              Step By Step
            </p>

            <h2
              className="
mt-2
text-3xl
font-extrabold
text-white
sm:text-4xl
"
            >
              Our Transition Journey
            </h2>
          </div>

          <div
            className="
grid
gap-5
md:grid-cols-2
lg:grid-cols-4
"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
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
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -8,
                }}
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
transition
"
              >
                <span
                  className="
absolute
-right-2
-top-5
text-[90px]
font-black
text-white/5
"
                >
                  {step.number}
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
bg-white/10
text-white
transition
group-hover:bg-red-500
"
                  >
                    {step.icon}
                  </div>

                  <p
                    className="
mt-5
text-xs
font-bold
uppercase
tracking-[0.18em]
text-red-400
"
                  >
                    Step {step.number}
                  </p>

                  <h3
                    className="
mt-2
min-h-[58px]
text-lg
font-extrabold
leading-6
text-white
"
                  >
                    {step.title}
                  </h3>

                  <div
                    className="
mt-5
h-1
w-10
rounded-full
bg-red-500
transition-all
group-hover:w-20
"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TIMELINE + IMAGE */}

        <div
          className="
mt-16
grid
items-stretch
gap-8
lg:grid-cols-[0.9fr_1.1fr]
"
        >
          {/* Timeline */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
rounded-3xl
border
border-white/10
bg-[#102238]
p-7
text-white
shadow-2xl
sm:p-9
"
          >
            <div
              className="
flex
items-center
gap-4
"
            >
              <div
                className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-red-500
"
              >
                <Clock3 size={25} />
              </div>

              <div>
                <p
                  className="
text-xs
font-bold
uppercase
tracking-[0.2em]
text-red-400
"
                >
                  Mobilisation Timeline
                </p>

                <h2
                  className="
mt-1
text-2xl
font-extrabold
"
                >
                  Transition Schedule
                </h2>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {timeline.map((item, index) => (
                <div
                  key={item}
                  className="
flex
gap-4
"
                >
                  <div
                    className="
flex
h-9
w-9
shrink-0
items-center
justify-center
rounded-full
bg-red-500
text-sm
font-bold
"
                  >
                    {index + 1}
                  </div>

                  <p
                    className="
pt-1
font-semibold
leading-6
text-gray-200
"
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
group
relative
min-h-[360px]
overflow-hidden
rounded-3xl
shadow-2xl
"
          >
            <img
              src={transitionImage}
              alt="Transition Process"
              className="
absolute
inset-0
h-full
w-full
object-cover
transition
duration-700
group-hover:scale-110
"
            />

            <div
              className="
absolute
inset-0
bg-gradient-to-t
from-[#081426]/95
via-[#081426]/30
to-transparent
"
            />

            <div
              className="
absolute
bottom-0
left-0
right-0
p-7
text-white
sm:p-9
"
            >
              <div
                className="
flex
items-center
gap-2
text-red-400
"
              >
                <CheckCircle2 size={20} />

                <span
                  className="
text-sm
font-bold
uppercase
tracking-[0.15em]
"
                >
                  Operational Readiness
                </span>
              </div>

              <h2
                className="
mt-3
text-2xl
font-extrabold
sm:text-3xl
"
              >
                Ready for a Smooth Handover
              </h2>

              <p
                className="
mt-3
leading-7
text-gray-300
"
              >
                The transition concludes with structured review, expert training
                and successful handover.
              </p>
            </div>
          </motion.div>
        </div>

        {/* FLOW */}

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
          className="
mt-12
flex
flex-wrap
items-center
justify-center
gap-3
"
        >
          {["Mobilise", "Audit", "Customise", "Train", "Review", "Operate"].map(
            (item, index, array) => (
              <React.Fragment key={item}>
                <div
                  className="
rounded-full
border
border-white/10
bg-[#102238]
px-5
py-2.5
text-sm
font-bold
text-white
"
                >
                  {item}
                </div>

                {index !== array.length - 1 && (
                  <ArrowRight size={17} className="text-red-400" />
                )}
              </React.Fragment>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
