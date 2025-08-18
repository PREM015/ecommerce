"use client";

export default function SkeletonProductCard() {
  return (
    <div className="animate-pulse bg-gray-100 shadow-sm rounded-2xl p-4">
      <div className="bg-gray-300 h-48 w-full rounded-xl mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    </div>
  );
}
