"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const functions = [
  { id: "closed", label: "Closed" },
  { id: "vent", label: "Vent Mode" },
  { id: "open", label: "Open Skylight" },
];

const features = [
  "Electric Motor System",
  "Thermal Break Frame",
  "Triple Glass Option",
  "Water Tightness",
  "Air Tightness",
  "Sound Performance",
  "Wind Load Resistance",
  "Smart Remote Control",
];

export default function SkylightWindowPage() {
  const [selectedFunction, setSelectedFunction] = useState("closed");

  const ventMode = selectedFunction === "vent";
  const openMode = selectedFunction === "open";

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-20">
      <section className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-yellow-500/80 text-xs tracking-[0.35em] uppercase mb-4">
            Series Thermal Break Electric Skylight Window
          </p>

          <h1 className="text-3xl md:text-5xl font-light tracking-[0.14em] uppercase">
            Skylight Window
          </h1>

          <p className="mt-5 max-w-3xl text-white/55 text-sm leading-7">
            Motorized skylight system designed for luxury residential and
            architectural applications. Provides natural daylight,
            controlled ventilation, thermal insulation, and elegant
            minimal modern aesthetics with smart opening functionality.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 mb-12">
          {functions.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedFunction(item.id)}
              className={`px-5 py-2 text-xs tracking-[0.22em] uppercase border transition-all duration-300 ${
                selectedFunction === item.id
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

          {/* Graphic Section */}
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">

            <div className="relative h-[460px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">

              {/* Skylight Frame */}
              <div
                className="relative w-[88%] h-[240px]"
                style={{ perspective: "1400px" }}
              >

                {/* Base Frame */}
                <div className="absolute inset-0 border-[10px] border-[#1b1b1b] bg-[#0b0b0b]" />

                {/* Glass Panel */}
                <motion.div
                  animate={{
                    rotateX: openMode
                      ? 38
                      : ventMode
                      ? 16
                      : 0,
                    y: openMode
                      ? -38
                      : ventMode
                      ? -12
                      : 0,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformOrigin: "top center",
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute inset-0 border-[8px] border-[#2a2a2a] bg-[#111]"
                >
                  <div className="absolute inset-[10px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
                  </div>

                  {/* Support Arms */}
                  {(ventMode || openMode) && (
                    <>
                      <div className="absolute left-10 top-0 w-[3px] h-24 bg-yellow-500/70 origin-top rotate-[-30deg]" />
                      <div className="absolute right-10 top-0 w-[3px] h-24 bg-yellow-500/70 origin-top rotate-[30deg]" />
                    </>
                  )}
                </motion.div>

                {/* Bottom Accent */}
                <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/20" />
              </div>
            </div>

            {/* Mini Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="border border-white/10 p-4">
                <p className="text-yellow-400 text-xs tracking-widest uppercase">
                  Frame
                </p>
                <p className="text-white/55 text-sm mt-2">
                  6063-T6 Aluminum
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
                  System
                </p>
                <p className="text-white/55 text-sm mt-2">
                  Electric Motor
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
                  {[
                    ["U-Factor", "0.33"],
                    ["SHGC", "0.12"],
                    ["VT", "0.21"],
                    ["DP", "Class CW-PG40"],
                    ["CR", "54"],
                    ["STC", "38"],
                    ["Specification", "5mm / 5mm / 5mm · 27mm IGO"],
                  ].map(([label, value]) => (
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
                  {[
                    ["U-Factor", "0.38"],
                    ["SHGC", "0.31"],
                    ["VT", "0.34"],
                    ["DP", "Class CW-PG40"],
                    ["CR", "46"],
                    ["STC", "32"],
                    ["Specification", "5mm / 5mm · 25mm IGO"],
                  ].map(([label, value]) => (
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

              {/* Maximum Size */}
              <div>
                <h3 className="bg-white/10 text-center py-3 tracking-[0.18em] uppercase text-sm">
                  Maximum Size
                </h3>

                <div className="text-sm text-white/60">
                  {[
                    ["Max Width", "59.0551 in"],
                    ["Max Height", "118.11 in"],
                  ].map(([label, value]) => (
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