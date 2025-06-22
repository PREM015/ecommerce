import React from "react";

const categories = [
  { label: "Kilos", icon: "https://img.icons8.com/color/48/000000/shopping-basket.png" },
  { label: "Mobiles", icon: "https://img.icons8.com/color/48/000000/smartphone-tablet.png" },
  { label: "Fashion", icon: "https://img.icons8.com/color/48/000000/t-shirt.png" },
  { label: "Electronics", icon: "https://img.icons8.com/color/48/000000/laptop.png" },
  { label: "Home & Furniture", icon: "https://img.icons8.com/color/48/000000/sofa.png" },
  { label: "Appliances", icon: "https://img.icons8.com/color/48/000000/microwave.png" },
  { label: "Flight Bookings", icon: "https://img.icons8.com/color/48/000000/airplane-take-off.png" },
  { label: "Beauty, Toys & More", icon: "https://img.icons8.com/color/48/000000/teddy-bear.png" },
  { label: "Two Wheelers", icon: "https://img.icons8.com/color/48/000000/motorcycle.png" },
];

function CategoryBar() {
  return (
    <div className="bg-white py-3 shadow-sm -mt-px">
      <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 text-center text-xs">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-col items-center">
            <img src={cat.icon} alt={cat.label} className="w-10 h-10 object-contain" />
            <span className="mt-1 font-medium">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryBar;
