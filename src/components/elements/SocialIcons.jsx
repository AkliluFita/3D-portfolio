import { motion } from "framer-motion";
import TooltipRadix from "./Tooltip";
import { socialMedia } from "../../data/socialMediaData";
import Link from "./Link";

const SocialIcons = () => {
  return (
    <>
      <div className="flex flex-row flex-[1] h-4 sm:h-8  gap-1 justify-around lg:justify-end  px-2   border-gray-800 shadow-gray-800 shadow-sm rounded-lg">
        {socialMedia.map((item) => (
          <Link key={item.name}>
            <TooltipRadix text={item.name}>
              <motion.img
                src={item.socialImg}
                whileHover={{ scale: 1.1 }}
                alt={item.name}
                className=" cursor-pointer w-[1.7rem] lg:w-[3rem] mr-2  p-1 lg:p-2 rounded-full"
              />
            </TooltipRadix>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
