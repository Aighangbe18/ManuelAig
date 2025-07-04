import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="overflow-hidden transition bg-white rounded-lg shadow hover:shadow-lg"
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full h-80"
      />
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-gray-800">
          {product.name}
        </h3>
        <p className="mb-3 font-bold text-blue-600">${product.price}</p>
        <Link to={`/product/${product.id}`}>
          <button className="w-full py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
