import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {/* BRAND */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            {/* LOGO */}
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-extrabold text-black">
              U
            </span>

            <div>
              <h2 className="text-lg font-bold">Universal</h2>

              <p className="text-[10px] font-semibold tracking-widest text-purple-300">
                DIGITAL PLATFORM
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-xs leading-7 text-gray-400">
            One digital platform to discover and access multiple essential
            services from one application.
          </p>

          <Link
            to="/contact-us"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </div>

        {/* PLATFORM LINKS */}
        <div>
          <h3 className="text-base font-bold">Platform</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>

            <Link to="/about-us" className="transition hover:text-white">
              About Us
            </Link>

            <Link to="/contact-us" className="transition hover:text-white">
              Contact Us
            </Link>

            <a href="/#services" className="transition hover:text-white">
              Services
            </a>
          </div>
        </div>

        {/* SUPPORT & LEGAL */}
        <div>
          <h3 className="text-base font-bold">Support & Legal</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
            <p>connect@gmail.com</p>

            <p>India</p>

            <Link to="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/terms-condition" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-center text-sm text-gray-500 sm:flex-row sm:justify-between sm:text-left lg:px-8">
          <p>© 2026 Universal Digital Platform. All rights reserved.</p>

          <p>One App. Multiple Services.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
