"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  "Thermal Break Frame",
  "Lift Sliding System",
  "Large Opening",
  "Smooth Heavy Panel Movement",
  "Double / Triple Glass",
  "Premium Hardware",
  "Water Tightness",
  "Custom RAL Finish",
];

export default function LiftSlidingDoorPage() {
  const [panels, setPanels] = useState(2);
  const [open, setOpen] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("left");

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500/80">
            Luxora Door Systems
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            Lift Sliding Door
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
            Series Thermal Break Lift Sliding Door designed for luxury villas,
            wide openings, high-performance insulation, and smooth operation of
            oversized glass panels.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {[2, 3, 4].map((num) => (
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
              <button
                onClick={() => setDirection("left")}
                className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                  direction === "left"
                    ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                    : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
                }`}
              >
                Slide Left
              </button>

              <button
                onClick={() => setDirection("right")}
                className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                  direction === "right"
                    ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                    : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
                }`}
              >
                Slide Right
              </button>

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

            <LiftSlidingVisual
              panels={panels}
              open={open}
              direction={direction}
            />

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Frame", "6066-T6 Aluminum"],
                ["Glass", "Double / Triple"],
                ["Motion", "Lift Sliding"],
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
                  ["U-Factor", "0.23"],
                  ["SHGC", "0.34"],
                  ["VT", "0.29"],
                  ["CR", "68"],
                  ["STC", "38"],
                ]}
              />

              <InfoBlock
                title="Double Glass"
                rows={[
                  ["U-Factor", "0.29"],
                  ["SHGC", "0.40"],
                  ["VT", "0.48"],
                  ["CR", "43"],
                  ["STC", "32"],
                ]}
              />

              <InfoBlock
                title="Maximum Size"
                rows={[
                  ["Max Width", "472.44”"],
                  ["Max Height", "118.11”"],
                  ["Min Width", "39.3701”"],
                  ["Min Height", "70.8661”"],
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

function LiftSlidingVisual({
  panels,
  open,
  direction,
}: {
  panels: number;
  open: boolean;
  direction: "left" | "right";
}) {
  return (
    <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.12),transparent_45%)]" />

      <div className="relative h-[270px] w-[92%] border-[10px] border-[#171717] bg-[#080808] shadow-2xl">
        <div className="absolute left-[-10px] right-[-10px] top-[-18px] h-[6px] bg-yellow-500/30" />
        <div className="absolute bottom-[-18px] left-[-10px] right-[-10px] h-[6px] bg-yellow-500/20" />

        <div className="absolute inset-[18px] overflow-hidden border border-white/10">
          <div className="relative h-full w-full">
            {[...Array(panels)].map((_, i) => {
              const width = 100 / panels;
              const left = `${i * width}%`;

              const isMoving =
                panels === 2 ? i === 0 : panels === 3 ? i !== 1 : i === 1 || i === 2;

              const moveAmount = direction === "left" ? -42 : 42;

              return (
                <motion.div
                  key={i}
                  animate={{
                    x: open && isMoving ? `${moveAmount}%` : "0%",
                    y: open && isMoving ? -7 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 65,
                    damping: 18,
                  }}
                  className="absolute top-0 h-full border-[6px] border-[#252525] bg-[#111] shadow-[20px_0_45px_rgba(0,0,0,.55)]"
                  style={{
                    width: `${width}%`,
                    left,
                    zIndex: isMoving ? 20 : 10,
                  }}
                >
                  <div className="absolute inset-[9px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.16),transparent)]" />
                  </div>

                  <div className="absolute right-0 top-0 h-full w-[1px] bg-yellow-500/35" />
                  <div className="absolute bottom-3 left-1/2 h-2 w-10 -translate-x-1/2 rounded-full bg-yellow-500/30" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-[-32px] left-[8%] right-[8%] h-[3px] bg-white/10">
          <motion.div
            animate={{ x: open ? (direction === "left" ? "-35%" : "35%") : "0%" }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
            className="mx-auto h-[3px] w-1/3 bg-yellow-500/60"
          />
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