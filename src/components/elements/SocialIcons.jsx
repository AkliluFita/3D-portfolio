import TooltipRadix from "./Tooltip";
import { socialMedia } from "../../data/socialMediaData";
import Link from "./Link";

const SocialIcons = () => {
  return (
    <>
      <div className="flex flex-row flex-[1] h-4 sm:h-8  gap-4 justify-around lg:justify-end  px-2   border-gray-800  rounded-lg mt-4">
        {socialMedia.map((item) => (
          <Link url={item.socialLink} key={item.name}>
            <TooltipRadix text={item.name}>
              <item.socialIcon className=" text-[1.5rem] lg:text-[2rem] text-black dark:text-white" />{" "}
            </TooltipRadix>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
