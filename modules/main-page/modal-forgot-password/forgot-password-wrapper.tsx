"use client";
import { useTranslation } from "react-i18next";
import { CustomModal } from "@/shared/widgets/custom-modal/custom-modal-wrapper";
import { useModalStore } from "@/shared/store/use-modal-store";
import { ReactNode } from "react";
import { CreateNewPasswordWrapper } from "../modal-create-new-password/create-new-passsword-wrapper";
import { ForgotPasswordHeading } from "../modal-forgot-password/components/forgot-password-heading";
import { LabelInput } from "../modal-form-sign-in-or-up/components/label-input";
import { Mail } from "lucide-react";
import { ModalEmailSendWrapper } from "../modal-email-sent/modal-email-sent-wrapeer";
import { LoginDescription } from "../modal-forgot-password/components/login-description";
import { Button } from "@/shared/shad-cn/ui/button";
import { cn } from "@/shared/lib/utils";

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
