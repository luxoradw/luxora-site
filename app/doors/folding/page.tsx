"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type StackSide = "left" | "right" | "center";

export default function FoldingDoorPage() {
  const [panels, setPanels] = useState(4);
  const [open, setOpen] = useState(true);
  const [stack, setStack] =
    useState<StackSide>("left");

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.18),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.45em] text-[#c8a45d]">
              Luxora Folding Door Systems
            </p>

            <h1 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
              Thermal break folding doors designed for seamless luxury living.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/55">
              Premium aluminum bifold systems with ultra-slim sightlines,
              thermal insulation, smooth folding movement, and panoramic openings.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#c8a45d]/20 bg-[#0b0b0b] p-5 shadow-[0_35px_100px_rgba(0,0,0,.6)]">
            <FoldingVisual
              panels={panels}
              open={open}
              stack={stack}
            />
          </div>
        </div>
      </section>

      {/* CONFIGURATOR */}
      <section className="px-6 pb-24 md:px-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-6">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-2xl font-light">
                  Folding Motion Preview
                </h2>

                <p className="mt-1 text-sm text-white/45">
                  Interactive bifold animation
                </p>
              </div>

              <span className="rounded-full border border-[#c8a45d]/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                Thermal Break 68
              </span>
            </div>

            <FoldingVisual
              panels={panels}
              open={open}
              stack={stack}
            />
          </div>

          {/* CONFIG */}
          <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6">
            <h3 className="text-2xl font-light">
              Configure System
            </h3>

            <p className="mt-2 text-sm leading-7 text-white/50">
              Select folding configuration and stacking direction.
            </p>

            <div className="mt-8 space-y-8">
              {/* PANELS */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                  Panels
                </p>

                <div className="flex flex-wrap gap-3">
                  {[2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      onClick={() =>
                        setPanels(num)
                      }
                      className={`rounded-full px-4 py-2 text-sm transition ${
                        panels === num
                          ? "bg-[#c8a45d] text-black"
                          : "border border-white/10 text-white/60 hover:border-[#c8a45d]/50"
                      }`}
                    >
                      {num} Panel
                    </button>
                  ))}
                </div>
              </div>

              {/* STACK */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                  Stack Direction
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    ["left", "Left Stack"],
                    ["right", "Right Stack"],
                    ["center", "Center Stack"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() =>
                        setStack(
                          value as StackSide
                        )
                      }
                      className={`rounded-full px-4 py-2 text-sm transition ${
                        stack === value
                          ? "bg-[#c8a45d] text-black"
                          : "border border-white/10 text-white/60 hover:border-[#c8a45d]/50"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* POSITION */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                  Position
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      setOpen(false)
                    }
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      !open
                        ? "bg-[#c8a45d] text-black"
                        : "border border-white/10 text-white/60 hover:border-[#c8a45d]/50"
                    }`}
                  >
                    Closed
                  </button>

                  <button
                    onClick={() =>
                      setOpen(true)
                    }
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      open
                        ? "bg-[#c8a45d] text-black"
                        : "border border-white/10 text-white/60 hover:border-[#c8a45d]/50"
                    }`}
                  >
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="px-6 pb-28 md:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-5">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#c8a45d]">
              Product Specifications
            </p>

            <div className="hidden h-px w-28 bg-gradient-to-r from-[#c8a45d]/60 to-transparent md:block" />
          </div>

          <div className="grid gap-7 lg:grid-cols-[.9fr_1.2fr_.9fr]">
            {/* LEFT */}
            <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-7">
              <h3 className="mb-7 text-[14px] uppercase tracking-[0.28em] text-[#c8a45d]">
                Folding Door 68
              </h3>

              <div className="space-y-4">
                <SpecLine
                  label="Frame"
                  value="6066-T6 Aluminum"
                />

                <SpecLine
                  label="Thickness"
                  value="1.4mm - 2.5mm"
                />

                <SpecLine
                  label="Glass"
                  value="Single / Double"
                />

                <SpecLine
                  label="Glass Thickness"
                  value="5mm - 10mm"
                />

                <SpecLine
                  label="Finish"
                  value="RAL / Anodized"
                />
              </div>
            </div>

            {/* CENTER */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.12),transparent_45%)]" />

              <div className="relative h-[360px] overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#222] via-[#101010] to-black">
                <FoldingVisual
                  panels={panels}
                  open={open}
                  stack={stack}
                />

                <p className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.35em] text-[#c8a45d]">
                  Luxury Folding System
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-7">
              <h3 className="mb-7 text-[14px] uppercase tracking-[0.28em] text-[#c8a45d]">
                NFRC Performance
              </h3>

              <div className="space-y-4">
                <SpecLine
                  label="U-Factor"
                  value="0.22 Triple"
                />

                <SpecLine
                  label="SHGC"
                  value="0.15"
                />

                <SpecLine
                  label="VT"
                  value="0.30"
                />

                <SpecLine
                  label="CR"
                  value="68"
                />

                <SpecLine
                  label="STC"
                  value="38"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative overflow-hidden px-6 pb-28 pt-8 md:px-14">
        <div className="absolute left-[-10%] top-0 h-[450px] w-[450px] rounded-full bg-[#c8a45d]/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-5">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#c8a45d]">
              Premium Features
            </p>

            <div className="hidden h-px w-24 bg-gradient-to-r from-[#c8a45d]/60 to-transparent md:block" />
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_35px_100px_rgba(0,0,0,0.55)] md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Thermal Break",
                desc: "Advanced thermal insulation system for energy efficiency.",
              },

              {
                title: "Slim Sightlines",
                desc: "Minimal aluminum profiles maximize glass visibility.",
              },

              {
                title: "Smooth Folding",
                desc: "Precision roller system for effortless movement.",
              },

              {
                title: "Large Openings",
                desc: "Creates seamless indoor and outdoor transitions.",
              },

              {
                title: "Heavy Duty Hardware",
                desc: "Architectural hinges and premium rollers.",
              },

              {
                title: "Custom Finishes",
                desc: "Available in matte black, bronze, anodized, and RAL finishes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden bg-[linear-gradient(180deg,#0d0d0d_0%,#080808_100%)] p-7 transition duration-700 hover:bg-[#101010]"
              >
                <div className="absolute inset-0 border border-white/5" />

                <div className="absolute right-[-40px] top-[-40px] h-36 w-36 rounded-full bg-[#c8a45d]/0 blur-3xl transition duration-700 group-hover:bg-[#c8a45d]/10" />

                <div className="mb-7 flex items-center justify-between">
                  <div className="h-px w-10 bg-[#c8a45d]/45 transition duration-500 group-hover:w-16" />

                  <span className="text-[10px] tracking-[0.4em] text-[#c8a45d]/50">
                    LUXORA
                  </span>
                </div>

                <h3 className="text-[15px] font-light tracking-[0.08em] text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 tracking-[0.03em] text-white/45">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#c8a45d]/35 to-transparent" />

                  <div className="h-[5px] w-[5px] rounded-full bg-[#c8a45d]/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FoldingVisual({
  panels,
  open,
  stack,
}: {
  panels: number;
  open: boolean;
  stack: StackSide;
}) {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.14),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute left-1/2 top-[50%] h-[240px] w-[78%] -translate-x-1/2 -translate-y-1/2 border-[18px] border-[#181818] shadow-[inset_0_0_0_1px_rgba(200,164,93,.45)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/4 to-black/40" />

        <div className="absolute left-[18px] right-[18px] top-[18px] h-[4px] bg-gradient-to-r from-[#7c642e] via-[#d6b76d] to-[#7c642e]" />
        <div className="absolute bottom-[18px] left-[18px] right-[18px] h-[4px] bg-gradient-to-r from-[#7c642e] via-[#d6b76d] to-[#7c642e]" />

        {/* EXACT INNER OPENING */}
        <div className="absolute left-[30px] right-[30px] top-[35px] bottom-[35px] overflow-hidden">
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
                  x = i * 16;
                  rotateY = i % 2 === 0 ? -58 : 58;
                }

                if (stack === "right") {
                  left = `${100 - 100 / panels}%`;
                  x = -i * 16;
                  rotateY = i % 2 === 0 ? 58 : -58;
                }

                if (stack === "center") {
                  const mid = panels / 2;

                  if (i < mid) {
                    left = "0%";
                    x = i * 15;
                    rotateY = i % 2 === 0 ? -58 : 58;
                  } else {
                    left = `${100 - 100 / panels}%`;
                    x = -(i - mid) * 15;
                    rotateY = i % 2 === 0 ? 58 : -58;
                  }
                }
              }

              return (
                <motion.div
                  key={i}
                  animate={{
                    x,
                    rotateY,
                    left,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                  }}
                  className="absolute top-0 h-full border border-[#c8a45d]/55 bg-[#101010] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
                  style={{
                    width: closedWidth,
                    transformStyle: "preserve-3d",
                    transformOrigin:
                      stack === "right"
                        ? "right center"
                        : "left center",
                  }}
                >
                  <div className="absolute inset-0 border-[5px] border-[#1b1b1b]" />
                  <div className="absolute inset-[6px] bg-gradient-to-br from-white/18 via-white/5 to-black/35" />
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#c8a45d]/35" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 h-[110px] w-full bg-gradient-to-b from-[#111] to-[#050505]" />
      <div className="absolute bottom-[78px] left-1/2 h-px w-[84%] -translate-x-1/2 bg-[#c8a45d]/35" />
      <div className="absolute bottom-[28px] left-1/2 h-14 w-[70%] -translate-x-1/2 rounded-full bg-[#c8a45d]/10 blur-2xl" />
    </div>
  );
}

function SpecLine({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-6 border-b border-white/10 pb-3 text-sm">
      <span className="text-white/45">
        {label}
      </span>

      <span className="text-right text-white/75">
        {value}
      </span>
    </div>
  );
}