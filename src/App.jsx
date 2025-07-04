
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Login from './pages/Login';
import TrackYourOrder from './pages/TrackYourOder';
import ContactUs from './pages/ContactUs';
import PaymentMethods from './pages/PaymentMethods';
import ReturnRefundPolicy from './pages/ReturnRefundPolicy';
import DeliveryInformation from './pages/DeliveryInformation';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<ProductDetails />} />
         <Route path="/register" element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
         <Route path="/track-order" element={<TrackYourOrder />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/payment-methods" element={<PaymentMethods />} />
      <Route path="/refund-policy" element={<ReturnRefundPolicy />} />
      <Route path="/delivery-info" element={<DeliveryInformation />} />
      </Routes>
      <Footer />
    </>
  );
}
