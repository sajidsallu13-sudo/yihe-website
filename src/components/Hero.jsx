import { ArrowRight, Ship, Plane, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-cargo.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071B45]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B45] via-[#0F2D66]/95 to-[#0F2D66]/70" />

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-blue-100/10 px-4 py-1.5 text-xs text-white sm:text-sm">
              <Globe2 size={16} />
              <span>Trusted Global Import & Export Partner</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Connecting
              <span className="block text-yellow-400">Global Business</span>
              Without Limits
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7 md:text-lg">
              YIHE International Trade Service provides complete Import,
              Export, Product Sourcing, Freight Forwarding and Global Trade
              Solutions for businesses worldwide.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/quote"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 sm:w-auto sm:text-base"
              >
                Request Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/services"
                className="w-full rounded-xl border border-white/20 px-6 py-3 text-center text-sm text-white transition hover:bg-white/10 sm:w-auto sm:text-base"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-6 grid max-w-sm grid-cols-2 gap-4 border-t border-white/10 pt-5 sm:mt-7">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">15+</h2>
                <p className="mt-1 text-xs text-blue-200 sm:text-sm">Countries</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">2000+</h2>
                <p className="mt-1 text-xs text-blue-200 sm:text-sm">Factories</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Cargo"
              fetchPriority="high"
              decoding="async"
              className="h-[230px] w-full rounded-2xl object-cover shadow-2xl sm:h-[300px] sm:rounded-3xl lg:h-[360px]"
            />

            <div className="absolute bottom-3 left-3 rounded-xl bg-white p-3 shadow-xl sm:bottom-5 sm:left-4 sm:rounded-2xl sm:p-4">
              <div className="flex items-center gap-2.5">
                <Ship className="text-blue-700" size={20} />
                <div>
                  <h3 className="text-sm font-bold sm:text-base">Sea Freight</h3>
                  <p className="hidden text-xs text-gray-500 sm:block">Worldwide Shipping</p>
                </div>
              </div>
            </div>

            <div className="absolute right-3 top-3 rounded-xl bg-white p-3 shadow-xl sm:right-4 sm:top-5 sm:rounded-2xl sm:p-4">
              <div className="flex items-center gap-2.5">
                <Plane className="text-blue-700" size={20} />
                <div>
                  <h3 className="text-sm font-bold sm:text-base">Air Cargo</h3>
                  <p className="hidden text-xs text-gray-500 sm:block">Fast Delivery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
