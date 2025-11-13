"use client";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ModalEmailSendWrapper } from "@/modules/main-page/modal-email-sent-component/modal-email-sent-wrapeer";
import { ForgotPasswordHeading } from "@/modules/main-page/modal-forgot-password-compenent/components/forgot-password-heading";
import { LoginDescription } from "@/modules/main-page/modal-forgot-password-compenent/components/login-description";
import { LabelInput } from "@/modules/main-page/modal-form-sign-in-or-up-component/components/label-input";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/shad-cn/ui/button";

export function CustomModalOfForgotPassword() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col gap-[20px] min-w-[300px] max-w-[500px] !p-[40px] rounded-2xl bg-white">
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
        <ModalEmailSendWrapper />
        <LoginDescription />
      </div>
    </>
  );
}
