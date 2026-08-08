import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How to Import Products from China",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800",
    date: "06 Aug 2026",
    desc: "Learn the complete import process from China, from finding suppliers to customs clearance."
  },
  {
    id: 2,
    title: "Top 10 Products to Import in 2026",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
    date: "02 Aug 2026",
    desc: "Discover the most profitable products to import for your business."
  },
  {
    id: 3,
    title: "Sea Freight vs Air Freight",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800",
    date: "30 Jul 2026",
    desc: "Compare shipping methods to choose the right option for your cargo."
  },
  {
    id: 4,
    title: "How to Find Reliable Chinese Suppliers",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    date: "25 Jul 2026",
    desc: "Simple tips to identify trusted suppliers and avoid scams."
  },
  {
    id: 5,
    title: "FOB vs CIF Explained",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    date: "20 Jul 2026",
    desc: "Understand the difference between FOB and CIF shipping terms."
  },
  {
    id: 6,
    title: "Import Documentation Guide",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    date: "15 Jul 2026",
    desc: "Essential documents required for international import business."
  }
];

export default function Blog() {
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
            Our Blog
          </motion.h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100">
            Latest articles on China sourcing, import-export,
            logistics and international trade.
          </p>

        </div>
      </section>

      {/* Blog Cards */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (

              <motion.div
                key={blog.id}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">

                  <span className="text-sm text-cyan-600 font-semibold">
                    {blog.date}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-gray-800">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {blog.desc}
                  </p>

                  <button className="mt-6 rounded-lg bg-[#081F4D] px-6 py-3 text-white transition hover:bg-cyan-500">
                    Read More
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Newsletter */}

      <section className="py-20 bg-[#081F4D]">

        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-10 text-center">

            <h2 className="text-4xl font-bold text-white">
              Stay Updated
            </h2>

            <p className="mt-5 text-blue-100">
              Subscribe to receive our latest trade articles and sourcing updates.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-96 rounded-xl px-5 py-4 text-gray-800 outline-none"
              />

              <button className="rounded-xl bg-[#081F4D] px-8 py-4 font-semibold text-white hover:bg-black">
                Subscribe
              </button>

            </div>

            <div className="mt-10">

              <h3 className="text-3xl font-bold text-white">
                Need Help Importing From China?
              </h3>

              <p className="mt-4 text-blue-100">
                Contact our sourcing experts today.
              </p>

              <div className="mt-8 flex justify-center gap-4">

                <Link
                  to="/contact"
                  className="rounded-xl bg-white px-8 py-4 font-semibold text-[#081F4D]"
                >
                  Contact Us
                </Link>

                <Link
                  to="/quote"
                  className="rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-[#081F4D]"
                >
                  Request Quote
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}