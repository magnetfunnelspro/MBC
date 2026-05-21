import { useEffect } from "react";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// User Pages
import Cart from "./pages/user/Cart";
import Checkout from "./pages/user/Checkout";
import Thanks from "./pages/user/Thanks";

// Legal Pages
import Policies from "./pages/legal/Policies"
import Terms from "./pages/legal/Terms"
import Refund from "./pages/legal/Refund"
import Shipping from "./pages/legal/Shipping"

const AppRouter = () => {
  // Meta Pixel
  useEffect(() => {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };

      if (!f._fbq) f._fbq = n;

      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];

      t = b.createElement(e);
      t.async = true;
      t.src = v;

      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js",
    );

    fbq("init", "1991052645620698");
    fbq("track", "PageView");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      {/* Marquee */}
      <div className="w-full overflow-hidden bg-orange text-cream font-['Space_Grotesk']">
        <motion.div
          className="flex w-max whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-4 p-2.5 pl-0 pr-4"
            >
              <span className="font-semibold font-['Poppins']">
                मैं भी कॉकरोच
              </span>

              <span>•</span>

              <span className="font-semibold">The Voice of Gen-Z</span>

              <span>•</span>

              <span className="font-semibold font-['Poppins']">
                बेरोजगार लेकिन स्टाइलिश
              </span>

              <span>•</span>

              <span className="font-semibold">Oversized Chaos</span>

              <span>•</span>
            </div>
          ))}
        </motion.div>
      </div>

      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />

        {/* User Pages */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thanks" element={<Thanks />} />

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<Policies />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/shipping-policy" element={<Shipping />} />

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
