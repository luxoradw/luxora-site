"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type SlideDirection = "left" | "right";

const features = [
  "Smooth Sliding",
  "Slim Frame",
  "Luxury Hardware",
  "Soft Close",
  "Glass Options",
  "Custom Finish",
  "Exposed Track",
  "Modern Interior",
];

export default function BarnDoorPage() {
  const [open, setOpen] = useState(true);
  const [direction, setDirection] = useState<SlideDirection>("right");

  const slideX = !open ? 0 : direction === "right" ? 180 : -180;

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        {/* Hero Image */}
<section className="relative mb-16 h-[650px] overflow-hidden rounded-[30px] border border-white/10">
  <img
    src="/barndoor.png"
    alt="Luxora Barn Door"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 flex h-full items-center px-10 md:px-16">
    <div className="max-w-3xl">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
        LUXORA DOOR SYSTEMS
      </p>

      <h1 className="text-5xl font-light uppercase tracking-[0.15em] md:text-7xl">
        Barn Doors
      </h1>

      <p className="mt-6 max-w-xl text-lg text-white/75">
        Timeless craftsmanship meets modern functionality with premium
        barn door systems designed for style, durability,
        and effortless operation.
      </p>
    </div>
  </div>
</section>
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500/80">
            Luxora Barn Door Systems
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            Barn Doors
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
            Modern glass barn doors designed with slim aluminum frames, exposed
            sliding hardware, smooth rolling systems, and contemporary interior
            elegance.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {[
            ["left", "Slide Left"],
            ["right", "Slide Right"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setDirection(value as SlideDirection)}
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

            <BarnVisual slideX={slideX} />

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Frame", "6066-T6 Aluminum"],
                ["Glass", "Single / Double"],
                ["Motion", "Sliding Barn System"],
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
              Product Performance
            </h2>

            <div className="space-y-7">
              <InfoBlock
                title="Performance"
                rows={[
                  ["Water Tightness", "Excellent"],
                  ["Air Tightness", "Advanced"],
                  ["Sound Control", "High"],
                  ["Operation", "Smooth Rolling"],
                  ["Hardware", "Heavy Duty"],
                ]}
              />

              <InfoBlock
                title="Specifications"
                rows={[
                  ["Frame", "6066-T6 Aluminum"],
                  ["Thickness", "2.5mm"],
                  ["Glass", "Single / Double"],
                  ["Glass Thickness", "5mm - 10mm"],
                  ["Finish", "RAL / Anodized"],
                ]}
              />

              <InfoBlock
                title="System"
                rows={[
                  ["Door Type", "Barn Door 4518"],
                  ["Slide Direction", "Left / Right"],
                  ["Track", "Exposed Top Track"],
                  ["Hardware", "Roller System"],
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

function BarnVisual({ slideX }: { slideX: number }) {
  return (
    <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">
      <div className="relative h-[320px] w-[90%] border-[10px] border-[#1b1b1b] bg-[#0b0b0b] shadow-2xl">
        <div className="absolute left-[8%] right-[8%] top-[36px] h-[8px] bg-[#1b1b1b] shadow-[inset_0_0_0_1px_rgba(234,179,8,.35)]" />

        <div className="absolute left-1/2 top-[60px] h-[225px] w-[72%] -translate-x-1/2 border-[10px] border-[#1b1b1b]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/[0.04] to-black/40" />
        </div>

        <motion.div
          animate={{ x: slideX }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
          className="absolute left-[20%] top-[72px] h-[205px] w-[125px] border-[7px] border-[#2a2a2a] bg-[#111] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
        >
          <div className="absolute inset-[10px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
          </div>

          <div className="absolute inset-[22px] border border-yellow-500/35" />
          <div className="absolute left-1/2 top-[22px] h-[calc(100%-44px)] w-px -translate-x-1/2 bg-yellow-500/25" />
          <div className="absolute left-[22px] right-[22px] top-1/2 h-px -translate-y-1/2 bg-yellow-500/25" />

          <div className="absolute -top-6 left-5 h-5 w-5 rounded-full border border-yellow-500/60 bg-black" />
          <div className="absolute -top-6 right-5 h-5 w-5 rounded-full border border-yellow-500/60 bg-black" />

          <div className="absolute right-4 top-1/2 h-16 w-[4px] -translate-y-1/2 rounded-full bg-yellow-500/70" />
        </motion.div>

        <div className="absolute left-[-10px] right-[-10px] top-[-10px] h-[5px] bg-yellow-500/30" />
        <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/20" />
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