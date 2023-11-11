import { useEffect, useState } from "react";
import sunImg from "../assets/navbar/sun.png";
import moonImg from "../assets/navbar/moon.png";

const DarkModalSwitcher = () => {
  // darkMode function
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <img
        src={darkMode ? moonImg : sunImg}
        alt=""
        className="w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem] cursor-pointer"
        onClick={toggleDarkMode}
      />
    </>
  );
};

export default DarkModalSwitcher;
