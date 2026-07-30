import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import logo from "../assets/images/logo.jpeg";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Blog", path: "/blog" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/75 backdrop-blur-2xl shadow-xl border-b border-cyan-200/30"
          : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">

              {/* ================= LOGO ================= */}

      <Link
        to="/"
        className="flex items-center gap-3 group"
      >
        <img
          src={logo}
          alt="YIHE"
          className="h-14 w-auto transition-all duration-500 group-hover:scale-110"
        />

        <div>
          <h2 className="text-2xl font-bold text-[#0F2D66] tracking-wide">
            YIHE
          </h2>

          <p className="text-xs text-gray-600 tracking-wider uppercase">
            International Trade Service
          </p>
        </div>
      </Link>

      {/* ================= DESKTOP MENU ================= */}

      <nav className="hidden lg:flex items-center gap-8">

        {links.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative font-medium transition-all duration-300 ${
                isActive
                  ? "text-cyan-600"
                  : "text-gray-700 hover:text-cyan-600"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.name}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-cyan-500 transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>

        ))}

        <Link
          to="/quote"
          className="group inline-flex items-center gap-2 rounded-xl
          bg-gradient-to-r from-cyan-500 to-blue-600
          px-6 py-3 text-white font-semibold
          shadow-lg shadow-cyan-400/20
          transition-all duration-300
          hover:scale-105
          hover:shadow-cyan-400/50"
        >
          Request Quote

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </nav>

            {/* ================= MOBILE BUTTON ================= */}

      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden w-12 h-12 rounded-xl border border-cyan-200/40
        bg-white/70 backdrop-blur-xl flex items-center justify-center
        shadow-lg transition-all duration-300 hover:scale-105"
      >
        {open ? (
          <X className="text-cyan-600" size={26} />
        ) : (
          <Menu className="text-cyan-600" size={26} />
        )}
      </button>

    </div>

    {/* ================= MOBILE MENU ================= */}

    <div
      className={`lg:hidden overflow-hidden transition-all duration-500 ${
        open ? "max-h-[700px]" : "max-h-0"
      }`}
    >
      <div
        className="mx-4 mb-4 rounded-3xl bg-white/90 backdrop-blur-2xl
        shadow-2xl border border-cyan-100"
      >
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-8 py-5 border-b border-gray-100 transition-all duration-300 ${
                isActive
                  ? "text-cyan-600 font-semibold bg-cyan-50"
                  : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        <div className="p-6">

          <Link
            to="/quote"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl
            bg-gradient-to-r from-cyan-500 to-blue-600
            py-4 text-white font-semibold
            shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Request Quote

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </div>
        {/* Bottom Border Glow */}

    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

  </header>
);
}