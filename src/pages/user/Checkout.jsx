import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_DATABASE_CHAT_ID;

  const navigate = useNavigate();

  const { cart, clearCart, totalPrice, shipping, finalTotal } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("partial");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
  });

  // COD Charges
  const codCharges = paymentMethod === "partial" ? 50 : 0;

  // Amount customer pays now
  const payableNow = paymentMethod === "partial" ? 100 : finalTotal;

  // Remaining amount after delivery
  const remainingAmount =
    paymentMethod === "partial" ? finalTotal - 100 + codCharges : 0;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Place Order
  const placeOrder = async () => {
    if (!form.name || !form.phone || !form.address || !form.pincode) {
      alert("Please fill all required fields");
      return;
    }

    const orderItems = cart
      .map(
        (item, index) => `
${index + 1}. ${item.title}

• Size: ${item.size}
• Quantity: ${item.quantity}
• Price: ₹${item.price}
• Total: ₹${item.price * item.quantity}
`,
      )
      .join("\n");

    const paymentAmount =
      paymentMethod === "partial" ? payableNow * 100 : totalFinalPrice * 100;

    const options = {
      key: import.meta.env.VITE_RZP_LIVE_KEY_ID,

      amount: paymentAmount,

      currency: "INR",

      name: "Mai Bhi Cockroach",

      description:
        paymentMethod === "partial" ? "Partial Payment" : "Full Payment",

      image: "/Logo.png",

      handler: async function (response) {
        try {
          const telegramMessage = `
🪳 NEW ORDER RECEIVED

━━━━━━━━━━━━━━━

👤 CUSTOMER DETAILS

Name: ${form.name}
Phone: ${form.phone}

━━━━━━━━━━━━━━━

📍 SHIPPING ADDRESS

${form.address}
Pincode: ${form.pincode}
City: ${form.city}
State: ${form.state}

━━━━━━━━━━━━━━━

🛒 ORDER ITEMS

${orderItems}

━━━━━━━━━━━━━━━

💳 PAYMENT DETAILS

Payment Method:
${paymentMethod === "partial" ? "PARTIAL COD" : "FULL PAYMENT"}

Paid Now:
₹${paymentMethod === "partial" ? payableNow : totalFinalPrice}

Remaining COD:
₹${paymentMethod === "partial" ? remainingAmount : 0}

━━━━━━━━━━━━━━━

💰 ORDER SUMMARY

Subtotal: ₹${totalPrice}
Shipping: ₹${shipping}
Final Total: ₹${totalFinalPrice}

━━━━━━━━━━━━━━━

🧾 RAZORPAY DETAILS

Payment ID:
${response.razorpay_payment_id}
`;

          await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,

                text: telegramMessage,
              }),
            },
          );

          // Clear Cart
          clearCart();

          window.dispatchEvent(new Event("storage"));

          // Redirect
          navigate("/thanks");
        } catch (error) {
          console.log(error);

          alert("Telegram notification failed");
        }
      },

      prefill: {
        name: form.name,

        contact: form.phone,
      },

      theme: {
        color: "#f97316",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };

  const totalFinalPrice = finalTotal + codCharges;

  return (
    <div className="min-h-screen bg-cream text-brown font-['Space_Grotesk'] p-8 px-4 xl:px-16">
      {/* Heading */}
      <div className="mb-8 flex flex-col gap-2">
        <h2 className="flex gap-2 text-5xl xl:text-7xl font-black font-['Englebert'] leading-none">
          <span className="text-orange">Shipping</span>
          <span>Details</span>
        </h2>

        <p className="opacity-80 text-lg">
          Final step before joining the movement.
        </p>
      </div>

      <div className="grid xl:grid-cols-[1fr_420px] gap-8 items-start">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-8">
          {/* Shipping Details */}
          <div className="bg-brown text-cream rounded-2xl p-6 xl:p-8 flex flex-col gap-5">
            <div>
              <h4 className="text-4xl font-black font-['Englebert']">
                Delivery Address
              </h4>

              <p className="opacity-80 mt-2">
                The cockroaches are preparing your order.
              </p>
            </div>

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="bg-cream text-brown placeholder:text-brown/80 rounded-xl p-4 outline-none"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="bg-cream text-brown placeholder:text-brown/80 rounded-xl p-4 outline-none"
            />

            <textarea
              name="address"
              placeholder="Full Address"
              rows="3"
              onChange={handleChange}
              className="bg-cream text-brown placeholder:text-brown/80 rounded-xl p-4 outline-none resize-none"
            />

            <input
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              className="bg-cream text-brown placeholder:text-brown/80 rounded-xl p-4 outline-none"
            />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <input
                name="city"
                placeholder="City"
                onChange={handleChange}
                className="bg-cream text-brown placeholder:text-brown/80 rounded-xl p-4 outline-none"
              />

              <input
                name="state"
                placeholder="State"
                onChange={handleChange}
                className="bg-cream text-brown placeholder:text-brown/80 rounded-xl p-4 outline-none"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-brown text-cream rounded-2xl p-6 xl:p-8 flex flex-col gap-5">
            <div>
              <h4 className="text-4xl font-black font-['Englebert']">
                Payment Method
              </h4>

              <p className="opacity-80 mt-2">Choose your survival strategy.</p>
            </div>

            {/* Partial Payment */}
            <button
              onClick={() => setPaymentMethod("partial")}
              className={`rounded-2xl p-5 flex items-start justify-between transition-all duration-300 border-2 ${
                paymentMethod === "partial"
                  ? "bg-orange border-orange"
                  : "bg-cream/10 border-cream/10"
              }`}
            >
              <div className="flex flex-col gap-1 text-left">
                <span className="text-xl font-bold">Pay ₹100 Now</span>

                <span className="opacity-80 text-sm leading-relaxed">
                  ₹50 COD charges applied. Remaining amount & COD charges after
                  delivery.
                </span>
              </div>

              <i className="ri-shield-check-line text-2xl"></i>
            </button>

            {/* Full Payment */}
            <button
              onClick={() => setPaymentMethod("full")}
              className={`rounded-2xl p-5 flex items-start justify-between transition-all duration-300 border-2 ${
                paymentMethod === "full"
                  ? "bg-orange border-orange"
                  : "bg-cream/10 border-cream/10"
              }`}
            >
              <div className="flex flex-col gap-1 text-left">
                <span className="text-xl font-bold">Pay Full Amount</span>

                <span className="opacity-80 text-sm leading-relaxed">
                  Secure online payment via Razorpay.
                </span>
              </div>

              <i className="ri-bank-card-line text-2xl"></i>
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-brown text-cream rounded-2xl p-6 xl:p-8 h-fit sticky top-28 flex flex-col gap-6">
          <div>
            <h4 className="text-4xl font-black font-['Englebert']">
              Order Summary
            </h4>

            <p className="opacity-80 mt-2">Your official survival kit.</p>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-1">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-cream/10 rounded-xl p-3"
              >
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="w-20 rounded-lg object-cover"
                />

                <div className="flex flex-col flex-1">
                  <h4 className="font-bold text-lg leading-none">
                    {item.title}
                  </h4>

                  <p className="opacity-80 text-sm mt-2">Size: {item.size}</p>

                  <span className="font-bold mt-1">₹{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="flex flex-col gap-4 border-t border-cream/10 pt-4">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>

            {paymentMethod === "partial" && (
              <div className="flex items-center justify-between">
                <span>COD Charges</span>
                <span>₹50</span>
              </div>
            )}

            <div className="w-full h-[1px] bg-cream/10"></div>

            <div className="flex items-center justify-between text-2xl font-black">
              <span>Total</span>
              <span>₹{totalFinalPrice}</span>
            </div>
          </div>

          {/* Partial Payment Info */}
          {paymentMethod === "partial" && (
            <div className="bg-orange/10 border border-orange rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span>Pay Now</span>

                <span className="font-bold">₹{payableNow}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>After Delivery</span>

                <span className="font-bold">₹{remainingAmount}</span>
              </div>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={placeOrder}
            className="w-full bg-orange text-cream rounded-xl p-4 font-bold text-lg hover:scale-[1.02] transition-all duration-300"
          >
            {paymentMethod === "partial"
              ? `Pay ₹${payableNow} Now`
              : `Pay ₹${finalTotal}`}
          </button>

          {/* Back */}
          <Link
            to="/cart"
            className="w-full border-2 border-cream/10 rounded-xl p-4 text-center font-semibold hover:bg-cream hover:text-brown transition-all duration-300"
          >
            Return To Cart
          </Link>

          <p className="text-center text-sm opacity-60 leading-relaxed">
            By placing this order, you agree to join the unofficial cockroach
            survival movement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
