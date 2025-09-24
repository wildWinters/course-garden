"use client";

import { DialogWrapper } from "@/shared/ui/dialog-wrapper";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/shad-cn/ui/button";
import Image from "next/image";
import { SignInContentOfDialog } from "@/modules/main-page/modal-form/components/sign-in-content-of-dialog";
import { Labels } from "@/shared/mock/labels";
import { useUiStore } from "../../modal-form/store/ui/ui-store";

export function LoginDescription() {
  const { t } = useTranslation();
  const linkText = t("Open Dialog");
  const modalFormsRef = useUiStore((state) => state.modalFormsRef);

  return (
    <section className="flex gap-2 items-center justify-center text-center">
      <span className="text-[14px] font-[400] text-gray-500">
        Remember Password?
      </span>

      <DialogWrapper
        ref={modalFormsRef}
        Trigger={
          <Button className="bg-transparent text-[14px] font-[600] text-[rgba(35,111,246,1)] hover:bg-transparent">
            Login
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
    </section>
  );
}
