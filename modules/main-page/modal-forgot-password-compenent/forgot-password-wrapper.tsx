"use client";
import { Mail } from "lucide-react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/shad-cn/ui/button";
import { useModalStore } from "@/shared/store/use-modal-store";
import { CustomModal } from "@/shared/widgets/custom-modal/custom-modal-wrapper";
import { CreateNewPasswordWrapper } from "../modal-create-new-password/create-new-passsword-wrapper";
import { ModalEmailSendWrapper } from "../modal-email-sent-component/modal-email-sent-wrapeer";
import { LabelInput } from "../modal-form-sign-in-or-up-component/components/label-input";
import { ForgotPasswordHeading } from "./components/forgot-password-heading";
import { LoginDescription } from "./components/login-description";

export interface IForgotPasswordWrapperProps {
  Trigger: ReactNode;
}

export function ForgotPasswordWrapper({
  Trigger,
}: IForgotPasswordWrapperProps) {
  const { t } = useTranslation();
  const {
    closeCustomModalOfForgotPassword,
    isCustomModalOfForgotPasswordOpen,
  } = useModalStore();

  const openCustomModalOfEmailSentContent = useModalStore(
    (state) => state.openCustomModalOfEmailSentContent,
  );

  return (
    <>
      <CustomModal
        customModalClassName="!max-w-[30vw]"
        id="create-new-password"
        isOpen={isCustomModalOfForgotPasswordOpen}
        onClose={closeCustomModalOfForgotPassword}
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
        <ModalEmailSendWrapper />

        <Button
          onClick={() => {
            openCustomModalOfEmailSentContent();
            closeCustomModalOfForgotPassword();
          }}
          variant={"purple"}
          className="w-[80%] mx-[auto] my-[30px]"
        >
          {t("auth.modal-forgot-password.email")}
        </Button>

        <LoginDescription />
        <CreateNewPasswordWrapper />
      </CustomModal>
    </>
  );
}
