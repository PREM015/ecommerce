import React from "react";
import HeroSlider from "../components/HeroSlider";
import CategoryBar from "../components/CategoryBar";
import TrendingProducts from "../components/TrendingProducts";

function Home() {
  return (
    <div className="flex flex-col gap-4">
      <CategoryBar />
      <HeroSlider />
      <TrendingProducts />
    </div>
  );
}

export default Home;
