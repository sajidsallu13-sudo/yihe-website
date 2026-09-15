import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FolderTree, ArrowRight } from "lucide-react";

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

function TreeCard({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="h-1 bg-gradient-to-r from-blue-700 via-cyan-500 to-yellow-400" />

      <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 sm:px-5 sm:py-4">
        <div className="rounded-xl bg-blue-100 p-2.5">
          <FolderTree className="text-blue-700" size={22} />
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-900 sm:text-lg">Product Directory</h3>
          <p className="text-xs text-slate-500 sm:text-sm">Click any category to explore</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-1 p-3 sm:gap-x-2 sm:p-4 lg:grid-cols-1">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <Link
              key={item.slug}
              to={`/products#${item.slug}`}
              className="group flex min-w-0 items-center justify-between rounded-lg px-2 py-2 transition-all duration-300 hover:bg-blue-50 sm:px-3"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="hidden shrink-0 font-mono text-slate-400 sm:inline">
                  {last ? "└──" : "├──"}
                </span>
                <span className="min-w-0 text-xs font-medium leading-5 text-slate-700 transition group-hover:text-blue-700 sm:text-sm">
                  {item.name}
                </span>
              </div>
              <ArrowRight
                size={15}
                className="ml-1 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700"
              />
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function ProductCategories() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10 sm:py-12 lg:py-14">
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-300 opacity-20 blur-[160px]" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-300 opacity-20 blur-[160px]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(to right, #1e40af 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-7 text-center sm:mb-9"
        >
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[3px] text-blue-700 sm:text-xs">
            Our Products
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Product Categories
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore our wide range of products sourced from trusted
            manufacturers worldwide. Click any category to learn more.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2">
          <TreeCard items={leftProducts} />
          <TreeCard items={rightProducts} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-7 text-center sm:mt-8"
        >
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Looking for a Specific Product?
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Our sourcing experts help you find reliable manufacturers,
            verify suppliers and manage complete import & export solutions.
          </p>

          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/products"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl sm:w-auto sm:text-base"
            >
              Explore Complete Catalogue
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              to="/quote"
              className="w-full rounded-full border-2 border-blue-700 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white sm:w-auto sm:text-base"
            >
              Get Free Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
