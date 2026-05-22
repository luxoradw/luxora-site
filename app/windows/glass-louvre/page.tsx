"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type LouvreMode = "closed" | "vented" | "open";

const features = [
  "Adjustable Glass Blades",
  "Natural Ventilation",
  "Modern Louvre System",
  "Slim Aluminum Frame",
  "Privacy Control",
  "Water Drainage",
  "Custom Finish",
  "Premium Hardware",
];

export default function GlassLouvreWindowPage() {
  const [mode, setMode] = useState<LouvreMode>("vented");

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500/80">
            Luxora Window Systems
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            Glass Louvre Window
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
            Premium glass louvre windows with adjustable horizontal blades,
            controlled ventilation, slim aluminum framing, and refined modern
            detailing for luxury residential and commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">
            <div className="mb-6 flex flex-wrap gap-3">
              {[
                ["closed", "Closed"],
                ["vented", "Vented"],
                ["open", "Open"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setMode(value as LouvreMode)}
                  className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                    mode === value
                      ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                      : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <GlassLouvreVisual mode={mode} />

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Frame", "6066-T6 Aluminum"],
                ["Glass", "Tempered Glass"],
                ["Motion", "Adjustable Louvre"],
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
              Performance & Specifications
            </h2>

            <div className="space-y-7">
              <InfoBlock
                title="Glass Performance"
                rows={[
                  ["Glass Type", "Tempered Glass"],
                  ["Ventilation", "Adjustable"],
                  ["Privacy", "Controlled Angle"],
                  ["Drainage", "Integrated Channel"],
                  ["Application", "Residential / Commercial"],
                ]}
              />

              <InfoBlock
                title="Specifications"
                rows={[
                  ["Frame", "6066-T6 Aluminum"],
                  ["Blade Type", "Horizontal Glass"],
                  ["Glass", "Tempered / Clear / Frosted"],
                  ["Operation", "Manual / Optional Motorized"],
                  ["Finish", "RAL / Anodized"],
                ]}
              />

              <InfoBlock
                title="System"
                rows={[
                  ["Design", "Glass Louvre"],
                  ["Opening", "Rotating Blades"],
                  ["Hardware", "Premium Side Mechanism"],
                  ["Use", "Ventilation / Privacy"],
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

function GlassLouvreVisual({ mode }: { mode: LouvreMode }) {
  const angle = mode === "closed" ? 0 : mode === "vented" ? -28 : -52;

  return (
    <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">
      <div className="relative h-[340px] w-[62%] border-[10px] border-[#1b1b1b] bg-[#0b0b0b] shadow-2xl">
        <div className="absolute left-[-10px] right-[-10px] top-[-10px] h-[5px] bg-yellow-500/30" />
        <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/20" />

        <div className="absolute inset-[18px] overflow-hidden border border-white/10 bg-black/20">
          <div className="absolute left-4 top-0 h-full w-[3px] bg-yellow-500/25" />
          <div className="absolute right-4 top-0 h-full w-[3px] bg-yellow-500/25" />

          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotateX: angle }}
              transition={{
                type: "spring",
                stiffness: 75,
                damping: 18,
                delay: i * 0.03,
              }}
              className="absolute left-8 right-8 h-[24px] border border-white/10 bg-gradient-to-br from-white/20 via-white/[0.06] to-transparent shadow-[0_10px_22px_rgba(0,0,0,.45)]"
              style={{
                top: `${24 + i * 30}px`,
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.16),transparent)]" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-yellow-500/25" />
            </motion.div>
          ))}

          <div className="absolute bottom-5 left-1/2 h-12 w-2 -translate-x-1/2 rounded-full bg-yellow-500/45" />
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