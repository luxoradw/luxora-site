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

          <div className="group relative">
            <span className="cursor-pointer text-yellow-400">Products</span>

            <div className="invisible absolute left-1/2 top-full mt-4 w-[560px] -translate-x-1/2 rounded-2xl border border-yellow-400/20 bg-black/50 p-8 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-12 text-sm tracking-wide">
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-400">
                    Aluminum Door
                  </p>
                  <div className="space-y-2 text-neutral-300">
                    <a href="/doors/folding" className="block transition hover:text-yellow-400">Folding Door</a>
                    <a href="/doors/sliding" className="block transition hover:text-yellow-400">Sliding Door</a>
                    <a href="/doors/pivot" className="block transition hover:text-yellow-400">Pivot Door</a>
                    <a href="/doors/casement" className="block transition hover:text-yellow-400">Casement Door</a>
                    <a href="/doors/barn" className="block transition hover:text-yellow-400">Barn Door</a>
                  </div>
                </div>

                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-400">
                    Aluminum Window
                  </p>
                  <div className="space-y-2 text-neutral-300">
                    <a href="/windows/folding" className="block transition hover:text-yellow-400">Folding Window</a>
                    <a href="/windows/fixed" className="block transition hover:text-yellow-400">Fixed Window</a>
                    <a href="/windows/sliding" className="block transition hover:text-yellow-400">Sliding Window</a>
                    <a href="/windows/casement" className="block transition hover:text-yellow-400">Casement Window</a>
                    <a href="/windows/tilt-turn" className="block transition hover:text-yellow-400">Tilt & Turn</a>
                    <a href="/windows/double-hung" className="block transition hover:text-yellow-400">Double Hung</a>
                    <a href="/windows/gas-strut" className="block transition hover:text-yellow-400">Gas Strut Window</a>
                    <a href="/windows/skylight" className="block transition hover:text-yellow-400">Skylight</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

      <div className="space-y-3">
        <p className="text-xs tracking-[0.3em] text-yellow-400">
          Doors
        </p>

        <a href="/doors/folding" className="block">Folding Door</a>
        <a href="/doors/sliding" className="block">Sliding Door</a>
        <a href="/doors/pivot" className="block">Pivot Door</a>
        <a href="/doors/casement" className="block">Casement Door</a>
        <a href="/doors/barn" className="block">Barn Door</a>
      </div>

      <div className="space-y-3">
        <p className="text-xs tracking-[0.3em] text-yellow-400">
          Windows
        </p>

        <a href="/windows/folding" className="block">Folding Window</a>
        <a href="/windows/fixed" className="block">Fixed Window</a>
        <a href="/windows/sliding" className="block">Sliding Window</a>
        <a href="/windows/casement" className="block">Casement Window</a>
        <a href="/windows/tilt-turn" className="block">Tilt & Turn</a>
        <a href="/windows/double-hung" className="block">Double Hung</a>
        <a href="/windows/gas-strut" className="block">Gas Strut Window</a>
        <a href="/windows/skylight" className="block">Skylight</a>
      </div>

      <div className="space-y-3">
        <p className="text-xs tracking-[0.3em] text-yellow-400">
          About
        </p>

        <a href="/about" className="block">About Luxora</a>
        <a href="/about/team" className="block">Team</a>
        <a href="/about/quality" className="block">Quality</a>
        <a href="/about/doors" className="block">Door Systems</a>
        <a href="/about/windows" className="block">Window Systems</a>
      </div>

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