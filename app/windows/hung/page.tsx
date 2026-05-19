"use client";

import { motion } from "framer-motion";

export default function HungWindowPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.16),transparent_55%)]" />

        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-yellow-500/10"
            style={{
              width: i % 2 === 0 ? "1px" : "180px",
              height: i % 2 === 0 ? "180px" : "1px",
              left: `${(i * 11) % 100}%`,
              top: `${(i * 14) % 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.35, 0.1],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* HERO */}
      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-20 px-6 py-32 lg:grid-cols-2">

        {/* LEFT */}
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-500/80">
            Luxora Window Collection
          </p>

          <h1 className="text-4xl font-light uppercase leading-tight tracking-[0.14em] md:text-6xl">
            Single / Double
            <br />
            Hung Window
          </h1>

          <div className="mt-8 h-px w-24 bg-yellow-500/70" />

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
            Luxury single and double hung window system with vertical sliding
            operation, balanced architectural proportions, smooth movement,
            thermal performance, and refined aluminum framing for modern and
            classic residential projects.
          </p>

          {/* FEATURES */}
          <div className="mt-14 grid grid-cols-2 gap-4">

            {[
              "Vertical Sliding System",
              "Single / Double Hung",
              "Thermal Break",
              "Smooth Track Operation",
              "Luxury Aluminum Frame",
              "Modern Architectural Design",
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

          {/* FRAME */}
          <div className="relative h-[580px] w-[380px] border border-yellow-500/40 bg-white/[0.03]">

            <div className="absolute inset-5 border border-yellow-500/20" />

            {/* TOP PANEL */}
            <div className="absolute left-0 top-0 h-1/2 w-full border-b border-white/10 bg-white/[0.02]" />

            {/* MOVING LOWER PANEL */}
            <motion.div
              animate={{
                y: [0, -80, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0 h-1/2 w-full border-t border-yellow-500/40 bg-yellow-500/10"
            >
              {/* HANDLE */}
              <div className="absolute right-7 top-1/2 h-16 w-[5px] -translate-y-1/2 bg-yellow-400 shadow-[0_0_18px_rgba(234,179,8,0.8)]" />
            </motion.div>

            {/* CENTER BAR */}
            <div className="absolute left-0 top-1/2 h-px w-full bg-yellow-500/30" />

            {/* SIDE FRAMES */}
            <div className="absolute left-[12%] top-[12%] h-[76%] w-px bg-yellow-500/25" />

            <div className="absolute right-[12%] top-[12%] h-[76%] w-px bg-yellow-500/25" />

            {/* REFLECTION */}
            <motion.div
              animate={{
                x: ["-120%", "140%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </div>

          {/* SIDE LABELS */}
          <div className="absolute -right-4 top-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Vertical Slide
            </p>
          </div>

          <div className="absolute -left-4 bottom-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Classic Balance
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
                "Operation",
                "Smooth vertical sliding operation designed for both single and double hung configurations.",
              ],
              [
                "Performance",
                "Thermal insulation, durable aluminum construction, and modern sealing performance.",
              ],
              [
                "Design",
                "Balanced architectural proportions with slim aluminum sightlines and luxury detailing.",
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