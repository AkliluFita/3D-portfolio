/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables dark mode based on the class applied to the HTML tag
  theme: {
    extend: {
      backgroundImage: {
        // showcaseBack: "url('assets/showCase/showCaseImg5.jpg')",
        lightModeImage:
          "radial-gradient(237px at 0% 2.1%, rgb(78, 157, 184) 0.3%,  rgb(220, 220, 220) 100%)",
        darkModeImage:
          "radial-gradient(237px at 0% 2.1%, rgb(78, 157, 184) 0.3%,  rgb(17, 24, 28) 100%)",
        skillBack: "url('./src/assets/skillIcon/skillImg.jpg')",
        aboutBack: "url('/assets/showCaseImg5.jpg)",
        "back-portfolio": "url('/assets/showCaseImg5.jpg",
        "contact-glob": "url('./src/assets/contact/earth.png')",
      },
      fontFamily: {
        primary: ["Neucha"],
      },
      colors: {
        // background
        bg_light:
          "radial-gradient(237px at 50% 2.1%, rgb(78, 157, 184) 0.3%,  rgb(171, 181, 187) 100%)",
        bg_dark:
          "radial-gradient(237px at 50% 2.1%, rgb(78, 157, 184) 0.3%,  rgb(17, 24, 28) 100%)",
        bg_primary: "#dadfe4",
        bg_secondary: "#dadfe4", //
        bg_tertiary:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)", // rgba(255,255,255,0.5);
        bg_additional: "#219653",
        bg_light_mode: "#f2f2f2",
        bg_dark_mode: "#121212",
        bg_transparent: "#ffffff00",

        // text
        tx_primary: "#0D152D", // Midnight Blue
        tx_secondary: "#7F2F92", // Purple
        tx_additional: "#4B5563", // gray
        tx_link: "#42A5F5",

        // border
        br_primary: "#7F2F92", // Purple
        br_secondary: "#f2f2f2",
        br_error: "#ff0000",

        // button
        bt_primary: "#7F2F92",
        bt_secondary: "#219653",
        bt_additional: "#3e91f7",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
