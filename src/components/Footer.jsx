import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import {
  Globe,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Products", link: "/products" },
  { name: "Contact", link: "/contact" },
];

const services = [
  "Global Sourcing",
  "Factory Inspection",
  "Quality Control",
  "Import & Export",
  "Sea Freight",
  "Air Freight",
];

const products = [
  "Footwear",
  "Garments",
  "Electronics",
  "Machinery",
  "Furniture",
  "LED Lighting",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#071C47] via-[#081F4D] to-[#04122F] pb-5 pt-9 sm:pt-10 lg:pt-12">
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.25) 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-7">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <img src={logo} alt="YIHE" className="h-12 w-auto sm:h-14" />

            <p className="mt-1 text-sm font-medium text-cyan-300 sm:text-base">
              YIHE International Trade Service
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
              We provide complete import & export solutions, verified sourcing,
              factory inspection, quality control and worldwide logistics support.
            </p>

            <div className="mt-4 grid gap-2.5 text-sm sm:grid-cols-2 sm:text-base lg:grid-cols-1">
              <a
                href="tel:+918789225500"
                className="flex items-center gap-2.5 text-blue-100 transition hover:text-cyan-300"
              >
                <Phone size={17} className="shrink-0 text-cyan-300" />
                +91 8789225500
              </a>

              <a
                href="https://wa.me/918789225500"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-blue-100 transition hover:text-cyan-300"
              >
                <MessageCircle size={17} className="shrink-0 text-cyan-300" />
                Chat on WhatsApp
              </a>

              <a
                href="mailto:sales@yiheglobe.com"
                className="flex min-w-0 items-center gap-2.5 text-blue-100 transition hover:text-cyan-300"
              >
                <Mail size={17} className="shrink-0 text-cyan-300" />
                <span className="break-all">sales@yiheglobe.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-blue-100">
                <MapPin size={17} className="mt-0.5 shrink-0 text-cyan-300" />
                China | India | Middle East | Africa
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold text-white sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="flex items-center gap-1.5 text-blue-100 transition hover:text-cyan-300"
                  >
                    <ArrowUpRight size={14} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold text-white sm:text-lg">Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {services.map((item) => (
                <li key={item} className="cursor-pointer text-blue-100 transition hover:text-cyan-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-3 text-base font-semibold text-white sm:text-lg">Products</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:block sm:space-y-2 sm:text-base">
              {products.map((item) => (
                <li key={item} className="cursor-pointer text-blue-100 transition hover:text-cyan-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, link: "#" },
                { icon: Instagram, link: "#" },
                { icon: Linkedin, link: "#" },
                { icon: Youtube, link: "#" },
                { icon: Globe, link: "#" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.link}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300 transition hover:bg-cyan-400 hover:text-[#081F4D] sm:h-10 sm:w-10"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>

            <div className="text-center text-sm lg:text-right sm:text-base">
              <p className="text-blue-100">
                © {new Date().getFullYear()} {" "}
                <span className="font-semibold text-white">YIHE International Trade Service</span>
              </p>
              <p className="mt-1 text-xs text-blue-300 sm:text-sm">Designed for YIHE Global</p>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        aria-label="Back to top"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 text-[#081F4D] shadow-[0_0_22px_rgba(34,211,238,.4)] md:bottom-6 md:right-6 md:h-12 md:w-12"
      >
        <ArrowUpRight className="-rotate-45" size={21} />
      </motion.button>
    </footer>
  );
}
