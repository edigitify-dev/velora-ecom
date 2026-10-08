import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Sacramento } from "next/font/google";
import CartDrawer from "@/components/CartDrawer";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--f-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--f-sans",
  display: "swap",
});

const script = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--f-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VÉLORA — Modern fashion for everyday people",
  description:
    "Modern essentials for a bolder, brighter you. Timeless designs. Everyday comfort.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        {children}
        <CartDrawer />
      </body>
    </html>
  );
}
