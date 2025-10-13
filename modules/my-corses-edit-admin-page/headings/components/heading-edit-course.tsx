import { Button } from "@/shared/shad-cn/ui/button";
import { IBaseProps } from "@/shared/types/base-props";
import { cn } from "@/shared/lib/utils";

export function EditCourseHeading({ children, className }: IBaseProps) {
  return (
    <div
      className={cn(
        "w-full flex justify-between items-center gap-[16px]",
        className,
      )}
    >
      <div className="flex  gap-[16px] items-center">
        <span>Edit Course</span>
        <Button>Languages</Button>
        <span>|</span>
        <span>Edit</span>
        <span>View</span>
      </div>
      {children}
    </div>
  );
}
