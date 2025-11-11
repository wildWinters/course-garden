import { ReactNode } from "react";

export interface IIconWrapperDiv {
  icon: ReactNode;
  children: ReactNode;
}

export function IconWrapperDiv({ icon, children }: IIconWrapperDiv) {
  return <div className="flex items-center justify-center">{children}</div>;
}
