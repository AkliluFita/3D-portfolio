import contactAnimateImg from "../assets/contact/contact_animate.gif";
const Contact = () => {
  return (
    <div className="bg-[#000836] h-[100vh] flex flex-col">
      <h1 className=" text-[3rem] text-center text-white flex-[2] ">Contact</h1>
      <div className="flex-[10]  flex flex-col lg:flex-row  lg:p-6 gap-10">
        <div className="flex-[1]  bg-[#00062B] rounded-md flex flex-col items-center ">
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
              <label htmlFor="" className="text-[1.5rem]">
                your name
              </label>
              <input
                type="text"
                required
                placeholder="put your  Name"
                name="name"
                className="p-4 bg-[#3F3D56]  rounded-md"
              />
            </div>
            <div className="flex flex-col w-full gap-4 p-4 ">
              <label htmlFor="" className="text-[1.5rem]">
                your email
              </label>
              <input
                type="email"
                required
                placeholder="put your  Email"
                name="email"
                className="p-4 bg-[#3F3D56]  rounded-md"
              />
            </div>
            <div className="flex flex-col w-full gap-4 p-4 ">
              <label htmlFor="" className="text-[1.5rem]">
                your name
              </label>
              <textarea
                rows={8}
                placeholder="put your Message"
                name="message"
                className="p-4 bg-[#3F3D56]  rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-[10rem] p-4 mb-2 mr-2 text-lg font-medium border border-br_primary rounded-2xl focus:outline-none hover:bg-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 bg-[#3F3D56]"
            >
              Send
            </button>
          </form>
        </div>
        <div className="flex-[1]  flex items-center justify-center p-10">
          <div className="w-full h-full bg-cover  bg-contact-glob rounded-[50%] bg-transparent shadow-2xl shadow-[#3F3D56] glob"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
