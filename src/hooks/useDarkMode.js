import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { darkModeAtom } from "../recoil/darkMode";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);

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

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
