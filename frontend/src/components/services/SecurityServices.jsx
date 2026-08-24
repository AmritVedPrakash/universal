import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Cpu,
  Users,
  WalletCards,
  RefreshCcw,
} from "lucide-react";

import securityImage1 from "../../assets/services/security-service-1.jpg";
import securityImage2 from "../../assets/services/security-service-2.jpg";

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
      text: "Analysis of security threats and concerns to maintain business continuity.",
    },

    {
      number: "02",
      icon: <ShieldCheck size={25} />,
      title: "Security Architecture",
      text: "Designing complete security architecture including manned guarding, canine squads, communication and physical security solutions.",
    },

    {
      number: "03",
      icon: <Cpu size={25} />,
      title: "Threat Reduction",
      text: "Implementing security processes and passive measures to reduce risks.",
    },

    {
      number: "04",
      icon: <Users size={25} />,
      title: "Client Interaction",
      text: "Working closely with clients to develop a customized security model.",
    },

    {
      number: "05",
      icon: <WalletCards size={25} />,
      title: "Cost Effective Solution",
      text: "Providing highly effective security solutions designed according to requirements.",
    },

    {
      number: "06",
      icon: <RefreshCcw size={25} />,
      title: "Continuous Improvement",
      text: "Constant monitoring, reviewing and improving security operations.",
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
-right-40
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
-left-40
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
max-w-[1350px]
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
flex
items-center
justify-center
gap-4
"
          >
            <span
              className="
h-[2px]
w-12
bg-red-500
"
            />

            <p
              className="
text-sm
font-bold
uppercase
tracking-[0.25em]
text-red-400
"
            >
              What We Do
            </p>

            <span
              className="
h-[2px]
w-12
bg-red-500
"
            />
          </div>

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
            Security
            <span className="text-red-400">Services</span>
          </h1>

          <p
            className="
mx-auto
mt-6
max-w-3xl
text-lg
leading-8
text-gray-300
"
          >
            We provide comprehensive security solutions designed according to
            industry specific risks, challenges and client requirements.
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
          className="
mx-auto
mt-14
max-w-5xl
rounded-3xl
border
border-white/10
bg-[#102238]
p-8
text-center
shadow-2xl
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
rounded-full
bg-red-500
text-white
"
          >
            <ShieldCheck size={28} />
          </div>

          <h2
            className="
mt-5
text-3xl
font-bold
text-white
"
          >
            A Comprehensive Security Solution
          </h2>

          <p
            className="
mx-auto
mt-4
max-w-3xl
leading-7
text-gray-300
"
          >
            Every security assignment requires proper planning, risk assessment
            and continuous improvement to ensure maximum protection.
          </p>
        </motion.div>

        {/* PROCESS CARDS */}

        <div
          className="
mt-14
grid
gap-6
md:grid-cols-2
lg:grid-cols-3
"
        >
          {process.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 40,
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-[#102238]
p-7
shadow-xl
"
            >
              <span
                className="
absolute
right-5
top-3
text-6xl
font-black
text-white/5
"
              >
                {item.number}
              </span>

              <div
                className="
flex
h-14
w-14
items-center
justify-center
rounded-xl
bg-red-500/20
text-red-400
transition
group-hover:bg-red-500
group-hover:text-white
"
              >
                {item.icon}
              </div>

              <h3
                className="
mt-6
text-xl
font-bold
text-white
"
              >
                {item.title}
              </h3>

              <div
                className="
mt-3
h-1
w-10
rounded-full
bg-red-500
transition-all
group-hover:w-20
"
              />

              <p
                className="
mt-5
leading-7
text-gray-300
"
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* IMAGES */}

        <div
          className="
mt-16
grid
gap-8
md:grid-cols-2
"
        >
          {[
            {
              img: securityImage1,
              small: "Professional Security",
              title: "Trained Security Personnel",
            },
            {
              img: securityImage2,
              small: "Risk Assessment",
              title: "Security Inspection Services",
            },
          ].map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index === 0 ? -50 : 50,
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
overflow-hidden
rounded-3xl
shadow-2xl
"
            >
              <img
                src={image.img}
                alt={image.title}
                className="
h-[400px]
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
from-black/80
via-black/20
to-transparent
"
              />

              <div
                className="
absolute
bottom-6
left-6
"
              >
                <p
                  className="
text-xs
uppercase
tracking-[0.2em]
text-red-300
"
                >
                  {image.small}
                </p>

                <h3
                  className="
mt-2
text-2xl
font-bold
text-white
"
                >
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* OTHER COMPONENTS */}

        <div className="mt-20">
          {/* <MannedGuarding />

          <CanneSquads />

          <FacilityManagementServices />

          <ScopeOfService /> */}
        </div>
      </div>
    </section>
  );
}
