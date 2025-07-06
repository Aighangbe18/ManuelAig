import { useEffect, useState } from "react";
import {
  UserCircle,
  Mail,
  ShieldCheck,
  Calendar,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const getInitials = (name = "") =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl p-6 mx-auto bg-white rounded-2xl shadow-xl dark:bg-gray-900">
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-24 h-24 bg-blue-600 rounded-full text-white flex items-center justify-center text-3xl font-bold shadow-md">
            {getInitials(user.name)}
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 dark:text-white">
          User Profile
        </h2>

        <div className="space-y-4">
          <ProfileItem icon={<UserCircle className="text-blue-600" />} label="Name" value={user.name} />
          <ProfileItem icon={<Mail className="text-green-600" />} label="Email" value={user.email} />
          <ProfileItem
            icon={<ShieldCheck className="text-purple-600" />}
            label="Role"
            value={user.isAdmin ? "Administrator" : "Customer"}
          />
          <ProfileItem
            icon={<Calendar className="text-pink-600" />}
            label="Member Since"
            value={new Date(user.createdAt || Date.now()).toDateString()}
          />
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-2 bg-white dark:bg-gray-900 rounded-full shadow">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-lg font-semibold text-gray-800 dark:text-white">{value}</p>
      </div>
    </div>
  );
}
