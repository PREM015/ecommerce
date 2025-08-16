"use client";

// import Link from "next/link";
import HeroSection from "@/components/section/HeroSection";
import CategorySection from "@/components/section/CategorySection";
import FeaturedProductsSection from "@/components/section/FeaturedProducts";
import TrendingSection from "@/components/section/Trendingsection";
import NewArrivals from "@/components/section/NewArrivals";
import BrandsShowcase from "@/components/section/BrandsShowcase";
import Newsletter from "@/components/section/Newsletter";
import Chatbox from "@/components/ui/Chatbox";


export default function Home() {
  return (
    <main className="w-full">
      {/* ✅ Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* ✅ Category Section */}
      <section id="categories">
        <CategorySection />
      </section>

      {/* ✅ Featured Products */}
      <section id="featured-products">
        <FeaturedProductsSection />
      </section>

      {/* ✅ Trending Products */}
      <section id="trending">
        <TrendingSection />
      </section>

      {/* ✅ New Arrivals */}
      <section id="new-arrivals">
        <NewArrivals />
      </section>

      {/* ✅ Brands */}
      <section id="brands">
        <BrandsShowcase />
      </section>

      {/* ✅ Newsletter */}
      <section id="newsletter">
        <Newsletter />
      </section>

      {/* ✅ AI Chatbox */}
      <Chatbox />
    </main>
  );
}





