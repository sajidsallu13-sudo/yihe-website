import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import {
  Globe,
  Phone,
  Mail,
  MapPin,
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
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#071C47] via-[#081F4D] to-[#04122F] pt-12 pb-6">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-600/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.25) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">

          {/* Company */}

          <div className="lg:col-span-2">

            <img
  src={logo}
  alt="YIHE"
  className="h-16 w-auto"
/>

            <p className="text-cyan-300 font-medium mt-2">
              YIHE International Trade Service
            </p>

            <p className="mt-4 text-blue-100 leading-6">
              We provide complete import & export solutions,
              verified sourcing, factory inspection,
              quality control and worldwide logistics support.
            </p>

            <div className="space-y-3 mt-5">

              <div className="flex items-center gap-3 text-blue-100">
                <Phone size={18} className="text-cyan-300" />
                +91 8789225500
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <Mail size={18} className="text-cyan-300" />
                yiheglobal@gmail.com
              </div>

              <div className="flex items-center gap-3 text-blue-100">
                <MapPin size={18} className="text-cyan-300" />
                China | India | Middle East  | Africa
              </div>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2.5">

              {quickLinks.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.link}
                    className="flex items-center gap-2 text-blue-100 hover:text-cyan-300 transition"
                  >
                    <ArrowUpRight size={16} />
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4">

              {services.map((item) => (

                <li
                  key={item}
                  className="text-blue-100 hover:text-cyan-300 transition cursor-pointer"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Products */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Products
            </h3>

            <ul className="space-y-4">

              {products.map((item) => (

                <li
                  key={item}
                  className="text-blue-100 hover:text-cyan-300 transition cursor-pointer"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* ⛔ Part 2 yahin se continue hoga */}

                {/* Bottom Section */}

        <div className="mt-10 border-t border-white/10 pt-5">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Social Icons */}

            <div className="flex items-center gap-5">

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
                    whileHover={{
                      scale: 1.15,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-cyan-300 hover:bg-cyan-400 hover:text-[#081F4D] transition-all duration-300"
                  >
                    <Icon size={20} />
                  </motion.a>

                );

              })}

            </div>

            {/* Copyright */}

            <div className="text-center lg:text-right">

              <p className="text-blue-100">

                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-white">
                  YIHE International Trade Service
                </span>

              </p>

              <p className="text-sm text-blue-300 mt-2">

                Designed for YIHE Global

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Back To Top */}

      <motion.button
        whileHover={{
          scale: 1.1,
          y: -4,
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-cyan-400 text-[#081F4D] shadow-[0_0_30px_rgba(34,211,238,.45)] flex items-center justify-center"
      >
        <ArrowUpRight className="-rotate-45" size={24} />
      </motion.button>

    </footer>
  );
}