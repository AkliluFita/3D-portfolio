import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";

const Links = ({ className }) => {
  const menuItems = [
    { id: "0", text: "Home", icon: "🏠" },
    { id: "1", text: "About", icon: "ℹ️" },
    { id: "2", text: "Experience", icon: "💻" },
    { id: "3", text: "Education", icon: "📧" },
    { id: "4", text: "Skill", icon: "✍️" },
    { id: "5", text: "Testimonial", icon: "📧" },
    { id: "6", text: "Contact", icon: "📧" },
  ];

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      {menuItems.map((item) => (
        <motion.a
          href={`#${item.text}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1, color: "purple" }}
          whileTap={{ scale: 0.95 }}
          key={item.id}
          className={`cursor-pointer  w-full text-center font-bold   uppercase  ${className} `}
        >
          <h1
            className="font-bold tracking-widest text-gray-800 font-secondary dark:text-gray-200 "
            data-aos="fade-left"
          >
            {item.text}
          </h1>
        </motion.a>
      ))}
    </>
  );
};

export default Links;
