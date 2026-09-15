import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#081F4D] via-[#0B2F73] to-[#114DA8] py-10 sm:py-12 lg:py-14">
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-[130px]" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 blur-[130px]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-xl sm:rounded-3xl sm:p-7 lg:p-8"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300 sm:text-xs"
          >
            Let's Work Together
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Ready to Start Your
            <br className="hidden sm:block" />
            <span className="sm:ml-2 text-cyan-300">Global Trade Journey?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base"
          >
            Partner with YIHE International Trade Service for reliable sourcing,
            factory verification, quality inspection, international logistics and
            complete import solutions from China.
          </motion.p>

          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <motion.a
              href="/quote"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#081F4D] shadow-[0_0_25px_rgba(34,211,238,.3)] transition hover:bg-cyan-300 sm:w-auto sm:text-base"
            >
              Request a Free Quote
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="https://wa.me/918789225500"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-300 hover:bg-white/20 sm:w-auto sm:text-base"
            >
              <MessageCircle size={19} />
              Chat on WhatsApp
            </motion.a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
            {["Verified Suppliers", "Fast Global Shipping", "End-to-End Support"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-lg"
              >
                <CheckCircle2 size={18} className="shrink-0 text-cyan-300" />
                <span className="text-xs font-medium text-blue-100 sm:text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/35"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{ y: [-10, 10, -10], opacity: [0.25, 0.8, 0.25] }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
            className="mt-5 text-center"
          >
            <p className="text-[10px] uppercase tracking-wider text-blue-200 sm:text-xs">
              Trusted by Importers • Exporters • Wholesalers • Retailers Worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
