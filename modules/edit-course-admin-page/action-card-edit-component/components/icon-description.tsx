import { ReactNode } from "react";

export interface IconDescriptionProps {
  description: string;
  icon: ReactNode;
}

export function IconDescription({ description, icon }: IconDescriptionProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      {icon}
      <span className="text-[rgba(45,30,99,1)] text-[clamp(14px,2vw,20px)] font-[600]">
        {description}
      </span>
    </div>
  );
}
