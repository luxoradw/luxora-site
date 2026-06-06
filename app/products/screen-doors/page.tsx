export default function ScreenDoorsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-[700px] overflow-hidden">
        <img
          src="/screen-door-hero.png"
          alt="Luxora Screen Doors"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
            Door Systems
          </p>

          <h1 className="font-serif text-6xl md:text-8xl">
            Screen Doors
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-white/80">
            Premium screen door systems designed for luxury homes,
            providing ventilation, insect protection, and seamless
            integration with modern architecture.
          </p>
        </div>
      </section>

      {/* Systems */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-center font-serif text-5xl text-yellow-300">
          Available Systems
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Retractable Screens",
            "Sliding Screens",
            "Pleated Screens",
            "Hinged Screens",
          ].map((item) => (
            <div
              key={item}
              className="border border-yellow-400/20 p-8"
            >
              <h3 className="font-serif text-2xl text-yellow-300">
                {item}
              </h3>

              <p className="mt-4 text-white/70">
                Premium screen solutions engineered for luxury
                residential applications.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="border border-yellow-400/20 p-8">
            <h3 className="text-xl text-yellow-300">
              Insect Protection
            </h3>
          </div>

          <div className="border border-yellow-400/20 p-8">
            <h3 className="text-xl text-yellow-300">
              Fresh Air Ventilation
            </h3>
          </div>

          <div className="border border-yellow-400/20 p-8">
            <h3 className="text-xl text-yellow-300">
              Minimal Sightlines
            </h3>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="border border-yellow-400/30 p-12 text-center">
          <h2 className="font-serif text-5xl text-yellow-300">
            Customize Your Screen System
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Available in custom sizes, colors, mesh options,
            and hardware finishes.
          </p>
        </div>
      </section>
    </main>
  );
}