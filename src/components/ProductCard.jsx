const ProductCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="images/alpina-01.jpg"
        alt="Product"
        className="w-full h-48 object-contain"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">Product Name</h3>
        <p className="text-gray-600">Description of the product.</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">$25.00</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
