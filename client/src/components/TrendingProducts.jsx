import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const products = [
  { id: 1, name: "iPhone 15", price: "₹79,999" },
  { id: 2, name: "Smart Watch", price: "₹1,999" },
  { id: 3, name: "Bluetooth Speaker", price: "₹999" },
  { id: 4, name: "Laptop", price: "₹44,999" },
  { id: 5, name: "TV", price: "₹29,999" },
];

function TrendingProducts() {
  return (
    <section className="bg-white py-6 px-4 mt-4 shadow rounded">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        🔥 Trending Products
      </h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{ delay: 2000, reverseDirection: false }}
        modules={[Autoplay]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="p-4 bg-gray-100 rounded text-center">
              <div className="h-32 bg-gray-300 mb-2 rounded"></div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TrendingProducts;
