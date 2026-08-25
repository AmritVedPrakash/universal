import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "KRRISH",
    subtitle: "Luxury Lifestyle",
    text: "Our company has been doing business with Red Universal Security for many consecutive years. They are the best service provider in its kind. They are extremely accommodating and excel in performance.",
  },
  {
    name: "Magic Auto",
    subtitle: "Sector 13, Noida",
    text: "Thank you Red Universal Security for ensuring safety and security round the clock. Your professionalism exceeded our expectation and we look forward with you.",
  },
  {
    name: "Blackberrys",
    subtitle: "Corporate Client",
    text: "We are glad to have discovered Red Universal Security. The kind of services they deliver meet our expectations. They deal with all kind of professional help required by a company for growth.",
  },
  {
    name: "Adepta Software",
    subtitle: "Sector 63, Noida",
    text: "We are pleased by the Security services provided by Red Universal Security. The staff is very much professional and well trained.",
  },
  {
    name: "NHDC",
    subtitle: "Govt. Organization",
    text: "We highly recommend Red Universal Security for the top notch services. The services are outstanding and security guards are highly trained and are observant.",
  },
  {
    name: "JCB",
    subtitle: "Sector 2, Noida",
    text: "After hiring security personnel from Red Universal Security, I must say that they follow professional ethics very much organised and make sure things go smoothly.",
  },
];

export default function OurTestimonials() {
  return (
    <section
      className="
    relative
    overflow-hidden
    bg-[#081426]
    px-5
    py-20
    sm:px-8
    sm:py-24
    lg:px-12
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
        {/* Heading */}

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
          className="
        mb-14
        text-center
        "
        >
          <p
            className="
          mb-3
          text-sm
          font-bold
          uppercase
          tracking-[0.3em]
          text-red-400
          "
          >
            Client Reviews
          </p>

          <h2
            className="
          text-4xl
          font-extrabold
          tracking-tight
          text-white
          sm:text-5xl
          "
          >
            Our
            <span className="text-red-400">Testimonials</span>
          </h2>

          <div
            className="
          mx-auto
          mt-5
          h-1
          w-16
          rounded-full
          bg-red-500
          "
          />

          <p
            className="
          mx-auto
          mt-5
          max-w-2xl
          leading-7
          text-gray-300
          "
          >
            Trusted by businesses and organizations for professional, reliable
            and highly trained security services.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
        grid
        gap-7
        md:grid-cols-2
        xl:grid-cols-3
        "
        >
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
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
          shadow-2xl
          transition
          "
            >
              {/* Top Line */}

              <div
                className="
            absolute
            left-0
            right-0
            top-0
            h-1
            bg-red-500
            "
              />

              {/* Quote */}

              <div
                className="
            absolute
            right-6
            top-5
            opacity-10
            transition
            duration-300
            group-hover:scale-110
            group-hover:opacity-20
            "
              >
                <Quote size={65} className="text-red-400" />
              </div>

              {/* Stars */}

              <div
                className="
            mb-6
            flex
            gap-1
            "
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    className="
              fill-red-500
              text-red-500
              "
                  />
                ))}
              </div>

              {/* Client */}

              <div
                className="
            relative
            mb-6
            flex
            items-center
            gap-4
            "
              >
                <div
                  className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-red-500
              text-lg
              font-bold
              text-white
              shadow-lg
              "
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3
                    className="
                text-xl
                font-bold
                text-white
                "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                mt-1
                text-sm
                font-medium
                text-red-400
                "
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Text */}

              <p
                className="
            relative
            text-[15px]
            leading-7
            text-gray-300
            "
              >
                “{item.text}”
              </p>

              {/* Bottom */}

              <div
                className="
            mt-7
            flex
            items-center
            justify-between
            "
              >
                <span
                  className="
              h-[2px]
              w-12
              rounded-full
              bg-red-500
              transition-all
              duration-300
              group-hover:w-20
              "
                />

                <span
                  className="
              text-xs
              font-semibold
              uppercase
              tracking-widest
              text-gray-400
              "
                >
                  Verified Client
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
