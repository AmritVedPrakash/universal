import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, Award } from "lucide-react";

export default function AboutSecurity() {
  const features = [
    {
      icon: <ShieldCheck size={35} />,
      title: "Trusted Security Solutions",
      text: "We provide reliable security solutions to protect your assets, premises and business operations.",
    },
    {
      icon: <Users size={35} />,
      title: "Highly Trained Professionals",
      text: "Our security workforce is trained by experienced professionals to handle every situation effectively.",
    },
    {
      icon: <Clock size={35} />,
      title: "24/7 Protection",
      text: "Our security and executive protection services ensure complete safety around the clock.",
    },
    {
      icon: <Award size={35} />,
      title: "Certified Security Agency",
      text: "A certified and authorized security company delivering quality services across Delhi NCR.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#d83b32]
          mb-5
          "
          >
            Leading Security Services Company in Pan India
          </h2>

          <div className="w-24 h-1 bg-[#d83b32] mx-auto"></div>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
        text-gray-700
        text-lg
        leading-8
        space-y-6
        "
        >
          <p>
            Red Universal Securityy Solutions is a top-tier, certified, and
            authorized security agency providing professional security services
            in Delhi NCR. We have a team of skilled security guards, armed and
            unarmed private bodyguards who deliver reliable protection solutions
            to corporates, commercial spaces, industries, businesses,
            educational institutes, and various organizations.
          </p>

          <p>
            Our professional security team is dedicated, disciplined, and
            focused towards maintaining complete safety. Every member stays
            alert, carefully monitors situations, and takes proactive measures
            to prevent risks and security threats. We understand that security
            plays a crucial role in protecting your assets, premises, employees,
            and valuable resources.
          </p>

          <p>
            With years of experience and commitment towards excellence, we
            provide safety-centric solutions that make us one of the most
            trusted security companies in Delhi NCR.
          </p>
        </motion.div>

        {/* Features Cards */}

        <div
          className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
        mt-14
        "
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="
            border
            rounded-xl
            p-6
            hover:shadow-xl
            transition
            group
            "
            >
              <div
                className="
              text-[#d83b32]
              mb-4
              group-hover:scale-110
              transition
              "
              >
                {item.icon}
              </div>

              <h3
                className="
              text-xl
              font-bold
              mb-3
              text-gray-800
              "
              >
                {item.title}
              </h3>

              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose */}

        <div className="mt-16">
          <h3
            className="
        text-3xl
        font-bold
        text-[#d83b32]
        mb-6
        "
          >
            What Makes Us the Best Security Company in Delhi NCR?
          </h3>

          <p className="text-gray-700 text-lg leading-8 mb-5">
            It is the dedication, professionalism, and consistency of our
            security experts that makes clients trust our services. We believe
            that trust is built through commitment, quality, and delivering
            exactly what our clients expect.
          </p>

          <ul
            className="
        space-y-4
        text-lg
        text-gray-700
        list-disc
        pl-6
        "
          >
            <li>
              We provide first-class security services to protect your assets,
              premises, employees, and digital infrastructure from potential
              threats.
            </li>

            <li>
              Our security personnel are selected after detailed training and
              are prepared to manage different security challenges with
              professionalism.
            </li>

            <li>
              We offer 24/7 security protection services for companies,
              industries, commercial areas, residential spaces, and
              organizations.
            </li>
          </ul>
        </div>

        {/* Conclusion */}

        <div
          className="
        mt-14
        bg-[#d83b32]
        rounded-xl
        p-8
        text-white
        "
        >
          <h3 className="text-3xl font-bold mb-4">
            Why Choose Red Universal Securityy Solutions?
          </h3>

          <p className="text-lg leading-8">
            Red Universal Securityy Solutions is a certified and professional
            security agency delivering exceptional security services at
            competitive prices. Our trained workforce is committed towards
            client satisfaction and never compromises with quality or safety
            standards.
          </p>

          <p className="mt-5 text-lg leading-8">
            Contact us today and get reliable security solutions from one of the
            industry's trusted experts. Our security guard services are
            available across Delhi NCR including Dwarka, Okhla, Connaught Place,
            South Delhi, Aerocity, and Manesar.
          </p>
        </div>
      </div>
    </section>
  );
}
