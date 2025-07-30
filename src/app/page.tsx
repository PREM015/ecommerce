"use client";
import Image from "next/image";
import Link from "next/link";
import Herosection from "@/components/section/Herosection";
import CategorySection from "@/components/section/CategorySection";

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
    </main>
  );
}
