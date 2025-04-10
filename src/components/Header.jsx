import { Link } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { isAuthenticated, dispatch } = useAuth();

  function handleLogout() {
    if (isAuthenticated) dispatch({ type: "auth/logout" });
  }

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          <ClockIcon className="h-9 w-9 text-gray-700 mr-2" />
          <span className="text-gray-700">GearUp Store</span>
        </h1>
        <div className="flex items-center space-x-4">
          {/* دکمه ورود */}

          <Link to="login">
            <button
              onClick={handleLogout}
              className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </Link>

          {/* دکمه سبد خرید */}
          <button className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-700 transition">
            My Basket
          </button>
        </div>
      </div>

      {/* فیلد جستجو */}
      <div className="mt-4 flex justify-center items-top">
        <form className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-3 pl-10 pr-4 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
