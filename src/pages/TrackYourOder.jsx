import { useState } from "react";
import { Search, MailCheck, PackageCheck } from "lucide-react";
import axios from "axios";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();

    if (!orderId || !email) {
      setStatusMessage({ type: "error", text: "Please enter both Order ID and Email." });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await axios.post("/api/orders/track", { orderId, email });
      if (res.data?.status) {
        setStatusMessage({ type: "success", text: `✅ Order Status: ${res.data.status}` });
      } else {
        setStatusMessage({ type: "error", text: "❌ Order not found." });
      }
    } catch (err) {
      setStatusMessage({ type: "error", text: "❌ Error tracking order. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-tr from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <PackageCheck className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-white" />
        <h1 className="mb-4 text-4xl font-extrabold text-blue-700 dark:text-white">
          Track Your Order
        </h1>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Enter your Order ID and Email to check your order status.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 dark:bg-gray-900">
        <form onSubmit={handleTrack} className="space-y-6">
          <div className="relative">
            <Search className="absolute w-5 h-5 text-gray-400 top-3 left-3" />
            <input
              type="text"
              placeholder="Order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
          </div>

          <div className="relative">
            <MailCheck className="absolute w-5 h-5 text-gray-400 top-3 left-3" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "Tracking..." : "Track Order"}
          </button>
        </form>

        {statusMessage && (
          <div
            className={`mt-6 text-center font-medium ${
              statusMessage.type === "success"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {statusMessage.text}
          </div>
        )}
      </div>
    </div>
  );
}
