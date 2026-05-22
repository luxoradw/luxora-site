"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const strengths = [
  ["Thermal Break Systems", "Engineered aluminum profiles designed for insulation, comfort, and energy performance."],
  ["Slim Frame Design", "Minimal sightlines and clean architectural profiles for modern luxury spaces."],
  ["Custom Configurations", "Sliding, folding, pivot, fixed, casement, tilt-turn, skylight, and specialty systems."],
  ["Premium Glazing", "Double glass, triple glass, laminated glass, tempered glass, tinted glass, and built-in blind options."],
];

const products = [
  "Pivot Doors",
  "Slim Frame Sliding Doors",
  "Lift Sliding Doors",
  "Folding Doors",
  "Thermal Break Windows",
  "Fixed Windows",
  "Curtain Wall",
  "Skylight Systems",
  "Glass House",
  "Louvre Windows",
];

const process = [
  ["01", "Review", "We review plans, sizes, openings, operation type, finish, glass, and project needs."],
  ["02", "Select System", "We recommend the right Luxora system based on design, performance, and budget."],
  ["03", "Customize", "Each order is customized by size, color, glass type, hardware, and configuration."],
  ["04", "Prepare", "Systems are prepared with attention to packaging, protection, and delivery coordination."],
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

{/* LUXURY BACKGROUND */}
<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">

  {/* GOLD RADIAL GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_38%)]" />

  {/* CENTER GLOW */}
  <div className="absolute left-1/2 top-1/3 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

  {/* GRID PATTERN */}
  <div
    className="absolute inset-0 opacity-[0.08]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(212,175,55,0.22) 1px, transparent 1px),
        linear-gradient(90deg, rgba(212,175,55,0.22) 1px, transparent 1px)
      `,
      backgroundSize: "90px 90px",
    }}
  />

  {/* GOLD LINES */}
  <div className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent" />
  <div className="absolute left-[30%] top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent" />
  <div className="absolute left-[50%] top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent" />
  <div className="absolute left-[70%] top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent" />
  <div className="absolute left-[90%] top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent" />

  {/* HORIZONTAL LIGHT */}
  <div className="absolute left-0 top-[20%] h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
  <div className="absolute left-0 top-[50%] h-px w-full bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent" />
  <div className="absolute left-0 top-[80%] h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

  {/* FLOATING GOLD FRAMES */}
  {Array.from({ length: 14 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute border border-yellow-500/20 bg-white/[0.015]"
      style={{
        width: i % 3 === 0 ? 220 : i % 3 === 1 ? 160 : 120,
        height: i % 3 === 0 ? 320 : i % 3 === 1 ? 220 : 180,
        left: `${(i * 11) % 100}%`,
        top: `${(i * 17) % 100}%`,
        borderRadius: i % 2 === 0 ? "12px" : "28px",
      }}
      animate={{
        y: [0, -45, 0],
        x: [0, i % 2 === 0 ? 25 : -25, 0],
        opacity: [0.12, 0.4, 0.12],
        rotate: [0, i % 2 === 0 ? 3 : -3, 0],
      }}
      transition={{
        duration: 12 + i,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute left-1/2 top-0 h-full w-px bg-yellow-500/10" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-yellow-500/10" />
    </motion.div>
  ))}

  {/* PARTICLES */}
  {Array.from({ length: 50 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute h-[2px] w-[2px] rounded-full bg-yellow-400"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        y: [0, -40, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 6,
        repeat: Infinity,
      }}
    />
  ))}

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/40" />

</div>

      {/* HERO */}
      <section className="relative z-10 px-6 py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-400">
              About Luxora
            </p>

            <h1 className="font-serif text-6xl leading-tight md:text-7xl">
              Luxury Openings <br />
              <span className="text-yellow-300">Engineered With Precision</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
              Luxora Doors & Windows provides premium aluminum door and window
              systems for modern homes, architectural projects, and custom
              luxury spaces.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-500">
              Our catalog includes thermal break systems, slim frame sliding
              doors, pivot doors, folding doors, casement windows, fixed windows,
              curtain wall, skylight systems, specialty glazing, hardware, and
              custom configurations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="rounded-2xl bg-yellow-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-black transition hover:bg-yellow-300"
              >
                Request Quote
              </Link>

              <Link
                href="/products"
                className="rounded-2xl border border-yellow-400/50 px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-yellow-300 transition hover:bg-yellow-400/10"
              >
                View Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-[40px] border border-yellow-400/20 bg-white/[0.03] p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_60%)]" />

            <div className="relative z-10 grid gap-5">
              {[
                "Premium Aluminum Profiles",
                "Thermal Break Performance",
                "Double & Triple Glass",
                "Custom Sizes & Configurations",
                "Luxury Finishes",
                "Professional Project Support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-yellow-400/20 bg-black/50 px-6 py-5 text-sm uppercase tracking-[0.16em] text-neutral-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
{/* LUXURY PORTAL */}
<section className="relative z-10 px-6 pb-28">
  <div className="mx-auto max-w-7xl">

    <p className="mb-5 text-center text-xs uppercase tracking-[0.45em] text-yellow-400">
      Explore Luxora
    </p>

    <h2 className="mb-14 text-center font-serif text-4xl md:text-6xl">
      Discover Our Collection
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      {[
        {
          title: "Window Systems",
          href: "/products/windows",
          label: "Thermal Break Systems",
          text: "Minimal profiles crafted for modern architecture.",
          large: true,
        },
        {
          title: "Door Systems",
          href: "/products/doors",
          label: "Architectural Openings",
          text: "Pivot, sliding, folding, and custom luxury systems.",
          large: true,
        },
      ].map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group relative min-h-[420px] overflow-hidden rounded-[42px] border border-yellow-400/20 bg-white/[0.03] p-12 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-400/70 hover:bg-yellow-400/[0.06]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-yellow-400/20 transition duration-700 group-hover:scale-125 group-hover:border-yellow-400/50" />

          <div className="absolute bottom-10 right-10 text-[120px] font-serif text-yellow-400/5 transition duration-500 group-hover:text-yellow-400/10">
            {item.title.split(" ")[0]}
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-yellow-400">
                {item.label}
              </p>

              <h3 className="font-serif text-5xl text-white transition group-hover:text-yellow-300 md:text-6xl">
                {item.title}
              </h3>

              <p className="mt-8 max-w-md text-lg leading-8 text-neutral-400">
                {item.text}
              </p>
            </div>

            <p className="mt-12 text-xs uppercase tracking-[0.32em] text-yellow-400">
              Explore Collection →
            </p>
          </div>
        </Link>
      ))}

    </div>

    <div className="mt-6 grid gap-6 md:grid-cols-2">

      {[
        {
          title: "Quality",
          href: "/about/quality",
          label: "Performance & Detail",
          text: "Materials, glazing, hardware, and engineering standards.",
        },
        {
          title: "Our Team",
          href: "/about/team",
          label: "People Behind Luxora",
          text: "Design support, coordination, and customer service.",
        },
      ].map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group relative min-h-[230px] overflow-hidden rounded-[32px] border border-yellow-400/20 bg-black/60 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-400/60 hover:bg-yellow-400/[0.05]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_50%)] opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="relative z-10">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400">
              {item.label}
            </p>

            <h3 className="font-serif text-4xl text-white transition group-hover:text-yellow-300">
              {item.title}
            </h3>

            <p className="mt-5 max-w-xl leading-7 text-neutral-400">
              {item.text}
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-yellow-400">
              Explore →
            </p>
          </div>
        </Link>
      ))}

    </div>

  </div>
</section>
      {/* WHY LUXORA */}
      <section className="relative z-10 border-t border-yellow-400/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-center text-xs uppercase tracking-[0.4em] text-yellow-400">
            Why Choose Luxora
          </p>

          <h2 className="mb-16 text-center font-serif text-5xl">
            Designed For Performance. Built For Luxury.
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map(([title, text]) => (
              <motion.div
                key={title}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-yellow-400/20 bg-white/[0.03] p-8 backdrop-blur-md hover:border-yellow-400/60"
              >
                <div className="mb-8 h-px w-16 bg-yellow-400" />

                <h3 className="font-serif text-2xl text-yellow-300">
                  {title}
                </h3>

                <p className="mt-5 leading-7 text-neutral-400">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="relative z-10 border-t border-yellow-400/10 px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-yellow-400">
              Complete Systems
            </p>

            <h2 className="font-serif text-5xl leading-tight">
              A Full Collection For Doors, Windows, And Architectural Glass
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-400">
              Luxora offers a complete range of aluminum systems designed for
              residential, commercial, and high-end architectural spaces.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-yellow-400/20 bg-white/[0.03] px-6 py-5 text-sm uppercase tracking-[0.14em] text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 border-t border-yellow-400/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-center text-xs uppercase tracking-[0.4em] text-yellow-400">
            Our Process
          </p>

          <h2 className="mb-16 text-center font-serif text-5xl">
            From Review To Custom Production
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {process.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-yellow-400/20 bg-black/60 p-8"
              >
                <p className="font-serif text-5xl text-yellow-400/50">
                  {number}
                </p>

                <h3 className="mt-6 font-serif text-2xl text-white">
                  {title}
                </h3>

                <p className="mt-5 leading-7 text-neutral-400">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 pb-32">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-yellow-400/30 bg-gradient-to-r from-yellow-400/10 to-transparent p-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400">
                Luxora Doors & Windows
              </p>

              <h2 className="font-serif text-4xl">
                Let’s Build Something Exceptional
              </h2>

              <p className="mt-3 text-neutral-400">
                Get in touch for tailored aluminum door and window solutions.
              </p>
            </div>

            <Link
              href="/quote"
              className="rounded-2xl bg-yellow-400 px-10 py-5 text-sm font-bold uppercase tracking-[0.22em] text-black transition hover:bg-yellow-300"
            >
              Get A Quote →
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}