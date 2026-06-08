export default function GlassOptionsPage() {
  const glassOptions = [
    {
      title: "Clear Glass",
      description: "Clean transparent glass for maximum daylight and visibility.",
    },
    {
      title: "Tinted Glass",
      description: "Reduces glare and solar heat while adding a refined appearance.",
    },
    {
      title: "Grey Glass",
      description: "Modern grey-toned glass for privacy, shading, and luxury design.",
    },
    {
      title: "Bronze Glass",
      description: "Warm bronze-toned glass for elegant architectural projects.",
    },
    {
      title: "Obscure Glass",
      description: "Privacy glass with textured appearance for bathrooms and specialty areas.",
    },
    {
      title: "Fluted Glass",
      description: "Vertical textured glass with a decorative luxury appearance.",
    },
    {
      title: "Insulated Clear Low-E",
      description: "Low-E insulated glass with argon-filled performance.",
    },
    {
      title: "Insulated Low-E",
      description: "High-performance insulated glass for improved energy efficiency.",
    },
    {
      title: "Laminated Glass",
      description: "Safety and sound-control glass for stronger protection and comfort.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
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
            Premium architectural glass solutions designed for clarity, privacy,
            energy efficiency, safety, sound control, and luxury performance.
          </p>
        </div>
      </section>

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

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden border border-yellow-400/25 bg-white/[0.02]">
          <img
            src="/custom-glass.png"
            alt="Luxora Glass Collection"
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="border border-yellow-400/20 p-8">
            <h3 className="font-serif text-xl text-yellow-300">
              Energy Efficiency
            </h3>
            <p className="mt-4 text-white/70">
              Low-E and insulated glass options help improve indoor comfort.
            </p>
          </div>

          <div className="border border-yellow-400/20 p-8">
            <h3 className="font-serif text-xl text-yellow-300">
              Privacy & Design
            </h3>
            <p className="mt-4 text-white/70">
              Obscure, fluted, tinted, grey, and bronze glass provide privacy and style.
            </p>
          </div>

          <div className="border border-yellow-400/20 p-8">
            <h3 className="font-serif text-xl text-yellow-300">
              Safety & Sound
            </h3>
            <p className="mt-4 text-white/70">
              Laminated glass supports safety, security, and sound-control performance.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="border border-yellow-400/40 p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-serif text-3xl text-yellow-300">
                Need Help Selecting Glass?
              </h3>

              <p className="mt-4 text-white/70">
                Glass availability may vary by product system, size, and project requirements.
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