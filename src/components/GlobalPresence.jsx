import { motion } from "framer-motion";
import { Plane, Ship } from "lucide-react";

export default function GlobalPresence() {
  return (
    <section className="relative py-14 overflow-hidden bg-gradient-to-br from-[#081F4D] via-[#0B2F73] to-[#114DA8]">

      {/* Glow */}
      <div className="absolute -top-52 -left-52 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[160px]" />

      <div className="absolute -bottom-52 -right-52 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[160px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.25) 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[6px] text-cyan-300 font-semibold">
            Global Presence
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Connecting Businesses Across The World
          </h2>

          <p className="mt-3 text-blue-100 max-w-3xl mx-auto leading-6">
            YIHE International Trade Service connects trusted manufacturers,
            suppliers and buyers through global sourcing, logistics,
            inspection and supply chain management.
          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative h-[430px] lg:h-[460px] rounded-[30px]
            border border-white/10
            bg-white/10
            backdrop-blur-xl
            overflow-hidden"
          >

            {/* World Map */}

            <img
              src="/world-map.svg"
              alt="World Map"
              className="absolute inset-0
             w-[95%]
             h-[95%]
             m-auto
             object-contain
             opacity-20
             select-none
             pointer-events-none
             brightness-150
             contrast-125"
/>

<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/10 pointer-events-none" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.15),transparent_45%)]" />

            {[...Array(18)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute rounded-full bg-cyan-300/30"
    style={{
      width: Math.random() * 8 + 3,
      height: Math.random() * 8 + 3,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 1, 0.2],
    }}
    transition={{
      duration: 4 + Math.random() * 3,
      repeat: Infinity,
      delay: Math.random() * 2,
    }}
  />
))}

<svg
  className="absolute inset-0 w-full h-full"
  viewBox="0 0 1000 500"
>
  <defs>
  <linearGradient id="routeGradient">
    <stop offset="0%" stopColor="#00E5FF" />
    <stop offset="50%" stopColor="#00B8FF" />
    <stop offset="100%" stopColor="#5EEAD4" />
  </linearGradient>
</defs>

  <motion.path
    d="M760 170 Q650 120 560 170"
    stroke="url(#routeGradient)"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
    }}
  />

  <motion.path
    d="M560 170 Q470 220 420 260"
    stroke="#38BDF8"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{
      duration: 2,
      delay: .5,
      repeat: Infinity,
      repeatDelay: 1,
    }}
  />

</svg>

{[
  { left: "76%", top: "30%" },
  { left: "61%", top: "35%" },
  { left: "53%", top: "52%" },
].map((item, index) => (
  <motion.div
    key={index}
    className="absolute"
    style={item}
    animate={{
      scale: [1, 1.6, 1],
      opacity: [1, .4, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: index * .4,
    }}
  >
    <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_25px_#22D3EE]" />
  </motion.div>
))}

<motion.div
  className="absolute text-cyan-300"
  animate={{
    left: ["76%", "61%", "53%"],
    top: ["30%", "35%", "52%"],
    rotate: [0, -20, -50],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  }}
>
  <Plane
  size={34}
  strokeWidth={2.4}
  className="drop-shadow-[0_0_18px_#22D3EE]"
/>
</motion.div>

<motion.div
  className="absolute text-blue-300"
  animate={{
    left: ["44%", "58%"],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "linear",
  }}
  style={{
    bottom: "16%",
    left: "44%",
  }}
>
  <Ship
  size={34}
  strokeWidth={2.4}
  className="text-cyan-300 drop-shadow-[0_0_15px_#22D3EE]"
/>
</motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="rounded-[30px]
            border border-white/10
            bg-white/10
            backdrop-blur-xl
            p-6"
          >

            <h3 className="text-2xl font-bold text-white">
              Global Trade Network
            </h3>

            <p className="mt-3 text-blue-100 leading-6">
              We provide complete import & export solutions with trusted
              manufacturers, quality inspection, shipping management and
              worldwide delivery.
            </p>

            {/* Stats Placeholder */}

            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <h4 className="text-4xl font-bold text-cyan-300">
                  25+
                </h4>

                <p className="mt-3 text-blue-100">
                  Countries Served
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <h4 className="text-4xl font-bold text-cyan-300">
                  100+
                </h4>

                <p className="mt-3 text-blue-100">
                  Trusted Suppliers
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <h4 className="text-4xl font-bold text-cyan-300">
                  500+
                </h4>

                <p className="mt-3 text-blue-100">
                  Successful Shipments
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <h4 className="text-4xl font-bold text-cyan-300">
                  99%
                </h4>

                <p className="mt-3 text-blue-100">
                  Customer Satisfaction
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}