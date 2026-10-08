import { newArrivals } from "@/lib/data";
import ProductCard from "./ProductCard";
import Button from "./Button";

export default function NewArrivals() {
  return (
    <section
      id="new-arrivals"
      aria-labelledby="new-arrivals-heading"
      className="mx-auto max-w-[1440px] scroll-mt-24 px-5 pt-10 md:px-8 md:pt-16 lg:px-12 lg:pt-20"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,3fr)] lg:gap-10">
        <div className="flex flex-col justify-center">
          <h2 id="new-arrivals-heading" className="font-serif text-3xl font-normal md:text-4xl">
            New Arrivals
          </h2>
          <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-muted">
            Fresh drops. Modern fits. Elevated everyday wear.
          </p>
          <div className="mt-6">
            <Button href="#">View All</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-4">
          {newArrivals.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 18vw, 50vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
