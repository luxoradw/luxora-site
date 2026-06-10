"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Luxury Windows",
    label: "Window Systems",
    href: "/products/windows",
    image: "/about-windows.png",
    text: "Thermal break, slim frame, sliding, folding, fixed, tilt-turn, skylight, and specialty window systems.",
  },
  {
    title: "Luxury Doors",
    label: "Door Systems",
    href: "/products/doors",
    image: "/about-doors.png",
    text: "Pivot, sliding, folding, lift sliding, heavy duty, casement, barn, and custom luxury door systems.",
  },
  {
    title: "Premium Quality",
    label: "Quality",
    href: "/about/quality",
    image: "/about-quality.png",
    text: "High-performance aluminum systems built for strength, insulation, durability, and timeless beauty.",
  },
  {
    title: "Our Team",
    label: "Our Team",
    href: "/about/team",
    image: "/about-team.png",
    text: "Experienced professionals dedicated to service, precision, coordination, and delivering the best solutions.",
  },
];

const strengths = [
  ["Premium Quality", "High-performance aluminum systems built for strength, durability, and timeless beauty."],
  ["Slim & Modern Design", "Minimal sightlines and elegant profiles for modern architectural vision."],
  ["Thermal Efficiency", "Advanced thermal break technology for insulation, comfort, and energy savings."],
  ["Custom Solutions", "Tailored systems and configurations to match every project style and requirement."],
];

const process = [
  ["01", "Review", "We review plans, sizes, openings, operation type, finish, glass, and project needs."],
  ["02", "Select System", "We recommend the right Luxora system based on design, performance, and budget."],
  ["03", "Customize", "Each order is customized by size, color, glass type, hardware, and configuration."],
  ["04", "Prepare", "Systems are prepared with attention to packaging, protection, and delivery coordination."],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_38%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-yellow-400 md:text-xs md:tracking-[0.45em]">
              About Luxora
            </p>

            <h1 className="font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
              Luxury Openings <br />
              <span className="text-yellow-300">Engineered With Precision</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-300 md:mt-8 md:text-lg md:leading-8">
              Luxora Doors & Windows provides premium aluminum door and window
              systems for modern homes, architectural projects, and custom
              luxury spaces.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-500 md:text-base md:leading-8">
              Our catalog includes thermal break systems, slim frame sliding
              doors, pivot doors, folding doors, casement windows, fixed windows,
              curtain wall, skylight systems, specialty glazing, hardware, and
              custom configurations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-10 md:gap-4">
              <Link
                href="/products"
                className="text-center border border-yellow-400/60 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-yellow-300 transition hover:bg-yellow-400 hover:text-black md:px-8 md:text-xs md:tracking-[0.28em]"
              >
                Our Products →
              </Link>

              <Link
                href="/quote"
                className="text-center bg-yellow-400 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black transition hover:bg-yellow-300 md:px-8 md:text-xs md:tracking-[0.28em]"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[300px] overflow-hidden border border-yellow-400/30 md:min-h-[480px]"
          >
            <img
              src="/about-hero.png"
              alt="Luxora luxury doors and windows"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
            <div className="absolute inset-4 border border-yellow-400/30 md:inset-6" />
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="relative px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {cards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative min-h-[300px] overflow-hidden border border-yellow-400/25 bg-black transition duration-500 hover:-translate-y-2 hover:border-yellow-400/70 md:min-h-[360px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-10">
                  <div>
                    <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-yellow-400 md:text-xs">
                      {item.label}
                    </p>

                    <h2 className="font-serif text-3xl text-white transition group-hover:text-yellow-300 md:text-5xl">
                      {item.title}
                    </h2>

                    <p className="mt-5 max-w-md text-sm leading-7 text-neutral-300 md:text-base md:leading-8">
                      {item.text}
                    </p>
                  </div>

                  <p className="mt-8 text-[10px] uppercase tracking-[0.28em] text-yellow-400 md:text-xs">
                    Learn More →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="border-t border-yellow-400/10 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-yellow-400 md:text-xs">
            Why Choose Luxora
          </p>

          <h2 className="mb-12 font-serif text-4xl md:mb-16 md:text-6xl">
            Performance. Design. Luxury.
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(([title, text]) => (
              <div
                key={title}
                className="border border-yellow-400/10 p-6 md:border-0 md:border-r md:border-yellow-400/20 md:last:border-r-0"
              >
                <div className="mx-auto mb-6 h-10 w-10 border border-yellow-400/70" />
                <h3 className="font-serif text-2xl text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400 md:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="bg-gradient-to-b from-[#050505] to-[#0b0b0b] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-yellow-400 md:text-xs">
              Customization
            </p>

            <h2 className="font-serif text-4xl md:text-7xl">
              Crafted Around
              <span className="block text-yellow-300">Your Vision</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-400 md:mt-8 md:text-lg md:leading-8">
              Every Luxora system can be personalized with premium finishes,
              architectural glass solutions, and luxury hardware selections.
            </p>
          </div>

          <Link
            href="/customization"
            className="group relative block overflow-hidden border border-yellow-400/20"
          >
            <img
              src="/about-customization-hero.png"
              alt="Luxora Customization"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[600px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-16">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-yellow-400 md:text-xs">
                Colors • Glass • Hardware
              </p>

              <h3 className="font-serif text-4xl md:text-7xl">
                Customization
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-300 md:text-lg md:leading-8">
                Explore premium finishes, advanced glazing options, and refined
                hardware selections designed for modern luxury homes.
              </p>

              <div className="mt-6 inline-flex items-center border border-yellow-400 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-yellow-300 md:mt-8 md:px-8 md:text-xs">
                Explore Customization →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Catalog */}
      <section className="border-t border-yellow-400/10 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden border border-yellow-400/20 bg-gradient-to-r from-[#080808] to-[#111111]">
          <div className="grid items-center gap-10 p-6 md:p-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex justify-center">
              <img
                src="/catalog-cover.png"
                alt="Luxora Catalog"
                className="w-full max-w-[300px] rotate-[-2deg] rounded-lg shadow-[0_0_50px_rgba(212,175,55,0.15)] transition duration-500 hover:scale-105 md:max-w-[420px]"
              />
            </div>

            <div className="text-center lg:text-left">
              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-yellow-400 md:text-xs">
                Product Catalog
              </p>

              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Explore The
                <span className="block text-yellow-300">
                  Luxora Collection
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-400 md:text-lg md:leading-8 lg:mx-0">
                Browse our complete collection of luxury aluminum doors,
                windows, premium hardware, finishes, and architectural systems.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="/luxora-catalog.pdf"
                  download
                  className="bg-yellow-400 px-8 py-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-black transition hover:bg-yellow-300 md:px-10 md:text-xs"
                >
                  Download Catalog
                </a>

                <Link
                  href="/quote"
                  className="border border-yellow-400 px-8 py-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300 transition hover:bg-yellow-400 hover:text-black md:px-10 md:text-xs"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-yellow-400/10 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-center text-[10px] uppercase tracking-[0.35em] text-yellow-400 md:text-xs">
            Our Process
          </p>

          <h2 className="mb-12 text-center font-serif text-4xl md:mb-16 md:text-6xl">
            Simple Steps. Perfect Results.
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, text]) => (
              <div
                key={number}
                className="border border-yellow-400/10 p-6 md:border-0 md:p-0"
              >
                <p className="font-serif text-5xl text-yellow-400/80">
                  {number}
                </p>
                <h3 className="mt-5 font-serif text-2xl text-white">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400 md:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden border border-yellow-400/20 bg-gradient-to-r from-[#080808] to-[#111111]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-20">
              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-yellow-400 md:text-xs">
                Start Your Project
              </p>

              <h2 className="font-serif text-4xl leading-tight md:text-7xl">
                Luxury Begins
                <br />
                <span className="text-yellow-300">
                  With The Right Opening
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-400 md:mt-8 md:text-lg md:leading-8">
                Discover premium aluminum doors and windows designed to transform
                modern architecture with performance, elegance, and timeless
                beauty.
              </p>

              <Link
                href="/quote"
                className="mt-8 inline-block w-full border border-yellow-400 px-8 py-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-300 transition hover:bg-yellow-400 hover:text-black sm:w-auto md:mt-10 md:px-10 md:text-xs"
              >
                Request Quote →
              </Link>
            </div>

            <div className="relative min-h-[320px] md:min-h-[500px]">
              <img
                src="/about-cta.png"
                alt="Luxury House"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}