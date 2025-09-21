"use client";
import { cn } from "@/shared/lib/utils";
import HEADER_LINKS from "@/shared/widgets/header/const/header-links";
import { Last_LIST_ELEMENT_BUTTON } from "@/shared/widgets/header/const/tw-list-button";
import { Labels } from "@/shared/mock/labels";
import { DialogWrapper } from "@/shared/ui/dialog-wrapper";
import { SignInContentOfDialog } from "@/modules/main-page/forms/components/sign-in-content-of-dialog";
import { Button } from "@/shared/shad-cn/ui/button";
import Image from "next/image";

export interface LinksListProps {
  links?: string[];
  ulClassName?: string;
}

export function LinksList({
  links = HEADER_LINKS,
  ulClassName,
}: LinksListProps) {
  const safeLinks = Array.isArray(links) ? links : [];

  return (
    <ul className={cn("flex space-x-[40px] items-center", ulClassName)}>
      {safeLinks.map((link, index) => {
        const linkText = link;

        if (index === links.length - 1) {
          return (
            <li
              key={link}
              className={cn("list-none", Last_LIST_ELEMENT_BUTTON)}
            >
              <DialogWrapper
                Trigger={
                  <Button className="w-full" variant="purple">
                    {linkText}
                  </Button>
                }
              >
                <div className="flex w-full">
                  <SignInContentOfDialog labels={Labels} />
                  <Image
                    src="/img/robo-handlers.png"
                    alt="robo-handlers"
                    width={400}
                    height={400}
                    className="min-h-[100%] w-1/2 h-full hidden md:block"
                  />
                </div>
              </DialogWrapper>
            </li>
          );
        }

        return (
          <li
            key={link}
            className={cn(
              "text-[14px] font-medium cursor-pointer hover:opacity-80 transition-opacity list-none"
            )}
          >
            {linkText}
          </li>
        );
      })}
    </ul>
  );
}
