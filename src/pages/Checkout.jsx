import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [shipping, setShipping] = useState(10);
  const [billing, setBilling] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const itemsTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const grandTotal = itemsTotal + shipping;

  const handlePlaceOrder = async () => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("You must be logged in to place an order.");
      navigate("/login");
      return;
    }

    if (
      !billing.name ||
      !billing.email ||
      !billing.address ||
      !billing.city ||
      !billing.postalCode
    ) {
      return alert("Please fill in all billing fields.");
    }

    try {
      await axios.post("/api/orders", {
        billing,
        items: cartItems,
        total: grandTotal,
      });

      localStorage.removeItem("cart");
      navigate("/order-success");
    } catch (err) {
      alert("Order failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="grid max-w-6xl grid-cols-1 gap-10 p-6 mx-auto md:grid-cols-2">
      {/* Billing Info */}
      <motion.div
        className="p-6 bg-white rounded-lg shadow"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Billing Details</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              placeholder="John Doe"
              value={billing.name}
              onChange={(e) => setBilling({ ...billing, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded"
              placeholder="john@example.com"
              value={billing.email}
              onChange={(e) => setBilling({ ...billing, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Address</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              placeholder="123 Main St"
              value={billing.address}
              onChange={(e) => setBilling({ ...billing, address: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">City</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              placeholder="Lagos"
              value={billing.city}
              onChange={(e) => setBilling({ ...billing, city: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Postal Code</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              placeholder="100001"
              value={billing.postalCode}
              onChange={(e) =>
                setBilling({ ...billing, postalCode: e.target.value })
              }
            />
          </div>
        </form>
      </motion.div>

      {/* Order Summary */}
      <motion.div
        className="p-6 bg-gray-100 rounded-lg shadow-inner"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Order Summary</h2>

        <div className="space-y-4 text-gray-700">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between pb-2 border-b">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-blue-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <>
            <div className="my-6 border-t border-gray-300"></div>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Items Total</span>
                <span>${itemsTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-3 mt-3 text-lg font-bold border-t">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full py-3 mt-6 text-white transition bg-blue-600 rounded hover:bg-blue-700"
            >
              Place Order
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}
