import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Trash2, ShoppingBag, ShoppingCart } from "lucide-react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    setCartItems(stored ? JSON.parse(stored) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.h2
        className="mb-8 text-4xl font-extrabold text-center text-blue-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🛒 Your Shopping Cart
      </motion.h2>

      {cartItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center max-w-xl px-6 py-16 mx-auto text-center bg-white rounded-lg shadow-lg dark:bg-gray-900"
        >
          <ShoppingCart className="w-16 h-16 mb-4 text-blue-600 dark:text-white" />
          <h3 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">
            Your cart is empty!
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Looks like you haven’t added anything yet.
          </p>
          <Link to="/shop">
            <button className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700">
              Browse Products
            </button>
          </Link>
        </motion.div>
      ) : (
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md dark:bg-gray-900"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm font-semibold text-blue-600">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 text-right">
                  <p className="text-lg font-bold text-green-600">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="flex items-center justify-end w-full mt-2 text-sm text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col items-end justify-between mt-10 border-t pt-6 dark:border-gray-700">
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              Total: <span className="text-blue-600">₦{total.toLocaleString()}</span>
            </p>
            <Link to="/checkout" className="mt-4">
              <button className="flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">
                <ShoppingBag className="w-5 h-5" />
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
