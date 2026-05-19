"use client";

import { motion } from "framer-motion";

const performance = [
  ["THERMAL INSULATION", "95%"],
  ["WATER TIGHTNESS", "90%"],
  ["AIR PERMEABILITY", "90%"],
  ["WIND RESISTANCE", "95%"],
  ["SOUND INSULATION", "85%"],
];

export default function WindowsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="relative min-h-screen overflow-hidden border-b border-yellow-500/20 px-6 pb-20 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(234,179,8,0.14),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.9)_35%,rgba(5,5,5,.65)_70%,#050505_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-10 flex items-center gap-5">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-yellow-500">
                Window Systems
              </p>
              <div className="h-px flex-1 bg-yellow-500/40" />
            </div>

            <h1 className="font-serif text-5xl uppercase leading-[1.02] tracking-[0.05em] md:text-7xl">
              Engineered For
              <br />
              <span className="text-yellow-500">Performance</span>
            </h1>

            <p className="mt-9 max-w-xl text-base leading-8 text-white/65">
              Premium aluminum window systems designed for luxury, efficiency,
              and durability. Built with advanced thermal break technology for
              superior insulation, comfort, and energy performance.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                "THERMAL INSULATION",
                "ENERGY EFFICIENCY",
                "SOUND REDUCTION",
                "WATER & AIR TIGHTNESS",
              ].map((item) => (
                <div key={item}>
                  <div className="mb-3 text-2xl text-yellow-500">⌁</div>
                  <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-white/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-[18px] border border-yellow-500/25 bg-black/45 p-6 backdrop-blur-xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-yellow-500">
                Thermal Break Technology
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[180px_1fr]">
                <div className="relative h-[130px] rounded-lg border border-white/10 bg-[#080808]">
                  <div className="absolute left-6 right-6 top-8 bottom-8 border-[7px] border-zinc-500">
                    <div className="absolute left-1/2 top-[-7px] h-[calc(100%+14px)] w-9 -translate-x-1/2 bg-yellow-500 shadow-[0_0_30px_rgba(234,179,8,.75)]" />
                    <div className="absolute left-0 top-1/2 h-[6px] w-full -translate-y-1/2 bg-zinc-300/70" />
                  </div>
                </div>

                <div>
                  <p className="text-sm leading-7 text-white/62">
                    Advanced polyamide thermal break separates the interior and
                    exterior aluminum profiles, reducing heat transfer and
                    improving energy efficiency.
                  </p>

                  <div className="mt-7">
                    <div className="mb-2 flex justify-between text-[9px] uppercase tracking-[0.14em] text-white/65">
                      <span>Cold Outside</span>
                      <span>Warm Inside</span>
                    </div>
                    <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative min-h-[720px]"
          >
            <div className="absolute left-[8%] top-0 h-[620px] w-[340px] rounded-sm bg-gradient-to-br from-zinc-950 via-zinc-900 to-black shadow-[0_0_100px_rgba(0,0,0,.9)]">
              <div className="absolute inset-8 border-[18px] border-zinc-800 bg-gradient-to-br from-white/25 via-white/8 to-transparent">
                <div className="absolute left-16 top-0 h-full w-16 rotate-[13deg] bg-white/10 blur-lg" />
                <div className="absolute right-12 top-0 h-full w-px bg-white/55" />
                <div className="absolute right-20 top-0 h-full w-px bg-white/25" />
                <div className="absolute right-28 top-0 h-full w-px bg-white/15" />
              </div>
            </div>

            <div className="absolute bottom-4 left-[38%] h-[300px] w-[260px] border-[9px] border-zinc-300 bg-black shadow-[0_0_80px_rgba(234,179,8,.18)]">
              <div className="absolute inset-5 border-[12px] border-zinc-800">
                <div className="absolute left-1/2 top-[-12px] h-[calc(100%+24px)] w-12 -translate-x-1/2 bg-yellow-500 shadow-[0_0_30px_rgba(234,179,8,.85)]" />
                <div className="absolute left-0 top-1/2 h-[8px] w-full -translate-y-1/2 bg-zinc-300/75" />
                <div className="absolute left-1/2 top-0 h-full w-[8px] -translate-x-1/2 bg-zinc-300/75" />
              </div>
            </div>

            {[
              ["DOUBLE / TRIPLE GLAZING", "High performance glass for insulation & comfort", "top-12"],
              ["THERMAL BREAK TECHNOLOGY", "Reduces heat transfer for energy efficiency", "top-[225px]"],
              ["EUROPEAN HARDWARE", "Premium quality for smooth & durable operation", "top-[410px]"],
              ["MULTI CHAMBER PROFILE", "Stronger profile for better performance", "bottom-8"],
            ].map(([title, text, pos]) => (
              <div key={title} className={`absolute right-0 ${pos} w-[220px]`}>
                <div className="mb-3 h-px w-full bg-yellow-500/45" />
                <p className="text-xs font-bold uppercase leading-5 tracking-[0.13em] text-yellow-500">
                  {title}
                </p>
                <p className="mt-3 text-xs leading-6 text-white/58">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="mb-12 flex items-center gap-5">
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-500">
                Performance At A Glance
              </p>
              <div className="h-px flex-1 bg-yellow-500/25" />
            </div>

            {performance.map(([name, value]) => (
              <div key={name} className="mb-8 grid grid-cols-[170px_1fr_55px] items-center gap-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-yellow-500">
                  {name}
                </p>
                <div className="h-[3px] bg-white/10">
                  <div className="h-full bg-yellow-500" style={{ width: value }} />
                </div>
                <p className="text-sm text-white/80">{value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-yellow-500/25 bg-white/[0.03] p-9">
            <h2 className="text-2xl uppercase leading-9 tracking-[0.12em] text-yellow-500">
              Why Choose Our
              <br />
              Window Systems?
            </h2>

            <div className="mt-9 space-y-5">
              {[
                "Advanced Thermal Break Technology",
                "Energy Efficient & Eco Friendly",
                "Premium Aluminum Profiles",
                "European Hardware Systems",
                "Custom Sizes & Colors",
                "Tested For High Performance",
                "Long Lasting Durability",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-yellow-500/60 text-xs text-yellow-500">
                    ✓
                  </span>
                  <p className="text-sm text-white/68">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}