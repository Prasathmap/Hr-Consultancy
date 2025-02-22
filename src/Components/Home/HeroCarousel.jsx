import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/HeroCarousel-pics/H1.png",
  "/HeroCarousel-pics/H2.avif",
  "/HeroCarousel-pics/H3.avif",
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] flex items-center overflow-hidden bg-azure">
      <div className="w-1/2 p-10 flex flex-col justify-center overflow-hidden">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-4">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Icon"
            className="w-10 h-10 object-cover rounded-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 1 }}
          />
          Welcome to Our Platform
        </h1>
        <p className="text-lg text-gray-700">Discover amazing content and experiences with us. Stay tuned for updates and more!</p>
      </div>
      <div className="w-1/2 h-full">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Hero Slide"
            className="w-full h-full object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroCarousel;
