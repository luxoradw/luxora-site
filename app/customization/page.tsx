"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const options = [
  {
    title: "Colors & Finishes",
    href: "/customization/colors-finishes",
    image: "/custom-colors.png",
    description:
      "Premium powder-coated, anodized, matte, metallic, and custom RAL finishes.",
  },
  {
    title: "Glass Options",
    href: "/customization/glass-options",
    image: "/custom-glass.png",
    description:
      "Low-E, laminated, tempered, insulated, tinted, and high-performance glazing solutions.",
  },
  {
    title: "Hardware",
    href: "/customization/hardware",
    image: "/Hardwaree.png",
    description:
      "Luxury handles, locks, hinges, rollers, and architectural hardware systems.",
  },
];

export default function CustomizationPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <img
          src="/about-customization-hero.png"
          alt="Luxora Customization"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center px-6 pt-40">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-400">
              Customization
            </p>

            <h1 className="font-serif text-6xl leading-tight md:text-8xl">
              Crafted Around
              <br />
              <span className="text-yellow-300">
                Your Vision
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
              Personalize every Luxora system with premium finishes,
              advanced glass technologies, and luxury hardware
              selections designed for modern architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
            Luxury Details
          </p>

          <h2 className="font-serif text-4xl md:text-6xl">
            Every Detail Matters
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
            From architectural finishes to performance glass and
            premium hardware, every Luxora product can be tailored
            to complement your project's design vision.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {options.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                href={item.href}
                className="group relative block min-h-[600px] overflow-hidden border border-yellow-400/20"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="font-serif text-4xl md:text-5xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-sm leading-8 text-neutral-300">
                    {item.description}
                  </p>

                  <div className="mt-8 inline-flex border border-yellow-400 px-6 py-3 text-xs font-bold uppercase tracking-[0.28em] text-yellow-300">
                    Explore →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden border border-yellow-400/20 bg-gradient-to-r from-[#080808] to-[#111111]">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
                Need Guidance?
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                Design Your
                <br />
                <span className="text-yellow-300">
                  Perfect System
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
                Our specialists can help you select the ideal
                finishes, glass package, and hardware for your project.
              </p>

              <Link
                href="/quote"
                className="mt-10 inline-block border border-yellow-400 px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
              >
                Request Quote →
              </Link>
            </div>

            <div className="relative min-h-[500px]">
              <img
                src="/about-cta.png"
                alt="Luxora Customization"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}