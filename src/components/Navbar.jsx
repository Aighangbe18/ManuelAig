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
  X
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

  useEffect(() => {
    setActive(location.pathname);

    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") setDarkMode(true);

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
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
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Checkout", path: "/checkout" },
  ];

  return (
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
        <div className="items-center hidden gap-6 text-gray-700 md:flex dark:text-white">
          <Link to="/cart" className="relative hover:text-blue-600">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {user ? (
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="text-sm">{user.name || "User"}</span>
              <Bell className="w-5 h-5" />
              <button onClick={handleLogout} className="text-sm hover:text-red-600">
                <LogOut className="inline w-4 h-4 ml-1" />
              </button>
            </div>
          ) : (
            <Link to="/login" className="px-6 py-2 text-white bg-blue-500 rounded-full hover:text-blue-950">
              Login
            </Link>
          )}
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setDarkMode(!darkMode)} className="text-gray-700 dark:text-white">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setMobileOpen(true)} className="text-gray-700 dark:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-30" onClick={() => setMobileOpen(false)}></div>

          <div className="fixed top-0 left-0 z-50 w-64 h-full transition-transform duration-300 ease-in-out transform bg-white shadow-lg dark:bg-gray-900">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <img src="/images/emma2.png"  className="w-16 h-15"/>
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
                    <span>{user.name || "User"}</span>
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
    </motion.nav>
  );
}
