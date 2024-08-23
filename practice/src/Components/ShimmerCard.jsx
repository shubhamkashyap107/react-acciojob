import React from "react";

const ShimmerCard = () => {
  return (
    <div className="w-[150px] h-[270px] bg-gray-200 relative overflow-hidden m-4">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_1.5s_infinite]"></div>
    </div>
  );
};

export default ShimmerCard;
