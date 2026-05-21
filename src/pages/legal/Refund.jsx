import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Refund = () => {
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
            Refund
            <span className="text-orange"> Policy</span>
          </h1>

          <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
            This Refund Policy explains the conditions under which refunds,
            replacements, or exchanges may be approved for purchases made from
            Mai Bhi Cockroach.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-brown text-cream rounded-[2rem] p-6 xl:p-10 flex flex-col gap-8 shadow-2xl">
          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              1. Eligibility For Refunds
            </h2>

            <p className="opacity-80 leading-relaxed">
              Refunds or replacements are only applicable in the following
              situations:
            </p>

            <ul className="list-disc pl-5 opacity-80 leading-relaxed flex flex-col gap-2">
              <li>Customer received a damaged product</li>

              <li>Customer received the wrong product or size</li>

              <li>Product has a manufacturing defect</li>

              <li>Order was lost during shipping and not delivered</li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              2. Non-Refundable Situations
            </h2>

            <p className="opacity-80 leading-relaxed">
              Refunds or returns will not be accepted for:
            </p>

            <ul className="list-disc pl-5 opacity-80 leading-relaxed flex flex-col gap-2">
              <li>Change of mind after purchase</li>

              <li>Incorrect size selected by the customer</li>

              <li>Minor color differences due to screen variations</li>

              <li>Products damaged due to misuse or improper handling</li>

              <li>Limited edition or special drop products unless defective</li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              3. Refund Request Timeline
            </h2>

            <p className="opacity-80 leading-relaxed">
              Customers must raise refund or replacement requests within
              48 hours of receiving the order. Requests raised after this period
              may not be accepted.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              4. Verification Process
            </h2>

            <p className="opacity-80 leading-relaxed">
              To process a refund or replacement request, customers may be
              asked to provide:
            </p>

            <ul className="list-disc pl-5 opacity-80 leading-relaxed flex flex-col gap-2">
              <li>Order confirmation details</li>

              <li>Images or videos of the product received</li>

              <li>Packaging photos for shipping verification</li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              5. Refund Processing Time
            </h2>

            <p className="opacity-80 leading-relaxed">
              Approved refunds are usually processed within 5-7 business days.
              The final credit timeline may depend on the customer’s bank,
              payment provider, or Razorpay processing timelines.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              6. Partial COD Payments
            </h2>

            <p className="opacity-80 leading-relaxed">
              For partial COD orders, only the prepaid amount paid online may
              be refunded if the order qualifies under this policy. COD charges
              and shipping charges may be non-refundable unless the issue was
              caused by us.
            </p>
          </div>

          {/* Legal Protection */}
          <div className="bg-cream/10 border border-cream/10 rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="text-3xl font-black font-['Englebert'] text-orange">
              Independent Brand Disclaimer
            </h2>

            <p className="opacity-80 leading-relaxed">
              Mai Bhi Cockroach is an independent clothing and merchandise
              brand created for parody, meme culture, and entertainment
              purposes.
            </p>

            <p className="opacity-80 leading-relaxed">
              We are not affiliated with, associated with, endorsed by, or
              officially connected to any political party, organization,
              movement, government body, or public institution.
            </p>

            <p className="opacity-80 leading-relaxed">
              Any references, slogans, designs, satire, or meme-style content
              are intended solely for creative, humorous, artistic, and
              cultural expression.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-orange text-cream rounded-2xl p-6 flex flex-col gap-3">
            <h2 className="text-3xl font-black font-['Englebert']">
              Need Help?
            </h2>

            <p className="leading-relaxed">
              For refund, replacement, or order-related queries, please contact
              us through our official support channels with your order details.
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

export default Refund;