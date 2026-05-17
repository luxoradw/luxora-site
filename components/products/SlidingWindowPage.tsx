"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type PanelCount = 2 | 3 | 4;
type OpenDirection = "left" | "right" | "center";

export default function SlidingWindowPage() {
  const [panels, setPanels] = useState<PanelCount>(3);
  const [direction, setDirection] =
    useState<OpenDirection>("left");
  const [open, setOpen] = useState(true);

  const panelArray = useMemo(
    () => Array.from({ length: panels }),
    [panels]
  );

  const getPanelMotion = (i: number) => {
    if (!open) return { x: 0 };

    if (direction === "left") {
      return i === panels - 1 ? { x: -90 } : { x: 0 };
    }

    if (direction === "right") {
      return i === 0 ? { x: 90 } : { x: 0 };
    }

    if (direction === "center") {
      if (i === 0) return { x: -70 };
      if (i === panels - 1) return { x: 70 };
    }

    return { x: 0 };
  };

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.18),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.45em] text-[#c8a45d]">
              Luxora Sliding Window Systems
            </p>

            <h1 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
              Thermal break sliding windows with panoramic glass and refined
              performance.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/55">
              Space-efficient luxury sliding windows engineered for smooth
              motion, slim aluminum framing, superior thermal insulation, and
              architectural aesthetics.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="rounded-[2rem] border border-[#c8a45d]/20 bg-[#0b0b0b] p-5 shadow-[0_35px_100px_rgba(0,0,0,.6)]">
            <SlidingVisual
              panels={panels}
              panelArray={panelArray}
              getPanelMotion={getPanelMotion}
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
                  Sliding Window Motion Preview
                </h2>

                <p className="mt-1 text-sm text-white/45">
                  Interactive panel movement
                </p>
              </div>

              <span className="rounded-full border border-[#c8a45d]/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                {panels} Panels
              </span>
            </div>

            <SlidingVisual
              panels={panels}
              panelArray={panelArray}
              getPanelMotion={getPanelMotion}
            />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6">
            <h3 className="text-2xl font-light">Configure Window</h3>

            <p className="mt-2 text-sm leading-7 text-white/50">
              Select panel count and opening direction.
            </p>

            <div className="mt-8 space-y-8">
              <Control title="Panel Count">
                {[2, 3, 4].map((n) => (
                  <button
                    key={n}
                    onClick={() => setPanels(n as PanelCount)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      panels === n
                        ? "bg-[#c8a45d] text-black"
                        : "border border-white/10 text-white/60 hover:border-[#c8a45d]/50"
                    }`}
                  >
                    {n} Panel
                  </button>
                ))}
              </Control>

              <Control title="Opening Direction">
                {[
                  ["left", "Slide Left"],
                  ["right", "Slide Right"],
                  ["center", "Center Open"],
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
            {/* LEFT */}
            <SpecCard title="Series Specifications">
              <SpecLine
                label="Frame Material"
                value="6066-T6 Aluminum"
              />

              <SpecLine
                label="Thermal Break"
                value="1.6mm / 2.0mm"
              />

              <SpecLine
                label="Glass Type"
                value="Tempered Single / Double"
              />

              <SpecLine
                label="Glass Thickness"
                value="5mm / 6mm / 8mm / 10mm"
              />

              <SpecLine
                label="Finish"
                value="RAL Powder Coat / Anodized"
              />
            </SpecCard>

            {/* CENTER */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.12),transparent_45%)]" />

              <div className="relative h-[360px] overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#222] via-[#101010] to-black">
                <div className="absolute inset-x-10 top-12 h-[220px] border-[14px] border-[#151515] shadow-[inset_0_0_0_1px_rgba(200,164,93,.35)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/14 via-white/4 to-black/40" />

                  <div className="absolute left-[33%] top-0 h-full w-[2px] bg-[#c8a45d]/45" />

                  <div className="absolute left-[66%] top-0 h-full w-[2px] bg-[#c8a45d]/45" />
                </div>

                <div className="absolute bottom-0 h-28 w-full bg-gradient-to-t from-black to-transparent" />

                <p className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.35em] text-[#c8a45d]">
                  Thermal Break Sliding Window
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <SpecCard title="NFRC Performance">
              <SpecLine label="U-Factor" value="0.43" />

              <SpecLine label="SHGC" value="0.41" />

              <SpecLine label="VT" value="0.46" />

              <SpecLine label="DP" value="Class CW-PG40" />

              <SpecLine label="CR" value="45" />

              <SpecLine label="STC" value="32" />
            </SpecCard>
          </div>
        </div>
      </section>

      {/* MAXIMUM SIZE */}
      <section className="px-6 pb-28 md:px-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8">
          <h3 className="mb-8 text-[14px] uppercase tracking-[0.28em] text-[#c8a45d]">
            Maximum Size
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SizeCard label="Max Width" value='94.4882"' />

            <SizeCard label="Max Height" value='70.8661"' />

            <SizeCard label="Min Width" value='23.622"' />

            <SizeCard label="Min Height" value='23.622"' />
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

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Thermal Break",
                desc: "Advanced insulated aluminum frame system.",
              },
              {
                title: "Water Tightness",
                desc: "Engineered drainage and sealing performance.",
              },
              {
                title: "Sound Reduction",
                desc: "Improved acoustic comfort and insulation.",
              },
              {
                title: "Smooth Sliding Motion",
                desc: "Luxury stainless steel sliding hardware.",
              },
              {
                title: "Slim Frame Design",
                desc: "Minimal sightlines with expansive glazing.",
              },
              {
                title: "Wind Load Resistance",
                desc: "Engineered structural window performance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden bg-[linear-gradient(180deg,#0d0d0d_0%,#080808_100%)] p-7"
              >
                <div className="absolute inset-0 border border-white/5" />

                <h3 className="text-[15px] font-light tracking-[0.08em] text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 tracking-[0.03em] text-white/45">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
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
  panelArray: undefined[];
  getPanelMotion: (i: number) => { x: number };
}) {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.14),transparent_42%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute left-1/2 top-[48%] h-[280px] w-[86%] -translate-x-1/2 -translate-y-1/2 bg-[#050505] shadow-[0_0_80px_rgba(0,0,0,.9)]">
        <div className="absolute inset-0 border-[18px] border-[#181818] shadow-[inset_0_0_0_1px_rgba(200,164,93,.45)]" />

        <div className="absolute inset-[18px] border border-[#c8a45d]/35" />

        <div className="absolute left-[34px] right-[34px] top-[36px] h-[5px] rounded-full bg-gradient-to-r from-[#7c642e] via-[#d6b76d] to-[#7c642e]" />

        <div className="absolute bottom-[36px] left-[34px] right-[34px] h-[5px] rounded-full bg-gradient-to-r from-[#7c642e] via-[#d6b76d] to-[#7c642e]" />

        <div className="absolute left-[42px] right-[42px] top-[50px] flex h-[180px]">
          {panelArray.map((_, i) => (
            <motion.div
              key={i}
              animate={getPanelMotion(i)}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 18,
              }}
              className="relative h-full overflow-hidden border border-[#c8a45d]/50 bg-[#101010] shadow-[8px_0_25px_rgba(0,0,0,.45)]"
              style={{ width: `${100 / panels}%` }}
            >
              <div className="absolute inset-0 border-[7px] border-[#1b1b1b]" />

              <div className="absolute inset-[8px] bg-gradient-to-br from-white/18 via-white/5 to-black/35" />

              <div className="absolute left-[-40%] top-[-10%] h-[120%] w-[45%] rotate-[18deg] bg-white/15 blur-sm" />

              <div className="absolute right-0 top-0 h-full w-[1px] bg-[#c8a45d]/45" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Control({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
        {title}
      </p>

      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </div>
  );
}

function SpecCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-7">
      <h3 className="mb-7 text-[14px] uppercase tracking-[0.28em] text-[#c8a45d]">
        {title}
      </h3>

      <div className="space-y-4">
        {children}
      </div>
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
      <span className="text-white/45">{label}</span>

      <span className="text-right text-white/75">
        {value}
      </span>
    </div>
  );
}

function SizeCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-[#111] p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[#c8a45d]/60">
        {label}
      </p>

      <p className="mt-4 text-2xl font-light text-white">
        {value}
      </p>
    </div>
  );
}