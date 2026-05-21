import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen p-8 px-4 xl:px-16 bg-cream text-brown font-['Space_Grotesk'] overflow-hidden flex items-center justify-center">
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange opacity-20 blur-3xl rounded-full"></div>

      {/* Main Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 max-w-2xl w-full bg-brown text-cream rounded-[2rem] p-8 xl:p-12 flex flex-col items-center text-center gap-8 shadow-2xl"
      >
        {/* 404 */}
        <div className="flex flex-col items-center gap-2 leading-none">
          <h1 className="text-[7rem] xl:text-[10rem] font-black font-['Englebert'] text-orange">
            404
          </h1>

          <p className="text-xl xl:text-2xl font-semibold opacity-80">
            This page escaped the cockroach colony.
          </p>
        </div>

        {/* Meme Box */}
        <div className="bg-orange text-cream rounded-2xl p-6 text-2xl font-['Englebert'] leading-snug max-w-xl">
          “Even cockroaches couldn't survive this broken link.”
        </div>

        {/* Description */}
        <div className="flex flex-col gap-3 max-w-lg">
          <p className="text-lg opacity-80 leading-relaxed">
            The page you're looking for either doesn't exist or has been
            emotionally unavailable since 2024.
          </p>

          <p className="opacity-60">But don't worry. The movement continues.</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col xl:flex-row gap-4 w-full">
          <Link
            to="/"
            className="flex-1 bg-orange text-cream rounded-xl p-4 font-bold hover:scale-[1.02] transition-all duration-300"
          >
            Return Home
          </Link>

          <Link
            to="/cart"
            className="flex-1 border-2 border-cream/20 rounded-xl p-4 font-bold hover:bg-cream hover:text-brown transition-all duration-300"
          >
            View Cart
          </Link>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 text-sm opacity-60">
          <span>🪳</span>

          <span>Built for survivors of internet chaos.</span>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
