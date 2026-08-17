import React from "react";
import { motion } from "framer-motion";

import securityImg from "../assets/hero/security-service.jpg";
import controlImg from "../assets/hero/control-room.jpg";

export default function AnHonestService() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div
        className="
      max-w-[1400px]
      mx-auto
      px-6
      grid
      lg:grid-cols-2
      gap-16
      items-center
      "
      >
        {/* LEFT IMAGE AREA */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
        relative
        h-[650px]
        "
        >
          {/* Main Image */}

          <motion.img
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            src={securityImg}
            alt="Security Service"
            className="
          absolute
          top-0
          left-0
          w-[80%]
          h-[85%]
          object-cover
          shadow-xl
          "
          />

          {/* Small Image */}

          <motion.img
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            src={controlImg}
            alt="Control Room"
            className="
          absolute
          bottom-0
          right-0
          w-[45%]
          h-[45%]
          object-cover
          border-[10px]
          border-white
          shadow-2xl
          "
          />
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <h2
            className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#22252b]
          leading-tight
          mb-8
          "
          >
            An Honest Service Round the
            <br />
            Clock.
          </h2>

          <p
            className="
          text-gray-600
          text-lg
          leading-9
          mb-6
          "
          >
            All round the clock, 365 days of the year - Red Scorpion Security
            boasts of commitment to grant our customer's an honest service. Red
            Scorpion Security Solutions comprises of extreme dedication driven
            team of security professionals and well trained guards.
          </p>

          <p
            className="
          text-gray-600
          text-lg
          leading-9
          mb-8
          "
          >
            With the worldwide attention being drawn to the current business
            scenario, Red Scorpion Security has enclosed an awfully
            comprehensive package that covers all clients' desires within the
            field security.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
          bg-[#ef6337]
          text-white
          px-12
          py-5
          text-lg
          font-semibold
          hover:bg-[#d94f27]
          transition
          "
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
