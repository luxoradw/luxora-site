"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed left-0 right-0 top-0 z-[9999] border-b border-yellow-400/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/">
          <img
            src="/nav-logo.png"
            alt="Luxora"
            className="h-[38px] w-auto object-contain"
          />
        </a>
<button
  onClick={() => setOpen(!open)}
  className="rounded-xl border border-yellow-400/40 px-4 py-2 text-xl text-yellow-400 md:hidden"
>
  ☰
</button>
        <div className="hidden items-center gap-10 text-sm uppercase tracking-[0.22em] text-neutral-300 md:flex">
          <a href="/" className="transition hover:text-yellow-400">
            Home
          </a>

<a
  href="/products"
  className="transition hover:text-yellow-400"
>
  Products
</a>
<div className="group relative">
  <span className="cursor-pointer transition hover:text-yellow-400">
    About
  </span>

  <div className="invisible absolute left-1/2 top-full mt-4 w-[320px] -translate-x-1/2 rounded-2xl border border-yellow-400/20 bg-black/50 p-6 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
    <div className="space-y-3 text-sm tracking-wide text-neutral-300">
      <a href="/about" className="block transition hover:text-yellow-400">
        About Luxora
      </a>

      <a href="/about/team" className="block transition hover:text-yellow-400">
        Our Team
      </a>

      <a href="/about/quality" className="block transition hover:text-yellow-400">
        Quality & Performance
      </a>

      <a href="/about/windows" className="block transition hover:text-yellow-400">
        Window Systems
      </a>

      <a href="/about/doors" className="block transition hover:text-yellow-400">
        Door Systems
      </a>
    </div>
  </div>
</div>

          <a
            href="mailto:Luxora.dw@gmail.com"
            className="rounded-xl border border-yellow-400/60 px-5 py-2 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Contact
          </a>
        </div>
      </div>
{open && (
  <div className="border-t border-yellow-400/10 bg-black px-6 py-6 md:hidden">
    <div className="space-y-6 text-sm uppercase tracking-[0.22em] text-neutral-300">
      <a href="/" className="block text-yellow-400">
        Home
      </a>

      <a href="/products" className="block transition hover:text-yellow-400">
        Products
      </a>

      <a href="/about" className="block transition hover:text-yellow-400">
        About
      </a>

      <a
        href="mailto:Luxoradw@gmail.com"
        className="block rounded-xl border border-yellow-400/60 px-5 py-3 text-center text-yellow-400"
      >
        Contact
      </a>
    </div>
  </div>
)}
    </nav>
  );
}