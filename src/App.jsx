import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TrackYourOrder from "./pages/TrackYourOder";
import ContactUs from "./pages/ContactUs";
import PaymentMethods from "./pages/PaymentMethods";
import ReturnRefundPolicy from "./pages/ReturnRefundPolicy";
import DeliveryInformation from "./pages/DeliveryInformation";
import Profile from "./pages/Profile";

// Admin
import AdminLayout from "./pages/admin/AdminLayout";
import AdminOrders from "./pages/admin/AdminOders"; // ✅ Corrected spelling
import UsersPage from "./pages/admin/UsersPage";
import ProductsPage from "./pages/admin/ProductsPage";
import AdminProtectedLayout from "./components/AdminProtectedLayout"; // ✅ Admin gatekeeper
import PaymentPage from "./pages/PaymentPage";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      setUser(null);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
           <Route path="/payment" element={<PaymentPage />} />
           <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/track-order" element={<TrackYourOrder />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/refund-policy" element={<ReturnRefundPolicy />} />
          <Route path="/delivery-info" element={<DeliveryInformation />} />

          {/* Admin Routes (protected & nested) */}
          <Route path="/admin" element={<AdminProtectedLayout />}>
            <Route element={<AdminLayout />}>
              <Route path="orders" element={<AdminOrders />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="products" element={<ProductsPage />} />
            </Route>
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
