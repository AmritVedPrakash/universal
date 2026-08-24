import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BriefcaseBusiness,
  MonitorCog,
  Scale,
  TrendingUp,
  Award,
  Crown,
} from "lucide-react";

// ============================================================
// IMAGES
// Change filenames according to your actual image files
// ============================================================

import saroj from "../../assets/aboutus/saroj.png";
import abhimanyu from "../../assets/aboutus/abhimanyu.png";
import sagar from "../../assets/aboutus/sagar.png";
import raghav from "../../assets/aboutus/raghav.png";
import kashish from "../../assets/aboutus/kashish.png";
import harry from "../../assets/aboutus/harry.png";
import sudhir from "../../assets/aboutus/sudhir.png";

export default function ManagementTeam() {
  const team = [
    // ========================================================
    // 1. SAROJ SINGH
    // ========================================================

    {
      name: "Mrs. Saroj Singh",
      role: "MD & Chairman",
      icon: <ShieldCheck />,
      image: saroj,
      description:
        "Saroj Singh is an accomplished leader in the security domain, recognized for bridging the gap between strategic security policy and ground-level execution. With a strong focus on risk management, protocol enforcement, and operational excellence, she plays a pivotal role in navigating complex security landscapes across industrial and technical sectors.",
    },

    // ========================================================
    // 2. ABHIMANYU CHAUDHARY
    // ========================================================

    {
      name: "Mr. Abhimanyu Chaudhary",
      role: "Executive Leadership",
      icon: <TrendingUp />,
      image: abhimanyu,
      description:
        "Mr. Abhimanyu Chaudhary has built a strong background through higher education in London and executive leadership in the specialized security and logistics domain. He manages complex operations involving strategy, risk assessment, fleet protection and workforce management.",
    },

    // ========================================================
    // 3. SAGAR HARSANA
    // ========================================================

    {
      name: "Mr. Sagar Harsana",
      role: "Head Liaisoning & Legal",
      icon: <Scale />,
      image: sagar,
      description:
        "Mr. Sagar Harsana provides strategic legal guidance and manages complex regulatory landscapes. With strong legal expertise and government liaisoning experience, he ensures statutory compliance, smooth approvals and robust legal protection across corporate and field operations.",
    },

    // ========================================================
    // 4. RAGHAV CHAUDHARY
    // ========================================================

    {
      name: "Mr. Raghav Chaudhary",
      role: "Head Operations",
      icon: <BriefcaseBusiness />,
      image: raghav,
      description:
        "Mr. Raghav Chaudhary combines international strategic training with deep practical expertise in ground monitoring and operational control. Holding an MBA from London, his leadership ensures that core workflows run with maximum efficiency, safety, and accountability from top-level planning to field execution.",
    },

    // ========================================================
    // 5. KASHISH HARSANA
    // ========================================================

    {
      name: "Mrs. Kashish Harsana",
      role: "Head IT & Accounts",
      icon: <MonitorCog />,
      image: kashish,
      description:
        "Mrs. Kashish Harsana brings a versatile dual-domain focus across IT infrastructure and financial management. With expertise in accounting, compliance, technology systems and data protection, she ensures technology and finance work together for organizational stability and efficiency.",
    },

    // ========================================================
    // 6. BRIG HARRY SANDHU
    // ========================================================

    {
      name: "Brig Harry Sandhu",
      role: "Security & Defence Specialist",
      icon: <Award />,
      image: harry,
      description:
        "M Sc, M Phil in Management & Defence Studies. A postgraduate of Defence Services Staff College, Higher Command at Army War College and Command & Staff Course Central Artillery Academy Lengrid, USSR.",
    },

    // ========================================================
    // 7. SUDHIR SINGH LOHIA
    // ========================================================

    {
      name: "Mr. Sudhir Singh Lohia",
      role: "CEO & COO",
      icon: <Crown />,
      image: sudhir,
      description:
        "Results-driven Chief Operating Officer with 30 years of operational excellence across physical security, electronic surveillance, asset management, and integrated facility services (IFM). Proven track record of scaling multi-site operations, optimizing large workforce logistics, driving EBITDA growth, and executing technology-led digital transformations. Adept at navigating complex regulatory frameworks, managing high-stakes client relationships (enterprise, government, and commercial), and leading teams of 10,000+ frontline and corporate employees.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#06152e]
        px-5
        py-20
        text-white
        sm:px-8
        lg:px-12
        lg:py-24
      "
    >
      {/* ========================================================
          BACKGROUND GLOWS
          NO GRID / NO PATTERN / NO GREEN
      ======================================================== */}

      {/* Top Left Blue Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-52
          -top-48
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#0d5bd7]/15
          blur-[140px]
        "
      />

      {/* Top Right Blue Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-52
          -top-32
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#1557a6]/15
          blur-[140px]
        "
      />

      {/* Bottom Left Blue Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          -left-48
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#0d5bd7]/10
          blur-[140px]
        "
      />

      {/* Bottom Right Red Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-52
          -right-44
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#d83b32]/5
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-[1350px]">
        {/* ========================================================
            HEADER
        ======================================================== */}

        <motion.div
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
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Small Label */}

          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#d83b32]" />

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#ef6359]
              "
            >
              Leadership Team
            </p>

            <span className="h-[2px] w-10 bg-[#d83b32]" />
          </div>

          {/* Heading */}

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
            Meet Our <span className="text-[#ef6359]">Management Team</span>
          </h1>

          {/* Accent */}

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#d83b32]" />

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              leading-8
              text-blue-100/60
              sm:text-lg
            "
          >
            Our experienced leadership team combines strategic vision,
            operational excellence and industry expertise to deliver reliable
            security solutions.
          </p>
        </motion.div>

        {/* ========================================================
            TEAM CARDS
        ======================================================== */}

        <div
          className="
            mt-14
            grid
            gap-7
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {team.map((member, index) => (
            <motion.div
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
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
                border-blue-200/10
                bg-[#0b2344]/90
                shadow-[0_20px_55px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#d83b32]/40
                hover:bg-[#102b50]
                hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]
              "
            >
              {/* ==================================================
                  CARD BLUE GLOW
              =================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#0d5bd7]/0
                  blur-[70px]
                  transition-all
                  duration-500
                  group-hover:bg-[#0d5bd7]/15
                "
              />

              {/* ==================================================
                  IMAGE
              =================================================== */}
{/* ==================================================
    IMAGE
=================================================== */}

<div
  className="
    relative
    flex
    h-[430px]
    w-full
    items-end
    justify-center
    overflow-hidden
    bg-gradient-to-b
    from-[#102f57]
    via-[#0b2344]
    to-[#081b35]
  "
>
  <img
    src={member.image}
    alt={member.name}
    className="
      relative
      z-10
      h-full
      w-[115%]
      max-w-none
      object-contain
      object-bottom
      transition-transform
      duration-700
      group-hover:scale-[1.04]
    "
  />

  {/* Bottom Gradient */}

  <div
    className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      z-20
      h-36
      bg-gradient-to-t
      from-[#0b2344]
      via-[#0b2344]/50
      to-transparent
    "
  />

  {/* Top Soft Overlay */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      z-20
      bg-gradient-to-b
      from-[#06152e]/10
      via-transparent
      to-transparent
    "
  />

  {/* Card Number */}

  <div
    className="
      absolute
      right-5
      top-5
      z-30
      text-5xl
      font-black
      text-white/10
    "
  >
    {String(index + 1).padStart(2, "0")}
  </div>
</div>

              {/* ==================================================
                  CONTENT
              =================================================== */}

              <div className="relative p-7">
                {/* Name + Icon */}

                <div className="flex items-start gap-4">
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#d83b32]
                      text-white
                      shadow-[0_8px_25px_rgba(216,59,50,0.22)]
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:shadow-[0_12px_30px_rgba(216,59,50,0.3)]
                    "
                  >
                    {React.cloneElement(member.icon, {
                      size: 23,
                    })}
                  </div>

                  {/* Name */}

                  <div className="min-w-0">
                    <h2
                      className="
                        text-xl
                        font-extrabold
                        leading-7
                        text-white
                      "
                    >
                      {member.name}
                    </h2>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-bold
                        text-[#ef6359]
                      "
                    >
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-blue-100/55
                  "
                >
                  {member.description}
                </p>

                {/* Bottom Accent */}

                <div
                  className="
                    mt-6
                    h-1
                    w-10
                    rounded-full
                    bg-[#d83b32]
                    transition-all
                    duration-500
                    group-hover:w-20
                  "
                />
              </div>

              {/* ==================================================
                  HOVER BOTTOM LINE
              =================================================== */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-[#d83b32]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </div>

        {/* ========================================================
            BOTTOM LEADERSHIP STATEMENT
        ======================================================== */}

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
            duration: 0.7,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-5xl
            overflow-hidden
            rounded-3xl
            border
            border-blue-200/10
            bg-gradient-to-r
            from-[#0b2344]
            via-[#102f57]
            to-[#0b2344]
            px-7
            py-8
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,0.3)]
            sm:px-12
          "
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-32
              w-[500px]
              -translate-x-1/2
              rounded-full
              bg-[#0d5bd7]/10
              blur-[90px]
            "
          />

          <div className="relative">
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#ef6359]
              "
            >
              Strong Leadership
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-extrabold
                text-white
                sm:text-3xl
              "
            >
              Experience. Strategy. Excellence.
            </h3>

            <p
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-sm
                leading-7
                text-blue-100/50
              "
            >
              A leadership team combining decades of operational, security,
              defence, technology, legal and strategic expertise.
            </p>

            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#d83b32]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
