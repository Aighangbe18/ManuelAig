import { useEffect, useState } from "react";
import axios from "axios";
import { ShieldCheck, ShieldX } from "lucide-react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">👥 All Users</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="px-6 py-3 border-b">Name</th>
              <th className="px-6 py-3 border-b">Email</th>
              <th className="px-6 py-3 border-b text-center">Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-4 border-b">{user.name}</td>
                  <td className="px-6 py-4 border-b">{user.email}</td>
                  <td className="px-6 py-4 border-b text-center">
                    {user.isAdmin ? (
                      <span className="inline-flex items-center px-3 py-1 text-sm text-green-600 bg-green-50 border border-green-200 rounded-full">
                        <ShieldCheck className="w-4 h-4 mr-1" />
                        Admin
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 text-sm text-red-600 bg-red-50 border border-red-200 rounded-full">
                        <ShieldX className="w-4 h-4 mr-1" />
                        Not Admin
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
