"use client";

import { motion } from "framer-motion";

export default function GlassHousePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.16),transparent_55%)]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-20 px-6 py-32 lg:grid-cols-2">

        {/* LEFT */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-500/80">
            Luxora Architectural Systems
          </p>

          <h1 className="text-4xl font-light uppercase leading-tight tracking-[0.14em] md:text-6xl">
            Glass House
            <br />
            System
          </h1>

          <div className="mt-8 h-px w-24 bg-yellow-500/70" />

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
            Luxury glass house system with premium aluminum framing, panoramic
            visibility, natural daylight, and elegant architectural design for
            sunrooms, garden rooms, outdoor lounges, and modern living spaces.
          </p>

          {/* FEATURES */}
          <div className="mt-14 grid grid-cols-2 gap-4">
            {[
              "Panoramic Glass",
              "Luxury Outdoor Living",
              "Modern Aluminum Frame",
              "Natural Daylight",
              "Custom Architectural Design",
              "Indoor-Outdoor Connection",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/[0.03] px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT GRAPHIC */}
        <div className="relative flex items-center justify-center">

          {/* STRUCTURE */}
          <div className="relative h-[540px] w-[640px] max-w-full">

            {/* BASE */}
            <div className="absolute bottom-0 left-[10%] h-[300px] w-[80%] border border-yellow-500/40 bg-white/[0.03]" />

            {/* ROOF */}
            <div className="absolute left-[16%] top-[90px] h-[2px] w-[34%] rotate-[-28deg] bg-yellow-400/70" />

            <div className="absolute right-[16%] top-[90px] h-[2px] w-[34%] rotate-[28deg] bg-yellow-400/70" />

            {/* CENTER SUPPORT */}
            <div className="absolute left-1/2 top-[90px] h-[300px] w-px -translate-x-1/2 bg-yellow-500/40" />

            {/* SIDE SUPPORTS */}
            <div className="absolute left-[18%] top-[140px] h-[250px] w-px bg-yellow-500/30" />

            <div className="absolute right-[18%] top-[140px] h-[250px] w-px bg-yellow-500/30" />

            {/* GLASS PANELS */}
            <motion.div
              animate={{
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[12%] top-[120px] h-[260px] w-[76%] bg-white/[0.04]"
            />

            {/* REFLECTION */}
            <motion.div
              animate={{
                x: ["-120%", "140%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-[12%] top-[120px] h-[260px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            {/* LIGHT GLOW */}
            <motion.div
              animate={{
                opacity: [0.15, 0.35, 0.15],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[25%] top-[160px] h-[180px] w-[180px] rounded-full bg-yellow-500/20 blur-3xl"
            />
          </div>

          {/* LABELS */}
          <div className="absolute -right-4 top-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Panoramic Glass
            </p>
          </div>

          <div className="absolute -left-4 bottom-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Luxury Structure
            </p>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="relative z-10 border-t border-white/10 bg-white/[0.02] px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex items-center gap-5">
            <div className="h-px w-16 bg-yellow-500/70" />

            <h2 className="text-sm uppercase tracking-[0.32em] text-yellow-400">
              System Details
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {[
              [
                "Architecture",
                "Designed for luxury outdoor rooms, garden lounges, patios, and panoramic glass living spaces.",
              ],
              [
                "Performance",
                "Premium aluminum framing with insulated glazing and modern structural stability.",
              ],
              [
                "Design",
                "Elegant glass visibility with refined aluminum detailing and clean architectural geometry.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border border-white/10 bg-black/40 p-8"
              >
                <div className="mb-6 h-px w-14 bg-yellow-500/70" />

                <h3 className="text-lg font-light uppercase tracking-[0.16em]">
                  {title}
                </h3>

                <p className="mt-6 text-sm leading-8 text-white/55">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}