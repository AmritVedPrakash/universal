import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Eye,
  Users,
  Award,
  CheckCircle2,
} from "lucide-react";



// Apne aboutus folder ki actual image ka naam yahan lagao
import aboutImage from "../assets/aboutus/aboutus.jpg";

export default function AboutUs() {
  const services = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Professional Security",
      text: "Highly trained and verified security guards providing dependable protection for businesses, institutions, residential spaces and commercial premises.",
    },
    {
      icon: <Users size={28} />,
      title: "Trained Security Workforce",
      text: "Our security personnel are carefully selected, trained and prepared to handle different security situations with discipline and professionalism.",
    },
    {
      icon: <Award size={28} />,
      title: "19+ Years Experience",
      text: "Since 2005, Red Scorpion Security Solutions has been providing professional security solutions to organizations and individuals.",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#f8f8f8] px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d83b32]">
              About Us
            </p>

            <h1 className="mt-3 max-w-[800px] text-4xl font-bold leading-tight text-[#24272d] sm:text-5xl md:text-6xl">
              An Honest Service.
              <br />
              <span className="text-[#d83b32]">Round the Clock.</span>
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#d83b32]" />
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN INTRO ================= */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1350px] items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.05)] sm:p-10">
              <p className="text-lg leading-9 text-gray-700">
                All round the clock, 365 days of the year, Red Scorpion Security
                Solutions boasts of its commitment to provide dependable and
                honest security services to its customers.
              </p>

              <p className="mt-5 text-lg leading-9 text-gray-700">
                Red Scorpion Security Solutions comprises an extremely dedicated
                team of security professionals and well-trained guards. Our
                workforce is committed to maintaining safety, discipline and
                security across every assignment.
              </p>

              <p className="mt-5 text-lg leading-9 text-gray-700">
                With the changing business environment and increasing security
                requirements, we provide a comprehensive range of solutions
                designed to meet the diverse needs of our clients.
              </p>

              <p className="mt-5 text-lg leading-9 text-gray-700">
                We are a reputed security solutions agency offering highly
                trained security guard services for businesses, educational
                institutions, commercial establishments, residential spaces and
                other organizations.
              </p>
            </div>

            {/* SINCE 2005 CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 grid gap-6 sm:grid-cols-[0.8fr_1.2fr]"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={aboutImage}
                  alt="Red Scorpion Security Solutions"
                  className="h-full min-h-[230px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="rounded-2xl border border-[#d83b32]/20 bg-[#fff7f6] p-7">
                <p className="text-xl font-bold text-[#d83b32]">Since 2005</p>

                <p className="mt-4 text-base leading-8 text-gray-700">
                  Red Scorpion Security Solutions has been offering a diverse
                  range of highly trained security guards to corporates and
                  individual clients across Delhi NCR, Mumbai, Pune and other
                  locations.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-28 w-28 border-l-4 border-t-4 border-[#d83b32]" />

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={aboutImage}
                alt="Red Scorpion Security Team"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[650px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#d83b32] px-7 py-5 text-white shadow-xl">
              <p className="text-3xl font-bold">19+</p>
              <p className="text-sm font-medium">Years of Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="bg-[#f8f8f8] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
              Our Strength
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#24272d] sm:text-5xl">
              Security Built Around
              <span className="text-[#d83b32]"> Trust</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:border-[#d83b32]/40 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d83b32]/10 text-[#d83b32] transition group-hover:bg-[#d83b32] group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#24272d]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION VISION ================= */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1350px] gap-8 md:grid-cols-2">
          {/* Mission */}
          <InfoCard
            icon={<Target size={30} />}
            title="Our Mission"
            text="Our mission is to provide reliable, professional and safety-focused security solutions that protect our clients, their people, assets and premises. We continuously focus on training, discipline and service quality."
          />

          {/* Vision */}
          <InfoCard
            icon={<Eye size={30} />}
            title="Our Vision"
            text="Our vision is to become one of India's most trusted security solutions providers by combining experienced professionals, advanced security practices and a client-first approach."
          />
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="bg-[#192235] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d83b32]">
              <CheckCircle2 size={32} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
              Our Commitment
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Your Safety Is Our Responsibility
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              At Red Scorpion Security Solutions, we believe that security is
              more than simply providing personnel. It is about creating a
              dependable environment where businesses, employees, assets and
              premises can operate with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      
    </>
  );
}

/* ================= INFO CARD ================= */

function InfoCard({ icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-[#d83b32]/30 hover:shadow-xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d83b32]/10 text-[#d83b32]">
        {icon}
      </div>

      <h2 className="mt-6 text-2xl font-bold text-[#24272d]">{title}</h2>

      <p className="mt-4 leading-8 text-gray-600">{text}</p>
    </motion.div>
  );
}
