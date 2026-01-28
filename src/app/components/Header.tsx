import { motion } from "motion/react";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#8B3A3A] text-white overflow-hidden h-6 sm:h-8 md:h-10 flex items-center">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(20)].map((_, i) => (
          <span key={i} className="text-sm sm:text-lg md:text-xl mx-3 sm:mx-4 md:mx-6">
            #GudduDuggu
          </span>
        ))}
      </motion.div>
    </div>
  );
}