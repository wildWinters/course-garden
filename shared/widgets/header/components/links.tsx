"use client";
import { cn } from "@/shared/lib/utils";
import HEADER_LINKS from "@/shared/constants/header-links";
import { Last_LIST_ELEMENT_BUTTON } from "@/shared/widgets/header/const/tw-list-button";
// import { Labels } from "@/shared/constants/labels";
import { Labels } from "@/shared/constants/labels";
import { DialogWrapper, SignInContentOfDialog } from "@/bugs/bugs";
import { Button } from "@/shared/shad-cn/ui/button";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

interface LinksListProps {
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
                    src="/robo-handlers.png"
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

export function HeaderLinks() {
  const { t } = useTranslation();

  return (
    <LinksList
      links={t("app.navigation", { returnObjects: true }) as string[]}
    />
  );
}
export function MobileHeader() {
  const { t } = useTranslation();
  const navigation = t("app.navigation", { returnObjects: true }) || [];
  const safeNavigation = Array.isArray(navigation) ? navigation : [];

  return (
    <header className="flex h-[80px] items-center justify-between lg:hidden mx-[10vw] mt-[20px]">
      <Image src="/Sign.jpg" alt="Sign" width={81} height={81} />

      <DialogWrapper
        Trigger={
          <Button className="w-[29vw] h-[40px]" variant="purple">
            {t("auth.login.footer.link.label")}
          </Button>
        }
      >
        <div className="flex w-full">
          <SignInContentOfDialog labels={Labels} inOrUp="up" />
          <Image
            src="/robo-handlers.png"
            alt="robo-handlers"
            width={400}
            height={400}
            className="min-h-[100%] w-1/2 h-full hidden lg:block"
          />
        </div>
      </DialogWrapper>

      <DialogWrapper
        Trigger={
          <Menu className="text-[rgba(241,120,182,1)] w-[50px] h-[50px]" />
        }
        dialogContentClassName="!border-0 shadow-none bg-opacity-80 w-[100vw] h-screen flex flex-col items-center justify-center gap-6 p-6"
      >
        <ul className="flex flex-col items-center justify-center gap-6 text-lg font-medium text-white">
          {safeNavigation.map((item, index) => (
            <li key={index}>
              <Button className="px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition-colors">
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </DialogWrapper>
    </header>
  );
}
