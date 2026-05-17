"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black pt-32 text-white">
      
      <section className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-6 text-center">
        
        <motion.img
          src="/logo.jpg"
          alt="Luxora Logo"
          className="w-[360px] object-contain md:w-[520px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          
          

          <a
            href="/quote"
            className="rounded-2xl bg-yellow-400 px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-yellow-300"
          >
            Request Quote
          </a>

        </div>

        <div className="mt-16 max-w-4xl">
          
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400">
            Luxora Collection
          </p>

          <h1 className="font-serif text-5xl text-white md:text-7xl">
            Luxury Doors & Windows
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
            Refined aluminum door and window systems designed for modern
            homes, premium architectural projects, and custom luxury spaces.
          </p>

        </div>

      </section>

    </main>
  );
}