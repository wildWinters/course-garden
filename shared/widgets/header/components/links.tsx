import { cn } from "@/shared/lib/utils";
import HEADER_LINKS from "@/shared/constants/header-links";
import { Last_LIST_ELEMENT_BUTTON } from "@/shared/widgets/header/const/tw-list-button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/shad-cn/ui/dialog";
import { Labels } from "@/shared/constants/labels";

export function HeaderLinks({ links = HEADER_LINKS }: { links: string[] }) {
  return (
    <ul className="flex space-x-[40px] items-center">
      {links.map((link, index) => (
        <Dialog key={link}>
          <DialogTrigger asChild>
            <li
              className={cn(
                "text-[14px] font-medium cursor-pointer hover:opacity-80 transition-opacity list-none",
                index === links.length - 1 && Last_LIST_ELEMENT_BUTTON
              )}
            >
              {link}
            </li>
          </DialogTrigger>
          <DialogContent className="flex w-[80vw] bg-white rounded-lg">
          </DialogContent>
        </Dialog>
      ))}
    </ul>
  );
}

