import { motion } from "framer-motion";
import TooltipRadix from "./Tooltip";
import { socialMedia } from "../../data/socialMediaData";

const SocialIcons = () => {
  return (
    <>
      <div className="flex flex-row flex-[1] h-4 sm:h-8  gap-8 justify-center lg:justify-end  px-2">
        {socialMedia.map((item) => (
          <a
            key={item.name}
            rel="noreferrer"
            href={item.socialLink}
            target="_blank"
            className="px-2 rounded-lg "
          >
            <TooltipRadix text={item.name}>
              <motion.img
                src={item.socialImg}
                whileHover={{ scale: 1.1 }}
                alt={item.name}
                className=" cursor-pointer w-[1.7rem] lg:w-[3rem] mr-2 common_background p-1 lg:p-2 rounded-full"
              />
            </TooltipRadix>
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
