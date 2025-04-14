import BasketHeader from "../components/BasketHeader";

const BasketPage = ({ cartItems = [] }) => {
  return (
    <>
      <BasketHeader />
      <div className="min-h-screen bg-gray-100 py-8">
        {/* Cart Items */}
        <div className="container mx-auto px-4">
          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-between"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-md overflow-hidden mb-4 md:mb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 ml-0 md:ml-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                    <p className="text-base font-medium text-gray-700 mt-2">
                      price: {item.price.toLocaleString()} $
                    </p>
                  </div>

                  {/* Quantity and Total */}
                  <div className="flex flex-col items-center space-y-2 mt-4 md:mt-0">
                    <p className="text-sm text-gray-600">
                      count: {item.quantity}
                    </p>
                    <p className="text-lg font-bold text-green-600">
                      {item.totalPrice.toLocaleString()} $
                    </p>
                  </div>
                </div>
              ))}

              {/* Total Price */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Total Price:
                  <span className="text-green-600 mr-2">
                    {cartItems
                      .reduce((total, item) => total + item.totalPrice, 0)
                      .toLocaleString()}
                    $
                  </span>
                </h2>
              </div>
            </div>
          ) : (
            // Empty Cart Message
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-lg text-gray-600">
                Your shopping cart is empty.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BasketPage;
