import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactUs() {
  const form = useRef();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);

    const formData = new FormData(form.current);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      organization: formData.get("organization"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    console.log("Sending data:", templateParams);

    emailjs
      .send(
        "service_ncvrtta",
        "template_qdthfb9",
        templateParams,
        "EJQhlVM7Y27CVKgHC",
      )
      .then(
        () => {
          console.log("Email sent successfully");

          setSubmitted(true);
          setLoading(false);

          form.current.reset();
        },
        (error) => {
          console.error("Email Error:", error);

          setLoading(false);
        },
      );
  };

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#06152e] px-5 pb-16 pt-32 text-white sm:px-8 lg:px-12">
        {/* ================= BACKGROUND GLOWS ================= */}

        {/* Top Left Blue Glow */}
        <div className="pointer-events-none absolute -left-48 -top-48 h-[550px] w-[550px] rounded-full bg-[#0d5bd7]/15 blur-[130px]" />

        {/* Top Right Blue Glow */}
        <div className="pointer-events-none absolute -right-48 -top-32 h-[550px] w-[550px] rounded-full bg-[#1557a6]/15 blur-[130px]" />

        {/* Bottom Blue Glow */}
        <div className="pointer-events-none absolute -bottom-52 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-[#0d5bd7]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-[1350px]">
          {/* ================= HERO CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Small Label */}

            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#d83b32]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6359]">
                Get In Touch
              </span>
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
                md:text-6xl
              "
            >
              Contact
              <span className="text-[#ef6359]"> Us</span>
            </h1>

            {/* Accent */}

            <div className="mt-5 h-1 w-20 rounded-full bg-[#d83b32]" />
          </motion.div>

          {/* ================= FIRST PARAGRAPH ================= */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              mt-8
              max-w-[1250px]
              text-base
              leading-8
              text-blue-100/65
              sm:text-lg
            "
          >
            Are you looking for a reliable security partner to protect your
            business, assets, buildings and investments?{" "}
            <strong className="text-white">Universal Security Solutions</strong>{" "}
            is a trusted security and facility management company providing
            professional protection solutions with over{" "}
            <strong className="text-white">16+ years of experience</strong> in
            the security industry.
          </motion.p>

          {/* ================= SECOND PARAGRAPH ================= */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              mt-4
              max-w-[1250px]
              text-base
              leading-8
              text-blue-100/65
              sm:text-lg
            "
          >
            Our highly trained security professionals, experienced management
            team and customer-focused approach provide complete security,
            facility management and allied services for corporate offices,
            industries, residential societies, commercial establishments and
            institutions.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          CONTACT AREA
      ========================================================== */}

      <main
        className="
          relative
          overflow-hidden
          bg-[#06152e]
          px-5
          py-16
          text-white
          sm:px-8
          lg:px-12
          lg:py-20
        "
      >
        {/* =====================================================
            BACKGROUND GLOWS
        ====================================================== */}

        {/* Left Glow */}

        <div className="pointer-events-none absolute -left-52 top-32 h-[600px] w-[600px] rounded-full bg-[#0d5bd7]/10 blur-[150px]" />

        {/* Right Glow */}

        <div className="pointer-events-none absolute -right-52 top-20 h-[600px] w-[600px] rounded-full bg-[#123e78]/15 blur-[150px]" />

        {/* Bottom Red Glow */}

        <div className="pointer-events-none absolute -bottom-52 right-20 h-[500px] w-[500px] rounded-full bg-[#d83b32]/5 blur-[140px]" />

        <div
          className="
            relative
            mx-auto
            grid
            max-w-[1350px]
            gap-14
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Small Label */}

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#ef6359]
              "
            >
              Get In Touch
            </p>

            {/* Heading */}

            <h2
              className="
                mt-3
                max-w-[650px]
                text-4xl
                font-extrabold
                leading-tight
                text-white
                sm:text-5xl
              "
            >
              Connect With Universal
              <br />
              <span className="text-[#ef6359]">Security Solutions</span>
            </h2>

            {/* Intro */}

            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/50">
              Have a security requirement or need professional protection
              solutions? Our team is ready to understand your requirements and
              provide the right solution.
            </p>

            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}

            <div className="mt-6">
              <ContactInfo
                icon={<Mail size={27} />}
                title="E Mail"
                value="Hr@universalprotection.in"
                href="mailto:Hr@universalprotection.in"
              />

              <ContactInfo
                icon={<Phone size={27} />}
                title="Phone"
                value={<>+91 7042849777</>}
                href="tel:+917042849777"
              />

              <ContactInfo
                icon={<MessageCircle size={27} />}
                title="WhatsApp"
                value="+91 7042849777"
                href="https://wa.me/7042849777"
              />

              <ContactInfo
                icon={<MapPin size={27} />}
                title="Corporate Office"
                value={
                  <>
                    Subedar Bhawan, H. No. 102
                    <br />
                    Ghitorni, M. G. Road
                    <br />
                    New Delhi - 110030
                  </>
                }
              />
            </div>
          </motion.div>

          {/* =====================================================
              FORM
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-blue-200/10
              bg-[#0b2344]/90
              p-6
              shadow-[0_25px_70px_rgba(0,0,0,0.4)]
              backdrop-blur-xl
              sm:p-8
              lg:p-10
            "
          >
            {/* ================= FORM GLOW ================= */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#0d5bd7]/12 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#d83b32]/5 blur-[100px]" />

            <div className="relative">
              {/* ================= FORM HEADER ================= */}

              <div className="text-center">
                <p
                  className="
                    text-sm
                    font-bold
                    tracking-[0.18em]
                    text-[#ef6359]
                  "
                >
                  ENQUIRY FORM
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-extrabold
                    text-white
                  "
                >
                  Fill Your Details
                </h2>

                <p className="mt-3 text-blue-100/50">
                  Share your requirements and our professional team will contact
                  you shortly.
                </p>
              </div>

              {/* =================================================
                  SUCCESS MESSAGE
              ================================================== */}

              {submitted && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    mt-6
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-[#d83b32]/30
                    bg-[#d83b32]/10
                    p-4
                    text-[#ffaaa3]
                  "
                >
                  <CheckCircle2 size={21} />

                  <span className="font-medium">
                    Enquiry submitted successfully.
                  </span>
                </motion.div>
              )}

              {/* =================================================
                  FORM
              ================================================== */}

              <form
                ref={form}
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                <FormField
                  label="Your Name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  required
                />

                <FormField
                  label="Email Address"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                />

                <FormField
                  label="Phone Number"
                  name="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  required
                />

                <FormField
                  label="Organization"
                  name="organization"
                  placeholder="Enter organization name"
                  type="text"
                />

                <FormField
                  label="Location"
                  name="location"
                  placeholder="Enter location"
                  type="text"
                />

                {/* ================= MESSAGE ================= */}

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-blue-100/80
                    "
                  >
                    Your Requirements
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your security requirements"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-blue-200/10
                      bg-[#071a33]
                      px-4
                      py-3
                      text-white
                      placeholder:text-blue-100/25
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#d83b32]
                      focus:bg-[#0a2040]
                      focus:ring-2
                      focus:ring-[#d83b32]/10
                    "
                  />
                </div>

                {/* ================= BUTTON ================= */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#d83b32]
                    py-4
                    font-bold
                    text-white
                    shadow-[0_10px_30px_rgba(216,59,50,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#bd3029]
                    hover:shadow-[0_15px_35px_rgba(216,59,50,0.28)]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  {loading ? "Sending..." : "Send Enquiry"}

                  {!loading && (
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM TRUST STRIP
        ====================================================== */}

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
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            mx-auto
            mt-16
            max-w-[1100px]
            overflow-hidden
            rounded-2xl
            border
            border-blue-200/10
            bg-[#081b35]
            px-6
            py-7
            text-center
            shadow-[0_20px_55px_rgba(0,0,0,0.25)]
          "
        >
          {/* Glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-[450px] -translate-x-1/2 rounded-full bg-[#0d5bd7]/10 blur-[80px]" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ef6359]">
              Universal Security Solutions
            </p>

            <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
              Professional Security. Trusted Protection.
            </h3>

            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#d83b32]" />
          </div>
        </motion.div>
      </main>
    </>
  );
}

/* =========================================================
   CONTACT INFORMATION COMPONENT
========================================================= */

function ContactInfo({ icon, title, value, href }) {
  const content = (
    <motion.div
      whileHover={{
        x: 8,
      }}
      className="
        group
        flex
        items-center
        gap-5
        border-b
        border-blue-200/10
        py-7
        transition-colors
        duration-300
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-blue-200/10
          bg-[#102f57]
          text-[#8db8e8]
          transition-all
          duration-300
          group-hover:border-[#d83b32]/30
          group-hover:bg-[#d83b32]
          group-hover:text-white
          group-hover:shadow-[0_8px_25px_rgba(216,59,50,0.2)]
        "
      >
        {icon}
      </div>

      {/* Content */}

      <div>
        <p className="text-sm text-blue-100/40">{title}</p>

        <div
          className="
            mt-1
            font-bold
            leading-6
            text-white
            transition-colors
            duration-300
            group-hover:text-[#ef6359]
          "
        >
          {value}
        </div>
      </div>
    </motion.div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

/* =========================================================
   FORM FIELD COMPONENT
========================================================= */

function FormField({ label, name, type, placeholder, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-sm
          font-semibold
          text-blue-100/80
        "
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="
          w-full
          rounded-xl
          border
          border-blue-200/10
          bg-[#071a33]
          px-4
          py-3.5
          text-white
          placeholder:text-blue-100/25
          outline-none
          transition-all
          duration-300
          focus:border-[#d83b32]
          focus:bg-[#0a2040]
          focus:ring-2
          focus:ring-[#d83b32]/10
        "
      />
    </div>
  );
}
