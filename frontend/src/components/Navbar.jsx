import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative z-50 w-full">
      {/* Navbar Background */}
      <div className="bg-white/20 backdrop-blur-[8px] border-b border-white/20">
       <div className="mx-auto flex h-[140px] max-w-[1500px] items-center px-5 md:px-8">
          {/* Logo */}
          <div className="flex w-[230px] shrink-0 items-center">
            <Link to="/" onClick={closeMenu}>
              <img
                src={logo}
                alt="Red Scorpion Security Solutions"
                className="w-[150px] object-contain sm:w-[175px] md:w-[200px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 lg:flex justify-center">
            <ul className="flex items-center gap-8 xl:gap-11 text-[16px] xl:text-[18px] font-semibold text-[#e33b32]">
              <li>
                <Link
                  to="/"
                  className="transition duration-300 hover:text-red-700"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition duration-300 hover:text-red-700"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/about-us"
                  className="transition duration-300 hover:text-red-700"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="transition duration-300 hover:text-red-700"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Empty Space - keeps navigation centered */}
          <div className="hidden w-[230px] lg:block"></div>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto rounded-lg p-2 text-[#e33b32] transition hover:bg-white/20 lg:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden bg-white/90 backdrop-blur-md transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 pb-5">
            <Link
              to="/"
              onClick={closeMenu}
              className="border-b border-gray-200 py-4 font-semibold text-[#e33b32]"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={closeMenu}
              className="border-b border-gray-200 py-4 font-semibold text-[#e33b32]"
            >
              Services
            </Link>

            <Link
              to="/about-us"
              onClick={closeMenu}
              className="border-b border-gray-200 py-4 font-semibold text-[#e33b32]"
            >
              About Us
            </Link>

            <Link
              to="/contact-us"
              onClick={closeMenu}
              className="py-4 font-semibold text-[#e33b32]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
