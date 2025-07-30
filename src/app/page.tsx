"use client";
import Image from "next/image";
import Link from "next/link";
import Herosection from "@/components/section/Herosection";
import CategorySection from "@/components/section/CategorySection";
import FeaturedProductsSection from "@/components/section/FeaturedProducts";


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
    </main>
  );
}
