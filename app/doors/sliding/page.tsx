"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type PanelCount = 2 | 3 | 4;
type OpenDirection = "left" | "right" | "center";

const features = [
  "Thermal Break Frame",
  "Slim Interlock",
  "Lift & Slide Motion",
  "Large Panel Capacity",
  "Flush Track",
  "Security Locking",
  "Water Tightness",
  "Wind Load Resistance",
];

export default function SlidingDoorPage() {
  const [panels, setPanels] = useState<PanelCount>(3);
  const [direction, setDirection] = useState<OpenDirection>("left");
  const [open, setOpen] = useState(true);

  const panelArray = useMemo<number[]>(
    () => Array.from({ length: panels }, (_, index) => index),
    [panels]
  );

  const getPanelMotion = (i: number): { x: number } => {
    if (!open) return { x: 0 };

    if (direction === "left") {
      return i === panels - 1 ? { x: -120 } : { x: 0 };
    }

    if (direction === "right") {
      return i === 0 ? { x: 120 } : { x: 0 };
    }

    if (direction === "center") {
      if (i === 0) return { x: -90 };
      if (i === panels - 1) return { x: 90 };
    }

    return { x: 0 };
  };

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500/80">
            Luxora Sliding Door Systems
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            Sliding Doors
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
            Slim frame sliding doors with expansive glass, smooth luxury motion,
            thermal performance, and refined architectural detailing.
          </p>
        </div>

        {/* MAIN BUTTONS */}
        <div className="mb-12 flex flex-wrap gap-3">
          {[2, 3, 4].map((n) => (
            <button
              key={n}
              onClick={() => setPanels(n as PanelCount)}
              className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                panels === n
                  ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                  : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
              }`}
            >
              {n} Panel
            </button>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          {/* GRAPHIC */}
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">
            {/* CONTROLS */}
            <div className="mb-6 flex flex-wrap gap-3">
              {[
                ["left", "Slide Left"],
                ["right", "Slide Right"],
                ["center", "Center Open"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setDirection(value as OpenDirection)}
                  className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                    direction === value
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

            {/* VISUAL */}
            <SlidingVisual
              panels={panels}
              panelArray={panelArray}
              getPanelMotion={getPanelMotion}
            />

            {/* MINI SPECS */}
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Frame", "6066-T6 Aluminum"],
                ["Glass", "Double / Triple"],
                ["Motion", "Sliding System"],
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

          {/* RIGHT SECTION */}
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <h2 className="mb-8 text-xl font-light uppercase tracking-[0.18em]">
              NFRC Certified Performance
            </h2>

            <div className="space-y-7">
              <InfoBlock
                title="Performance"
                rows={[
                  ["U-Factor", "0.23 Triple / 0.29 Double"],
                  ["SHGC", "0.14 Triple / 0.40 Double"],
                  ["VT", "0.29 Triple / 0.48 Double"],
                  ["CR", "68 Triple / 48 Double"],
                  ["STC", "38 Triple / 32 Double"],
                ]}
              />

              <InfoBlock
                title="Series Profiles"
                rows={[
                  ["170", "Slim Frame Sliding Door"],
                  ["150", "Thermal Break Lift Sliding Door"],
                  ["135", "Heavy Duty Sliding Door"],
                  ["Frame", "6066-T6 Aluminum"],
                  ["Finish", "RAL Powder Coat / Anodized"],
                ]}
              />

              <InfoBlock
                title="System"
                rows={[
                  ["Panel Options", "2 / 3 / 4"],
                  ["Opening", "Left / Right / Center"],
                  ["Hardware", "Lift & Slide"],
                  ["Track", "Flush / Low Profile"],
                ]}
              />
            </div>
          </div>
        </div>

        {/* FEATURES */}
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

function SlidingVisual({
  panels,
  panelArray,
  getPanelMotion,
}: {
  panels: number;
  panelArray: number[];
  getPanelMotion: (i: number) => { x: number };
}) {
  return (
    <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">
      <div className="relative h-[320px] w-[90%] border-[10px] border-[#1b1b1b] bg-[#0b0b0b] shadow-2xl">
        <div className="absolute left-[-10px] right-[-10px] top-[-10px] h-[5px] bg-yellow-500/30" />
        <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/20" />

        <div className="absolute inset-[18px] flex overflow-hidden border border-white/10">
          {panelArray.map((i) => (
            <motion.div
              key={i}
              animate={getPanelMotion(i)}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 18,
              }}
              className="relative h-full border-[7px] border-[#2a2a2a] bg-[#111]"
              style={{
                width: `${100 / panels}%`,
                zIndex: panels - i,
              }}
            >
              <div className="absolute inset-[10px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
              </div>

              <div className="absolute right-0 top-0 h-full w-[1px] bg-yellow-500/30" />
            </motion.div>
          ))}
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