"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Window Systems",
    products: [
      {
        title: "Sliding Windows",
        href: "/windows/sliding",
        type: "slidingWindow",
        description:
          "Thermal break sliding window with horizontal panels, smooth track movement, strong insulation, and clean modern sightlines.",
      },
      {
        title: "Folding Windows",
        href: "/windows/folding",
        type: "foldingWindow",
        description:
          "Multi-panel folding window designed for kitchen bars, patios, and counter openings, with panels stacking to one side.",
      },
      {
        title: "Casement Windows",
        href: "/windows/casement",
        type: "casementWindow",
        description:
          "Casement window with hinged outward opening, tight sealing, optional screen system, and strong thermal performance.",
      },
      {
        title: "Fixed Windows",
        href: "/windows/fixed",
        type: "fixedWindow",
        description:
          "Fixed glass window for maximum daylight, wide views, large architectural openings, and clean non-operable frame design.",
      },
      {
        title: "Fold Up Window",
        href: "/windows/fold-up",
type: "foldUpWindow",
        description:
          "Upward-opening window system ideal for counters, patios, bars, and indoor-outdoor service areas.",
      },
      {
        title: "Gas Strut Window",
href: "/windows/gas-strut",
type: "gasStrutWindow",
        description:
          "Gas-assisted upward opening window for clean counter access, ventilation, and modern outdoor connection.",
      },
      {
        title: "Tilt & Turn Window",
    href: "/windows/tilt-turn",
type: "tiltTurnWindow",
        description:
          "Dual-function window for secure ventilation, easy cleaning, and strong thermal sealing.",
      },
      {
        title: "Single / Double Hung Window",
href: "/windows/hung",
type: "hungWindow",
        description:
          "Vertical sliding window system with classic operation and modern aluminum performance.",
      },
      {
        title: "Skylight Window",
href: "/windows/skylight",
type: "skylightWindow",
        description:
          "Overhead glass system designed to bring natural daylight from above with refined aluminum framing.",
      },
      {
        title: "Glass Louvre Window",
href: "/windows/glass-louvre",
type: "louvreWindow",
        description:
          "Adjustable glass blade window for airflow, ventilation control, and clean architectural appearance.",
      },
    ],
  },
  {
    title: "Door Systems",
    products: [
      {
        title: "Sliding Doors",
        href: "/doors/sliding",
        type: "slidingDoor",
        description:
          "Slim frame sliding door for large openings, smooth horizontal movement, high glass visibility, and indoor-outdoor connection.",
      },
      {
        title: "Folding Doors",
        href: "/doors/folding",
        type: "foldingDoor",
        description:
          "Thermal break folding door with multiple panels that fold and stack aside to create a wide open living space.",
      },
      {
        title: "Pivot Doors",
        href: "/doors/pivot",
        type: "pivotDoor",
        description:
          "Architectural pivot door with center-axis rotation, oversized entrance look, strong aluminum frame, and luxury glass design.",
      },
      {
        title: "Casement Doors",
        href: "/doors/casement",
        type: "casementDoor",
        description:
          "Thermal break casement door with hinged swing operation, strong sealing, insulated glass, and clean exterior performance.",
      },
      {
        title: "Barn Doors",
        href: "/doors/barn",
        type: "barnDoor",
        description:
          "Interior barn door with exposed top rail, smooth side-sliding movement, slim frame profile, and modern partition style.",
      },
      {
        title: "Lift Sliding Door",
 href: "/doors/lift-sliding",
type: "liftSlidingDoor",
        description:
          "Heavy-panel lift sliding door system with smooth operation, wide glass openings, and high insulation performance.",
      },
      {
        title: "Heavy Duty Sliding Door",
href: "/doors/heavy-duty-sliding",
type: "heavySlidingDoor",
        description:
          "Heavy duty sliding system for oversized openings, stronger panels, durable movement, and luxury architectural spaces.",
      },
    ],
  },
  {
    title: "Architectural Systems",
    products: [
      {
        title: "Curtain Wall",
href: "/systems/curtain-wall",
type: "curtainWall",
        description:
          "Large glass façade system for commercial-style elevations, daylight, and clean architectural lines.",
      },
      {
        title: "Glass House",
href: "/systems/glass-house",
type: "glassHouse",
        description:
          "Aluminum framed glass structure for sunrooms, garden rooms, and luxury outdoor living spaces.",
      },
    ],
  },
];

function ProductGraphic({ type }: { type: string }) {
  return (
    <div className="relative h-40 w-full overflow-hidden border border-yellow-500/25 bg-black/40">
      <div className="absolute inset-4 border-[6px] border-[#171717] bg-white/[0.03]" />

      {type === "slidingWindow" && (
        <>
          <div className="absolute left-[22%] top-10 h-20 w-20 border border-white/25" />
          <motion.div
            animate={{ x: [0, 42, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[38%] top-10 h-20 w-20 border border-yellow-400/80 bg-yellow-500/10"
          />
        </>
      )}

      {type === "foldingWindow" && (
        <div className="absolute left-[18%] top-11 flex h-20 w-[64%] items-center justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ rotateY: [0, i % 2 === 0 ? 58 : -58, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.08,
              }}
              className="h-20 w-10 origin-left border border-yellow-400/80 bg-yellow-500/10"
            />
          ))}
        </div>
      )}

      {type === "casementWindow" && (
        <>
          <div className="absolute left-[34%] top-9 h-24 w-24 border border-white/25" />
          <motion.div
            animate={{ rotateY: [0, -65, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[34%] top-9 h-24 w-24 origin-left border border-yellow-400/80 bg-yellow-500/10"
          />
        </>
      )}

      {type === "fixedWindow" && (
        <>
          <div className="absolute left-[28%] top-8 h-24 w-36 border border-yellow-400/80 bg-white/[0.04]" />
          <div className="absolute left-[50%] top-8 h-24 w-px bg-yellow-500/35" />
          <motion.div
            animate={{ x: ["-120%", "140%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            className="absolute top-8 h-24 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </>
      )}

      {type === "foldUpWindow" && (
        <>
          <div className="absolute left-[30%] top-12 h-20 w-32 border border-white/25" />
          <motion.div
            animate={{ rotateX: [0, 70, 0], y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[30%] top-12 h-20 w-32 origin-top border border-yellow-400/80 bg-yellow-500/10"
          />
        </>
      )}

      {type === "gasStrutWindow" && (
        <>
          <div className="absolute left-[30%] top-12 h-20 w-32 border border-white/25" />
          <motion.div
            animate={{ rotateX: [0, 65, 0], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[30%] top-12 h-20 w-32 origin-top border border-yellow-400/80 bg-yellow-500/10"
          />
          <div className="absolute left-[28%] top-[74px] h-px w-20 rotate-[-35deg] bg-yellow-400/70" />
          <div className="absolute right-[28%] top-[74px] h-px w-20 rotate-[35deg] bg-yellow-400/70" />
        </>
      )}

      {type === "tiltTurnWindow" && (
        <>
          <div className="absolute left-[35%] top-9 h-24 w-24 border border-white/25" />
          <motion.div
            animate={{ rotateY: [0, -48, 0], rotateX: [0, 0, 18, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[35%] top-9 h-24 w-24 origin-left border border-yellow-400/80 bg-yellow-500/10"
          />
        </>
      )}

      {type === "hungWindow" && (
        <>
          <div className="absolute left-[34%] top-8 h-28 w-24 border border-white/25" />
          <div className="absolute left-[34%] top-[78px] h-px w-24 bg-white/20" />
          <motion.div
            animate={{ y: [0, -28, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[34%] top-[78px] h-14 w-24 border border-yellow-400/80 bg-yellow-500/10"
          />
        </>
      )}

      {type === "skylightWindow" && (
        <>
          <motion.div
            animate={{ rotate: [-12, -8, -12] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[28%] top-12 h-20 w-40 skew-x-[-16deg] border border-yellow-400/80 bg-white/[0.05]"
          />
          <div className="absolute left-[36%] top-16 h-12 w-px rotate-[74deg] bg-yellow-500/40" />
          <div className="absolute left-[52%] top-16 h-12 w-px rotate-[74deg] bg-yellow-500/40" />
        </>
      )}

      {type === "louvreWindow" && (
        <div className="absolute left-[30%] top-9 h-24 w-36 border border-white/25">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ rotateX: [0, 42, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.08,
              }}
              className="absolute left-3 h-3 w-28 border border-yellow-400/80 bg-yellow-500/10"
              style={{ top: 16 + i * 18 }}
            />
          ))}
        </div>
      )}

      {type === "slidingDoor" && (
        <>
          <div className="absolute left-[16%] top-6 h-28 w-24 border border-white/25" />
          <motion.div
            animate={{ x: [0, 60, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[38%] top-6 h-28 w-24 border border-yellow-400/80 bg-yellow-500/10"
          />
          <div className="absolute bottom-6 left-[14%] right-[14%] h-px bg-yellow-500/40" />
        </>
      )}

      {type === "foldingDoor" && (
        <div className="absolute left-[13%] top-6 flex h-28 w-[74%] items-center justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ rotateY: [0, i % 2 === 0 ? 65 : -65, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.07,
              }}
              className="h-28 w-11 origin-left border border-yellow-400/80 bg-yellow-500/10"
            />
          ))}
        </div>
      )}

      {type === "pivotDoor" && (
        <>
          <div className="absolute left-[37%] top-6 h-28 w-24 border border-white/25" />
          <motion.div
            animate={{ rotateY: [0, 75, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[37%] top-6 h-28 w-24 origin-center border border-yellow-400/80 bg-yellow-500/10"
          />
          <div className="absolute left-1/2 top-6 h-28 w-px bg-yellow-500/60" />
        </>
      )}

      {type === "casementDoor" && (
        <>
          <div className="absolute left-[28%] top-6 h-28 w-28 border border-white/25" />
          <motion.div
            animate={{ rotateY: [0, -62, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[28%] top-6 h-28 w-28 origin-left border border-yellow-400/80 bg-yellow-500/10"
          />
          <div className="absolute left-[56%] top-6 h-28 w-16 border border-white/15" />
        </>
      )}

      {type === "barnDoor" && (
        <>
          <div className="absolute left-[15%] right-[15%] top-6 h-1 bg-yellow-500/70" />
          <div className="absolute left-[25%] top-8 h-24 w-20 border border-white/20" />
          <motion.div
            animate={{ x: [0, 70, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[25%] top-8 h-24 w-20 border border-yellow-400/80 bg-yellow-500/10"
          />
          <div className="absolute left-[31%] top-5 h-4 w-4 rounded-full border border-yellow-500/70 bg-black" />
          <div className="absolute left-[53%] top-5 h-4 w-4 rounded-full border border-yellow-500/70 bg-black" />
        </>
      )}

      {type === "liftSlidingDoor" && (
        <>
          <div className="absolute left-[14%] top-6 h-28 w-28 border border-white/25" />
          <motion.div
            animate={{ y: [0, -8, -8, 0], x: [0, 0, 55, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[38%] top-6 h-28 w-28 border border-yellow-400/80 bg-yellow-500/10"
          />
          <div className="absolute bottom-5 left-[14%] right-[14%] h-px bg-yellow-500/50" />
        </>
      )}

      {type === "heavySlidingDoor" && (
        <>
          <div className="absolute left-[12%] top-5 h-30 w-28 border-2 border-white/20" />
          <motion.div
            animate={{ x: [0, 48, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[40%] top-5 h-[120px] w-28 border-2 border-yellow-400/80 bg-yellow-500/10"
          />
          <div className="absolute bottom-5 left-[12%] right-[12%] h-[2px] bg-yellow-500/50" />
        </>
      )}

      {type === "curtainWall" && (
        <div className="absolute left-[22%] top-6 grid h-28 w-44 grid-cols-3 grid-rows-2 border border-yellow-400/80">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="border border-yellow-500/30 bg-white/[0.03]" />
          ))}
        </div>
      )}

      {type === "glassHouse" && (
        <>
          <div className="absolute left-[24%] top-16 h-20 w-40 border border-yellow-400/80 bg-white/[0.03]" />
          <div className="absolute left-[24%] top-16 h-px w-40 origin-left rotate-[-24deg] bg-yellow-400/80" />
          <div className="absolute right-[24%] top-16 h-px w-40 origin-right rotate-[24deg] bg-yellow-400/80" />
          <div className="absolute left-[44%] top-9 h-27 w-px bg-yellow-500/50" />
        </>
      )}

      <div className="absolute bottom-3 left-4 right-4 h-px bg-yellow-500/25" />
    </div>
  );
}

function ProductCard({ product, index }: { product: any; index: number }) {
  return (
    <Link key={product.title} href={product.href}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.04 }}
        className="group min-h-[430px] border border-white/10 bg-white/[0.025] p-6 transition hover:border-yellow-500/60 hover:bg-yellow-500/[0.04]"
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

        <motion.div
          animate={{
            rotate: [0, 4, 0],
            scale: [1, 1.04, 1],
            opacity: [0.12, 0.24, 0.12],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[8%] -translate-x-1/2"
        >
          <div className="relative flex items-center justify-center">
            <div className="relative h-[420px] w-[420px] rotate-[8deg] border border-yellow-500/45">
              <div className="absolute inset-5 border border-yellow-500/25" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="select-none text-[280px] font-light italic text-yellow-500/25"
                  style={{
                    fontFamily: "serif",
                    textShadow: "0 0 55px rgba(234,179,8,0.25)",
                  }}
                >
                  L
                </span>
              </div>
            </div>

            <motion.div
              animate={{ x: [-12, 12, -12] }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[320px]"
            >
              <h1
                className="select-none whitespace-nowrap text-[160px] font-extralight uppercase tracking-[0.18em] text-yellow-500/20 md:text-[220px]"
                style={{
                  fontFamily: "serif",
                  textShadow: "0 0 45px rgba(234,179,8,0.22)",
                }}
              >
                LUXORA
              </h1>
            </motion.div>
          </div>
        </motion.div>

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-yellow-500/10"
            style={{
              width: i % 2 === 0 ? "1px" : "180px",
              height: i % 2 === 0 ? "180px" : "1px",
              left: `${(i * 9) % 100}%`,
              top: `${(i * 13) % 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.35, 0.1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
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
                <ProductCard
                  key={product.title}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}