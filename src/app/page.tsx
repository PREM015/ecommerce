"use client";

import Herosection from "@/components/section/Herosection";
import CategorySection from "@/components/section/CategorySection";
import FeaturedProductsSection from "@/components/section/FeaturedProducts";
import Trendingsection from "@/components/section/Trendingsection";
import NewArrivals from "@/components/section/NewArrivals";
import Chatbox from "@/components/ui/Chatbox";
import BrandsShowcase from "@/components/section/BrandsShowcase";


export default function Home() {
  return (
    <main className="w-full">
      {/* ✅ Hero Section */}
      <section id="home">
        <Herosection />
      </section>

      {/* ✅ Category Section */}
      <section id="categories">
        <CategorySection />
      </section>
      <section id="featured">
        <FeaturedProductsSection />
      </section>
      <section id="featured">
        <Trendingsection />
      </section>
      <section id="featured">
        <NewArrivals />
      </section>
      <section id="featured">
        <BrandsShowcase/>
      </section>
       <Chatbox />
    </main>
  );
}
