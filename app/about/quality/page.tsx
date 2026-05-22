"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function QualityPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* LUXURY BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_38%)]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,175,55,0.16) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.16) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

      </div>

      {/* HERO */}
      <section className="relative z-10 border-b border-yellow-400/10">

        <div className="grid min-h-screen lg:grid-cols-[0.38fr_0.62fr]">

          {/* LEFT */}
          <div className="flex items-center px-8 py-20 md:px-16">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >

              <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-400">
                Quality
              </p>

              <h1 className="font-serif text-6xl leading-tight md:text-7xl">
                Quality <br />
                Engineered <br />
                Into <span className="text-yellow-300">Every Detail</span>
              </h1>

              <p className="mt-10 max-w-xl text-lg leading-8 text-neutral-400">
                Premium aluminum systems crafted for luxury architecture
                and modern living.
              </p>

              <Link
                href="/quote"
                className="mt-10 inline-flex rounded-2xl border border-yellow-400 px-8 py-4 text-sm uppercase tracking-[0.22em] text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
              >
                Request Quote →
              </Link>

            </motion.div>

          </div>

          {/* HERO IMAGE */}
          <div className="relative overflow-hidden">

            <img
              src="/hero-quality.png"
              alt="Luxury Sliding Door"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60" />

          </div>

        </div>

      </section>

      {/* THERMAL BREAK */}
      <section className="relative z-10 border-b border-yellow-400/10 px-6 py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[36px] border border-yellow-400/20 bg-white/[0.03]">

            <img
              src="/thermal-break.png"
              alt="Thermal Break Profile"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-yellow-400">
              Engineered To Perform
            </p>

            <h2 className="font-serif text-5xl leading-tight">
              Thermal Break <br />
              Technology
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
              Precision-engineered aluminum profiles designed for
              insulation, durability, and modern architectural aesthetics.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              {[
                "Thermal Insulation",
                "Water Tightness",
                "Air Tightness",
                "Structural Strength",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl border border-yellow-400/20 bg-white/[0.03] px-6 py-5"
                >

                  <p className="text-sm uppercase tracking-[0.22em] text-neutral-300">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* GLASS */}
      <section className="relative z-10 border-b border-yellow-400/10 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-center text-xs uppercase tracking-[0.4em] text-yellow-400">
            Advanced Glass Technology
          </p>

          <h2 className="mb-16 text-center font-serif text-5xl">
            Performance Glass Solutions
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Laminated Glass",
                text: "Enhanced safety and security with reinforced interlayer technology.",
                image: "/laminated-glass.png",
              },

              {
                title: "Tempered Glass",
                text: "Engineered for strength, durability, and impact resistance.",
                image: "/tempered-glass.png",
              },

              {
                title: "Insulated Double Glazing",
                text: "Improved thermal efficiency and sound insulation.",
                image: "/double-glazing.png",
              },

            ].map((item) => (

              <div
                key={item.title}
                className="overflow-hidden rounded-[30px] border border-yellow-400/20 bg-white/[0.03]"
              >

                {/* IMAGE */}
                <div className="h-[260px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <h3 className="font-serif text-3xl text-yellow-300">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-7 text-neutral-400">
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HARDWARE */}
      <section className="relative z-10 border-b border-yellow-400/10">

        <div className="grid items-center lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden">

            <img
              src="/hardware.png"
              alt="Premium Hardware"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="px-8 py-20 md:px-16">

            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-yellow-400">
              Premium Hardware
            </p>

            <h2 className="font-serif text-5xl leading-tight">
              Built For <br />
              Performance
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
              Premium hardware systems selected for smooth operation,
              durability, and long-term performance.
            </p>

            <Link
              href="/products"
              className="mt-10 inline-flex rounded-2xl border border-yellow-400 px-8 py-4 text-sm uppercase tracking-[0.22em] text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
            >
              Discover Systems →
            </Link>

          </div>

        </div>

      </section>

      {/* PERFORMANCE */}
      <section className="relative z-10 border-b border-yellow-400/10 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-center text-xs uppercase tracking-[0.4em] text-yellow-400">
            Performance You Can Rely On
          </p>

          <div className="grid gap-6 md:grid-cols-4">

            {[
              "Thermal Performance",
              "Water Resistance",
              "Sound Insulation",
              "Wind Resistance",
            ].map((item) => (

              <div
                key={item}
                className="rounded-3xl border border-yellow-400/20 bg-white/[0.03] p-8 text-center"
              >

                <h3 className="font-serif text-2xl text-yellow-300">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

{/* TRUSTED PARTNERS */}
<section className="relative z-10 border-b border-yellow-400/10 px-6 py-28">

  <div className="mx-auto max-w-7xl text-center">

    <p className="mb-5 text-xs uppercase tracking-[0.4em] text-yellow-400">
      Trusted
    </p>

    <h2 className="font-serif text-5xl md:text-6xl">
      Global Partners
    </h2>

    <div className="relative mt-20 overflow-hidden rounded-[40px] border border-yellow-400/20 bg-white/[0.02] px-10 py-16">

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_60%)]" />

      {/* LOGOS */}
      <div className="relative z-10 grid items-center gap-12 md:grid-cols-4">

        {/* HOPO */}
        <div className="flex items-center justify-center border-b border-yellow-400/10 pb-10 md:border-b-0 md:border-r md:pb-0">
          <img
            src="/hopo.png"
            alt="HOPO"
            className="h-14 w-auto opacity-90 transition duration-500 hover:opacity-100"
          />
        </div>

        {/* AKZO */}
        <div className="flex items-center justify-center border-b border-yellow-400/10 pb-10 md:border-b-0 md:border-r md:pb-0">
          <img
            src="/akzo.png"
            alt="AkzoNobel"
            className="h-12 w-auto opacity-90 transition duration-500 hover:opacity-100"
          />
        </div>

        {/* TECHNOFORM */}
        <div className="flex items-center justify-center border-b border-yellow-400/10 pb-10 md:border-b-0 md:border-r md:pb-0">
          <img
            src="/technoform.png"
            alt="Technoform"
            className="h-12 w-auto opacity-90 transition duration-500 hover:opacity-100"
          />
        </div>

        {/* SG */}
        <div className="flex items-center justify-center">
          <img
            src="/sg.png"
            alt="SG"
            className="h-12 w-auto opacity-90 transition duration-500 hover:opacity-100"
          />
        </div>

      </div>

    </div>

  </div>

</section>
      {/* CTA */}
      <section className="relative z-10 px-6 py-32">

        <div className="mx-auto overflow-hidden rounded-[40px] border border-yellow-400/20 bg-white/[0.03]">

          <div className="grid items-center lg:grid-cols-2">

            {/* TEXT */}
            <div className="px-8 py-20 md:px-16">

              <h2 className="font-serif text-5xl leading-tight">
                Ready To Build <br />
                Your Project?
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
                Our team is ready to help you choose premium aluminum
                systems for your next architectural project.
              </p>

            </div>

            {/* IMAGE */}
            <div className="relative h-full overflow-hidden">

              <img
                src="/cta-interior.png"
                alt="Luxury Interior"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-center justify-center">

                <Link
                  href="/quote"
                  className="rounded-2xl bg-yellow-400 px-10 py-5 text-sm font-bold uppercase tracking-[0.24em] text-black transition hover:bg-yellow-300"
                >
                  Request Quote →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}