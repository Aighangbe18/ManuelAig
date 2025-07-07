import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, PackageSearch } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";



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

  // Auto-scroll after 5 seconds of inactivity
  useEffect(() => {
    let timeout;

    const scrollWindow = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const atBottom = scrollY + windowHeight >= documentHeight - 10;

      if (!atBottom) {
        window.scrollBy({ top: 300, behavior: "smooth" });
      }
    };

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(scrollWindow, 5000);
    };

    const events = ["scroll", "mousemove", "keydown", "click"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      clearTimeout(timeout);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, []);

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