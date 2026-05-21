import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className="bg-brown text-cream p-8 px-4 xl:px-16 font-['Space_Grotesk']">
      <div className="flex flex-col gap-8">
        {/* Top Section */}
        <div className="grid xl:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-xl xl:text-2xl font-semibold font-['Poppins']"
            >
              मैं भी कॉकरोच 🪳
            </Link>

            <p className="opacity-80 max-w-sm leading-relaxed">
              Meme-powered streetwear inspired by Indian internet culture, Gen-Z
              humor, and everyday survival.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 text-2xl pt-2">
              <a
                href="https://www.instagram.com/mainbhicockroachindia/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange transition"
              >
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href="mailto:talktosuraj01@gmail.com"
                className="hover:text-orange transition"
              >
                <i className="ri-mail-line"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Quick Links</h4>

            <Link to="/" className="opacity-80 hover:opacity-100">
              Home
            </Link>

            <Link to="/" className="opacity-80 hover:opacity-100">
              Shop All
            </Link>

            <Link to="mailto:talktosuraj01@gmail.com" className="opacity-80 hover:opacity-100">
              Contact
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold">Legal</h4>

            <Link to="/privacy-policy" className="opacity-80 hover:opacity-100">
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="opacity-80 hover:opacity-100"
            >
              Terms & Conditions
            </Link>

            <Link to="/refund-policy" className="opacity-80 hover:opacity-100">
              Refund Policy
            </Link>

            <Link
              to="/shipping-policy"
              className="opacity-80 hover:opacity-100"
            >
              Shipping Policy
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-cream/10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col xl:flex-row justify-between gap-8 text-sm">
          <div className="flex flex-col gap-2 opacity-70 max-w-2xl leading-relaxed">
            <p>
              © 2026 <span className="font-['Poppins']">मैं भी कॉकरोच</span>.
              All rights reserved.
            </p>

            <p>
              This brand is intended as satire/parody streetwear inspired by
              internet culture and does not represent any political party,
              government organization, or public institution.
            </p>

            <p>
              Product images and designs are protected under applicable
              copyright and trademark laws.
            </p>
          </div>

          <div className="flex flex-col gap-2 opacity-70">
            <p>
              Made in India for <b>Coackroaches</b>.
            </p>

            <p>
              <b>Instagram:</b> @mainbhicockroachindia
            </p>
            <p>
              <b>Email:</b> talktosuraj01@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
