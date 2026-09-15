import logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "border-b border-cyan-200/30 bg-white/95 shadow-lg backdrop-blur-xl"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center" aria-label="YIHE Home">
          <img
            src={logo}
            alt="YIHE"
            className="h-12 w-auto object-contain transition duration-300 group-hover:scale-105 sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative whitespace-nowrap text-sm font-medium transition-colors duration-300 xl:text-base ${
                  isActive
                    ? "text-cyan-600"
                    : "text-slate-700 hover:text-cyan-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-cyan-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/quote"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-400/20 transition duration-300 hover:shadow-cyan-400/40 xl:text-base"
          >
            Request Quote
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/60 bg-white text-cyan-600 shadow-sm transition hover:bg-cyan-50 lg:hidden"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[620px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-3 mb-3 overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-xl sm:mx-5">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block border-b border-slate-100 px-5 py-3 text-sm transition sm:px-6 sm:text-base ${
                  isActive
                    ? "bg-cyan-50 font-semibold text-cyan-600"
                    : "text-slate-700 hover:bg-cyan-50 hover:text-cyan-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="p-3 sm:p-4">
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-sm font-semibold text-white shadow-md sm:text-base"
            >
              Request Quote
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </header>
  );
}
