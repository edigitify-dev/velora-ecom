import Image from "next/image";
import Button from "./Button";

export default function CollectionBanner() {
  return (
    <section
      id="collection"
      aria-label="New collection"
      className="mx-auto max-w-[1440px] scroll-mt-24 px-5 pt-16 md:px-8 md:pt-24 lg:px-12 lg:pt-28"
    >
      <div className="relative h-[440px] overflow-hidden rounded-[10px] bg-[#8e9aa3] sm:h-[400px] lg:aspect-[3.38/1] lg:h-auto">
        <Image
          src="/images/collection.png"
          alt="Woman with wavy auburn hair and sunglasses looking skyward in a cream blazer"
          fill
          sizes="(min-width: 1440px) 1344px, 100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-black/[0.08] sm:bg-transparent" aria-hidden="true" />

        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white md:left-12 lg:left-14">
          <h2 className="font-serif text-5xl font-normal leading-[1.02] md:text-6xl lg:text-[68px]">
            <span className="block">New</span>
            <span className="block">Collection</span>
          </h2>
          <p className="mt-4 text-[13px] leading-snug text-white/85">
            Minimal looks.
            <br />
            Maximum impact.
          </p>
          <Button href="#" arrow className="mt-6">
            Shop Now
          </Button>
        </div>

        <div
          className="pointer-events-none absolute right-[6%] top-1/2 hidden -translate-y-1/2 -rotate-3 font-script text-5xl leading-[0.95] text-white/90 md:block lg:text-6xl"
          aria-hidden="true"
        >
          <p>Made</p>
          <p>for real</p>
          <p>life</p>
          <svg viewBox="0 0 120 20" className="mt-2 w-28 text-white/70" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M2 14c30-8 70-8 112-2m0 0-6-4m6 4-6 5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
