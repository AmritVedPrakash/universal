import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          gap-12
          overflow-hidden
          px-5
          py-16
          sm:grid-cols-2
          lg:grid-cols-4
          lg:px-8
        "
      >

        {/* =================================================
            BACKGROUND GLOW
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            h-96
            w-96
            rounded-full
            bg-black
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -right-40
            h-96
            w-96
            rounded-full
            bg-black
            blur-[120px]
          "
        />


        {/* =================================================
            BRAND
        ================================================== */}

        <div className="relative">

          <Link
            to="/"
            className="inline-flex items-center"
          >
            <img
              src={logo}
              alt="Universal Security Solutions"
              className="
                h-auto
                w-[110px]
                object-contain
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          </Link>


          <p
            className="
              mt-5
              max-w-sm
              text-sm
              leading-7
              text-blue-100/55
            "
          >
            Professional security, facility management and allied services
            designed to provide reliable protection and operational support.
          </p>


          {/* Contact Button */}

          <Link
            to="/contact-us"
            className="
              mt-6
              inline-flex
              rounded-xl
              bg-[#d83b32]
              px-5
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_8px_25px_rgba(216,59,50,0.2)]
              transition-all
              duration-300
              hover:bg-[#ef4b41]
              hover:shadow-[0_10px_30px_rgba(216,59,50,0.3)]
            "
          >
            Contact Us
          </Link>

        </div>


        {/* =================================================
            QUICK LINKS
        ================================================== */}

        <div className="relative">

          <h3
            className="
              text-base
              font-extrabold
              text-white
            "
          >
            Quick Links
          </h3>

          {/* Red underline */}

          <div className="mt-3 h-1 w-8 rounded-full bg-[#d83b32]" />


          <div
            className="
              mt-5
              flex
              flex-col
              gap-3
              text-sm
              text-blue-100/55
            "
          >

            <Link
              to="/"
              className="
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-[#ef6359]
              "
            >
              Home
            </Link>

            <Link
              to="/about-us"
              className="
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-[#ef6359]
              "
            >
              About Us
            </Link>

            <Link
              to="/services"
              className="
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-[#ef6359]
              "
            >
              Services
            </Link>

            <Link
              to="/quality"
              className="
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-[#ef6359]
              "
            >
              Quality
            </Link>

            <Link
              to="/contact-us"
              className="
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-[#ef6359]
              "
            >
              Contact Us
            </Link>

          </div>
        </div>


        {/* =================================================
            CONTACT INFORMATION
        ================================================== */}

        <div className="relative">

          <h3
            className="
              text-base
              font-extrabold
              text-white
            "
          >
            Contact Information
          </h3>

          <div className="mt-3 h-1 w-8 rounded-full bg-[#d83b32]" />


          <div
            className="
              mt-5
              space-y-5
              text-sm
              text-blue-100/55
            "
          >

            {/* Corporate Office */}

            <div>

              <p
                className="
                  mb-1
                  font-bold
                  text-white
                "
              >
                Corporate Office
              </p>

              <p className="leading-6">
                Subedar Bhawan, H. No. 102
                <br />
                Ghitorni, M. G. Road
                <br />
                New Delhi - 110030
              </p>

            </div>


            {/* Phone */}

            <div>

              <p
                className="
                  mb-1
                  font-bold
                  text-white
                "
              >
                Phone
              </p>

              <a
                href="tel:+919560662367"
                className="
                  block
                  transition
                  hover:text-[#ef6359]
                "
              >
                +91 9560662367
              </a>

              <a
                href="tel:+917042849777"
                className="
                  block
                  transition
                  hover:text-[#ef6359]
                "
              >
                +91 7042849777
              </a>

            </div>


            {/* Email */}

            <div>

              <p
                className="
                  mb-1
                  font-bold
                  text-white
                "
              >
                E Mail
              </p>

              <a
                href="mailto:universalprotection786@gmail.com"
                className="
                  break-all
                  transition
                  hover:text-[#ef6359]
                "
              >
                universalprotection786@gmail.com
              </a>

            </div>

          </div>

        </div>


        {/* =================================================
            HELPLINE
        ================================================== */}

        <div className="relative">

          <h3
            className="
              text-base
              font-extrabold
              text-white
            "
          >
            Universal Helpline
          </h3>

          <div className="mt-3 h-1 w-8 rounded-full bg-[#d83b32]" />


          <p
            className="
              mt-5
              text-sm
              leading-7
              text-blue-100/55
            "
          >
            For immediate assistance and security-related support,
            contact our helpline team.
          </p>


          {/* Helpline Number 1 */}

          <a
            href="tel:+917042849777"
            className="
              mt-5
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-blue-200/10
              bg-[#0b2344]
              px-4
              py-3
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:border-[#d83b32]/40
              hover:bg-[#102f57]
              hover:text-[#ef6359]
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-[#d83b32]
                text-xs
                text-white
              "
            >
              01
            </span>

            +91 7042849777
          </a>


          {/* Helpline Number 2 */}

          <a
            href="tel:+917042839777"
            className="
              mt-3
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-blue-200/10
              bg-[#0b2344]
              px-4
              py-3
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:border-[#d83b32]/40
              hover:bg-[#102f57]
              hover:text-[#ef6359]
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-[#d83b32]
                text-xs
                text-white
              "
            >
              02
            </span>

            +91 7042839777
          </a>

        </div>

      </div>


      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div className="border-t border-blue-200/10">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-2
            px-5
            py-6
            text-center
            text-sm
            text-blue-100/40
            sm:flex-row
            sm:justify-between
            sm:text-left
            lg:px-8
          "
        >

          <p>
            © 2026 Universal Security Solutions. All rights reserved.
          </p>

          <p>
            Professional Security & Allied Services
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;