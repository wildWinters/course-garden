import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

export function ControlButtonSectionWrapper({
  children,
  classname,
  isLeftHeadingExists =  true,
}: {
  children: ReactNode;
  classname?: string;
  isLeftHeadingExists?: boolean;
}) {
  return (
    <section
      className={cn(
        "flex items-center justify-between  gap-[32px] p-[16px] rounded-[8px] bg-[rgba(227,240,253,1)]",
        classname,
      )}
    >
      <span className={cn("text-[rgba(45,30,99,1)] font-[600] text-[16px]", !isLeftHeadingExists && "hidden")}>
        My courses
      </span>

      <div className="flex items-center gap-[16px]">{children}</div>
    </section>
  );
}
