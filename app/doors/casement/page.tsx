"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type OpenDirection = "inward" | "outward";
type HingeSide = "left" | "right";

const features = [
  "Thermal Break Frame",
  "Superior Sealing",
  "Luxury Hardware",
  "Wind Load Resistance",
  "Slim Sightline",
  "Custom Finish",
  "Smooth Swing Motion",
  "Architectural Detail",
];

export default function CasementDoorPage() {
  const [open, setOpen] = useState(true);
  const [direction, setDirection] = useState<OpenDirection>("outward");
  const [hinge, setHinge] = useState<HingeSide>("left");

  const rotate =
    !open
      ? 0
      : hinge === "left"
      ? direction === "outward"
        ? -65
        : 65
      : direction === "outward"
      ? 65
      : -65;

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        {/* Hero Image */}
<section className="relative mb-16 h-[650px] overflow-hidden rounded-[30px] border border-white/10">
  <img
    src="/casementdoor.png"
    alt="Luxora Casement Door"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 flex h-full items-center px-10 md:px-16">
    <div className="max-w-3xl">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
        LUXORA DOOR SYSTEMS
      </p>

      <h1 className="text-5xl font-light uppercase tracking-[0.15em] md:text-7xl">
        Casement Doors
      </h1>

      <p className="mt-6 max-w-xl text-lg text-white/75">
        Elegant hinged door systems offering superior sealing,
        energy efficiency, timeless design, and smooth operation
        for luxury residential and commercial spaces.
      </p>
    </div>
  </div>
</section>
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500/80">
            Luxora Casement Door Systems
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            Casement Doors
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
            Thermal break casement doors designed for refined residential and
            commercial applications with superior sealing, thermal insulation,
            and elegant operation.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {[
            ["outward", "Outward"],
            ["inward", "Inward"],
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
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">
            <div className="mb-6 flex flex-wrap gap-3">
              {[
                ["left", "Left Hinge"],
                ["right", "Right Hinge"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setHinge(value as HingeSide)}
                  className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                    hinge === value
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

            <CasementVisual rotate={rotate} hinge={hinge} />

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Frame", "6066-T6 Aluminum"],
                ["Glass", "Single / Double"],
                ["Motion", "Casement System"],
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
                  ["Door Type", "Casement Door 65"],
                  ["Hinge Side", "Left / Right"],
                  ["Opening", "Inward / Outward"],
                  ["Hardware", "Premium Hinges"],
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

function CasementVisual({
  rotate,
  hinge,
}: {
  rotate: number;
  hinge: HingeSide;
}) {
  return (
    <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">
      <div className="relative h-[320px] w-[90%] border-[10px] border-[#1b1b1b] bg-[#0b0b0b] shadow-2xl">
        <div className="absolute left-[-10px] right-[-10px] top-[-10px] h-[5px] bg-yellow-500/30" />
        <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/20" />

        <div className="absolute inset-[18px] overflow-visible border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/[0.04] to-black/40" />

          <motion.div
            animate={{ rotateY: rotate }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
            className="absolute top-0 h-full w-[42%] border-[7px] border-[#2a2a2a] bg-[#111] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
            style={{
              left: hinge === "left" ? "10%" : "48%",
              transformStyle: "preserve-3d",
              transformOrigin: hinge === "left" ? "left center" : "right center",
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