import { motion } from "framer-motion";

const galleryImages = [
  {
    image: "/gallery/gallery-1.jpg",
    title: "Global Trade",
  },
  {
    image: "/gallery/gallery-2.jpg",
    title: "Product Sourcing",
  },
  {
    image: "/gallery/gallery-3.jpg",
    title: "Manufacturing",
  },
  {
    image: "/gallery/gallery-4.jpg",
    title: "Logistics",
  },
  {
    image: "/gallery/gallery-5.jpg",
    title: "International Shipping",
  },
  {
    image: "/gallery/gallery-6.jpg",
    title: "Global Business",
  },
  {
    image: "/gallery/gallery-7.jpg",
    title: "Quality Inspection",
  },
  {
    image: "/gallery/gallery-8.jpg",
    title: "Worldwide Supply",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#081F4D] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-14">

          <span className="inline-block rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D8C3A5]">
            Our Gallery
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Explore Our Global Trade Journey
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-blue-100 leading-8">
            A glimpse into our products, sourcing, manufacturing,
            logistics and international trade operations.
          </p>

        </div>

        {/* ================= GALLERY GRID ================= */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {galleryImages.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#081F4D]/90 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Title */}

              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <div className="mt-2 h-[2px] w-10 bg-[#C9A227]" />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}