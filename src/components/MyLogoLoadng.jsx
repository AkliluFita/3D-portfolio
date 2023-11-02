import logoImg from "../assets/navbar/my_new_logo.png";

const MyLogoLoading = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-bg_primary">
      <img src={logoImg} alt="" className="w-40 h-40 my_logo_pending" />
    </div>
  );
};

export default MyLogoLoading;
