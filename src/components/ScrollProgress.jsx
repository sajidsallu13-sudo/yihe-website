import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[5px] origin-left z-[9999]
                 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
      style={{
        scaleX: scrollYProgress,
        background:
          "linear-gradient(90deg,#22D3EE,#38BDF8,#3B82F6,#60A5FA)",
      }}
    />
  );
}