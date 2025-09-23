"use client";
import { useTranslation } from "react-i18next";
import { DialogWrapper } from "@/shared/ui/dialog-wrapper";
import { LabelInput } from "../modal-form/components/label-input";
import { Mail } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/shad-cn/ui/button";
import { ForgotPasswordHeading } from "./components/forgot-password-heading";
import { LoginDescription } from "./components/login-description";
import { ReactNode } from "react";
import { ModalEmailSendWrapper } from "../modal-email-sent/modal-email-sent-wrapeer";

export interface IForgotPasswordWrapperProps {
  Trigger: ReactNode;
}

export function ForgotPasswordWrapper({
  Trigger,
}: IForgotPasswordWrapperProps) {
  const { t } = useTranslation();
  return (
    <DialogWrapper
      dialogContentClassName="flex flex-col gap-[20px] min-w-[260px]  max-w-[500px] !p-[40px]"
      Trigger={Trigger}
    >
      <ForgotPasswordHeading />
      <LabelInput
        id="email"
        label="Email"
        placeholder="Enter your email"
        type="email"
      >
        <Mail
          className={cn("absolute text-[14px] left-[10px] cursor-pointer")}
        />
      </LabelInput>
      <ModalEmailSendWrapper
        Trigger={
          <Button variant={"purple"}>
            {t("auth.modal-forgot-password.email")}
          </Button>
        }
      />
      <LoginDescription />
    </DialogWrapper>
  );
}
