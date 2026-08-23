import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {/* BRAND */}
        <div>
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Universal Security Solutions"
              className="w-[90px] h-auto object-contain"
            />
          </Link>

          <p className="mt-5 max-w-sm leading-7 text-gray-400">
            Professional security, facility management and allied services
            designed to provide reliable protection and operational support.
          </p>

          <Link
            to="/contact-us"
            className="
            mt-6
            inline-flex
            rounded-xl
            bg-white
            px-5
            py-3
            text-sm
            font-semibold
            text-black
            transition
            hover:bg-gray-200
            "
          >
            Contact Us
          </Link>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-base font-bold">Quick Links</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>

            <Link to="/about-us" className="transition hover:text-white">
              About Us
            </Link>

            <Link to="/services" className="transition hover:text-white">
              Services
            </Link>

            <Link to="/quality" className="transition hover:text-white">
              Quality
            </Link>

            <Link to="/contact-us" className="transition hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>

        {/* CONTACT INFORMATION */}
        <div>
          <h3 className="text-base font-bold">Contact Information</h3>

          <div className="mt-5 space-y-5 text-sm text-gray-400">
            <div>
              <p className="mb-1 font-semibold text-white">Corporate Office</p>

              <p className="leading-6">
                Subedar Bhawan, H. No. 102
                <br />
                Ghitorni, M. G. Road
                <br />
                New Delhi - 110030
              </p>
            </div>

            <div>
              <p className="mb-1 font-semibold text-white">Phone</p>

              <a
                href="tel:+919560662367"
                className="block transition hover:text-white"
              >
                +91 9560662367
              </a>

              <a
                href="tel:+917042849777"
                className="block transition hover:text-white"
              >
                +91 7042849777
              </a>
            </div>

            <div>
              <p className="mb-1 font-semibold text-white">E Mail</p>

              <a
                href="mailto:universalprotection786@gmail.com"
                className="
                break-all
                transition
                hover:text-white
                "
              >
                universalprotection786@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
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
        text-gray-500 
        sm:flex-row 
        sm:justify-between 
        sm:text-left 
        lg:px-8
        "
        >
          <p>© 2026 Universal Security Solutions. All rights reserved.</p>

          <p>Professional Security & Allied Services</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
