import { motion } from "framer-motion";
import TooltipRadix from "./Tooltip";
import { socialMedia } from "../../data/socialMediaData";

const SocialIcons = () => {
  return (
    <>
      <div className="flex flex-row flex-[1] h-4 sm:h-8  gap-1 justify-around lg:justify-end  px-2   border-gray-800 shadow-gray-800 shadow-sm rounded-lg">
        {socialMedia.map((item) => (
          <a
            key={item.name}
            rel="noreferrer"
            href={item.socialLink}
            target="_blank"
            className="p-1 text-center "
          >
            <TooltipRadix text={item.name}>
              <motion.img
                src={item.socialImg}
                whileHover={{ scale: 1.1 }}
                alt={item.name}
                className=" cursor-pointer w-[1.7rem] lg:w-[3rem] mr-2  p-1 lg:p-2 rounded-full"
              />
            </TooltipRadix>
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
