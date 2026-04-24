"use client";

export default function LuxoraWebsite() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <img
          src="/luxora-logo.png"
          alt="Luxora Logo"
          className="mx-auto mb-8 w-[280px] md:w-[520px]"
        />

        <p className="max-w-2xl text-lg leading-8 text-neutral-300">
          Luxury doors and windows crafted for refined architecture, premium homes, and custom openings.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#doors"
            className="rounded-xl border border-yellow-400 px-8 py-3 text-yellow-400"
          >
            Explore Collection
          </a>

          <a
            href="mailto:Luxoradw@gmail.com"
            className="rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-black"
          >
            Request Quote
          </a>
        </div>
      </section>

      <section id="doors" className="px-6 py-20 text-center">
        <h2 className="mb-6 font-serif text-4xl text-yellow-400">
          Luxury Door Systems
        </h2>
        <p className="mx-auto max-w-xl text-neutral-400">
          Pivot doors, sliding glass doors, and bi-fold systems designed for high-end residential spaces.
        </p>
      </section>
    </main>
  );
}