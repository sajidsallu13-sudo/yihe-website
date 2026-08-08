import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-r from-[#081F4D] to-[#0E3A8A] py-24 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="text-5xl font-bold"
          >
            Our Services
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100 leading-8">
            We provide complete import-export solutions, sourcing,
            logistics and international trade services to help your
            business grow globally.
          </p>

        </div>

      </section>
      {/* ================= OUR SERVICES ================= */}

      <section className="py-20 bg-gray-50">

          <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

        <span className="inline-block rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
        What We Offer
      </span>

      <h2 className="mt-5 text-4xl font-bold text-gray-800">
        Complete International Trade Solutions
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-gray-600">
        From sourcing products to delivering them safely, YIHE provides
        end-to-end import and export solutions for global businesses.
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🌍",
          title: "Product Sourcing",
          desc: "Find reliable manufacturers and quality products directly from China."
        },
        {
          icon: "🏭",
          title: "Supplier Verification",
          desc: "Verify factories and suppliers before placing your orders."
        },
        {
          icon: "✅",
          title: "Quality Inspection",
          desc: "Professional product inspection before shipment."
        },
        {
          icon: "🚢",
          title: "Shipping & Logistics",
          desc: "Sea Freight, Air Freight and Door-to-Door delivery."
        },
        {
          icon: "📦",
          title: "Custom Packaging",
          desc: "OEM packaging and private label solutions."
        },
        {
          icon: "📑",
          title: "Customs Clearance",
          desc: "Complete documentation and customs support."
        },
        {
          icon: "🤝",
          title: "Business Consulting",
          desc: "Import-export guidance for new and growing businesses."
        },
        {
          icon: "📈",
          title: "Supply Chain Management",
          desc: "Efficient sourcing, warehousing and global distribution."
        }

      ].map((service, index) => (

        <div
          key={index}
          className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

          <div className="mb-6 text-5xl">
            {service.icon}
          </div>

          <h3 className="text-2xl font-bold text-[#081F4D]">
            {service.title}
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            {service.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= HOW WE WORK ================= */}

<section className="bg-[#081F4D] py-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-block rounded-full bg-cyan-400/10 border border-cyan-400/30 px-5 py-2 text-sm font-semibold text-cyan-300">
        Our Process
      </span>

      <h2 className="mt-5 text-4xl font-bold text-white">
        How We Work
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-blue-100">
        We follow a simple and transparent process to ensure every project
        is completed smoothly and efficiently.
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
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
          desc: "We handle logistics, customs support and ensure safe delivery to your destination.",
        },
      ].map((step, index) => (

        <div
          key={index}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
        >

          <div className="text-5xl font-extrabold text-cyan-400">
            {step.number}
          </div>

          <h3 className="mt-6 text-2xl font-bold text-white">
            {step.title}
          </h3>

          <p className="mt-4 leading-7 text-blue-100">
            {step.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= CTA SECTION ================= */}

<section className="py-20 bg-gray-50">

  <div className="max-w-6xl mx-auto px-6">

    <div className="rounded-3xl bg-gradient-to-r from-[#081F4D] to-[#0E3A8A] p-12 text-center shadow-2xl">

      <span className="inline-block rounded-full bg-cyan-400/20 px-5 py-2 text-sm font-semibold text-cyan-300">
        Let's Work Together
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
        Ready to Grow Your Business Globally?
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
        Whether you need product sourcing, supplier verification,
        quality inspection, logistics, or complete import-export
        solutions, our team is ready to help you every step of the way.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-5">

        <Link
          to="/quote"
          className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-[#081F4D] transition hover:bg-cyan-300"
        >
          Request a Quote
        </Link>

        <Link
          to="/contact"
          className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#081F4D]"
        >
          Contact Us
        </Link>

      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">

        <div>
          <h3 className="text-3xl font-bold text-cyan-300">
            500+
          </h3>
          <p className="mt-2 text-blue-100">
            Global Clients
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-cyan-300">
            1000+
          </h3>
          <p className="mt-2 text-blue-100">
            Successful Shipments
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-cyan-300">
            24/7
          </h3>
          <p className="mt-2 text-blue-100">
            Customer Support
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

    </>
  );
}