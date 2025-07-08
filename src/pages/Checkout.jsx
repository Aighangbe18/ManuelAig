import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ShoppingCart } from "lucide-react";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [shipping] = useState(10);
  const [loading, setLoading] = useState(false);
  const [billing, setBilling] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (err) {
      console.error("Error loading cart:", err);
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

    const user = JSON.parse(storedUser);
    const token = user.token;

    if (!token) {
      alert("You must be logged in to place an order.");
      navigate("/login");
      return;
    }

    const { name, email, address, city, postalCode } = billing;

    if (!name || !email || !address || !city || !postalCode) {
      return alert("Please fill in all billing fields.");
    }

    try {
      setLoading(true);
      await axios.post(
        "/api/orders",
        {
          billing: {
            name: name.trim(),
            email: email.trim(),
            address: address.trim(),
            city: city.trim(),
            postalCode: postalCode.trim(),
          },
          items: cartItems,
          total: grandTotal,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem("recentOrderAmount", grandTotal.toFixed(2));
      localStorage.removeItem("cart");
      navigate("/payment");
    } catch (err) {
      alert("Order failed: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <motion.div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white text-center p-10">
        <ShoppingCart className="w-20 h-20 text-blue-600 mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-6">You haven’t added any products yet.</p>
        <button
          onClick={() => navigate("/shop")}
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Browse Products
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-7xl px-6 py-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Billing Section */}
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Billing Details</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {["name", "email", "address", "city", "postalCode"].map((field) => (
            <div key={field}>
              <label className="block mb-1 font-medium text-gray-700 capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={billing[field]}
                onChange={(e) => setBilling({ ...billing, [field]: e.target.value })}
                required
              />
            </div>
          ))}
        </form>
      </motion.div>

      {/* Order Summary */}
      <motion.div
        className="bg-blue-50 rounded-xl shadow-inner p-6"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Order Summary</h2>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 pb-4 border-b border-gray-300"
            >
              <img
                src={item.image || "https://via.placeholder.com/100"}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md shadow"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-700">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-semibold text-blue-600 text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="border-gray-300" />
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between pt-3">
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
          disabled={loading}
          className={`w-full py-3 mt-6 text-white rounded-full font-semibold transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </motion.div>
    </div>
  );
}
