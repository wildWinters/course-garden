import type { ReactElement } from "react";
import {
  Play,
  FileText,
  Share2,
  Fan,
  Image as ImageIcon,
  HelpCircle,
  Bookmark,
} from "lucide-react";

export interface IMockColumnCard {
  id: string | number;
  type: string;
  title: string;
  description: string;
  icon: ReactElement;
}

export const mockColumnCard: IMockColumnCard[] = [
  {
    id: "1",
    type: "video",
    title: "Video",
    description: "Add a video message or clip to your scenario.",
    icon: <Play className="w-[32px] h-[32px] text-[rgba(45,30,99,1)]" />,
  },
  {
    id: "2",
    type: "text",
    title: "Text",
    description: "Send a text message or display text content.",
    icon: <FileText className="w-[32px] h-[32px] text-[rgba(45,30,99,1)]" />,
  },
  {
    id: "3",
    type: "redirect",
    title: "Redirect",
    description: "Automatically redirect the user to another branch or page.",
    icon: <Share2 className="w-[32px] h-[32px] text-[rgba(45,30,99,1)]" />,
  },
  {
    id: "4",
    type: "condition",
    title: "Condition",
    description: "Add conditional logic to control the scenario flow.",
    icon: <Fan className="w-[32px] h-[32px] text-[rgba(45,30,99,1)]" />,
  },
];

export interface IMockBlocks {
  id: number | string;
  type: string;
  title: string;
  description: string;
  icon: ReactElement;
}

export const mockColumnCard2: IMockBlocks[] = [
  {
    id: 1,
    type: "image",
    title: "Image",
    description: "Add an image block to your content.",
    icon: <ImageIcon className="w-[32px] h-[32px] text-[rgba(45,30,99,1)]" />,
  },
  {
    id: 2,
    type: "text_image",
    title: "Text and image",
    description: "Combine text with an image in one block.",
    icon: <FileText className="w-[32px] h-[32px] text-[rgba(45,30,99,1)]" />,
  },
  {
    id: 3,
    type: "quiz",
    title: "Quizzes and Tests",
    description: "Create quizzes, polls or knowledge tests.",
    icon: <HelpCircle className="w-[32px] h-[32px] text-[rgba(45,30,99,1)]" />,
  },
  {
    id: 4,
    type: "label",
    title: "Label",
    description: "Add a label to categorize your content.",
    icon: <Bookmark className="w-[32px] h-[32px] text-[rgba(45,30,99,1)]" />,
  },
];
