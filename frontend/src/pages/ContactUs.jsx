import React, { useState } from "react";
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    // Future me yahan API integration kar sakte ho
    event.target.reset();
  };

  return (
    <>
      {/* ================= HERO / INTRO ================= */}
      <section className="bg-white px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-[#24272d] sm:text-5xl md:text-6xl">
              Contact <span className="text-[#d83b32]">Us</span>
            </h1>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#d83b32]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-[1250px] text-base leading-8 text-[#34363b] sm:text-lg"
          >
            Are you looking for a reliable security guard company to secure your
            Business, Asset, Building and Investment?{" "}
            <strong className="font-bold text-[#24272d]">
              Red Scorpion Security Solutions
            </strong>{" "}
            is India&apos;s{" "}
            <strong className="font-bold text-[#24272d]">
              best security agency
            </strong>{" "}
            with a proven track record of over 19+ years in providing leading
            security solutions. We provide trained and verified security guard
            services for all types of{" "}
            <span className="font-semibold text-[#d83b32]">manufacturing</span>,
            retail, commercial, warehouses, residential and ITES sector. We are
            proud to be associated with leading organizations across Pan India
            basis in safeguarding their premises, business and locations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-[1250px] text-base leading-8 text-[#34363b] sm:text-lg"
          >
            Contact us for professional security guard services across Delhi,
            Noida, Gurgaon, Greater Noida, Faridabad, Ghaziabad, Neemrana,
            Jaipur, Mumbai, Pune and Hyderabad.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTACT AREA ================= */}
      <main className="bg-[#fafafa] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1350px] gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d83b32]">
                Get In Touch
              </p>

              <h2 className="mt-3 max-w-[650px] text-4xl font-bold leading-tight text-[#24272d] sm:text-5xl">
                Call Now For Best
                <br />
                <span className="text-[#d83b32]">Security Guard Services</span>
              </h2>
            </div>

            {/* EMAIL */}
            <ContactInfo
              icon={<Mail size={30} strokeWidth={1.8} />}
              title="Email"
              value="care@redscorpionsecurity.in"
              href="mailto:care@redscorpionsecurity.in"
            />

            {/* PHONE */}
            <ContactInfo
              icon={<Phone size={30} strokeWidth={1.8} />}
              title="Phone"
              value="+91 8711021102"
              href="tel:+918711021102"
            />

            {/* WHATSAPP */}
            <ContactInfo
              icon={<MessageCircle size={30} strokeWidth={1.8} />}
              title="WhatsApp"
              value="+91 8711021102"
              href="https://wa.me/918711021102"
            />

            {/* ADDRESS */}
            <ContactInfo
              icon={<MapPin size={30} strokeWidth={1.8} />}
              title="Address"
              value={
                <>
                  RZ-F1/113A, Street no.-2, Mahavir Enclave,
                  <br />
                  Palam Colony, New Delhi, 110045
                </>
              }
            />
          </motion.div>

          {/* ================= RIGHT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10"
          >
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d83b32]">
                Enquiry Form
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#24272d] sm:text-4xl">
                Fill Your Details
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Share your requirements and our security team will contact you
                shortly.
              </p>
            </div>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="mt-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700"
              >
                <CheckCircle2 size={22} />
                <span>
                  Thank you! Your enquiry has been submitted successfully.
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* NAME */}
              <FormField
                label="Your Name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />

              {/* EMAIL */}
              <FormField
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />

              {/* PHONE */}
              <FormField
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                minLength="10"
                maxLength="10"
                required
              />

              {/* ORGANIZATION */}
              <FormField
                label="Organization"
                type="text"
                name="organization"
                placeholder="Enter your organization name"
                required
              />

              {/* LOCATION */}
              <FormField
                label="Location"
                type="text"
                name="location"
                placeholder="Enter your location"
                required
              />

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#24272d]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your security requirements..."
                  required
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3
                    text-[#24272d]
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#d83b32]
                    focus:ring-2
                    focus:ring-[#d83b32]/10
                  "
                />
              </div>

              {/* SUBMIT */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#d83b32]
                  px-6
                  py-4
                  text-base
                  font-bold
                  text-white
                  shadow-lg
                  shadow-red-900/10
                  transition
                  hover:bg-[#bd3029]
                "
              >
                Send Enquiry
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </main>

    
    </>
  );
}

/* ================= CONTACT INFO COMPONENT ================= */

function ContactInfo({ icon, title, value, href }) {
  const content = (
    <motion.div
      whileHover={{ x: 8 }}
      className="
        flex
        items-center
        gap-5
        border-b
        border-gray-300
        py-7
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
          border
          border-[#d83b32]/30
          bg-[#d83b32]/5
          text-[#d83b32]
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>

        <div className="mt-1 text-base font-bold leading-7 text-[#24272d] sm:text-lg">
          {value}
        </div>
      </div>
    </motion.div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("https://") ? "_blank" : undefined}
      rel={href.startsWith("https://") ? "noreferrer" : undefined}
    >
      {content}
    </a>
  ) : (
    content
  );
}

/* ================= FORM FIELD ================= */

function FormField({
  label,
  type,
  name,
  placeholder,
  required,
  pattern,
  minLength,
  maxLength,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-[#24272d]"
      >
        {label}
        {required && <span className="ml-1 text-[#d83b32]">*</span>}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        className="
          w-full
          rounded-xl
          border
          border-gray-200
          bg-white
          px-4
          py-3.5
          text-[#24272d]
          outline-none
          transition
          placeholder:text-gray-400
          focus:border-[#d83b32]
          focus:ring-2
          focus:ring-[#d83b32]/10
        "
      />
    </div>
  );
}
