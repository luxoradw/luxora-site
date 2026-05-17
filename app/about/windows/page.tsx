"use client";

import { useState } from "react";
import {
  ChevronRight,
  ShieldCheck,
  Wind,
  Thermometer,
  Lock,
  MoveDiagonal,
  RotateCcw,
  Gauge,
  Layers,
  Sparkles,
} from "lucide-react";

const systems = [
  {
    id: "tilt",
    title: "Tilt & Turn System",
    subtitle: "Dual-mode ventilation + full inward opening",
    icon: RotateCcw,
    points: [
      "One handle controls both tilt ventilation and full swing opening.",
      "Multi-point locking pulls the sash tightly into the frame.",
      "Concealed hinge system keeps the design clean and modern.",
      "Excellent for bedrooms, offices, high-end residential spaces.",
    ],
  },
  {
    id: "gas",
    title: "Gas Strut Window",
    subtitle: "Assisted lift for heavy glass panels",
    icon: Gauge,
    points: [
      "Gas pump assists the heavy sash during opening.",
      "Holds the glass panel securely in open position.",
      "Prevents sudden dropping and improves safety.",
      "Perfect for kitchen pass-through and outdoor bar windows.",
    ],
  },
  {
    id: "folding",
    title: "Folding Window System",
    subtitle: "Wide opening with smooth panel stacking",
    icon: MoveDiagonal,
    points: [
      "Panels fold and stack to one or both sides.",
      "Precision hinges keep every panel aligned.",
      "Roller carriers distribute glass weight evenly.",
      "Creates a clean indoor-outdoor connection.",
    ],
  },
  {
    id: "crank",
    title: "Crank Casement System",
    subtitle: "Controlled opening with compression sealing",
    icon: Wind,
    points: [
      "Gear-driven crank operator opens the sash smoothly.",
      "Heavy-duty support arms control movement angle.",
      "Strong compression seal improves air and water resistance.",
      "Ideal for luxury homes needing tight performance.",
    ],
  },
];

const quality = [
  {
    title: "Heavy Glass Support",
    text: "Reinforced aluminum profiles, high-load hinges, roller carriers, and structural brackets help support double glass, triple glass, and laminated glass panels without sagging.",
    icon: Layers,
  },
  {
    title: "Multi-Point Locking",
    text: "Advanced locking points pull the sash evenly into the frame, improving security, air tightness, sound reduction, and weather resistance.",
    icon: Lock,
  },
  {
    title: "Thermal Break Frame",
    text: "Interior and exterior aluminum sections are separated by insulated thermal barriers to reduce heat transfer, condensation, and energy loss.",
    icon: Thermometer,
  },
  {
    title: "Weather Protection",
    text: "Precision seals, compression hardware, and reinforced frame geometry improve wind resistance, water resistance, and long-term performance.",
    icon: ShieldCheck,
  },
];

function WindowGraphic({ active }: { active: string }) {
  return (
    <div className="relative h-[430px] w-full overflow-hidden rounded-[2rem] border border-[#d7b46a]/25 bg-black shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3a2b13,transparent_45%),linear-gradient(145deg,#050505,#111)]" />

      <div className="absolute left-8 top-8 z-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#d7b46a]">
          Luxora Technical Motion
        </p>
        <h2 className="mt-2 text-2xl font-light text-white">
          Window Operating System
        </h2>
      </div>

      <div className="absolute inset-x-0 bottom-10 mx-auto h-[250px] w-[78%] rounded-xl border-[10px] border-[#d7b46a]/80 bg-[#101010] shadow-[0_0_60px_rgba(215,180,106,0.18)]">
        <div className="absolute inset-4 border border-white/10 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm" />

        {active === "tilt" && (
          <>
            <div className="absolute left-[28%] top-6 h-[190px] w-[34%] origin-bottom rotate-[-10deg] border-[7px] border-[#d7b46a] bg-white/10 transition-all duration-700" />
            <div className="absolute right-12 top-24 rounded-full border border-[#d7b46a]/40 px-4 py-2 text-xs text-[#d7b46a]">
              Tilt ventilation angle
            </div>
            <div className="absolute left-10 bottom-6 text-xs text-white/55">
              Multi-point lock + concealed hinge rotation
            </div>
          </>
        )}

        {active === "gas" && (
          <>
            <div className="absolute left-[24%] top-[-15px] h-[175px] w-[52%] origin-bottom rotate-[-32deg] border-[7px] border-[#d7b46a] bg-white/10 transition-all duration-700" />
            <div className="absolute left-[22%] top-[120px] h-2 w-[260px] rotate-[-28deg] rounded-full bg-[#d7b46a]" />
            <div className="absolute left-[42%] top-[150px] h-3 w-20 rotate-[-28deg] rounded-full bg-white/50" />
            <div className="absolute right-10 bottom-7 text-xs text-white/60">
              Gas pump controls heavy sash movement
            </div>
          </>
        )}

        {active === "folding" && (
          <>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute top-7 h-[180px] w-[70px] border-[6px] border-[#d7b46a] bg-white/10 transition-all duration-700"
                style={{
                  left: `${18 + i * 15}%`,
                  transform: `rotate(${i % 2 === 0 ? -28 : 28}deg)`,
                  transformOrigin: i % 2 === 0 ? "left center" : "right center",
                }}
              />
            ))}
            <div className="absolute bottom-8 left-12 text-xs text-white/60">
              Hinged panels fold and stack with roller support
            </div>
          </>
        )}

        {active === "crank" && (
          <>
            <div className="absolute left-[31%] top-6 h-[185px] w-[36%] origin-left rotate-[-24deg] border-[7px] border-[#d7b46a] bg-white/10 transition-all duration-700" />
            <div className="absolute left-[44%] top-[145px] h-2 w-[150px] rotate-[-18deg] rounded-full bg-[#d7b46a]" />
            <div className="absolute left-[52%] top-[175px] h-8 w-8 rounded-full border border-[#d7b46a]" />
            <div className="absolute right-10 bottom-7 text-xs text-white/60">
              Crank operator gives controlled opening angle
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function WindowsSystemPage() {
  const [active, setActive] = useState("tilt");
  const activeSystem = systems.find((s) => s.id === active) || systems[0];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-28 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b2a10,transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#d7b46a]">
              Luxora Windows
            </p>

            <h1 className="max-w-2xl text-4xl font-light leading-tight md:text-3xl">
              Engineered Window Systems for Heavy Glass, Smooth Motion, and
              Luxury Performance.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">
              Luxora windows are designed with precision hardware, reinforced
              aluminum profiles, thermal-break technology, heavy-glass support,
              gas-assisted motion, multi-point locking, and smooth operating
              systems for modern architectural projects.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Double / triple glass support",
                "Thermal-break aluminum frame",
                "Gas strut assisted opening",
                "Multi-point locking system",
                "Precision hinges and rollers",
                "Luxury soft-motion operation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-white/75"
                >
                  <Sparkles className="h-4 w-4 text-[#d7b46a]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <WindowGraphic active={active} />
        </div>
      </section>

      <section className="px-6 py-10 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-4">
          {systems.map((system) => {
            const Icon = system.icon;
            const selected = active === system.id;

            return (
              <button
                key={system.id}
                onClick={() => setActive(system.id)}
                className={`rounded-3xl border p-6 text-left transition-all duration-300 ${
                  selected
                    ? "border-[#d7b46a] bg-[#d7b46a]/10 shadow-[0_0_35px_rgba(215,180,106,0.16)]"
                    : "border-white/10 bg-white/[0.03] hover:border-[#d7b46a]/50"
                }`}
              >
                <Icon className="mb-5 h-7 w-7 text-[#d7b46a]" />
                <h3 className="text-lg font-light">{system.title}</h3>
                <p className="mt-2 text-xs leading-6 text-white/55">
                  {system.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-[#d7b46a]/20 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d7b46a]">
              Selected System
            </p>
            <h2 className="mt-4 text-3xl font-light">{activeSystem.title}</h2>
            <p className="mt-3 text-sm text-white/55">
              {activeSystem.subtitle}
            </p>

            <div className="mt-8 space-y-4">
              {activeSystem.points.map((point) => (
                <div key={point} className="flex gap-3 text-sm text-white/70">
                  <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#d7b46a]" />
                  <p className="leading-7">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {quality.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-7"
                >
                  <Icon className="mb-5 h-7 w-7 text-[#d7b46a]" />
                  <h3 className="text-xl font-light">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#d7b46a]/20 bg-gradient-to-br from-[#14110a] to-black p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.4em] text-[#d7b46a]">
            Technical Glass + Frame Performance
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-2xl font-light">Insulated Glass Units</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Luxora windows can be designed with insulated double glazing,
                triple glazing, laminated glass, tempered glass, and tinted
                glass. This improves energy efficiency, sound control, safety,
                and interior comfort.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light">Precision Sealing</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Compression seals and multi-point locking systems help close the
                sash tightly against the frame, improving resistance against
                wind, water, noise, and air leakage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light">Long-Term Alignment</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Reinforced corners, structural hinges, rollers, and support arms
                help the window remain aligned over time, even with large-format
                architectural glass panels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}