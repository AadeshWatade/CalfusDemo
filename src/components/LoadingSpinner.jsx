import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
        <div className="relative w-16 h-16 mb-4">
          {/* Outer circle (fading border) */}
          <div className="absolute inset-0 border-4 border-t-4 border-blue-500 border-opacity-30 rounded-full animate-spin-slow"></div>
          {/* Inner circle (solid border) */}
          <div className="absolute inset-2 border-4 border-t-4 border-blue-600 rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-800 text-lg font-semibold">Logging In...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;