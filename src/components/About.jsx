import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Globe,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import aboutImage from "../assets/images/about.jpg";

const features = [
  "China Product Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Global Logistics",
  "Import & Export Documentation",
  "End-to-End Supply Chain",
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-200 opacity-20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200 opacity-20 blur-[160px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold uppercase tracking-[3px] text-blue-700 sm:text-sm">
            About YIHE
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Your Trusted <span className="text-blue-700">Global Trade Partner</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Headquartered in Foshan, China-the manufacturing heart of Guangdong-Yihe Group is a modern global trading entity. We bridge the gap between high-capacity Chinese manufacturing and international buyers. By integrating our own in-house production facilities, trusted factory networks, local quality assurance, and direct overseas branches, we eliminate trade friction, quality risks, and supply chain delays.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle size={18} className="shrink-0 text-green-600" />
                <span className="text-sm text-slate-700 sm:text-base">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/about"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 sm:w-auto sm:text-base"
            >
              Learn More
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="w-full rounded-full border-2 border-blue-700 px-6 py-2.5 text-center text-sm font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white sm:w-auto sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={aboutImage}
            alt="About YIHE"
            loading="lazy"
            decoding="async"
            className="h-[260px] w-full rounded-2xl object-cover shadow-2xl sm:h-[330px] sm:rounded-3xl lg:h-[380px]"
          />

          <div className="mt-3 grid grid-cols-3 gap-2 sm:hidden">
            <div className="rounded-xl bg-slate-50 p-2.5 text-center shadow-sm">
              <Globe className="mx-auto text-blue-700" size={18} />
              <h3 className="mt-1 text-sm font-bold">25+</h3>
              <p className="text-[10px] text-gray-500">Countries</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-2.5 text-center shadow-sm">
              <PackageCheck className="mx-auto text-blue-700" size={18} />
              <h3 className="mt-1 text-sm font-bold">500+</h3>
              <p className="text-[10px] text-gray-500">Shipments</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-2.5 text-center shadow-sm">
              <ShieldCheck className="mx-auto text-green-600" size={18} />
              <h3 className="mt-1 text-sm font-bold">100+</h3>
              <p className="text-[10px] text-gray-500">Suppliers</p>
            </div>
          </div>

          <div className="absolute left-3 top-4 hidden items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-xl sm:flex">
            <Globe className="text-blue-700" size={20} />
            <div>
              <h3 className="text-sm font-bold">25+</h3>
              <p className="text-xs text-gray-500">Countries Served</p>
            </div>
          </div>

          <div className="absolute bottom-4 right-3 hidden items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-xl sm:flex">
            <PackageCheck className="text-blue-700" size={20} />
            <div>
              <h3 className="text-sm font-bold">500+</h3>
              <p className="text-xs text-gray-500">Shipments</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-3 hidden items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-xl lg:flex">
            <ShieldCheck className="text-green-600" size={20} />
            <div>
              <h3 className="text-sm font-bold">100+</h3>
              <p className="text-xs text-gray-500">Trusted Suppliers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
