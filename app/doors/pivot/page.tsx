"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type PivotSide = "left" | "right";
type OpenDirection = "inward" | "outward";

export default function PivotDoorPage() {
  const [open, setOpen] = useState(true);
  const [pivotSide, setPivotSide] = useState<PivotSide>("left");
  const [direction, setDirection] = useState<OpenDirection>("outward");

  const rotateValue =
    !open ? 0 : pivotSide === "left" ? (direction === "outward" ? -72 : 72) : direction === "outward" ? 72 : -72;

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.18),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.45em] text-[#c8a45d]">
              Luxora Pivot Door Systems
            </p>

            <h1 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
              Architectural pivot doors designed as a bold modern statement.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/55">
              Luxora pivot systems combine oversized glass, heavy-duty aluminum,
              central-axis motion, high performance sealing, and luxury entrance design.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#c8a45d]/20 bg-[#0b0b0b] p-5 shadow-[0_35px_100px_rgba(0,0,0,.6)]">
            <PivotVisual rotateValue={rotateValue} pivotSide={pivotSide} />
          </div>
        </div>
      </section>

      {/* CONFIGURATOR */}
      <section className="px-6 pb-24 md:px-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-6">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-2xl font-light">Pivot Motion Preview</h2>
                <p className="mt-1 text-sm text-white/45">
                  Interactive central-axis movement
                </p>
              </div>

              <span className="rounded-full border border-[#c8a45d]/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                Pivot 80
              </span>
            </div>

            <PivotVisual rotateValue={rotateValue} pivotSide={pivotSide} />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6">
            <h3 className="text-2xl font-light">Configure System</h3>
            <p className="mt-2 text-sm leading-7 text-white/50">
              Select pivot side, opening direction, and door position.
            </p>

            <div className="mt-8 space-y-8">
              <Control title="Pivot Side">
                {[
                  ["left", "Left Pivot"],
                  ["right", "Right Pivot"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => setPivotSide(value as PivotSide)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      pivotSide === value
                        ? "bg-[#c8a45d] text-black"
                        : "border border-white/10 text-white/60 hover:border-[#c8a45d]/50"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </Control>

              <Control title="Opening Direction">
                {[
                  ["inward", "Inward"],
                  ["outward", "Outward"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => setDirection(value as OpenDirection)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      direction === value
                        ? "bg-[#c8a45d] text-black"
                        : "border border-white/10 text-white/60 hover:border-[#c8a45d]/50"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </Control>

              <Control title="Position">
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
              </Control>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SPECIFICATIONS */}
      <section className="px-6 pb-28 md:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-5">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#c8a45d]">
              Product Specifications
            </p>
            <div className="hidden h-px w-28 bg-gradient-to-r from-[#c8a45d]/60 to-transparent md:block" />
          </div>

          <div className="grid gap-7 lg:grid-cols-[.9fr_1.2fr_.9fr]">
            <SpecCard title="Pivot Door 80">
              <SpecLine label="Frame" value="6066-T6 Aluminum" />
              <SpecLine label="Thickness" value="2.0mm / 3.0mm" />
              <SpecLine label="Glass" value="Tempered / Single / Double" />
              <SpecLine label="Glass Thickness" value="5mm, 6mm, 8mm, 10mm" />
              <SpecLine label="Finish" value="RAL Powder Coat / Anodized" />
            </SpecCard>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.12),transparent_45%)]" />
              <div className="relative h-[360px] overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#222] via-[#101010] to-black">
                <div className="absolute left-1/2 top-12 h-[240px] w-[70%] -translate-x-1/2 border-[14px] border-[#151515] shadow-[inset_0_0_0_1px_rgba(200,164,93,.35)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/14 via-white/4 to-black/40" />
                  <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#c8a45d]/45" />
                </div>

                <motion.div
                  animate={{ rotateY: rotateValue }}
                  transition={{ type: "spring", stiffness: 70, damping: 18 }}
                  className="absolute left-[43%] top-[75px] h-[190px] w-[90px] origin-left border border-[#c8a45d]/50 bg-[#111] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 border-[7px] border-[#1a1a1a]" />
                  <div className="absolute inset-[8px] bg-gradient-to-br from-white/16 via-white/5 to-black/40" />
                  <div className="absolute right-3 top-1/2 h-20 w-[4px] -translate-y-1/2 rounded-full bg-[#c8a45d]" />
                </motion.div>

                <div className="absolute bottom-0 h-28 w-full bg-gradient-to-t from-black to-transparent" />
                <p className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.35em] text-[#c8a45d]">
                  Architectural Entry System
                </p>
              </div>
            </div>

            <SpecCard title="NFRC Performance">
              <SpecLine label="U-Factor" value="0.20 Triple / 0.27 Double" />
              <SpecLine label="SHGC" value="0.12 Triple / 0.35 Double" />
              <SpecLine label="VT" value="0.25 Triple / 0.40 Double" />
              <SpecLine label="CR" value="73 Triple / 49 Double" />
              <SpecLine label="STC" value="38 Triple / 32 Double" />
            </SpecCard>
          </div>
        </div>
      </section>

      {/* PREMIUM FEATURES */}
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
                title: "Central Axis Pivot",
                desc: "A dramatic pivot movement creates a bold luxury entrance experience.",
                icon: <LuxuryIcon type="pivot" />,
              },
              {
                title: "Heavy-Duty Aluminum",
                desc: "6066-T6 aluminum frame system engineered for oversized door panels.",
                icon: <LuxuryIcon type="frame" />,
              },
              {
                title: "Superior Air Sealing",
                desc: "Advanced sealing design improves comfort, resistance, and long-term performance.",
                icon: <LuxuryIcon type="air" />,
              },
              {
                title: "High Wind Resistance",
                desc: "Strong structural design provides performance for large openings.",
                icon: <LuxuryIcon type="wind" />,
              },
              {
                title: "Thermal Efficiency",
                desc: "Glass and frame options support improved energy performance.",
                icon: <LuxuryIcon type="thermal" />,
              },
              {
                title: "Custom Finish Options",
                desc: "Available in luxury matte black, bronze, anodized, and RAL finishes.",
                icon: <LuxuryIcon type="finish" />,
              },
            ].map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
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
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#c8a45d]/35" />

          <motion.div
            animate={{ rotateY: rotateValue }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
            className="absolute top-0 h-full w-[42%] border border-[#c8a45d]/55 bg-[#101010] shadow-[18px_0_40px_rgba(0,0,0,.55)]"
            style={{
              left: pivotSide === "left" ? "10%" : "48%",
              transformStyle: "preserve-3d",
              transformOrigin: pivotSide === "left" ? "left center" : "right center",
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

function Control({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
        {title}
      </p>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

function SpecCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-7">
      <h3 className="mb-7 text-[14px] uppercase tracking-[0.28em] text-[#c8a45d]">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function SpecLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-6 border-b border-white/10 pb-3 text-sm">
      <span className="text-white/45">{label}</span>
      <span className="text-right text-white/75">{value}</span>
    </div>
  );
}

function FeatureCard({ item }: { item: { title: string; desc: string; icon: React.ReactNode } }) {
  return (
    <div className="group relative overflow-hidden bg-[linear-gradient(180deg,#0d0d0d_0%,#080808_100%)] p-7 transition duration-700 hover:bg-[#101010]">
      <div className="absolute inset-0 border border-white/5" />
      <div className="absolute right-[-40px] top-[-40px] h-36 w-36 rounded-full bg-[#c8a45d]/0 blur-3xl transition duration-700 group-hover:bg-[#c8a45d]/10" />

      <div className="mb-7 flex items-center justify-between">
        <div className="h-px w-10 bg-[#c8a45d]/45 transition duration-500 group-hover:w-16" />
        <span className="text-[10px] tracking-[0.4em] text-[#c8a45d]/50">
          LUXORA
        </span>
      </div>

      <div className="relative mb-7 flex h-[58px] w-[58px] items-center justify-center rounded-[1.2rem] border border-[#c8a45d]/20 bg-[linear-gradient(180deg,rgba(255,255,255,.04)_0%,rgba(200,164,93,.10)_100%)] text-[#d8bc7a] shadow-[inset_0_1px_1px_rgba(255,255,255,.06),0_10px_30px_rgba(0,0,0,.4)]">
        <div className="absolute left-[8px] top-[8px] h-5 w-5 rounded-full bg-white/10 blur-md" />
        {item.icon}
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
  );
}

function LuxuryIcon({ type }: { type: string }) {
  if (type === "pivot")
    return (
      <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
        <circle cx="32" cy="32" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M32 8v48M8 32h48" stroke="currentColor" strokeWidth="1.4" opacity=".55" />
        <path d="M32 14c10 2 18 10 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );

  if (type === "frame")
    return (
      <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
        <rect x="16" y="8" width="32" height="48" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M24 8v48M40 8v48" stroke="currentColor" strokeWidth="1.3" opacity=".65" />
      </svg>
    );

  if (type === "air")
    return (
      <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
        <path d="M10 24h34c6 0 6-10 0-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 34h44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 44h28c6 0 6 10 0 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );

  if (type === "wind")
    return (
      <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
        <path d="M12 22h34c7 0 7-10 0-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 34h42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 46h28c7 0 7 10 0 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );

  if (type === "thermal")
    return (
      <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
        <rect x="18" y="8" width="28" height="48" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M31 18c-4 5 4 8 0 13-4 5 4 8 0 14" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );

  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none">
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" />
      <path d="M20 32h24M32 20v24" stroke="currentColor" strokeWidth="1.4" opacity=".65" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      <circle cx="42" cy="26" r="2" fill="currentColor" />
      <circle cx="28" cy="42" r="2" fill="currentColor" />
    </svg>
  );
}