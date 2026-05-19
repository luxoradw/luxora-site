"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wind,
  SunMedium,
  Sparkles,
  Layers3,
  MoveUpRight,
} from "lucide-react";

const features = [
  {
    title: "Minimal Aluminum Sightlines",
    text: "Ultra-slim architectural framing designed for modern luxury homes with maximum glass visibility.",
    icon: Layers3,
  },
  {
    title: "Thermal Performance",
    text: "Engineered thermal break systems improve insulation and interior comfort in every season.",
    icon: SunMedium,
  },
  {
    title: "Smooth Lift Function",
    text: "Precision engineered hardware delivers effortless opening movement with premium feel.",
    icon: MoveUpRight,
  },
  {
    title: "Weather Protection",
    text: "Advanced sealing systems protect against water infiltration, wind, and exterior noise.",
    icon: Wind,
  },
];

export default function FoldUpWindowAboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-3xl" />
      </div>

      {/* hero */}
      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-2 text-xs uppercase tracking-[0.35em] text-yellow-400">
              Luxora Premium Systems
            </div>
          </div>

          <h1 className="text-5xl font-extralight uppercase tracking-[0.16em] text-white md:text-7xl">
            Fold Up Window
          </h1>

          <div className="mx-auto mt-8 h-px w-32 bg-yellow-500/60" />

          <p className="mx-auto mt-10 max-w-3xl text-sm font-light leading-8 tracking-[0.08em] text-white/60 md:text-base">
            Designed for modern luxury architecture, the Luxora Fold Up Window
            system transforms kitchens, entertainment spaces, and outdoor
            serving areas into seamless architectural experiences with elegant
            functionality and premium engineering.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/quote"
              className="group flex items-center gap-3 rounded-full border border-yellow-500/40 bg-yellow-500 px-8 py-4 text-xs uppercase tracking-[0.25em] text-black transition hover:scale-105"
            >
              Request Quote
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-white/15 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white/70 transition hover:border-yellow-500/40 hover:text-yellow-400"
            >
              Explore Systems
            </Link>
          </div>
        </motion.div>

        {/* graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative mt-24 w-full max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-yellow-500/20 bg-white/[0.03] p-8 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent" />

            <div className="relative flex h-[320px] items-end justify-center gap-2 md:h-[420px]">
              {[1, 2, 3, 4].map((panel) => (
                <motion.div
                  key={panel}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: panel * 0.15,
                    duration: 0.8,
                  }}
                  className="relative flex h-full w-[22%] items-center justify-center overflow-hidden rounded-t-[18px] border border-yellow-500/20 bg-gradient-to-b from-neutral-800 to-neutral-950"
                >
                  <div className="absolute inset-[10px] rounded-t-[12px] border border-white/10 bg-gradient-to-br from-white/10 to-white/0" />

                  <div className="absolute inset-y-0 right-0 w-[2px] bg-yellow-500/30" />

                  <Sparkles className="relative h-10 w-10 text-yellow-400/70" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* features */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
            Luxury Performance
          </p>

          <h2 className="mt-6 text-4xl font-extralight uppercase tracking-[0.14em] md:text-5xl">
            Premium Engineering
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 transition hover:border-yellow-500/30 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
                    <Icon className="h-8 w-8 text-yellow-400" />
                  </div>

                  <div className="mb-6 h-px w-14 bg-yellow-500/70" />

                  <h3 className="text-lg font-light uppercase tracking-[0.16em]">
                    {feature.title}
                  </h3>

                  <p className="mt-6 text-sm leading-8 text-white/55">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* bottom section */}
      <section className="relative border-t border-white/10 py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <ShieldCheck className="h-16 w-16 text-yellow-400" />

          <h2 className="mt-10 text-4xl font-extralight uppercase tracking-[0.14em]">
            Crafted For Luxury Living
          </h2>

          <p className="mt-8 max-w-3xl text-sm leading-8 tracking-[0.06em] text-white/60">
            Every Luxora system is designed with architectural precision,
            premium-grade aluminum, high-performance glass packages, and
            world-class hardware components to create timeless luxury spaces.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {[
              "German Hardware",
              "Thermal Break",
              "Premium Aluminum",
              "Luxury Finishes",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/70"
              >
                <CheckCircle2 className="h-4 w-4 text-yellow-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}