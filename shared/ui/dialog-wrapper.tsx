import { ReactNode, Dispatch, SetStateAction, forwardRef } from "react";
import { cn } from "@/shared/lib/utils";
import { borderGradient } from "@/shared/constants/border-gradient";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/shared/shad-cn/ui/dialog";
import { RefObject } from "react";

export interface DialogWrapperProps {
  Trigger: ReactNode | null;
  children: ReactNode;
  dialogContentClassName?: string;
  isOpen?: boolean;
  ref?: RefObject<HTMLDivElement>;
  setIsOpen?:
    | Dispatch<SetStateAction<boolean>>
    | ((isModalOpen: boolean) => void);
  hadnleCloseModal?: () => void;
}

export const DialogWrapper = forwardRef<HTMLDivElement, DialogWrapperProps>(
  (
    {
      Trigger,
      children,
      dialogContentClassName,
      isOpen,
      setIsOpen,
      hadnleCloseModal,
    }: DialogWrapperProps,
    ref,
  ) => {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{Trigger}</DialogTrigger>
        <DialogContent
          ref={ref}
          className={cn(
            "flex w-[92vw] md:w-[80vw] !p-[0px] gap-2 rounded-2xl",
            dialogContentClassName,
          )}
          style={borderGradient}
        >
          <DialogTitle className="hidden">{null}</DialogTitle>
          <DialogClose
            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
            aria-label="Close"
          >
            <span onClick={hadnleCloseModal}>✕</span>
          </DialogClose>
          {children}
        </DialogContent>
      </Dialog>
    );
  },
);
