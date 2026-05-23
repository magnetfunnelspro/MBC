import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./Router.jsx";
import "remixicon/fonts/remixicon.css";
import { CartProvider } from "./context/CartContext.jsx";
import { initMetaPixel } from "./utils/metaPixel";
initMetaPixel();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </StrictMode>
);
