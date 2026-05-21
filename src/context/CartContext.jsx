import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cockroach-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cockroach-cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.title === product.title);

      if (existing) {
        return prev.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // REMOVE
  const removeFromCart = (title) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  // UPDATE QUANTITY
  const updateQuantity = (title, type) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.title === title) {
          if (type === "inc") {
            return { ...item, quantity: item.quantity + 1 };
          }

          if (type === "dec" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }

        return item;
      }),
    );
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = cart.length > 0 ? 50 : 0;

  const finalTotal = totalPrice + shipping;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cockroach-cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        totalItems,
        shipping,
        finalTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
