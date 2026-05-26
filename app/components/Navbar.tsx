"use client";

import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

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

          <a href="/products" className="transition hover:text-yellow-400">
            Products
          </a>

          <a href="/about" className="transition hover:text-yellow-400">
            About
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-yellow-400/60 px-5 py-2 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Contact
          </a>

          <a
            href="https://instagram.com/luxora.doors_windows/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 transition hover:text-white"
            aria-label="Luxora Instagram"
          >
            <FaInstagram size={20} />
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
              href="/contact"
              className="block rounded-xl border border-yellow-400/60 px-5 py-3 text-center text-yellow-400"
            >
              Contact
            </a>

            <a
              href="https://instagram.com/luxora.doors_windows/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center text-yellow-400 transition hover:text-white"
              aria-label="Luxora Instagram"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}