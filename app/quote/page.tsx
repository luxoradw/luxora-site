export default function QuotePage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-36 pb-20 text-white">
      <section className="mx-auto max-w-4xl rounded-[32px] border border-yellow-400/25 bg-white/[0.04] p-8 shadow-[0_0_60px_rgba(255,215,0,0.08)] backdrop-blur-xl md:p-12">
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400">
            Luxora Custom Quote
          </p>
          <h1 className="font-serif text-4xl text-yellow-400 md:text-6xl">
            Request a Quote
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-neutral-300">
            Tell us about your door or window project and our team will prepare a custom response.
          </p>
        </div>

        <form className="grid gap-5">
          <input className="rounded-2xl border border-yellow-400/20 bg-black/50 px-5 py-4 outline-none focus:border-yellow-400" placeholder="Full Name" />
          <input className="rounded-2xl border border-yellow-400/20 bg-black/50 px-5 py-4 outline-none focus:border-yellow-400" placeholder="Email" />
          <input className="rounded-2xl border border-yellow-400/20 bg-black/50 px-5 py-4 outline-none focus:border-yellow-400" placeholder="Phone Number" />

          <select className="rounded-2xl border border-yellow-400/20 bg-black/50 px-5 py-4 outline-none focus:border-yellow-400">
            <option>Project Type</option>
            <option>Doors</option>
            <option>Windows</option>
            <option>Doors & Windows</option>
          </select>

          <textarea className="min-h-40 rounded-2xl border border-yellow-400/20 bg-black/50 px-5 py-4 outline-none focus:border-yellow-400" placeholder="Project details, sizes, quantity, location..." />

          <button className="mt-4 rounded-2xl bg-yellow-400 px-8 py-4 font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-yellow-300">
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}