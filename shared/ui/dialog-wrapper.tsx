import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { borderGradient } from "@/shared/constants/border-gradient";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/shared/shad-cn/ui/dialog";

export interface DialogWrapper {
  Trigger: ReactNode;
  children: ReactNode;
  dialogContentClassName?: string;
}

export function DialogWrapper({
  Trigger,
  children,
  dialogContentClassName,
}: DialogWrapper) {
  return (
    <Dialog>
      <DialogTrigger asChild>{Trigger}</DialogTrigger>
      <DialogContent
        className={cn(
          "flex w-[92vw] md:w-[80vw] !p-[0px] gap-2 rounded-2xl",
          dialogContentClassName
        )}
        style={borderGradient}
      >
        <DialogTitle className="hidden">{null}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
}
