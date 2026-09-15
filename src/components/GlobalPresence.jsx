import { motion } from "framer-motion";
import { Plane, Ship } from "lucide-react";

export default function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#081F4D] via-[#0B2F73] to-[#114DA8] py-10 sm:py-12 lg:py-14">
      <div className="absolute -left-40 -top-40 h-[320px] w-[320px] rounded-full bg-cyan-400/20 blur-[140px] sm:h-[380px] sm:w-[380px]" />
      <div className="absolute -bottom-40 -right-40 h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-[140px] sm:h-[380px] sm:w-[380px]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.25) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[4px] text-cyan-300 sm:text-sm">
            Global Presence
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Connecting Businesses Across The World
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            YIHE International Trade Service connects trusted manufacturers,
            suppliers and buyers through global sourcing, logistics,
            inspection and supply chain management.
          </p>
        </motion.div>

        <div className="mt-7 grid gap-5 lg:mt-9 lg:grid-cols-2 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="relative h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl sm:h-[320px] sm:rounded-3xl lg:h-[360px]"
          >
            <img
              src="/world-map.svg"
              alt="World Map"
              className="pointer-events-none absolute inset-0 m-auto h-[95%] w-[95%] select-none object-contain opacity-20 brightness-150 contrast-125"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.15),transparent_45%)]" />

            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-cyan-300/30"
                style={{
                  width: Math.random() * 6 + 3,
                  height: Math.random() * 6 + 3,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 500">
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
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />

              <motion.path
                d="M560 170 Q470 220 420 260"
                stroke="#38BDF8"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
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
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
              >
                <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#22D3EE] sm:h-4 sm:w-4" />
              </motion.div>
            ))}

            <motion.div
              className="absolute text-cyan-300"
              animate={{
                left: ["76%", "61%", "53%"],
                top: ["30%", "35%", "52%"],
                rotate: [0, -20, -50],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Plane size={28} strokeWidth={2.4} className="drop-shadow-[0_0_18px_#22D3EE] sm:h-8 sm:w-8" />
            </motion.div>

            <motion.div
              className="absolute text-blue-300"
              animate={{ left: ["44%", "58%"] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              style={{ bottom: "16%", left: "44%" }}
            >
              <Ship size={28} strokeWidth={2.4} className="text-cyan-300 drop-shadow-[0_0_15px_#22D3EE] sm:h-8 sm:w-8" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6"
          >
            <h3 className="text-xl font-bold text-white sm:text-2xl">Global Trade Network</h3>

            <p className="mt-2 text-sm leading-6 text-blue-100 sm:text-base">
              We provide complete import & export solutions with trusted
              manufacturers, quality inspection, shipping management and
              worldwide delivery.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                ["25+", "Countries Served"],
                ["100+", "Trusted Suppliers"],
                ["500+", "Successful Shipments"],
                ["99%", "Customer Satisfaction"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:rounded-2xl sm:p-4">
                  <h4 className="text-2xl font-bold text-cyan-300 sm:text-3xl">{value}</h4>
                  <p className="mt-1 text-xs leading-5 text-blue-100 sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
