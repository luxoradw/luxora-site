// app/about/design-team/page.tsx

"use client";

import { motion } from "framer-motion";

export default function DesignTeamPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black px-6 pb-24 pt-32 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.12),transparent_60%)]" />

        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-yellow-500/10"
            style={{
              width: i % 2 === 0 ? "1px" : "180px",
              height: i % 2 === 0 ? "180px" : "1px",
              left: `${(i * 8) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
            animate={{
              opacity: [0.08, 0.28, 0.08],
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
          Luxora Team
        </p>

        <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
          Design Team
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
          Our design team combines luxury aesthetics, architectural precision,
          and modern innovation to create premium aluminum systems tailored for
          refined living spaces.
        </p>

        {/* Team Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {[
            {
              name: "Architectural Design",
              text: "Modern luxury concepts developed for residential and commercial architecture.",
            },
            {
              name: "Custom Detailing",
              text: "Precision-driven detailing focused on elegance, minimalism, and performance.",
            },
            {
              name: "3D Visualization",
              text: "Advanced renderings and visual concepts helping clients experience the final design.",
            },
          ].map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-yellow-500/20 bg-white/[0.03] p-10 backdrop-blur-md transition hover:border-yellow-500/60"
            >

              <div className="mb-6 h-px w-16 bg-yellow-500/70" />

              <h2 className="mb-5 font-serif text-3xl text-white">
                {item.name}
              </h2>

              <p className="leading-8 text-white/60">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

    </main>
  );
}