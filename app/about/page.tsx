"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const reasons = [
  ["Architectural Review", "We check sizes, openings, style, proportions, and details to match the project design."],
  ["Perfect Material", "Premium aluminum profiles, quality glass, strong hardware, and luxury finish options."],
  ["Custom Design", "Each system can be customized by size, color, glass type, operation, and configuration."],
  ["Compatible Price", "Luxury quality with smart pricing based on project needs, quantity, and specifications."],
];

const serviceDetails = [
  "Safe Shipping & Packaging",
  "Professional Installation Support",
  "Architectural Detail Review",
  "Custom Sizes & Configurations",
  "Premium Aluminum Material",
  "Thermal Break Options",
  "Double & Triple Glass",
  "European Hardware",
  "Luxury Color Finishes",
  "Water & Air Performance",
  "Sound Reduction Options",
  "Compatible Project Pricing",
];

const process = [
  ["01", "Review", "We review architectural plans, openings, sizes, elevations, and product needs."],
  ["02", "Design", "We help select the best door and window system for function, beauty, and budget."],
  ["03", "Customize", "Every product is prepared based on exact size, glass, color, hardware, and operation."],
  ["04", "Ship Safely", "Products are protected with professional packaging to reduce damage during delivery."],
  ["05", "Install Support", "We coordinate details for smooth installation and professional final results."],
];

const floatingFrames = Array.from({ length: 18 });

const hardwareGraphics = [
  { type: "handle", left: "5%", top: "13%", size: "lg" },
  { type: "piston", left: "72%", top: "16%", size: "lg" },
  { type: "hinge", left: "10%", top: "64%", size: "md" },
  { type: "lock", left: "80%", top: "62%", size: "md" },
  { type: "profile", left: "40%", top: "8%", size: "lg" },
  { type: "roller", left: "52%", top: "75%", size: "md" },
  { type: "corner", left: "24%", top: "42%", size: "md" },
  { type: "glass", left: "63%", top: "44%", size: "lg" },
];

function HardwareGraphic({ type, size }: { type: string; size: string }) {
  const box = size === "lg" ? "h-52 w-52" : "h-40 w-40";

  return (
    <div className={`relative ${box} opacity-80`}>
      {type === "handle" && (
        <>
          <div className="absolute left-16 top-6 h-36 w-7 rounded-full border-2 border-yellow-400/80 bg-yellow-500/10 shadow-[0_0_35px_rgba(234,179,8,0.35)]" />
          <div className="absolute left-20 top-20 h-6 w-32 rounded-full border-2 border-yellow-400/80 bg-yellow-500/10" />
          <div className="absolute left-[88px] top-[105px] h-8 w-8 rounded-full bg-yellow-400/40" />
        </>
      )}

      {type === "piston" && (
        <>
          <div className="absolute left-2 top-24 h-5 w-44 rotate-[-24deg] rounded-full border-2 border-yellow-400/80 bg-yellow-500/10 shadow-[0_0_35px_rgba(234,179,8,0.35)]" />
          <div className="absolute left-20 top-[78px] h-8 w-20 rotate-[-24deg] rounded-full bg-yellow-500/25" />
          <div className="absolute left-0 top-[82px] h-9 w-9 rounded-full border-2 border-yellow-400/80" />
          <div className="absolute right-0 top-[40px] h-9 w-9 rounded-full border-2 border-yellow-400/80" />
        </>
      )}

      {type === "hinge" && (
        <div className="absolute left-12 top-5 h-32 w-20 rounded-2xl border-2 border-yellow-400/80 bg-yellow-500/10 shadow-[0_0_35px_rgba(234,179,8,0.35)]">
          <div className="absolute left-1/2 top-0 h-full w-px bg-yellow-400/70" />
          {[24, 60, 96].map((t) => (
            <div key={t} style={{ top: t }} className="absolute left-8 h-4 w-4 rounded-full bg-yellow-400/50" />
          ))}
        </div>
      )}

      {type === "lock" && (
        <>
          <div className="absolute left-12 top-8 h-28 w-20 rounded-xl border-2 border-yellow-400/80 bg-yellow-500/10 shadow-[0_0_35px_rgba(234,179,8,0.35)]" />
          <div className="absolute left-[78px] top-[74px] h-7 w-7 rounded-full bg-yellow-400/50" />
          <div className="absolute left-[91px] top-[100px] h-12 w-px bg-yellow-400/80" />
        </>
      )}

      {type === "profile" && (
        <>
          <div className="absolute left-6 top-14 h-24 w-36 border-[9px] border-yellow-400/70 bg-yellow-500/10 shadow-[0_0_35px_rgba(234,179,8,0.35)]" />
          <div className="absolute left-16 top-[88px] h-10 w-20 border-2 border-yellow-400/50" />
          <div className="absolute left-[104px] top-14 h-24 w-px bg-yellow-400/50" />
        </>
      )}

      {type === "roller" && (
        <>
          <div className="absolute left-8 top-16 h-20 w-32 rounded-full border-2 border-yellow-400/80 bg-yellow-500/10 shadow-[0_0_35px_rgba(234,179,8,0.35)]" />
          <div className="absolute left-16 top-20 h-12 w-12 rounded-full border-2 border-yellow-400/80" />
          <div className="absolute left-24 top-20 h-12 w-12 rounded-full border-2 border-yellow-400/80" />
        </>
      )}

      {type === "corner" && (
        <>
          <div className="absolute left-8 top-8 h-28 w-28 border-l-[10px] border-t-[10px] border-yellow-400/70 shadow-[0_0_35px_rgba(234,179,8,0.35)]" />
          <div className="absolute left-16 top-16 h-20 w-20 border-l-2 border-t-2 border-yellow-400/50" />
        </>
      )}

      {type === "glass" && (
        <>
          <div className="absolute left-8 top-8 h-36 w-28 skew-x-[-8deg] border-2 border-yellow-400/60 bg-white/[0.04] shadow-[0_0_35px_rgba(234,179,8,0.25)]" />
          <div className="absolute left-16 top-10 h-32 w-2 skew-x-[-8deg] bg-white/20" />
        </>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
{/* BACKGROUND */}
<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">

  {/* MAIN GOLD GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.22),transparent_45%)]" />

  {/* LEFT GLOW */}
  <motion.div
    animate={{
      y: [0, -40, 0],
      x: [0, 30, 0],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-[-200px] top-[10%] h-[700px] w-[700px] rounded-full bg-yellow-500/10 blur-3xl"
  />

  {/* RIGHT GLOW */}
  <motion.div
    animate={{
      y: [0, 50, 0],
      x: [0, -30, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-[-220px] top-[20%] h-[700px] w-[700px] rounded-full bg-yellow-500/10 blur-3xl"
  />

  {/* BOTTOM GLOW */}
  <motion.div
    animate={{
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-[-300px] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl"
  />

  {/* GOLD LIGHT BEAMS */}
  <div className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent" />
  <div className="absolute left-[30%] top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent" />
  <div className="absolute left-[50%] top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent" />
  <div className="absolute left-[70%] top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent" />
  <div className="absolute left-[90%] top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent" />

  {/* HORIZONTAL LIGHTS */}
  <div className="absolute left-0 top-[20%] h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
  <div className="absolute left-0 top-[50%] h-px w-full bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent" />
  <div className="absolute left-0 top-[80%] h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

  {/* FLOATING FRAMES */}
  {floatingFrames.map((_, i) => (
    <motion.div
      key={i}
      className="absolute border border-yellow-500/25 bg-white/[0.02] backdrop-blur-[1px]"
      style={{
        width: i % 3 === 0 ? 180 : i % 3 === 1 ? 120 : 240,
        height: i % 3 === 0 ? 280 : i % 3 === 1 ? 180 : 140,
        left: `${(i * 13) % 100}%`,
        top: `${(i * 19) % 100}%`,
        borderRadius: i % 2 === 0 ? "8px" : "22px",
      }}
      animate={{
        y: [0, -45, 0],
        x: [0, i % 2 === 0 ? 30 : -30, 0],
        opacity: [0.15, 0.45, 0.15],
        rotate: [0, i % 2 === 0 ? 2 : -2, 0],
      }}
      transition={{
        duration: 12 + i,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute left-1/2 top-0 h-full w-px bg-yellow-500/20" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-yellow-500/20" />
    </motion.div>
  ))}

  {/* HARDWARE GRAPHICS */}
  {hardwareGraphics.map((item, i) => (
    <motion.div
      key={i}
      className="absolute z-10"
      style={{ left: item.left, top: item.top }}
      animate={{
        y: [0, -40, 0],
        x: [0, i % 2 === 0 ? 24 : -24, 0],
        rotate: [0, i % 2 === 0 ? 8 : -8, 0],
      }}
      transition={{
        duration: 8 + i,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <HardwareGraphic type={item.type} size={item.size} />
    </motion.div>
  ))}

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/35" />

</div>

{/* HERO */}
<section
  id="quality"
 className="relative z-30 flex min-h-screen items-center border-t border-white/10 bg-transparent px-6 py-32"
>
<div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1fr]"></div>

    {/* LEFT SIDE */}
    <div>
      <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-500/80">
        About Luxora
      </p>

      <h1 className="text-3xl font-light uppercase leading-[1.05] tracking-[0.12em] md:text-5xl">
        Luxury Openings
        <br />
        Designed With Precision
      </h1>

      <div className="mt-10 h-px w-32 bg-yellow-500/70" />

      <p className="mt-10 max-w-2xl text-sm leading-8 text-white/70 md:text-base">
        Luxora Doors & Windows provides premium aluminum systems with a focus on safe shipping,
        professional installation support, architectural detail review, perfect material selection,
        custom design, and compatible pricing for luxury projects.
      </p>
      <div className="mt-12 flex flex-wrap gap-4">

  <a
    href="/quote"
    className="border border-yellow-500/70 px-8 py-4 text-sm uppercase tracking-[0.22em] text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
  >
    Request Quote
  </a>

  <a
    href="/products"
    className="border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white/70 transition hover:border-yellow-500/60 hover:text-yellow-400"
  >
    View Products
  </a>

</div>
{/* ABOUT PAGE LINKS */}

<div className="absolute left-4 right-4 top-28 z-40 flex flex-wrap gap-3 md:left-10 md:right-auto md:top-1/2 md:-translate-y-1/2 md:flex-col md:gap-6">

  <Link
    href="/about/team"
    className="w-auto md:w-[260px] border border-white/10 bg-black/50 px-8 py-5 text-xs uppercase tracking-[0.28em] text-white/70 backdrop-blur-md transition hover:border-yellow-500/50 hover:text-yellow-400"
  >
    Our Team
  </Link>

  <Link
    href="/about/quality"
    className="w-auto md:w-[260px] border border-white/10 bg-black/50 px-8 py-5 text-xs uppercase tracking-[0.28em] text-white/70 backdrop-blur-md transition hover:border-yellow-500/50 hover:text-yellow-400"
  >
    Quality
  </Link>

  <Link
    href="/about/windows"
    className="w-auto md:w-[260px] border border-white/10 bg-black/50 px-8 py-5 text-xs uppercase tracking-[0.28em] text-white/70 backdrop-blur-md transition hover:border-yellow-500/50 hover:text-yellow-400"
  >
    Window Systems
  </Link>

  <Link
    href="/about/doors"
    className="w-auto md:w-[260px] border border-white/10 bg-black/50 px-8 py-5 text-xs uppercase tracking-[0.28em] text-white/70 backdrop-blur-md transition hover:border-yellow-500/50 hover:text-yellow-400"
  >
    Door Systems
  </Link>

</div>
  </div>
</section>

      {/* WHY */}
      <section className="relative z-30 border-t border-white/10 bg-[#050505]/95 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-yellow-500/80">
            Why Choose Luxora
          </p>

          <h2 className="mb-16 max-w-5xl text-2xl font-light uppercase leading-tight tracking-[0.12em]">
            Every detail is reviewed before your product is manufactured
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map(([title, text]) => (
              <div key={title} className="border border-white/10 bg-white/[0.025] p-8 transition hover:border-yellow-500/50">
                <div className="mb-6 h-px w-14 bg-yellow-500/70" />
                <h3 className="text-xl font-light uppercase tracking-[0.16em]">{title}</h3>
                <p className="mt-6 text-sm leading-8 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL GRID */}
      <section className="relative z-30 border-t border-white/10 bg-white/[0.02] backdrop-blur-[2px] px-6 py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-yellow-500/80">
              Complete Project Support
            </p>

            <h2 className="text-2xl font-light uppercase leading-tight tracking-[0.12em] md:text-3xl">
              From architectural review to safe delivery
            </h2>

            <p className="mt-8 text-sm leading-9 text-white/55">
              We help customers choose the correct system before ordering. Our process focuses on
              safety, beauty, performance, installation needs, and price compatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {serviceDetails.map((item) => (
              <div key={item} className="flex items-center gap-4 border border-white/10 bg-white/[0.025] px-6 py-5 transition hover:border-yellow-500/50">
                <div className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.8)]" />
                <p className="text-sm uppercase tracking-[0.1em] text-white/65">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      
    </main>
  );
}