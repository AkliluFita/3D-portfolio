import { useEffect, useRef, useState } from "react";
import contactAnimateImg from "../assets/contact/contact_animate.gif";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import aboutMeImg from "../assets/about/about_me.png";
import contactImg from "../assets/contact/contact-icon.png";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="common_background h-auto lg:h-[100vh] flex flex-col items-center w-full ">
      <div className="mt-[95px] flex flex-row items-center gap-4">
        <img src={contactImg} alt="" className="w-[4rem] h-[3rem]" />
        <h1
          className=" text-[2rem] lg:text-[3rem] text-tx_secondary uppercase font-bold   "
          data-aos="fade-right"
        >
          contact
        </h1>
      </div>
      <div
        className="flex flex-col-reverse items-center justify-center w-full gap-8 px-4 py-6 lg:flex-row "
        // data-aos="fade-down"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
      >
        <ContactForm />
        <div className="h-full  lg:w-[40rem]">
          <ContactBox />
        </div>
      </div>
    </div>
  );
};

export default Contact;

const ContactBox = () => {
  const lists = [1, 2, 3];
  return (
    <div className="flex flex-col justify-between h-full lg:h-[80%] gap-4 text-tx_secondary lg:gap-4 ">
      {lists.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 lg:gap-4  border border-br_primary rounded-lg  bg-[#dadfe4] shadow-lg  lg:p-0 p-2"
          data-aos="fade-left"
        >
          <img src={aboutMeImg} alt="" className="w-[4rem] h-[3rem]" />
          <h1 className="text-lg font-bold lg:text-2xl">Phone</h1>
          <p className="text-center text-tx_additional text-sm lg:text-[1rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. pariatur
            distinctio vero consequatur rem blanditiis dignissimos possimus
            quod? Labore.
          </p>
          <h2 className="p-1 text-base font-bold text-black lg:text-lg common_background">
            5632897412-8856662
          </h2>
        </div>
      ))}
    </div>
  );
};

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  console.log(message);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast("Wow so easy !");

    // emailjs
    //   .sendForm(
    //     "service_e8v9dm5",
    //     "template_m0loqjr",
    //     form.current,
    //     "user_piSXcqx2Zf6tWbXHR4EFF"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setMessage("successfully submitted");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       setMessage(error.text);
    //     }
    //   );
    // setIsLoading(false);
    // setTimeout(() => {
    //   setMessage("");
    // }, 4000);
  };
  return (
    <div
      className="  rounded-md flex flex-col items-center w-full lg:w-[40rem] bg-[#dadfe4] border border-[#7F2F92] h-full "
      data-aos="fade-right"
    >
      <div className="p-2 ">
        <h1 className="text-2xl font-bold uppercase lg:text-3xl text-tx_secondary">
          get touch me
        </h1>
        <p className="mt-4 text-sm text-tx_additional lg:text-base">
          For your car we will do everything advice design in us repairs and
          maintenance We are the some preferred.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        action=""
        className="flex flex-col items-center justify-center h-full w-full flex-[11] px-2  "
      >
        <div className="flex flex-col w-full gap-2 p-2 ">
          <label
            htmlFor=""
            className=" text-base lg:text-[1.5rem]  font-bold text-tx_secondary"
          >
            Your Name
          </label>
          <input
            type="text"
            required
            placeholder="put your name here"
            name="user_name"
            className="w-full p-2 text-black border rounded-md lg:p-4 common_background border-br_primary"
          />
        </div>
        <div className="flex flex-col w-full gap-2 p-2 ">
          <label
            htmlFor=""
            className=" text-base lg:text-[1.5rem]  font-bold text-tx_secondary"
          >
            Your Email
          </label>
          <input
            type="email"
            required
            placeholder="put your email here"
            name="user_email"
            className="w-full p-2 text-black border rounded-md lg:p-4 common_background border-br_primary"
          />
        </div>
        <div className="flex flex-col w-full gap-2 p-2 ">
          <label
            htmlFor=""
            className=" text-base lg:text-[1.5rem]  font-bold text-tx_secondary"
          >
            Your Message
          </label>
          <textarea
            rows={8}
            placeholder="put your message here"
            name="message"
            className="w-full p-2 text-black border rounded-md lg:p-4 common_background border-br_primary"
          />
        </div>
        <div>
          <button
            type="submit"
            value="Send"
            className="w-[10rem] p-2 mb-2 mr-2 text-lg font-medium border border-br_primary rounded-2xl focus:outline-none hover:bg-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 common_background text-black"
          >
            {isLoading ? "Sending" : "Send"}
          </button>
          <ToastContainer />
        </div>
        <h3 className="text-red-600">{message}</h3>
      </form>
    </div>
  );
};
