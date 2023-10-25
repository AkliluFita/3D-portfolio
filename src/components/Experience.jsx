import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import work_icon from "../assets/work-icon.png";
import { experienceData } from "../data/experienceData";

const Experience = () => {
  return (
    <div className="flex flex-col item-center  bg-[#000836] gap-8">
      <div className=" text-[3rem] text-center text-white">
        <h1>MY Experience</h1>
      </div>
      <div className="mt-8">
        <VerticalTimeline>
          {experienceData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#00062B", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={item.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<img src={work_icon} />}
            >
              <div>
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.subTitle}
                </h4>
                <p>{item.des}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
