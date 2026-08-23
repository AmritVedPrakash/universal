import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  RefreshCw,
  TrendingUp,
  Settings2,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

import trainingImage1 from "../../assets/quality/training-1.jpg";
import trainingImage2 from "../../assets/quality/training-2.jpg";
import trainingImage3 from "../../assets/quality/training-3.jpg";

export default function Trainings() {
  const trainingPrograms = [
    {
      number: "01",
      title: "Basic",
      icon: <ShieldCheck size={25} />,
      shortText: "Foundation Training",
      description:
        "Initial training including Disaster Management, First Aid, Security drill procedures, use of hand held metal detectors, general frisking, fire fighting and general etiquette.",
      image: trainingImage1,
    },

    {
      number: "02",
      title: "Refresher",
      icon: <RefreshCw size={25} />,
      shortText: "Role & Responsibility",
      description:
        "Briefing and refreshing employees about their roles, responsibilities and duties before the beginning of every shift.",
      image: trainingImage2,
    },

    {
      number: "03",
      title: "Continual",
      icon: <TrendingUp size={25} />,
      shortText: "Continuous Development",
      description:
        "Regular training programs to enhance job specific knowledge, improve skills and develop employees for future responsibilities.",
      image: trainingImage3,
    },

    {
      number: "04",
      title: "Customised",
      icon: <Settings2 size={25} />,
      shortText: "Site Specific Training",
      description:
        "Special training according to the nature of job including Industrial, Hospitality, Residential, BPO sectors and specific equipment handling.",
      image: trainingImage1,
    },
  ];

  return (
    <section
      className="
    relative
    overflow-hidden
    bg-white
    px-5
    py-20
    sm:px-8
    lg:px-12
    lg:py-24
    "
    >
      {/* Background */}

      <div
        className="
      absolute
      -left-40
      top-20
      h-96
      w-96
      rounded-full
      bg-[#d83b32]/5
      blur-3xl
      "
      />

      <div
        className="
      absolute
      -right-40
      bottom-20
      h-96
      w-96
      rounded-full
      bg-[#192235]/5
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
          className="text-center"
        >
          <div
            className="
          flex
          justify-center
          items-center
          gap-4
          "
          >
            <span
              className="
            h-[2px]
            w-12
            bg-[#d83b32]
            "
            />

            <p
              className="
            text-sm
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#d83b32]
            "
            >
              Professional Training
            </p>

            <span
              className="
            h-[2px]
            w-12
            bg-[#d83b32]
            "
            />
          </div>

          <h1
            className="
          mt-5
          text-4xl
          font-extrabold
          text-[#24272d]
          sm:text-5xl
          lg:text-6xl
          "
          >
            Security
            <span className="text-[#d83b32]"> Training</span>
          </h1>

          <p
            className="
          mx-auto
          mt-5
          max-w-3xl
          text-gray-600
          leading-8
          sm:text-lg
          "
          >
            Our structured training programs prepare security personnel with
            essential skills, operational knowledge and confidence required for
            professional security services.
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
        mt-14
        rounded-3xl
        bg-[#192235]
        p-8
        text-white
        shadow-xl
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
            items-center
            justify-center
            rounded-2xl
            bg-[#d83b32]
            "
            >
              <GraduationCap size={32} />
            </div>

            <div>
              <h2
                className="
              text-2xl
              font-bold
              "
              >
                Training For Every Stage
              </h2>

              <p
                className="
              mt-2
              leading-7
              text-gray-300
              "
              >
                From basic induction to refresher and customised training, we
                continuously develop security professionals according to
                operational requirements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* TRAINING CARDS */}

        <div
          className="
        mt-16
        space-y-8
        "
        >
          {trainingPrograms.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white
          shadow-sm
          hover:shadow-xl
          transition
          "
            >
              <div
                className="
          grid
          lg:grid-cols-[220px_1fr_320px]
          "
              >
                {/* NUMBER */}

                <div
                  className="
            relative
            flex
            flex-col
            justify-center
            bg-[#192235]
            p-7
            text-white
            "
                >
                  <span
                    className="
              absolute
              right-3
              top-0
              text-8xl
              font-black
              text-white/5
              "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
              relative
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
              bg-[#d83b32]
              "
                    >
                      {item.icon}
                    </div>

                    <p
                      className="
              mt-5
              text-xs
              uppercase
              tracking-widest
              text-[#ef6359]
              "
                    >
                      {item.shortText}
                    </p>

                    <h2
                      className="
              mt-2
              text-2xl
              font-bold
              "
                    >
                      {item.title}
                    </h2>
                  </div>
                </div>

                {/* CONTENT */}

                <div
                  className="
            flex
            flex-col
            justify-center
            p-7
            "
                >
                  <h3
                    className="
              text-2xl
              font-bold
              text-[#24272d]
              "
                  >
                    {item.title} Training
                  </h3>

                  <p
                    className="
              mt-4
              leading-7
              text-gray-600
              "
                  >
                    {item.description}
                  </p>

                  <div
                    className="
              mt-5
              flex
              items-center
              gap-2
              text-sm
              font-bold
              text-[#d83b32]
              "
                  >
                    Professional Training
                    <ArrowRight size={17} />
                  </div>
                </div>

                {/* IMAGE */}

                <div
                  className="
            h-[260px]
            overflow-hidden
            "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              hover:scale-110
              "
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
