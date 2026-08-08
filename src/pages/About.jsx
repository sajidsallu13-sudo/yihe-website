import { motion } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function About() {
  return (
    <>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden pt-36 pb-28 bg-gradient-to-br from-[#081F4D] via-[#0B2F73] to-[#114DA8]">

        <div className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full bg-cyan-400/20 blur-[180px]" />

        <div className="absolute -bottom-60 -right-60 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-center"
          >

            <span className="inline-block px-6 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 uppercase tracking-wider text-sm font-semibold">

              About YIHE

            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold text-white leading-tight">

              Connecting Businesses

              <br />

              <span className="text-cyan-300">

                Across The World

              </span>

            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-blue-100 text-xl leading-9">

              YIHE International Trade Service helps businesses source
              high-quality products from trusted manufacturers with
              transparent pricing, quality assurance and worldwide logistics.

            </p>

          </motion.div>

          {/* Highlight Cards */}

          <div className="grid md:grid-cols-3 gap-6 mt-20">

            <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 text-center">

              <Globe2 className="mx-auto text-cyan-300" size={42} />

              <h3 className="mt-5 text-2xl font-bold text-white">

                Global Trade

              </h3>

              <p className="mt-3 text-blue-100">

                Worldwide Import & Export Solutions

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 text-center">

              <ShieldCheck className="mx-auto text-cyan-300" size={42} />

              <h3 className="mt-5 text-2xl font-bold text-white">

                Trusted Suppliers

              </h3>

              <p className="mt-3 text-blue-100">

                Verified Manufacturing Partners

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 text-center">

              <Building2 className="mx-auto text-cyan-300" size={42} />

              <h3 className="mt-5 text-2xl font-bold text-white">

                Business Growth

              </h3>

              <p className="mt-3 text-blue-100">

                Helping Companies Expand Globally

              </p>

            </div>

          </div>

        </div>

      </section>

            {/* ================= WHO WE ARE ================= */}

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-[#061734]"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side Image */}

            <div className="relative">

              <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-cyan-400/20 blur-3xl"></div>

              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900"
                alt="YIHE Team"
                className="relative rounded-[35px] shadow-2xl object-cover w-full h-[600px]"
              />

            </div>

            {/* Right Side */}

            <div>

              <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 uppercase tracking-wider text-sm font-semibold">

                Who We Are

              </span>

              <h2 className="mt-8 text-5xl font-bold text-white leading-tight">

                Your Trusted Global
                <br />

                Trade Partner

              </h2>

              <p className="mt-8 text-blue-100 text-lg leading-9">

                YIHE International Trade Service is committed to helping
                businesses source high-quality products from verified
                manufacturers across China and other global markets.

              </p>

              <p className="mt-6 text-blue-100 text-lg leading-9">

                From supplier identification and factory verification to
                quality inspection, logistics, customs support and
                international shipping, we provide complete end-to-end
                import & export solutions.

              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">

                <div className="rounded-2xl bg-white/10 border border-white/10 p-6">

                  <h3 className="text-4xl font-bold text-cyan-300">

                    500+

                  </h3>

                  <p className="mt-2 text-blue-100">

                    Verified Suppliers

                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 border border-white/10 p-6">

                  <h3 className="text-4xl font-bold text-cyan-300">

                    30+

                  </h3>

                  <p className="mt-2 text-blue-100">

                    Product Categories

                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 border border-white/10 p-6">

                  <h3 className="text-4xl font-bold text-cyan-300">

                    20+

                  </h3>

                  <p className="mt-2 text-blue-100">

                    Countries Served

                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 border border-white/10 p-6">

                  <h3 className="text-4xl font-bold text-cyan-300">

                    24/7

                  </h3>

                  <p className="mt-2 text-blue-100">

                    Customer Support

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.section>

            {/* ================= MISSION & VISION ================= */}

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-28 bg-gradient-to-b from-[#081F4D] to-[#061734]"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 uppercase tracking-wider text-sm font-semibold">

              Our Mission

            </span>

            <h2 className="mt-8 text-5xl font-bold text-white">

              Building Strong Global
              Business Connections

            </h2>

            <p className="mt-8 text-blue-100 text-lg leading-9">

              Our mission is to simplify international trade by connecting
              businesses with trusted manufacturers, ensuring quality,
              transparency and cost-effective global sourcing.

            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-20">

            {/* Mission */}

            <div className="rounded-[35px] border border-white/10 bg-white/10 backdrop-blur-xl p-10 hover:border-cyan-300 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center text-cyan-300 text-3xl">

                🎯

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">

                Our Mission

              </h3>

              <p className="mt-6 text-blue-100 leading-9 text-lg">

                To provide reliable sourcing solutions, verified supplier
                networks, quality inspection and smooth international
                logistics for businesses worldwide.

              </p>

            </div>

            {/* Vision */}

            <div className="rounded-[35px] border border-white/10 bg-white/10 backdrop-blur-xl p-10 hover:border-cyan-300 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center text-cyan-300 text-3xl">

                🌍

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">

                Our Vision

              </h3>

              <p className="mt-6 text-blue-100 leading-9 text-lg">

                To become one of the world's most trusted international
                trade partners by delivering transparency, innovation,
                efficiency and long-term business relationships.

              </p>

            </div>

          </div>

          {/* Core Values */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            <div className="rounded-3xl bg-white/10 border border-white/10 p-8 text-center hover:-translate-y-2 transition">

              <div className="text-5xl">🤝</div>

              <h4 className="mt-5 text-2xl font-bold text-white">

                Trust

              </h4>

              <p className="mt-3 text-blue-100">

                Honest & Transparent Business

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 border border-white/10 p-8 text-center hover:-translate-y-2 transition">

              <div className="text-5xl">⭐</div>

              <h4 className="mt-5 text-2xl font-bold text-white">

                Quality

              </h4>

              <p className="mt-3 text-blue-100">

                Verified Manufacturing Partners

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 border border-white/10 p-8 text-center hover:-translate-y-2 transition">

              <div className="text-5xl">⚡</div>

              <h4 className="mt-5 text-2xl font-bold text-white">

                Efficiency

              </h4>

              <p className="mt-3 text-blue-100">

                Fast Sourcing & Logistics

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 border border-white/10 p-8 text-center hover:-translate-y-2 transition">

              <div className="text-5xl">🌎</div>

              <h4 className="mt-5 text-2xl font-bold text-white">

                Global Reach

              </h4>

              <p className="mt-3 text-blue-100">

                Worldwide Trade Solutions

              </p>

            </div>

          </div>

        </div>

      </motion.section>

            {/* ================= GLOBAL PRESENCE ================= */}

      <section className="py-28 bg-[#061734]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 uppercase tracking-wider text-sm font-semibold">

              Global Presence

            </span>

            <h2 className="mt-8 text-5xl font-bold text-white">

              Serving Businesses
              Across The World

            </h2>

            <p className="mt-8 text-blue-100 text-lg leading-9">

              We connect international buyers with trusted manufacturers,
              ensuring quality products, competitive pricing and reliable
              logistics solutions.

            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            <div className="rounded-3xl bg-white/10 border border-white/10 p-8 text-center">

              <h3 className="text-5xl font-bold text-cyan-300">

                500+

              </h3>

              <p className="mt-4 text-blue-100">

                Verified Suppliers

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 border border-white/10 p-8 text-center">

              <h3 className="text-5xl font-bold text-cyan-300">

                20+

              </h3>

              <p className="mt-4 text-blue-100">

                Countries

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 border border-white/10 p-8 text-center">

              <h3 className="text-5xl font-bold text-cyan-300">

                30+

              </h3>

              <p className="mt-4 text-blue-100">

                Product Categories

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 border border-white/10 p-8 text-center">

              <h3 className="text-5xl font-bold text-cyan-300">

                24/7

              </h3>

              <p className="mt-4 text-blue-100">

                Business Support

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#081F4D] via-[#0B2F73] to-[#114DA8]">

        <div className="absolute -top-40 left-0 w-96 h-96 rounded-full bg-cyan-400/20 blur-[150px]" />

        <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-blue-500/20 blur-[150px]" />

        <div className="relative max-w-5xl mx-auto px-6">

          <div className="rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-xl p-16 text-center">

            <h2 className="text-5xl font-bold text-white">

              Ready To Start Your
              Global Business Journey?

            </h2>

            <p className="mt-8 text-blue-100 text-xl leading-9">

              Let YIHE International Trade Service help you source
              quality products, connect with trusted manufacturers
              and expand your business worldwide.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <a
                href="/quote"
                className="rounded-full bg-cyan-400 px-10 py-4 text-lg font-bold text-[#081F4D] hover:bg-cyan-300 transition shadow-[0_0_35px_rgba(34,211,238,.35)]"
              >

                Request Free Quote

              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/20 px-10 py-4 text-lg text-white hover:bg-white/10 transition"
              >

                Contact Us

              </a>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}