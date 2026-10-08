import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/data";

export default function ProductSection({ title, products }: { title: string; products: Product[] }) {
  return (
    <section
      id={title.toLowerCase()}
      aria-labelledby="bestsellers-heading"
      className="mx-auto max-w-[1440px] scroll-mt-24 px-5 pt-16 md:px-8 md:pt-24 lg:px-12 lg:pt-28"
    >
      <div className="flex items-end justify-between">
        <h2 id="bestsellers-heading" className="font-serif text-3xl font-normal md:text-4xl">
          {title}
        </h2>
        <Link
          href="#"
          className="group flex items-center gap-2 text-[12px] font-medium transition-opacity hover:opacity-60"
        >
          View All
          <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-8 md:mt-8 md:grid-cols-3 md:gap-x-4 lg:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
