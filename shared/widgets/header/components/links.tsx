"use client";
import Image from "next/image";
import { ModalFormWrapper } from "@/modules/main-page/modal-form-sign-in-or-up-component/forms-wrapper";
import { cn } from "@/shared/lib/utils";
import { Labels } from "@/shared/mock/labels";
import { useModalStore } from "@/shared/store/use-modal-store";
import HEADER_LINKS from "@/shared/widgets/header/const/header-links";
import { Last_LIST_ELEMENT_BUTTON } from "@/shared/widgets/header/const/tw-list-button";

export interface LinksListProps {
  links?: string[];
  ulClassName?: string;
}

export function LinksList({
  links = HEADER_LINKS,
  ulClassName,
}: LinksListProps) {
  const safeLinks = Array.isArray(links) ? links : [];
  const { openCustomModalOfSignIn } = useModalStore();

  return (
    <ul className={cn("flex space-x-[40px] items-center", ulClassName)}>
      {safeLinks.map((link, index) => {
        const linkText = link;

        if (index === links.length - 1) {
          return (
            <li
              key={link}
              onClick={openCustomModalOfSignIn}
              className={cn("list-none", Last_LIST_ELEMENT_BUTTON)}
            >
              sign in
              <ModalFormWrapper />
            </li>
          );
        }

        return (
          <li
            key={link}
            className={cn(
              "text-[14px] font-medium cursor-pointer hover:opacity-80 transition-opacity list-none",
            )}
          >
            {linkText}
          </li>
        );
      })}
    </ul>
  );
}
