import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const companyLogos = [
    "slack", "framer", "netflix", "google", "linkedin", "instagram", "facebook"
  ];

  const slides = [
    "/images/hero.avif",
    "/images/hero2.avif",
    "/images/go.avif",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <motion.h1
            className="text-4xl font-bold md:text-6xl mb-4 drop-shadow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Welcome to MANUEL AIG ELECTRONICS
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg md:text-xl text-gray-200 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Your one-stop shop for premium electronics and accessories. Shop with confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <Link to="/shop">
              <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition">
                Shop Now
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === currentSlide ? "bg-white" : "bg-white/50"}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* Featured Info */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Quality Electronics. Trusted Service.
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-md md:text-lg">
          Shop the best deals on phones, accessories, audio gear, smart devices and more — all with fast delivery and guaranteed quality.
        </p>
      </section>

      {/* Scrolling Logos */}
      <div className="py-10 bg-gray-50 overflow-hidden select-none">
        <style>{`
          .marquee {
            animation: scroll 25s linear infinite;
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="flex whitespace-nowrap marquee min-w-[200%]">
            {[...companyLogos, ...companyLogos].map((logo, i) => (
              <img
                key={i}
                src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${logo}.svg`}
                alt={logo}
                className="h-10 mx-10 object-contain"
                draggable="false"
              />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </>
  );
}
