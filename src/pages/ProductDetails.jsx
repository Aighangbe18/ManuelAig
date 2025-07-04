import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const products = [
  { id: 1, name: "African Print Dress", price: 49.99, image: "/images/bluetooth.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 2, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/earpod.avif", description: "Traditional African necklace made with love." },
  { id: 3, name: "Leather Sandals", price: 39.99, image: "/images/headphonesbalo.avif", description: "Comfortable and stylish handmade leather sandals." },
  { id: 4, name: "Kente Fabric", price: 24.99, image: "/images/headset.avif", description: "Vibrant Kente fabric for sewing and decoration." },
  { id: 5, name: "African Print Dress", price: 49.99, image: "/images/laptop.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 6, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/lightsmartphone.avif", description: "Traditional African necklace made with love." },
  { id: 7, name: "Leather Sandals", price: 39.99, image: "/images/smartphone.avif", description: "Comfortable and stylish handmade leather sandals." },
  { id: 8, name: "Kente Fabric", price: 24.99, image: "/images/speaker.avif", description: "Vibrant Kente fabric for sewing and decoration." },
  { id: 9, name: "African Print Dress", price: 49.99, image: "/images/tablet.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 10, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/tv.avif", description: "Traditional African necklace made with love." },
  { id: 11, name: "Leather Sandals", price: 39.99, image: "/images/wristwatch.avif", description: "Comfortable and stylish handmade leather sandals." },
  { id: 12, name: "Kente Fabric", price: 24.99, image: "/images/product4.jpg", description: "Vibrant Kente fabric for sewing and decoration." },
 { id: 13, name: "African Print Dress", price: 49.99, image: "/images/exe.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 14, name: "Smart WristWatch", price: 85.00, image: "/images/ffs.avif", description: "FitWatch Fitness Smart watch." },
  { id: 15, name: "WristWatch", price: 70.00, image: "/images/fif.avif", description: "Fitboot Inspire Fitness Tracker With Heart Rate Tracking." },
  { id: 16, name: "WristWatch", price: 85.00, image: "/images/fxfs.avif", description: "FitWatch XDH Fitness Smart Watch." },
  { id: 17, name: "African Print Dress", price: 49.99, image: "/images/go.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 18, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/h1c.avif", description: "Traditional African necklace made with love." },
  { id: 19, name: "Leather Sandals", price: 39.99, image: "/images/hki.avif", description: "Comfortable and stylish handmade leather sandals." },
  { id: 20, name: "Kente Fabric", price: 24.99, image: "/images/htc.avif", description: "Vibrant Kente fabric for sewing and decoration." },
  { id: 21, name: "African Print Dress", price: 49.99, image: "/images/jgv.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 22, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/jp.avif", description: "Traditional African necklace made with love." },
  { id: 23, name: "Leather Sandals", price: 39.99, image: "/images/max.avif", description: "Comfortable and stylish handmade leather sandals." },
  { id: 24, name: "Kente Fabric", price: 24.99, image: "/images/megapixel.jpg", description: "Vibrant Kente fabric for sewing and decoration." },
 { id: 25, name: "African Print Dress", price: 49.99, image: "/images/mini bluetooth.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 26, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/msp.avif", description: "Traditional African necklace made with love." },
  { id: 27, name: "SmartPhone", price: 70.00, image: "/images/ove.avif", description: "OVE Light Space 5G, 128GB." },
  { id: 28, name: "Kente Fabric", price: 85.00, image: "/images/pan.avif", description: "Vibrant Kente fabric for sewing and decoration." },
  { id: 29, name: "Smart WristWatch", price: 85.00, image: "/images/pat.avif", description: "Pantony 6P Activity Tracker." },
  { id: 30, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/phone.avif", description: "Traditional African necklace made with love." },
  { id: 31, name: "Leather Sandals", price: 39.99, image: "/images/pilates Go.avif", description: "Comfortable and stylish handmade leather sandals." },
  { id: 32, name: "Kente Fabric", price: 24.99, image: "/images/pilates.avif", description: "Vibrant Kente fabric for sewing and decoration." },
  { id: 33, name: "African Print Dress", price: 49.99, image: "/images/sheer.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 34, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/shel 40.avif", description: "Traditional African necklace made with love." },
  { id: 35, name: "Leather Sandals", price: 39.99, image: "/images/shel.avif", description: "Comfortable and stylish handmade leather sandals." },
  { id: 36, name: "Kente Fabric", price: 24.99, image: "/images/smart.jpg", description: "Vibrant Kente fabric for sewing and decoration." },
   { id: 37, name: "African Print Dress", price: 49.99, image: "/images/smartphone.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 38, name: "WristWatch", price: 70.00, image: "/images/sms.avif", description: "Space Moon Smartwatch with charger." },
  { id: 39, name: "Leather Sandals", price: 39.99, image: "/images/speaker.avif", description: "Comfortable and stylish handmade leather sandals." },
  { id: 40, name: "Kente Fabric", price: 24.99, image: "/images/tablet.avif", description: "Vibrant Kente fabric for sewing and decoration." },
  { id: 41, name: "African Print Dress", price: 49.99, image: "/images/tv.avif", description: "Beautifully patterned African dress perfect for all occasions." },
  { id: 42, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/vr.avif", description: "Traditional African necklace made with love." },
  { id: 43, name: "Leather Sandals", price: 39.99, image: "/images/smartphone.avif", description: "Comfortable and stylish handmade leather sandals." },
  
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
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...storedCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("🛒 Added to cart!");
  };

  if (!product) {
    return (
      <div className="p-6 font-semibold text-center text-red-600">
        Product not found
      </div>
    );
  }

  return (
    <motion.div
      className="grid max-w-5xl grid-cols-1 gap-10 p-6 mx-auto md:grid-cols-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full rounded-lg shadow h-80"
      />
      <div>
        <h1 className="mb-3 text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="mb-4 text-xl font-semibold text-blue-600">${product.price}</p>
        <p className="mb-6 leading-relaxed text-gray-700">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className="px-6 py-3 text-white transition bg-blue-600 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
