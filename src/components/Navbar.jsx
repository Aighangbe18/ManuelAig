import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Menu,
  ShoppingCart,
  User,
  LogOut,
  Bell,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const safeParse = (data) => {
    try {
      if (data && data !== "undefined") return JSON.parse(data);
    } catch {
      return null;
    }
    return null;
  };

  useEffect(() => {
    setActive(location.pathname);
    const parsedUser = safeParse(localStorage.getItem("user"));
    if (parsedUser) setUser(parsedUser);
    else localStorage.removeItem("user");

        const storedCart = safeParse(localStorage.getItem("cart")) || [];
    const totalQuantity = storedCart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalQuantity);
  }, [location]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

 const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Checkout", path: "/checkout" },
  ...(user?.isAdmin ? [{ name: "ADMIN", path: "/admin/orders" }] : []),
];


  const getInitials = (name = "") =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-50 w-full bg-white shadow-md dark:bg-gray-900"
      >
        <div className="relative flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
          <Link to="/" className="text-2xl font-bold dark:text-white">
            <span className="text-blue-700">MANUEL</span>
            <span className="text-gray-600"> AIG</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="absolute hidden gap-6 font-medium text-gray-700 -translate-x-1/2 md:flex left-1/2 dark:text-white">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "relative overflow-hidden h-6 block group",
                    active === link.path ? "text-blue-600 font-semibold" : "hover:text-blue-600"
                  )}
                >
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    {link.name}
                  </span>
                  <span className="absolute left-0 block transition-transform duration-300 top-full group-hover:-translate-y-full">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="items-center hidden gap-6 text-gray-700 md:flex dark:text-white relative">
            <Link to="/cart" className="relative hover:text-blue-600">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1 border rounded-full dark:border-gray-700 border-gray-300"
                >
                  <div className="w-7 h-7 bg-blue-500 text-white flex items-center justify-center rounded-full text-xs font-bold">
                    {getInitials(user.name)}
                  </div>
                  <span className="text-sm">{user.name}</span>
                  <Bell className="w-4 h-4" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-2 w-48 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="px-6 py-2 text-white bg-blue-500 rounded-full hover:text-blue-950">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-4 md:hidden">
            
            <button onClick={() => setMobileOpen(true)} className="text-gray-700 dark:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Cart Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-inner p-2 flex items-center justify-between md:hidden dark:bg-gray-900">
        <Link to="/cart" className="flex items-center gap-2 text-gray-800 dark:text-white">
          <ShoppingCart className="w-5 h-5" />
          Cart ({cartCount})
        </Link>
        {user ? (
          <button
            onClick={handleLogout}
            className="flex items-center text-red-500 text-sm gap-1"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        ) : (
          <Link to="/login" className="text-blue-600 text-sm font-semibold">Login</Link>
        )}
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40  bg-opacity-30" onClick={() => setMobileOpen(false)}></div>

          <div className="fixed top-0 left-0 z-50 w-64 h-full bg-white dark:bg-gray-900 shadow-lg transition-transform ease-in-out duration-300">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <Link to='/'>
              <img src="/images/emma2.png" className="w-16 h-15" /></Link>
              <button onClick={() => setMobileOpen(false)} className="text-gray-700 dark:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <ul className="flex flex-col gap-4 p-4 font-medium text-gray-700 dark:text-white">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(active === link.path ? "text-blue-600 font-semibold" : "hover:text-blue-600")}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/cart"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center hover:text-blue-600"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Cart ({cartCount})
                </Link>
              </li>

              <li>
                {user ? (
                  <div className="flex items-center justify-between">
                    <span>{user.name}</span>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileOpen(false);
                      }}
                      className="flex items-center text-red-600"
                    >
                      <LogOut className="w-4 h-4 mr-1" /> Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 text-center text-white bg-blue-500 rounded-full"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
