import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";

const GoTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    // <div className="z-[50] border border-white">
    <button
      className={` fixed border border-white bottom-[1rem] right-[1rem] p-1 bg-gray-600 text-white rounded-[50%] border-none cursor-pointer transition-opacity ease-out duration-500 ${
        visible ? "opacity-1" : " opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="w-10 h-10 p-2 text-white hover:text-gray-200 hover:p-1" />
    </button>
    // </div>
  );
};

export default GoTopButton;
