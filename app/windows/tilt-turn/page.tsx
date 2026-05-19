"use client";

import { motion } from "framer-motion";

export default function TiltTurnWindowPage() {
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
            Tilt & Turn
            <br />
            Window System
          </h1>

          <div className="mt-8 h-px w-24 bg-yellow-500/70" />

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/60 md:text-base">
            Tilt and turn window system with dual opening function for secure
            ventilation, easy cleaning access, strong thermal sealing, and
            modern architectural performance.
          </p>

          {/* FEATURES */}
          <div className="mt-14 grid grid-cols-2 gap-4">

            {[
              "Dual Opening Function",
              "Thermal Break",
              "European Hardware",
              "Strong Air Sealing",
              "Easy Cleaning Access",
              "Luxury Aluminum Finish",
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
          <div className="relative h-[520px] w-[380px] border border-yellow-500/40 bg-white/[0.03]">

            <div className="absolute inset-4 border border-yellow-500/20" />

            {/* FIXED PANEL */}
            <div className="absolute left-0 top-0 h-full w-1/2 border-r border-white/10 bg-white/[0.02]" />

            {/* TILT TURN PANEL */}
            <motion.div
              animate={{
                rotateY: [0, -38, 0],
                rotateX: [0, 0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-0 h-full w-1/2 origin-left border-l border-yellow-500/40 bg-yellow-500/10"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* HANDLE */}
              <div className="absolute left-6 top-1/2 h-20 w-[5px] -translate-y-1/2 bg-yellow-400 shadow-[0_0_18px_rgba(234,179,8,0.8)]" />

              <div className="absolute left-6 top-[48%] h-[5px] w-10 bg-yellow-400" />
            </motion.div>

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
              className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </div>

          {/* SIDE INFO */}
          <div className="absolute -right-4 top-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Dual Function
            </p>
          </div>

          <div className="absolute -left-4 bottom-10 hidden border border-yellow-500/20 bg-black/70 px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-yellow-400">
              Thermal Break
            </p>
          </div>
        </div>
      </section>

      {/* SPEC SECTION */}
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
                "Performance",
                "High sealing performance with thermal insulation and secure locking system.",
              ],
              [
                "Glass Options",
                "Compatible with double glass, insulated glass, and performance glazing systems.",
              ],
              [
                "Design",
                "Minimal aluminum frame design with modern European architectural appearance.",
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