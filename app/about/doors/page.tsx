"use client";

import {
  ArrowRight,
  ChevronRight,
  Layers3,
  Lock,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Wind,
  MoveHorizontal,
  RotateCcw,
  Weight,
} from "lucide-react";

const systems = [
  {
    title: "Precision Roller Systems",
    text: "Heavy-duty stainless roller carriers distribute oversized glass weight evenly for ultra-smooth sliding movement and long-term alignment stability.",
    icon: MoveHorizontal,
  },
  {
    title: "Structural Pivot Engineering",
    text: "Pivot hardware transfers the full glass load through reinforced top and bottom pivot points for balanced luxury motion.",
    icon: RotateCcw,
  },
  {
    title: "Lift & Slide Technology",
    text: "Lift-slide systems raise the sash before movement, reducing friction while improving sealing pressure and operation smoothness.",
    icon: Weight,
  },
];

const quality = [
  {
    title: "Thermal Break Frame",
    text: "Interior and exterior aluminum sections are separated using insulated thermal barriers to reduce heat transfer and improve energy efficiency.",
    icon: Thermometer,
  },
  {
    title: "Multi-Point Locking",
    text: "Advanced locking systems pull the sash evenly into the frame for better security, acoustic insulation, and weather resistance.",
    icon: Lock,
  },
  {
    title: "Weather Protection",
    text: "Compression gaskets, drainage engineering, and precision sealing systems improve resistance against wind, water, and air infiltration.",
    icon: Wind,
  },
  {
    title: "Heavy Glass Support",
    text: "Structural aluminum reinforcement and engineered roller systems support large insulated and laminated glass panels without sagging.",
    icon: ShieldCheck,
  },
];

function TechnicalGraphic() {
  return (
    <div className="relative h-[620px] w-full overflow-hidden rounded-[2.5rem] border border-[#d7b46a]/20 bg-black shadow-[0_0_80px_rgba(215,180,106,0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b2b12,transparent_40%),linear-gradient(145deg,#050505,#111)]" />

      {/* HEADER */}
      <div className="absolute left-10 top-10 z-20">
        <p className="text-xs uppercase tracking-[0.45em] text-[#d7b46a]">
          Luxora Engineering
        </p>

        <h2 className="mt-3 text-3xl font-light text-white">
          Technical Door Systems
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-7 text-white/55">
          Engineered for oversized architectural glass, smooth movement,
          structural stability, thermal efficiency, and luxury performance.
        </p>
      </div>

      {/* CENTER TECHNICAL DIAGRAM */}
      <div className="absolute left-1/2 top-[56%] h-[320px] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-[#d7b46a]/20 bg-[#0c0c0c]">
        {/* TRACK */}
        <div className="absolute left-10 right-10 top-8 h-[6px] rounded-full bg-[#d7b46a]/60" />
        <div className="absolute left-10 right-10 bottom-8 h-[5px] rounded-full bg-[#d7b46a]/25" />

        {/* GLASS PANEL */}
        <div className="absolute left-[18%] top-[52px] h-[210px] w-[28%] border-[5px] border-[#d7b46a] bg-white/[0.05] backdrop-blur-sm shadow-[0_0_35px_rgba(215,180,106,0.12)]">
          <div className="absolute inset-4 border border-white/15" />

          {/* Glass layers */}
          <div className="absolute left-[30%] top-0 h-full w-[1px] bg-white/20" />
          <div className="absolute left-[50%] top-0 h-full w-[1px] bg-white/20" />
          <div className="absolute left-[70%] top-0 h-full w-[1px] bg-white/20" />
        </div>

        {/* MOVING PANEL */}
        <div className="absolute left-[48%] top-[52px] h-[210px] w-[28%] translate-x-10 border-[5px] border-[#d7b46a] bg-white/[0.05] backdrop-blur-sm shadow-[0_0_45px_rgba(215,180,106,0.16)]">
          <div className="absolute inset-4 border border-white/15" />

          {/* Glass layers */}
          <div className="absolute left-[30%] top-0 h-full w-[1px] bg-white/20" />
          <div className="absolute left-[50%] top-0 h-full w-[1px] bg-white/20" />
          <div className="absolute left-[70%] top-0 h-full w-[1px] bg-white/20" />

          {/* Rollers */}
          <div className="absolute -bottom-7 left-8 h-5 w-5 rounded-full border border-[#d7b46a] bg-black shadow-[0_0_10px_rgba(215,180,106,0.4)]" />
          <div className="absolute -bottom-7 right-8 h-5 w-5 rounded-full border border-[#d7b46a] bg-black shadow-[0_0_10px_rgba(215,180,106,0.4)]" />
        </div>

        {/* ARROW */}
        <div className="absolute right-12 top-[132px] flex items-center gap-3 text-[#d7b46a]">
          <div className="h-[1px] w-20 bg-[#d7b46a]" />
          <ArrowRight className="h-6 w-6" />
        </div>

        {/* CALLOUTS */}
        <div className="absolute left-8 top-[-20px] rounded-full border border-[#d7b46a]/30 bg-black/80 px-4 py-2 text-[11px] tracking-[0.15em] text-[#d7b46a] backdrop-blur-sm">
          STAINLESS TRACK SYSTEM
        </div>

        <div className="absolute right-10 top-[52px] rounded-full border border-[#d7b46a]/30 bg-black/80 px-4 py-2 text-[11px] tracking-[0.15em] text-[#d7b46a] backdrop-blur-sm">
          TRIPLE GLASS SUPPORT
        </div>

        <div className="absolute left-12 bottom-14 rounded-full border border-[#d7b46a]/30 bg-black/80 px-4 py-2 text-[11px] tracking-[0.15em] text-[#d7b46a] backdrop-blur-sm">
          PRECISION ROLLER CARRIER
        </div>

        <div className="absolute right-16 bottom-14 rounded-full border border-[#d7b46a]/30 bg-black/80 px-4 py-2 text-[11px] tracking-[0.15em] text-[#d7b46a] backdrop-blur-sm">
          THERMAL BREAK FRAME
        </div>
      </div>

      {/* BOTTOM TECHNICAL BAR */}
      <div className="absolute bottom-8 left-1/2 flex w-[82%] -translate-x-1/2 items-center justify-between rounded-2xl border border-[#d7b46a]/15 bg-white/[0.03] px-8 py-5 backdrop-blur-md">
        {[
          "Heavy Glass Engineering",
          "German-Inspired Hardware",
          "Luxury Motion Performance",
          "Architectural Thermal Systems",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-xs tracking-[0.12em] text-white/70"
          >
            <Sparkles className="h-4 w-4 text-[#d7b46a]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DoorsAboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-32 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3a2b10,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#d7b46a]">
              Luxora Doors
            </p>

            <h1 className="text-5xl font-light leading-tight md:text-4xl">
              Technical Door Systems Engineered for Luxury Architecture.
            </h1>

            <p className="mt-8 max-w-3xl text-sm leading-8 text-white/60 md:text-base">
              Luxora door systems combine precision roller engineering,
              thermal-break aluminum technology, structural glass support,
              multi-point locking systems, and luxury architectural motion for
              oversized modern openings.
            </p>
          </div>

          <div className="mt-16">
            <TechnicalGraphic />
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="px-6 py-10 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {systems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-[#d7b46a]/50 hover:bg-[#d7b46a]/[0.04]"
              >
                <Icon className="mb-6 h-8 w-8 text-[#d7b46a]" />

                <h3 className="text-2xl font-light">{item.title}</h3>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  {item.text}
                </p>

                <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-[#d7b46a]/40 to-transparent" />
              </div>
            );
          })}
        </div>
      </section>

      {/* QUALITY */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d7b46a]">
              Engineering Performance
            </p>

            <h2 className="mt-5 text-4xl font-light">
              Built for Structural Performance, Thermal Efficiency, and Long-Term
              Stability.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {quality.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8"
                >
                  <Icon className="mb-6 h-8 w-8 text-[#d7b46a]" />

                  <h3 className="text-xl font-light">{item.title}</h3>

                  <p className="mt-5 text-sm leading-7 text-white/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="px-6 pb-28 pt-10 md:px-12">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#d7b46a]/15 bg-gradient-to-br from-[#14110a] to-black p-10 md:p-16">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <Layers3 className="mb-6 h-9 w-9 text-[#d7b46a]" />

              <h3 className="text-3xl font-light">
                Oversized Glass Compatibility
              </h3>

              <p className="mt-6 text-sm leading-8 text-white/60">
                Luxora systems are engineered for large-format architectural
                glazing, including insulated double glazing, triple glazing,
                laminated safety glass, and tempered glass systems.
              </p>
            </div>

            <div>
              <MoveHorizontal className="mb-6 h-9 w-9 text-[#d7b46a]" />

              <h3 className="text-3xl font-light">
                Smooth Precision Motion
              </h3>

              <p className="mt-6 text-sm leading-8 text-white/60">
                Precision rollers, structural hangers, balanced panel geometry,
                and reinforced track systems create silent low-friction movement
                even for oversized glass panels.
              </p>
            </div>

            <div>
              <ShieldCheck className="mb-6 h-9 w-9 text-[#d7b46a]" />

              <h3 className="text-3xl font-light">
                Luxury Structural Engineering
              </h3>

              <p className="mt-6 text-sm leading-8 text-white/60">
                Structural reinforcement, compression sealing systems,
                multi-point locking, and thermal-break technology combine
                performance with luxury architectural aesthetics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}