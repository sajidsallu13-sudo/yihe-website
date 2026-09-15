import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  Building2,
  Target,
  Eye,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  return (
    <div
      className="
        bg-[#061734]
        scroll-smooth

        lg:h-[calc(100vh-5rem)]
        lg:overflow-y-auto
        lg:snap-y
        lg:snap-mandatory
      "
    >
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#081F4D]
          via-[#0B2F73]
          to-[#114DA8]

          px-4
          sm:px-6

          py-10
          sm:py-12
          md:py-14

          lg:py-8
          lg:min-h-[calc(100vh-5rem)]
          lg:snap-start
          lg:flex
          lg:items-center
        "
      >
        {/* Background Effects */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-80 h-80 sm:w-96 sm:h-96 bg-cyan-400/10 rounded-full blur-3xl" />

          <div className="absolute -bottom-32 -right-32 w-80 h-80 sm:w-96 sm:h-96 bg-blue-400/10 rounded-full blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="
                inline-flex
                items-center
                px-4
                py-1.5
                rounded-full
                border
                border-cyan-400/40
                bg-cyan-400/10
                text-cyan-300
                text-[11px]
                sm:text-xs
                font-semibold
                tracking-wide
              "
            >
              ABOUT YIHE
            </span>

            <h1
              className="
                mt-4
                sm:mt-5

                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                font-extrabold
                text-white
                leading-[1.08]
              "
            >
              Connecting Businesses
              <br />
              <span className="text-cyan-300">
                Across The World
              </span>
            </h1>

            <p
              className="
                mt-4
                sm:mt-5

                max-w-2xl
                mx-auto

                text-sm
                sm:text-base
                md:text-lg

                text-blue-100
                leading-6
                md:leading-7
              "
            >
              Yihe Group connects global businesses with trusted
              manufacturers, competitive pricing and reliable supply chain
              solutions from China.
            </p>
          </motion.div>

          {/* Highlight Cards */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3

              gap-3
              sm:gap-4

              mt-7
              lg:mt-8
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              whileHover={{ y: -4 }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.08]
                backdrop-blur-md
                p-4
                sm:p-5
              "
            >
              <Globe2 className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-300 mx-auto mb-3" />

              <h3 className="text-base sm:text-lg font-bold text-white">
                Global Trade
              </h3>

              <p className="mt-1.5 text-blue-100 text-xs sm:text-sm">
                Connecting buyers and suppliers worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              whileHover={{ y: -4 }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.08]
                backdrop-blur-md
                p-4
                sm:p-5
              "
            >
              <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-300 mx-auto mb-3" />

              <h3 className="text-base sm:text-lg font-bold text-white">
                Trusted Factories
              </h3>

              <p className="mt-1.5 text-blue-100 text-xs sm:text-sm">
                Verified manufacturing partners across China.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              whileHover={{ y: -4 }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.08]
                backdrop-blur-md
                p-4
                sm:p-5
              "
            >
              <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-300 mx-auto mb-3" />

              <h3 className="text-base sm:text-lg font-bold text-white">
                Business Growth
              </h3>

              <p className="mt-1.5 text-blue-100 text-xs sm:text-sm">
                Helping businesses source and scale globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}

      <section
        className="
          bg-[#061734]

          px-4
          sm:px-6

          py-10
          sm:py-12
          md:py-14

          lg:py-8
          lg:min-h-[calc(100vh-5rem)]
          lg:snap-start
          lg:flex
          lg:items-center
        "
      >
        <div className="max-w-6xl mx-auto w-full">
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2

              gap-7
              md:gap-9
              lg:gap-10

              items-center
            "
          >
            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-cyan-400/10 rounded-3xl blur-2xl" />

              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80"
                alt="Manufacturing facility"
                className="
                  relative
                  w-full

                  h-[240px]
                  sm:h-[300px]
                  md:h-[340px]
                  lg:h-[390px]

                  object-cover
                  rounded-2xl
                  sm:rounded-3xl
                  border
                  border-white/10
                "
              />
            </motion.div>

            {/* Content */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="
                  inline-flex
                  px-4
                  py-1.5
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-cyan-400/10
                  text-cyan-300
                  text-[11px]
                  sm:text-xs
                  font-semibold
                "
              >
                WHO WE ARE
              </span>

              <h2
                className="
                  mt-4

                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-extrabold
                  text-white
                  leading-tight
                "
              >
                Your Trusted Global
                <br />
                <span className="text-cyan-300">
                  Trade Partner
                </span>
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  text-blue-100
                  leading-6
                  sm:leading-7
                "
              >
                Based in Foshan, China, Yihe Group operates at the heart of
                Guangdong's manufacturing ecosystem.
              </p>

              <p
                className="
                  mt-2.5
                  text-sm
                  sm:text-base
                  text-blue-100
                  leading-6
                  sm:leading-7
                "
              >
                We connect international buyers with trusted factories,
                professional quality control, competitive sourcing and
                end-to-end import and export solutions.
              </p>

              {/* Stats */}

              <div className="grid grid-cols-2 gap-3 mt-5 sm:mt-6">
                <div className="rounded-xl bg-white/[0.08] border border-white/10 p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">
                    2000+
                  </div>

                  <div className="text-xs sm:text-sm text-blue-100 mt-1">
                    Verified Factories
                  </div>
                </div>

                <div className="rounded-xl bg-white/[0.08] border border-white/10 p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">
                    30+
                  </div>

                  <div className="text-xs sm:text-sm text-blue-100 mt-1">
                    Product Categories
                  </div>
                </div>

                <div className="rounded-xl bg-white/[0.08] border border-white/10 p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">
                    15+
                  </div>

                  <div className="text-xs sm:text-sm text-blue-100 mt-1">
                    Countries Served
                  </div>
                </div>

                <div className="rounded-xl bg-white/[0.08] border border-white/10 p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-300">
                    24/7
                  </div>

                  <div className="text-xs sm:text-sm text-blue-100 mt-1">
                    Customer Support
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}

      <section
        className="
          bg-gradient-to-br
          from-[#0B2F73]
          to-[#061734]

          px-4
          sm:px-6

          py-10
          sm:py-12
          md:py-14

          lg:py-8
          lg:min-h-[calc(100vh-5rem)]
          lg:snap-start
          lg:flex
          lg:items-center
        "
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="
                inline-flex
                px-4
                py-1.5
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-400/10
                text-cyan-300
                text-[11px]
                sm:text-xs
                font-semibold
              "
            >
              OUR MISSION
            </span>

            <h2
              className="
                mt-4

                text-3xl
                sm:text-4xl
                lg:text-5xl

                font-extrabold
                text-white
                leading-tight
              "
            >
              Our Dual-Presence
              <br />
              <span className="text-cyan-300">
                Operational Model
              </span>
            </h2>

            <p
              className="
                mt-4
                text-sm
                sm:text-base
                text-blue-100
                leading-6
                sm:leading-7
                max-w-2xl
                mx-auto
              "
            >
              Our team combines international business expertise with direct
              presence on the factory floor, ensuring quality, transparency and
              smooth execution at every stage.
            </p>
          </div>

          {/* Mission / Vision */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-7">
            <motion.div
              whileHover={{ y: -4 }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.08]
                backdrop-blur-md
                p-5
                sm:p-6
              "
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-cyan-300" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-2.5 text-sm sm:text-base text-blue-100 leading-6">
                To make global sourcing simpler, safer and more efficient by
                providing direct factory access, quality assurance and reliable
                international trade support.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.08]
                backdrop-blur-md
                p-5
                sm:p-6
              "
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-cyan-300" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-2.5 text-sm sm:text-base text-blue-100 leading-6">
                To become a trusted global bridge between international
                businesses and China's manufacturing capabilities.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4

              gap-3
              sm:gap-4

              mt-5
            "
          >
            <div className="rounded-xl bg-white/[0.08] border border-white/10 p-3 sm:p-4 text-center">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300 mx-auto mb-2" />

              <h4 className="text-sm sm:text-base font-bold text-white">
                Trust
              </h4>

              <p className="text-[11px] sm:text-xs md:text-sm text-blue-100 mt-1">
                Transparent Business
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.08] border border-white/10 p-3 sm:p-4 text-center">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300 mx-auto mb-2" />

              <h4 className="text-sm sm:text-base font-bold text-white">
                Quality
              </h4>

              <p className="text-[11px] sm:text-xs md:text-sm text-blue-100 mt-1">
                Verified Partners
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.08] border border-white/10 p-3 sm:p-4 text-center">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300 mx-auto mb-2" />

              <h4 className="text-sm sm:text-base font-bold text-white">
                Efficiency
              </h4>

              <p className="text-[11px] sm:text-xs md:text-sm text-blue-100 mt-1">
                Fast Sourcing
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.08] border border-white/10 p-3 sm:p-4 text-center">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300 mx-auto mb-2" />

              <h4 className="text-sm sm:text-base font-bold text-white">
                Global Reach
              </h4>

              <p className="text-[11px] sm:text-xs md:text-sm text-blue-100 mt-1">
                Worldwide Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GLOBAL PRESENCE
      ========================================================= */}

      <section
        className="
          bg-[#061734]

          px-4
          sm:px-6

          py-10
          sm:py-12
          md:py-14

          lg:py-8
          lg:min-h-[calc(100vh-5rem)]
          lg:snap-start
          lg:flex
          lg:items-center
        "
      >
        <div className="max-w-6xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="
                inline-flex
                px-4
                py-1.5
                rounded-full
                border
                border-cyan-400/40
                bg-cyan-400/10
                text-cyan-300
                text-[11px]
                sm:text-xs
                font-semibold
              "
            >
              GLOBAL PRESENCE
            </span>

            <h2
              className="
                mt-4

                text-3xl
                sm:text-4xl
                lg:text-5xl

                font-extrabold
                text-white
                leading-tight
              "
            >
              Serving Businesses Worldwide
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                mx-auto

                text-sm
                sm:text-base

                text-blue-100
                leading-6
                sm:leading-7
              "
            >
              Connecting international buyers with trusted manufacturers,
              competitive pricing and reliable logistics.
            </p>
          </motion.div>

          {/* Global Stats */}

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4

              gap-3
              sm:gap-4

              mt-7
              lg:mt-8
            "
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white/[0.08] border border-white/10 p-4 sm:p-5"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-300">
                500+
              </div>

              <p className="mt-1.5 text-xs sm:text-sm md:text-base text-white font-medium">
                Verified Suppliers
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white/[0.08] border border-white/10 p-4 sm:p-5"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-300">
                20+
              </div>

              <p className="mt-1.5 text-xs sm:text-sm md:text-base text-white font-medium">
                Countries
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white/[0.08] border border-white/10 p-4 sm:p-5"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-300">
                30+
              </div>

              <p className="mt-1.5 text-xs sm:text-sm md:text-base text-white font-medium">
                Product Categories
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white/[0.08] border border-white/10 p-4 sm:p-5"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-300">
                24/7
              </div>

              <p className="mt-1.5 text-xs sm:text-sm md:text-base text-white font-medium">
                Business Support
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section
        className="
          bg-gradient-to-br
          from-[#081F4D]
          via-[#0B2F73]
          to-[#114DA8]

          px-4
          sm:px-6

          py-12
          md:py-14

          lg:py-8
          lg:min-h-[calc(100vh-5rem)]
          lg:snap-start
          lg:flex
          lg:items-center
        "
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <span
            className="
              inline-flex
              px-4
              py-1.5
              rounded-full
              border
              border-cyan-400/40
              bg-cyan-400/10
              text-cyan-300
              text-[11px]
              sm:text-xs
              font-semibold
            "
          >
            LET'S WORK TOGETHER
          </span>

          <h2
            className="
              mt-4

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl

              font-extrabold
              text-white
              leading-[1.1]
            "
          >
            Ready To Start Your
            <br className="hidden sm:block" />

            <span className="sm:ml-2 text-cyan-300">
              Global Business Journey?
            </span>
          </h2>

          <p
            className="
              mt-4
              sm:mt-5

              max-w-2xl
              mx-auto

              text-sm
              sm:text-base
              md:text-lg

              text-blue-100
              leading-6
              md:leading-7
            "
          >
            Tell us what you need and our China sourcing team will help you
            find the right products, factories and logistics solutions.
          </p>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center

              gap-3
              sm:gap-4

              mt-6
              sm:mt-7
            "
          >
            <a
              href="/quote"
              className="
                w-full
                sm:w-auto

                px-7
                py-3

                rounded-xl
                bg-cyan-400
                text-[#061734]

                font-bold

                hover:bg-cyan-300
                transition-all
                duration-300
              "
            >
              Get A Quote
            </a>

            <a
              href="/contact"
              className="
                w-full
                sm:w-auto

                px-7
                py-3

                rounded-xl
                border
                border-white/30

                text-white
                font-bold

                hover:bg-white/10
                transition-all
                duration-300
              "
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;