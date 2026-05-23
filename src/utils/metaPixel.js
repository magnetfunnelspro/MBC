// =========================
// INIT PIXEL
// =========================

export const initMetaPixel = () => {
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;

    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };

    if (!f._fbq) f._fbq = n;

    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];

    t = b.createElement(e);
    t.async = true;

    t.src = "https://connect.facebook.net/en_US/fbevents.js";

    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script");

  fbq("init", "27300496442877358");

  fbq("track", "PageView");
};

// =========================
// ADD TO CART
// =========================

export const trackAddToCart = (product) => {
  if (!window.fbq || !product) return;

  fbq("track", "AddToCart", {
    content_name: product.title || "",
    value: product.price || 0,
    currency: "INR",
  });
};

// =========================
// REMOVE FROM CART
// =========================

export const trackRemoveFromCart = (product) => {
  if (!window.fbq) return;

  fbq("track", "RemoveFromCart", {
    content_name: product.title,
    value: product.price,
    currency: "INR",
  });
};

// =========================
// INITIATE CHECKOUT
// =========================

export const trackInitiateCheckout = (cart, totalValue) => {
  if (!window.fbq) return;

  fbq("track", "InitiateCheckout", {
    value: totalValue,
    currency: "INR",
  });
};

// =========================
// PURCHASE
// =========================

export const trackPurchase = (products, totalValue, paymentId) => {
  if (!window.fbq) return;

  fbq("track", "Purchase", {
    value: totalValue,
    currency: "INR",
    transaction_id: paymentId,
  });
};
