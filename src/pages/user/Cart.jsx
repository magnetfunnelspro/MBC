import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    shipping,
    finalTotal,
  } = useCart();

  return (
    <div className="h-full bg-cream text-brown p-8 px-4 xl:p-16 font-['Space_Grotesk']">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="flex gap-2.5 text-5xl xl:text-6xl font-black font-['Englebert'] leading-none">
          <span>Your</span>
          <span className="text-orange">Cart</span>
        </h2>
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="bg-brown text-cream rounded-2xl p-8 flex flex-col items-center text-center gap-4">
          <i className="ri-shopping-bag-line text-5xl opacity-80"></i>

          <div>
            <h2 className="text-2xl font-bold">Your cart feels lonely.</h2>

            <p className="opacity-80 mt-2">Add some cockroach-powered drip.</p>
          </div>

          <Link
            to="/"
            className="bg-orange text-cream px-8 p-4 rounded-full font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid xl:grid-cols-[1fr_400px] gap-8">
          {/* Cart Items */}
          <div className="flex flex-col gap-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-brown text-cream rounded-2xl p-4 flex flex-col xl:flex-row gap-6"
              >
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="w-full xl:w-[180px] rounded-lg object-cover"
                />

                <div className="flex-1 flex flex-col justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-black font-['Englebert']">
                      {item.title}
                    </h2>

                    <p className="opacity-80 mt-1">
                      Size: <span className="font-semibold">{item.size}</span>
                    </p>

                    <p className="text-xl font-bold mt-2">₹{item.price}</p>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    {/* Quantity */}
                    <div className="flex items-center gap-4 text-brown bg-cream rounded-lg p-2 px-4">
                      <button
                        onClick={() => updateQuantity(item.title, "dec")}
                        className="text-lg"
                      >
                        <i className="ri-subtract-line"></i>
                      </button>

                      <span className="w-4 text-center font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(item.title, "inc")}
                        className="text-lg"
                      >
                        <i className="ri-add-line"></i>
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.title)}
                      className="text-cream font-semibold"
                    >
                      Remove <i class="ri-delete-bin-5-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-brown text-cream rounded-2xl p-8 h-fit sticky top-28">
            <h2 className="text-4xl font-black font-['Englebert']">
              Order Summary
            </h2>

            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>

                <span>₹{totalPrice}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Shipping</span>

                <span>₹{shipping}</span>
              </div>

              <div className="w-full h-[1px] bg-cream/20"></div>

              <div className="flex items-center justify-between text-2xl font-black">
                <span>Total</span>

                <span>₹{finalTotal}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full block text-center bg-orange text-cream rounded-lg p-4 mt-8 font-bold text-lg hover:scale-[1.02] transition-all duration-300"
            >
              Proceed To Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
