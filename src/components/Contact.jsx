import { useEffect } from "react";
import contactAnimateImg from "../assets/contact/contact_animate.gif";
import AOS from "aos";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="bg-[#018673] h-auto lg:h-[100vh] flex flex-col  ">
      <h1 className=" text-[3rem] text-center text-white flex-[2] ">Contact</h1>
      <div
        className="flex-[10]  flex   lg:p-6 gap-10 items-center justify-center"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="  rounded-md flex flex-col items-center w-[40rem] bg-[aqua] bg-opacity-50 ">
          <img
            src={contactAnimateImg}
            alt=""
            className="flex-[1] h-full"
            width="150px"
            height="150px"
          />
          <form
            action=""
            className="flex flex-col items-center justify-center h-full w-full flex-[11] pl-10 pr-10"
          >
            <div className="flex flex-col w-full gap-4 p-4 ">
              <label htmlFor="" className="text-[1.5rem] text-white">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="put your name here"
                name="name"
                className="p-4 text-black bg-white rounded-md"
              />
            </div>
            <div className="flex flex-col w-full gap-4 p-4 ">
              <label htmlFor="" className="text-[1.5rem] text-white">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="put your email here"
                name="email"
                className="p-4 text-black bg-white rounded-md"
              />
            </div>
            <div className="flex flex-col w-full gap-4 p-4 ">
              <label htmlFor="" className="text-[1.5rem] text-white">
                Your Message
              </label>
              <textarea
                rows={8}
                placeholder="put your message here"
                name="message"
                className="p-4 text-black bg-white rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-[10rem] p-4 mb-2 mr-2 text-lg font-medium border border-br_primary rounded-2xl focus:outline-none hover:bg-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 bg-[#018673]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
