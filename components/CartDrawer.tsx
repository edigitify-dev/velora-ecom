"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { cartActions, useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/data";

const FREE_SHIPPING_FROM = 999;

export default function CartDrawer() {
  const { items, open, count, subtotal } = useCart();
  const [ordered, setOrdered] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOrdered(false);
    cartActions.close();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOrdered(false);
        cartActions.close();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const remaining = Math.max(FREE_SHIPPING_FROM - subtotal, 0);
  const progress = Math.min((subtotal / FREE_SHIPPING_FROM) * 100, 100);
  const showThanks = ordered && items.length === 0;

  return (
    <>
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[420px] flex-col bg-cream shadow-[0_0_40px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-2xl">
            Your Bag{count > 0 && <span className="ml-2 text-sm text-muted">({count})</span>}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close bag"
            className="transition-opacity hover:opacity-60"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <ShoppingBag size={36} strokeWidth={1} aria-hidden="true" />
            <p className="font-serif text-2xl">
              {showThanks ? "Thank you for your order" : "Your bag is empty"}
            </p>
            <p className="max-w-xs text-[13px] text-muted">
              {showThanks
                ? "This is a demo checkout — no payment was taken."
                : "Add a few essentials and they will show up here."}
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-2 h-11 rounded-[6px] border border-ink/70 px-6 text-[12px] font-medium transition-colors hover:bg-ink hover:text-white"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="border-b border-line px-6 py-4">
              <p className="text-[12px]">
                {remaining > 0
                  ? `Add ${formatPrice(remaining)} more for free shipping`
                  : "You’ve unlocked free shipping"}
              </p>
              <div className="mt-2 h-[3px] w-full bg-line">
                <div
                  className="h-full bg-forest transition-[width] duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[6px] bg-soft">
                    <Image src={item.image} alt={item.alt} fill sizes="80px" className="object-cover" />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-[13px] font-medium">{item.name}</h3>
                        {item.color && (
                          <span
                            className="mt-1.5 block h-3 w-3 rounded-full border border-black/10"
                            style={{ backgroundColor: item.color }}
                            aria-label="Selected colour"
                          />
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => cartActions.remove(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-muted transition-colors hover:text-ink"
                      >
                        <Trash2 size={15} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center rounded-[6px] border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => cartActions.setQty(item.key, item.qty - 1)}
                          className="flex h-8 w-8 items-center justify-center transition-colors hover:bg-soft"
                        >
                          <Minus size={13} strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-[12px]" aria-live="polite">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => cartActions.setQty(item.key, item.qty + 1)}
                          className="flex h-8 w-8 items-center justify-center transition-colors hover:bg-soft"
                        >
                          <Plus size={13} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-[13px] font-semibold">{formatPrice(item.price * item.qty)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-line px-6 py-5">
              <div className="flex items-center justify-between text-[13px]">
                <span>Subtotal</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-[11px] text-muted">
                {remaining > 0 ? "Shipping calculated at checkout." : "Free shipping applied."}
              </p>
              <button
                type="button"
                onClick={() => {
                  cartActions.clear();
                  setOrdered(true);
                }}
                className="mt-4 h-12 w-full rounded-[6px] bg-ink text-[12px] font-medium tracking-wide text-white transition-colors hover:bg-[#2a2a2a]"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={close}
                className="mt-2 h-10 w-full text-[12px] text-muted transition-colors hover:text-ink"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
