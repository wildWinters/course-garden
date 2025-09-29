import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

export function MyCoursesSectionWrapper({ children }: { children: ReactNode }) {
  return (
    <section
      className={cn(
        "grid grid-cols-2 mb-[34px] pt-[34px] gap-x-[16px] gap-y-[16px]",
      )}
    >
      {children}
    </section>
  );
}
