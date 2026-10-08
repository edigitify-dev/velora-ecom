/**
 * All imagery lives in /public/images. To use your own photography, replace the
 * files with the same names (or change the paths below). Recommended sizes:
 *   hero 1600x1800 · category 900x600 · product 800x1000 · collection 2400x700
 *   thoughtful 1600x900 · instagram 800x800
 */

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string;
  swatches?: string[];
};

export const formatPrice = (value: number) =>
  `₹${value.toLocaleString("en-IN")}`;

export const navLinks = [
  { label: "Men", href: "#men" },
  { label: "Women", href: "#women" },
  { label: "New In", href: "#new-arrivals" },
  { label: "Collections", href: "#collection" },
  { label: "Sale", href: "#bestsellers" },
];

export const categories = [
  {
    id: "men",
    title: "Men",
    lines: ["Everyday staples", "for every story."],
    image: "/images/cat-men.png",
    alt: "Man in a black hoodie against a warm neutral wall",
    objectPosition: "center",
    tint: false,
  },
  {
    id: "women",
    title: "Women",
    lines: ["Styles that", "move with you."],
    image: "/images/cat-women.png",
    alt: "Woman in a cream open shirt and white crop top",
    objectPosition: "center",
    tint: true,
  },
  {
    id: "accessories",
    title: "Accessories",
    lines: ["The finer details."],
    image: "/images/cat-accessories.png",
    alt: "Dark green cap and sunglasses resting on stone",
    objectPosition: "center",
    tint: false,
  },
];

export const bestsellers: Product[] = [
  {
    id: "tee",
    name: "Essential Oversized Tee",
    price: 799,
    image: "/images/best-1.png",
    alt: "Model wearing an olive oversized t-shirt",
    swatches: ["#4b4a38", "#111111", "#ece8de"],
  },
  {
    id: "hoodie",
    name: "Classic Hoodie",
    price: 1499,
    image: "/images/best-2.png",
    alt: "Model wearing a cream classic hoodie",
    swatches: ["#b5b09c", "#4a4a45", "#2f3a33"],
  },
  {
    id: "cargo",
    name: "Utility Cargo Pants",
    price: 1299,
    image: "/images/best-3.png",
    alt: "Black utility cargo pants",
    swatches: ["#e9e6dd", "#111111", "#111111"],
  },
  {
    id: "shirt",
    name: "Relaxed Fit Shirt",
    price: 999,
    image: "/images/best-4.png",
    alt: "Model wearing a white relaxed fit shirt",
    swatches: ["#111111", "#111111", "#111111"],
  },
  {
    id: "jeans",
    name: "Straight Fit Jeans",
    price: 1299,
    image: "/images/best-5.png",
    alt: "Black straight fit jeans",
    swatches: ["#dcd8cd", "#aaa68f", "#b8b3a3"],
  },
];

export const newArrivals: Product[] = [
  {
    id: "polo",
    name: "Textured Polo Tee",
    price: 899,
    image: "/images/new-1.png",
    alt: "Model wearing an olive textured polo tee and sunglasses",
  },
  {
    id: "wide-leg",
    name: "Wide Leg Pants",
    price: 1299,
    image: "/images/new-2.png",
    alt: "Cream wide leg pants",
  },
  {
    id: "linen",
    name: "Linen Blend Shirt",
    price: 1199,
    image: "/images/new-3.png",
    alt: "Model wearing a linen blend shirt",
  },
  {
    id: "crop",
    name: "Crop Top",
    price: 699,
    image: "/images/new-4.png",
    alt: "Model wearing a black crop top and white trousers",
  },
];

export const benefits = [
  { icon: "truck", title: "Free Shipping", text: "On orders above ₹999" },
  { icon: "package", title: "Easy Returns", text: "7-day hassle free returns" },
  { icon: "shield", title: "Secure Payments", text: "100% safe & encrypted" },
  { icon: "badge", title: "Premium Quality", text: "Built to last" },
] as const;

export const instagramPosts = [
  { image: "/images/insta-1.png", alt: "Man in a black tee outdoors" },
  { image: "/images/insta-2.png", alt: "Woman in a white shirt against a warm wall" },
  { image: "/images/insta-3.png", alt: "Person in a cream hoodie seen from behind" },
  { image: "/images/insta-4.png", alt: "Woman in a dark shirt against a stone wall" },
  { image: "/images/insta-5.png", alt: "Dark green backpacks on soft fabric" },
];

export const footerColumns = [
  { title: "Shop", links: ["Men", "Women", "Accessories", "New In", "Sale"] },
  { title: "Company", links: ["About Us", "Sustainability", "Careers", "Blog", "Contact"] },
  {
    title: "Help",
    links: ["Track Order", "Returns & Exchanges", "Shipping", "Size Guide", "FAQs"],
  },
];
