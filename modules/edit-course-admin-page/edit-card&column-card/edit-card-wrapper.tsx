import { cn } from "@/shared/lib/utils";
import { IBaseProps } from "@/shared/types/base-props";
import { ReactNode } from "react";
import { GripVertical } from "lucide-react";

export interface SquareCardProps extends IBaseProps {
  description: string;
  icon: ReactNode;
  isGriVerticalExists:boolean;
}

export function SquareCard({description, icon, className, isGriVerticalExists }: SquareCardProps) {
  return (
    <div className={cn("relative flex flex-col w-[12vw] aspect-square items-center justify-center rounded-[8px] bg-[rgba(227,240,253,1)]", className)}>
      <GripVertical
        className={cn("absolute top-[16px] left-[16px] w-[24px] aspect-square text-[rgba(45,30,99,1)]", !isGriVerticalExists && "hidden")}/>
      {icon}
      <span className="text-[rgba(45,30,99,1)] text-[20px] font-[600]">{description}</span>
    </div>
  );
}
