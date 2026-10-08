"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { formatPrice, type Product } from "@/lib/data";
import { cartActions } from "@/lib/cart";

type Props = {
  product: Product;
  aspect?: string;
  sizes?: string;
};

export default function ProductCard({
  product,
  aspect = "aspect-[5/6]",
  sizes = "(min-width: 1024px) 20vw, 50vw",
}: Props) {
  const [liked, setLiked] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const addToBag = () => {
    cartActions.add({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      alt: product.alt,
      color: product.swatches?.[colorIndex],
    });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <article className="group">
      <div className={`relative overflow-hidden rounded-[8px] bg-soft ${aspect}`}>
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <button
          type="button"
          aria-pressed={liked}
          aria-label={liked ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          onClick={() => setLiked((v) => !v)}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center text-ink transition-transform hover:scale-110"
        >
          <Heart size={16} strokeWidth={1.5} className={liked ? "fill-ink" : "fill-transparent"} />
        </button>

        <button
          type="button"
          onClick={addToBag}
          aria-label={`Add ${product.name} to bag`}
          className="absolute inset-x-3 bottom-3 h-10 rounded-[6px] bg-white/95 text-[12px] font-medium text-ink transition-all duration-300 hover:bg-ink hover:text-white focus-visible:translate-y-0 focus-visible:opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          {justAdded ? "Added ✓" : "Add to Bag"}
        </button>
      </div>

      <div className="mt-3">
        <h3 className="text-[12px] font-medium">{product.name}</h3>
        <p className="mt-1 text-[12px] font-semibold">{formatPrice(product.price)}</p>
        {product.swatches && (
          <ul className="mt-2.5 flex gap-1.5" aria-label="Choose colour">
            {product.swatches.map((c, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setColorIndex(i)}
                  aria-label={`Colour ${i + 1}`}
                  aria-pressed={colorIndex === i}
                  className={`block h-3 w-3 rounded-full border border-black/10 outline-offset-2 transition-shadow ${
                    colorIndex === i ? "ring-1 ring-ink ring-offset-2 ring-offset-cream" : ""
                  }`}
                  style={{ backgroundColor: c }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
