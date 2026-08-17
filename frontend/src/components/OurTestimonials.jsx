import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// import krrish from "../assets/hero/krrish.png";
// import magic from "../assets/hero/magic.png";
// import blackberry from "../assets/hero/blackberry.png";
// import adeptia from "../assets/hero/adeptia.png";
// import nhdc from "../assets/hero/nhdc.png";
// import jcb from "../assets/hero/jcb.png";

const testimonials = [
  {
    // logo: krrish,
    name: "KRRISH",
    location: "Luxury Lifestyle",
    text: "Our company has been doing business with Red Scorpion Security for many consecutive years. They are the best service provider in its kind. They are extremely accommodating and excel in performance.",
  },

  {
    // logo: magic,
    name: "Magic Auto",
    location: "Sector 13, Noida",
    text: "Thank you Red Scorpion Security for ensuring safety and security round the clock. Your professionalism exceeded our expectation and we look forward with you.",
  },

  {
    // logo: blackberry,
    name: "Blackberrys",
    location: "",
    text: "We are glad to have discovered Red Scorpion Security. The kind of services they deliver meet our expectations. They deal with all kind of professional help required by a company.",
  },

  {
    // logo: adeptia,
    name: "Adeptia Software",
    location: "Sector 63, Noida",
    text: "We are pleased by the Security services provided by Red Scorpion Security. The staff is very much professional and well trained.",
  },

  {
    // logo: nhdc,
    name: "NHDC",
    location: "Govt. Organization",
    text: "We highly recommend Red Scorpion Security for the top notch services. The services are outstanding and security guards are highly trained and observant.",
  },

  {
    // logo: jcb,
    name: "JCB",
    location: "Sector 2, Noida",
    text: "After hiring security personnel from Red Scorpion Security, I must say that they follow professional ethics very much organised and make sure things go smoothly.",
  },
];

export default function OurTestimonials() {
  const [start, setStart] = useState(0);

  const next = () => {
    setStart((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  const prev = () => {
    setStart((prev) => (prev - 3 < 0 ? testimonials.length - 3 : prev - 3));
  };

  const visible = testimonials.slice(start, start + 3);

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-center mb-14"
      >
        <h2
          className="
text-4xl
md:text-5xl
font-bold
text-[#22252b]
"
        >
          <span className="text-[#d83b32]">OUR</span> TESTIMONIALS
        </h2>
      </motion.div>

      <div
        className="
max-w-[1350px]
mx-auto
px-6
relative
"
      >
        {/* Left Button */}

        <button
          onClick={prev}
          className="
absolute
left-0
top-1/2
-translate-y-1/2
z-20
bg-white
shadow-xl
w-12
h-12
rounded-full
flex
items-center
justify-center
hover:bg-[#d83b32]
hover:text-white
transition
"
        >
          <ChevronLeft />
        </button>

        {/* Cards */}

        <div
          className="
grid
md:grid-cols-3
gap-8
px-10
"
        >
          <AnimatePresence mode="wait">
            {visible.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
relative
border
border-gray-200
bg-white
p-8
min-h-[420px]
shadow-sm
hover:shadow-2xl
transition
overflow-hidden
"
              >
                {/* Background Shape */}

                <div
                  className="
absolute
top-0
right-0
w-40
h-40
bg-gray-100
rounded-bl-full
opacity-50
"
                ></div>

                <div
                  className="
flex
items-center
gap-6
mb-8
relative
z-10
"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="
w-20
h-20
object-contain
"
                  />

                  <div>
                    <h3
                      className="
text-2xl
font-bold
text-[#22252b]
"
                    >
                      {item.name}
                    </h3>

                    <p
                      className="
text-[#d83b32]
"
                    >
                      {item.location}
                    </p>
                  </div>
                </div>

                <p
                  className="
text-gray-700
text-lg
leading-8
relative
z-10
"
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Button */}

        <button
          onClick={next}
          className="
absolute
right-0
top-1/2
-translate-y-1/2
z-20
bg-white
shadow-xl
w-12
h-12
rounded-full
flex
items-center
justify-center
hover:bg-[#d83b32]
hover:text-white
transition
"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
