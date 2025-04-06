const Header = () => {
    return (
      <header className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">StoreName</h1>
          <div className="flex space-x-4">
            <LoginButton />
            <BasketButton />
          </div>
        </div>
      </header>
    );
  };
  
  const LoginButton = () => (
    <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 transition">Login</button>
  );
  
  const BasketButton = () => (
    <button className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-700 transition">My Basket</button>
  );
  
  export default Header;
  