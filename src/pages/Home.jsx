import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { trackAddToCart } from "../utils/metaPixel";  
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    title: "Cockroaches Tee",
    price: 399,
    ogPrice: 599,
    images: ["/MbcFront.webp", "/MbcBack.webp"],
  },
  {
    title: "Cockroach Gang Tee",
    price: 499,
    ogPrice: 1199,
    images: ["/TeeFront.webp", "/TeeBack.webp"],
  },
];

const memes = [
  "Wore this tee once. Now relatives stopped asking about jobs.",
  "Built different. Mostly unemployed.",
  "Emotionally unavailable but fashionably active.",
  "Chronically online since 2016.",
];

const Home = () => {
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const cartTitles = cart.map((item) => item.title);

  const [selectedSizes, setSelectedSizes] = useState({
    "Cockroaches Tee": "M",
    "Cockroach Gang Tee": "M",
  });
  const [addedProducts, setAddedProducts] = useState([]);

  const isInCart = (title) => {
    return cart.some((item) => item.title === title);
  };

  return (
    <div className="w-full bg-cream text-brown overflow-hidden font-['Space_Grotesk']">
      {/* ========================= */}
      {/* Hero Section */}
      {/* ========================= */}

      <section className="relative overflow-hidden p-8 px-4 xl:px-16 xl:p-12">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange opacity-20 blur-2xl rounded-full"></div>

        <div className="flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-10 2xl:gap-20">
          {/* Left */}
          <div className="flex flex-col gap-8 max-w-2xl 2xl:max-w-3xl relative z-10">
            <div className="leading-none font-['Englebert']">
              <h2 className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-[7rem] font-black">
                Clothes for the
              </h2>

              <h2 className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-[7rem] font-black text-orange">
                Chronically
              </h2>

              <div className="flex flex-wrap gap-3">
                <h2 className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-[7rem] font-black text-green">
                  Online
                </h2>

                <h2 className="text-5xl sm:text-6xl xl:text-7xl 2xl:text-[7rem] font-black">
                  Generation
                </h2>
              </div>
            </div>

            <p className="text-lg xl:text-xl max-w-xl font-medium leading-relaxed">
              Oversized t-shirts inspired by memes, unemployment, emotional
              damage, and 3AM existential thoughts.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#collection"
                className="bg-brown text-cream p-4 px-8 rounded-full font-semibold hover:scale-105 transition-all"
              >
                Shop Collection
              </a>

              <a
                href="https://cockroachjantaparty.org/"
                target="_blank"
                className="border-2 border-brown p-4 px-8 rounded-full font-semibold hover:bg-brown hover:text-cream transition-all"
              >
                Join CJP Community
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <h4 className="text-4xl xl:text-5xl font-black font-['Englebert']">
                  5K+
                </h4>

                <p>Tees Sold</p>
              </div>

              <div>
                <h4 className="text-4xl xl:text-5xl font-black font-['Englebert']">
                  100%
                </h4>

                <p>Oversized Fit</p>
              </div>

              <div>
                <h4 className="text-4xl xl:text-5xl font-black font-['Englebert']">
                  Gen-Z
                </h4>

                <p>Approved</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden xl:flex justify-center items-center relative flex-shrink-0">
            {/* Floating Card */}
            <div className="bg-brown text-cream rounded-[2rem] p-4 w-full max-w-[380px] 2xl:max-w-[440px] shadow-2xl rotate-[-4deg] hover:rotate-0 transition-all duration-500">
              <img
                src="/TeeFront.webp"
                alt="Cockroach Tee"
                className="rounded-[1.5rem] w-full object-cover"
              />

              <div className="pt-6 flex flex-col gap-4">
                <div>
                  <h4 className="text-4xl font-black font-['Englebert']">
                    Cockroach Gang Tee
                  </h4>

                  <p className="opacity-80 mt-2 leading-relaxed">
                    Built for survivors of Indian internet chaos.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black">₹499</span>

                  <span className="line-through opacity-80 text-lg">₹1199</span>
                </div>

                <button
                  onClick={() => {
                    trackAddToCart();

                    addToCart({
                      ...product,
                      size: selectedSizes[product.title] || "M",
                    });
                  }}
                  className="bg-orange text-cream rounded-xl p-4 font-semibold text-lg hover:scale-[1.02] transition-all duration-200"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 right-10 bg-cream text-brown rounded-full px-5 py-3 shadow-xl font-semibold rotate-6">
              🪳 Viral Drop
            </div>

            <div className="absolute bottom-10 -left-8 bg-orange text-cream rounded-full px-5 py-3 shadow-xl font-semibold -rotate-6">
              Gen-Z Approved
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* Featured Products */}
      {/* ========================= */}

      <section
        id="collection"
        className="p-8 px-4 xl:px-16 xl:p-12 flex flex-col gap-12"
      >
        <div className="flex items-end justify-between">
          <div className="font-['Englebert'] leading-none">
            <h2 className="text-5xl xl:text-6xl font-black">Featured</h2>

            <h2 className="text-5xl xl:text-6xl font-black text-orange">
              Cockroach Drops
            </h2>
          </div>

          <p className="hidden xl:block max-w-sm text-right">
            Clothing made for emotionally unstable internet users.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              whileHover={{
                y: -10,
              }}
              key={index}
              className="bg-brown text-cream rounded-2xl p-4 flex flex-col gap-4"
            >
              <div className="w-full h-[420px]">
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={1}
                  spaceBetween={16}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  onTouchStart={(swiper) => swiper.autoplay.stop()}
                  onTouchEnd={(swiper) => swiper.autoplay.start()}
                  className="rounded-lg overflow-hidden h-full"
                >
                  {product.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${product.title}-${i}`}
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-4xl font-['Englebert'] font-black">
                  {product.title}
                </h4>

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black">₹{product.price}</span>

                  <span className="opacity-80 line-through">
                    ₹{product.ogPrice}
                  </span>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSizes((prev) => ({
                          ...prev,
                          [product.title]: size,
                        }))
                      }
                      className={`w-10 h-10 rounded-lg border text-sm font-semibold transition-all duration-200 ${
                        selectedSizes[product.title] === size
                          ? "bg-orange border-orange text-cream"
                          : "border-cream/20 text-cream"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {cartTitles.includes(product.title) ? (
                  <button
                    onClick={() => navigate("/cart")}
                    className="bg-orange text-cream rounded-lg p-4 font-semibold active:scale-[1.02] transition-all duration-200"
                  >
                    View In Cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      trackAddToCart(product);

                      addToCart({
                        ...product,
                        size: selectedSizes[product.title] || "M",
                      });
                    }}
                    className="bg-orange text-cream rounded-lg p-4 font-semibold active:scale-[1.02] transition-all duration-200"
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================= */}
      {/* Meme Slider */}
      {/* ========================= */}

      <section className="p-8 px-0 bg-brown text-cream">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.2}
          spaceBetween={20}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          {memes.map((meme, index) => (
            <SwiperSlide key={index}>
              <div className="border border-cream rounded-2xl p-4 h-full mx-4">
                <p className="text-2xl font-semibold leading-relaxed">
                  “{meme}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ========================= */}
      {/* About */}
      {/* ========================= */}

      <section className="p-8 px-4 xl:px-16 xl:p-12">
        <div className="grid xl:grid-cols-2 gap-8 items-center">
          <div className="font-['Englebert'] leading-none">
            <h2 className="text-5xl xl:text-8xl font-black">More Than</h2>

            <h2 className="text-5xl xl:text-8xl font-black text-orange">
              A Brand.
            </h2>

            <h2 className="text-5xl xl:text-8xl font-black text-green">
              A Survival
            </h2>

            <h2 className="text-5xl xl:text-8xl font-black">Mechanism.</h2>
          </div>

          <div className="flex flex-col gap-6 text-lg leading-relaxed">
            <p>India had enough political parties already.</p>

            <div className="bg-brown text-cream p-6 rounded-2xl text-2xl font-['Englebert'] leading-snug">
              Then the cockroaches decided to unite.
            </div>

            <p>
              Built for the survivors of Indian internet chaos, unemployment
              memes, and 2AM existential scrolling.
            </p>

            <a
              href="https://instagram.com/cockroachjantaparty/"
              target="_blank"
              className="w-fit bg-orange text-cream p-4 px-8 rounded-full font-semibold hover:scale-105 transition-all duration-200"
            >
              Support the Movement
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
