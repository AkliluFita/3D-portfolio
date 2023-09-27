/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "back-portfolio": "url('./src/assets/portfolio_Back.jpg')",
      },
      fontFamily: {
        primary: ["Neucha"],
      },
    },
  },
  plugins: [],
};
