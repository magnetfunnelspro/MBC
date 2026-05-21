import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Policies = () => {
  return (
    <div className="min-h-screen bg-cream text-brown font-['Space_Grotesk'] overflow-hidden p-4 xl:p-16">
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange opacity-20 blur-3xl rounded-full"></div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col gap-8"
      >
        {/* Heading */}
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl xl:text-7xl font-black font-['Englebert'] leading-none">
            Privacy
            <span className="text-orange"> Policy</span>
          </h1>

          <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
            Your privacy matters to us. This Privacy Policy explains how Mai Bhi
            Cockroach collects, uses, and protects your information when you use
            our website.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-brown text-cream rounded-[2rem] p-6 xl:p-10 flex flex-col gap-8 shadow-2xl">
          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              1. Information We Collect
            </h2>

            <p className="opacity-80 leading-relaxed">
              When you place an order or interact with our website, we may
              collect:
            </p>

            <ul className="flex flex-col gap-2 opacity-80 leading-relaxed list-disc pl-5">
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Shipping Address</li>
              <li>Pincode, City & State</li>
              <li>Payment Information</li>
              <li>Order Details & Product Preferences</li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              2. How We Use Your Information
            </h2>

            <p className="opacity-80 leading-relaxed">
              Your information is used only for:
            </p>

            <ul className="flex flex-col gap-2 opacity-80 leading-relaxed list-disc pl-5">
              <li>Processing and delivering your orders</li>

              <li>Customer support and order updates</li>

              <li>Improving our website and user experience</li>

              <li>Preventing fraudulent transactions</li>

              <li>Payment verification and shipping coordination</li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              3. Payment Security
            </h2>

            <p className="opacity-80 leading-relaxed">
              All online payments are securely processed through Razorpay. We do
              not store your debit card, credit card, UPI, or banking
              information on our servers.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              4. Sharing of Information
            </h2>

            <p className="opacity-80 leading-relaxed">
              We do not sell or rent your personal information to third parties.
              Your information may only be shared with trusted logistics,
              payment, and operational partners required to fulfill your order.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              5. Cookies & Analytics
            </h2>

            <p className="opacity-80 leading-relaxed">
              Our website may use cookies and analytics tools to improve
              performance, understand visitor behavior, and enhance the shopping
              experience.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              6. Data Protection
            </h2>

            <p className="opacity-80 leading-relaxed">
              We take reasonable security measures to protect your personal
              information from unauthorized access, misuse, or disclosure.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              7. Your Rights
            </h2>

            <p className="opacity-80 leading-relaxed">
              You may contact us anytime to request updates, corrections, or
              deletion of your personal information.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              8. Changes To This Policy
            </h2>

            <p className="opacity-80 leading-relaxed">
              Mai Bhi Cockroach reserves the right to update or modify this
              Privacy Policy at any time without prior notice.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-orange text-cream rounded-2xl p-6 flex flex-col gap-3">
            <h2 className="text-3xl font-black font-['Englebert']">
              Contact Us
            </h2>

            <p className="leading-relaxed">
              If you have any questions regarding this Privacy Policy, feel free
              to contact us through our official social media channels or email
              support.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col xl:flex-row gap-4">
          <Link
            to="/"
            className="bg-orange text-cream rounded-xl p-4 font-bold text-center hover:scale-[1.02] transition-all duration-300 flex-1"
          >
            Return Home
          </Link>

          <Link
            to="/cart"
            className="border-2 border-brown rounded-xl p-4 font-bold text-center hover:bg-brown hover:text-cream transition-all duration-300 flex-1"
          >
            View Cart
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center opacity-60 text-sm">
          © 2026 Mai Bhi Cockroach. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Policies;
