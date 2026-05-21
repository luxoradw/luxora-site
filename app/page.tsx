"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
 {/* Background */}
<motion.div
  style={{ y: heroY }}
  className="pointer-events-none absolute inset-0 z-0"
>

  {/* Strong Gold Glow */}
  <motion.div
    className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-3xl"
    animate={{
      opacity: [0.25, 0.5, 0.25],
      scale: [1, 1.12, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Luxury Grid */}
  <div
    className="absolute inset-0 opacity-60"
    style={{
      backgroundImage: `
        linear-gradient(rgba(212,175,55,0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(212,175,55,0.12) 1px, transparent 1px),
        repeating-linear-gradient(
          135deg,
          transparent 0px,
          transparent 80px,
          rgba(212,175,55,0.14) 82px,
          transparent 86px
        )
      `,
      backgroundSize: "90px 90px, 90px 90px, 180px 180px",
    }}
  />

  {/* Gold Lines */}
  <div className="absolute left-0 top-[20%] h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
  <div className="absolute left-0 top-[70%] h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

  {/* Floating Particles */}
  {[...Array(30)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute h-[2px] w-[2px] rounded-full bg-yellow-300"
      style={{
        left: `${(i * 17) % 100}%`,
        top: `${(i * 31) % 100}%`,
      }}
      animate={{
        y: [-20, 20, -20],
        opacity: [0.1, 0.8, 0.1],
      }}
      transition={{
        duration: 4 + (i % 5),
        repeat: Infinity,
        delay: i * 0.2,
      }}
    />
  ))}

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />


        {/* Gold Glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-3xl"
          animate={{
            opacity: [0.25, 0.55, 0.25],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,175,55,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.18) 1px, transparent 1px),
              repeating-linear-gradient(
                135deg,
                transparent 0px,
                transparent 90px,
                rgba(212,175,55,0.24) 92px,
                transparent 96px
              )
            `,
            backgroundSize: "100px 100px, 100px 100px, 220px 220px",
          }}
        />

        {/* Floating Particles */}
        {[...Array(22)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-yellow-300/70"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.15, 0.8, 0.15],
            }}
            transition={{
              duration: 4 + (i % 6),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black" />
      </motion.div>

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">

        <motion.img
          src="/logo.png"
          alt="Luxora Logo"
          className="w-[340px] object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.25)] md:w-[540px]"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.42em] text-yellow-400">
            Luxora Collection
          </p>

          <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl">
            Luxury Doors & Windows
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Refined aluminum systems crafted for modern architecture and
            premium living.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/quote"
              className="rounded-2xl bg-yellow-400 px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black transition duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.55)]"
            >
              Request Quote
            </Link>

            <Link
              href="/products"
              className="rounded-2xl border border-yellow-400/50 px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-yellow-300 transition duration-300 hover:scale-105 hover:bg-yellow-400/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]"
            >
              Explore Collection
            </Link>

          </div>
        </motion.div>

      </section>

      {/* Products Preview */}
      <section className="relative z-10 px-6 py-28">

        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <p className="mb-4 text-center text-xs uppercase tracking-[0.4em] text-yellow-400">
            Architectural Systems
          </p>

          <h2 className="mb-14 text-center font-serif text-4xl md:text-6xl">
            Designed for Luxury Spaces
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                title: " Doors Systems",
                image: "/sliding-door.png",
                text: "Minimal aluminum Doors systems designed for expansive openings and luxury architectural living.",
              },
              {
                title: "Luxury Windows",
                image: "/luxury-window.png",
                text: "Refined window systems balancing minimal aesthetics, performance, and natural light.",
              },
              {
                title: "Custom Systems",
                image: "/custom-system.png",
                text: "Tailored architectural systems crafted for modern luxury projects and custom applications.",
              },
            ].map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-3xl border border-yellow-400/20 bg-white/[0.03] backdrop-blur-md hover:border-yellow-400/60"
              >

                {/* Image */}
                <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-950 to-black">

                  <div className="absolute h-44 w-44 rounded-full bg-yellow-400/10 blur-3xl transition duration-700 group-hover:scale-150" />

                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 h-[260px] object-contain transition duration-700 group-hover:scale-110"
                  />

                </div>

                {/* Text */}
                <div className="p-8">

                  <h3 className="mb-4 font-serif text-3xl text-white">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-neutral-400">
                    {item.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

    </main>
  );
}