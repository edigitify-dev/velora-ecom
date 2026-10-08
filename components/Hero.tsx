import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft lg:h-[640px]" aria-label="Introduction">
      <div className="relative z-10 mx-auto h-full max-w-[1440px]">
        <div className="flex h-full flex-col justify-center px-5 pb-10 pt-28 md:px-8 lg:w-[52%] lg:px-12 lg:pb-24 lg:pt-24">
          <h1
            className="animate-fade-up font-serif text-[52px] font-normal leading-[0.98] tracking-[-0.01em] sm:text-7xl xl:text-[96px] 2xl:text-[104px]"
          >
            <span className="block">WEAR</span>
            <span className="block whitespace-nowrap">YOUR STORY</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-sm text-[14px] leading-relaxed text-muted md:mt-8"
            style={{ animationDelay: "150ms" }}
          >
            Modern essentials for a bolder, brighter you.
            <br />
            Timeless designs. Everyday comfort.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "280ms" }}
          >
            <Button href="#men" arrow>
              Shop Men
            </Button>
            <Button href="#women" variant="outline" className="bg-cream/40">
              Shop Women
            </Button>
          </div>

          <div
            className="animate-fade-up mt-10 hidden items-center gap-5 text-[12px] lg:absolute lg:bottom-12 lg:flex"
            style={{ animationDelay: "420ms" }}
            aria-hidden="true"
          >
            <span>01</span>
            <span className="h-px w-40 bg-ink/70" />
            <ArrowRight size={14} strokeWidth={1.5} />
            <ArrowRight size={14} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="animate-fade-in relative h-[460px] md:h-[600px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[58%] lg:[mask-image:linear-gradient(to_right,transparent,black_16%)]">
        <Image
          src="/images/hero.png"
          alt="Male model in an olive oversized tee and cream trousers, seated against a sunlit wall"
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-[60%_20%]"
        />
        <div
          className="pointer-events-none absolute right-[5%] top-[22%] -rotate-3 text-right font-script text-[32px] leading-[0.95] text-[#f6f2ea] [text-shadow:0_1px_10px_rgba(0,0,0,0.25)] md:text-[44px]"
          aria-hidden="true"
        >
          <p>Good</p>
          <p>Outfits</p>
          <p>Better</p>
          <p>Days</p>
          <svg viewBox="0 0 120 20" className="ml-auto mt-1 w-24 text-[#f6f2ea]/80" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M2 12c30-8 70-8 112-2m0 0-6-4m6 4-6 5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
