import { testimonialData } from "../data/testimonialData";
import ModalRadix from "./elements/Modal";
import { Tilt } from "react-tilt";
import TooltipRadix from "./elements/Tooltip";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "./elements/Link";
import useAOSInit from "../hooks/useAOSInit";
import { MdRecommend } from "react-icons/md";

const Testimonial = () => {
  useAOSInit();
  return (
    <div className="relative flex flex-col items-center h-auto gap-4 p-2 bg-lightModeImage dark:bg-darkModeImage lg:p-4">
      <div className=" absolute top-0 h-[5rem] w-full bg-purple-600 blur-[150px]"></div>
      <div className="mt-[95px] flex flex-row items-center gap-4 flex-[1]">
        <MdRecommend className="text-purple-600 text-[3rem]" />{" "}
        <h1 className="first-heading-text" data-aos="fade-right">
          Testimonial
        </h1>
      </div>
      <div className=" flex-[3] w-full flex items-center justify-center">
        <div className="lg:w-[80%] h-[80%] p-2 lg:p-4 flex lg:flex-row gap-8 flex-col">
          {testimonialData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

const Card = ({ item }) => {
  return (
    <div
      className="flex flex-col items-center w-full h-[full] gap-4 p-2 text-black border border-purple-800 rounded-lg lg:p-4 bg-bg_primary dark:bg-gray-900"
      data-aos="zoom-in"
    >
      <div className="flex-[4] h-full w-full text-center flex items-center justify-center">
        <div className="flex items-center h-full gap-4 ">
          <span className="w-10 h-2 bg-black dark:bg-white"></span>
          <Tilt>
            <img
              src={item.personImg}
              alt=""
              className="w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] border-4 border-[#7F2F92] rounded-[50%] object-cover transform hover:scale-[1.1] ease-out hover:ease-in duration-500 hover:shadow-purple-900 shadow-2xl"
            />
          </Tilt>
          <span className="w-10 h-2 bg-black dark:bg-white"></span>
        </div>
      </div>
      <div className="flex-[2]   w-full p-2">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-transparent text-tx_secondary  font-primary lg:text-[1.5rem] text-[1rem] font-bold  ">
            {item.name}
          </h1>
          <div className="flex items-center gap-4 ">
            {item.linkedin_link && (
              <Link url="item.linkedin_link">
                <TooltipRadix text={item.linkedin_link}>
                  {" "}
                  <LinkedInLogoIcon className="lg:w-[2rem] lg:h-[2rem] dark:text-white text-black" />
                </TooltipRadix>
              </Link>
            )}

            <div>
              <TooltipRadix text={item.email}>
                <h1 className=" dark:text-white text-black lg:text-[2rem] text-[1rem] lg:mb-[0.5rem] mb-[0.3rem]">
                  @
                </h1>
              </TooltipRadix>
            </div>
          </div>
        </div>
        <h1 className="font-primary lg:text-base text-[0.7rem] text-tx_additional dark:text-gray-400 border-b-2 border-[#7F2F92] mt-2">
          {item.title}
        </h1>
      </div>
      <div className="flex-[6]  w-full  flex flex-col justify-between">
        <p className="font-primary lg:text-[1.2rem] text-[0.8rem] text-tx_additional text-center p-4 dark:text-gray-400">
          {item.desc}
        </p>
        <div className="mt-8 text-center">
          <ModalRadix
            content={{
              title: "Recommendation letter",
              desc: item.person_info,
              image: item.recommendationPaper,
            }}
          >
            <button className="btn-primary">Recommendation Paper</button>
          </ModalRadix>
        </div>
      </div>
    </div>
  );
};
