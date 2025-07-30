// src/app/page.tsx
"use client"
import Image from "next/image";
import Link from "next/link";
import Herosection from "@/components/section/Herosection";

export default function Home() {
  return (
     <main className="w-full">
      {/* ✅ Only sections here */}
      <section id="home">
        <Herosection />
      </section>

      {/* ❌ DO NOT include <AboutPage /> here! */}

      
    </main>
  );
}
