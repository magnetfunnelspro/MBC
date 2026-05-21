/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#EDE1CB",
        brown: "#191008",
        orange: "#B44714",
        green: "#1E572C",
      },
    },
  },
  plugins: [],
};
