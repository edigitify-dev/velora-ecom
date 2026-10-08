import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";
import Button from "./Button";

export default function Sustainability() {
  return (
    <section
      aria-label="Thoughtful fashion"
      className="mx-auto max-w-[1440px] px-5 pt-16 md:px-8 md:pt-24 lg:px-12 lg:pt-28"
    >
      <div className="grid gap-4 lg:grid-cols-[1.9fr_1fr]">
        <div className="relative min-h-[360px] overflow-hidden rounded-[10px] bg-[#16190f] lg:min-h-[420px]">
          <Image
            src="/images/thoughtful.png"
            alt="Soft white textured fabric draped among green leaves"
            fill
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white md:left-12">
            <h2 className="font-serif text-5xl font-normal leading-[1.02] md:text-6xl">
              <span className="block">Thoughtful</span>
              <span className="block">Fashion</span>
            </h2>
            <p className="mt-5 text-[13px] text-white/90">Better materials. A brighter tomorrow.</p>
            <Button href="#" variant="light" arrow className="mt-6">
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[10px] bg-soft p-8 md:p-10 lg:p-12">
          <Sprout size={40} strokeWidth={1} aria-hidden="true" />
          <h2 className="mt-8 font-serif text-2xl font-normal uppercase leading-snug tracking-wide">
            Sustainable
            <br />
            Choices
          </h2>
          <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-muted">
            We believe in fashion that respects people and the planet. From responsible sourcing to
            long-lasting designs, every piece is a step towards a better tomorrow.
          </p>
          <Link
            href="#"
            className="group mt-8 inline-flex items-center gap-2 text-[12px] font-semibold transition-opacity hover:opacity-60"
          >
            Our Impact
            <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
