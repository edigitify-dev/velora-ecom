"use client";

import { useSyncExternalStore } from "react";

export type CartItem = {
  key: string; // id + colour
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string;
  color?: string;
  qty: number;
};

export type NewCartItem = Omit<CartItem, "key" | "qty">;

type State = { items: CartItem[]; open: boolean };

const STORAGE_KEY = "velora-cart-v1";
const EMPTY: State = { items: [], open: false };

let state: State = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function readStorage(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as CartItem[]) : [];
  } catch {
    return [];
  }
}

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  const items = readStorage();
  if (items.length) state = { items, open: false };
}

function emit() {
  listeners.forEach((l) => l());
}

function commit(next: State) {
  state = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next.items));
  } catch {
    /* storage unavailable — cart still works for this session */
  }
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) return;
    state = { ...state, items: readStorage() };
    emit();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): State {
  load();
  return state;
}

function getServerSnapshot(): State {
  return EMPTY;
}

export const cartActions = {
  add(item: NewCartItem, qty = 1) {
    load();
    const key = `${item.id}:${item.color ?? ""}`;
    const existing = state.items.find((i) => i.key === key);
    const items = existing
      ? state.items.map((i) => (i.key === key ? { ...i, qty: Math.min(i.qty + qty, 10) } : i))
      : [...state.items, { ...item, key, qty }];
    commit({ items, open: true });
  },
  setQty(key: string, qty: number) {
    load();
    const items =
      qty <= 0
        ? state.items.filter((i) => i.key !== key)
        : state.items.map((i) => (i.key === key ? { ...i, qty: Math.min(qty, 10) } : i));
    commit({ ...state, items });
  },
  remove(key: string) {
    load();
    commit({ ...state, items: state.items.filter((i) => i.key !== key) });
  },
  clear() {
    load();
    commit({ ...state, items: [] });
  },
  open() {
    load();
    commit({ ...state, open: true });
  },
  close() {
    load();
    commit({ ...state, open: false });
  },
};

export function useCart() {
  const { items, open } = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);
  return { items, open, count, subtotal };
}
