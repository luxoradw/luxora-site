"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type PivotSide = "left" | "right";
type OpenDirection = "inward" | "outward";

const features = [
  "Central Axis Pivot",
  "Heavy-Duty Aluminum",
  "Superior Air Sealing",
  "High Wind Resistance",
  "Thermal Efficiency",
  "Custom Finish",
  "Oversized Glass",
  "Luxury Entrance",
];

export default function PivotDoorPage() {
  const [open, setOpen] = useState(true);
  const [pivotSide, setPivotSide] = useState<PivotSide>("left");
  const [direction, setDirection] = useState<OpenDirection>("outward");

  const rotateValue =
    !open
      ? 0
      : pivotSide === "left"
      ? direction === "outward"
        ? -72
        : 72
      : direction === "outward"
      ? 72
      : -72;

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        {/* Hero Image */}
<section className="relative mb-16 h-[650px] overflow-hidden rounded-[30px] border border-white/10">
  <img
    src="/pivotdoor.png"
    alt="Luxora Pivot Door"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 flex h-full items-center px-10 md:px-16">
    <div className="max-w-3xl">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
        LUXORA DOOR SYSTEMS
      </p>

      <h1 className="text-5xl font-light uppercase tracking-[0.15em] md:text-7xl">
        Pivot Doors
      </h1>

      <p className="mt-6 max-w-xl text-lg text-white/75">
        Architectural statement entrances featuring oversized panels,
        concealed hardware, and exceptional craftsmanship for luxury homes.
      </p>
    </div>
  </div>
</section>
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500/80">
            Luxora Pivot Door Systems
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            Pivot Doors
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
            Architectural pivot doors combining oversized glass, heavy-duty
            aluminum, central-axis motion, high performance sealing, and luxury
            entrance design.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {[
            ["left", "Left Pivot"],
            ["right", "Right Pivot"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setPivotSide(value as PivotSide)}
              className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                pivotSide === value
                  ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                  : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">
            <div className="mb-6 flex flex-wrap gap-3">
              {[
                ["inward", "Inward"],
                ["outward", "Outward"],
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

            <PivotVisual rotateValue={rotateValue} pivotSide={pivotSide} />

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Frame", "6066-T6 Aluminum"],
                ["Glass", "Single / Double"],
                ["Motion", "Pivot System"],
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
                  ["U-Factor", "0.20 Triple / 0.27 Double"],
                  ["SHGC", "0.12 Triple / 0.35 Double"],
                  ["VT", "0.25 Triple / 0.40 Double"],
                  ["CR", "73 Triple / 49 Double"],
                  ["STC", "38 Triple / 32 Double"],
                ]}
              />

              <InfoBlock
                title="Specifications"
                rows={[
                  ["Frame", "6066-T6 Aluminum"],
                  ["Thickness", "2.0mm / 3.0mm"],
                  ["Glass", "Tempered / Single / Double"],
                  ["Glass Thickness", "5mm / 6mm / 8mm / 10mm"],
                  ["Finish", "RAL Powder Coat / Anodized"],
                ]}
              />

              <InfoBlock
                title="System"
                rows={[
                  ["Door Type", "Pivot Door 80"],
                  ["Pivot Side", "Left / Right"],
                  ["Opening", "Inward / Outward"],
                  ["Hardware", "Heavy-Duty Pivot"],
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

function PivotVisual({
  rotateValue,
  pivotSide,
}: {
  rotateValue: number;
  pivotSide: PivotSide;
}) {
  return (
    <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">
      <div className="relative h-[320px] w-[90%] border-[10px] border-[#1b1b1b] bg-[#0b0b0b] shadow-2xl">
        <div className="absolute left-[-10px] right-[-10px] top-[-10px] h-[5px] bg-yellow-500/30" />
        <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/20" />

        <div className="absolute inset-[18px] overflow-visible border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/[0.04] to-black/40" />
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-yellow-500/30" />

          <motion.div
            animate={{ rotateY: rotateValue }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
            className="absolute top-0 h-full w-[42%] border-[7px] border-[#2a2a2a] bg-[#111] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
            style={{
              left: pivotSide === "left" ? "10%" : "48%",
              transformStyle: "preserve-3d",
              transformOrigin: pivotSide === "left" ? "left center" : "right center",
            }}
          >
            <div className="absolute inset-[10px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
            </div>

            <div className="absolute right-4 top-1/2 h-20 w-[4px] -translate-y-1/2 rounded-full bg-yellow-500/70" />
          </motion.div>
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