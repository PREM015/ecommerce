const SkeletonProductCard = () => {
  return (
    <div className="animate-pulse rounded-lg bg-gray-100 p-4 space-y-4">
      <div className="h-40 bg-gray-300 rounded-md" />
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
      <div className="h-6 bg-gray-300 rounded w-1/3" />
    </div>
  );
};

export default SkeletonProductCard;
