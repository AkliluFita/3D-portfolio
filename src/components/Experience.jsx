import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import work_icon from "../assets/experience/work-icon.png";
import { experienceData } from "../data/experienceData";
import experienceImg from "../assets/experience/experience.png";
import { useRecoilState } from "recoil";
import { darkModeAtom } from "../recoil/darkMode";
import {
  Link1Icon,
  GitHubLogoIcon,
  IdCardIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import TooltipRadix from "./elements/Tooltip";
import Link from "./elements/Link";
import DropdownMenuRadix from "./elements/DropdownMenu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import useAOSInit from "../hooks/useAOSInit";

const Experience = () => {
  const [darkMode] = useRecoilState(darkModeAtom);
  const background = darkMode ? "#1F2937" : "#dadfe4";
  useAOSInit();
  return (
    <div className="relative flex flex-col items-center gap-4 bg-lightModeImage dark:bg-darkModeImage lg:h-auto">
      <div className=" absolute top-0 h-[5rem] w-full bg-purple-600 blur-[150px]"></div>

      <div className="mt-[95px] flex flex-row items-center gap-4">
        <img src={experienceImg} alt="" className="w-[4rem] h-[3rem]" />
        <h1 className="first-heading-text" data-aos="fade-right">
          My Experience
        </h1>
      </div>
      <div className="w-full mt-8">
        <VerticalTimeline>
          {experienceData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className=" vertical-timeline-element--work"
              contentStyle={{
                background: background,
                color: "#7F2F92",
                border: "1px solid #7F2F92",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #7F2F92",
              }}
              date={item.date}
              iconStyle={{
                background: "#7F2F92",
                fontWeight: "bold",
                color: "white",
              }}
              icon={<img src={work_icon} />}
            >
              <div className="">
                <h3 className="vertical-timeline-element-title text-[1.2rem] uppercase text-tx_secondary font-bold font-primary">
                  {item.title}
                </h3>
                <h4 className="flex flex-row items-center gap-2 text-sm text-gray-800 font-primary dark:text-gray-200 vertical-timeline-element-subtitle">
                  Company:- {item.subTitle}{" "}
                  {item.web_link !== null && (
                    <Link url={item.web_link}>
                      <GlobeIcon className="w-[1.5rem] h-[1.5rem]" />
                    </Link>
                  )}
                </h4>
                <p className=" text-gray-600 text-[0.7rem] lg:text-[0.9rem] font-primary dark:text-gray-400  ">
                  {item.des}
                </p>
                <div className="flex flex-row items-center justify-end gap-4 mt-2">
                  {item.demo_link !== null && (
                    <Link url={item.demo_link}>
                      <TooltipRadix text="Demo Link">
                        <Link1Icon className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem dark:text-white text-black lg:text-base" />
                      </TooltipRadix>
                    </Link>
                  )}
                  <TooltipRadix text="Detail Info">
                    <IdCardIcon className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem dark:text-white text-black  cursor-pointer hover:shadow-inner hover:text-gray-500" />
                  </TooltipRadix>

                  {item.github_link && (
                    <TooltipRadix text="Github Source Code">
                      <DropdownMenuRadix
                        trigger={
                          <GitHubLogoIcon className="w-[1.5rem] h-[1.5rem] lg:w-[2rem] lg:h-[2rem] dark:text-white text-black" />
                        }
                        itemLists={
                          <DropdownMenu.Group className="text-black lg:h-[5rem] h-[4rem] flex flex-col gap-2 py-3 bg-gray-200 dark:bg-gray-700 rounded-md ">
                            {item.github_link.map((i) => (
                              <Link key={i.link} url={i.link}>
                                <DropdownMenu.Item className="text-gray-600 cursor-pointer hover:text-gray-500 dark:hover:text-gray-500 dark:text-gray-400 font-primary lg:text-base text-[0.8rem]">
                                  {i.title}
                                </DropdownMenu.Item>
                              </Link>
                            ))}
                          </DropdownMenu.Group>
                        }
                      />
                    </TooltipRadix>
                  )}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
