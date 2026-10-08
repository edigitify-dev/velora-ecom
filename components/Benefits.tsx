import { BadgeCheck, Package, ShieldCheck, Truck } from "lucide-react";
import { benefits } from "@/lib/data";

const icons = { truck: Truck, package: Package, shield: ShieldCheck, badge: BadgeCheck };

export default function Benefits() {
  return (
    <section aria-label="Our promises" className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 md:py-16 lg:px-12">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
        {benefits.map((b) => {
          const Icon = icons[b.icon];
          return (
            <li key={b.title} className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4 lg:justify-center">
              <Icon size={30} strokeWidth={1.1} className="shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-[12px] font-semibold">{b.title}</h3>
                <p className="mt-0.5 text-[11px] text-muted">{b.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
