import aboutMeImg from "../assets/about/about_me.png";
import personImg from "../assets/testimonial/P1.jpg";
import { testimonialData } from "../data/testimonialData";
import ModalRadix from "./elements/Modal";
import emailIcon from "../assets/testimonial/email.png";
import linkedinIcon from "../assets/testimonial/linkedin.png";
import TooltipRadix from "./elements/Tooltip";
const Testimonial = () => {
  return (
    <div className="lg:h-[100vh] common_background dark:bg-darkModeImage p-2 lg:p-4 flex flex-col gap-4 items-center  overflow-y-scroll">
      <div className="mt-[95px] flex flex-row items-center gap-4">
        <img src={aboutMeImg} alt="" className="w-[4rem] h-[3rem]" />
        <h1
          className=" text-[2rem] lg:text-[3rem] bg-gradient-to-r from-indigo-500  to-pink-500 bg-clip-text text-transparent  uppercase font-bold font-mono   "
          data-aos="fade-right"
        >
          Testimonial
        </h1>
      </div>
      <div className=" flex-[2] w-full p-2 lg:p-4 flex lg:flex-row gap-8 flex-col">
        {testimonialData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

const Card = ({ item }) => {
  return (
    <div className="flex flex-col items-center w-full h-full gap-4 lg:p-4 p-2 text-black border border-[#7F2F92] rounded-lg shadow-xl bg-bg_primary dark:bg-gray-800">
      <div className="flex-[4]h-full w-full text-center flex items-center justify-center">
        <div className="flex items-center h-full gap-4 ">
          <span className="w-10 h-2 bg-white"></span>
          <img
            src={item.personImg}
            alt=""
            className="w-[9rem] h-[9rem] lg:w-[12rem] lg:h-[12rem] border-4 border-[#7F2F92] rounded-[50%] object-cover "
          />
          <span className="w-10 h-2 bg-white"></span>
        </div>
      </div>
      <div className="flex-[2]   w-full p-2">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-transparent text-tx_secondary  font-mono text-[1.5rem] font-bold  ">
            {item.name}
          </h1>
          <div className="flex items-center gap-4 ">
            {item.linkedin_link && (
              <a
                rel="noreferrer"
                href={item.linkedin_link}
                target="_blank"
                className="px-2 rounded-lg "
              >
                <TooltipRadix text={item.linkedin_link}>
                  {" "}
                  <img src={linkedinIcon} alt="" width="30rem" />
                </TooltipRadix>
              </a>
            )}

            <div>
              <TooltipRadix text={item.email}>
                <img src={emailIcon} alt="" width="30rem" />
              </TooltipRadix>
            </div>
          </div>
        </div>
        <h1 className="font-mono lg:text-[0.9rem] text-[0.7rem] text-tx_additional dark:text-gray-400 border-b-2 border-[#7F2F92] mt-2">
          {item.title}
        </h1>
      </div>
      <div className="flex-[6]  w-full">
        <p className="font-mono lg:text-[1rem] text-[0.8rem] text-tx_additional text-center p-4 dark:text-gray-400">
          {item.desc}
        </p>
        <div className="mt-8 text-center">
          <ModalRadix
            content={{
              title: "Recommendation letter",
              desc: "this is my supervise recommendation paper",
              image: item.recommendationPaper,
            }}
          >
            <button className="p-2 font-mono font-bold text-white lg:p-4 bg-bt_primary rounded-2xl">
              Recommendation Paper
            </button>
          </ModalRadix>
        </div>
      </div>
    </div>
  );
};
