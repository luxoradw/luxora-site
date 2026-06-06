export default function HardwarePage() {
  const hardware = [
    {
      title: "Door Handles",
      text: "Modern pull handles, lever handles, and entry handles designed for luxury aluminum door systems.",
    },
    {
      title: "Window Handles",
      text: "Slim-profile handles for casement, tilt & turn, sliding, and specialty window systems.",
    },
    {
      title: "Sliding Hardware",
      text: "Smooth rollers, tracks, locking systems, and lift-slide mechanisms for large glass openings.",
    },
    {
      title: "Hinges",
      text: "Heavy-duty hinges engineered for strength, durability, and long-term performance.",
    },
    {
      title: "Locks",
      text: "Secure locking solutions including multipoint locks and concealed locking hardware.",
    },
    {
      title: "Accessories",
      text: "Premium components selected to support smooth operation, security, and refined aesthetics.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[700px] overflow-hidden">
        <img
          src="/Hardwaree.png"
          alt="Luxora Hardware"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-400">
            Customization
          </p>

          <h1 className="max-w-3xl font-serif text-6xl uppercase leading-tight md:text-8xl">
            Hardware
          </h1>

          <div className="mt-8 h-px w-28 bg-yellow-400" />

          <h2 className="mt-8 font-serif text-2xl text-yellow-300">
            Precision in Every Detail
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
            Premium hardware systems selected for smooth operation, enhanced
            security, durability, and refined architectural beauty.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-center gap-6">
          <div className="h-px flex-1 bg-yellow-400/40" />
          <h2 className="font-serif text-3xl uppercase tracking-[0.2em] text-yellow-300">
            Hardware Collection
          </h2>
          <div className="h-px flex-1 bg-yellow-400/40" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hardware.map((item) => (
            <div
              key={item.title}
              className="border border-yellow-400/20 bg-white/[0.02] p-8 transition duration-300 hover:border-yellow-400/60"
            >
              <h3 className="font-serif text-2xl text-yellow-300">
                {item.title}
              </h3>
              <p className="mt-5 leading-8 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="border border-yellow-400/20 p-8">
            <h3 className="font-serif text-xl text-yellow-300">
              Smooth Operation
            </h3>
            <p className="mt-4 text-white/70">
              Hardware selected for effortless opening, closing, and daily use.
            </p>
          </div>

          <div className="border border-yellow-400/20 p-8">
            <h3 className="font-serif text-xl text-yellow-300">
              Security
            </h3>
            <p className="mt-4 text-white/70">
              Locking systems designed to support safety, strength, and peace of
              mind.
            </p>
          </div>

          <div className="border border-yellow-400/20 p-8">
            <h3 className="font-serif text-xl text-yellow-300">
              Premium Finishes
            </h3>
            <p className="mt-4 text-white/70">
              Available in refined finishes such as black, silver, and custom
              matching options.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="border border-yellow-400/40 p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-serif text-3xl text-yellow-300">
                Hardware Included With Every System
              </h3>
              <p className="mt-4 text-white/70">
                Handles, hinges, locks, rollers, and accessories are selected
                based on the product type and project specifications.
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