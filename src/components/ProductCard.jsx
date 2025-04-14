import { useState } from "react";

const ProductCard = ({ product }) => {
  const productTitle = product.title.split(" ");
  const productDescription = product.description.split(" ");

  const [isProductAdded, setIsProductAdded] = useState(false);

  function handleAddProduct() {
    setIsProductAdded(true);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt="Product"
        className="w-full h-48 object-contain"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {productTitle.slice(0, 3).join(" ")}
          {productTitle.length > 3 && "..."}
        </h3>
        <p className="text-gray-600">
          {productDescription.slice(0, 6).join(" ")}
          {productDescription.length > 6 && "..."}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">{product.price}$</span>
          <button
            onClick={handleAddProduct}
            className={`${
              isProductAdded ? "bg-gray-400 hover:bg-gray-700" : "bg-blue-500 hover:bg-blue-700"
            } text-white px-4 py-2 rounded-md transition'`}
          >
            {isProductAdded ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
