"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  ["Sliding Windows", "/windows/sliding", "sliding"],
  ["Folding Windows", "/windows/folding", "folding"],
  ["Casement Windows", "/windows/casement", "casement"],
  ["Fixed Windows", "/windows/fixed", "fixed"],
  ["Sliding Doors", "/doors/sliding", "slidingDoor"],
  ["Folding Doors", "/doors/folding", "foldingDoor"],
  ["Pivot Doors", "/doors/pivot", "pivot"],
  ["Casement Doors", "/doors/casement", "casementDoor"],
  ["Barn Doors", "/doors/barn", "barn"],
];

function ProductGraphic({ type }: { type: string }) {
  return (
    <div className="relative h-40 w-full overflow-hidden border border-yellow-500/25 bg-black/40">
      <div className="absolute inset-4 border-[6px] border-[#171717] bg-white/[0.03]" />

      {(type === "sliding" || type === "slidingDoor" || type === "barn") && (
        <>
          <div className="absolute left-[18%] top-8 h-24 w-20 border border-white/20" />
          <motion.div
            animate={{ x: [0, 55, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[38%] top-8 h-24 w-20 border border-yellow-400/70 bg-yellow-500/10"
          />
        </>
      )}

      {(type === "folding" || type === "foldingDoor") && (
        <div className="absolute left-[20%] top-8 flex h-24 w-[60%] items-center justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ rotateY: [0, i % 2 === 0 ? 55 : -55, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.08,
              }}
              className="h-24 w-12 origin-left border border-yellow-400/70 bg-yellow-500/10"
            />
          ))}
        </div>
      )}

      {(type === "casement" || type === "casementDoor") && (
        <>
          <div className="absolute left-[32%] top-8 h-24 w-28 border border-white/20" />
          <motion.div
            animate={{ rotateY: [0, -55, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[32%] top-8 h-24 w-28 origin-left border border-yellow-400/70 bg-yellow-500/10"
          />
        </>
      )}

      {type === "fixed" && (
        <>
          <div className="absolute left-[30%] top-8 h-24 w-32 border border-yellow-400/70 bg-white/[0.04]" />
          <motion.div
            animate={{ x: ["-120%", "120%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            className="absolute top-8 h-24 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </>
      )}

      {type === "pivot" && (
        <>
          <div className="absolute left-[34%] top-8 h-24 w-24 border border-white/20" />
          <motion.div
            animate={{ rotateY: [0, 65, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[34%] top-8 h-24 w-24 origin-center border border-yellow-400/70 bg-yellow-500/10"
          />
        </>
      )}

      <div className="absolute bottom-3 left-4 right-4 h-px bg-yellow-500/25" />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-32 pb-24 text-white">
{/* LUXORA BACKGROUND */}
<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  
  {/* GOLD LIGHT */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_55%)]" />

  {/* MOVING LOGO */}
  <motion.div
    animate={{
      rotate: [0, 4, 0],
      scale: [1, 1.04, 1],
      opacity: [0.18, 0.32, 0.18],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-1/2 top-[8%] -translate-x-1/2"
  >
    <div className="relative flex items-center justify-center">

      {/* LOGO FRAME */}
      <div className="relative h-[420px] w-[420px] rotate-[8deg] border border-yellow-500/45">
        <div className="absolute inset-5 border border-yellow-500/25" />

        {/* BIG L LETTER */}
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

      {/* BIG LUXORA TEXT */}
      <motion.div
        animate={{
          x: [-12, 12, -12],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[320px]"
      >
        <h1
          className="select-none whitespace-nowrap text-[220px] font-extralight uppercase tracking-[0.18em] text-yellow-500/25"
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

  {/* FLOATING GOLD LINES */}
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
      <section className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs uppercase tracking-[0.45em] text-yellow-500/80">
          Luxora Collection
        </p>

        <h1 className="max-w-4xl text-3xl font-light uppercase leading-tight tracking-[0.12em] md:text-5xl">
          Premium Doors & Windows
        </h1>

        <p className="mt-8 max-w-3xl text-sm leading-8 text-white/60 md:text-base">
          Explore Luxora aluminum systems with moving product graphics, premium
          materials, custom design, and luxury performance.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map(([title, href, type], index) => (
            <Link key={title} href={href}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group min-h-[420px] border border-white/10 bg-white/[0.025] p-6 transition hover:border-yellow-500/60 hover:bg-yellow-500/[0.04]"
              >
                <ProductGraphic type={type} />

                <div className="mt-8 h-px w-16 bg-yellow-500/70 transition group-hover:w-28" />

                <h2 className="mt-8 text-xl font-light uppercase tracking-[0.14em] text-white">
                  {title}
                </h2>

                <p className="mt-6 text-sm leading-8 text-white/55">
                  Custom aluminum system designed for luxury projects,
                  professional installation, safe delivery, and clean
                  architectural details.
                </p>

                <p className="mt-8 text-xs uppercase tracking-[0.25em] text-yellow-400">
                  View System →
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}