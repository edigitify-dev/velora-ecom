import Link from "next/link";
import { footerColumns } from "@/lib/data";
import Newsletter from "./Newsletter";
import { InstagramIcon, PinterestIcon, XIcon, YoutubeIcon } from "./SocialIcons";

const socials = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "X", Icon: XIcon },
  { label: "Pinterest", Icon: PinterestIcon },
  { label: "YouTube", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 md:px-8 lg:px-12 lg:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr_0.8fr_1.6fr] lg:gap-8">
          <div>
            <p className="font-serif text-[30px] leading-none tracking-[0.02em]">VÉLORA</p>
            <p className="mt-4 text-[12px] text-white/70">Modern fashion for everyday people.</p>
            <ul className="mt-8 flex gap-5">
              {socials.map(({ label, Icon }) => (
                <li key={label}>
                  <Link href="#" aria-label={label} className="block text-white/80 transition-colors hover:text-white">
                    <Icon className="h-[18px] w-[18px]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[12px] font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-[11.5px] text-white/65 transition-colors hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-[12px] font-semibold">Join Our Community</h3>
            <p className="mt-4 text-[11.5px] text-white/65">Get exclusive offers, new drops and more.</p>
            <Newsletter />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-[11px] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2024 VÉLORA. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
              <li key={l}>
                <Link href="#" className="transition-colors hover:text-white">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
