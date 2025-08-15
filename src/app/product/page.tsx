'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product } from '@/types/product';
import ProductCard from '@/components/ui/ProductCard';
import SkeletonProductCard from '@/components/ui/SkeletonProductCard';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const query = new URLSearchParams(searchParams.toString()).toString();
        const res = await fetch(`/api/products?${query}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products', err);
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
            id: Number(product.id),
            image: product.imageUrl,
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
      {/* ✅ Wrap in Suspense */}
      <Suspense fallback={<p>Loading filters...</p>}>
        <ProductList />
      </Suspense>
    </section>
  );
};

export default ProductPage;
