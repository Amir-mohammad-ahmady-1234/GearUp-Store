const Filters = () => {
    return (
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm">Category</label>
            <select className="w-full px-4 py-2 border rounded-md">
              <option>All</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Furniture</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Price Range</label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              className="w-full"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Filters;
  