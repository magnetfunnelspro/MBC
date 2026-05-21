import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Terms = () => {
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
            Terms &<span className="text-orange"> Conditions</span>
          </h1>

          <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
            By accessing or using the Mai Bhi Cockroach website, you agree to
            comply with the following terms and conditions.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-brown text-cream rounded-[2rem] p-6 xl:p-10 flex flex-col gap-8 shadow-2xl">
          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              1. Acceptance Of Terms
            </h2>

            <p className="opacity-80 leading-relaxed">
              By using this website, placing an order, or interacting with our
              services, you confirm that you agree to these Terms & Conditions.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              2. Product Information
            </h2>

            <p className="opacity-80 leading-relaxed">
              We strive to display product colors, designs, pricing, and details
              accurately. However, slight differences may occur due to screen
              settings, printing variations, or manufacturing updates.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              3. Pricing & Payments
            </h2>

            <p className="opacity-80 leading-relaxed">
              All prices displayed on the website are in INR (₹). Payments are
              securely processed through Razorpay and supported payment
              providers.
            </p>

            <ul className="list-disc pl-5 opacity-80 leading-relaxed flex flex-col gap-2">
              <li>Partial COD payments may include additional COD charges.</li>

              <li>Orders are processed only after successful payment.</li>

              <li>
                We reserve the right to update pricing at any time without prior
                notice.
              </li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              4. Shipping & Delivery
            </h2>

            <p className="opacity-80 leading-relaxed">
              Delivery timelines are estimated and may vary depending on your
              location, courier availability, weather conditions, or operational
              delays.
            </p>

            <ul className="list-disc pl-5 opacity-80 leading-relaxed flex flex-col gap-2">
              <li>Customers must provide accurate shipping information.</li>

              <li>
                We are not responsible for delays caused by incorrect address
                details.
              </li>

              <li>
                Shipping timelines may vary during high-demand drops or sales.
              </li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              5. Returns & Exchanges
            </h2>

            <p className="opacity-80 leading-relaxed">
              Returns or exchanges are accepted only for damaged, defective, or
              incorrect products received by the customer.
            </p>

            <ul className="list-disc pl-5 opacity-80 leading-relaxed flex flex-col gap-2">
              <li>Products must be unused and in original condition.</li>

              <li>
                Return requests should be raised within 48 hours of delivery.
              </li>

              <li>
                Items purchased during limited drops or clearance sales may not
                be eligible for return.
              </li>
            </ul>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              6. Intellectual Property
            </h2>

            <p className="opacity-80 leading-relaxed">
              All website content including designs, graphics, branding, product
              visuals, and written material belongs to Mai Bhi Cockroach and may
              not be copied, reproduced, or distributed without permission.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              7. User Conduct
            </h2>

            <p className="opacity-80 leading-relaxed">
              Users must not misuse the website, attempt unauthorized access,
              submit false information, or engage in activities that may harm
              the platform or other users.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              8. Limitation Of Liability
            </h2>

            <p className="opacity-80 leading-relaxed">
              Mai Bhi Cockroach shall not be held responsible for indirect,
              incidental, or consequential damages arising from the use of this
              website or purchased products.
            </p>
          </div>

          {/* Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl xl:text-4xl font-black font-['Englebert'] text-orange">
              9. Changes To Terms
            </h2>

            <p className="opacity-80 leading-relaxed">
              We reserve the right to update or modify these Terms & Conditions
              at any time without prior notice.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-orange text-cream rounded-2xl p-6 flex flex-col gap-3">
            <h2 className="text-3xl font-black font-['Englebert']">
              Contact Support
            </h2>

            <p className="leading-relaxed">
              For any questions related to orders, payments, returns, or legal
              policies, please contact us through our official social media
              channels or support email.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
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

export default Terms;
