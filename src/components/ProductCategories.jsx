import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FolderTree, ArrowRight } from "lucide-react";

// =============================
// LEFT PRODUCT LIST
// =============================

const leftProducts = [
  { name: "Footwear", slug: "footwear" },
  { name: "Garments", slug: "garments" },
  { name: "Machinery", slug: "machinery" },
  { name: "Electronics", slug: "electronics" },
  { name: "Home Decor", slug: "home-decor" },
  { name: "Agriculture", slug: "agriculture" },
  { name: "Furniture", slug: "furniture" },
  { name: "Toys", slug: "toys" },
];

// =============================
// RIGHT PRODUCT LIST
// =============================

const rightProducts = [
  { name: "Cosmetics", slug: "cosmetics" },
  { name: "LED Lighting", slug: "led-lighting" },
  { name: "Building Materials", slug: "building-materials" },
  { name: "Bicycle & Auto Parts", slug: "bicycle-auto-parts" },
  { name: "Mobile Accessories", slug: "mobile-accessories" },
  { name: "Kitchenware", slug: "kitchenware" },
  { name: "Industrial Equipment", slug: "industrial-equipment" },
  { name: "Packaging Materials", slug: "packaging-materials" },
  { name: "Medical Equipment", slug: "medical" },
];

// =============================
// TREE CARD
// =============================

function TreeCard({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-3xl
      bg-white border border-slate-200 shadow-xl
      hover:shadow-2xl transition-all duration-500"
    >
      {/* Gradient Top Border */}

      <div className="h-1 bg-gradient-to-r from-blue-700 via-cyan-500 to-yellow-400" />

      {/* Header */}

      <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-4">

        <div className="rounded-2xl bg-blue-100 p-3">

          <FolderTree className="text-blue-700" size={28} />

        </div>

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            Product Directory
          </h3>

          <p className="text-sm text-slate-500">
            Click any category to explore
          </p>

        </div>

      </div>

      {/* Tree List */}

      <div className="p-5">

        {items.map((item, index) => {

          const last = index === items.length - 1;

          return (

            <Link
              key={item.slug}
              to={`/products#${item.slug}`}
              className="group flex items-center justify-between
              rounded-xl px-3 py-2 mb-1
              transition-all duration-300
              hover:bg-blue-50"
            >

              <div className="flex items-center gap-3">

                <span className="font-mono text-slate-400">
                  {last ? "└──" : "├──"}
                </span>

                <span
                  className="font-medium text-slate-700
                  transition-all duration-300
                  group-hover:text-blue-700
                  group-hover:translate-x-1"
                >
                  {item.name}
                </span>

              </div>

              <ArrowRight
                size={18}
                className="text-slate-400
                transition-all duration-300
                group-hover:text-blue-700
                group-hover:translate-x-1"
              />

            </Link>

          );

        })}

      </div>

    </motion.div>
  );
}

// ===================================================
// MAIN COMPONENT
// ===================================================

export default function ProductCategories() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-14">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-300 blur-[180px] opacity-20"></div>

      <div className="absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-cyan-300 blur-[180px] opacity-20"></div>

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(to right, #1e40af 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >

          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-blue-700">
            Our Products
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
            Product Categories
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-base leading-6 text-slate-600">
            Explore our wide range of products sourced from trusted
            manufacturers worldwide. Click any category to learn more.
          </p>

        </motion.div>

        {/* ================= TREE ================= */}

        <div className="grid gap-5 lg:grid-cols-2">

          <TreeCard items={leftProducts} />

          <TreeCard items={rightProducts} />

        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >

          <h3 className="text-2xl font-bold text-slate-900">
            Looking for a Specific Product?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Our sourcing experts help you find reliable manufacturers,
            verify suppliers and manage complete import & export solutions.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-4">

            <Link
              to="/products"
              className="group inline-flex items-center gap-3 rounded-full
              bg-gradient-to-r from-blue-700 to-blue-900
              px-8 py-4 font-semibold text-white
              shadow-xl transition-all duration-300
              hover:scale-105 hover:shadow-2xl"
            >
              Explore Complete Catalogue

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="rounded-full border-2 border-blue-700
              px-8 py-4 font-semibold text-blue-700
              transition-all duration-300
              hover:bg-blue-700 hover:text-white"
            >
              Get Free Quote
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}