import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// 🖼️ Import product images
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const products = [
  { id: 1, name: "iPhone 15", price: "₹79,999", image: img1 },
  { id: 2, name: "Smart Watch", price: "₹1,999", image: img2 },
  { id: 3, name: "Bluetooth Speaker", price: "₹999", image: img3 },
  { id: 4, name: "Laptop", price: "₹44,999", image: img1 },
  { id: 5, name: "TV", price: "₹29,999", image: img2 },
];

function TrendingProducts() {
  return (
    <section className="bg-white shadow rounded mt-4 p-4">
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
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="p-4 bg-gray-100 rounded text-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-32 w-full object-contain mb-2 rounded"
              />
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
