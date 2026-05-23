import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Thanks = () => {
  return (
    <>
      <Helmet>
        <title>Order Confirmed | Main Bhi Cockroach</title>

        <meta
          name="description"
          content="Your order has been confirmed successfully. Welcome to the Main Bhi Cockroach survival movement."
        />

        <meta
          property="og:title"
          content="Order Confirmed | Main Bhi Cockroach"
        />

        <meta
          property="og:description"
          content="Your cockroach survival kit is officially being prepared for dispatch."
        />

        <meta property="og:image" content="/Logo.png" />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-cream text-brown font-['Space_Grotesk'] overflow-hidden flex items-center justify-center p-8 px-4 xl:px-16">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange opacity-20 blur-3xl rounded-full"></div>

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
          className="relative z-10 max-w-2xl w-full bg-brown text-cream rounded-[2rem] p-8 xl:p-12 flex flex-col gap-8 items-center text-center shadow-2xl"
        >
          {/* Icon */}
          <div className="w-24 h-24 rounded-full bg-orange flex items-center justify-center text-5xl">
            🪳
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl xl:text-7xl font-black font-['Englebert'] leading-none">
              Order
              <span className="text-orange"> Confirmed</span>
            </h2>

            <p className="text-lg opacity-80 leading-relaxed max-w-lg">
              Congratulations. Your cockroach survival kit is officially being
              prepared for dispatch.
            </p>
          </div>

          {/* Order Status */}
          <div className="w-full bg-cream/10 rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="opacity-70">Status</span>

              <span className="font-bold text-orange">Processing Order</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="opacity-70">Estimated Delivery</span>

              <span className="font-bold">5-7 Days</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="opacity-70">Payment</span>

              <span className="font-bold">Confirmed</span>
            </div>
          </div>

          {/* Funny Quote */}
          <div className="bg-orange text-cream rounded-2xl p-6 text-2xl font-['Englebert'] leading-snug">
            “Another citizen got the identity of Cockroach.”
          </div>

          {/* Buttons */}
          <div className="flex flex-col xl:flex-row gap-4 w-full">
            <Link
              to="/"
              className="flex-1 bg-orange text-cream rounded-xl p-4 font-bold hover:scale-[1.02] transition-all duration-300 text-center"
            >
              Return to Homepage
            </Link>

            <a
              href="https://instagram.com/cockroachjantaparty/"
              target="_blank"
              className="flex-1 border-2 border-cream/20 rounded-xl p-4 font-bold hover:bg-cream hover:text-brown transition-all duration-300 text-center"
            >
              Follow The Movement
            </a>
          </div>

          {/* Footer */}
          <p className="text-sm opacity-60 leading-relaxed">
            Built for survivors of Indian internet chaos.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Thanks;
