import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const DropdownMenuRadix = ({ itemLists, trigger, className }) => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={`DropdownMenuContent ${className} bg-gray-200 rounded-md  shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]`}
            sideOffset={5}
          >
            {itemLists}

            <DropdownMenu.Separator />
            <DropdownMenu.Arrow className=" dark:fill-gray-700 fill-gray-200" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenuRadix;
