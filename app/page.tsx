"use client";

import { motion } from "framer-motion";

export default function LuxoraWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.15),transparent_30%),radial-gradient(circle_at_70%_60%,rgba(255,215,0,0.1),transparent_30%)]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-[2px] w-[2px] rounded-full bg-yellow-300"
              style={{
                left: `${(i * 13) % 100}%`,
                top: `${(i * 17) % 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -80],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center">
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-6 font-serif text-[120px] text-yellow-400"
          >
            L
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl tracking-[0.1em] md:text-7xl"
          >
            LUXORA
          </motion.h1>

          <div className="mt-4 text-xl tracking-[0.3em] text-yellow-400">
            DOORS & WINDOWS
          </div>
        </div>
      </div>
    </div>
  );
}