"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Window Systems",
    products: [
      { title: "Sliding Windows", href: "/windows/sliding", type: "slidingWindow", description: "Thermal break sliding window with horizontal panels, smooth track movement, strong insulation, and clean modern sightlines." },
      { title: "Folding Windows", href: "/windows/folding", type: "foldingWindow", description: "Multi-panel folding window designed for kitchen bars, patios, and counter openings, with panels stacking to one side." },
      { title: "Casement Windows", href: "/windows/casement", type: "casementWindow", description: "Casement window with hinged outward opening, tight sealing, optional screen system, and strong thermal performance." },
      { title: "Fixed Windows", href: "/windows/fixed", type: "fixedWindow", description: "Fixed glass window for maximum daylight, wide views, large architectural openings, and clean non-operable frame design." },
      { title: "Fold Up Window", href: "/windows/fold-up", type: "foldUpWindow", description: "Upward-opening window system ideal for counters, patios, bars, and indoor-outdoor service areas." },
      { title: "Gas Strut Window", href: "/windows/gas-strut", type: "gasStrutWindow", description: "Gas-assisted upward opening window for clean counter access, ventilation, and modern outdoor connection." },
      { title: "Tilt & Turn Window", href: "/windows/tilt-turn", type: "tiltTurnWindow", description: "Dual-function window for secure ventilation, easy cleaning, and strong thermal sealing." },
      { title: "Single / Double Hung Window", href: "/windows/hung", type: "hungWindow", description: "Vertical sliding window system with classic operation and modern aluminum performance." },
      { title: "Skylight Window", href: "/windows/skylight", type: "skylightWindow", description: "Overhead glass system designed to bring natural daylight from above with refined aluminum framing." },
      { title: "Glass Louvre Window", href: "/windows/glass-louvre", type: "louvreWindow", description: "Adjustable glass blade window for airflow, ventilation control, and clean architectural appearance." },
    ],
  },
  {
    title: "Door Systems",
    products: [
      { title: "Sliding Doors", href: "/doors/sliding", type: "slidingDoor", description: "Slim frame sliding door for large openings, smooth horizontal movement, high glass visibility, and indoor-outdoor connection." },
      { title: "Folding Doors", href: "/doors/folding", type: "foldingDoor", description: "Thermal break folding door with multiple panels that fold and stack aside to create a wide open living space." },
      { title: "Pivot Doors", href: "/doors/pivot", type: "pivotDoor", description: "Architectural pivot door with center-axis rotation, oversized entrance look, strong aluminum frame, and luxury glass design." },
      { title: "Casement Doors", href: "/doors/casement", type: "casementDoor", description: "Thermal break casement door with hinged swing operation, strong sealing, insulated glass, and clean exterior performance." },
      { title: "Barn Doors", href: "/doors/barn", type: "barnDoor", description: "Interior barn door with exposed top rail, smooth side-sliding movement, slim frame profile, and modern partition style." },
      { title: "Lift Sliding Door", href: "/doors/lift-sliding", type: "liftSlidingDoor", description: "Heavy-panel lift sliding door system with smooth operation, wide glass openings, and high insulation performance." },
      { title: "Heavy Duty Sliding Door", href: "/doors/heavy-duty-sliding", type: "heavySlidingDoor", description: "Heavy duty sliding system for oversized openings, stronger panels, durable movement, and luxury architectural spaces." },
    ],
  },
  {
    title: "Architectural Systems",
    products: [
      { title: "Curtain Wall", href: "/systems/curtain-wall", type: "curtainWall", description: "Large glass façade system for commercial-style elevations, daylight, and clean architectural lines." },
      { title: "Glass House", href: "/systems/glass-house", type: "glassHouse", description: "Aluminum framed glass structure for sunrooms, garden rooms, and luxury outdoor living spaces." },
    ],
  },
];

function Shine() {
  return (
    <motion.div
      animate={{ x: ["-140%", "160%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    />
  );
}

function Panel({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute border-[6px] border-[#262626] bg-[#101010] shadow-[20px_0_40px_rgba(0,0,0,.55)] ${className}`}>
      <div className="absolute inset-[8px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent">
        <Shine />
      </div>
      <div className="absolute right-0 top-0 h-full w-px bg-yellow-500/35" />
    </div>
  );
}

function ProductGraphic({ type }: { type: string }) {
  return (
    <div className="relative h-44 w-full overflow-hidden border border-yellow-500/25 bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.16),transparent_58%)]" />
      <div className="absolute inset-4 border-[8px] border-[#151515] bg-white/[0.025] shadow-2xl" />
      <div className="absolute bottom-5 left-8 right-8 h-px bg-yellow-500/35" />

      {type === "slidingWindow" && (
        <>
          <Panel className="left-[23%] top-12 h-20 w-24" />
          <motion.div animate={{ x: [0, 46, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[40%] top-12 h-20 w-24" />
          </motion.div>
        </>
      )}

      {type === "foldingWindow" && (
        <div className="absolute left-[17%] top-12 flex h-20 w-[66%] items-center justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ rotateY: [0, i % 2 === 0 ? -62 : 62, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
              className="relative h-20 w-12 origin-left border-[6px] border-[#262626] bg-[#101010] shadow-xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-[6px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent" />
              <div className="absolute right-0 top-0 h-full w-px bg-yellow-500/35" />
            </motion.div>
          ))}
        </div>
      )}

      {type === "casementWindow" && (
        <>
          <div className="absolute left-[34%] top-10 h-24 w-24 border border-white/20" />
          <motion.div animate={{ rotateY: [0, -68, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[34%] top-10 h-24 w-24 origin-left" />
          </motion.div>
        </>
      )}

      {type === "fixedWindow" && (
        <>
          <Panel className="left-[28%] top-9 h-28 w-40" />
          <div className="absolute left-[50%] top-9 h-28 w-px bg-yellow-500/40" />
        </>
      )}

      {type === "foldUpWindow" && (
        <>
          <div className="absolute left-[29%] top-14 h-20 w-36 border border-white/20" />
          <motion.div animate={{ rotateX: [0, 72, 0], y: [0, -12, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[29%] top-14 h-20 w-36 origin-top" />
          </motion.div>
        </>
      )}

      {type === "gasStrutWindow" && (
        <>
          <div className="absolute left-[29%] top-14 h-20 w-36 border border-white/20" />
          <motion.div animate={{ rotateX: [0, 66, 0], y: [0, -10, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[29%] top-14 h-20 w-36 origin-top" />
          </motion.div>
          <div className="absolute left-[25%] top-[86px] h-px w-24 rotate-[-36deg] bg-yellow-400/70" />
          <div className="absolute right-[25%] top-[86px] h-px w-24 rotate-[36deg] bg-yellow-400/70" />
        </>
      )}

      {type === "tiltTurnWindow" && (
        <>
          <div className="absolute left-[35%] top-10 h-24 w-24 border border-white/20" />
          <motion.div animate={{ rotateY: [0, -50, 0], rotateX: [0, 0, 18, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[35%] top-10 h-24 w-24 origin-left" />
          </motion.div>
        </>
      )}

      {type === "hungWindow" && (
        <>
          <div className="absolute left-[36%] top-8 h-[120px] w-24 border border-white/20" />
          <div className="absolute left-[36%] top-[82px] h-px w-24 bg-yellow-500/30" />
          <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[36%] top-[82px] h-14 w-24" />
          </motion.div>
        </>
      )}

      {type === "skylightWindow" && (
        <>
          <motion.div
            animate={{ rotate: [-13, -8, -13] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[26%] top-14 h-20 w-44 skew-x-[-16deg] border-[5px] border-[#262626] bg-white/[0.06] shadow-2xl"
          />
          <div className="absolute left-[38%] top-16 h-14 w-px rotate-[74deg] bg-yellow-500/45" />
          <div className="absolute left-[54%] top-16 h-14 w-px rotate-[74deg] bg-yellow-500/45" />
        </>
      )}

      {type === "louvreWindow" && (
        <div className="absolute left-[30%] top-10 h-24 w-40 border border-white/20">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ rotateX: [0, 44, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
              className="absolute left-4 h-3 w-32 border border-yellow-400/80 bg-yellow-500/10"
              style={{ top: 16 + i * 18 }}
            />
          ))}
        </div>
      )}

      {type === "slidingDoor" && (
        <>
          <Panel className="left-[17%] top-7 h-32 w-28" />
          <motion.div animate={{ x: [0, 62, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[40%] top-7 h-32 w-28" />
          </motion.div>
          <div className="absolute bottom-6 left-[16%] right-[16%] h-[2px] bg-yellow-500/45" />
        </>
      )}

      {type === "foldingDoor" && (
        <div className="absolute left-[10%] top-7 flex h-32 w-[80%] items-center justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ rotateY: [0, i % 2 === 0 ? -68 : 68, 0], x: [0, i * 5, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
              className="relative h-32 w-12 origin-left border-[6px] border-[#2a2a2a] bg-[#111] shadow-[18px_0_35px_rgba(0,0,0,.55)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-[7px] border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.04] to-transparent" />
              <div className="absolute right-0 top-0 h-full w-px bg-yellow-500/35" />
            </motion.div>
          ))}
        </div>
      )}

      {type === "pivotDoor" && (
        <>
          <div className="absolute left-[38%] top-7 h-32 w-24 border border-white/20" />
          <motion.div animate={{ rotateY: [0, 76, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[38%] top-7 h-32 w-24 origin-center" />
          </motion.div>
          <div className="absolute left-1/2 top-7 h-32 w-px bg-yellow-500/70" />
        </>
      )}

      {type === "casementDoor" && (
        <>
          <div className="absolute left-[29%] top-7 h-32 w-28 border border-white/20" />
          <motion.div animate={{ rotateY: [0, -64, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[29%] top-7 h-32 w-28 origin-left" />
          </motion.div>
          <div className="absolute left-[58%] top-7 h-32 w-16 border border-white/10" />
        </>
      )}

      {type === "barnDoor" && (
        <>
          <div className="absolute left-[14%] right-[14%] top-8 h-[3px] bg-yellow-500/70" />
          <div className="absolute left-[25%] top-10 h-28 w-24 border border-white/15" />
          <motion.div animate={{ x: [0, 76, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[25%] top-10 h-28 w-24" />
          </motion.div>
          <div className="absolute left-[31%] top-5 h-5 w-5 rounded-full border border-yellow-500/70 bg-black" />
          <div className="absolute left-[55%] top-5 h-5 w-5 rounded-full border border-yellow-500/70 bg-black" />
        </>
      )}

      {type === "liftSlidingDoor" && (
        <>
          <Panel className="left-[15%] top-7 h-32 w-32" />
          <motion.div animate={{ y: [0, -8, -8, 0], x: [0, 0, 58, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[40%] top-7 h-32 w-32" />
          </motion.div>
          <div className="absolute bottom-6 left-[14%] right-[14%] h-[2px] bg-yellow-500/55" />
        </>
      )}

      {type === "heavySlidingDoor" && (
        <>
          <Panel className="left-[10%] top-6 h-[132px] w-32 border-2" />
          <motion.div animate={{ x: [0, 58, 0], scale: [1, 0.985, 1] }} transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}>
            <Panel className="left-[42%] top-6 h-[132px] w-32 border-2" />
          </motion.div>
          <div className="absolute bottom-6 left-[10%] right-[10%] h-[3px] bg-yellow-500/55" />
        </>
      )}

      {type === "curtainWall" && (
        <div className="absolute left-[21%] top-8 grid h-32 w-48 grid-cols-3 grid-rows-2 border border-yellow-400/80 shadow-2xl">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="relative overflow-hidden border border-yellow-500/30 bg-white/[0.04]">
              <Shine />
            </div>
          ))}
        </div>
      )}

      {type === "glassHouse" && (
        <>
          <div className="absolute left-[23%] top-16 h-24 w-44 border border-yellow-400/80 bg-white/[0.04]" />
          <div className="absolute left-[23%] top-16 h-px w-44 origin-left rotate-[-25deg] bg-yellow-400/80" />
          <div className="absolute right-[23%] top-16 h-px w-44 origin-right rotate-[25deg] bg-yellow-400/80" />
          <div className="absolute left-[45%] top-9 h-32 w-px bg-yellow-500/50" />
        </>
      )}
    </div>
  );
}

function ProductCard({ product, index }: { product: any; index: number }) {
  return (
    <Link href={product.href}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.04 }}
        className="group min-h-[450px] border border-white/10 bg-white/[0.025] p-6 transition hover:border-yellow-500/60 hover:bg-yellow-500/[0.04]"
      >
        <ProductGraphic type={product.type} />

        <div className="mt-8 h-px w-16 bg-yellow-500/70 transition group-hover:w-28" />

        <h3 className="mt-8 text-xl font-light uppercase tracking-[0.14em] text-white">
          {product.title}
        </h3>

        <p className="mt-6 text-sm leading-8 text-white/55">
          {product.description}
        </p>

        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-yellow-400">
          View System →
        </p>
      </motion.div>
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 pb-24 pt-32 text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_55%)]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-5 text-xs uppercase tracking-[0.45em] text-yellow-500/80">
          Luxora Collection
        </p>

        <h1 className="max-w-4xl text-3xl font-light uppercase leading-tight tracking-[0.12em] md:text-5xl">
          Premium Doors & Windows
        </h1>

        <p className="mt-8 max-w-3xl text-sm leading-8 text-white/60 md:text-base">
          Explore Luxora aluminum systems with product-specific motion graphics,
          premium materials, custom design, and luxury performance.
        </p>

        {sections.map((section) => (
          <div key={section.title} className="mt-20">
            <div className="mb-8 flex items-center gap-5">
              <div className="h-px w-16 bg-yellow-500/70" />
              <h2 className="text-sm font-light uppercase tracking-[0.32em] text-yellow-400">
                {section.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {section.products.map((product, index) => (
                <ProductCard key={product.title} product={product} index={index} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}