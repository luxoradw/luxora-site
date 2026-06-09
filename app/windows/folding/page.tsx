"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type StackSide = "left" | "right" | "center";

const features = [
  "Thermal Break Frame",
  "Folding Window System",
  "Smooth Operation",
  "Large Opening",
  "Double Glass",
  "Premium Hardware",
  "Water Tightness",
  "Custom Finish",
];

export default function FoldingWindowsPage() {
  const [panels, setPanels] = useState(4);
  const [open, setOpen] = useState(true);
  const [stack, setStack] = useState<StackSide>("left");

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
<section className="mx-auto max-w-7xl">

  {/* HERO IMAGE */}

  <section className="relative mb-16 h-[650px] overflow-hidden rounded-[30px] border border-white/10">
    <img
      src="/windowsfolding.png"
      alt="Luxora Folding Windows"
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 flex h-full items-center px-10 md:px-16">
      <div className="max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
          LUXORA WINDOW SYSTEMS
        </p>

        <h1 className="text-5xl font-light uppercase tracking-[0.15em] md:text-7xl">
          Folding Windows
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/75">
          Open entire walls with premium folding systems engineered for
          luxury architecture.
        </p>
      </div>
    </div>
  </section>


</section>
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500/80">
            Luxora Window Systems
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            Folding Windows
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
            Premium aluminum folding window systems designed for wide openings,
            smooth movement, modern aesthetics, and seamless indoor-outdoor
            connection.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {[2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => setPanels(num)}
              className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                panels === num
                  ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                  : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
              }`}
            >
              {num} Panel
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">
            <div className="mb-6 flex flex-wrap gap-3">
              {[
                ["left", "Left Stack"],
                ["right", "Right Stack"],
                ["center", "Center Stack"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setStack(value as StackSide)}
                  className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                    stack === value
                      ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                      : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
                  }`}
                >
                  {label}
                </button>
              ))}

              <button
                onClick={() => setOpen(false)}
                className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                  !open
                    ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                    : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
                }`}
              >
                Closed
              </button>

              <button
                onClick={() => setOpen(true)}
                className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                  open
                    ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                    : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
                }`}
              >
                Open
              </button>
            </div>

            <FoldingWindowVisual panels={panels} open={open} stack={stack} />

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Frame", "6066-T6 Aluminum"],
                ["Glass", "Double Glass"],
                ["Motion", "Folding System"],
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
                title="Double Glass"
                rows={[
                  ["U-Factor", "0.45"],
                  ["SHGC", "0.45"],
                  ["VT", "0.51"],
                  ["CR", "32"],
                  ["STC", "32"],
                ]}
              />

              <InfoBlock
                title="Specifications"
                rows={[
                  ["Frame", "6066-T6 Aluminum"],
                  ["Thickness", "2.0mm"],
                  ["Glass", "Tempered / Double"],
                  ["Glass Thickness", "5mm / 6mm"],
                  ["Finish", "RAL / Anodized"],
                ]}
              />

              <InfoBlock
                title="Maximum Size"
                rows={[
                  ["Max Width", "220.47”"],
                  ["Max Height", "94.4882”"],
                  ["Min Width", "35.4331”"],
                  ["Min Height", "39.3701”"],
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

function FoldingWindowVisual({
  panels,
  open,
  stack,
}: {
  panels: number;
  open: boolean;
  stack: StackSide;
}) {
  return (
    <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">
      <div className="relative h-[260px] w-[90%] border-[10px] border-[#1b1b1b] bg-[#0b0b0b] shadow-2xl">
        <div className="absolute left-[-10px] right-[-10px] top-[-10px] h-[5px] bg-yellow-500/30" />
        <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/20" />

        <div className="absolute inset-[18px] overflow-hidden border border-white/10">
          <div className="relative h-full w-full">
            {[...Array(panels)].map((_, i) => {
              const closedLeft = `${(i * 100) / panels}%`;
              const closedWidth = `${100 / panels}%`;

              let x = 0;
              let rotateY = 0;
              let left = closedLeft;

              if (open) {
                if (stack === "left") {
                  left = "0%";
                  x = i * 14;
                  rotateY = i % 2 === 0 ? -58 : 58;
                }

                if (stack === "right") {
                  left = `${100 - 100 / panels}%`;
                  x = -i * 14;
                  rotateY = i % 2 === 0 ? 58 : -58;
                }

                if (stack === "center") {
                  const mid = panels / 2;

                  if (i < mid) {
                    left = "0%";
                    x = i * 14;
                    rotateY = i % 2 === 0 ? -58 : 58;
                  } else {
                    left = `${100 - 100 / panels}%`;
                    x = -(i - mid) * 14;
                    rotateY = i % 2 === 0 ? 58 : -58;
                  }
                }
              }

              return (
                <motion.div
                  key={i}
                  animate={{ x, rotateY, left }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                  }}
                  className="absolute top-0 h-full border-[6px] border-[#2a2a2a] bg-[#111] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
                  style={{
                    width: closedWidth,
                    transformStyle: "preserve-3d",
                    transformOrigin:
                      stack === "right" ? "right center" : "left center",
                  }}
                >
                  <div className="absolute inset-[9px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
                  </div>

                  <div className="absolute right-0 top-0 h-full w-[1px] bg-yellow-500/30" />
                </motion.div>
              );
            })}
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