"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wind,
  ShieldCheck,
  Layers3,
  Sparkles,
  CheckCircle2,
  Gauge,
  SunMedium,
} from "lucide-react";

const features = [
  {
    title: "Smooth Gas Strut Operation",
    text: "Premium gas strut engineering provides smooth upward opening movement with effortless control and stability.",
    icon: Wind,
  },
  {
    title: "Architectural Aluminum System",
    text: "Slim modern aluminum framing creates a clean luxury appearance with maximum glass visibility.",
    icon: Layers3,
  },
  {
    title: "Thermal & Acoustic Performance",
    text: "High performance insulated glazing improves energy efficiency and minimizes exterior noise.",
    icon: SunMedium,
  },
  {
    title: "Heavy Duty Hardware",
    text: "Engineered hardware systems deliver long-term durability for luxury residential and commercial applications.",
    icon: Gauge,
  },
];

export default function GasStrutAboutPage() {
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
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-2 text-xs uppercase tracking-[0.35em] text-yellow-400">
              Luxora Premium Systems
            </div>
          </div>

          <h1 className="text-5xl font-extralight uppercase tracking-[0.16em] md:text-7xl">
            Gas Strut Window
          </h1>

          <div className="mx-auto mt-8 h-px w-32 bg-yellow-500/60" />

          <p className="mx-auto mt-10 max-w-3xl text-sm font-light leading-8 tracking-[0.08em] text-white/60 md:text-base">
            The Luxora Gas Strut Window system combines luxury aesthetics with
            advanced upward opening functionality, delivering seamless indoor
            and outdoor integration for modern kitchens, bars, patios, and
            entertainment spaces.
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

            <div className="relative flex h-[340px] items-end justify-center md:h-[440px]">
              {/* frame */}
              <div className="relative h-[80%] w-[85%] rounded-t-[22px] border border-yellow-500/20 bg-neutral-950">
                {/* opened panel */}
                <motion.div
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: -55 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    transformOrigin: "top",
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute left-0 top-0 h-[88%] w-full rounded-t-[20px] border border-yellow-500/20 bg-gradient-to-b from-neutral-700 to-neutral-900"
                >
                  <div className="absolute inset-[12px] rounded-t-[16px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent" />

                  <div className="absolute left-[18%] top-[-18px] h-[80px] w-[2px] rotate-[-20deg] bg-yellow-500/60" />
                  <div className="absolute right-[18%] top-[-18px] h-[80px] w-[2px] rotate-[20deg] bg-yellow-500/60" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-yellow-400/70" />
                  </div>
                </motion.div>
              </div>
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

      {/* bottom */}
      <section className="relative border-t border-white/10 py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <ShieldCheck className="h-16 w-16 text-yellow-400" />

          <h2 className="mt-10 text-4xl font-extralight uppercase tracking-[0.14em]">
            Designed For Modern Luxury
          </h2>

          <p className="mt-8 max-w-3xl text-sm leading-8 tracking-[0.06em] text-white/60">
            Luxora systems are engineered with premium-grade aluminum, luxury
            finishes, insulated glazing, and precision-crafted hardware to
            create timeless architectural experiences.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {[
              "German Hardware",
              "Thermal Break",
              "Luxury Finishes",
              "Premium Glass",
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