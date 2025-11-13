import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/shad-cn/ui/button";
import type { IBaseProps } from "@/shared/types/base-props";
import { MapUI } from "@/shared/utils/map-ui";
import { descriptionSpan } from "../constant/con-span";
import { getColor } from "../constant/get-colors";

export function EditCourseHeading({ children, className }: IBaseProps) {
  return (
    <div
      className={cn(
        "w-full flex justify-between items-center gap-[16px] mb-[11px]",
        className,
      )}
    >
      <div className="flex  gap-[16px] items-center">
        <span className="text-[rgba(45,30,99,1)] font-[600] text-[24px]">
          Edit Course
        </span>
        <Button
          className="h-[20px] py-[12px] text-[rgba(157,130,253,1)] border-[1px] border-[rgba(157,130,253,1)] rounded-[9px]"
          variant={"ghost"}
        >
          Languages
        </Button>
        <MapUI
          mockDataForMap={descriptionSpan}
          children={(value, index) => (
            <span className={cn("text-[clamp(8px,4vw,24px)]", getColor(index))}>
              {value}
            </span>
          )}
        />
      </div>
      {children}
    </div>
  );
}
