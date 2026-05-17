"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type OpenDirection = "inward" | "outward";
type HingeSide = "left" | "right";

export default function CasementDoorPage() {
  const [open, setOpen] = useState(true);
  const [direction, setDirection] =
    useState<OpenDirection>("outward");
  const [hinge, setHinge] =
    useState<HingeSide>("left");

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
    <main className="min-h-screen bg-[#070707] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.18),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.45em] text-[#c8a45d]">
              Luxora Casement Door Systems
            </p>

            <h1 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
              Thermal break casement doors with luxury architectural detailing.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/55">
              Designed for refined residential and commercial applications with
              superior sealing, thermal insulation, and elegant operation.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="rounded-[2rem] border border-[#c8a45d]/20 bg-[#0b0b0b] p-5 shadow-[0_35px_100px_rgba(0,0,0,.6)]">
            <CasementVisual
              rotate={rotate}
              hinge={hinge}
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
                  Casement Motion Preview
                </h2>

                <p className="mt-1 text-sm text-white/45">
                  Interactive opening animation
                </p>
              </div>

              <span className="rounded-full border border-[#c8a45d]/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                Thermal Break 65
              </span>
            </div>

            <CasementVisual
              rotate={rotate}
              hinge={hinge}
            />
          </div>

          {/* RIGHT CONFIG */}
          <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6">
            <h3 className="text-2xl font-light">
              Configure System
            </h3>

            <p className="mt-2 text-sm leading-7 text-white/50">
              Select hinge side and opening direction.
            </p>

            <div className="mt-8 space-y-8">
              {/* OPENING */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                  Opening Direction
                </p>

                <div className="flex gap-3">
                  {[
                    ["outward", "Outward"],
                    ["inward", "Inward"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() =>
                        setDirection(
                          value as OpenDirection
                        )
                      }
                      className={`rounded-full px-4 py-2 text-sm transition ${
                        direction === value
                          ? "bg-[#c8a45d] text-black"
                          : "border border-white/10 text-white/60 hover:border-[#c8a45d]/50"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* HINGE */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                  Hinge Side
                </p>

                <div className="flex gap-3">
                  {[
                    ["left", "Left"],
                    ["right", "Right"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() =>
                        setHinge(
                          value as HingeSide
                        )
                      }
                      className={`rounded-full px-4 py-2 text-sm transition ${
                        hinge === value
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
                    onClick={() => setOpen(false)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      !open
                        ? "bg-[#c8a45d] text-black"
                        : "border border-white/10 text-white/60 hover:border-[#c8a45d]/50"
                    }`}
                  >
                    Closed
                  </button>

                  <button
                    onClick={() => setOpen(true)}
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
                Casement Door 65
              </h3>

              <div className="space-y-4">
                <SpecLine
                  label="Frame"
                  value="6066-T6 Aluminum"
                />

                <SpecLine
                  label="Thickness"
                  value="2.0mm / 3.0mm"
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

            {/* CENTER IMAGE */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.12),transparent_45%)]" />

              <div className="relative h-[360px] overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#222] via-[#101010] to-black">
                <div className="absolute left-1/2 top-12 h-[240px] w-[70%] -translate-x-1/2 border-[14px] border-[#151515] shadow-[inset_0_0_0_1px_rgba(200,164,93,.35)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/14 via-white/4 to-black/40" />
                </div>

                <motion.div
                  animate={{
                    rotateY: rotate,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                  }}
                  className="absolute top-[75px] h-[190px] w-[90px] border border-[#c8a45d]/50 bg-[#111] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
                  style={{
                    left:
                      hinge === "left"
                        ? "35%"
                        : "50%",

                    transformOrigin:
                      hinge === "left"
                        ? "left center"
                        : "right center",

                    transformStyle:
                      "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 border-[7px] border-[#1a1a1a]" />

                  <div className="absolute inset-[8px] bg-gradient-to-br from-white/16 via-white/5 to-black/40" />

                  <div className="absolute right-3 top-1/2 h-20 w-[4px] -translate-y-1/2 rounded-full bg-[#c8a45d]" />
                </motion.div>

                <div className="absolute bottom-0 h-28 w-full bg-gradient-to-t from-black to-transparent" />

                <p className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.35em] text-[#c8a45d]">
                  Luxury Casement System
                </p>
              </div>
            </div>

            {/* RIGHT PERFORMANCE */}
            <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-7">
              <h3 className="mb-7 text-[14px] uppercase tracking-[0.28em] text-[#c8a45d]">
                NFRC Performance
              </h3>

              <div className="space-y-4">
                <SpecLine
                  label="U-Factor"
                  value="0.20 Triple"
                />

                <SpecLine
                  label="SHGC"
                  value="0.12"
                />

                <SpecLine
                  label="VT"
                  value="0.25"
                />

                <SpecLine
                  label="CR"
                  value="73"
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
    <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.14),transparent_42%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute left-1/2 top-[48%] h-[280px] w-[78%] -translate-x-1/2 -translate-y-1/2 bg-[#050505] shadow-[0_0_80px_rgba(0,0,0,.9)]">
        <div className="absolute inset-0 border-[18px] border-[#181818] shadow-[inset_0_0_0_1px_rgba(200,164,93,.45)]" />

        <div className="absolute inset-[18px] border border-[#c8a45d]/35" />

        <div className="absolute left-[34px] right-[34px] top-[36px] h-[5px] rounded-full bg-gradient-to-r from-[#7c642e] via-[#d6b76d] to-[#7c642e]" />

        <div className="absolute bottom-[36px] left-[34px] right-[34px] h-[5px] rounded-full bg-gradient-to-r from-[#7c642e] via-[#d6b76d] to-[#7c642e]" />

        <div className="absolute inset-[45px] overflow-visible">
          <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/4 to-black/40" />

          <motion.div
            animate={{
              rotateY: rotate,
            }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 18,
            }}
            className="absolute top-0 h-full w-[42%] border border-[#c8a45d]/55 bg-[#101010] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
            style={{
              left:
                hinge === "left"
                  ? "10%"
                  : "48%",

              transformStyle:
                "preserve-3d",

              transformOrigin:
                hinge === "left"
                  ? "left center"
                  : "right center",
            }}
          >
            <div className="absolute inset-0 border-[7px] border-[#1b1b1b]" />

            <div className="absolute inset-[8px] bg-gradient-to-br from-white/18 via-white/5 to-black/35" />

            <div className="absolute left-[-40%] top-[-10%] h-[120%] w-[45%] rotate-[18deg] bg-white/15 blur-sm" />

            <div className="absolute right-4 top-1/2 h-20 w-[4px] -translate-y-1/2 rounded-full bg-[#c8a45d]" />
          </motion.div>
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