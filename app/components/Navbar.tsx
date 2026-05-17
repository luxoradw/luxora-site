"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-[9999] border-b border-yellow-400/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="/">
          <img src="/nav-logo.png" alt="Luxora" className="h-[34px] w-auto" />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-yellow-400/40 px-4 py-2 text-xl text-yellow-400 md:hidden"
        >
          ☰
        </button>

        <div className="hidden items-center gap-10 text-sm uppercase tracking-[0.22em] text-neutral-300 md:flex">
          <a href="/" className="transition hover:text-yellow-400">Home</a>
          <a href="/about" className="transition hover:text-yellow-400">About</a>
          <a href="/about/doors" className="transition hover:text-yellow-400">Door Systems</a>
          <a href="/about/windows" className="transition hover:text-yellow-400">Window Systems</a>
          <a href="mailto:Luxoradw@gmail.com" className="rounded-xl border border-yellow-400/60 px-5 py-2 text-yellow-400 transition hover:bg-yellow-400 hover:text-black">
            Contact
          </a>
        </div>
      </div>

      {open && (
        <div className="border-t border-yellow-400/10 bg-black px-6 py-6 md:hidden">
          <div className="space-y-5 text-sm uppercase tracking-[0.22em] text-neutral-300">
            <a href="/" className="block text-yellow-400" onClick={() => setOpen(false)}>Home</a>
            <a href="/about" className="block" onClick={() => setOpen(false)}>About Luxora</a>
            <a href="/about/team" className="block" onClick={() => setOpen(false)}>Team</a>
            <a href="/about/quality" className="block" onClick={() => setOpen(false)}>Quality</a>
            <a href="/about/doors" className="block" onClick={() => setOpen(false)}>Door Systems</a>
            <a href="/about/windows" className="block" onClick={() => setOpen(false)}>Window Systems</a>

            <div className="pt-4">
              <p className="mb-3 text-xs text-yellow-400">Doors</p>
              <div className="space-y-3 pl-3 normal-case tracking-wide text-neutral-400">
                <a href="/doors/folding" className="block" onClick={() => setOpen(false)}>Folding Door</a>
                <a href="/doors/sliding" className="block" onClick={() => setOpen(false)}>Sliding Door</a>
                <a href="/doors/pivot" className="block" onClick={() => setOpen(false)}>Pivot Door</a>
                <a href="/doors/casement" className="block" onClick={() => setOpen(false)}>Casement Door</a>
                <a href="/doors/barn" className="block" onClick={() => setOpen(false)}>Barn Door</a>
              </div>
            </div>

            <div className="pt-4">
              <p className="mb-3 text-xs text-yellow-400">Windows</p>
              <div className="space-y-3 pl-3 normal-case tracking-wide text-neutral-400">
                <a href="/windows/folding" className="block" onClick={() => setOpen(false)}>Folding Window</a>
                <a href="/windows/fixed" className="block" onClick={() => setOpen(false)}>Fixed Window</a>
                <a href="/windows/sliding" className="block" onClick={() => setOpen(false)}>Sliding Window</a>
                <a href="/windows/casement" className="block" onClick={() => setOpen(false)}>Casement Window</a>
                <a href="/windows/tilt-turn" className="block" onClick={() => setOpen(false)}>Tilt & Turn</a>
                <a href="/windows/double-hung" className="block" onClick={() => setOpen(false)}>Double Hung</a>
                <a href="/windows/gas-strut" className="block" onClick={() => setOpen(false)}>Gas Strut Window</a>
                <a href="/windows/skylight" className="block" onClick={() => setOpen(false)}>Skylight</a>
              </div>
            </div>

            <a
              href="mailto:Luxoradw@gmail.com"
              className="block rounded-xl border border-yellow-400/60 px-5 py-3 text-center text-yellow-400"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}