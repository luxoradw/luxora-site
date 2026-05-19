"use client";

import { motion } from "framer-motion";

export default function CurtainWallPage() {
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
            Curtain Wall
            <br />
            System
          </h1>

          <div className="mt-8 h-px w-24 bg-yellow-500/70" />

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
            Curtain wall glazing system designed for large architectural glass
            façades, luxury commercial elevations, panoramic daylight, and
            modern aluminum structural framing with premium performance.
          </p>

          {/* FEATURES */}
          <div className="mt-14 grid grid-cols-2 gap-4">
            {[
              "Architectural Façade",
              "Large Glass Elevations",
              "Commercial System",
              "Thermal Performance",
              "Luxury Aluminum Frame",
              "Modern Structural Design",
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

          {/* BUILDING GRID */}
          <div className="relative h-[620px] w-[480px] border border-yellow-500/40 bg-white/[0.03]">

            {/* GRID */}
            <div className="absolute inset-6 grid grid-cols-4 grid-rows-6">

              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.2, 0.45, 0.2],
                  }}
                  transition={{
                    duration: 3 + (i % 5),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="border border-yellow-500/20 bg-white/[0.03]"
                />
              ))}
            </div>

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
              className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </div>

          {/* LABELS */}
          <div className="absolute -right-4 top-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Glass Façade
            </p>
          </div>

          <div className="absolute -left-4 bottom-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Structural System
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
                "Designed for large commercial façades and modern architectural glazing systems.",
              ],
              [
                "Performance",
                "Premium aluminum framing with thermal insulation and insulated glass compatibility.",
              ],
              [
                "Design",
                "Minimal structural appearance with luxury glass visibility and clean geometric lines.",
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