import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.isAdmin;

  return isAdmin ? children : <Navigate to="/" />;
}