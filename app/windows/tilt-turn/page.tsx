"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type WindowMode = "tilt" | "turn" | "closed";

const features = [
  "Tilt Ventilation",
  "Turn Opening",
  "Thermal Break Frame",
  "Retractable Screen",
  "Double Glass",
  "Premium Hardware",
  "Water Tightness",
  "Custom Finish",
];

export default function TiltTurnWindowPage() {
  const [mode, setMode] = useState<WindowMode>("tilt");

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        {/* Hero Image */}
<section className="relative mb-16 h-[650px] overflow-hidden rounded-[30px] border border-white/10">
  <img
    src="/tiltturn.png"
    alt="Luxora Tilt and Turn Window"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/55" />

  <div className="relative z-10 flex h-full items-center px-10 md:px-16">
    <div className="max-w-3xl">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
        LUXORA WINDOW SYSTEMS
      </p>

      <h1 className="text-5xl font-light uppercase tracking-[0.15em] md:text-7xl">
        Tilt & Turn Window
      </h1>

      <p className="mt-6 max-w-xl text-lg text-white/75">
        Dual-function luxury window systems with tilt ventilation, turn opening,
        premium sealing, and modern aluminum performance.
      </p>
    </div>
  </div>
</section>
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500/80">
            Luxora Window Systems
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            Tilt & Turn Window
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
            Premium tilt and turn windows with dual opening function, clean
            aluminum framing, strong insulation, and flexible ventilation for
            modern luxury spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">
            <div className="mb-6 flex flex-wrap gap-3">
              {[
                ["tilt", "Tilt Mode"],
                ["turn", "Turn Mode"],
                ["closed", "Closed"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setMode(value as WindowMode)}
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

            <TiltTurnVisual mode={mode} />

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Frame", "6066-T6 Aluminum"],
                ["Glass", "Double / Triple"],
                ["Motion", "Tilt & Turn"],
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
                title="Triple Glass"
                rows={[
                  ["U-Factor", "0.20"],
                  ["SHGC", "0.36"],
                  ["VT", "0.41"],
                  ["CR", "67"],
                  ["STC", "38"],
                ]}
              />

              <InfoBlock
                title="Double Glass"
                rows={[
                  ["U-Factor", "0.27"],
                  ["SHGC", "0.35"],
                  ["VT", "0.40"],
                  ["CR", "49"],
                  ["STC", "32"],
                ]}
              />

              <InfoBlock
                title="Specifications"
                rows={[
                  ["Frame", "6066-T6 Aluminum"],
                  ["Thickness", "1.6mm / 2.5mm"],
                  ["Glass", "Tempered / Double / Triple"],
                  ["Opening", "Tilt & Turn"],
                  ["Finish", "RAL / Anodized"],
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

function TiltTurnVisual({ mode }: { mode: WindowMode }) {
  const isTilt = mode === "tilt";
  const isTurn = mode === "turn";

  return (
    <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">
      <div className="relative h-[330px] w-[62%] border-[10px] border-[#1b1b1b] bg-[#0b0b0b] shadow-2xl">
        <div className="absolute left-[-10px] right-[-10px] top-[-10px] h-[5px] bg-yellow-500/30" />
        <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/20" />

        <div className="absolute inset-[18px] border border-white/10">
          <motion.div
            animate={{
              rotateX: isTilt ? -22 : 0,
              rotateY: isTurn ? -55 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 18,
            }}
            className="absolute inset-0 border-[7px] border-[#2a2a2a] bg-[#111] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: isTurn ? "left center" : "top center",
            }}
          >
            <div className="absolute inset-[10px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
            </div>

            <div className="absolute right-5 top-1/2 h-10 w-2 -translate-y-1/2 rounded-full bg-yellow-500/50" />
          </motion.div>

          {isTilt && (
            <div className="absolute left-8 right-8 top-5 h-[2px] bg-yellow-500/40" />
          )}

          {isTurn && (
            <div className="absolute left-5 top-8 h-[80%] w-[2px] bg-yellow-500/35" />
          )}
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