"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DemoType = "pivot" | "slidingDoor" | "bifold" | "fixedWindow" | "slidingWindow" | "awningWindow" | "casementWindow";

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
    title: "Folding Door",
    description: "Luxury aluminum folding door system designed for wide openings, patios, and indoor-outdoor living.",
    note: "Multiple door panels fold and stack together to open a large wall section with a clean architectural look.",
    sizes: ['72" x 80"', '96" x 96"', '144" x 96"', '192" x 96"', '240" x 120"'],
    tags: ["Aluminum Door", "Folding System", "Wide Opening"],
    demo: "bifold",
  },
  {
    title: "Sliding Door",
    description: "Modern aluminum sliding door system with smooth horizontal movement and slim luxury profile.",
    note: "One panel slides across the track to create a space-saving opening with strong visibility and clean operation.",
    sizes: ['60" x 80"', '96" x 80"', '120" x 96"', '144" x 96"', "Custom Multi-Panel"],
    tags: ["Aluminum Door", "Sliding System", "Slim Profile"],
    demo: "slidingDoor",
  },
  {
    title: "Pivot Door",
    description: "Statement aluminum pivot door designed for luxury entries and dramatic architectural impact.",
    note: "The panel rotates from a pivot point instead of traditional hinges, creating an impressive and smooth entrance motion.",
    sizes: ['42" x 96"', '48" x 96"', '60" x 96"', '72" x 108"', "Custom Oversized"],
    tags: ["Aluminum Door", "Grand Entry", "Custom Size"],
    demo: "pivot",
  },
  {
    title: "Casement Door",
    description: "Elegant aluminum casement door system for refined access points and clean modern elevations.",
    note: "The door opens outward or inward from side hinges for simple operation and classic architectural function.",
    sizes: ['32" x 80"', '36" x 80"', '42" x 96"', '48" x 96"', "Custom Sizes"],
    tags: ["Aluminum Door", "Hinged Operation", "Clean Detail"],
    demo: "pivot",
  },
  {
    title: "Barn Door",
    description: "Contemporary aluminum barn door style for feature openings, interiors, and specialty design applications.",
    note: "The panel slides along an exposed track, creating a decorative statement while saving swing space.",
    sizes: ['36" x 84"', '42" x 84"', '48" x 96"', '60" x 96"', "Custom Sizes"],
    tags: ["Aluminum Door", "Feature Opening", "Space Saving"],
    demo: "slidingDoor",
  },
];

const windows: Product[] = [
  {
    title: "Folding Window",
    description: "Luxury aluminum folding window system for pass-through counters, entertaining areas, and wide openings.",
    note: "Multiple window panels fold and stack to open a large horizontal section with a clean luxury appearance.",
    sizes: ['48" x 36"', '72" x 48"', '96" x 48"', '120" x 60"', "Custom Sizes"],
    tags: ["Aluminum Window", "Folding System", "Open View"],
    demo: "bifold",
  },
  {
    title: "Awning Window",
    description: "Top-hinged aluminum window designed for protected ventilation and refined modern detailing.",
    note: "The panel opens outward from the bottom while hinged at the top, allowing airflow with a protected opening style.",
    sizes: ['24" x 24"', '30" x 24"', '36" x 24"', '48" x 24"', "Custom Sizes"],
    tags: ["Aluminum Window", "Top Hinged", "Air Flow"],
    demo: "awningWindow",
  },
  {
    title: "Sliding Window",
    description: "Modern aluminum sliding window system with smooth movement, clean lines, and everyday comfort.",
    note: "One sash slides horizontally to open and close, offering simple ventilation and a contemporary look.",
    sizes: ['24" x 36"', '30" x 60"', '36" x 72"', '48" x 24"', "Custom Sizes"],
    tags: ["Aluminum Window", "Smooth Slide", "Modern Line"],
    demo: "slidingWindow",
  },
  {
    title: "Crank Window",
    description: "Aluminum crank window system designed for controlled ventilation and smooth mechanical operation.",
    note: "The sash opens with a crank handle, giving the customer easy control over airflow and opening angle.",
    sizes: ['24" x 36"', '30" x 48"', '36" x 60"', '42" x 60"', "Custom Sizes"],
    tags: ["Aluminum Window", "Crank Operation", "Ventilation"],
    demo: "casementWindow",
  },
  {
    title: "Casement Window",
    description: "Side-hinged aluminum window with elegant operation, strong airflow, and clean architectural presence.",
    note: "The sash swings outward from the side, making it ideal for ventilation and refined modern elevations.",
    sizes: ['24" x 36"', '30" x 60"', '36" x 72"', '48" x 24"', "Custom Sizes"],
    tags: ["Aluminum Window", "Side Hinged", "Clean Profile"],
    demo: "casementWindow",
  },
  {
    title: "Tilt and Turn Window",
    description: "Premium aluminum tilt and turn window system offering dual operation for ventilation and easy access.",
    note: "The sash can tilt inward from the top or swing inward like a casement, giving two functions in one window.",
    sizes: ['24" x 36"', '30" x 48"', '36" x 60"', '48" x 72"', "Custom Sizes"],
    tags: ["Aluminum Window", "Dual Function", "European Style"],
    demo: "awningWindow",
  },
  {
    title: "Double Hung Window",
    description: "Classic aluminum double hung window system with balanced vertical movement and refined proportions.",
    note: "Two sashes move vertically, allowing flexible ventilation from the top, bottom, or both openings.",
    sizes: ['24" x 36"', '30" x 54"', '36" x 60"', '48" x 72"', "Custom Sizes"],
    tags: ["Aluminum Window", "Vertical Slide", "Classic Function"],
    demo: "slidingWindow",
  },
  {
    title: "Skylight Window",
    description: "Aluminum skylight window designed to bring natural overhead light into premium interiors.",
    note: "Installed at the roof or ceiling plane, skylight windows increase daylight and create a more open architectural feeling.",
    sizes: ['24" x 24"', '24" x 48"', '30" x 60"', '48" x 48"', "Custom Sizes"],
    tags: ["Aluminum Window", "Natural Light", "Roof Opening"],
    demo: "fixedWindow",
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

  if (type === "casementWindow") {
    return (
      <div className="relative h-48 w-72 border border-yellow-400/50 [perspective:900px]">
        <motion.div animate={{ rotateY: [0, -28, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "left center" }} className="absolute inset-5 border border-yellow-400 bg-yellow-400/5" />
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
            src="/logo.jpg"
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
      <SectionTitle id="doors" title="Aluminum Door" text="Each door system includes an animated motion demo, description, function note, sizes, and premium feature tags in one place." />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:px-10">
        {doors.map((item) => <ProductCard key={item.title} item={item} />)}
      </section>

      <SectionTitle id="windows" title="Aluminum Window" text="Clean line-art window graphics show customers how each window works while keeping the page professional and luxury-focused." />
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
