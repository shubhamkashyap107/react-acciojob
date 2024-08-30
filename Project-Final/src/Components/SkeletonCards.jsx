import React from 'react';

const CardSkeleton = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-[200px] h-[220px] mx-auto mt-4">
      <div className="animate-pulse flex flex-col items-center">
        <div className="rounded-full bg-gray-300 h-12 w-12 mb-4"></div>
        <div className="space-y-4 w-full">
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
