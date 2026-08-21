import { ArrowRight, Ship, Plane, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Put your hero image here
import heroImage from "../assets/images/hero-cargo.jpg";

export default function Hero() {
  return (
     <section className="relative bg-[#071B45] overflow-hidden">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B45] via-[#0F2D66]/95 to-[#0F2D66]/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-8">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/10 border border-white/20 px-5 py-2 text-white">
              <Globe2 size={18} />
              <span>Trusted Global Import & Export Partner</span>
            </div>

            <h1 className="mt-6 text-4xl lg:text-6xl font-extrabold leading-tight text-white">
              Connecting
              <span className="block text-yellow-400">
                Global Business
              </span>
              Without Limits
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100 max-w-xl">
              YIHE International Trade Service provides complete Import,
              Export, Product Sourcing, Freight Forwarding and Global Trade
              Solutions for businesses worldwide.
            </p>

            <div className="mt-7 flex flex-wrap gap-5">

              <Link
                to="/quote"
                className="flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-black transition hover:bg-yellow-300"
              >
                Request Quote
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/services"
                className="rounded-xl border border-white/20 px-7 py-4 text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>

            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-6">

              <div>
                <h2 className="text-4xl font-bold text-white">15+</h2>
                <p className="text-blue-200 mt-2">Countries</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">2000+</h2>
                <p className="text-blue-200 mt-2">Factory</p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <img
              src={heroImage}
              alt="Cargo"
              className="h-[300px] lg:h-[360px] w-full rounded-3xl object-cover shadow-2xl"
            /> 

            {/* Sea Freight */}

            <div className="absolute left-[-20px] bottom-10 rounded-2xl bg-white p-5 shadow-xl">

              <div className="flex items-center gap-3">

                <Ship className="text-blue-700" />

                <div>

                  <h3 className="font-bold">Sea Freight</h3>

                  <p className="text-sm text-gray-500">
                    Worldwide Shipping
                  </p>

                </div>

              </div>

            </div>

            {/* Air Cargo */}

            <div className="absolute right-[-20px] top-10 rounded-2xl bg-white p-5 shadow-xl">

              <div className="flex items-center gap-3">

                <Plane className="text-blue-700" />

                <div>

                  <h3 className="font-bold">Air Cargo</h3>

                  <p className="text-sm text-gray-500">
                    Fast Delivery
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}