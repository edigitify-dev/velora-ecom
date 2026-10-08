import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import ProductSection from "@/components/ProductSection";
import CollectionBanner from "@/components/CollectionBanner";
import Benefits from "@/components/Benefits";
import NewArrivals from "@/components/NewArrivals";
import Sustainability from "@/components/Sustainability";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";
import { bestsellers } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <CategoryCards />
          <ProductSection title="Bestsellers" products={bestsellers} />
          <CollectionBanner />
          <Benefits />
          <NewArrivals />
          <Sustainability />
          <InstagramSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
