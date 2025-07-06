import { Outlet, NavLink } from "react-router-dom";
import { Package, Users, ClipboardList } from "lucide-react";

export default function AdminLayout() {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
      isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 shadow-lg">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-white">
          Admin Panel
        </h1>

        <nav className="space-y-2">
          <NavLink to="/admin/orders" className={linkClasses}>
            <ClipboardList size={18} />
            Orders
          </NavLink>

          <NavLink to="/admin/products" className={linkClasses}>
            <Package size={18} />
            Products
          </NavLink>

          <NavLink to="/admin/users" className={linkClasses}>
            <Users size={18} />
            Users
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
