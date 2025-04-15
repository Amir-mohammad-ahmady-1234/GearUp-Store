import React from 'react';

const NoResultsFinded = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {/* تصویر یا آیکون */}
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-gray-400 dark:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 9c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      {/* متن اصلی */}
      <h2 className="text-xl font-semibold mb-2">No results found!</h2>
      <p className="text-center text-sm mb-6 px-4">
      Unfortunately, there are no products that match your filters. Please change the filters or try again later.
      </p>
    </div>
  );
};

export default NoResultsFinded;
