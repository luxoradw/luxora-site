"use client";

import { motion } from "framer-motion";

type ProductPageProps = {
  title: string;
  description: string;
  features: string[];
  type?: "sliding" | "bifold" | "pivot" | "awning";
};

export default function ProductPage({
  title,
  description,
  features,
  type = "sliding",
}: ProductPageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-yellow-400/70">
            Luxora Doors & Windows
          </p>

          <h1 className="mb-8 font-serif text-5xl text-yellow-400 md:text-7xl">
            {title}
          </h1>

          <p className="mb-14 max-w-3xl text-base leading-8 text-neutral-400">
            {description}
          </p>

          <div className="mb-16 flex h-[360px] items-center justify-center rounded-3xl border border-yellow-400/20 bg-neutral-950">
            {type === "sliding" && (
              <div className="relative h-56 w-[460px] border border-yellow-400">
                <motion.div
                  animate={{ x: [0, 140, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 top-0 h-full w-1/2 border-r border-yellow-400 bg-yellow-400/10"
                />
              </div>
            )}

            {type === "bifold" && (
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ rotateY: [0, i % 2 === 0 ? -65 : 65, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-64 w-14 border border-yellow-400 bg-yellow-400/10"
                  />
                ))}
              </div>
            )}

            {type === "pivot" && (
              <motion.div
                animate={{ rotateY: [0, 65, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="h-72 w-40 border border-yellow-400 bg-yellow-400/10"
              />
            )}

            {type === "awning" && (
              <motion.div
                animate={{ rotateX: [0, -45, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="h-44 w-80 border border-yellow-400 bg-yellow-400/10"
              />
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-yellow-400/20 bg-neutral-950 p-6"
              >
                <h3 className="text-yellow-400">{feature}</h3>
              </div>
            ))}
          </div>

          <a
            href="mailto:Luxoradw@gmail.com"
            className="mt-14 inline-block rounded-xl border border-yellow-400 px-8 py-4 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Request Quote
          </a>
        </div>
      </section>
    </main>
  );
}