import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "KRRISH",
    subtitle: "Luxury Lifestyle",
    text: "Our company has been doing business with Red Scorpion Security for many consecutive years. They are the best service provider in its kind. They are extremely accommodating and excel in performance.",
  },
  {
    name: "Magic Auto",
    subtitle: "Sector 13, Noida",
    text: "Thank you Red Scorpion Security for ensuring safety and security round the clock. Your professionalism exceeded our expectation and we look forward with you.",
  },
  {
    name: "Blackberrys",
    subtitle: "Corporate Client",
    text: "We are glad to have discovered Red Scorpion Security. The kind of services they deliver meet our expectations. They deal with all kind of professional help required by a company for growth.",
  },
  {
    name: "Adepta Software",
    subtitle: "Sector 63, Noida",
    text: "We are pleased by the Security services provided by Red Scorpion Security. The staff is very much professional and well trained.",
  },
  {
    name: "NHDC",
    subtitle: "Govt. Organization",
    text: "We highly recommend Red Scorpion Security for the top notch services. The services are outstanding and security guards are highly trained and are observant.",
  },
  {
    name: "JCB",
    subtitle: "Sector 2, Noida",
    text: "After hiring security personnel from Red Scorpion Security, I must say that they follow professional ethics very much organised and make sure things go smoothly.",
  },
];

export default function OurTestimonials() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-64 w-64 rounded-full bg-red-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-72 w-72 rounded-full bg-red-50 blur-3xl" />

      <div className="relative mx-auto max-w-[1350px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#d83b32]">
            Client Reviews
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#20232a] sm:text-5xl">
            Our <span className="text-[#d83b32]">Testimonials</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#d83b32]" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Trusted by businesses and organizations for professional, reliable
            and highly trained security services.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
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
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(216,59,50,0.15)]"
            >
              {/* Red top line */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-[#d83b32]" />

              {/* Quote */}
              <div className="absolute right-6 top-5 opacity-10 transition-all duration-300 group-hover:scale-110 group-hover:opacity-20">
                <Quote size={65} className="text-[#d83b32]" />
              </div>

              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    className="fill-[#d83b32] text-[#d83b32]"
                  />
                ))}
              </div>

              {/* Client */}
              <div className="relative mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#d83b32] text-lg font-bold text-white shadow-md">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#20232a]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#d83b32]">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <p className="relative text-[15px] leading-7 text-gray-600">
                “{item.text}”
              </p>

              {/* Bottom accent */}
              <div className="mt-7 flex items-center justify-between">
                <span className="h-[2px] w-12 rounded-full bg-[#d83b32] transition-all duration-300 group-hover:w-20" />

                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
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
