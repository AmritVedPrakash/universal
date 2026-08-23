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
    event.target.reset();
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="bg-white px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="
            text-4xl
            font-bold
            tracking-tight
            text-[#24272d]
            sm:text-5xl
            md:text-6xl
            "
            >
              Contact
              <span className="text-[#d83b32]"> Us</span>
            </h1>

            <div
              className="
            mt-5
            h-1
            w-20
            rounded-full
            bg-[#d83b32]
            "
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
            mt-8
            max-w-[1250px]
            text-base
            leading-8
            text-[#34363b]
            sm:text-lg
            "
          >
            Are you looking for a reliable security partner to protect your
            business, assets, buildings and investments?{" "}
            <strong className="text-[#24272d]">
              Universal Security Solutions
            </strong>{" "}
            is a trusted security and facility management company providing
            professional protection solutions with over{" "}
            <strong className="text-[#24272d]">25+ years of experience</strong>
            in the security industry.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="
            mt-4
            max-w-[1250px]
            text-base
            leading-8
            text-[#34363b]
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

      {/* ================= CONTACT AREA ================= */}

      <main
        className="
      bg-[#fafafa]
      px-5
      py-16
      sm:px-8
      lg:px-12
      lg:py-20
      "
      >
        <div
          className="
        mx-auto
        grid
        max-w-[1350px]
        gap-14
        lg:grid-cols-2
        lg:gap-20
        "
        >
          {/* LEFT SIDE */}

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
            <p
              className="
            text-sm
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#d83b32]
            "
            >
              Get In Touch
            </p>

            <h2
              className="
            mt-3
            max-w-[650px]
            text-4xl
            font-bold
            leading-tight
            text-[#24272d]
            sm:text-5xl
            "
            >
              Connect With Universal
              <br />
              <span className="text-[#d83b32]">Security Solutions</span>
            </h2>

            <ContactInfo
              icon={<Mail size={30} />}
              title="E Mail"
              value="universalprotection786@gmail.com"
              href="mailto:universalprotection786@gmail.com"
            />

            <ContactInfo
              icon={<Phone size={30} />}
              title="Phone"
              value={
                <>
                  +91 9560662367
                  <br />
                  +91 7042849777
                </>
              }
              href="tel:+919560662367"
            />

            <ContactInfo
              icon={<MessageCircle size={30} />}
              title="WhatsApp"
              value="+91 9560662367"
              href="https://wa.me/919560662367"
            />

            <ContactInfo
              icon={<MapPin size={30} />}
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
          </motion.div>

          {/* FORM */}

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
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-lg
          sm:p-8
          lg:p-10
          "
          >
            <div className="text-center">
              <p
                className="
              text-sm
              font-bold
              tracking-[0.18em]
              text-[#d83b32]
              "
              >
                ENQUIRY FORM
              </p>

              <h2
                className="
              mt-2
              text-3xl
              font-bold
              text-[#24272d]
              "
              >
                Fill Your Details
              </h2>

              <p
                className="
              mt-3
              text-gray-500
              "
              >
                Share your requirements and our professional team will contact
                you shortly.
              </p>
            </div>

            {submitted && (
              <div
                className="
              mt-6
              flex
              items-center
              gap-3
              rounded-xl
              bg-green-50
              p-4
              text-green-700
              "
              >
                <CheckCircle2 />
                Enquiry submitted successfully.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="
            mt-8
            space-y-5
            "
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

              <textarea
                rows="5"
                placeholder="Tell us about your security requirements"
                required
                className="
              w-full
              rounded-xl
              border
              border-gray-200
              px-4
              py-3
              outline-none
              focus:border-[#d83b32]
              "
              />

              <button
                className="
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
              hover:bg-[#bd3029]
              "
              >
                Send Enquiry
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    </>
  );
}

function ContactInfo({ icon, title, value, href }) {
  const content = (
    <motion.div
      whileHover={{
        x: 8,
      }}
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
items-center
justify-center
rounded-xl
bg-red-50
text-[#d83b32]
"
      >
        {icon}
      </div>

      <div>
        <p
          className="
text-sm
text-gray-500
"
        >
          {title}
        </p>

        <div
          className="
mt-1
font-bold
text-[#24272d]
"
        >
          {value}
        </div>
      </div>
    </motion.div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function FormField({ label, name, type, placeholder, required }) {
  return (
    <div>
      <label
        className="
mb-2
block
text-sm
font-semibold
text-[#24272d]
"
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="
w-full
rounded-xl
border
border-gray-200
px-4
py-3.5
outline-none
focus:border-[#d83b32]
"
      />
    </div>
  );
}
