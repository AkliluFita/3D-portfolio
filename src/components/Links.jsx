import { motion } from "framer-motion";

const Links = () => {
  const menuItems = [
    { id: "0", text: "home", icon: "🏠" },
    { id: "1", text: "about", icon: "ℹ️" },
    { id: "2", text: "experience", icon: "💻" },
    { id: "3", text: "skill", icon: "✍️" },
    { id: "4", text: "work", icon: "📧" },
    { id: "5", text: "contact", icon: "📧" },
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
          className="text-[1.2rem] cursor-pointer border border-br_primary w-full text-center rounded-md p-1 hover:bg-blue-600"
        >
          {item.text}
        </motion.a>
      ))}
    </>
  );
};

export default Links;
