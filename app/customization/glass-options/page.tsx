export default function GlassOptionsPage() {
  const glassOptions = [
    {
      title: "Clear Glass",
      description:
        "Maximum visibility and natural daylight with a clean modern appearance.",
    },
    {
      title: "Low-E Glass",
      description:
        "Improves energy efficiency by reducing heat transfer and UV exposure.",
    },
    {
      title: "Tempered Glass",
      description:
        "Enhanced safety and strength for residential and commercial applications.",
    },
    {
      title: "Laminated Glass",
      description:
        "Superior security, sound control, and protection against breakage.",
    },
    {
      title: "Tinted Glass",
      description:
        "Reduces glare and solar heat gain while enhancing aesthetics.",
    },
    {
      title: "Insulated Glass",
      description:
        "Multi-pane glass units engineered for thermal performance and comfort.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-[700px] overflow-hidden">
        <img
          src="/custom-glass.png"
          alt="Luxora Glass Options"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-400">
            Customization
          </p>

          <h1 className="max-w-3xl font-serif text-6xl uppercase leading-tight md:text-8xl">
            Glass
            <br />
            Options
          </h1>

          <div className="mt-8 h-px w-28 bg-yellow-400" />

          <h2 className="mt-8 font-serif text-2xl text-yellow-300">
            Performance Meets Transparency
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
            Discover premium architectural glass solutions engineered for
            energy efficiency, security, comfort, and timeless luxury.
          </p>
        </div>
      </section>

      {/* Glass Types */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-center gap-6">
          <div className="h-px flex-1 bg-yellow-400/40" />
          <h2 className="font-serif text-3xl uppercase tracking-[0.2em] text-yellow-300">
            Glass Collection
          </h2>
          <div className="h-px flex-1 bg-yellow-400/40" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {glassOptions.map((glass) => (
            <div
              key={glass.title}
              className="border border-yellow-400/20 bg-white/[0.02] p-8 transition duration-300 hover:border-yellow-400/60"
            >
              <h3 className="font-serif text-2xl text-yellow-300">
                {glass.title}
              </h3>

              <p className="mt-5 leading-8 text-white/70">
                {glass.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="border border-yellow-400/20 p-8">
            <h3 className="font-serif text-xl text-yellow-300">
              Energy Efficiency
            </h3>
            <p className="mt-4 text-white/70">
              Advanced glazing systems reduce heat transfer and improve indoor
              comfort.
            </p>
          </div>

          <div className="border border-yellow-400/20 p-8">
            <h3 className="font-serif text-xl text-yellow-300">
              Sound Control
            </h3>
            <p className="mt-4 text-white/70">
              Laminated and insulated glass options help reduce outside noise.
            </p>
          </div>

          <div className="border border-yellow-400/20 p-8">
            <h3 className="font-serif text-xl text-yellow-300">
              Security & Safety
            </h3>
            <p className="mt-4 text-white/70">
              Tempered and laminated glass provide enhanced protection and
              durability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="border border-yellow-400/40 p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-serif text-3xl text-yellow-300">
                Need Help Selecting Glass?
              </h3>

              <p className="mt-4 text-white/70">
                Our specialists can help you choose the perfect glass solution
                for your project.
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-2xl text-yellow-300">(818) 818-3501</p>
              <p className="mt-2 uppercase tracking-[0.2em] text-white/70">
                LuxoraDW.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}