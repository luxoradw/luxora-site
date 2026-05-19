"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const seriesOptions = [
  { id: "86", label: "Series 86" },
  { id: "110", label: "Series 110" },
];

const features = [
  "Thermal Break Frame",
  "Fixed Glazing System",
  "Triple Glass Option",
  "Water Tightness",
  "Air Tightness",
  "Sound Performance",
  "Wind Load Resistance",
  "Slim Sightline",
];

export default function FixedWindowPage() {
  const [selectedSeries, setSelectedSeries] = useState("86");

  const is110 = selectedSeries === "110";

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-20">
      <section className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-yellow-500/80 text-xs tracking-[0.35em] uppercase mb-4">
            Luxora Doors and Windowes 
          </p>

          <h1 className="text-3xl md:text-5xl font-light tracking-[0.14em] uppercase">
            Fixed Windows
          </h1>

          <p className="mt-5 max-w-3xl text-white/55 text-sm leading-7">
            Premium fixed window system designed for maximum daylight,
            panoramic views, thermal insulation, and minimalist luxury
            architecture with ultra-slim aluminum profiles and high
            structural performance.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 mb-12">
          {seriesOptions.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedSeries(item.id)}
              className={`px-5 py-2 text-xs tracking-[0.22em] uppercase border transition-all duration-300 ${
                selectedSeries === item.id
                  ? "border-yellow-500 text-yellow-400 bg-yellow-500/10"
                  : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-10 items-start">

          {/* Graphic */}
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">

            <div className="relative h-[460px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">

              {/* Window */}
              <motion.div
                animate={{
                  scale: is110 ? 1.04 : 1,
                }}
                transition={{
                  duration: 0.6,
                }}
                className={`relative border-[10px] border-[#1b1b1b] shadow-2xl bg-[#0b0b0b] ${
                  is110
                    ? "w-[88%] h-[360px]"
                    : "w-[80%] h-[320px]"
                }`}
              >

                {/* Glass */}
                <div className="absolute inset-[12px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
                </div>

                {/* Mullions */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#1d1d1d] -translate-x-1/2" />

                <div className="absolute top-1/2 left-0 right-0 h-[4px] bg-[#1d1d1d] -translate-y-1/2" />

                {/* Reflection */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.07),transparent)]" />

                {/* Accent */}
                <div className="absolute top-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/30" />

                <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/20" />
              </motion.div>
            </div>

            {/* Mini Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

              <div className="border border-white/10 p-4">
                <p className="text-yellow-400 text-xs tracking-widest uppercase">
                  Series
                </p>

                <p className="text-white/55 text-sm mt-2">
                  {is110 ? "110 System" : "86 System"}
                </p>
              </div>

              <div className="border border-white/10 p-4">
                <p className="text-yellow-400 text-xs tracking-widest uppercase">
                  Glass
                </p>

                <p className="text-white/55 text-sm mt-2">
                  Double / Triple
                </p>
              </div>

              <div className="border border-white/10 p-4">
                <p className="text-yellow-400 text-xs tracking-widest uppercase">
                  Operation
                </p>

                <p className="text-white/55 text-sm mt-2">
                  Fixed
                </p>
              </div>

              <div className="border border-white/10 p-4">
                <p className="text-yellow-400 text-xs tracking-widest uppercase">
                  Finish
                </p>

                <p className="text-white/55 text-sm mt-2">
                  RAL / Anodized
                </p>
              </div>

            </div>
          </div>

          {/* Performance */}
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-8">

            <h2 className="text-xl tracking-[0.18em] uppercase font-light mb-8">
              NFRC Certified Performance
            </h2>

            <div className="space-y-7">

              {/* Triple */}
              <div>
                <h3 className="bg-white/10 text-center py-3 tracking-[0.18em] uppercase text-sm">
                  Triple Glass
                </h3>

                <div className="text-sm text-white/60">
                  {(is110
                    ? [
                        ["U-Factor", "0.33"],
                        ["SHGC", "0.12"],
                        ["VT", "0.21"],
                        ["DP", "Class CW-PG40"],
                        ["CR", "54"],
                        ["STC", "38"],
                        ["Specification", "5mm / 5mm / 5mm · 27mm IGO"],
                      ]
                    : [
                        ["U-Factor", "0.20"],
                        ["SHGC", "0.36"],
                        ["VT", "0.41"],
                        ["DP", "Class CW-PG60"],
                        ["CR", "67"],
                        ["STC", "38"],
                        ["Specification", "5mm / 5mm / 5mm · 39mm IGO"],
                      ]).map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between border-b border-white/10 py-2"
                    >
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Double */}
              <div>
                <h3 className="bg-white/10 text-center py-3 tracking-[0.18em] uppercase text-sm">
                  Double Glass
                </h3>

                <div className="text-sm text-white/60">
                  {(is110
                    ? [
                        ["U-Factor", "0.38"],
                        ["SHGC", "0.31"],
                        ["VT", "0.34"],
                        ["DP", "Class CW-PG40"],
                        ["CR", "46"],
                        ["STC", "32"],
                        ["Specification", "5mm / 5mm · 25mm IGO"],
                      ]
                    : [
                        ["U-Factor", "0.27"],
                        ["SHGC", "0.35"],
                        ["VT", "0.40"],
                        ["DP", "Class CW-PG60"],
                        ["CR", "49"],
                        ["STC", "32"],
                        ["Specification", "5mm / 5mm · 34mm IGO"],
                      ]).map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between border-b border-white/10 py-2"
                    >
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <h3 className="bg-white/10 text-center py-3 tracking-[0.18em] uppercase text-sm">
                  Maximum Size
                </h3>

                <div className="text-sm text-white/60">
                  {(is110
                    ? [
                        ["Max Width", "59.0551 in"],
                        ["Max Height", "118.11 in"],
                      ]
                    : [
                        ["Max Width", "47.2441 in"],
                        ["Max Height", "98.4252 in"],
                      ]).map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between border-b border-white/10 py-2"
                    >
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {features.map((feature) => (
            <div
              key={feature}
              className="border border-white/10 bg-white/[0.025] px-5 py-5 text-center hover:border-yellow-500/40 transition-all duration-300"
            >
              <div className="mx-auto mb-3 w-8 h-8 rounded-full border border-yellow-500/40 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
              </div>

              <p className="text-xs tracking-[0.18em] uppercase text-white/65">
                {feature}
              </p>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}