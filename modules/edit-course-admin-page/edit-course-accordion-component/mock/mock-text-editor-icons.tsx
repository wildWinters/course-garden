import { ReactNode } from "react";
import { 
  AlignLeft, 
  ChevronDown, 
  Paintbrush, 
  Bold, 
  Italic, 
  Underline,
  Type
} from 'lucide-react';

export interface IMockTextEditorIcons {
 icon: ReactNode;
}

export const mockTextEditorIcons: IMockTextEditorIcons[] = [
  {
    icon: <AlignLeft className="w-[42px] h-[24px]" size={18} />
  },
  {
    icon: <ChevronDown className="w-[24px] h-[24px]" size={16} />
  },
  {
    icon: <Paintbrush className="w-[24px] h-[24px]" size={18} />
  },
  {
    icon: <Bold className="w-[24px] h-[24px]" size={18} />
  },
  {
    icon: <Italic className="w-[24px] h-[24px]" size={18} />
  },
  {
    icon: <Underline className="w-[48px] h-[24px]" size={18} />
  },
  {
    icon: <Type size={16} />
  },
];
