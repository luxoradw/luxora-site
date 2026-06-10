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
      <section className="relative px-6 pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_38%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-400">
              About Luxora
            </p>

            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Luxury Openings <br />
              <span className="text-yellow-300">Engineered With Precision</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
              Luxora Doors & Windows provides premium aluminum door and window
              systems for modern homes, architectural projects, and custom
              luxury spaces.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-500">
              Our catalog includes thermal break systems, slim frame sliding
              doors, pivot doors, folding doors, casement windows, fixed windows,
              curtain wall, skylight systems, specialty glazing, hardware, and
              custom configurations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="border border-yellow-400/60 px-8 py-4 text-xs font-bold uppercase tracking-[0.28em] text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
              >
                Our Products →
              </Link>

              <Link
                href="/quote"
                className="bg-yellow-400 px-8 py-4 text-xs font-bold uppercase tracking-[0.28em] text-black transition hover:bg-yellow-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[480px] overflow-hidden border border-yellow-400/30"
          >
            <img
              src="/about-hero.png"
              alt="Luxora luxury doors and windows"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
            <div className="absolute inset-6 border border-yellow-400/30" />
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative min-h-[360px] overflow-hidden border border-yellow-400/25 bg-black transition duration-500 hover:-translate-y-2 hover:border-yellow-400/70"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity95 transition duration-700 group-hover:scale-110 group-hover:opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10">
                  <div>
                    <p className="mb-5 text-xs uppercase tracking-[0.35em] text-yellow-400">
                      {item.label}
                    </p>

                    <h2 className="font-serif text-4xl text-white transition group-hover:text-yellow-300 md:text-5xl">
                      {item.title}
                    </h2>

                    <p className="mt-6 max-w-md leading-8 text-neutral-300">
                      {item.text}
                    </p>
                  </div>

                  <p className="mt-10 text-xs uppercase tracking-[0.32em] text-yellow-400">
                    Learn More →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-yellow-400/10 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-yellow-400">
            Why Choose Luxora
          </p>

          <h2 className="mb-16 font-serif text-4xl md:text-6xl">
            Performance. Design. Luxury.
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {strengths.map(([title, text]) => (
              <div key={title} className="border-r border-yellow-400/20 px-6 last:border-r-0">
                <div className="mx-auto mb-6 h-10 w-10 border border-yellow-400/70" />
                <h3 className="font-serif text-2xl text-white">{title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="px-6 py-24 bg-gradient-to-b from-[#050505] to-[#0b0b0b]">
  <div className="mx-auto max-w-7xl">

    <div className="mb-16 text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
        Customization
      </p>

      <h2 className="font-serif text-5xl md:text-7xl">
        Crafted Around
        <span className="block text-yellow-300">
          Your Vision
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
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
        className="h-[600px] w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="absolute bottom-0 left-0 p-12 md:p-16">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400">
          Colors • Glass • Hardware
        </p>

        <h3 className="font-serif text-5xl md:text-7xl">
          Customization
        </h3>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
          Explore premium finishes, advanced glazing options,
          and refined hardware selections designed for modern luxury homes.
        </p>

        <div className="mt-8 inline-flex items-center border border-yellow-400 px-8 py-4 text-xs font-bold uppercase tracking-[0.28em] text-yellow-300">
          Explore Customization →
        </div>
      </div>
    </Link>

  </div>
</section>

      <section className="border-t border-yellow-400/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-center text-xs uppercase tracking-[0.4em] text-yellow-400">
<section className="border-t border-yellow-400/10 px-6 py-24">
  <div className="mx-auto max-w-6xl overflow-hidden border border-yellow-400/20 bg-gradient-to-r from-[#080808] to-[#111111]">

    <div className="grid items-center gap-12 p-10 lg:grid-cols-2">

      <div className="flex justify-center">
        <img
          src="/catalog-cover.png"
          alt="Luxora Catalog"
          className="w-full max-w-[420px] rotate-[-3deg] rounded-lg shadow-[0_0_50px_rgba(212,175,55,0.15)] transition duration-500 hover:scale-105"
        />
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
          Product Catalog
        </p>

        <h2 className="font-serif text-5xl leading-tight">
          Explore The
          <span className="block text-yellow-300">
            Luxora Collection
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
          Browse our complete collection of luxury aluminum doors,
          windows, premium hardware, finishes, and architectural systems.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/luxora-catalog.pdf"
            download
            className="bg-yellow-400 px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-black transition hover:bg-yellow-300"
          >
            Download Catalog
          </a>

          <Link
            href="/quote"
            className="border border-yellow-400 px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
          >
            Request Quote
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>
            Our Process
          </p>

          <h2 className="mb-16 text-center font-serif text-4xl md:text-6xl">
            Simple Steps. Perfect Results.
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {process.map(([number, title, text]) => (
              <div key={number}>
                <p className="font-serif text-5xl text-yellow-400/80">{number}</p>
                <h3 className="mt-5 font-serif text-2xl text-white">{title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="px-6 pb-32">
  <div className="mx-auto max-w-7xl overflow-hidden border border-yellow-400/20 bg-gradient-to-r from-[#080808] to-[#111111]">
    <div className="grid lg:grid-cols-2">

      <div className="p-12 md:p-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
          Start Your Project
        </p>

        <h2 className="font-serif text-5xl leading-tight md:text-7xl">
          Luxury Begins
          <br />
          <span className="text-yellow-300">
            With The Right Opening
          </span>
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
          Discover premium aluminum doors and windows designed
          to transform modern architecture with performance,
          elegance, and timeless beauty.
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