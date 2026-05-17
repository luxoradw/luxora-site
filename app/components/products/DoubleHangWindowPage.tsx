"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const functions = [
  { id: "closed", label: "Closed" },
  { id: "topOpen", label: "Top Open" },
  { id: "bottomOpen", label: "Bottom Open" },
  { id: "doubleOpen", label: "Double Open" },
];

const features = [
  "Thermal Break Frame",
  "Double Hung System",
  "Triple Glass Option",
  "Water Tightness",
  "Air Tightness",
  "Sound Performance",
  "Wind Load Resistance",
  "Smooth Sliding Rollers",
];

export default function DoubleHangWindowPage() {
  const [selectedFunction, setSelectedFunction] = useState("closed");

  const topOpen =
    selectedFunction === "topOpen" ||
    selectedFunction === "doubleOpen";

  const bottomOpen =
    selectedFunction === "bottomOpen" ||
    selectedFunction === "doubleOpen";

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-20">
      <section className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-yellow-500/80 text-xs tracking-[0.35em] uppercase mb-4">
            Series Single / Double Hung Window
          </p>

          <h1 className="text-3xl md:text-5xl font-light tracking-[0.14em] uppercase">
            Double Hung Window
          </h1>

          <p className="mt-5 max-w-3xl text-white/55 text-sm leading-7">
            Elegant vertical sliding window system designed for energy
            efficiency, smooth operation, thermal insulation, and clean
            architectural aesthetics for luxury residential projects.
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

              {/* Outer Frame */}
              <div className="relative w-[340px] h-[380px] border-[10px] border-[#1b1b1b] shadow-2xl bg-[#0b0b0b] overflow-hidden">

                {/* Top Panel */}
                <motion.div
                  animate={{
                    y: topOpen ? 45 : 0,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-0 right-0 h-1/2 border-b-[5px] border-[#1d1d1d] z-20"
                >
                  <div className="absolute inset-[10px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
                  </div>

                  {/* Handle */}
                  <div className="absolute left-1/2 bottom-4 -translate-x-1/2 w-14 h-[3px] bg-yellow-500/70 rounded-full" />
                </motion.div>

                {/* Bottom Panel */}
                <motion.div
                  animate={{
                    y: bottomOpen ? -45 : 0,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 left-0 right-0 h-1/2 border-t-[5px] border-[#1d1d1d] z-10"
                >
                  <div className="absolute inset-[10px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
                  </div>

                  {/* Handle */}
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 w-14 h-[3px] bg-yellow-500/70 rounded-full" />
                </motion.div>

                {/* Side Tracks */}
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#1b1b1b]" />
                <div className="absolute right-0 top-0 bottom-0 w-[6px] bg-[#1b1b1b]" />

                {/* Top Accent */}
                <div className="absolute top-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/30" />

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
                  Operation
                </p>
                <p className="text-white/55 text-sm mt-2">
                  Vertical Sliding
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

              {/* Double Glass */}
              <div>
                <h3 className="bg-white/10 text-center py-3 tracking-[0.18em] uppercase text-sm">
                  Double Glass
                </h3>

                <div className="text-sm text-white/60">
                  {[
                    ["U-Factor", "0.43"],
                    ["SHGC", "0.41"],
                    ["VT", "0.46"],
                    ["DP", "Class CW-PG40"],
                    ["CR", "45"],
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
                    ["Max Width", "94.4882 in"],
                    ["Max Height", "70.8661 in"],
                    ["Min Width", "23.622 in"],
                    ["Min Height", "23.622 in"],
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