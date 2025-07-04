import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Fallback initial cart (can remove this block if reading from localStorage only)
const defaultItems = [
  {
    id: 1,
    name: "African Print Dress",
    price: 49.99,
    quantity: 1,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Beaded Necklace",
    price: 29.99,
    quantity: 2,
    image: "/images/product2.jpg",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load from localStorage or use fallback
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    setCartItems(stored ? JSON.parse(stored) : defaultItems);
  }, []);

  // Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl p-6 mx-auto">
      <motion.h2
        className="mb-6 text-3xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Cart
      </motion.h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded shadow"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-20 h-20 rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-2 text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-6 mt-10 text-right border-t">
            <p className="text-xl font-bold text-gray-800">
              Total: ${total.toFixed(2)}
            </p>
            <Link to="/checkout">
              <button className="px-6 py-3 mt-4 text-white transition bg-blue-600 rounded hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
