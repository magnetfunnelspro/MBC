import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop All", path: "/" },
    { name: "Contact", path: "mailto:talktosuraj01@gmail.com" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-cream">
        <div className="w-full p-4 px-4 xl:px-16 flex items-center justify-between font-['Space_Grotesk']">
          {/* Brand Logo */}
          <Link
            to="/"
            className="text-xl xl:text-2xl font-semibold font-['Poppins']"
          >
            मैं भी कॉकरोच 🪳
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="relative text-brown font-medium hover:text-orange transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/cart"
              className="relative text-xl text-brown hover:text-orange transition"
            >
              <i className="ri-shopping-bag-line"></i>

              <span className="absolute -top-0.5 -right-1.5 bg-orange text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            </Link>
          </nav>

          {/* Mobile Controls */}
          <div className="flex xl:hidden items-center gap-6 text-2xl">
            <Link to="/cart" className="relative">
              <i className="ri-shopping-bag-line"></i>

              <span className="absolute -top-1 -right-1 bg-orange text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </Link>

            <button onClick={() => setIsOpen(true)}>
              <i className="ri-menu-3-line"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-[350px] bg-cream z-50 shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-4 border-b border-brown/20 flex items-center justify-between">
                {/* Brand Logo */}
                <Link
                  to="/"
                  className="text-xl xl:text-2xl font-semibold font-['Poppins']"
                >
                  मैं भी कॉकरोच 🪳
                </Link>

                <button onClick={() => setIsOpen(false)}>
                  <i className="ri-close-large-line text-2xl"></i>
                </button>
              </div>

              {/* Navigation */}
              <div className="flex flex-col items-end p-4 gap-4 text-lg font-semibold">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-orange transition font-['Space_Grotesk']"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto p-4">
                <Link
                  to="/"
                  className="w-full flex items-center justify-center bg-orange text-cream p-4 rounded-full font-bold text-lg font-['Space_Grotesk']"
                >
                  Shop The Drop
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
