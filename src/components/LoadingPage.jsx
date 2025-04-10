import React from "react";

function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-600 overflow-hidden">
      {/* Center Circle */}
      <div className="relative w-48 h-48 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-spin-slow">
        <div className="absolute inset-0 w-full h-full rounded-full bg-transparent border-4 border-white border-opacity-20"></div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`absolute w-3 h-3 rounded-full bg-white bg-opacity-50 animate-pulse`}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Loading Text */}
      <div className="absolute bottom-10 text-white text-lg font-bold tracking-widest animate-bounce">
        Loading...
      </div>
    </div>
  );
}

export default LoadingPage;