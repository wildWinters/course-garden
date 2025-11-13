import { Bookmark, FileImage, HelpCircle, Image } from "lucide-react";

export interface LeftSideCard {
  description: string;
  Icon: React.ElementType;
}

export const mockLeftSideCards: LeftSideCard[] = [
  {
    description: "Image",
    Icon: Image,
  },
  {
    description: "Text and image",
    Icon: FileImage,
  },
  {
    description: "Quizzes and Tests",
    Icon: HelpCircle,
  },
  {
    description: "Label",
    Icon: Bookmark,
  },
];
