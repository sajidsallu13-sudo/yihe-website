import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const galleryImages = [
  "/gallery/gallery-1.jpeg",
  "/gallery/gallery-2.jpeg",
  "/gallery/gallery-3.jpeg",
  "/gallery/gallery-4.jpeg",
  "/gallery/gallery-5.jpeg",
  "/gallery/gallery-6.jpeg",
  "/gallery/gallery-7.jpeg",
  "/gallery/gallery-8.jpeg",
  "/gallery/gallery-9.jpeg",
  "/gallery/gallery-10.jpeg",
];

export default function Gallery() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  // Auto Slide
  useEffect(() => {

    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="bg-[#081F4D] py-14">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-10">

          <span className="inline-block rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D8C3A5]">
            Our Gallery
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Explore Our Global Trade Journey
          </h2>

          <p className="mt-3 max-w-3xl mx-auto text-blue-100 leading-7">
            A glimpse into our products, sourcing, manufacturing,
            logistics and international trade operations.
          </p>

        </div>

        {/* ================= SLIDER ================= */}

        <div className="relative">

          {/* Images */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {[0, 1, 2].map((offset) => {

              const index =
                (current + offset) % galleryImages.length;

              const item = galleryImages[index];

              return (
                <motion.div
                  key={`${current}-${offset}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl"
                >

                  <img
                    src={item}
                    alt="YIHE Global Trade"
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  

                </motion.div>
              );

            })}

          </div>

          {/* ================= LEFT BUTTON ================= */}

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2
            flex h-11 w-11 items-center justify-center
            rounded-full bg-white/90 text-[#081F4D]
            shadow-xl transition hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          {/* ================= RIGHT BUTTON ================= */}

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2
            flex h-11 w-11 items-center justify-center
            rounded-full bg-white/90 text-[#081F4D]
            shadow-xl transition hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* ================= DOTS ================= */}

        <div className="mt-7 flex justify-center gap-2">

          {galleryImages.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-[#C9A227]"
                  : "w-2 bg-white/40"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}