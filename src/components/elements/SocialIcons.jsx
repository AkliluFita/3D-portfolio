import { motion } from "framer-motion";
import facebookImg from "../../assets/facebook-64.png";
import whatsAppImg from "../../assets/whatsapp-64.png";
import telegramImg from "../../assets/telegram-64.png";
import twitterImg from "../../assets/twitter-64.png";

const SocialIcons = () => {
  const images = [facebookImg, whatsAppImg, telegramImg, twitterImg];
  return (
    <>
      <div className="flex flex-row flex-[1] h-4 sm:h-8  gap-8 justify-center lg:justify-end  px-2">
        {images.map((img) => (
          <motion.img
            key={img}
            src={img}
            whileHover={{ scale: 1.1 }}
            alt={img}
            className=" cursor-pointer w-[1.7rem] lg:w-[3rem] mr-2 common_background p-1 lg:p-2 rounded-full"
          />
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
