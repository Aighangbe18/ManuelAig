import { useEffect, useState } from "react";
import axios from "axios";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.billing.name}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>{order.isApproved ? "✅ Approved" : "⏳ Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}