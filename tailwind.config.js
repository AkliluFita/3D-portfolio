/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "back-portfolio": "url('./src/assets/portfolio_Back.jpg')",
        "contact-glob": "url('./src/assets/contact/earth.png')",
      },
      fontFamily: {
        primary: ["Neucha"],
      },
      colors: {
        // background
        bg_primary: "#071330",
        bg_secondary: "#008080",
        bg_tertiary: "#FFFFFF80", // rgba(255,255,255,0.5);
        bg_additional: "#219653",
        bg_light_mode: "#f2f2f2",
        bg_dark_mode: "#121212",
        bg_transparent: "#ffffff00",

        // text
        tx_primary: "#c8f7c5",
        tx_secondary: "#f2f2f2",
        tx_additional: "#121212",
        tx_link: "#42A5F5",

        // border
        br_primary: "#262f65",
        br_secondary: "#f2f2f2",
        br_error: "#ff0000",

        // button
        bt_primary: "#071330",
        bt_secondary: "#219653",
        bt_additional: "#3e91f7",
      },
    },
  },
  plugins: [],
};
