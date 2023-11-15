import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { darkModeAtom } from "../../recoil/darkMode";

const Path = (props) => {
  const [darkMode] = useRecoilState(darkModeAtom);
  const color = darkMode ? "#fff" : "#000";
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={color}
      strokeLinecap="round"
      {...props}
    />
  );
};

const MenuToggle = ({ setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <svg
          viewBox="0 0 23 23"
          color="black"
          className="lg:h-[3rem] lg:w-[3rem] h-[2rem] w-[2rem]"
        >
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </>
  );
};

export default MenuToggle;
