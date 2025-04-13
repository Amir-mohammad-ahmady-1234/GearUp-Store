import React from "react";
import { useDispatch } from "react-redux";

import { fetching } from "../features/product/productSlice";

function ErrorPage() {
    const dispatch = useDispatch()

  function handleTryAgain () {
    dispatch(fetching())
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Main Content */}
      <div className="text-center space-y-6">
        {/* Icon or Illustration */}
        <div className="relative w-48 h-48 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h7.938c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2zm0-10V6m0 16v-4"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-wider text-red-400">
          Oops! Something went wrong...
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-400">
          We couldn't fetch the data you were looking for. Please try again
          later or go back to the homepage.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <button onClick={handleTryAgain} className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300">
            Try Again
          </button>
          <button className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition duration-300">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
