import { cn } from "@/shared/lib/utils";
import HEADER_LINKS from "@/shared/constants/header-links";
import { Last_LIST_ELEMENT_BUTTON } from "@/shared/widgets/header/const/tw-list-button";

export function HeaderLinks({ links = HEADER_LINKS }: { links: string[] }) {
  return (
    <ul>
      {links.map((link, index) => (
        <li
          className={cn(
            "text-[14px] font-medium",
            index === links.length - 1 && Last_LIST_ELEMENT_BUTTON
          )}
          key={link}
        >
          {link}
        </li>
      ))}
    </ul>
  );
}
