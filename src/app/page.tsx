"use client";

import HeroSection from "@/components/section/HeroSection";
import CategorySection from "@/components/section/CategorySection";
import FeaturedProductsSection from "@/components/section/FeaturedProducts";
import TrendingSection from "@/components/section/TrendingSection";
import NewArrivals from "@/components/section/NewArrivals";
import BrandsShowcase from "@/components/section/BrandsShowcase";
import Newsletter from "@/components/section/Newsletter";
import Chatbox from "@/components/ui/Chatbox";

export default function Home() {
  return (
    <main className="w-full">
      <section id="home">
        <HeroSection />
      </section>

      <section id="categories">
        <CategorySection />
      </section>

      <section id="featured-products">
        <FeaturedProductsSection />
      </section>

      <section id="trending">
        <TrendingSection />
      </section>

      <section id="new-arrivals">
        <NewArrivals />
      </section>

      <section id="brands">
        <BrandsShowcase />
      </section>

      <section id="newsletter">
        <Newsletter />
      </section>

      <Chatbox />
    </main>
  );
}
