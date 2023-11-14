import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import AOS from "aos";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ModalRadix = ({ children, content }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-sm" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gray-200 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="font-mono font-bold text-black">
              {content?.title}
            </Dialog.Title>
            <Dialog.Description className="font-mono text-mauve11 mt-[10px] mb-5 text-[0.7rem] lg:text-[0.9rem] leading-normal text-gray-800">
              {content?.desc}
            </Dialog.Description>

            {content?.image && (
              <Zoom>
                <div className="w-full lg:h-[35rem] h-[30rem]">
                  <img
                    className="object-contain w-full h-full border border-gray-500 rounded-md"
                    src={content?.image}
                    alt="modal"
                  />
                </div>
              </Zoom>
            )}

            <Dialog.Close asChild>
              <button
                className="text-black hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default ModalRadix;
