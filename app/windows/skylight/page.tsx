"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type SkylightMode = "fixed" | "vented" | "open";

const features = [
  "Roof Window Design",
  "Natural Light",
  "Thermal Break Frame",
  "Fixed / Vented Option",
  "Double Glass",
  "Water Tightness",
  "UV Protection",
  "Custom Finish",
];

export default function SkylightWindowPage() {
  const [mode, setMode] = useState<SkylightMode>("open");

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500/80">
            Luxora Window Systems
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            Skylight Window
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
            Premium skylight windows designed to bring natural light from above,
            with strong insulation, clean aluminum detailing, water-tight
            performance, and refined architectural style.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">
            <div className="mb-6 flex flex-wrap gap-3">
              {[
                ["fixed", "Fixed"],
                ["vented", "Vented"],
                ["open", "Open View"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setMode(value as SkylightMode)}
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

            <SkylightVisual mode={mode} />

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Frame", "6066-T6 Aluminum"],
                ["Glass", "Double / Low-E"],
                ["Motion", "Fixed / Vented"],
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
                  ["Glass Type", "Double / Low-E"],
                  ["Insulation", "Thermal Break"],
                  ["Water Tightness", "High Performance"],
                  ["UV Control", "Available"],
                  ["Sound Control", "Insulated Glass"],
                ]}
              />

              <InfoBlock
                title="Specifications"
                rows={[
                  ["Frame", "6066-T6 Aluminum"],
                  ["Glass", "Tempered / Double"],
                  ["Opening", "Fixed / Vented"],
                  ["Application", "Roof / Ceiling"],
                  ["Finish", "RAL / Anodized"],
                ]}
              />

              <InfoBlock
                title="System"
                rows={[
                  ["Design", "Skylight Window"],
                  ["Use", "Residential / Commercial"],
                  ["Drainage", "Integrated Channel"],
                  ["Hardware", "Premium System"],
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

function SkylightVisual({ mode }: { mode: SkylightMode }) {
  const isOpen = mode === "open";
  const isVented = mode === "vented";

  return (
    <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">
      <div className="relative h-[300px] w-[78%] perspective-[1000px]">
        <div className="absolute inset-0 rotate-x-[58deg] border-[12px] border-[#1b1b1b] bg-[#0b0b0b] shadow-2xl">
          <div className="absolute left-[-12px] right-[-12px] top-[-12px] h-[5px] bg-yellow-500/30" />
          <div className="absolute bottom-[-12px] left-[-12px] right-[-12px] h-[5px] bg-yellow-500/20" />

          <div className="absolute inset-[18px] border border-white/10">
            <motion.div
              animate={{
                rotateX: isOpen ? -42 : isVented ? -18 : 0,
                y: isOpen ? -34 : isVented ? -12 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 18,
              }}
              className="absolute inset-0 border-[7px] border-[#2a2a2a] bg-[#111] shadow-[0_24px_50px_rgba(0,0,0,.65)]"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "top center",
              }}
            >
              <div className="absolute inset-[10px] border border-white/10 bg-gradient-to-br from-white/20 via-white/[0.05] to-transparent">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.16),transparent)]" />
              </div>

              <div className="absolute left-1/2 bottom-6 h-2 w-16 -translate-x-1/2 rounded-full bg-yellow-500/45" />
            </motion.div>

            {(isOpen || isVented) && (
              <>
                <motion.div
                  animate={{ height: isOpen ? 110 : 70 }}
                  transition={{ type: "spring", stiffness: 70, damping: 18 }}
                  className="absolute left-10 top-12 w-[3px] origin-top rotate-[24deg] rounded-full bg-yellow-500/55"
                />

                <motion.div
                  animate={{ height: isOpen ? 110 : 70 }}
                  transition={{ type: "spring", stiffness: 70, damping: 18 }}
                  className="absolute right-10 top-12 w-[3px] origin-top -rotate-[24deg] rounded-full bg-yellow-500/55"
                />
              </>
            )}
          </div>
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