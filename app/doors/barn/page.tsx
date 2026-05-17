"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type SlideDirection = "left" | "right";

export default function BarnDoorPage() {
  const [open, setOpen] = useState(true);
  const [direction, setDirection] =
    useState<SlideDirection>("right");

  const slideX =
    !open ? 0 : direction === "right" ? 180 : -180;

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.18),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.45em] text-[#c8a45d]">
              Luxora Barn Door Systems
            </p>

            <h1 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
              Modern glass barn doors with architectural luxury detailing.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/55">
              Designed with slim aluminum frames, exposed sliding hardware,
              smooth rolling systems, and contemporary interior elegance.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="rounded-[2rem] border border-[#c8a45d]/20 bg-[#0b0b0b] p-5 shadow-[0_35px_100px_rgba(0,0,0,.6)]">
            <BarnVisual
              slideX={slideX}
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
                  Barn Door Motion Preview
                </h2>

                <p className="mt-1 text-sm text-white/45">
                  Interactive sliding movement
                </p>
              </div>

              <span className="rounded-full border border-[#c8a45d]/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                Barn Door 4518
              </span>
            </div>

            <BarnVisual
              slideX={slideX}
            />
          </div>

          {/* CONFIG */}
          <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6">
            <h3 className="text-2xl font-light">
              Configure System
            </h3>

            <p className="mt-2 text-sm leading-7 text-white/50">
              Select sliding direction and position.
            </p>

            <div className="mt-8 space-y-8">
              {/* DIRECTION */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                  Slide Direction
                </p>

                <div className="flex gap-3">
                  {[
                    ["left", "Left"],
                    ["right", "Right"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() =>
                        setDirection(
                          value as SlideDirection
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
                Barn Door 4518
              </h3>

              <div className="space-y-4">
                <SpecLine
                  label="Frame"
                  value="6066-T6 Aluminum"
                />

                <SpecLine
                  label="Thickness"
                  value="2.5mm"
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
                {/* TRACK */}
                <div className="absolute left-1/2 top-12 h-[10px] w-[72%] -translate-x-1/2 rounded-full bg-[#1d1d1d] shadow-[inset_0_0_0_1px_rgba(200,164,93,.35)]" />

                {/* WALL */}
                <div className="absolute left-1/2 top-[70px] h-[230px] w-[72%] -translate-x-1/2 border-[14px] border-[#151515]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/14 via-white/4 to-black/40" />
                </div>

                {/* DOOR */}
                <motion.div
                  animate={{
                    x: slideX,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                  }}
                  className="absolute left-[20%] top-[82px] h-[205px] w-[120px] border border-[#c8a45d]/50 bg-[#111] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
                >
                  <div className="absolute inset-0 border-[7px] border-[#1a1a1a]" />

                  <div className="absolute inset-[8px] bg-gradient-to-br from-white/16 via-white/5 to-black/40" />

                  {/* GRID */}
                  <div className="absolute inset-[18px] border border-[#c8a45d]/45" />

                  <div className="absolute left-1/2 top-[18px] h-[calc(100%-36px)] w-px -translate-x-1/2 bg-[#c8a45d]/35" />

                  <div className="absolute left-[18px] right-[18px] top-1/2 h-px -translate-y-1/2 bg-[#c8a45d]/35" />

                  {/* ROLLERS */}
                  <div className="absolute -top-5 left-5 h-5 w-5 rounded-full border border-[#c8a45d]/60 bg-black" />

                  <div className="absolute -top-5 right-5 h-5 w-5 rounded-full border border-[#c8a45d]/60 bg-black" />

                  {/* HANDLE */}
                  <div className="absolute right-3 top-1/2 h-16 w-[4px] -translate-y-1/2 rounded-full bg-[#c8a45d]" />
                </motion.div>

                <div className="absolute bottom-0 h-28 w-full bg-gradient-to-t from-black to-transparent" />

                <p className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.35em] text-[#c8a45d]">
                  Luxury Sliding Barn System
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-7">
              <h3 className="mb-7 text-[14px] uppercase tracking-[0.28em] text-[#c8a45d]">
                Performance
              </h3>

              <div className="space-y-4">
                <SpecLine
                  label="Water Tightness"
                  value="Excellent"
                />

                <SpecLine
                  label="Air Tightness"
                  value="Advanced"
                />

                <SpecLine
                  label="Sound Control"
                  value="High"
                />

                <SpecLine
                  label="Operation"
                  value="Smooth Rolling"
                />

                <SpecLine
                  label="Hardware"
                  value="Heavy Duty"
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
                title: "Smooth Sliding",
                desc: "Precision rolling system for effortless motion.",
              },

              {
                title: "Slim Frame",
                desc: "Minimal aluminum profile for modern interiors.",
              },

              {
                title: "Luxury Hardware",
                desc: "Architectural exposed track and roller system.",
              },

              {
                title: "Soft Close",
                desc: "Quiet and controlled sliding movement.",
              },

              {
                title: "Glass Options",
                desc: "Available in clear, frosted, and decorative glass.",
              },

              {
                title: "Custom Finishes",
                desc: "Matte black, bronze, anodized, and RAL colors.",
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

function BarnVisual({
  slideX,
}: {
  slideX: number;
}) {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.14),transparent_42%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* TRACK */}
      <div className="absolute left-1/2 top-[90px] h-[8px] w-[78%] -translate-x-1/2 rounded-full bg-[#1b1b1b] shadow-[inset_0_0_0_1px_rgba(200,164,93,.45)]" />

      {/* WALL */}
      <div className="absolute left-1/2 top-[100px] h-[240px] w-[78%] -translate-x-1/2 border-[18px] border-[#181818] shadow-[inset_0_0_0_1px_rgba(200,164,93,.45)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/4 to-black/40" />
      </div>

      {/* DOOR */}
      <motion.div
        animate={{
          x: slideX,
        }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 18,
        }}
        className="absolute left-[18%] top-[108px] h-[205px] w-[140px] border border-[#c8a45d]/55 bg-[#101010] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
      >
        <div className="absolute inset-0 border-[7px] border-[#1b1b1b]" />

        <div className="absolute inset-[8px] bg-gradient-to-br from-white/18 via-white/5 to-black/35" />

        {/* GRID */}
        <div className="absolute inset-[18px] border border-[#c8a45d]/45" />

        <div className="absolute left-1/2 top-[18px] h-[calc(100%-36px)] w-px -translate-x-1/2 bg-[#c8a45d]/35" />

        <div className="absolute left-[18px] right-[18px] top-1/2 h-px -translate-y-1/2 bg-[#c8a45d]/35" />

        {/* ROLLERS */}
        <div className="absolute -top-5 left-6 h-5 w-5 rounded-full border border-[#c8a45d]/60 bg-black" />

        <div className="absolute -top-5 right-6 h-5 w-5 rounded-full border border-[#c8a45d]/60 bg-black" />

        {/* HANDLE */}
        <div className="absolute right-4 top-1/2 h-16 w-[4px] -translate-y-1/2 rounded-full bg-[#c8a45d]" />
      </motion.div>

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