"use client";

import { motion } from "framer-motion";

const features = [
  "Full Glass Facade",
  "Commercial System",
  "Thermal Break Aluminum",
  "Structural Glazing",
  "Panoramic Elevation",
  "Custom Engineering",
  "Water Tightness",
  "Wind Load Resistance",
];

export default function CurtainWallPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden bg-black">
        <img
          src="/curtain-wall-hero.png"
          alt="Curtain Wall System"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 z-10 bg-black/40" />

        <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-yellow-400">
              Luxora Commercial Systems
            </p>

            <h1 className="text-5xl font-light uppercase tracking-[0.12em] text-white md:text-7xl">
              Curtain Wall
              <span className="block text-yellow-400">System</span>
            </h1>

            <div className="mt-8 h-[1px] w-24 bg-yellow-500/40" />

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/70">
              High-performance glass facade systems designed for commercial,
              residential, and luxury architectural projects with clean modern
              lines and premium structural performance.
            </p>

            <a
              href="/quote"
              className="mt-10 inline-flex border border-yellow-500 bg-yellow-500 px-8 py-4 text-xs uppercase tracking-[0.25em] text-black transition hover:bg-yellow-400"
            >
              Request Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            [
              "/curtain-wall-1.png",
              "Commercial Facade",
              "Elegant full-height glass elevations for office, retail, and mixed-use buildings.",
            ],
            [
              "/curtain-wall-2.png",
              "Luxury Residential",
              "Modern curtain wall glazing for villas, custom homes, and high-end residences.",
            ],
            [
              "/curtain-wall-3.png",
              "Custom Engineering",
              "Project-specific glazing systems designed for wind, structure, and thermal performance.",
            ],
          ].map(([image, title, desc]) => (
            <div
              key={title}
              className="overflow-hidden border border-white/10 bg-white/[0.02]"
            >
              <img
                src={image}
                alt={title}
                className="h-[320px] w-full object-cover"
              />

              <div className="p-7">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-400">
                  Curtain Wall
                </p>

                <h3 className="text-2xl font-light uppercase tracking-[0.12em]">
                  {title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 overflow-hidden border border-white/10 lg:grid-cols-2">
          <div className="relative min-h-[500px]">
            <img
              src="/curtain-wall-hero.png"
              alt="Curtain Wall Detail"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="flex flex-col justify-center bg-[#080808] p-10 md:p-14">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-yellow-400">
              Engineered Glass Facades
            </p>

            <h2 className="text-4xl font-light uppercase tracking-[0.1em]">
              Structural Beauty
              <span className="mt-2 block text-yellow-400">
                Built For Performance
              </span>
            </h2>

            <div className="mt-8 h-[1px] w-20 bg-yellow-500/40" />

            <p className="mt-8 text-sm leading-8 text-white/60">
              Luxora curtain wall systems combine precision aluminum framing,
              insulated glass, drainage control, and custom engineering for
              elegant building envelopes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="border border-yellow-500/20 bg-black p-8">
          <h3 className="mb-8 text-xl font-light uppercase tracking-[0.18em]">
            System Specifications
          </h3>

          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            {[
              ["System", "Curtain Wall System"],
              ["Frame", "6066-T6 Aluminum"],
              ["Glass", "Tempered / Laminated / Insulated"],
              ["Glass Thickness", "Project Specific"],
              ["Opening", "Fixed / Operable Insert"],
              ["Thermal", "Thermal Break Available"],
              ["Water Tightness", "High Performance"],
              ["Wind Load", "Project Specific"],
              ["Finish", "RAL / Anodized"],
              ["Application", "Residential / Commercial"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between border-b border-white/10 pb-3"
              >
                <span className="text-white/55">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="border border-white/10 bg-white/[0.02] px-5 py-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-yellow-500/40">
                <div className="h-2 w-2 rounded-full bg-yellow-400" />
              </div>

              <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="border border-yellow-500/20 bg-[#080808] px-8 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
            Custom Building Envelope Systems
          </p>

          <h2 className="mt-6 text-4xl font-light uppercase tracking-[0.1em] md:text-5xl">
            Request Custom
            <span className="mt-2 block text-yellow-400">
              Curtain Wall Design
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/60">
            Let Luxora design a high-performance curtain wall system tailored
            to your project.
          </p>

          <a
            href="/quote"
            className="mt-10 inline-flex border border-yellow-500 bg-yellow-500 px-10 py-4 text-xs uppercase tracking-[0.25em] text-black transition hover:bg-yellow-400"
          >
            Request Consultation
          </a>
        </div>
      </section>
    </main>
  );
}