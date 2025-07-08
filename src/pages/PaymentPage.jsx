// src/pages/PaymentPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const [total, setTotal] = useState("0.00");
  const navigate = useNavigate();

  useEffect(() => {
    const amount = localStorage.getItem("recentOrderAmount");
    if (amount) {
      setTotal(amount);
    }
  }, []);

  const handlePayNow = () => {
    navigate("/payment-methods"); // ✅ Go to /payment-methods
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Complete Your Payment</h2>
        <p className="mb-6 text-gray-600 text-lg">
          Amount Due: <span className="font-semibold text-black">${total}</span>
        </p>
        <button
          onClick={handlePayNow}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
