import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-14 bg-gradient-to-br from-[#081F4D] via-[#0B2F73] to-[#114DA8]">

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-xl p-7 lg:p-10 text-center"
        >
            {/* Heading */}

<motion.span
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  viewport={{ once: true }}
  className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 font-semibold tracking-wider uppercase text-sm"
>
  Let's Work Together
</motion.span>

<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  viewport={{ once: true }}
  className="mt-5 text-4xl lg:text-5xl font-bold text-white leading-tight"
>
  Ready to Start Your
  <br />
  <span className="text-cyan-300">
    Global Trade Journey?
  </span>
</motion.h2>

<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  viewport={{ once: true }}
  className="mt-4 max-w-3xl mx-auto text-blue-100 leading-7"
>
  Partner with YIHE International Trade Service for reliable sourcing,
  factory verification, quality inspection, international logistics and
  complete import solutions from China.
</motion.p>

{/* Buttons */}

<div className="mt-7 flex flex-wrap justify-center gap-4">

  <motion.a
    href="/contact"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-3 font-semibold text-[#081F4D] shadow-[0_0_35px_rgba(34,211,238,.35)] transition-all duration-300 hover:bg-cyan-300"
  >
    Request a Free Quote

    <ArrowRight
      size={20}
      className="transition-transform group-hover:translate-x-1"
    />
  </motion.a>

  <motion.a
    href="https://wa.me/917004722363"
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-7 py-3 font-semibold text-white hover:border-cyan-300 hover:bg-white/20 transition-all duration-300"
  >
    <MessageCircle size={22} />

    Chat on WhatsApp
  </motion.a>

</div>

{/* Trust Points */}

<div className="mt-8 grid md:grid-cols-3 gap-4">

  {[
    "Verified Suppliers",
    "Fast Global Shipping",
    "End-to-End Support",
  ].map((item) => (

    <div
      key={item}
      className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg px-4 py-3"
    >
      <CheckCircle2
        size={22}
        className="text-cyan-300"
      />

      <span className="text-blue-100 font-medium">
        {item}
      </span>

    </div>

  ))}

</div>

{/* Floating Particles */}

<div className="absolute inset-0 pointer-events-none overflow-hidden">

  {[...Array(18)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 rounded-full bg-cyan-300/40"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [-15, 15, -15],
        opacity: [0.3, 1, 0.3],
        scale: [1, 1.6, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}

</div>

{/* Bottom Text */}

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
  viewport={{ once: true }}
  className="mt-8 text-center"
>

  <p className="text-blue-200 text-sm tracking-wider uppercase">

    Trusted by Importers • Exporters • Wholesalers • Retailers Worldwide

  </p>

</motion.div>

</motion.div>

</div>

</section>
  );
}
