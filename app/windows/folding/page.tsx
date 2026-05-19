"use client";

import { motion } from "framer-motion";

export default function FoldUpWindowPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.16),transparent_55%)]" />
      </div>

      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-20 px-6 py-32 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-500/80">
            Luxora Window Collection
          </p>

          <h1 className="text-4xl font-light uppercase leading-tight tracking-[0.14em] md:text-6xl">
            Fold Up
            <br />
            Window System
          </h1>

          <div className="mt-8 h-px w-24 bg-yellow-500/70" />

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
            Fold up window system designed for kitchen bars, patios, pool
            houses, and indoor-outdoor counter openings with smooth upward
            operation and clean architectural appearance.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-4">
            {[
              "Upward Opening",
              "Counter Connection",
              "Wide Service Opening",
              "Luxury Aluminum Frame",
              "Outdoor Living Design",
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

        <div className="relative flex items-center justify-center">
          <div className="relative h-[430px] w-[520px] max-w-full border border-yellow-500/40 bg-white/[0.03]">
            <div className="absolute inset-5 border border-yellow-500/20" />

            <div className="absolute left-[12%] top-[44%] h-[42%] w-[76%] border border-white/20 bg-white/[0.02]" />

            <motion.div
              animate={{
                rotateX: [0, 72, 0],
                y: [0, -45, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[12%] top-[44%] h-[42%] w-[76%] origin-top border border-yellow-400/80 bg-yellow-500/10"
              style={{ transformStyle: "preserve-3d" }}
            />

            <div className="absolute left-[12%] top-[44%] h-px w-[76%] bg-yellow-400/70" />

            <motion.div
              animate={{ x: ["-120%", "140%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </div>

          <div className="absolute -right-4 top-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Upward Lift
            </p>
          </div>

          <div className="absolute -left-4 bottom-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Bar Opening
            </p>
          </div>
        </div>
      </section>

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
                "Function",
                "Panel lifts upward to create a clear service opening for kitchen bars and patios.",
              ],
              [
                "Application",
                "Ideal for indoor-outdoor counter spaces, pool areas, cafés, and entertainment zones.",
              ],
              [
                "Design",
                "Modern aluminum frame with clean sightlines and custom finish options.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="border border-white/10 bg-black/40 p-8">
                <div className="mb-6 h-px w-14 bg-yellow-500/70" />
                <h3 className="text-lg font-light uppercase tracking-[0.16em]">
                  {title}
                </h3>
                <p className="mt-6 text-sm leading-8 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}