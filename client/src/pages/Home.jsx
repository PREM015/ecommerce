import React from "react";
import TrendingProducts from "../components/TrendingProducts";

function Home() {
  return (
    <div className="min-h-screen bg-zinc-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <TrendingProducts />

        {/* You can add more like: <ProductGrid />, <Categories /> etc. */}
      </div>
    </div>
  );
}

export default Home;
