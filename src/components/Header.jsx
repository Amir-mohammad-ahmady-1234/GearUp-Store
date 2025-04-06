const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">StoreName</h1>
        <div className="flex items-center space-x-4">
          {/* دکمه ورود */}
          <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 transition">Login</button>
          {/* دکمه سبد خرید */}
          <button className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-700 transition">My Basket</button>
        </div>
      </div>

      {/* فیلد جستجو */}
      <div className="mt-4 flex justify-center">
        <form className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-3 pl-10 pr-4 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
