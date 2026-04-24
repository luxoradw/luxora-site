"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DemoType = "pivot" | "slidingDoor" | "bifold" | "fixedWindow" | "slidingWindow" | "awningWindow";

type Product = {
  title: string;
  description: string;
  note: string;
  sizes: string[];
  tags: string[];
  demo: DemoType;
};

const doors: Product[] = [
  {
    title: "Pivot Doors",
    description: "Oversized statement doors designed for dramatic luxury entrances and architectural impact.",
    note: "The door panel rotates from a pivot point instead of traditional side hinges, creating a smooth and impressive opening motion.",
    sizes: ['42" x 96"', '48" x 96"', '60" x 96"', '72" x 108"', "Custom Oversized"],
    tags: ["Grand Entry", "Custom Size", "Premium Finish"],
    demo: "pivot",
  },
  {
    title: "Sliding Glass Doors",
    description: "Large glass systems designed to connect interior living spaces with patios, gardens, and views.",
    note: "One panel glides horizontally across the track to create a clean, space-saving opening with wide visibility.",
    sizes: ['60" x 80"', '96" x 80"', '120" x 96"', '144" x 96"', "Custom Multi-Panel"],
    tags: ["Wide Opening", "Indoor-Outdoor", "Slim Profile"],
    demo: "slidingDoor",
  },
  {
    title: "Bi-Fold Doors",
    description: "Elegant folding glass panels for entertainment spaces and luxury indoor-outdoor transitions.",
    note: "Multiple panels fold and stack together, opening a large wall section for maximum access and view.",
    sizes: ['72" x 80"', '96" x 96"', '144" x 96"', '192" x 96"', '240" x 120"'],
    tags: ["Folding System", "Open Wall", "Luxury Patio"],
    demo: "bifold",
  },
];

const windows: Product[] = [
  {
    title: "Fixed Picture Windows",
    description: "Minimal framed glass designed to capture views, daylight, and clean architectural composition.",
    note: "Fixed windows do not open. They are ideal when the goal is maximum glass area, view, and light.",
    sizes: ['24" x 24"', '48" x 60"', '60" x 72"', '72" x 96"', "Custom Large Format"],
    tags: ["Clear View", "Large Glass", "Minimal Frame"],
    demo: "fixedWindow",
  },
  {
    title: "Sliding Windows",
    description: "Modern horizontal window systems with clean lines and smooth everyday operation.",
    note: "One sash slides horizontally to open and close, offering simple ventilation and a contemporary appearance.",
    sizes: ['24" x 36"', '30" x 60"', '36" x 72"', '48" x 24"', "Custom Sizes"],
    tags: ["Smooth Slide", "Ventilation", "Modern Line"],
    demo: "slidingWindow",
  },
  {
    title: "Awning Windows",
    description: "Top-hinged windows designed for protected ventilation and refined modern detailing.",
    note: "The panel opens outward from the bottom while hinged at the top, helping airflow even with light rain protection.",
    sizes: ['24" x 24"', '30" x 24"', '36" x 24"', '48" x 24"', "Custom Sizes"],
    tags: ["Top Hinged", "Air Flow", "Elegant Detail"],
    demo: "awningWindow",
  },
];

function DemoGraphic({ type }: { type: DemoType }) {
  if (type === "slidingDoor") {
    return (
      <div className="relative h-56 w-72 border border-yellow-400/50">
        <div className="absolute inset-4 border border-yellow-400/20" />
        <motion.div animate={{ x: [0, 48, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-5 left-5 top-5 w-[42%] border border-yellow-400 bg-yellow-400/5" />
        <div className="absolute bottom-5 right-5 top-5 w-[42%] border border-yellow-400/40" />
      </div>
    );
  }

  if (type === "bifold") {
    return (
      <div className="relative h-56 w-72 border border-yellow-400/50">
        <div className="absolute inset-5 flex gap-1 [perspective:900px]">
          {[0, 1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              animate={{ rotateY: index < 2 ? [0, -60, 0] : [0, 60, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
              style={{ transformOrigin: index < 2 ? "left center" : "right center" }}
              className="flex-1 border border-yellow-400/70 bg-yellow-400/5"
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === "slidingWindow") {
    return (
      <div className="relative h-48 w-72 border border-yellow-400/50">
        <motion.div animate={{ x: [0, 38, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-5 left-5 top-5 w-[42%] border border-yellow-400 bg-yellow-400/5" />
        <div className="absolute bottom-5 right-5 top-5 w-[42%] border border-yellow-400/40" />
      </div>
    );
  }

  if (type === "awningWindow") {
    return (
      <div className="relative h-48 w-72 border border-yellow-400/50 [perspective:900px]">
        <motion.div animate={{ rotateX: [0, -30, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "top center" }} className="absolute inset-5 border border-yellow-400 bg-yellow-400/5" />
      </div>
    );
  }

  if (type === "fixedWindow") {
    return (
      <div className="relative h-48 w-72 border border-yellow-400/50">
        <div className="absolute inset-5 border border-yellow-400/70 bg-yellow-400/5" />
        <div className="absolute inset-y-5 left-1/2 w-px bg-yellow-400/25" />
        <div className="absolute inset-x-5 top-1/2 h-px bg-yellow-400/25" />
      </div>
    );
  }

  return (
    <div className="relative h-56 w-56 border border-yellow-400/50 [perspective:900px]">
      <motion.div animate={{ rotateY: [0, -32, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "35% center" }} className="absolute inset-5 border border-yellow-400 bg-yellow-400/5" />
      <div className="absolute bottom-5 left-[35%] top-5 w-px bg-yellow-400/80" />
    </div>
  );
}

function ProductCard({ item }: { item: Product }) {
  return (
    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[28px] border border-yellow-400/20 bg-white/[0.025]">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-[320px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)] p-8">
          <DemoGraphic type={item.demo} />
        </div>
        <div className="p-8 text-left md:p-10">
          <div className="mb-3 text-xs uppercase tracking-[0.32em] text-yellow-400">How it works</div>
          <h3 className="mb-4 font-serif text-3xl text-white">{item.title}</h3>
          <p className="mb-5 leading-7 text-neutral-300">{item.description}</p>
          <p className="mb-6 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm leading-7 text-neutral-300">{item.note}</p>
          <div className="mb-6">
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">Common sizes</div>
            <div className="flex flex-wrap gap-2">
              {item.sizes.map((size) => (
                <span key={size} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-neutral-300">{size}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-yellow-400">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SectionTitle({ id, title, text }: { id: string; title: string; text: string }) {
  return (
    <section id={id} className="px-6 pt-24 text-center">
      <h2 className="mb-4 font-serif text-4xl tracking-[0.16em] text-yellow-400 md:text-5xl">{title}</h2>
      <div className="mx-auto mb-6 h-px w-20 bg-yellow-400/70" />
      <p className="mx-auto max-w-2xl leading-8 text-neutral-400">{text}</p>
    </section>
  );
}

export default function LuxoraWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-yellow-400/15 bg-black/85 px-6 py-5 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" onClick={() => setMenuOpen(false)} className="font-serif text-xl tracking-[0.28em] text-yellow-400 md:text-2xl">LUXORA</a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/30 text-yellow-400 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-2xl leading-none">{menuOpen ? "×" : "≡"}</span>
          </button>

          <div className="hidden items-center gap-9 text-sm uppercase tracking-[0.22em] text-neutral-300 md:flex">
            <a href="#doors" className="transition hover:text-yellow-400">Doors</a>
            <a href="#windows" className="transition hover:text-yellow-400">Windows</a>
            <a href="#quote" className="transition hover:text-yellow-400">Quote</a>
            <a href="mailto:Luxoradw@gmail.com" className="rounded-xl border border-yellow-400/60 px-5 py-2 text-yellow-400 transition hover:bg-yellow-400 hover:text-black">Contact</a>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-5 grid gap-3 border-t border-yellow-400/15 pt-5 text-sm uppercase tracking-[0.22em] text-neutral-300">
                <a onClick={() => setMenuOpen(false)} href="#doors" className="rounded-xl border border-white/10 px-4 py-3 hover:border-yellow-400/40 hover:text-yellow-400">Doors</a>
                <a onClick={() => setMenuOpen(false)} href="#windows" className="rounded-xl border border-white/10 px-4 py-3 hover:border-yellow-400/40 hover:text-yellow-400">Windows</a>
                <a onClick={() => setMenuOpen(false)} href="#quote" className="rounded-xl border border-white/10 px-4 py-3 hover:border-yellow-400/40 hover:text-yellow-400">Quote</a>
                <a onClick={() => setMenuOpen(false)} href="mailto:Luxoradw@gmail.com" className="rounded-xl bg-yellow-400 px-4 py-3 text-center font-semibold text-black">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-28 text-center md:px-6 md:pt-24">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative z-10">
          <motion.img
            src="/luxora-logo.png"
            alt="Luxora Logo"
            className="mx-auto mb-6 w-[260px] sm:w-[340px] md:mb-8 md:w-[520px]"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
        <p className="relative z-10 mx-auto mt-2 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg md:leading-8">
          Luxury doors and windows crafted for refined architecture, premium homes, and custom openings.
        </p>
        <div className="relative z-10 mt-8 flex w-full max-w-sm flex-col justify-center gap-4 sm:max-w-none sm:flex-row md:mt-10 md:gap-5">
          <a href="#doors" className="rounded-xl border border-yellow-400 px-8 py-3 text-sm uppercase tracking-[0.18em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black">Explore Collection</a>
          <a href="#quote" className="rounded-xl bg-yellow-400 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-yellow-300">Request Quote</a>
        </div>
      </section>

      <SectionTitle id="doors" title="Luxury Door Systems" text="Each door system includes an animated motion demo, description, function note, sizes, and premium feature tags in one place." />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:px-10">
        {doors.map((item) => <ProductCard key={item.title} item={item} />)}
      </section>

      <SectionTitle id="windows" title="Architectural Windows" text="Clean line-art window graphics show customers how each window works while keeping the page professional and luxury-focused." />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:px-10">
        {windows.map((item) => <ProductCard key={item.title} item={item} />)}
      </section>

      <section id="quote" className="px-6 py-24 text-center">
        <h2 className="mb-4 font-serif text-4xl tracking-[0.16em] text-yellow-400 md:text-5xl">Request a Quote</h2>
        <p className="mx-auto mb-10 max-w-xl leading-8 text-neutral-400">Send your project details, size, quantity, and preferred product type.</p>
        <a href="mailto:Luxoradw@gmail.com" className="inline-block rounded-2xl bg-yellow-400 px-10 py-4 font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-yellow-300">Email Luxora</a>
        <div className="mt-8 text-neutral-400">(818) 914-1047 · Luxoradw@gmail.com</div>
      </section>
    </main>
  );
}
