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
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#081F4D] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-7 text-center sm:mb-9">
          <span className="inline-block rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#D8C3A5] sm:text-xs">
            Our Gallery
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Explore Our Global Trade Journey
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            A glimpse into our products, sourcing, manufacturing,
            logistics and international trade operations.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((offset) => {
              const index = (current + offset) % galleryImages.length;
              const item = galleryImages[index];

              return (
                <motion.div
                  key={`${current}-${offset}`}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl ${
                    offset === 1 ? "hidden sm:block" : offset === 2 ? "hidden lg:block" : "block"
                  }`}
                >
                  <img
                    src={item}
                    alt="YIHE Global Trade"
                    className="h-[230px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px] lg:h-[270px]"
                  />
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={prevSlide}
            aria-label="Previous gallery image"
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#081F4D] shadow-xl transition hover:scale-110 sm:h-10 sm:w-10"
          >
            <ChevronLeft size={21} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next gallery image"
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#081F4D] shadow-xl transition hover:scale-110 sm:h-10 sm:w-10"
          >
            <ChevronRight size={21} />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-1.5 sm:mt-6 sm:gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to gallery image ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
                current === index ? "w-6 bg-[#C9A227] sm:w-8" : "w-1.5 bg-white/40 sm:w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
