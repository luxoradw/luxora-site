"use client";

import { motion } from "framer-motion";

export default function HungWindowPage() {
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
            Luxora Window Collection
          </p>

          <h1 className="text-4xl font-light uppercase leading-tight tracking-[0.14em] md:text-6xl">
            Single / Double
            <br />
            Hung Window
          </h1>

          <div className="mt-8 h-px w-24 bg-yellow-500/70" />

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
            Vertical sliding hung window system with clean architectural
            appearance, smooth movement, classic proportions, and modern
            aluminum performance for residential and luxury projects.
          </p>

          {/* FEATURES */}
          <div className="mt-14 grid grid-cols-2 gap-4">
            {[
              "Vertical Sliding",
              "Classic Design",
              "Smooth Track System",
              "Thermal Break",
              "Modern Aluminum Frame",
              "Custom Sizes",
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
          <div className="relative h-[540px] w-[360px] border border-yellow-500/40 bg-white/[0.03]">

            <div className="absolute inset-5 border border-yellow-500/20" />

            {/* TOP PANEL */}
            <div className="absolute left-0 top-0 h-1/2 w-full border-b border-white/10 bg-white/[0.02]" />

            {/* MOVING PANEL */}
            <motion.div
              animate={{
                y: [0, -70, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0 h-1/2 w-full border-t border-yellow-500/40 bg-yellow-500/10"
            >
              {/* HANDLE */}
              <div className="absolute right-6 top-1/2 h-14 w-[4px] -translate-y-1/2 bg-yellow-400 shadow-[0_0_14px_rgba(234,179,8,0.8)]" />
            </motion.div>

            {/* CENTER LINE */}
            <div className="absolute left-0 top-1/2 h-px w-full bg-yellow-500/30" />

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
              className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </div>

          {/* LABELS */}
          <div className="absolute -right-4 top-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Vertical Slide
            </p>
          </div>

          <div className="absolute -left-4 bottom-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Classic Design
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
                "Smooth vertical sliding system designed for modern and traditional architectural applications.",
              ],
              [
                "Performance",
                "Thermal insulation, clean sealing performance, and durable aluminum frame construction.",
              ],
              [
                "Design",
                "Balanced classic proportions with slim aluminum sightlines and premium hardware.",
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