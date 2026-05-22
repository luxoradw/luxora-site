"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const systems = [
  { title: "LX 70", type: "Casement Window", image: "" },
  { title: "LX 85", type: "Tilt & Turn Window", image: "" },
  { title: "LX Slide", type: "Sliding Window", image: "" },
  { title: "LX Lift", type: "Lift & Slide Door", image: "" },
  { title: "LX Fix", type: "Fixed Window", image: "" },
];

export default function WindowsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-yellow-400">
              Engineered For Excellence
            </p>

            <h1 className="font-serif text-6xl leading-tight md:text-7xl">
              Luxora <br />
              <span className="text-yellow-300">Window Systems</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">
              Designed to inspire. Built to last. Premium aluminum window systems
              for modern luxury spaces.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
              {["Premium Quality", "Thermal Insulation", "Sound Insulation", "Maximum Security"].map((item) => (
                <div key={item} className="border-l border-yellow-400/30 pl-4 text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-neutral-950">
            <img
              src=""
              alt="Window Hero"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-yellow-400">
            Our Window Systems
          </p>

          <h2 className="mt-4 text-center font-serif text-4xl md:text-5xl">
            Performance Meets Luxury
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {systems.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8, scale: 1.02 }}
                className="overflow-hidden rounded-2xl border border-yellow-400/20 bg-white/[0.03] p-5"
              >
                <h3 className="text-center font-serif text-2xl text-yellow-300">
                  {item.title}
                </h3>

                <p className="mb-5 text-center text-xs uppercase tracking-[0.18em] text-neutral-300">
                  {item.type}
                </p>

                <div className="h-[230px] overflow-hidden rounded-xl bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-yellow-400/20 bg-white/[0.03] p-8">
              <h3 className="mb-6 font-serif text-3xl text-yellow-300">
                Performance
              </h3>

              {[
                "Thermal Insulation",
                "Water Tightness",
                "Wind Resistance",
                "Sound Insulation",
                "Security",
              ].map((item) => (
                <div key={item} className="flex justify-between border-b border-white/10 py-3 text-neutral-300">
                  <span>{item}</span>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-neutral-950">
              <img
                src=""
                alt="Window Section Detail"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-yellow-400/20 bg-white/[0.03] p-8">
            <h3 className="mb-6 font-serif text-3xl text-yellow-300">
              Premium Finishes
            </h3>

            <div className="grid gap-4 md:grid-cols-5">
              {["Matte Black", "Anthracite Grey", "Champagne Gold", "Silver Grey", "Custom RAL Colours"].map((item) => (
                <div key={item} className="rounded-xl border border-yellow-400/20 p-6 text-center text-sm text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-yellow-400/30 p-8 md:flex-row">
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
              className="rounded-xl bg-yellow-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}