"use client";

import { motion } from "framer-motion";

const qualityPoints = [
  {
    title: "Aluminum Thickness",
    value: "1.4 / 1.6 / 1.8 / 2.0 / 2.5mm",
    text: "Premium aluminum profile options selected for strength, stability, and long-term architectural performance.",
  },
  {
    title: "Glass Thickness",
    value: "5 / 6 / 8 / 10mm",
    text: "Multiple glass thickness options for comfort, clarity, safety, and project-specific performance.",
  },
  {
    title: "Insulated Glass",
    value: "Double & Triple Glass",
    text: "Designed for energy savings, sound reduction, condensation control, and interior comfort.",
  },
  {
    title: "Premium Hardware",
    value: "European-Style Quality",
    text: "High-quality handles, locks, hinges, rollers, and operating systems for smooth daily use.",
  },
];

const glassTypes = [
  "Tempered Safety Glass",
  "Laminated Glass",
  "Tinted Glass",
  "Insulated Double Glazing",
  "Low-E Glass Options",
  "Built-In Blind Glass",
];

const performance = [
  "Thermal Break Frame",
  "Water Tightness",
  "Air Tightness",
  "Sound Performance",
  "Wind Load Resistance",
  "Dust Resistance",
  "Fire Resistance",
  "Corrosion Resistance",
];

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.18),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),#000)]" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-20 items-center">
          <div>
            <p className="text-yellow-500/80 text-xs tracking-[0.45em] uppercase mb-6">
              Luxora Quality
            </p>

            <h1 className="text-5xl md:text-7xl xl:text-4xl font-light tracking-[0.12em] uppercase leading-[0.95]">
              Built To
              <br />
              Impress.
              <br />
              Engineered
              <br />
              To Last.
            </h1>

            <div className="mt-10 h-[1px] w-32 bg-yellow-500/70" />

            <p className="mt-10 max-w-2xl text-white/60 text-sm md:text-base leading-9">
              Luxora focuses on the details customers can feel every day:
              stronger aluminum profiles, high-performance glass, premium
              hardware, clean sightlines, smooth operation, and long-term
              architectural quality.
            </p>

            <a
              href="/quote"
              className="inline-block mt-12 border border-yellow-500/70 px-10 py-5 text-sm tracking-[0.22em] uppercase text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
            >
              Start Your Project
            </a>
          </div>

          {/* MAIN GRAPHIC */}
          <div className="relative h-[640px] flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[94%] h-[540px] border-[14px] border-[#171717] bg-[#090909] shadow-[0_40px_160px_rgba(0,0,0,0.95)]"
            >
              <div className="absolute inset-[18px] border border-white/10 bg-gradient-to-br from-white/20 via-white/[0.04] to-transparent overflow-hidden">
                <motion.div
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/14 to-transparent"
                />
              </div>

              <div className="absolute left-1/3 top-0 bottom-0 w-[4px] bg-[#1c1c1c]" />
              <div className="absolute left-2/3 top-0 bottom-0 w-[4px] bg-[#1c1c1c]" />
              <div className="absolute top-1/2 left-0 right-0 h-[4px] bg-[#1c1c1c]" />

              <div className="absolute -right-10 top-20 w-32 h-32 border border-yellow-500/30 rotate-45" />
              <div className="absolute -left-8 bottom-24 w-24 h-24 border border-yellow-500/20 rotate-45" />

              <div className="absolute -inset-[1px] border border-yellow-500/25" />
              <div className="absolute top-[-14px] left-[-14px] right-[-14px] h-[5px] bg-yellow-500/40" />
              <div className="absolute bottom-[-14px] left-[-14px] right-[-14px] h-[5px] bg-yellow-500/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUALITY CARDS */}
      <section className="px-6 py-32 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-500/80 text-xs tracking-[0.4em] uppercase mb-5">
            What Makes Luxora Different
          </p>

          <h2 className="text-4xl md:text-3xl font-light tracking-[0.12em] uppercase leading-tight max-w-5xl mb-16">
            The quality is in the profile, glass, hardware, and finish
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {qualityPoints.map((item) => (
              <div
                key={item.title}
                className="group border border-white/10 bg-white/[0.025] p-8 hover:border-yellow-500/50 transition-all duration-500"
              >
                <div className="h-[1px] w-14 bg-yellow-500/70 mb-7 group-hover:w-24 transition-all duration-500" />

                <p className="text-yellow-400 text-xs tracking-[0.25em] uppercase mb-4">
                  {item.title}
                </p>

                <h3 className="text-2xl font-light tracking-[0.1em] uppercase leading-snug">
                  {item.value}
                </h3>

                <p className="mt-6 text-sm leading-8 text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLASS QUALITY */}
      <section className="relative px-6 py-32 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.10),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">
          <div>
            <p className="text-yellow-500/80 text-xs tracking-[0.4em] uppercase mb-5">
              Glass Technology
            </p>

            <h2 className="text-4xl md:text-3xl font-light tracking-[0.12em] uppercase leading-tight">
              Clear views.
              <br />
              Stronger comfort.
              <br />
              Better protection.
            </h2>

            <p className="mt-8 text-white/55 text-sm leading-9 max-w-xl">
              Luxora glass systems are selected to support safety, insulation,
              sound reduction, UV protection, and beautiful modern transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {glassTypes.map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/[0.025] p-6 hover:border-yellow-500/40 transition"
              >
                <div className="w-9 h-9 rounded-full border border-yellow-500/40 flex items-center justify-center mb-5">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                </div>

                <p className="text-sm tracking-[0.12em] uppercase text-white/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HARDWARE */}
      <section className="px-6 py-32 border-t border-white/10 bg-[#060606]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          <div className="relative h-[520px] border border-white/10 bg-white/[0.025] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.12),transparent_40%)]" />

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-500/25"
            />

            <div className="absolute left-1/2 top-1/2 w-[320px] h-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-500/50 bg-[#111] shadow-[0_0_80px_rgba(234,179,8,0.12)]" />

            <div className="absolute left-1/2 top-1/2 w-[220px] h-[34px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700" />

            <div className="absolute left-[18%] top-[22%] w-24 h-24 border border-white/10 rotate-45" />
            <div className="absolute right-[18%] bottom-[22%] w-24 h-24 border border-white/10 rotate-45" />
          </div>

          <div>
            <p className="text-yellow-500/80 text-xs tracking-[0.4em] uppercase mb-5">
              Hardware & Operation
            </p>

            <h2 className="text-4xl md:text-3xl font-light tracking-[0.12em] uppercase leading-tight">
              The handle is where customers feel quality first
            </h2>

            <p className="mt-8 text-white/55 text-sm leading-9">
              Premium handles, hinges, locks, rollers, struts, and operating
              components create the feeling of luxury: smooth movement, secure
              closing, refined touch, and long-term reliability.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                "Smooth Operation",
                "Secure Locking",
                "Premium Touch",
                "Long-Term Durability",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-white/[0.03] px-5 py-5 text-center text-xs uppercase tracking-[0.16em] text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="px-6 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-500/80 text-xs tracking-[0.4em] uppercase mb-5">
            Performance Details
          </p>

          <h2 className="text-4xl md:text-3xl font-light tracking-[0.12em] uppercase leading-tight max-w-5xl mb-16">
            Not just beautiful. Built to perform.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {performance.map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/[0.025] px-6 py-6 hover:border-yellow-500/40 transition"
              >
                <p className="text-sm uppercase tracking-[0.14em] text-white/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-36 border-t border-yellow-500/20 text-center bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.12),transparent_45%)]">
        <div className="max-w-5xl mx-auto">
          <p className="text-yellow-500/80 text-xs tracking-[0.45em] uppercase mb-6">
            Luxora Standard
          </p>

          <h2 className="text-4xl md:text-4xl font-light tracking-[0.12em] uppercase leading-[1.05]">
            When customers touch Luxora,
            <br />
            they feel the difference.
          </h2>

          <p className="mt-10 max-w-3xl mx-auto text-white/55 text-sm md:text-base leading-9">
            Better profiles, better glass, better hardware, and better details —
            all designed to make each project feel more valuable.
          </p>

          <a
            href="/quote"
            className="inline-block mt-12 border border-yellow-500/70 px-10 py-5 text-sm tracking-[0.22em] uppercase text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
          >
            Request Quote
          </a>
        </div>
      </section>
    </main>
  );
}