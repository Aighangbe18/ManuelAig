import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ShoppingCart, XCircle } from "lucide-react";

const products = [
   { id: 1, name: "African Print Dress", price: 49.99, image: "/images/bluetooth.avif", description: "Immerse yourself in premium sound quality with crystal-clear audio and powerful bass.", category: "HeadPhones & Speaker" },
{ id: 2, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/earpod.avif", description: "Immerse yourself in premium sound quality with crystal-clear audio and powerful bass.", category: "HeadPhones & Speaker" },
{ id: 3, name: "Leather Sandals", price: 39.99, image: "/images/headphonesbalo.avif", description: "Immerse yourself in premium sound quality with crystal-clear audio and powerful bass.", category: "HeadPhones & Speaker" },
{ id: 4, name: "Kente Fabric", price: 24.99, image: "/images/headset.avif", description: "Immerse yourself in premium sound quality with crystal-clear audio and powerful bass.", category: "HeadPhones & Speaker" },
{ id: 5, name: "African Print Dress", price: 49.99, image: "/images/laptop.avif", description: "High-performance computing devices perfect for productivity, creativity, and entertainment.", category: "Computer" },
{ id: 6, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/lightsmartphone.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 7, name: "Leather Sandals", price: 39.99, image: "/images/smartphone.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 8, name: "Kente Fabric", price: 24.99, image: "/images/speaker.avif", description: "Immerse yourself in premium sound quality with crystal-clear audio and powerful bass.", category: "HeadPhones & Speaker" },
{ id: 9, name: "African Print Dress", price: 49.99, image: "/images/tablet.avif", description: "Portable and versatile tablets for work, play, and everything in between.", category: "Tablet" },
{ id: 10, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/tv.avif", description: "Transform your home into a cinematic experience with our premium entertainment systems.", category: "Tv & Home Cinemas" },
{ id: 11, name: "Leather Sandals", price: 39.99, image: "/images/wristwatch.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 12, name: "Kente Fabric", price: 24.99, image: "/images/product4.jpg", description: "Portable and versatile tablets for work, play, and everything in between.", category: "Tablet" },
{ id: 13, name: "African Print Dress", price: 49.99, image: "/images/exe.avif", description: "Capture breathtaking views and unforgettable moments with precision gear.", category: "drones & Cameras" },
{ id: 14, name: "Smart WristWatch", price: 85.0, image: "/images/ffs.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 15, name: "WristWatch", price: 70.0, image: "/images/fif.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 16, name: "WristWatch", price: 85.0, image: "/images/fxfs.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 17, name: "African Print Dress", price: 49.99, image: "/images/go.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 18, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/h1c.avif", description: "Capture breathtaking views and unforgettable moments with precision gear.", category: "drones & Cameras" },
{ id: 19, name: "Leather Sandals", price: 39.99, image: "/images/hki.avif", description: "Capture breathtaking views and unforgettable moments with precision gear.", category: "drones & Cameras" },
{ id: 20, name: "Kente Fabric", price: 24.99, image: "/images/htc.avif", description: "Capture breathtaking views and unforgettable moments with precision gear.", category: "drones & Cameras" },
{ id: 21, name: "African Print Dress", price: 49.99, image: "/images/jgv.avif", description: "Capture breathtaking views and unforgettable moments with precision gear.", category: "drones & Cameras" },
{ id: 22, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/jp.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 23, name: "Leather Sandals", price: 39.99, image: "/images/max.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 24, name: "Kente Fabric", price: 24.99, image: "/images/megapixel.jpg", description: "Portable and versatile tablets for work, play, and everything in between.", category: "Tablet" },
{ id: 25, name: "African Print Dress", price: 49.99, image: "/images/mini bluetooth.avif", description: "Immerse yourself in premium sound quality with crystal-clear audio and powerful bass.", category: "HeadPhones & Speaker" },
{ id: 26, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/msp.avif", description: "High-performance computing devices perfect for productivity, creativity, and entertainment.", category: "Computer" },
{ id: 27, name: "SmartPhone", price: 70.0, image: "/images/ove.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 28, name: "Kente Fabric", price: 85.0, image: "/images/pan.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 29, name: "Smart WristWatch", price: 85.0, image: "/images/pat.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 30, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/phone.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 31, name: "Leather Sandals", price: 39.99, image: "/images/pilates Go.avif", description: "Portable and versatile tablets for work, play, and everything in between.", category: "Tablet" },
{ id: 32, name: "Kente Fabric", price: 24.99, image: "/images/pilates.avif", description: "High-performance computing devices perfect for productivity, creativity, and entertainment.", category: "Computer" },
{ id: 33, name: "African Print Dress", price: 49.99, image: "/images/sheer.avif", description: "Portable and versatile tablets for work, play, and everything in between.", category: "Tablet" },
{ id: 34, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/shel 40.avif", description: "Transform your home into a cinematic experience with our premium entertainment systems.", category: "Tv & Home Cinemas" },
{ id: 35, name: "Leather Sandals", price: 39.99, image: "/images/shel.avif", description: "Transform your home into a cinematic experience with our premium entertainment systems.", category: "Tv & Home Cinemas" },
{ id: 36, name: "Kente Fabric", price: 24.99, image: "/images/smart.jpg", description: "Portable and versatile tablets for work, play, and everything in between.", category: "Tablet" },
{ id: 37, name: "African Print Dress", price: 49.99, image: "/images/smartphone.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 38, name: "WristWatch", price: 70.0, image: "/images/sms.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
{ id: 39, name: "Leather Sandals", price: 39.99, image: "/images/speaker.avif", description: "Immerse yourself in premium sound quality with crystal-clear audio and powerful bass.", category: "HeadPhones & Speaker" },
{ id: 40, name: "Kente Fabric", price: 24.99, image: "/images/tablet.avif", description: "Portable and versatile tablets for work, play, and everything in between.", category: "Tablet" },
{ id: 41, name: "African Print Dress", price: 49.99, image: "/images/tv.avif", description: "Transform your home into a cinematic experience with our premium entertainment systems.", category: "Tv & Home Cinemas" },
{ id: 42, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/vr.avif", description: "Capture breathtaking views and unforgettable moments with precision gear.", category: "drones & Cameras" },
{ id: 43, name: "Leather Sandals", price: 39.99, image: "/images/smartphone.avif", description: "Stay connected and stylish with the latest in mobile technology and smart wearables.", category: "mobile & WristWatch" },
];


export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = storedCart.find((item) => item.id === product.id);
    let updatedCart;

    if (exists) {
      updatedCart = storedCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...storedCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("🛒 Added to cart!");
  };

  if (!product) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-[50vh] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <XCircle className="w-16 h-16 text-red-500 mb-4 animate-pulse" />
        <p className="text-lg font-semibold text-red-600">Product not found</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid max-w-6xl grid-cols-1 gap-10 p-6 mx-auto md:grid-cols-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl shadow-lg"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-[400px] rounded-2xl"
        />
      </motion.div>

      <div className="flex flex-col justify-center space-y-6">
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {product.name}
        </motion.h1>

        <motion.p
          className="text-2xl font-semibold text-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ${product.price.toFixed(2)}
        </motion.p>

        <motion.p
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {product.description}
        </motion.p>

        <motion.button
          onClick={handleAddToCart}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-white transition bg-blue-600 rounded-full shadow hover:bg-blue-700"
        >
          <ShoppingCart className="w-5 h-5" /> Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
