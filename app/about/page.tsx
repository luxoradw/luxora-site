"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Architectural Design",
    text: "Slim sightlines, modern proportions, and clean aluminum profiles designed for luxury spaces.",
  },
  {
    title: "Thermal Performance",
    text: "Thermal break systems and insulated glass options help improve comfort and energy efficiency.",
  },
  {
    title: "Custom Manufacturing",
    text: "Every system can be customized by size, glass type, finish, configuration, and project need.",
  },
  {
    title: "Premium Hardware",
    text: "Smooth operation, strong locking systems, concealed details, and refined performance.",
  },
];

const performance = [
  "Thermal Break Aluminum",
  "Double & Triple Glass",
  "Low-E Glass Options",
  "Air Tightness",
  "Water Resistance",
  "Sound Performance",
  "Wind Load Resistance",
  "Custom Colors",
  "Large Openings",
  "Slim Sightlines",
  "European Hardware",
  "Luxury Finishes",
];

const process = [
  "Consultation",
  "Product Selection",
  "Custom Sizing",
  "Engineering Review",
  "Manufacturing",
  "Delivery Support",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.16),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),black)]" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
          <div>
            <p className="text-yellow-500/80 text-xs tracking-[0.45em] uppercase mb-6">
              About Luxora
            </p>

            <h1 className="text-2xl md:text-4xl xl:text-3xl font-light tracking-[0.12em] uppercase leading-[0.95]">
              Luxury
              <br />
              Openings
              <br />
              Without
              <br />
              Compromise
            </h1>

            <div className="mt-10 h-[1px] w-32 bg-yellow-500/70" />

            <p className="mt-10 max-w-2xl text-white/60 text-sm md:text-base leading-9">
              Luxora Doors & Windows specializes in premium aluminum door and
              window systems for luxury residential and commercial projects. Our
              systems combine modern architectural design, thermal performance,
              precision hardware, and custom manufacturing.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="/quote"
                className="border border-yellow-500/70 px-8 py-4 text-sm tracking-[0.22em] uppercase text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
              >
                Request Quote
              </a>

              <a
                href="/windows/fixed"
                className="border border-white/15 px-8 py-4 text-sm tracking-[0.22em] uppercase text-white/70 hover:border-yellow-500/60 hover:text-yellow-400 transition"
              >
                
              </a>
            </div>
          </div>

          {/* Main Graphic */}
          <div className="relative h-[620px] flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[92%] h-[520px] border-[12px] border-[#171717] bg-[#080808] shadow-[0_40px_140px_rgba(0,0,0,0.9)]"
            >
              <div className="absolute inset-[14px] border border-white/10 bg-gradient-to-br from-white/20 via-white/[0.04] to-transparent" />

              <div className="absolute left-1/3 top-0 bottom-0 w-[4px] bg-[#181818]" />
              <div className="absolute left-2/3 top-0 bottom-0 w-[4px] bg-[#181818]" />
              <div className="absolute top-1/2 left-0 right-0 h-[4px] bg-[#181818]" />

              <motion.div
                animate={{ x: ["-120%", "120%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />

              <div className="absolute -inset-[1px] border border-yellow-500/25" />
              <div className="absolute top-[-12px] left-[-12px] right-[-12px] h-[5px] bg-yellow-500/40" />
              <div className="absolute bottom-[-12px] left-[-12px] right-[-12px] h-[5px] bg-yellow-500/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY LUXORA */}
      <section className="px-6 py-28 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-500/80 text-l tracking-[0.4em] uppercase mb-5">
            Why Choose Luxora
          </p>

          <h2 className="text-2xl md:text-2xl font-light tracking-[0.12em] uppercase leading-tight max-w-5xl mb-16">
            Designed to make every project feel more valuable
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 bg-white/[0.025] p-8 hover:border-yellow-500/50 transition"
              >
                <div className="w-14 h-[1px] bg-yellow-500/70 mb-6" />

                <h3 className="text-xl font-light tracking-[0.16em] uppercase">
                  {item.title}
                </h3>

                <p className="mt-6 text-sm leading-8 text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE GRAPHIC */}
      <section className="relative px-6 py-32 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.10),transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <div>
            <p className="text-yellow-500/80 text-l tracking-[0.4em] uppercase mb-5">
              Performance Matters
            </p>

            <h2 className="text-4xl md:text-2xl font-light tracking-[0.12em] uppercase leading-tight">
              Beauty must perform over time
            </h2>

            <p className="mt-8 text-white/55 text-sm leading-9 max-w-xl">
              Luxora systems are selected for customers who care about more than
              appearance. Performance, comfort, durability, and smooth operation
              are part of the luxury experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {performance.map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/[0.025] px-6 py-5 flex items-center gap-4 hover:border-yellow-500/40 transition"
              >
                <div className="w-8 h-8 rounded-full border border-yellow-500/40 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                </div>

                <p className="text-sm tracking-[0.08em] uppercase text-white/65">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-28 border-t border-white/10 bg-[#060606]">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-500/80 text-l tracking-[0.4em] uppercase mb-5">
            Luxora Process
          </p>

          <h2 className="text-4xl md:text-3xl font-light tracking-[0.12em] uppercase leading-tight mb-16">
            From concept to custom system
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {process.map((item, index) => (
              <div
                key={item}
                className="relative border border-white/10 bg-white/[0.025] p-6 min-h-[180px]"
              >
                <p className="text-yellow-400 text-sm mb-8">
                  0{index + 1}
                </p>

                <h3 className="text-sm tracking-[0.18em] uppercase text-white/70">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-36 border-t border-yellow-500/20 text-center bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.12),transparent_45%)]">
        <div className="max-w-5xl mx-auto">
          <p className="text-yellow-500/80 text-xl tracking-[0.4em] uppercase mb-6">
            Start With Luxora
          </p>

          <h2 className="text-2xl md:text-2xl font-light tracking-[0.12em] uppercase leading-[1.05]">
            More than doors and windows.
            <br />
            Architectural experiences.
          </h2>

          <p className="mt-10 max-w-3xl mx-auto text-white/55 text-sm md:text-base leading-9">
            Whether you are building a custom home, remodeling a luxury
            residence, or designing a commercial project, Luxora helps elevate
            the space with premium aluminum systems.
          </p>

          <a
            href="/quote"
            className="inline-block mt-12 border border-yellow-500/70 px-10 py-5 text-sm tracking-[0.22em] uppercase text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
          >
            Request Your Quote
          </a>
        </div>
      </section>
    </main>
  );
}