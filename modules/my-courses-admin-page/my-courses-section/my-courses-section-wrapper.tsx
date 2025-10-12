import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { IBaseProps } from "@/shared/types/base-props";

export function MyCoursesSectionWrapper({ children, className }: IBaseProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-2 mb-[34px] pt-[34px] gap-x-[16px] gap-y-[16px]",
        className
      )}
    >
      {children}
    </section>
  );
}
