import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* لوگو */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-3xl font-bold tracking-wide">StoreName</h1>
        </div>

        {/* منوی ناوبری */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="/"
            className="text-lg hover:text-gray-200 transition duration-300"
          >
            Home
          </a>
          <a
            href="/shop"
            className="text-lg hover:text-gray-200 transition duration-300"
          >
            Shop
          </a>
          <a
            href="/about"
            className="text-lg hover:text-gray-200 transition duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-lg hover:text-gray-200 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* دکمه‌ها (Login و Cart) */}
        <div className="flex items-center space-x-6">
          <Link to="login">
            <button className="bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Login
            </button>
          </Link>
          <button className="bg-yellow-400 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
            My Basket
          </button>
        </div>

        {/* منوی موبایل (Hamburger) */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-2xl focus:outline-none hover:text-gray-200">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
