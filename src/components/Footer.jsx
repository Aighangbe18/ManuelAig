import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", to: "/" },
        { label: "Shop", to: "/shop" },
        { label: "Cart", to: "/cart" },
        { label: "Checkout", to: "/checkout" },
      ],
    },
    {
      title: "Need Help?",
      links: [
        { label: "Delivery Information", to: "/delivery-info" },
        { label: "Return & Refund Policy", to: "/refund-policy" },
        { label: "Payment Methods", to: "/payment-methods" },
        { label: "Track your Order", to: "/track-order" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" },
  ];

  return (
    <motion.footer
      className="mt-16 bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-6 py-10 mx-auto max-w-7xl md:px-10 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col justify-between gap-10 pb-10 border-b md:flex-row border-gray-400/20">
          {/* Branding */}
          <motion.div
            className="max-w-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-4 text-2xl font-bold text-blue-700 dark:text-white">
              <img src="/images/emma2.png" alt="Logo" className="w-36" />
            </Link>
            <p className="text-sm leading-relaxed">
              Welcome to <span className="font-medium text-blue-600 dark:text-blue-400">MANUEL AIG</span>, your one-stop destination for
              quality products, fast delivery, and great service.
            </p>
          </motion.div>

          {/* Navigation Sections */}
          <div className="flex flex-wrap justify-between w-full gap-10 md:w-[60%]">
            {linkSections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="mb-3 text-base font-semibold text-gray-800 dark:text-white">
                  {section.title}
                </h3>
                <ul className="space-y-1 text-sm">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      {link.to.startsWith("/") ? (
                        <Link to={link.to} className="transition hover:text-blue-600 dark:hover:text-blue-400">
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.to} target="_blank" rel="noreferrer" className="transition hover:text-blue-600">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="mb-3 text-base font-semibold text-gray-800 dark:text-white">Follow Us</h3>
              <div className="flex gap-4 mt-2">
                {socialIcons.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 transition-all bg-white rounded-full shadow hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:hover:bg-blue-500"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.p
          className="pt-6 mt-6 text-xs text-center text-gray-500 border-t dark:text-gray-400 border-gray-400/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} MANUEL AIG. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
