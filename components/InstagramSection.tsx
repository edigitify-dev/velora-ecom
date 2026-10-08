import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { instagramPosts } from "@/lib/data";

export default function InstagramSection() {
  return (
    <section
      aria-labelledby="instagram-heading"
      className="mx-auto max-w-[1440px] px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24 lg:px-12"
    >
      <div className="flex items-end justify-between lg:justify-end">
        <div className="lg:hidden">
          <h2 className="font-serif text-3xl font-normal">@velora.in</h2>
          <p className="mt-1 text-[12px] text-muted">Tag us to get featured</p>
        </div>
        <Link
          href="#"
          className="group flex items-center gap-2 text-[12px] font-medium transition-opacity hover:opacity-60"
        >
          Follow Us
          <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-5 lg:mt-3 lg:grid lg:grid-cols-[170px_1fr] lg:gap-6 xl:grid-cols-[200px_1fr]">
        <div className="hidden lg:block lg:pt-6">
          <h2 id="instagram-heading" className="font-serif text-4xl font-normal leading-none">
            @velora.in
          </h2>
          <p className="mt-3 text-[12px] text-muted">Tag us to get featured</p>
        </div>

        <ul className="no-scrollbar -mx-5 flex snap-x gap-2.5 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-5 md:gap-2.5 md:overflow-visible md:px-0">
          {instagramPosts.map((post, i) => (
            <li key={i} className="min-w-[42%] snap-start sm:min-w-[30%] md:min-w-0">
              <Link href="#" className="group relative block aspect-square overflow-hidden rounded-[8px] bg-soft">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 1024px) 15vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
