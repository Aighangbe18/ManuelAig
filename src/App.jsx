import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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

// Admin
import AdminLayout from "./pages/admin/AdminLayout";
import AdminRoute from "./components/AdminRoute";
import AdminOders from "./pages/admin/AdminOders";
import UsersPage from "./pages/admin/UsersPage";
import ProductsPage from "./pages/admin/ProductsPage";
import Profile from "./pages/Profile";

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
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
         <Route path="/Profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/track-order" element={<TrackYourOrder />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/refund-policy" element={<ReturnRefundPolicy />} />
        <Route path="/delivery-info" element={<DeliveryInformation />} />

        {/* ✅ Admin Routes */}
        <Route
          path="/admin/*"
          element={
            user?.isAdmin ? (
              <AdminLayout />
            ) : (
              <AdminRoute/>
            )
          }
        >
          <Route path="orders" element={<AdminOders />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
