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
    <section className="relative overflow-hidden bg-white py-14">

      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200 blur-[180px] opacity-20"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200 blur-[180px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity:0, x:-60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
          viewport={{ once:true }}
        >

          <span className="uppercase tracking-[4px] text-blue-700 font-semibold">
            About YIHE
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight">

            Your Trusted

            <span className="text-blue-700">

              {" "}Global Trade Partner

            </span>

          </h2>

          <p className="mt-5 text-slate-600 leading-7">

            Headquartered in Foshan, China-the manufacturing heart of Guangdong-Yihe Group is a modern global trading entity. We bridge the gap between high-capacity Chinese manufacturing and international buyers. By integrating our own in-house production facilities, trusted factory networks, local quality assurance, and direct overseas branches, we eliminate trade friction, quality risks, and supply chain delays.

          </p>

          {/* FEATURES */}

          <div className="grid sm:grid-cols-2 gap-3 mt-6">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <CheckCircle
                  size={20}
                  className="text-green-600"
                />

                <span className="text-slate-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4 mt-7">

            <Link
              to="/about"
              className="group bg-blue-700 hover:bg-blue-800
              text-white px-7 py-4 rounded-full
              font-semibold flex items-center gap-2
              transition"
            >

              Learn More

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </Link>

            <Link
              to="/contact"
              className="border-2 border-blue-700
              text-blue-700
              hover:bg-blue-700
              hover:text-white
              px-7 py-3
              rounded-full
              font-semibold
              transition"
            >

              Contact Us

            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity:0, x:60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
          viewport={{ once:true }}
          className="relative"
        >

          <img
            src={aboutImage}
            alt="About YIHE"
            className="h-[380px] lg:h-[430px] w-full rounded-3xl object-cover shadow-2xl"
          />

          {/* CARD 1 */}

          <div className="absolute -left-8 top-10 bg-white rounded-2xl shadow-xl px-5 py-4 flex gap-3 items-center">

            <Globe className="text-blue-700"/>

            <div>

              <h3 className="font-bold">
                25+
              </h3>

              <p className="text-sm text-gray-500">
                Countries Served
              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="absolute -right-8 bottom-20 bg-white rounded-2xl shadow-xl px-5 py-4 flex gap-3 items-center">

            <PackageCheck className="text-blue-700"/>

            <div>

              <h3 className="font-bold">
                500+
              </h3>

              <p className="text-sm text-gray-500">
                Shipments
              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-4 flex gap-3 items-center">

            <ShieldCheck className="text-green-600"/>

            <div>

              <h3 className="font-bold">
                100+
              </h3>

              <p className="text-sm text-gray-500">
                Trusted Suppliers
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}