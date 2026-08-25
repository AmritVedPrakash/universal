import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <div
        className="
          border-b
          border-blue-200/10
          bg-[#06152e]
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[140px]
            max-w-[1500px]
            items-center
            px-5
            md:px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <div className="flex w-[280px] shrink-0 items-center">
            <Link to="/" onClick={closeMenu}>
              <img
                src={logo}
                alt="Red Universal Securityy Solutions"
                className="
                  w-[140px]
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-105
                  sm:w-[175px]
                  md:w-[130px]
                "
              />
            </Link>
          </div>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden flex-1 justify-center lg:flex">
            <ul
              className="
                flex
                items-center
                gap-8
                text-[16px]
                font-semibold
                text-white
                xl:gap-11
                xl:text-[17px]
              "
            >
              {/* Home */}

              <li>
                <Link
                  to="/"
                  className="
                    relative
                    py-2
                    transition
                    duration-300
                    hover:text-[#ef6359]
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[2px]
                    after:w-0
                    after:bg-[#d83b32]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  Home
                </Link>
              </li>

              {/* About Us */}

              <li>
                <Link
                  to="/about-us"
                  className="
                    relative
                    py-2
                    transition
                    duration-300
                    hover:text-[#ef6359]
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[2px]
                    after:w-0
                    after:bg-[#d83b32]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  About Us
                </Link>
              </li>

              {/* Services */}

              <li>
                <Link
                  to="/services"
                  className="
                    relative
                    py-2
                    transition
                    duration-300
                    hover:text-[#ef6359]
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[2px]
                    after:w-0
                    after:bg-[#d83b32]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  Services
                </Link>
              </li>

              {/* Quality */}

              <li>
                <Link
                  to="/quality"
                  className="
                    relative
                    py-2
                    transition
                    duration-300
                    hover:text-[#ef6359]
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[2px]
                    after:w-0
                    after:bg-[#d83b32]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  Quality
                </Link>
              </li>

              {/* Contact Us */}

              <li>
                <Link
                  to="/contact-us"
                  className="
                    relative
                    py-2
                    transition
                    duration-300
                    hover:text-[#ef6359]
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[2px]
                    after:w-0
                    after:bg-[#d83b32]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* =================================================
              RIGHT EMPTY SPACE
              Keeps navigation centered
          ================================================== */}

          <div className="hidden w-[230px] lg:block" />

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              ml-auto
              rounded-xl
              border
              border-blue-200/10
              bg-[#0b2344]
              p-2.5
              text-white
              transition-all
              duration-300
              hover:border-[#d83b32]/40
              hover:bg-[#102f57]
              hover:text-[#ef6359]
              lg:hidden
            "
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        <div
          className={`
            overflow-hidden
            border-t
            border-blue-200/10
            bg-[#071a33]
            transition-all
            duration-300
            lg:hidden
            ${isOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col px-6 pb-5 pt-2">
            {/* Home */}

            <Link
              to="/"
              onClick={closeMenu}
              className="
                border-b
                border-blue-200/10
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:pl-2
                hover:text-[#ef6359]
              "
            >
              Home
            </Link>

            {/* About Us */}

            <Link
              to="/about-us"
              onClick={closeMenu}
              className="
                border-b
                border-blue-200/10
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:pl-2
                hover:text-[#ef6359]
              "
            >
              About Us
            </Link>

            {/* Services */}

            <Link
              to="/services"
              onClick={closeMenu}
              className="
                border-b
                border-blue-200/10
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:pl-2
                hover:text-[#ef6359]
              "
            >
              Services
            </Link>

            {/* Quality */}

            <Link
              to="/quality"
              onClick={closeMenu}
              className="
                border-b
                border-blue-200/10
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:pl-2
                hover:text-[#ef6359]
              "
            >
              Quality
            </Link>

            {/* Contact */}

            <Link
              to="/contact-us"
              onClick={closeMenu}
              className="
                py-4
                font-semibold
                text-white
                transition
                duration-300
                hover:pl-2
                hover:text-[#ef6359]
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
