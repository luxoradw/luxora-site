"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Mode = "closed" | "open";

const features = [
  "Thermal Break Frame",
  "Gas Strut System",
  "Luxury Hardware",
  "Wide Serving Opening",
  "Slim Sightline",
  "Custom Finish",
  "Smooth Lift Motion",
  "Architectural Detail",
];

export default function FoldUpWindowPage() {
  const [mode, setMode] = useState<Mode>("open");

  const isOpen = mode === "open";

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12">
          <main className="min-h-screen bg-[#050505] text-white px-6 py-20">
  <section className="max-w-7xl mx-auto">

    {/* HERO IMAGE */}
    <section className="relative mb-16 h-[650px] overflow-hidden rounded-[30px] border border-white/10">
      <img
        src="/foldup.png"
        alt="Luxora Fold Up Window"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full items-center px-10 md:px-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
            LUXORA WINDOW SYSTEMS
          </p>

          <h1 className="text-5xl font-light uppercase tracking-[0.15em] md:text-7xl">
            Fold Up Windows
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/75">
            Premium top-hinged window systems engineered for ventilation,
            performance, and modern architectural design.
          </p>
        </div>
      </div>
    </section>

 

  </section>
</main>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500/80">
            Luxora Fold-Up Window Systems
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            Fold-Up Windows
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
            Luxury upward-opening aluminum window systems designed for kitchens,
            serving counters, patios, pool houses, and indoor-outdoor
            entertainment spaces.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          <button
            onClick={() => setMode("closed")}
            className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
              mode === "closed"
                ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
            }`}
          >
            Closed
          </button>

          <button
            onClick={() => setMode("open")}
            className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
              mode === "open"
                ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
            }`}
          >
            Open
          </button>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">
            <FoldUpVisual isOpen={isOpen} />

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Frame", "6066-T6 Aluminum"],
                ["Glass", "Single / Double"],
                ["Motion", "Gas Strut Lift"],
                ["Finish", "RAL / Anodized"],
              ].map(([label, value]) => (
                <div key={label} className="border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-widest text-yellow-400">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-white/55">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <h2 className="mb-8 text-xl font-light uppercase tracking-[0.18em]">
              NFRC Certified Performance
            </h2>

            <div className="space-y-7">
              <InfoBlock
                title="Performance"
                rows={[
                  ["U-Factor", "0.20 Triple"],
                  ["SHGC", "0.12"],
                  ["VT", "0.25"],
                  ["CR", "73"],
                  ["STC", "38"],
                ]}
              />

              <InfoBlock
                title="Specifications"
                rows={[
                  ["Frame", "6066-T6 Aluminum"],
                  ["Thickness", "2.0mm / 3.0mm"],
                  ["Glass", "Single / Double"],
                  ["Glass Thickness", "5mm - 10mm"],
                  ["Finish", "RAL / Anodized"],
                ]}
              />

              <InfoBlock
                title="System"
                rows={[
                  ["Window Type", "Fold-Up Window"],
                  ["Opening", "Upward Lift"],
                  ["Support", "Gas Strut Arms"],
                  ["Hardware", "Premium Lift Hardware"],
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="border border-white/10 bg-white/[0.025] px-5 py-5 text-center transition-all duration-300 hover:border-yellow-500/40"
            >
              <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-yellow-500/40">
                <div className="h-2 w-2 rounded-full bg-yellow-400" />
              </div>

              <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function FoldUpVisual({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">
      <div className="relative h-[300px] w-[90%] border-[10px] border-[#1b1b1b] bg-[#0b0b0b] shadow-2xl">
        <div className="absolute left-[-10px] right-[-10px] top-[-10px] h-[5px] bg-yellow-500/30" />
        <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/20" />

        <div className="absolute inset-[18px] overflow-visible border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/[0.04] to-black/40" />

          {/* moving fold-up glass panel */}
          <motion.div
            animate={{
              rotateX: isOpen ? -62 : 0,
              y: isOpen ? -95 : 0,
            }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
            className="absolute left-[8%] top-[8%] h-[84%] w-[84%] border-[7px] border-[#2a2a2a] bg-[#111] shadow-[0_25px_45px_rgba(0,0,0,.65)]"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "top center",
            }}
          >
            <div className="absolute inset-[10px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
            </div>

            <div className="absolute bottom-4 left-1/2 h-[4px] w-20 -translate-x-1/2 rounded-full bg-yellow-500/70" />
          </motion.div>

          {/* left gas strut */}
          <motion.div
            animate={{
              rotate: isOpen ? -36 : -8,
              height: isOpen ? 135 : 95,
              y: isOpen ? -25 : 0,
            }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
            className="absolute left-[13%] top-[42%] w-[4px] origin-bottom rounded-full bg-yellow-500/70"
          />

          {/* right gas strut */}
          <motion.div
            animate={{
              rotate: isOpen ? 36 : 8,
              height: isOpen ? 135 : 95,
              y: isOpen ? -25 : 0,
            }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
            className="absolute right-[13%] top-[42%] w-[4px] origin-bottom rounded-full bg-yellow-500/70"
          />

          {/* center mullion */}
          <div className="absolute left-1/2 top-[8%] h-[84%] w-px bg-yellow-500/20" />

          {/* bottom sill */}
          <div className="absolute bottom-0 left-0 right-0 h-[8px] bg-yellow-500/20" />
        </div>
      </div>
    </div>
  );
}

function InfoBlock({
  title,
  rows,
}: {
  title: string;
  rows: string[][];
}) {
  return (
    <div>
      <h3 className="bg-white/10 py-3 text-center text-sm uppercase tracking-[0.18em]">
        {title}
      </h3>

      <div className="text-sm text-white/60">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between gap-5 border-b border-white/10 py-2"
          >
            <span>{label}</span>
            <span className="text-right">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}