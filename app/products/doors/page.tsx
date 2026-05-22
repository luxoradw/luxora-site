"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const systems = [
  {
    title: "LX PIVOT",
    type: "PIVOT DOOR",
    image: "/lxpivot.png",
    bullets: [
      "360° Pivot System",
      "Maximum Impact",
      "Seamless Operation",
    ],
  },

  {
    title: "LX SLIDE",
    type: "SLIDING DOOR",
    image: "/lxslidedoor.png",
    bullets: [
      "Smooth Sliding",
      "Space Saving",
      "Large Openings",
    ],
  },

  {
    title: "LX FOLD",
    type: "FOLDING DOOR",
    image: "/lxfold.png",
    bullets: [
      "Wide Openings",
      "Flexible Configuration",
      "Smooth Folding",
    ],
  },

  {
    title: "LX SWING",
    type: "HINGED DOOR",
    image: "/lxswing.png",
    bullets: [
      "Classic Design",
      "Durable Hardware",
      "Secure & Reliable",
    ],
  },

  {
    title: "LX FIX",
    type: "FIXED PANEL",
    image: "/lxfixdoor.png",
    bullets: [
      "Fixed Glass Panel",
      "Natural Light",
      "Minimal Design",
    ],
  },
];

export default function DoorsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-20">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="mb-10">

              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-yellow-400">
                Engineered For Excellence
              </p>

              <h1 className="font-serif text-6xl leading-tight md:text-7xl">
                Luxora <br />
                <span className="text-yellow-300">
                  Door Systems
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">
                Premium aluminium door systems that combine
                advanced engineering, superior materials and
                timeless design to create stunning entrances
                and seamless living spaces.
              </p>

            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

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

          {/* HERO IMAGE */}
          <div className="overflow-hidden rounded-[36px] border border-yellow-400/30 bg-neutral-950">

            <img
              src="/door-hero.png"
              alt="Hero Door"
              className="h-[620px] w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* SYSTEMS */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex items-center justify-center gap-6">

            <div className="h-[1px] w-32 bg-yellow-400/30" />

            <p className="text-xs uppercase tracking-[0.42em] text-yellow-400">
              Our Door Systems
            </p>

            <div className="h-[1px] w-32 bg-yellow-400/30" />

          </div>

          {/* CARDS */}
          <div className="grid gap-6 md:grid-cols-5">

            {systems.map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-yellow-400/20 bg-white/[0.03] p-4 backdrop-blur-md"
              >

                <h3 className="text-center font-serif text-3xl text-yellow-300">
                  {item.title}
                </h3>

                <p className="mb-5 text-center text-xs uppercase tracking-[0.18em] text-neutral-300">
                  {item.type}
                </p>

                {/* IMAGE */}
                <div className="overflow-hidden rounded-xl border border-yellow-400/30 bg-neutral-950">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[260px] w-full object-cover"
                  />

                </div>

                {/* BULLETS */}
                <ul className="mt-5 space-y-3 text-sm text-neutral-300">

                  {item.bullets.map((bullet) => (

                    <li
                      key={bullet}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-[7px] h-[4px] w-[4px] rounded-full bg-yellow-400" />

                      {bullet}
                    </li>

                  ))}

                </ul>

              </motion.div>

            ))}

          </div>

          {/* PERFORMANCE + DETAIL */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">

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
            <div className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-neutral-950 lg:col-span-1">

              <img
                src="/door-detail.png"
                alt="Detail Section"
                className="h-full w-full object-cover"
              />

            </div>

            {/* ENGINEERING */}
            <div className="rounded-3xl border border-yellow-400/20 bg-white/[0.03] p-8">

              <h3 className="mb-6 font-serif text-3xl text-yellow-300">
                Advanced Engineering
              </h3>

              <p className="leading-8 text-neutral-300">
                Our door systems are engineered with precision
                aluminium profiles, thermal breaks and high
                performance hardware to deliver exceptional
                strength, durability and efficiency.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 text-center text-sm text-neutral-300">

                <div>Thermal Break</div>
                <div>Multi-Point Locking</div>
                <div>Hidden Hinges</div>
                <div>High Durability</div>

              </div>

            </div>

          </div>



          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/5 to-transparent p-8 md:flex-row">

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400 text-yellow-400">
                ☎
              </div>

              <div>

                <h3 className="font-serif text-4xl">
                  Let’s Build Something Exceptional
                </h3>

                <p className="mt-2 text-neutral-400">
                  Get in touch for tailored solutions for your project.
                </p>

              </div>

            </div>

            <Link
              href="/quote"
              className="rounded-xl bg-yellow-400 px-10 py-5 text-sm font-bold uppercase tracking-[0.22em] text-black transition hover:bg-yellow-300"
            >
              Get A Quote →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}