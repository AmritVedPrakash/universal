import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

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
        "M Sc, M Phil in Management & Defence Studies. A postgraduate of Defence Services Staff College, Higher Command at Army War College and Command & Staff Course Central Artillery Academy Lengrid, USSR.",
      experience:
        "Over 35 years of experience in Indian Army with expertise in Counter Insurgency, Anti Terrorist and Security Operations.",
      additional:
        "A veteran of Bangladesh & Kargil Wars. He has held top level management positions with leading Security & Allied Services.",
    },

    {
      image: team2,
      name: "Mr Rohit Jha",
      designation: "CFO",
      icon: <BriefcaseBusiness size={22} />,
      shortTitle: "Finance & Cost Management",
      description:
        "Cost Management Accountant, MBA Finance and B.Com (Hons.). Expertise in cash management, taxation, fund management and accounting SOP implementation.",
      experience:
        "15 years of experience in FMS, Security, Education and Construction Industry.",
      additional:
        "His financial expertise contributes towards efficient organizational operations.",
    },

    {
      image: team3,
      name: "Mr Vishal Chandel",
      designation: "Management",
      icon: <ShieldCheck size={22} />,
      shortTitle: "Security & Allied Services",
      description:
        "Chartered Accountant, Company Secretary and Cost Management Accountant with expertise in Manned Guarding, FMS and Allied Services.",
      experience:
        "Experienced in business development, marketing and improving operational efficiency.",
      additional:
        "Drives operations and organization development at Regional and All India level.",
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
      <div
        className="
absolute
-left-40
top-0
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
right-0
bottom-0
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4">
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
              Our Leadership
            </p>
          </div>

          <h2
            className="
mt-5
text-4xl
font-extrabold
text-white
sm:text-5xl
"
          >
            Team
            <span className="text-red-400">Universal</span>
          </h2>

          <p
            className="
mt-4
max-w-3xl
text-gray-300
leading-8
sm:text-lg
"
          >
            Meet our experienced professionals who combine defence, security,
            finance and management expertise to deliver trusted security
            solutions.
          </p>
        </motion.div>

        {/* CARDS */}

        <div
          className="
grid
gap-8
lg:grid-cols-3
"
        >
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
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
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
overflow-hidden
rounded-3xl
border
border-white/10
bg-[#102238]
shadow-2xl
"
            >
              {/* IMAGE */}

              <div
                className="
relative
h-[360px]
overflow-hidden
"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="
h-full
w-full
object-cover
object-top
transition
duration-700
hover:scale-110
"
                />

                <div
                  className="
absolute
inset-0
bg-gradient-to-t
from-[#081426]
via-transparent
to-transparent
"
                />

                <div
                  className="
absolute
bottom-5
left-5
flex
items-center
gap-3
text-white
"
                >
                  <div
                    className="
flex
h-11
w-11
items-center
justify-center
rounded-xl
bg-red-500
"
                  >
                    {member.icon}
                  </div>

                  <div>
                    <p
                      className="
text-xs
uppercase
tracking-widest
text-red-300
"
                    >
                      {member.designation}
                    </p>

                    <p className="font-bold">{member.shortTitle}</p>
                  </div>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-7">
                <h3
                  className="
text-2xl
font-bold
text-white
"
                >
                  {member.name}
                </h3>

                <div
                  className="
mt-3
h-1
w-12
rounded-full
bg-red-500
"
                />

                <p
                  className="
mt-5
text-sm
leading-7
text-gray-300
"
                >
                  {member.description}
                </p>

                <div
                  className="
my-5
h-px
bg-white/10
"
                />

                <div
                  className="
rounded-xl
bg-white/5
p-4
"
                >
                  <p
                    className="
text-xs
font-bold
uppercase
tracking-wider
text-red-400
"
                  >
                    Experience
                  </p>

                  <p
                    className="
mt-2
text-sm
leading-6
text-gray-300
"
                  >
                    {member.experience}
                  </p>
                </div>

                <p
                  className="
mt-5
text-sm
leading-6
text-gray-400
"
                >
                  {member.additional}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
mt-12
rounded-3xl
bg-[#102238]
border
border-white/10
p-8
text-white
"
        >
          <div
            className="
flex
items-center
gap-5
"
          >
            <div
              className="
flex
h-14
w-14
items-center
justify-center
rounded-xl
bg-red-500
"
            >
              <ShieldCheck size={28} />
            </div>

            <div>
              <h3
                className="
text-2xl
font-bold
"
              >
                Experienced Leadership. Trusted Security.
              </h3>

              <p
                className="
mt-2
text-gray-300
"
              >
                Our leadership combines defence experience, professional
                management and operational excellence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
