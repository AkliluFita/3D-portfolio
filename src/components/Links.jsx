import { motion } from "framer-motion";

const Links = ({ className }) => {
  const menuItems = [
    { id: "0", text: "Home", icon: "🏠" },
    { id: "1", text: "About", icon: "ℹ️" },
    { id: "2", text: "Experience", icon: "💻" },
    { id: "3", text: "Skill", icon: "✍️" },
    { id: "4", text: "Education", icon: "📧" },
    { id: "5", text: "Contact", icon: "📧" },
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

  return (
    <>
      {menuItems.map((item) => (
        <motion.a
          href={`#${item.text}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1, color: "white" }}
          whileTap={{ scale: 0.95 }}
          key={item.id}
          className={`cursor-pointer  w-full text-center p-1  font-bold flex flex-row gap-2 justify-between common_background uppercase ${className} `}
        >
          <h1>{item.text}</h1>
          <span>{item.icon}</span>
        </motion.a>
      ))}
    </>
  );
};

export default Links;
