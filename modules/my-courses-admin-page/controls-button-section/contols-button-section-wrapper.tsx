import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

export function ControlButtonSectionWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section
      className={cn(
        "flex items-center justify-between  gap-[32px] p-[16px] rounded-[8px] bg-[rgba(227,240,253,1)]",
      )}
    >
      <span className="text-[rgba(45,30,99,1)] font-[600] text-[16px]">
        My courses
      </span>

      <div className="flex items-center gap-[16px]">{children}</div>
    </section>
  );
}
