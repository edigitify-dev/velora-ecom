import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";

export default function CategoryCards() {
  return (
    <section aria-label="Shop by category" className="mx-auto max-w-[1440px] px-5 pt-4 md:px-8 md:pt-5 lg:px-12">
      <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0">
        {categories.map((cat) => (
          <li
            key={cat.id}
            id={cat.id}
            className="min-w-[82%] snap-start scroll-mt-24 sm:min-w-[60%] md:min-w-0"
          >
            <Link
              href={`#${cat.id}`}
              className="group relative block aspect-[3/2] overflow-hidden rounded-[10px] bg-soft"
            >
              <Image
                src={cat.image}
                alt={cat.alt}
                fill
                sizes="(min-width: 768px) 33vw, 82vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ objectPosition: cat.objectPosition }}
              />
              {cat.tint && <div className="absolute inset-0 bg-black/[0.12]" aria-hidden="true" />}

              <div className="absolute left-5 top-5 text-white md:left-6 md:top-6">
                <h2 className="font-serif text-[34px] font-normal leading-none md:text-4xl">{cat.title}</h2>
                <p className="mt-3 text-[11px] leading-snug text-white/85 md:text-xs">
                  {cat.lines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              <span className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:translate-x-1 md:bottom-6 md:left-6">
                <ArrowRight size={16} strokeWidth={1.5} />
                <span className="sr-only">Shop {cat.title}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
