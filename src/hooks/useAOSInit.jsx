import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOSInit = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });

    return () => {
      AOS.refresh();
    };
  }, []);
};

export default useAOSInit;
