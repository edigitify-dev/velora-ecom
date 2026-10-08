"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className="mt-5"
    >
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setDone(false);
          }}
          placeholder="Your email"
          className="h-11 min-w-0 flex-1 rounded-[6px] border border-white bg-white px-4 text-[12px] text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] border border-white/30 text-white transition-colors hover:bg-white hover:text-ink"
        >
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>
      </div>
      <p className="mt-2 h-4 text-[11px] text-white/60" role="status">
        {done ? "Thank you — you’re on the list." : ""}
      </p>
    </form>
  );
}
