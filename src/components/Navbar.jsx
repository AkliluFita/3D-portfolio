import logoImg from "../assets/aklilu-logo.png";
import menuImg from "../assets/menu-100.png";
const Navbar = () => {
  return (
    <div className="h-20 p-1 text-white bg-[#00002E]">
      <div className="flex flex-row items-center h-full ">
        <div className=" basis-1/4 w-[5rem] h-[7rem]">
          <img src={logoImg} className="object-contain w-full h-full " />
        </div>
        <div className="flex flex-row items-center justify-between basis-1/2 ">
          <span>home</span>
          <span>Showcase</span>
          <span>about</span>
          <span>Experience</span>
          <span>Contact</span>
        </div>
        <div className="flex flex-row justify-center basis-1/4">
          <img
            src={menuImg}
            alt=""
            className="w-[3rem] text-white bg-white block   sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
