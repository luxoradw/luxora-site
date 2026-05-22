"use client";

import { motion } from "framer-motion";

const features = [
  "Full Glass Elevation",
  "Luxury Exterior System",
  "Thermal Break Aluminum",
  "Minimal Sightline",
  "Panoramic View",
  "Custom Engineering",
  "Water Tightness",
  "Premium Finish",
];

export default function GlassHousePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        
        <img
          src="/glass-house-hero.png"
          alt="Glass House"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-yellow-400">
              Luxora Custom Systems
            </p>

            <h1 className="text-5xl font-light uppercase tracking-[0.12em] md:text-7xl">
              Glass House
              <span className="block text-yellow-400">
                Systems
              </span>
            </h1>

            <div className="mt-8 h-[1px] w-24 bg-yellow-500/40" />

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/70">
              Custom architectural glass structures designed for luxury living,
              panoramic visibility, and seamless indoor-outdoor connection.
            </p>

            <a
              href="/quote"
              className="mt-10 inline-flex border border-yellow-500 bg-yellow-500 px-8 py-4 text-xs uppercase tracking-[0.25em] text-black transition hover:bg-yellow-400"
            >
              Request Consultation
            </a>

          </motion.div>

        </div>

      </section>

      {/* CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="overflow-hidden border border-white/10 bg-white/[0.02]">
            
            <img
              src="/glass-house-1.png"
              alt="Pool House"
              className="h-[320px] w-full object-cover"
            />

            <div className="p-7">
              
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-400">
                Glass House
              </p>

              <h3 className="text-2xl font-light uppercase tracking-[0.12em]">
                Pool House
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Luxury poolside glass structures designed for relaxation and entertainment.
              </p>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="overflow-hidden border border-white/10 bg-white/[0.02]">
            
            <img
              src="/glass-house-2.png"
              alt="Garden Glass Room"
              className="h-[320px] w-full object-cover"
            />

            <div className="p-7">
              
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-400">
                Glass House
              </p>

              <h3 className="text-2xl font-light uppercase tracking-[0.12em]">
                Garden Glass Room
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Elegant glass rooms connecting interior living with outdoor nature.
              </p>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="overflow-hidden border border-white/10 bg-white/[0.02]">
            
            <img
              src="/glass-house-3.png"
              alt="Rooftop Enclosure"
              className="h-[320px] w-full object-cover"
            />

            <div className="p-7">
              
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-400">
                Glass House
              </p>

              <h3 className="text-2xl font-light uppercase tracking-[0.12em]">
                Rooftop Enclosure
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Premium rooftop and patio enclosures with panoramic visibility.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* DETAIL SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid grid-cols-1 overflow-hidden border border-white/10 lg:grid-cols-2">

          <div className="relative min-h-[500px]">

            <img
              src="/glass-house-hero.png"
              alt="Glass House Detail"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

          </div>

          <div className="flex flex-col justify-center bg-[#080808] p-10 md:p-14">

            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-yellow-400">
              Details That Define Luxury
            </p>

            <h2 className="text-4xl font-light uppercase tracking-[0.1em]">
              Exceptional Design
              <span className="mt-2 block text-yellow-400">
                Perfected In Every Detail
              </span>
            </h2>

            <div className="mt-8 h-[1px] w-20 bg-yellow-500/40" />

            <p className="mt-8 text-sm leading-8 text-white/60">
              Every Luxora Glass House is engineered with precision,
              built using premium materials, and designed to deliver
              unmatched beauty and architectural elegance.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature}
              className="border border-white/10 bg-white/[0.02] px-5 py-6 text-center"
            >
              
              <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-yellow-500/40">
                <div className="h-2 w-2 rounded-full bg-yellow-400" />
              </div>

              <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                {feature}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="border border-yellow-500/20 bg-[#080808] px-8 py-20 text-center">

          <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
            Custom Architectural Systems
          </p>

          <h2 className="mt-6 text-4xl font-light uppercase tracking-[0.1em] md:text-5xl">
            Request Custom
            <span className="mt-2 block text-yellow-400">
              Glass House Design
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/60">
            Let Luxora create a custom luxury glass structure tailored
            specifically for your architectural vision.
          </p>

          <a
            href="/quote"
            className="mt-10 inline-flex border border-yellow-500 bg-yellow-500 px-10 py-4 text-xs uppercase tracking-[0.25em] text-black transition hover:bg-yellow-400"
          >
            Request Consultation
          </a>

        </div>

      </section>

    </main>
  );
}