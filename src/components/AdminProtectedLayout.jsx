import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminProtectedLayout() {
  const [isAdmin, setIsAdmin] = useState(null); // null = loading state

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser || storedUser === "undefined") {
        setIsAdmin(false);
        return;
      }

      const user = JSON.parse(storedUser);
      console.log("✅ Current user:", user);

      // Validate the isAdmin property
      if (user?.isAdmin === true || user?.isAdmin === "true") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (err) {
      console.error("Error parsing user:", err.message);
      setIsAdmin(false);
    }
  }, []);

  if (isAdmin === null) {
    return <div className="p-8 text-center text-gray-600">Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
