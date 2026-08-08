import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import products from "./data/products";

const categories = [
  "All",
  "Footwear",
  "Garments",
  "Machinery",
  "Electronics",
  "Home Decor",
  "Agriculture",
  "Furniture",
  "Toys",
  "Cosmetics",
  "LED Lighting",
  "Building Materials",
  "Auto Parts",
  "Mobile Accessories",
  "Kitchenware",
  "Industrial Equipment",
  "Packaging",
  "Medical",
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      activeCategory === "All" || product.category === activeCategory;

    const searchMatch =
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#081F4D] via-[#0B2F73] to-[#114DA8] pt-36 pb-28">

        <div className="absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[170px]" />

        <div className="absolute -bottom-48 -right-48 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[170px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-2 text-sm uppercase tracking-widest text-cyan-300">

              Our Products

            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold text-white">

              Premium Global

              <br />

              Product Catalogue

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">

              Discover premium products sourced directly from trusted
              manufacturers across China with quality assurance and
              international shipping.

            </p>

          </motion.div>

          {/* Search */}

          <div className="mx-auto mt-16 max-w-3xl">

            <div className="relative">

              <Search
                size={22}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-16 w-full rounded-full bg-white pl-16 pr-6 text-gray-800 shadow-2xl outline-none focus:ring-4 focus:ring-cyan-300"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= CATEGORY FILTER ================= */}

      <section className="bg-[#061734] py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-4">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-3 font-semibold transition

                ${
                  activeCategory === category
                    ? "bg-cyan-400 text-[#081F4D]"
                    : "bg-white/10 text-white hover:bg-cyan-400 hover:text-[#081F4D]"
                }
                `}
              >

                {category}

              </button>

            ))}

          </div>

        </div>

      </section>

            {/* ================= PRODUCTS ================= */}

      <section className="bg-[#081F4D] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-cyan-300 uppercase tracking-widest text-sm">

              Featured Products

            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">

              Browse Our Product Collection

            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg leading-8">

              Explore our wide range of export-quality products from verified manufacturers.

            </p>

          </div>

          {/* Product Grid */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {filteredProducts.map((product) => (

              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl"
              >

                <div className="overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                <div className="p-6">

                  <span className="text-sm uppercase text-cyan-300">

                    {product.category}

                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">

                    {product.title}

                  </h3>

                  <p className="mt-4 text-blue-100 leading-7">

                    {product.description}

                  </p>

                  <div className="mt-8 flex gap-3">

                    <Link
                      to={`/products/${product.id}`}
                      className="flex-1 rounded-xl border border-cyan-400 py-3 text-center text-cyan-300 transition hover:bg-cyan-400 hover:text-[#081F4D]"
                    >

                      View Details

                    </Link>

                    <Link
                      to="/quote"
                      state={{ product: product.title }}
                      className="flex-1 rounded-xl bg-cyan-400 py-3 text-center font-semibold text-[#081F4D] transition hover:bg-cyan-300"
                    >

                      Get Quote

                    </Link>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

          {/* Empty State */}

          {filteredProducts.length === 0 && (

            <div className="py-24 text-center">

              <h2 className="text-4xl font-bold text-white">

                No Products Found

              </h2>

              <p className="mt-5 text-blue-100">

                Try another keyword or category.

              </p>

            </div>

          )}

        </div>

      </section>

    </> 
  );
}