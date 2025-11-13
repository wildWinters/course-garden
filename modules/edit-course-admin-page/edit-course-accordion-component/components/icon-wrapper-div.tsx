import type { ReactNode } from "react";

export interface IIconWrapperDiv {
  icon: ReactNode;
  children: ReactNode;
}

export function IconWrapperDiv({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex items-center justify-center w-[24px] h-[24px] border-[1px] border-[rgba(186,186,186,1)] p-[5px] rounded-[4px]">
      {icon}
    </div>
  );
}

