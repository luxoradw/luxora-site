"use client";

import { motion } from "framer-motion";

export default function SkylightWindowPage() {
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
            Skylight
            <br />
            Window System
          </h1>

          <div className="mt-8 h-px w-24 bg-yellow-500/70" />

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
            Skylight window system designed to bring natural daylight from
            above with clean architectural framing, insulated glass, and luxury
            aluminum construction for modern residential and commercial spaces.
          </p>

          {/* FEATURES */}
          <div className="mt-14 grid grid-cols-2 gap-4">
            {[
              "Natural Daylight",
              "Roof Integration",
              "Insulated Glass",
              "Modern Aluminum Frame",
              "Custom Sizes",
              "Luxury Architectural Design",
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

          {/* ROOF FRAME */}
          <div className="relative h-[420px] w-[520px]">

            {/* ROOF */}
            <div className="absolute left-[10%] top-[30%] h-[2px] w-[80%] rotate-[-18deg] bg-yellow-500/30" />

            {/* SKYLIGHT */}
            <motion.div
              animate={{
                rotate: [-18, -14, -18],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[24%] top-[24%] h-[220px] w-[220px] rotate-[-18deg] border border-yellow-400/80 bg-white/[0.05]"
            >
              <div className="absolute inset-4 border border-yellow-500/20" />

              {/* GLASS REFLECTION */}
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
            </motion.div>

            {/* LIGHT GLOW */}
            <motion.div
              animate={{
                opacity: [0.25, 0.55, 0.25],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[28%] top-[34%] h-[180px] w-[180px] rounded-full bg-yellow-500/20 blur-3xl"
            />
          </div>

          {/* LABELS */}
          <div className="absolute -right-4 top-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Natural Light
            </p>
          </div>

          <div className="absolute -left-4 bottom-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Roof System
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
                "Lighting",
                "Designed to maximize natural daylight while maintaining modern thermal performance.",
              ],
              [
                "Application",
                "Ideal for luxury homes, stairwells, living spaces, commercial interiors, and architectural features.",
              ],
              [
                "Design",
                "Minimal aluminum framing with insulated glazing and refined architectural appearance.",
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