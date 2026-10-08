import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  arrow?: boolean;
  className?: string;
};

const variants = {
  solid: "bg-ink text-white border border-ink hover:bg-[#2a2a2a]",
  outline: "border border-ink/70 text-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink border border-white hover:bg-cream",
};

export default function Button({ href, children, variant = "solid", arrow, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-11 items-center gap-2 rounded-[6px] px-5 text-[12px] font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight
          size={14}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
