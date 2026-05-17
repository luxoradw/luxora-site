"use client";

import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.12),transparent_35%)]" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-24 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-5 border border-yellow-500/20" />

            <img
              src="/team-president.jpeg"
              alt="President"
              className="relative z-10 w-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />

 
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="text-yellow-500/80 text-xs tracking-[0.45em] uppercase mb-6">
              Leadership
            </p>

            <h1 className="text-4xl md:text-4xl xl:text-4xl font-light tracking-[0.12em] uppercase leading-[0.95]">
              Driven By Design
              <br />
              
              <br />
              Built For luxury
              <br />
              
            </h1>

            <div className="mt-10 h-[1px] w-32 bg-yellow-500/70" />

            <p className="mt-10 max-w-3xl text-white/60 text-sm md:text-base leading-9">
              Luxora Doors & Windows was founded with a vision to elevate
              modern architecture through premium aluminum systems that combine
              luxury aesthetics, advanced engineering, and exceptional
              performance.
            </p>

            <p className="mt-8 max-w-3xl text-white/60 text-sm md:text-base leading-9">
              Under the leadership of Amir Razi, Luxora focuses on delivering
              refined architectural solutions with attention to detail,
              customization, thermal performance, and clean contemporary design.
            </p>

            <p className="mt-8 max-w-3xl text-white/60 text-sm md:text-base leading-9">
              Every project is approached with the mindset that doors and
              windows are not simply products — they are architectural
              experiences that define how a space feels, performs, and connects
              with its environment.
            </p>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Luxury Design",
                "Precision Engineering",
                "Custom Systems",
                "Architectural Performance",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-white/[0.03] px-5 py-6 text-center"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 py-32 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-500/80 text-xs tracking-[0.45em] uppercase mb-6">
            Philosophy
          </p>

          <h2 className="text-4xl md:text-3xl font-light tracking-[0.12em] uppercase leading-tight max-w-5xl">
            We believe luxury is created through simplicity, precision, and timeless architectural design.
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Architectural Focus",
                text: "Designed to complement modern architecture with minimal and refined visual language.",
              },
              {
                title: "Performance",
                text: "Thermal efficiency, structural integrity, and smooth operation are integrated into every system.",
              },
              {
                title: "Customization",
                text: "Every project receives tailored solutions based on design vision and project requirements.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/10 bg-white/[0.025] p-10 hover:border-yellow-500/40 transition"
              >
                <div className="w-12 h-[1px] bg-yellow-500/70 mb-6" />

                <h3 className="text-2xl font-light tracking-[0.12em] uppercase">
                  {item.title}
                </h3>

                <p className="mt-6 text-white/55 leading-8 text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-36 border-t border-yellow-500/20 text-center bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.10),transparent_45%)]">
        <div className="max-w-5xl mx-auto">
          <p className="text-yellow-500/80 text-xs tracking-[0.45em] uppercase mb-6">
            Luxora
          </p>

          <h2 className="text-2xl md:text-3xl font-light tracking-[0.12em] uppercase leading-[1.05]">
            Crafted for modern architecture.
          </h2>

          <p className="mt-10 max-w-3xl mx-auto text-white/55 text-sm md:text-base leading-9">
            Premium aluminum doors and windows designed to elevate luxury spaces.
          </p>

          <a
            href="/quote"
            className="inline-block mt-12 border border-yellow-500/70 px-10 py-5 text-sm tracking-[0.22em] uppercase text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
          >
            Request Quote
          </a>
        </div>
      </section>
    </main>
  );
}