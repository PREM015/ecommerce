"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/ui/ProductCard";
import SkeletonProductCard from "@/components/ui/SkeletonProductCard";
import { Product } from "@prisma/client"; // directly from prisma types

const categories = [
  { name: "Clothing" },
  { name: "Electronics" },
  { name: "Groceries" },
  { name: "Footwear" },
  { name: "Accessories" },
  { name: "Beauty" },
  { name: "Home Appliances" },
];

const brands = [
  { name: "Nike" },
  { name: "Zara" },
  { name: "Samsung" },
  { name: "Apple" },
  { name: "Sony" },
  { name: "LG" },
  { name: "Dell" },
  { name: "HP" },
  { name: "Nestle" },
  { name: "Unilever" },
];

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/product?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Category filter */}
      <select
        className="border p-2 rounded"
        value={searchParams.get("category") || ""}
        onChange={(e) => setFilter("category", e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* Brand filter */}
      <select
        className="border p-2 rounded"
        value={searchParams.get("brand") || ""}
        onChange={(e) => setFilter("brand", e.target.value)}
      >
        <option value="">All Brands</option>
        {brands.map((brand) => (
          <option key={brand.name} value={brand.name}>
            {brand.name}
          </option>
        ))}
      </select>

      {/* Search bar */}
      <input
        type="text"
        className="border p-2 rounded flex-1"
        placeholder="Search products..."
        defaultValue={searchParams.get("q") || ""}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setFilter("q", (e.target as HTMLInputElement).value);
          }
        }}
      />
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const query = new URLSearchParams(searchParams.toString()).toString();
        const res = await fetch(`/api/products?${query}`, {
          cache: "no-store", // always fetch latest
        });
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("❌ Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonProductCard key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            ...product,
            image: product.image || "/images/placeholder.png",
          }}
        />
      ))}
    </div>
  );
};

const ProductPage = () => {
  return (
    <section className="px-4 py-8 md:px-8 lg:px-16">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <Filters />
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList />
      </Suspense>
    </section>
  );
};

export default ProductPage;
