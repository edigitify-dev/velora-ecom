"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cartActions, useCart } from "@/lib/cart";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav
        aria-label="Primary"
        className="mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-20 md:px-8 lg:px-12"
      >
        <Link
          href="/"
          className="font-serif text-[26px] font-normal leading-none tracking-[0.02em] md:text-[30px]"
          aria-label="VÉLORA home"
        >
          VÉLORA
        </Link>

        <ul className="hidden items-center gap-10 text-[13px] lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="relative py-1 transition-opacity hover:opacity-70 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="col-start-3 flex items-center justify-end gap-4 md:gap-5">
          <button type="button" aria-label="Search" className="hidden transition-opacity hover:opacity-60 sm:block">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button type="button" aria-label="Account" className="hidden transition-opacity hover:opacity-60 sm:block">
            <User size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Open bag, ${count} ${count === 1 ? "item" : "items"}`}
            onClick={() => cartActions.open()}
            className="relative transition-opacity hover:opacity-60"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-ink px-1 text-[8px] font-medium text-white">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="animate-fade-in border-t border-line bg-cream px-5 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-line">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-serif text-2xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-6 text-sm text-muted">
            <button type="button" className="flex items-center gap-2">
              <Search size={16} strokeWidth={1.5} /> Search
            </button>
            <button type="button" className="flex items-center gap-2">
              <User size={16} strokeWidth={1.5} /> Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
