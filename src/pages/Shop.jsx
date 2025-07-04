import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "African Print Dress", price: 49.99, image: "/images/bluetooth.avif", description: "Beautifully patterned African dress perfect for all occasions.", category: "HeadPhones & Speaker" },
  { id: 2, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/earpod.avif", description: "Traditional African necklace made with love.", category: "HeadPhones & Speaker" },
  { id: 3, name: "Leather Sandals", price: 39.99, image: "/images/headphonesbalo.avif", description: "Comfortable and stylish handmade leather sandals.", category: "HeadPhones & Speaker" },
  { id: 4, name: "Kente Fabric", price: 24.99, image: "/images/headset.avif", description: "Vibrant Kente fabric for sewing and decoration.", category: "HeadPhones & Speaker" },
  { id: 5, name: "African Print Dress", price: 49.99, image: "/images/laptop.avif", description: "Beautifully patterned African dress perfect for all occasions.", category: "Computer" },
  { id: 6, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/lightsmartphone.avif", description: "Traditional African necklace made with love.", category: "mobile & WristWatch" },
  { id: 7, name: "Leather Sandals", price: 39.99, image: "/images/smartphone.avif", description: "Comfortable and stylish handmade leather sandals.", category: "mobile & WristWatch" },
  { id: 8, name: "Kente Fabric", price: 24.99, image: "/images/speaker.avif", description: "Vibrant Kente fabric for sewing and decoration.", category: "HeadPhones & Speaker" },
  { id: 9, name: "African Print Dress", price: 49.99, image: "/images/tablet.avif", description: "Beautifully patterned African dress perfect for all occasions.", category: "Tablet" },
  { id: 10, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/tv.avif", description: "Traditional African necklace made with love.", category: "Tv & Home Cinemas" },
  { id: 11, name: "Leather Sandals", price: 39.99, image: "/images/wristwatch.avif", description: "Comfortable and stylish handmade leather sandals.", category: "mobile & WristWatch" },
  { id: 12, name: "Kente Fabric", price: 24.99, image: "/images/product4.jpg", description: "Vibrant Kente fabric for sewing and decoration.", category: "Tablet" },
  { id: 13, name: "African Print Dress", price: 49.99, image: "/images/exe.avif", description: "Beautifully patterned African dress perfect for all occasions.", category: "drones & Cameras" },
  { id: 14, name: "Smart WristWatch", price: 85.0, image: "/images/ffs.avif", description: "FitWatch Fitness Smart watch.", category: "mobile & WristWatch" },
  { id: 15, name: "WristWatch", price: 70.0, image: "/images/fif.avif", description: "Fitness Tracker with Heart Rate Tracking.", category: "mobile & WristWatch" },
  { id: 16, name: "WristWatch", price: 85.0, image: "/images/fxfs.avif", description: "Fitness Smart Watch.", category: "mobile & WristWatch" },
  { id: 17, name: "African Print Dress", price: 49.99, image: "/images/go.avif", description: "Beautifully patterned African dress perfect for all occasions.", category: "mobile & WristWatch" },
  { id: 18, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/h1c.avif", description: "Traditional African necklace made with love.", category: "drones & Cameras" },
  { id: 19, name: "Leather Sandals", price: 39.99, image: "/images/hki.avif", description: "Comfortable and stylish handmade leather sandals.", category: "drones & Cameras" },
  { id: 20, name: "Kente Fabric", price: 24.99, image: "/images/htc.avif", description: "Vibrant Kente fabric for sewing and decoration.", category: "drones & Cameras" },
  { id: 21, name: "African Print Dress", price: 49.99, image: "/images/jgv.avif", description: "Beautifully patterned African dress perfect for all occasions.", category: "drones & Cameras" },
  { id: 22, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/jp.avif", description: "Traditional African necklace made with love.", category: "mobile & WristWatch" },
  { id: 23, name: "Leather Sandals", price: 39.99, image: "/images/max.avif", description: "Comfortable and stylish handmade leather sandals.", category: "mobile & WristWatch" },
  { id: 24, name: "Kente Fabric", price: 24.99, image: "/images/megapixel.jpg", description: "Vibrant Kente fabric for sewing and decoration.", category: "Tablet" },
  { id: 25, name: "African Print Dress", price: 49.99, image: "/images/mini bluetooth.avif", description: "Beautifully patterned African dress perfect for all occasions.", category: "HeadPhones & Speaker" },
  { id: 26, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/msp.avif", description: "Traditional African necklace made with love.", category: "Computer" },
  { id: 27, name: "SmartPhone", price: 70.0, image: "/images/ove.avif", description: "OVE Light Space 5G, 128GB.", category: "mobile & WristWatch" },
  { id: 28, name: "Kente Fabric", price: 85.0, image: "/images/pan.avif", description: "Vibrant Kente fabric for sewing and decoration.", category: "mobile & WristWatch" },
  { id: 29, name: "Smart WristWatch", price: 85.0, image: "/images/pat.avif", description: "Pantony 6P Activity Tracker.", category: "mobile & WristWatch" },
  { id: 30, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/phone.avif", description: "Traditional African necklace made with love.", category: "mobile & WristWatch" },
  { id: 31, name: "Leather Sandals", price: 39.99, image: "/images/pilates Go.avif", description: "Comfortable and stylish handmade leather sandals.", category: "Tablet" },
  { id: 32, name: "Kente Fabric", price: 24.99, image: "/images/pilates.avif", description: "Vibrant Kente fabric for sewing and decoration.", category: "Computer" },
  { id: 33, name: "African Print Dress", price: 49.99, image: "/images/sheer.avif", description: "Beautifully patterned African dress perfect for all occasions.", category: "Tablet" },
  { id: 34, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/shel 40.avif", description: "Traditional African necklace made with love.", category: "Tv & Home Cinemas" },
  { id: 35, name: "Leather Sandals", price: 39.99, image: "/images/shel.avif", description: "Comfortable and stylish handmade leather sandals.", category: "Tv & Home Cinemas" },
  { id: 36, name: "Kente Fabric", price: 24.99, image: "/images/smart.jpg", description: "Vibrant Kente fabric for sewing and decoration.", category: "Tablet" },
  { id: 37, name: "African Print Dress", price: 49.99, image: "/images/smartphone.avif", description: "Beautifully patterned African dress perfect for all occasions.", category: "mobile & WristWatch" },
  { id: 38, name: "WristWatch", price: 70.0, image: "/images/sms.avif", description: "Space Moon Smartwatch with charger.", category: "mobile & WristWatch" },
  { id: 39, name: "Leather Sandals", price: 39.99, image: "/images/speaker.avif", description: "Comfortable and stylish handmade leather sandals.", category: "HeadPhones & Speaker" },
  { id: 40, name: "Kente Fabric", price: 24.99, image: "/images/tablet.avif", description: "Vibrant Kente fabric for sewing and decoration.", category: "Tablet" },
  { id: 41, name: "African Print Dress", price: 49.99, image: "/images/tv.avif", description: "Beautifully patterned African dress perfect for all occasions.", category: "Tv & Home Cinemas" },
  { id: 42, name: "Handmade Beaded Necklace", price: 29.99, image: "/images/vr.avif", description: "Traditional African necklace made with love.", category: "drones & Cameras" },
  { id: 43, name: "Leather Sandals", price: 39.99, image: "/images/smartphone.avif", description: "Comfortable and stylish handmade leather sandals.", category: "mobile & WristWatch" }
];

const categories = [
  "mobile & WristWatch",
  "drones & Cameras",
  "HeadPhones & Speaker",
  "Tv & Home Cinemas",
  "Computer",
  "Tablet"
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("mobile & WristWatch");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchCategory = product.category === activeCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="p-6">
      <motion.h2
        className="mb-6 text-3xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Shop Our Products
      </motion.h2>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 text-sm border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm capitalize transition duration-200 ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}
