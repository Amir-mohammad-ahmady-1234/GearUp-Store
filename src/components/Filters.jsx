import { useState } from "react";

const Filters = () => {
  const [categoryQuery, setCategoryQuery] = useState("All");
  const [priceRange, setPriceRange] = useState("1500");

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm">Category</label>
          <select
            value={categoryQuery}
            onChange={(e) => setCategoryQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>
        <div>
          <label className="block text-sm">
            Price Range
            <span className="font-bold"> ({priceRange})</span>
          </label>
          <input
            type="range"
            min="1"
            max="3000"
            step="1"
            className="w-full"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
