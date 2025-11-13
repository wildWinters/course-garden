import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import type { IBaseProps } from "@/shared/types/base-props";

export interface ICardWrapper extends IBaseProps {
  sideIcon: ReactNode;
}

export function CardWrapper({ children, className, sideIcon }: ICardWrapper) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-[13vw] aspect-square rounded-[8px] bg-[rgba(247,249,251,1)]",
        className,
      )}
    >
      {children}

      <div className="absolute top-4 right-4">{sideIcon}</div>
    </div>
  );
}
