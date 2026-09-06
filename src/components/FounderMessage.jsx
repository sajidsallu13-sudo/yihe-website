import { motion } from "framer-motion";
import founder from "../assets/images/founder.jpeg";

export default function FounderMessage() {
  return (
    <section className="bg-[#081F4D] py-14">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* ================= FOUNDER IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <div className="absolute -inset-3 rounded-3xl border border-[#C9A227]/30" />

            <img
              src={founder}
              alt="Founder of YIHE"
              className="relative h-[400px] md:h-[440px] w-full rounded-3xl object-contain"
            />

          </motion.div>

          {/* ================= MESSAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-block rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D8C3A5]">
              Message from the Founder
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
              Building Trust Beyond Borders
            </h2>

            <div className="mt-6 h-[2px] w-16 bg-[#C9A227]" />

            <p className="mt-7 text-lg leading-8 text-blue-100">
              At YIHE, our vision is to make international trade simpler,
              safer and more reliable for businesses around the world.
            </p>

            <p className="mt-5 text-lg leading-8 text-blue-100">
              We believe that successful global business is built on trust,
              transparency and long-term relationships. Our team works closely
              with manufacturers, suppliers and customers to create reliable
              trade connections across international markets.
            </p>

            <div className="mt-8">

              <h3 className="text-2xl font-bold text-white">
                HE LIUPING
              </h3>

              <p className="mt-2 text-[#D8C3A5]">
                Founder & Director, YIHE
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}