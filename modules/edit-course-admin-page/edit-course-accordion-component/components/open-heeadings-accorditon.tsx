import { ChevronUp, Trash } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { GripVertical } from "lucide-react";

export interface IDescriptionAccordion {
  description: string;
}

export function OpenHeadingAccordion({ description }: IDescriptionAccordion) {
  return (
    <div className={cn("flex justify-between items-center gap-[16px]")}>
      <GripVertical
        className="w-[24px] aspect-square text-[rgba(45,30,99,1)]"
      />
      <div className="flex items-center gap-[8px] text-[rgba(45,30,99,1)]">
        <span className="text-[clamp(10px,4vw,20px)] font-[500]">
          {description}
        </span>
        <ChevronUp className="w-[24px] aspect-square" />
      </div>
      <Trash className="w-[24px] aspect-square text-[rgba(160,160,181,1)]" />
    </div>
  );
}
