/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        showcaseBack: "url('assets/showCase/showCaseImg5.jpg')",
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
    },
  },
  plugins: [],
};
