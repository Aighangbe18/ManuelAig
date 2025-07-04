import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const companyLogos = [
    "slack",
    "framer",
    "netflix",
    "google",
    "linkedin",
    "instagram",
    "facebook",
  ];

  const slides = [
    "/images/hero.avif",
    "/images/hero2.avif",
   "/images/hero.avif",
    "/images/hero2.avif",
    "/images/hero.avif",
    "/images/hero2.avif",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Welcome Section */}
      <div className="p-6 bg-gradient-to-br from-blue-100 to-white min-h-[80vh] flex flex-col items-center justify-center text-center">
        <motion.h1
          className="mb-4 text-4xl font-bold text-blue-800 md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to MANUEL AIG ELECTRONICS
        </motion.h1>

        <motion.p
          className="max-w-xl mb-6 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Discover amazing products at great prices. Start shopping now!
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link to="/shop">
            <button className="px-6 py-3 text-lg text-white transition bg-blue-600 rounded-full hover:bg-blue-700">
              Browse Shop
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Hero Image with Description */}
      <div className="px-6 py-12 text-center bg-white">
        <h2 className="mb-4 text-3xl font-bold text-blue-800 md:text-4xl">
          Quality Electronics. Trusted Service.
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-600 text-md md:text-lg">
          At Manuel AIG Electronics, we offer only the best electronics backed
          by a reputation of trust and service excellence. Explore our
          collection today.
        </p>

        {/* Image Slider */}
        <div className="flex items-center justify-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide Images */}
          <div className="w-full max-w-3xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="flex-shrink-0 w-full"
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrolling Company Logos */}
      <div className="w-full py-10 overflow-hidden bg-white select-none">
        <style>{`
          .marquee-inner {
            animation: marqueeScroll 20s linear infinite;
          }

          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute top-0 left-0 z-10 w-20 h-full pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="marquee-inner flex min-w-[200%]">
            {[...companyLogos, ...companyLogos].map((logo, i) => (
              <img
                key={i}
                src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${logo}.svg`}
                alt={logo}
                className="object-contain h-10 mx-6"
                draggable={false}
              />
            ))}
          </div>
          <div className="absolute top-0 right-0 z-10 w-20 h-full pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </>
  );
}
