import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImg from "../assets/contact/contact-icon.png";
import { contactData } from "../data/contactData";
import useAOSInit from "../hooks/useAOSInit";
const Contact = () => {
  useAOSInit();

  return (
    <div className="bg-lightModeImage dark:bg-darkModeImage h-auto lg:h-[100vh] flex flex-col items-center w-full relative">
      <div className=" absolute top-0 h-[5rem] w-full bg-purple-600 blur-[150px]"></div>
      <div className="mt-[95px] flex flex-row items-center gap-4">
        <img src={contactImg} alt="" className="w-[4rem] h-[3rem]" />
        <h1 className="first-heading-text" data-aos="fade-right">
          contact
        </h1>
      </div>
      <div className="flex flex-col-reverse items-center justify-center w-full gap-8 px-4 py-6 lg:flex-row ">
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
  return (
    <div className="flex flex-col justify-between h-full lg:h-[80%] gap-4 text-tx_secondary lg:gap-6  ">
      {contactData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-2 lg:gap-6  border border-purple-800 rounded-lg  bg-[#dadfe4] dark:bg-gray-900  lg:p-4 p-2"
          data-aos="fade-left"
        >
          <img src={item.contact_icon} alt="" className="w-[4rem] h-[3rem]" />
          <h1 className="text-lg font-bold text-black font-primary dark:text-white lg:text-2xl">
            {item.title}
          </h1>
          {/* <p className="text-center text-tx_additional text-sm lg:text-[0.9rem] font-primary dark:text-gray-400">
            {item.desc}
          </p> */}
          <h2 className="p-1 text-base font-bold text-black font-primary lg:text-lg common_background">
            {item.contact_info}
          </h2>
        </div>
      ))}
    </div>
  );
};

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_e8v9dm5",
        "template_m0loqjr",
        form.current,
        "user_piSXcqx2Zf6tWbXHR4EFF"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("you successfully submitted");
          setIsSended(true);
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        } //
      );
    setIsLoading(false);
  };
  return (
    <div
      className="  rounded-md flex flex-col items-center w-full lg:w-[40rem] bg-[#dadfe4] border border-purple-800 dark:bg-gray-900 h-full "
      data-aos="fade-right"
    >
      <div className="w-full px-4 py-2">
        <h1 className="text-2xl font-bold uppercase font-primary lg:text-3xl text-tx_secondary">
          get touch me
        </h1>
        <p className="mt-2 text-sm font-primary text-tx_additional lg:text-base dark:text-gray-400">
          Let us discus about the project that you may need to accomplish with
          me
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        action=""
        className="flex flex-col items-center justify-center h-full w-full flex-[11] px-2  "
      >
        <div className="flex flex-col w-full gap-2 p-1 ">
          <label
            htmlFor=""
            className=" text-base lg:text-[1.5rem]  font-bold text-tx_secondary font-primary"
          >
            Your Name
          </label>
          <input
            type="text"
            required
            placeholder="put your name here"
            name="user_name"
            className="w-full p-2 text-black border rounded-md dark:text-white lg:p-4 dark:bg-gray-900 border-br_primary"
          />
        </div>
        <div className="flex flex-col w-full gap-2 p-2 ">
          <label
            htmlFor=""
            className=" text-base lg:text-[1.5rem]  font-bold text-tx_secondary font-primary"
          >
            Your Email
          </label>
          <input
            type="email"
            required
            placeholder="put your email here"
            name="user_email"
            className="w-full p-2 text-black border rounded-md dark:text-white lg:p-4 dark:bg-gray-900 border-br_primary"
          />
        </div>
        <div className="flex flex-col w-full gap-2 p-2 ">
          <label
            htmlFor=""
            className=" text-base lg:text-[1.5rem]  font-bold text-tx_secondary font-primary"
          >
            Your Message
          </label>
          <textarea
            rows={8}
            placeholder="put your message here"
            name="message"
            className="w-full p-2 text-black border rounded-md dark:text-white lg:p-4 dark:bg-gray-900 border-br_primary "
          />
        </div>
        <div>
          <button
            type="submit"
            value="Send"
            disabled={isSended}
            className={` btn-primary w-[10rem]  ${
              isSended ? "cursor-not-allowed" : ""
            }`}
          >
            {isSended ? "Sended" : "Send"}
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};
