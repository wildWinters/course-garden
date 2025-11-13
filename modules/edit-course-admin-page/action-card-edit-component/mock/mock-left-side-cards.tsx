import { Fan, FileText, Play, RotateCcw } from "lucide-react";
import type { ElementType } from "react";

export interface LeftSideCard {
  description: string;
  Icon: ElementType;
}

export const mockLeftSideCards: LeftSideCard[] = [
  {
    description: "Video",
    Icon: Play,
  },
  {
    description: "Text",
    Icon: FileText,
  },
  {
    description: "Reset",
    Icon: RotateCcw,
  },
  {
    description: "Condition",
    Icon: Fan,
  },
];

export const mockRightSideCards = [
  {
    description: "Image",
    Icon: Play,
  },
  {
    description: "Text and image",
    Icon: FileText,
  },
  {
    description: "Quizzes and Tests",
    Icon: RotateCcw,
  },
  {
    description: "Label",
    Icon: Fan,
  },
];
