import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: "🌍",
      title: "Product Sourcing",
      desc: "Find reliable manufacturers and quality products directly from China.",
    },
    {
      icon: "🏭",
      title: "Supplier Verification",
      desc: "Verify factories and suppliers before placing your orders.",
    },
    {
      icon: "✅",
      title: "Quality Inspection",
      desc: "Professional product inspection before shipment.",
    },
    {
      icon: "🚢",
      title: "Shipping & Logistics",
      desc: "Sea Freight, Air Freight and Door-to-Door delivery.",
    },
    {
      icon: "📦",
      title: "Custom Packaging",
      desc: "OEM packaging and private label solutions.",
    },
    {
      icon: "📑",
      title: "Customs Clearance",
      desc: "Complete documentation and customs support.",
    },
    {
      icon: "🤝",
      title: "Business Consulting",
      desc: "Import-export guidance for new and growing businesses.",
    },
    {
      icon: "📈",
      title: "Supply Chain Management",
      desc: "Efficient sourcing, warehousing and global distribution.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Share Your Requirement",
      desc: "Tell us the product details, quantity, specifications and your target price.",
    },
    {
      number: "02",
      title: "Supplier & Product Sourcing",
      desc: "Our team finds reliable manufacturers and provides the best quotations.",
    },
    {
      number: "03",
      title: "Inspection & Production",
      desc: "We monitor production and arrange quality inspections before shipment.",
    },
    {
      number: "04",
      title: "Shipping & Delivery",
      desc: "We handle logistics, customs support and safe delivery to your destination.",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-r
          from-[#081F4D]
          via-[#0B2F73]
          to-[#0E3A8A]

          py-10
          sm:py-12
          md:py-14
          lg:py-16

          text-white
        "
      >
        {/* Background Glow */}

        <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="
                inline-block
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-400/10
                px-4
                py-1.5
                text-[11px]
                sm:text-xs
                font-semibold
                tracking-wide
                uppercase
                text-cyan-300
              "
            >
              YIHE Services
            </span>

            <h1
              className="
                mt-4

                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                font-extrabold
                leading-tight
              "
            >
              Our
              <span className="text-cyan-300"> Services</span>
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
              We provide complete import-export solutions, sourcing,
              logistics and international trade services to help your
              business grow globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}

      <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}

          <div className="text-center mb-7 sm:mb-9">
            <span
              className="
                inline-block
                rounded-full
                bg-cyan-100
                px-4
                py-1.5
                text-[11px]
                sm:text-xs
                font-semibold
                text-cyan-700
              "
            >
              WHAT WE OFFER
            </span>

            <h2
              className="
                mt-4

                text-2xl
                sm:text-3xl
                md:text-4xl

                font-bold
                text-gray-800
                leading-tight
              "
            >
              Complete International Trade Solutions
            </h2>

            <p
              className="
                mt-3
                sm:mt-4

                max-w-2xl
                mx-auto

                text-sm
                sm:text-base

                text-gray-600
                leading-6
              "
            >
              From sourcing products to delivering them safely, YIHE provides
              end-to-end import and export solutions for global businesses.
            </p>
          </div>

          {/* Service Cards */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4

              gap-4
              sm:gap-5
            "
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                whileHover={{ y: -5 }}
                className="
                  rounded-2xl
                  bg-white

                  p-5
                  sm:p-6

                  border
                  border-gray-100

                  shadow-md
                  hover:shadow-xl

                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-11
                    h-11
                    sm:w-12
                    sm:h-12

                    rounded-xl
                    bg-cyan-50

                    flex
                    items-center
                    justify-center

                    text-2xl
                    sm:text-3xl
                  "
                >
                  {service.icon}
                </div>

                <h3
                  className="
                    mt-4

                    text-lg
                    sm:text-xl

                    font-bold
                    text-[#081F4D]
                    leading-snug
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-2

                    text-sm
                    sm:text-[15px]

                    leading-6
                    text-gray-600
                  "
                >
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}

      <section className="bg-[#081F4D] py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}

          <div className="text-center mb-7 sm:mb-9">
            <span
              className="
                inline-block
                rounded-full
                bg-cyan-400/10
                border
                border-cyan-400/30

                px-4
                py-1.5

                text-[11px]
                sm:text-xs

                font-semibold
                text-cyan-300
              "
            >
              OUR PROCESS
            </span>

            <h2
              className="
                mt-4

                text-2xl
                sm:text-3xl
                md:text-4xl

                font-bold
                text-white
              "
            >
              How We Work
            </h2>

            <p
              className="
                mt-3
                sm:mt-4

                max-w-2xl
                mx-auto

                text-sm
                sm:text-base

                text-blue-100
                leading-6
              "
            >
              We follow a simple and transparent process to ensure every
              project is completed smoothly and efficiently.
            </p>
          </div>

          {/* Steps */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4

              gap-4
              sm:gap-5
            "
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -5 }}
                className="
                  relative
                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.06]
                  backdrop-blur-md

                  p-5
                  sm:p-6

                  hover:border-cyan-400/60

                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    text-3xl
                    sm:text-4xl

                    font-extrabold
                    text-cyan-400
                  "
                >
                  {step.number}
                </div>

                <h3
                  className="
                    mt-4

                    text-lg
                    sm:text-xl

                    font-bold
                    text-white
                    leading-snug
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-2.5

                    text-sm
                    sm:text-[15px]

                    leading-6
                    text-blue-100
                  "
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              overflow-hidden

              rounded-2xl
              sm:rounded-3xl

              bg-gradient-to-r
              from-[#081F4D]
              via-[#0B2F73]
              to-[#0E3A8A]

              px-5
              py-8

              sm:px-8
              sm:py-9

              md:px-10
              md:py-10

              text-center
              shadow-xl
            "
          >
            {/* Glow */}

            <div className="absolute -top-28 -right-28 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <span
                className="
                  inline-block
                  rounded-full
                  bg-cyan-400/15
                  border
                  border-cyan-400/20

                  px-4
                  py-1.5

                  text-[11px]
                  sm:text-xs

                  font-semibold
                  text-cyan-300
                "
              >
                LET'S WORK TOGETHER
              </span>

              <h2
                className="
                  mt-4

                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl

                  font-bold
                  text-white
                  leading-tight
                "
              >
                Ready to Grow Your
                <br className="hidden sm:block" />
                <span className="sm:ml-2 text-cyan-300">
                  Business Globally?
                </span>
              </h2>

              <p
                className="
                  mt-4

                  max-w-2xl
                  mx-auto

                  text-sm
                  sm:text-base

                  leading-6
                  text-blue-100
                "
              >
                Whether you need product sourcing, supplier verification,
                quality inspection, logistics or complete import-export
                solutions, our team is ready to support you.
              </p>

              {/* Buttons */}

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  sm:flex-row
                  justify-center

                  gap-3
                  sm:gap-4
                "
              >
                <Link
                  to="/quote"
                  className="
                    w-full
                    sm:w-auto

                    rounded-xl

                    bg-cyan-400

                    px-7
                    py-3

                    font-semibold
                    text-[#081F4D]

                    hover:bg-cyan-300

                    transition
                  "
                >
                  Request a Quote
                </Link>

                <Link
                  to="/contact"
                  className="
                    w-full
                    sm:w-auto

                    rounded-xl

                    border
                    border-white/40

                    px-7
                    py-3

                    font-semibold
                    text-white

                    hover:bg-white
                    hover:text-[#081F4D]

                    transition
                  "
                >
                  Contact Us
                </Link>
              </div>

              {/* Stats */}

              <div
                className="
                  mt-7

                  grid
                  grid-cols-3

                  gap-2
                  sm:gap-5

                  border-t
                  border-white/10

                  pt-6
                "
              >
                <div>
                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      md:text-3xl

                      font-bold
                      text-cyan-300
                    "
                  >
                    500+
                  </h3>

                  <p
                    className="
                      mt-1

                      text-[11px]
                      sm:text-sm

                      text-blue-100
                    "
                  >
                    Global Clients
                  </p>
                </div>

                <div>
                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      md:text-3xl

                      font-bold
                      text-cyan-300
                    "
                  >
                    1000+
                  </h3>

                  <p
                    className="
                      mt-1

                      text-[11px]
                      sm:text-sm

                      text-blue-100
                    "
                  >
                    Shipments
                  </p>
                </div>

                <div>
                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      md:text-3xl

                      font-bold
                      text-cyan-300
                    "
                  >
                    24/7
                  </h3>

                  <p
                    className="
                      mt-1

                      text-[11px]
                      sm:text-sm

                      text-blue-100
                    "
                  >
                    Support
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}