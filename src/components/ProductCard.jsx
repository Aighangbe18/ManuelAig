import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
    >
      <div className="overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-64 transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-blue-600 font-bold text-base mb-4">
          ${product.price.toFixed(2)}
        </p>

        <Link to={`/product/${product.id}`}>
          <button className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
