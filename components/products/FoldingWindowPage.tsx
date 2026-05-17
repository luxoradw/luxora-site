"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type ProductKey = "foldUp50" | "folding50" | "folding58";

const products = {
  foldUp50: {
    label: "Fold Up 50",
    title: "Fold Up Window",
    series: "50",
    description:
      "The Fold Up Window is a stylish and functional choice with a distinctive appearance and a broad selection of glass options. The panels can be stopped and held at any position, giving precise control over ventilation and opening height.",
    sizes: [
      ["Max Width", '78.7402"'],
      ["Max Height", '78.7402"'],
      ["Min Width", '23.622"'],
      ["Min Height", '21.65"'],
    ],
  },

  folding50: {
    label: "Folding 50",
    title: "Folding Window",
    series: "50",
    description:
      "Our Folding Windows combine exceptional durability with refined aesthetics. Available in a wide range of colors and finishes with a smooth, consistent surface texture.",
    sizes: [
      ["Max Width", '177.17"'],
      ["Max Height", '70.8661"'],
      ["Min Width", '23.622"'],
      ["Min Height", '23.622"'],
    ],
  },

  folding58: {
    label: "Folding 58",
    title: "Folding Window",
    series: "58",
    description:
      "The Series 58 Folding Window shares the same durable construction and refined color selection as our Series 50, with an expanded frame depth for larger panel configurations.",
    sizes: [
      ["Max Width", '220.47"'],
      ["Max Height", '94.4882"'],
      ["Min Width", '35.4331"'],
      ["Min Height", '39.3701"'],
    ],
  },
};

export default function FoldingWindowPage() {
  const [selected, setSelected] =
    useState<ProductKey>("folding58");

  const [open, setOpen] = useState(false);

  const product = products[selected];

  const panels =
    selected === "foldUp50"
      ? 1
      : selected === "folding50"
      ? 4
      : 6;

  const panelArray = useMemo(
    () => Array.from({ length: panels }),
    [panels]
  );

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.18),transparent_42%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* LEFT */}
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.45em] text-[#c8a45d]">
              Luxora Folding Window Systems
            </p>

            <h1 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
              {product.title} series {product.series}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/55">
              {product.description}
            </p>

            {/* PRODUCT BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-3">
              {(Object.keys(products) as ProductKey[]).map(
                (key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelected(key);
                      setOpen(false);
                    }}
                    className={`rounded-full px-5 py-3 text-xs uppercase tracking-[0.18em] transition ${
                      selected === key
                        ? "bg-[#c8a45d] text-black"
                        : "border border-white/10 text-white/60 hover:border-[#c8a45d]/50 hover:text-[#c8a45d]"
                    }`}
                  >
                    {products[key].label}
                  </button>
                )
              )}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="rounded-[2rem] border border-[#c8a45d]/20 bg-[#0b0b0b] p-5 shadow-[0_35px_100px_rgba(0,0,0,.6)]">
            <FoldingVisual
              selected={selected}
              open={open}
              panelArray={panelArray}
            />
          </div>
        </div>
      </section>

      {/* CONFIGURATOR */}
      <section className="px-6 pb-24 md:px-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_.8fr]">
          {/* LEFT */}
          <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-6">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-2xl font-light">
                  Folding Window Motion Preview
                </h2>

                <p className="mt-1 text-sm text-white/45">
                  Interactive product movement
                </p>
              </div>

              <span className="rounded-full border border-[#c8a45d]/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                Series {product.series}
              </span>
            </div>

            <FoldingVisual
              selected={selected}
              open={open}
              panelArray={panelArray}
            />
          </div>

          {/* RIGHT */}
          <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6">
            <h3 className="text-2xl font-light">
              Configure Window
            </h3>

            <p className="mt-2 text-sm leading-7 text-white/50">
              Select the folding window series and
              preview the operation.
            </p>

            <div className="mt-8 space-y-8">
              <Control title="Window Series">
                {(Object.keys(products) as ProductKey[]).map(
                  (key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelected(key);
                        setOpen(false);
                      }}
                      className={`rounded-full px-4 py-2 text-sm transition ${
                        selected === key
                          ? "bg-[#c8a45d] text-black"
                          : "border border-white/10 text-white/60 hover:border-[#c8a45d]/50"
                      }`}
                    >
                      {products[key].label}
                    </button>
                  )
                )}
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
            <SpecCard
              title={`Series ${product.series} Specifications`}
            >
              <SpecLine
                label="Frame Material"
                value="6066-T6 Aluminum"
              />

              <SpecLine
                label="Alu Thickness"
                value="2.0mm"
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
                label="Hardware"
                value="Included"
              />

              <SpecLine
                label="Finish"
                value="RAL Powder Coat / Anodized"
              />
            </SpecCard>

            {/* CENTER */}
            <FoldingVisual
              selected={selected}
              open={open}
              panelArray={panelArray}
            />

            {/* RIGHT */}
            <SpecCard title="NFRC Performance">
              <SpecLine label="U-Factor" value="0.45" />
              <SpecLine label="SHGC" value="0.45" />
              <SpecLine label="VT" value="0.51" />
              <SpecLine
                label="DP"
                value="Class CW-PG30"
              />
              <SpecLine label="CR" value="32" />
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
            {product.sizes.map(([label, value]) => (
              <SizeCard
                key={label}
                label={label}
                value={value}
              />
            ))}
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
                title:
                  selected === "foldUp50"
                    ? "Fold-Up Motion"
                    : "Folding Motion",

                desc:
                  selected === "foldUp50"
                    ? "Panel can be stopped and held at any position for ventilation control."
                    : "Multiple folding panels open smoothly for wide architectural openings.",
              },

              {
                title: "Thermal Break",
                desc: "Insulated aluminum system designed for comfort and energy performance.",
              },

              {
                title: "Refined Finish",
                desc: "RAL powder coat or anodized finish with durable surface quality.",
              },

              {
                title: "Water Tightness",
                desc: "Engineered sealing and drainage for dependable weather resistance.",
              },

              {
                title: "Sound Performance",
                desc: "Designed to improve acoustic comfort with quality glazing options.",
              },

              {
                title: "Wind Load Resistance",
                desc: "Engineered structural performance for modern window applications.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden bg-[linear-gradient(180deg,#0d0d0d_0%,#080808_100%)] p-7 transition duration-700 hover:bg-[#101010]"
              >
                <div className="absolute inset-0 border border-white/5" />

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
  selected,
  open,
  panelArray,
}: {
  selected: ProductKey;
  open: boolean;
  panelArray: undefined[];
}) {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,93,.14),transparent_42%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute left-1/2 top-[48%] h-[280px] w-[86%] -translate-x-1/2 -translate-y-1/2 bg-[#050505] shadow-[0_0_80px_rgba(0,0,0,.9)]">
        <div className="absolute inset-0 border-[18px] border-[#181818] shadow-[inset_0_0_0_1px_rgba(200,164,93,.45)]" />

        <div className="absolute inset-[18px] border border-[#c8a45d]/35" />

        {/* FOLD UP */}
        {selected === "foldUp50" ? (
          <div className="absolute left-[70px] right-[70px] top-[70px] h-[145px] overflow-visible">
            <div className="absolute inset-0 border border-[#c8a45d]/25 bg-[#050505]" />

            <motion.div
              animate={{
                height: open ? 42 : 145,
                y: open ? -42 : 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 w-full overflow-hidden border border-[#c8a45d]/60 bg-[#101010] shadow-[0_15px_30px_rgba(0,0,0,.5)]"
            >
              <div className="absolute inset-0 border-[7px] border-[#1b1b1b]" />

              <div className="absolute inset-[8px] bg-gradient-to-br from-white/18 via-white/5 to-black/35" />

              <div className="absolute left-[12%] top-0 h-full w-[18%] bg-white/5 blur-[2px]" />

              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c8a45d]/60" />
            </motion.div>

            <div className="absolute left-0 top-0 h-[5px] w-full rounded-full bg-gradient-to-r from-[#7c642e] via-[#d6b76d] to-[#7c642e]" />
          </div>
        ) : (
          /* FOLDING */
          <div className="absolute left-[42px] right-[42px] top-[50px] flex h-[180px] perspective-[2000px]">
            {panelArray.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotateY: open
                    ? i % 2 === 0
                      ? -58
                      : 58
                    : 0,

                  x: open ? i * -10 : 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                style={{
                  transformOrigin:
                    i % 2 === 0
                      ? "left center"
                      : "right center",
                }}
                className="relative h-full flex-1 overflow-hidden border border-[#c8a45d]/50 bg-[#101010] shadow-[8px_0_25px_rgba(0,0,0,.45)]"
              >
                <div className="absolute inset-0 border-[7px] border-[#1b1b1b]" />

                <div className="absolute inset-[8px] bg-gradient-to-br from-white/18 via-white/5 to-black/35" />

                <div className="absolute right-0 top-0 h-full w-[1px] bg-[#c8a45d]/45" />

                <div className="absolute left-[12%] top-0 h-full w-[18%] bg-white/5 blur-[2px]" />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 h-[110px] w-full bg-gradient-to-b from-[#111] to-[#050505]" />

      <div className="absolute bottom-[78px] left-1/2 h-px w-[84%] -translate-x-1/2 bg-[#c8a45d]/35" />

      <div className="absolute bottom-[28px] left-1/2 h-14 w-[70%] -translate-x-1/2 rounded-full bg-[#c8a45d]/10 blur-2xl" />
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