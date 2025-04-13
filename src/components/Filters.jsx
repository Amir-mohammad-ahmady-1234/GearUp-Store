import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteringProducts } from "../features/product/productSlice";

const Filters = () => {
  const [categoryQuery, setCategoryQuery] = useState("All");
  const [priceRange, setPriceRange] = useState("1");

  const { isLoading } = useSelector((store) => store.product);

  const dispatch = useDispatch();

  function handleSubmitFilters() {
    dispatch(filteringProducts({ category: categoryQuery, price: priceRange }));
    setCategoryQuery("All");
    setPriceRange("1");
  }

  return (
    <div className="bg-gray-100 p-4 rounded-md lg:sticky lg:top-[120px] lg:left-0">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm">Category</label>
          <select
            value={categoryQuery}
            onChange={(e) => setCategoryQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            disabled={isLoading}
          >
            <option value="All">All</option>
            <option value="Men's Clothing">Men's Clothing</option>
            <option value="Women's Clothing">Women's Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Jewelery">Jewelery</option>
          </select>
        </div>
        <div>
          <label className="block text-sm">
            Price Range
            <span className="font-bold"> (more than{priceRange}$)</span>
          </label>
          <input
            type="range"
            min="1"
            max="1000"
            step="1"
            className="w-full"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <input
          type="submit"
          value="Apply Filters"
          className="w-full bg-green-500 px-4 py-2 rounded-md hover:bg-green-700 transition cursor-pointer"
          onClick={handleSubmitFilters}
        />
      </div>
    </div>
  );
};

export default Filters;
