import { motion } from "framer-motion";
import founder from "../assets/images/founder.jpeg";

export default function FounderMessage() {
  return (
    <section className="bg-[#081F4D] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-2 rounded-2xl border border-[#C9A227]/30 sm:rounded-3xl" />

            <img
              src={founder}
              alt="Founder of YIHE"
              className="relative h-[280px] w-full rounded-2xl object-contain sm:h-[340px] sm:rounded-3xl lg:h-[390px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-block rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#D8C3A5] sm:text-xs">
              Message from the Founder
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Building Trust Beyond Borders
            </h2>

            <div className="mt-4 h-[2px] w-14 bg-[#C9A227]" />

            <p className="mt-4 text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
              At YIHE, our vision is to make international trade simpler,
              safer and more reliable for businesses around the world.
            </p>

            <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
              We believe that successful global business is built on trust,
              transparency and long-term relationships. Our team works closely
              with manufacturers, suppliers and customers to create reliable
              trade connections across international markets.
            </p>

            <div className="mt-5">
              <h3 className="text-xl font-bold text-white sm:text-2xl">HE LIUPING</h3>
              <p className="mt-1 text-sm text-[#D8C3A5] sm:text-base">Founder & Director, YIHE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
