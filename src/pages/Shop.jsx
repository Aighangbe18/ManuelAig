import { useState } from "react";
import { motion } from "framer-motion";
import { Search, PackageSearch } from "lucide-react";
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
    <div className="p-6 max-w-7xl mx-auto">
      <motion.h2
        className="mb-10 text-4xl font-extrabold text-center text-blue-700 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Our Unique Collections
      </motion.h2>

      {/* Search bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-xl">
          <Search className="absolute top-2.5 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition duration-200 shadow-sm border backdrop-blur-md ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 hover:bg-blue-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <PackageSearch className="w-16 h-16 text-blue-400 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500">Try searching with different keywords or categories.</p>
        </motion.div>
      )}
    </div>
  );
}
