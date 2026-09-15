import { useState, useEffect } from "react";
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
      activeCategory === "All" ||
      product.category === activeCategory;

    const searchMatch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.description
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // ================================
  // AUTO SCROLL TO FIRST MATCHING CARD
  // ================================

  useEffect(() => {
    if (
      filteredProducts.length > 0 &&
      (search.trim() !== "" || activeCategory !== "All")
    ) {
      const timer = setTimeout(() => {
        const firstProduct = document.getElementById(
          `product-${filteredProducts[0].id}`
        );

        if (firstProduct) {
          firstProduct.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [search, activeCategory, filteredProducts]);

  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="
          relative
          overflow-hidden

          bg-gradient-to-br
          from-[#081F4D]
          via-[#0B2F73]
          to-[#114DA8]

          py-10
          sm:py-12
          md:py-14
          lg:py-16
        "
      >
        {/* Background Glow */}

        <div className="absolute -top-40 -left-40 h-[360px] w-[360px] md:h-[450px] md:w-[450px] rounded-full bg-cyan-400/20 blur-[150px]" />

        <div className="absolute -bottom-40 -right-40 h-[360px] w-[360px] md:h-[450px] md:w-[450px] rounded-full bg-blue-500/20 blur-[150px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
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

                uppercase
                tracking-widest
                font-semibold
                text-cyan-300
              "
            >
              Our Products
            </span>

            <h1
              className="
                mt-4
                sm:mt-5

                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                font-bold
                text-white
                leading-[1.1]
              "
            >
              Premium Global
              <br />
              <span className="text-cyan-300">
                Product Catalogue
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-4
                sm:mt-5

                max-w-2xl

                text-sm
                sm:text-base
                md:text-lg

                leading-6
                md:leading-7

                text-blue-100
              "
            >
              Discover premium products sourced directly from trusted
              manufacturers across China with quality assurance and
              international shipping.
            </p>
          </motion.div>

          {/* ================= SEARCH ================= */}

          <div className="mx-auto mt-6 sm:mt-8 max-w-2xl">
            <div className="relative">
              <Search
                size={19}
                className="
                  absolute
                  left-4
                  sm:left-5
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  h-12
                  sm:h-14

                  w-full

                  rounded-full
                  bg-white

                  pl-12
                  sm:pl-14
                  pr-5

                  text-sm
                  sm:text-base

                  text-gray-800

                  shadow-xl
                  outline-none

                  focus:ring-4
                  focus:ring-cyan-300/40

                  transition
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}

      <section
        className="
          bg-[#061734]

          py-4
          sm:py-5
          md:py-6

          border-b
          border-white/5
        "
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* MOBILE: HORIZONTAL SCROLL */}

          <div
            className="
              flex
              flex-nowrap

              md:flex-wrap
              md:justify-center

              gap-2
              sm:gap-3

              overflow-x-auto
              md:overflow-visible

              pb-2
              md:pb-0

              scroll-smooth
            "
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  flex-none

                  rounded-full

                  px-4
                  sm:px-5

                  py-2
                  sm:py-2.5

                  text-xs
                  sm:text-sm

                  font-semibold
                  whitespace-nowrap

                  border

                  transition-all
                  duration-300

                  ${
                    activeCategory === category
                      ? "bg-cyan-400 border-cyan-400 text-[#081F4D] shadow-md shadow-cyan-400/20"
                      : "bg-white/[0.07] border-white/10 text-white hover:bg-cyan-400 hover:border-cyan-400 hover:text-[#081F4D]"
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

      <section
        className="
          bg-[#081F4D]

          py-10
          sm:py-12
          md:py-14
          lg:py-16
        "
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section Heading */}

          <div className="text-center mb-7 sm:mb-9">
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

                text-cyan-300
                uppercase
                tracking-widest
                font-semibold
              "
            >
              Featured Products
            </span>

            <h2
              className="
                mt-4

                text-2xl
                sm:text-3xl
                md:text-4xl

                font-bold
                text-white
                leading-tight
              "
            >
              Browse Our Product Collection
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
              Explore our wide range of export-quality products from
              verified manufacturers.
            </p>

            {/* Product Count */}

            <p className="mt-3 text-xs sm:text-sm text-cyan-300">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "product"
                : "products"}{" "}
              found
            </p>
          </div>

          {/* ================= PRODUCT GRID ================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4

              gap-4
              sm:gap-5
              lg:gap-6
            "
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                id={`product-${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.03, 0.2),
                }}
                whileHover={{ y: -5 }}
                className="
                  group
                  overflow-hidden

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.08]
                  backdrop-blur-xl

                  shadow-lg

                  hover:border-cyan-400/30
                  hover:shadow-xl

                  transition-all
                  duration-300

                  scroll-mt-32
                "
              >
                {/* Product Image */}

                <div className="relative overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="
                      h-[210px]
                      sm:h-[220px]

                      w-full
                      object-cover

                      transition
                      duration-500

                      group-hover:scale-105
                    "
                  />

                  {/* Category Overlay */}

                  <span
                    className="
                      absolute
                      top-3
                      left-3

                      rounded-full

                      bg-[#081F4D]/90
                      backdrop-blur-md

                      border
                      border-white/10

                      px-3
                      py-1

                      text-[10px]
                      sm:text-xs

                      font-semibold
                      text-cyan-300
                    "
                  >
                    {product.category}
                  </span>
                </div>

                {/* Product Content */}

                <div className="p-4 sm:p-5">
                  <h3
                    className="
                      text-lg
                      sm:text-xl

                      font-bold
                      text-white

                      leading-snug
                    "
                  >
                    {product.title}
                  </h3>

                  <p
                    className="
                      mt-2.5

                      text-sm

                      text-blue-100
                      leading-6

                      line-clamp-3
                    "
                  >
                    {product.description}
                  </p>

                  {/* Buttons */}

                  <div
                    className="
                      mt-5

                      flex
                      flex-col
                      xs:flex-row
                      sm:flex-row

                      gap-2.5
                    "
                  >
                    <Link
                      to={`/products/${product.id}`}
                      className="
                        flex-1

                        rounded-xl

                        border
                        border-cyan-400/70

                        px-3
                        py-2.5

                        text-center

                        text-xs
                        sm:text-sm

                        font-semibold
                        text-cyan-300

                        hover:bg-cyan-400
                        hover:text-[#081F4D]

                        transition
                      "
                    >
                      View Details
                    </Link>

                    <Link
                      to="/quote"
                      state={{ product: product.title }}
                      className="
                        flex-1

                        rounded-xl

                        bg-cyan-400

                        px-3
                        py-2.5

                        text-center

                        text-xs
                        sm:text-sm

                        font-semibold
                        text-[#081F4D]

                        hover:bg-cyan-300

                        transition
                      "
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= EMPTY STATE ================= */}

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                py-14
                sm:py-16

                text-center
              "
            >
              <div
                className="
                  mx-auto

                  w-14
                  h-14

                  rounded-full

                  bg-cyan-400/10
                  border
                  border-cyan-400/20

                  flex
                  items-center
                  justify-center
                "
              >
                <Search
                  size={24}
                  className="text-cyan-300"
                />
              </div>

              <h2
                className="
                  mt-4

                  text-2xl
                  sm:text-3xl

                  font-bold
                  text-white
                "
              >
                No Products Found
              </h2>

              <p className="mt-2 text-sm sm:text-base text-blue-100">
                Try another keyword or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="
                  mt-5

                  rounded-full
                  bg-cyan-400

                  px-6
                  py-2.5

                  text-sm
                  font-semibold
                  text-[#081F4D]

                  hover:bg-cyan-300
                  transition
                "
              >
                Show All Products
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}