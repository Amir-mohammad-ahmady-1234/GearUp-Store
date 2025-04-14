import React from "react";
import { useNavigate } from "react-router-dom";


const BasketHeader = () => {
    const navigate = useNavigate()
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Back Button */}
        <button
          className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => navigate('/')} 
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="text-sm font-medium">Back To Home</span>
        </button>

        {/* Title */}
        <h1 className="text-lg font-bold text-gray-800">Shopping Cart</h1>

        {/* Empty Space for Alignment */}
        <div className="w-6"></div>
      </div>
    </header>
  );
};

export default BasketHeader;
