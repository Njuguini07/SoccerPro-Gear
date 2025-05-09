import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (items) => {
    const totalCost = items.reduce(
      (sum, item) => sum + item.product_cost * item.quantity,
      0
    );
    setTotal(totalCost);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
  };

  const handleQuantityChange = (index, newQty) => {
    if (newQty < 1) return;
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQty;
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
  };

  const handleProceedToPay = () => {
    // Pass cartItems to the Payment page via navigate
    navigate("/payment", { state: { products: cartItems } });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">🛒 Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400">
            Your cart is empty. Add items to proceed.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-200"
                >
                  <h2 className="text-xl font-semibold mb-2 text-white">
                    {item.product_name}
                  </h2>
                  <p className="text-green-400 font-medium mb-4">
                    KES {item.product_cost.toLocaleString()}
                  </p>

                  <div className="flex items-center justify-between gap-4 mb-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                      className="w-16 px-2 py-1 text-center text-black rounded-md"
                    />
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="text-sm text-red-400 hover:text-red-600 font-medium bg-dark-800 px-3 py-1 rounded-full"
                    >
                      ✖ Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="text-2xl font-bold mb-4 text-green-400">
                Total: KES {total.toLocaleString()}
              </div>
              <button
                onClick={handleProceedToPay}
                className="bg-green hover:bg-green-600 text-dark py-3 px-8 rounded-xl text-lg font-semibold shadow-md transition duration-200"
              >
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
