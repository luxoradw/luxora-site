"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const systems = [
  {
    title: "LX 70",
    type: "CASEMENT WINDOW",
    image: "/lx70.png",
  },
  {
    title: "LX 85",
    type: "TILT & TURN WINDOW",
    image: "/lx85.png",
  },
  {
    title: "LX SLIDE",
    type: "SLIDING WINDOW",
    image: "/lxslide.png",
  },
  {
    title: "LX LIFT",
    type: "LIFT & SLIDE DOOR",
    image: "/lxlift.png",
  },
  {
    title: "LX FIX",
    type: "FIXED WINDOW",
    image: "/lxfix.png",
  },
];

export default function WindowsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-yellow-400/10 px-6 py-20">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-yellow-400">
              Engineered For Excellence
            </p>

            <h1 className="font-serif text-6xl leading-tight md:text-7xl">
              Luxora <br />
              <span className="text-yellow-300">
                Window Systems
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">
              Designed to inspire. Built to last. Premium aluminum
              systems crafted for modern architecture and luxury living.
            </p>

            {/* Features */}
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">

              {[
                "Premium Quality",
                "Thermal Insulation",
                "Sound Insulation",
                "Maximum Security",
              ].map((item) => (

                <div
                  key={item}
                  className="border-l border-yellow-400/30 pl-4 text-sm text-neutral-300"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
 {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative overflow-hidden rounded-[36px] border border-yellow-400/20"
>

  <img
    src="/window-hero.png"
    alt="Luxora Window Systems"
    className="h-[620px] w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/30" />

</motion.div>

        </div>

      </section>

      {/* SYSTEMS */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-center text-xs uppercase tracking-[0.42em] text-yellow-400">
            Our Window Systems
          </p>

          <h2 className="mt-5 text-center font-serif text-5xl">
            Performance Meets Luxury
          </h2>

          {/* CARDS */}
          <div className="mt-14 grid gap-6 md:grid-cols-5">

            {systems.map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-2xl border border-yellow-400/20 bg-white/[0.03] p-5 backdrop-blur-md hover:border-yellow-400/50"
              >

                <h3 className="text-center font-serif text-3xl text-yellow-300">
                  {item.title}
                </h3>

                <p className="mb-5 text-center text-xs uppercase tracking-[0.18em] text-neutral-300">
                  {item.type}
                </p>

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-xl bg-neutral-950">

                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_70%)]" />

                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 h-[260px] w-full object-contain transition duration-700 group-hover:scale-105"
                  />

                </div>

              </motion.div>

            ))}

          </div>

          {/* PERFORMANCE + DETAIL */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">

            {/* PERFORMANCE */}
            <div className="rounded-3xl border border-yellow-400/20 bg-white/[0.03] p-8">

              <h3 className="mb-8 font-serif text-3xl text-yellow-300">
                Performance
              </h3>

              {[
                "Thermal Insulation",
                "Water Tightness",
                "Wind Resistance",
                "Sound Insulation",
                "Security",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center justify-between border-b border-white/10 py-4"
                >
                  <span className="text-neutral-300">
                    {item}
                  </span>

                  <span className="text-yellow-400">
                    ★★★★★
                  </span>
                </div>

              ))}

            </div>

            {/* DETAIL IMAGE */}
            <div className="overflow-hidden rounded-3xl border border-yellow-400/20">

              <img
                src="/detail-section.png"
                alt="Detail Section"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

          {/* FINISHES */}
          <div className="mt-12 rounded-3xl border border-yellow-400/20 bg-white/[0.03] p-8">

            <h3 className="mb-8 font-serif text-3xl text-yellow-300">
              Premium Finishes
            </h3>

            <div className="grid gap-4 md:grid-cols-5">

              {[
                "Matte Black",
                "Anthracite Grey",
                "Champagne Gold",
                "Silver Grey",
                "Custom RAL Colours",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-xl border border-yellow-400/20 bg-black/40 p-6 text-center text-sm text-neutral-300"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/5 to-transparent p-8 md:flex-row">

            <div>

              <h3 className="font-serif text-3xl">
                Let’s Build Something Exceptional
              </h3>

              <p className="mt-2 text-neutral-400">
                Get in touch for tailored solutions for your project.
              </p>

            </div>

            <Link
              href="/quote"
              className="rounded-xl bg-yellow-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-black transition hover:bg-yellow-300"
            >
              Get A Quote
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}