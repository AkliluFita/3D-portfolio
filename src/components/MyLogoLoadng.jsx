import logoImg from "../assets/navbar/My_New_Log.png";

const MyLogoLoading = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-bg_primary">
      <img src={logoImg} alt="" className="w-[7rem] h-[7rem] icon_pending" />
    </div>
  );
};

export default MyLogoLoading;
