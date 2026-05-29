"use client";

import { useState } from "react";

export default function QuotePage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      product: (form.elements.namedItem("product") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      form.reset();
    } else {
      alert("Email did not send. Check terminal for error.");
    }
  }

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

        {sent && (
          <p className="mb-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-center text-yellow-300">
            Thank you. Your quote request has been sent.
          </p>
        )}

        <form onSubmit={handleSubmit} className="grid gap-5">
          <input
            name="name"
            required
            className="rounded-2xl border border-yellow-400/20 bg-black/50 px-5 py-4 outline-none focus:border-yellow-400"
            placeholder="Full Name"
          />

          <input
            name="email"
            type="email"
            required
            className="rounded-2xl border border-yellow-400/20 bg-black/50 px-5 py-4 outline-none focus:border-yellow-400"
            placeholder="Email"
          />

          <input
            name="phone"
            required
            className="rounded-2xl border border-yellow-400/20 bg-black/50 px-5 py-4 outline-none focus:border-yellow-400"
            placeholder="Phone Number"
          />

          <select
            name="product"
            required
            className="rounded-2xl border border-yellow-400/20 bg-black/50 px-5 py-4 outline-none focus:border-yellow-400"
          >
            <option value="">Project Type</option>
            <option value="Doors">Doors</option>
            <option value="Windows">Windows</option>
            <option value="Doors & Windows">Doors & Windows</option>
          </select>

          <textarea
            name="message"
            required
            className="min-h-40 rounded-2xl border border-yellow-400/20 bg-black/50 px-5 py-4 outline-none focus:border-yellow-400"
            placeholder="Project details, sizes, quantity, location..."
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 rounded-2xl bg-yellow-400 px-8 py-4 font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-yellow-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </section>
    </main>
  );
}