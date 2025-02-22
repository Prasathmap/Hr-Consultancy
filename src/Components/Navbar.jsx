import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      setNavbar(window.scrollY >= 10);
    };
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/our-services" },
    { name: "About Us", path: "/about-us" },
    { name: "Blog", path: "/blog" },
    { name: "Event", path: "/event" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden fixed inset-0 z-50 mt-16 bg-black bg-opacity-90 flex flex-col items-center justify-center p-6"
          >
            <button className="absolute top-5 right-5" onClick={() => setIsOpenMenu(false)}>
              <ImCross color="white" size={30} />
            </button>
            <nav className="flex flex-col gap-6 text-white text-lg text-center p-5 rounded-xl bg-gray-900 shadow-xl border border-gray-700">
              {["Home", "Our Services", "About Us", "Blog", "Event", "Contact Us"].map((item, index) => (
                <Link
                  key={index}
                  to={item.toLowerCase().replace(/\s+/g, "-")}
                  onClick={() => setIsOpenMenu(false)}
                  className="hover:text-gray-300 transition transform hover:scale-105"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Header (Main Navbar) */}
      <div className={`fixed  w-full z-50 flex items-center justify-between px-6 sm:px-14 border rounded-[35px] py-3 transition-all duration-300 ${navbar ? "bg-white bg-opacity-20  shadow-lg" : "bg-azure"}`}>
        
        {/* Left Side (Logo) */}
        <div>
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-20 sm:w-28 max-h-20 object-contain" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpenMenu(true)}>
            <GiHamburgerMenu size={38} className="text-white hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Right Side (Navigation Links) */}
        <nav className="hidden sm:flex items-center gap-6 text-#0000FF text-[18px] font-semibold tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.path} // Using path as a unique key
              to={link.path}
              className="hover:text-#ea905c-300 transition transform hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
