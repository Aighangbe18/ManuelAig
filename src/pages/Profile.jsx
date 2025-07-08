import { useEffect, useState } from "react";
import {
  UserCircle,
  Mail,
  ShieldCheck,
  Calendar,
  LogOut,
  LayoutDashboard,
  Lock,
  UploadCloud,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [passwordForm, setPasswordForm] = useState({ current: "", new: "" });
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

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file)); // preview only
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // You can send API request here
    alert("Password change submitted (not implemented)");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl p-6 mx-auto bg-white rounded-2xl shadow-xl dark:bg-gray-900">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <label className="relative w-24 h-24 cursor-pointer">
            <input type="file" onChange={handleAvatarChange} className="hidden" />
            <div className="w-full h-full rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-md overflow-hidden">
              {avatar ? (
                <img src={avatar} alt="Avatar" className="object-cover w-full h-full rounded-full" />
              ) : (
                getInitials(user.name)
              )}
            </div>
            <UploadCloud className="absolute bottom-0 right-0 p-1 bg-white rounded-full text-blue-600 w-6 h-6" />
          </label>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 dark:text-white">
          User Profile
        </h2>

        {/* User Info */}
        <div className="space-y-4 mb-6">
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
            value={user.createdAt ? new Date(user.createdAt).toDateString() : "N/A"}
          />
        </div>

        {/* Change Password */}
        <form onSubmit={handlePasswordChange} className="space-y-4 mb-8">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5" /> Change Password
          </h3>
          <input
            type="password"
            placeholder="Current Password"
            className="w-full px-4 py-2 border rounded"
            value={passwordForm.current}
            onChange={(e) => setPasswordForm({ ...passwordForm, current: e.target.value })}
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border rounded"
            value={passwordForm.new}
            onChange={(e) => setPasswordForm({ ...passwordForm, new: e.target.value })}
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Update Password
          </button>
        </form>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>

          {user.isAdmin && (
            <button
              onClick={() => navigate("/admin/orders")}
              className="flex items-center gap-2 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              <LayoutDashboard className="w-5 h-5" />
              Admin Panel
            </button>
          )}
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
