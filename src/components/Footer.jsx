import { Facebook, FacebookIcon, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

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
    {
      title: "Follow Us",
      links: [
        { label: <Instagram/>, to: "#" },
        { label: <Twitter/>, to: "#" },
        { label: <Facebook/>, to: "#" },
        { label: <Youtube/>, to: "#" },
      ],
    },
  ];

  return (
    <footer className="mt-12 text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-300">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col justify-between gap-10 py-5 border-b md:flex-row border-gray-400/20">
          {/* Branding */}
          <div>
            <Link to="/" className="text-2xl font-bold text-blue-700 dark:text-white">
              <img src="/images/emma2.png" className="w-32 h-30"/>
            </Link>
            <p className="max-w-[410px] text-sm">
              Welcome to MANUEL AIG, your one-stop destination for quality products, fast delivery, and great service.
            </p>
          </div>

          {/* Link Sections */}
          <div className="flex flex-wrap gap-10 w-full md:w-[60%] justify-between">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="mb-3 text-base font-semibold text-gray-800 dark:text-white">
                  {section.title}
                </h3>
                <ul className="space-y-1 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      {link.to.startsWith("/") ? (
                        <Link to={link.to} className="transition hover:underline">
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.to} className="transition hover:underline" target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="py-4 text-xs text-center text-gray-500 md:text-sm dark:text-gray-400">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
