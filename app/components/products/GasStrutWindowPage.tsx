"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const functions = [
  { id: "closed", label: "Closed" },
  { id: "halfOpen", label: "Half Open" },
  { id: "fullOpen", label: "Full Open" },
];

const features = [
  "Gas Strut System",
  "Thermal Break Frame",
  "Double Glass Option",
  "Water Tightness",
  "Air Tightness",
  "Sound Performance",
  "Wind Load Resistance",
  "Electric Opening Option",
];

export default function GasStrutWindowPage() {
  const [selectedFunction, setSelectedFunction] = useState("closed");

  const openAngle =
    selectedFunction === "fullOpen"
      ? -78
      : selectedFunction === "halfOpen"
      ? -38
      : 0;

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-20">
      <section className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-yellow-500/80 text-xs tracking-[0.35em] uppercase mb-4">
            Series Gas Strut Window
          </p>

          <h1 className="text-3xl md:text-5xl font-light tracking-[0.14em] uppercase">
            Gas Strut Window
          </h1>

          <p className="mt-5 max-w-3xl text-white/55 text-sm leading-7">
            Modern gas strut window system engineered for luxury kitchens,
            outdoor bars, entertainment spaces, and contemporary
            architectural projects with smooth upward opening operation
            and premium thermal performance.
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

          {/* Graphic */}
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">

            <div className="relative h-[460px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">

              {/* Window System */}
              <div
                className="relative w-[88%] h-[260px]"
                style={{ perspective: "1400px" }}
              >

                {/* Base Frame */}
                <div className="absolute bottom-0 left-0 right-0 h-[180px] border-[10px] border-[#1b1b1b] bg-[#0b0b0b]" />

                {/* Opening Panel */}
                <motion.div
                  animate={{
                    rotateX: openAngle,
                    y:
                      selectedFunction === "fullOpen"
                        ? -30
                        : selectedFunction === "halfOpen"
                        ? -10
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
                  className="absolute top-0 left-0 right-0 h-[180px] border-[8px] border-[#2a2a2a] bg-[#111]"
                >
                  <div className="absolute inset-[10px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
                  </div>

                  {/* Handle */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-yellow-500/70 rounded-full" />
                </motion.div>

                {/* Gas Struts */}
                {(selectedFunction === "halfOpen" ||
                  selectedFunction === "fullOpen") && (
                  <>
                    <motion.div
                      animate={{
                        rotate: selectedFunction === "fullOpen" ? -55 : -28,
                      }}
                      className="absolute left-12 top-[95px] w-[3px] h-28 bg-yellow-500/70 origin-top"
                    />

                    <motion.div
                      animate={{
                        rotate: selectedFunction === "fullOpen" ? 55 : 28,
                      }}
                      className="absolute right-12 top-[95px] w-[3px] h-28 bg-yellow-500/70 origin-top"
                    />
                  </>
                )}

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
                  6066-T6 Aluminum
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
                  Gas Strut Lift
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
                    ["U-Factor", "0.45"],
                    ["SHGC", "0.45"],
                    ["VT", "0.51"],
                    ["DP", "Class CW-PG30"],
                    ["CR", "32"],
                    ["STC", "32"],
                    ["Specification", "5mm / 5mm · 22mm IGO"],
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
                    ["Max Width", "78.7402 in"],
                    ["Max Height", "78.7402 in"],
                    ["Min Width", "23.622 in"],
                    ["Min Height", "21.65 in"],
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