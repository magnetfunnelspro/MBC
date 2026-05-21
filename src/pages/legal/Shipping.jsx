import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Shipping = () => {
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
            Shipping
            <span className="text-orange"> Policy</span>
          </h1>

          <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
            This Shipping Policy explains how orders placed on Mai Bhi
            Cockroach are processed, shipped, and delivered across India.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-brown text-cream rounded-[2rem] p-6 xl:p-10 flex flex-col gap-8 shadow-2xl">
          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              1. Order Processing Time
            </h2>

            <p className="opacity-80 leading-relaxed">
              Orders are typically processed within 1-3 business days after
              successful payment confirmation or order verification.
            </p>

            <ul className="list-disc pl-5 opacity-80 leading-relaxed flex flex-col gap-2">
              <li>Orders are not processed on Sundays or public holidays.</li>

              <li>
                During limited drops, sales, or high-demand periods, processing
                may take slightly longer.
              </li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              2. Delivery Timeline
            </h2>

            <p className="opacity-80 leading-relaxed">
              Estimated delivery timelines may vary depending on your location
              and courier partner availability.
            </p>

            <ul className="list-disc pl-5 opacity-80 leading-relaxed flex flex-col gap-2">
              <li>Metro Cities: 3-5 business days</li>

              <li>Other Cities & Towns: 5-8 business days</li>

              <li>Remote Areas: 7-12 business days</li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              3. Shipping Charges
            </h2>

            <p className="opacity-80 leading-relaxed">
              Shipping charges are calculated during checkout and may vary based
              on location, order quantity, promotional offers, or payment
              method selected.
            </p>

            <ul className="list-disc pl-5 opacity-80 leading-relaxed flex flex-col gap-2">
              <li>Partial COD orders may include additional COD charges.</li>

              <li>
                Shipping charges, if applicable, will be shown before payment.
              </li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              4. Order Tracking
            </h2>

            <p className="opacity-80 leading-relaxed">
              Once your order has been shipped, tracking details may be shared
              through SMS, WhatsApp, email, or other available communication
              channels.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              5. Incorrect Shipping Information
            </h2>

            <p className="opacity-80 leading-relaxed">
              Customers are responsible for providing accurate shipping
              information during checkout.
            </p>

            <ul className="list-disc pl-5 opacity-80 leading-relaxed flex flex-col gap-2">
              <li>
                We are not responsible for delays caused by incorrect addresses
                or phone numbers.
              </li>

              <li>
                Additional shipping charges may apply for re-delivery attempts.
              </li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              6. Failed Deliveries
            </h2>

            <p className="opacity-80 leading-relaxed">
              Orders returned due to failed delivery attempts, refusal to
              accept, unreachable phone numbers, or incorrect addresses may be
              canceled without refund of shipping or COD charges.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              7. Delays Beyond Our Control
            </h2>

            <p className="opacity-80 leading-relaxed">
              Delivery timelines may be affected due to weather conditions,
              natural disasters, strikes, government restrictions, courier
              delays, or other unforeseen circumstances beyond our control.
            </p>
          </div>

          {/* Legal Disclaimer */}
          <div className="bg-cream/10 border border-cream/10 rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="text-3xl font-black font-['Englebert'] text-orange">
              Independent Brand Disclaimer
            </h2>

            <p className="opacity-80 leading-relaxed">
              Mai Bhi Cockroach is an independent clothing and lifestyle brand
              created for parody, meme culture, satire, and entertainment
              purposes only.
            </p>

            <p className="opacity-80 leading-relaxed">
              We are not affiliated with, endorsed by, or officially connected
              to any political party, organization, movement, or government
              entity.
            </p>
          </div>

          {/* Support */}
          <div className="bg-orange text-cream rounded-2xl p-6 flex flex-col gap-3">
            <h2 className="text-3xl font-black font-['Englebert']">
              Shipping Support
            </h2>

            <p className="leading-relaxed">
              If you have questions regarding your shipment, delivery status, or
              order tracking, please contact us through our official support
              channels with your order details.
            </p>
          </div>
        </div>

        {/* CTA */}
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

export default Shipping;