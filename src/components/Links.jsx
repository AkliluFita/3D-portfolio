import { motion } from "framer-motion";

const Links = () => {
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
          whileHover={{ scale: 1.1, color: "rgb(182, 204, 227)" }}
          whileTap={{ scale: 0.95 }}
          key={item.id}
          className="text-[1.2rem] cursor-pointer  w-full text-center rounded-md p-1  text-black  "
        >
          {item.text}
        </motion.a>
      ))}
    </>
  );
};

export default Links;
