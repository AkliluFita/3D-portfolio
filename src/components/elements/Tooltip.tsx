import React, { useEffect } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import AOS from "aos";

const TooltipRadix = ({ children, text }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div data-aos="fade-left">
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>{children}</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="z-40 p-2 border rounded-lg text-tx_additional common_background shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
              {text}
              <Tooltip.Arrow className=" fill-white  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};

export default TooltipRadix;
