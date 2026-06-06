export default function ColorsFinishesPage() {
  const dark = [
    ["Black", "#111111"],
    ["Sand Black", "#1f1f1f"],
    ["Brownish Black", "#1b1413"],
    ["Grayish Brown", "#2a2521"],
    ["Sand Lime", "#2f3736"],
    ["Melanite", "#242424"],
  ];

  const neutral = [
    ["Silver Grey", "#aeb4b4"],
    ["Highlight White", "#dfe4e5"],
    ["Matte White", "#e8e7e4"],
    ["Matte Grey", "#303638"],
  ];

  const warm = [
    ["Sand Coffee", "#4a3023"],
    ["Antique Brown", "#3b3328"],
    ["Yuhua Stone", "#7d7d7a"],
  ];

  const Swatch = ({ name, color }: { name: string; color: string }) => (
    <div className="group">
      <div
        className="h-36 rounded-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition duration-500 group-hover:-translate-y-2 group-hover:border-yellow-400/70"
        style={{
          background: `linear-gradient(135deg, ${color}, #00000055)`,
        }}
      />
      <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white">
        {name}
      </p>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[720px] overflow-hidden">
        <img
          src="/custom-colors.png"
          alt="Luxora Colors and Finishes"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-400">
            Customization
          </p>

          <h1 className="max-w-2xl font-serif text-6xl uppercase leading-tight md:text-8xl">
            Colors &<br /> Finishes
          </h1>

          <div className="mt-8 h-px w-28 bg-yellow-400" />

          <h2 className="mt-8 font-serif text-2xl text-yellow-300">
            Crafted for Luxury Architecture
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
            Premium powder-coated and anodized aluminum finishes engineered for
            exceptional durability, weather resistance, and timeless
            architectural beauty.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-center gap-6">
          <div className="h-px flex-1 bg-yellow-400/40" />
          <h2 className="text-center font-serif text-3xl uppercase tracking-[0.22em] text-yellow-300">
            Standard Aluminum Finishes
          </h2>
          <div className="h-px flex-1 bg-yellow-400/40" />
        </div>

        <div className="mb-20">
          <h3 className="mb-10 text-center font-serif text-2xl uppercase tracking-[0.2em] text-yellow-300">
            Dark Collection
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {dark.map(([name, color]) => (
              <Swatch key={name} name={name} color={color} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-10 text-center font-serif text-2xl uppercase tracking-[0.2em] text-yellow-300">
            Neutral Collection
          </h3>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {neutral.map(([name, color]) => (
              <Swatch key={name} name={name} color={color} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-10 text-center font-serif text-2xl uppercase tracking-[0.2em] text-yellow-300">
            Warm Collection
          </h3>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
            {warm.map(([name, color]) => (
              <Swatch key={name} name={name} color={color} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 md:grid-cols-2">
        <div className="border border-yellow-400/30 p-8">
          <h3 className="font-serif text-2xl text-yellow-300">Built to Last</h3>
          <p className="mt-5 leading-8 text-white/70">
            All profiles are finished with durable RAL powder coat or anodized
            surface treatment for long-lasting performance and weather
            resistance.
          </p>
        </div>

        <div className="border border-yellow-400/30 p-8">
          <h3 className="font-serif text-2xl text-yellow-300">
            Custom RAL Colors
          </h3>
          <p className="mt-5 leading-8 text-white/70">
            Custom RAL colors are available upon request to match your unique
            project vision.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="flex flex-col gap-6 border border-yellow-400/50 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-serif text-2xl uppercase tracking-[0.16em] text-yellow-300">
              Custom RAL Colors Available Upon Request
            </h3>
            <p className="mt-3 text-white/65">
              Bring your vision to life with unlimited possibilities.
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="text-xl text-yellow-300">(818) 818-3501</p>
            <p className="mt-2 uppercase tracking-[0.2em] text-white/70">
              LuxoraDW.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}