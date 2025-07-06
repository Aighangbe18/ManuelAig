import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminOders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
if (!user?.isAdmin) return <p className="text-center text-red-600 mt-10">Access denied</p>;


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/api/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching orders:", err);
        alert("Unauthorized or failed to fetch orders.");
      }
    };

    fetchOrders();
  }, [token]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      await axios.delete(`/api/orders/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(orders.filter((o) => o._id !== id));
    } catch (err) {
      alert("Failed to delete order");
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.patch(`/api/orders/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(orders.map((o) => o._id === id ? { ...o, isApproved: true } : o));
    } catch (err) {
      alert("Failed to approve order");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading orders...</p>;

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Admin Order Management</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full text-sm border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">City</th>
              <th className="p-2 border">Total</th>
              <th className="p-2 border">Approved</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="p-2 border">{order.billing.name}</td>
                <td className="p-2 border">{order.billing.email}</td>
                <td className="p-2 border">{order.billing.city}</td>
                <td className="p-2 border">${order.total.toFixed(2)}</td>
                <td className="p-2 border">
                  {order.isApproved ? (
                    <span className="text-green-600 font-medium">Yes</span>
                  ) : (
                    <span className="text-red-500">No</span>
                  )}
                </td>
                <td className="p-2 border space-x-2">
                  {!order.isApproved && (
                    <button
                      onClick={() => handleApprove(order._id)}
                      className="px-2 py-1 text-xs text-white bg-green-600 rounded hover:bg-green-700"
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="px-2 py-1 text-xs text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
