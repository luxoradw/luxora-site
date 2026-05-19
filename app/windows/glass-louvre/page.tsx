"use client";

import { motion } from "framer-motion";

export default function GlassLouvreWindowPage() {
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
            Glass Louvre
            <br />
            Window System
          </h1>

          <div className="mt-8 h-px w-24 bg-yellow-500/70" />

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
            Adjustable glass louvre window system designed for controlled
            airflow, ventilation, natural daylight, and modern architectural
            performance with clean aluminum framing and luxury detailing.
          </p>

          {/* FEATURES */}
          <div className="mt-14 grid grid-cols-2 gap-4">

            {[
              "Adjustable Glass Blades",
              "Natural Ventilation",
              "Luxury Aluminum Frame",
              "Airflow Control",
              "Modern Architectural Design",
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
          <div className="relative h-[560px] w-[380px] border border-yellow-500/40 bg-white/[0.03]">

            <div className="absolute inset-5 border border-yellow-500/20" />

            {/* LOUVRE SYSTEM */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                animate={{
                  rotateX: [0, 42, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.08,
                }}
                className="absolute left-[12%] h-6 w-[76%] origin-center border border-yellow-400/80 bg-yellow-500/10"
                style={{
                  top: 70 + i * 68,
                  transformStyle: "preserve-3d",
                }}
              />
            ))}

            {/* SIDE FRAMES */}
            <div className="absolute left-[12%] top-[12%] h-[76%] w-px bg-yellow-500/40" />
            <div className="absolute right-[12%] top-[12%] h-[76%] w-px bg-yellow-500/40" />

            {/* CENTER SUPPORT */}
            <div className="absolute left-1/2 top-[12%] h-[76%] w-px -translate-x-1/2 bg-yellow-500/20" />

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
              Adjustable Blades
            </p>
          </div>

          <div className="absolute -left-4 bottom-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Airflow Control
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
                "Ventilation",
                "Adjustable glass blades provide controlled airflow and natural ventilation performance.",
              ],
              [
                "Application",
                "Ideal for modern homes, tropical architecture, patios, stairwells, and airflow-focused spaces.",
              ],
              [
                "Design",
                "Slim aluminum framing with luxury architectural appearance and clean geometric sightlines.",
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