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

const features = [
  "Thermal Break Frame",
  "Water Tightness",
  "Sound Performance",
  "Wind Load Resistance",
  "Slim Sightline",
  "Premium Hardware",
  "Smooth Folding Motion",
  "Architectural Finish",
];

export default function FoldingWindowPage() {
  const [selected, setSelected] = useState<ProductKey>("folding58");
  const [open, setOpen] = useState(false);

  const product = products[selected];

  const panels =
    selected === "foldUp50" ? 1 : selected === "folding50" ? 4 : 6;

  const panelArray = useMemo<number[]>(
    () => Array.from({ length: panels }, (_, index) => index),
    [panels]
  );

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-500/80">
            Luxora Folding Window Systems
          </p>

          <h1 className="text-3xl font-light uppercase tracking-[0.14em] md:text-5xl">
            {product.title} Series {product.series}
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
            {product.description}
          </p>
        </div>

        {/* PRODUCT BUTTONS */}
        <div className="mb-12 flex flex-wrap gap-3">
          {(Object.keys(products) as ProductKey[]).map((key) => (
            <button
              key={key}
              onClick={() => {
                setSelected(key);
                setOpen(false);
              }}
              className={`border px-5 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                selected === key
                  ? "border-yellow-500 bg-yellow-500/10 text-yellow-400"
                  : "border-white/15 text-white/55 hover:border-yellow-500/50 hover:text-yellow-400"
              }`}
            >
              {products[key].label}
            </button>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          {/* GRAPHIC */}
          <div className="border border-white/10 bg-white/[0.025] p-6 md:p-10">
            {/* OPEN / CLOSE BUTTONS */}
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

            {/* VISUAL */}
            <div className="relative flex h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.04] to-black">
              <div className="relative h-[320px] w-[90%] border-[10px] border-[#1b1b1b] bg-[#0b0b0b] shadow-2xl">
                {selected === "foldUp50" ? (
                  <div className="absolute inset-[18px] overflow-hidden border-[7px] border-[#2a2a2a] bg-[#111]">
                    <motion.div
                      animate={{
                        height: open ? 70 : 1000,
                        y: open ? -110 : 0,
                      }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      className="absolute inset-0 border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
                    </motion.div>

                    <div className="absolute left-0 right-0 top-0 h-[5px] bg-yellow-500/30" />
                  </div>
                ) : (
                  <div className="absolute inset-[18px] flex">
                    {panelArray.map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          rotateY: open ? (i % 2 === 0 ? -58 : 58) : 0,
                          x: open ? i * -12 : 0,
                        }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        style={{
                          transformOrigin:
                            i % 2 === 0 ? "left center" : "right center",
                        }}
                        className="relative h-full flex-1 border-[7px] border-[#2a2a2a] bg-[#111]"
                      >
                        <div className="absolute inset-[10px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
                          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />
                        </div>

                        <div className="absolute right-0 top-0 h-full w-[1px] bg-yellow-500/30" />
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="absolute left-[-10px] right-[-10px] top-[-10px] h-[5px] bg-yellow-500/30" />
                <div className="absolute bottom-[-10px] left-[-10px] right-[-10px] h-[5px] bg-yellow-500/20" />
              </div>
            </div>

            {/* MINI SPECS */}
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["Frame", "6066-T6 Aluminum"],
                ["Glass", "Double / Triple"],
                ["Motion", "Folding System"],
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
              <div>
                <h3 className="bg-white/10 py-3 text-center text-sm uppercase tracking-[0.18em]">
                  Performance
                </h3>

                <div className="text-sm text-white/60">
                  {[
                    ["U-Factor", "0.45"],
                    ["SHGC", "0.45"],
                    ["VT", "0.51"],
                    ["DP", "Class CW-PG30"],
                    ["CR", "32"],
                    ["STC", "32"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between border-b border-white/10 py-2"
                    >
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="bg-white/10 py-3 text-center text-sm uppercase tracking-[0.18em]">
                  Maximum Size
                </h3>

                <div className="text-sm text-white/60">
                  {product.sizes.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between border-b border-white/10 py-2"
                    >
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="bg-white/10 py-3 text-center text-sm uppercase tracking-[0.18em]">
                  Specifications
                </h3>

                <div className="text-sm text-white/60">
                  {[
                    ["Frame Material", "6066-T6 Aluminum"],
                    ["Alu Thickness", "2.0mm"],
                    ["Glass Type", "Tempered Single / Double"],
                    ["Glass Thickness", "5mm / 6mm / 8mm / 10mm"],
                    ["Hardware", "Included"],
                    ["Finish", "RAL Powder Coat / Anodized"],
                  ].map(([label, value]) => (
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