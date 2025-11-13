import { Bold, Italic, Paintbrush, Type, Underline } from "lucide-react";
import type { ReactNode } from "react";

export interface IMockIcon {
  icon: ReactNode;
}

export const MockIcon = [
  {
    icon: <Paintbrush className="w-[24px] h-[24px]" size={24} />,
  },
  {
    icon: <Bold className="w-[24px] h-[24px]" size={24} />,
  },
  {
    icon: <Italic className="w-[24px] h-[24px]" size={24} />,
  },
  {
    icon: <Underline className="w-[24px] h-[24px]" size={24} />,
  },
  {
    icon: <Type className="w-[24px] h-[24px]" size={24} />,
  },
];
