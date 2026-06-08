export default function HardwarePage() {
  const hardware = [
    "Lever Handles",
    "Pull Handles",
    "Window Handles",
    "Heavy Duty Hinges",
    "Adjustable Hinges",
    "Concealed Hinges",
    "Pivot Hinges",
    "Multi-Point Locks",
    "Mortise Locks",
    "Cylinders",
    "Flush Bolts",
    "Strike Plates",
  ];

  const finishes = [
    {
      name: "Matte Black",
      text: "Sleek, modern, and timeless powder-coated finish.",
    },
    {
      name: "Brushed Brass",
      text: "Warm, sophisticated finish with brushed texture.",
    },
    {
      name: "Bronze",
      text: "Rich architectural finish with lasting elegance.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-[760px] overflow-hidden">
        <img
          src="/Hardwaree.png"
          alt="Luxora Hardware Collection"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-400">
            Luxora Customization
          </p>

          <h1 className="max-w-4xl font-serif text-6xl uppercase leading-tight md:text-8xl">
            Hardware Collection
          </h1>

          <div className="mt-8 h-px w-32 bg-yellow-400" />

          <h2 className="mt-8 font-serif text-2xl text-yellow-300">
            Crafted to Perfection
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
            Premium handles, hinges, locks, rollers, and accessories designed to
            complement Luxora aluminum door and window systems.
          </p>
        </div>
      </section>

      {/* Hardware Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-center gap-6">
          <div className="h-px flex-1 bg-yellow-400/40" />
          <h2 className="font-serif text-3xl uppercase tracking-[0.2em] text-yellow-300">
            Available Hardware
          </h2>
          <div className="h-px flex-1 bg-yellow-400/40" />
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {hardware.map((item) => (
            <div
              key={item}
              className="border border-yellow-400/20 bg-white/[0.03] p-6 transition duration-300 hover:border-yellow-400/70 hover:bg-yellow-400/[0.04]"
            >
              <h3 className="font-serif text-xl text-yellow-300">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Finish Specifications */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {finishes.map((finish) => (
            <div
              key={finish.name}
              className="border border-yellow-400/25 bg-white/[0.03] p-8"
            >
              <h3 className="font-serif text-2xl text-yellow-300">
                {finish.name}
              </h3>
              <p className="mt-4 leading-7 text-white/70">{finish.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Material */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="border border-yellow-400/40 bg-white/[0.03] p-10">
          <h3 className="font-serif text-3xl text-yellow-300">
            Material
          </h3>

          <p className="mt-5 text-lg leading-8 text-white/75">
            Aluminum, stainless steel, and zinc alloy components selected for
            durability, smooth operation, security, and refined architectural
            appearance.
          </p>

          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-yellow-400">
            Availability may vary by product system and project specifications.
          </p>
        </div>
      </section>
    {/* Hardware Catalog Preview */}
<section className="mx-auto max-w-7xl px-6 pb-32">
  <div className="mb-10 flex items-center gap-6">
    <div className="h-px flex-1 bg-yellow-400/30" />
    <h2 className="font-serif text-3xl uppercase tracking-[0.2em] text-yellow-300">
      Hardware Gallery
    </h2>
    <div className="h-px flex-1 bg-yellow-400/30" />
  </div>

  <div className="overflow-hidden border border-yellow-400/20 bg-white/[0.02]">
    <img
      src="/HardwareCatalog.png"
      alt="Luxora Hardware Collection"
      className="w-full object-cover"
    />
  </div>
</section>
    </main>
  );
}