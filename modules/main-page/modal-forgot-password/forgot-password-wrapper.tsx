"use client";
import { useTranslation } from "react-i18next";
import { CustomModal } from "@/shared/widgets/custom-modal/custom-modal-wrapper";
import { useModalStore } from "@/shared/store/use-modal-store";
import { CustomModalOfEmailSent } from "@/shared/widgets/custom-modal/components/custom-modal-of-email-sent-content";
import { ReactNode } from "react";

export interface IForgotPasswordWrapperProps {
  Trigger: ReactNode;
}

export function ForgotPasswordWrapper({
  Trigger,
}: IForgotPasswordWrapperProps) {
  const {
    isCustomModalOfEmailSentContentOpen,
    closeCustomModalOfEmailSentContent,
  } = useModalStore();
  return (
    <>
      <CustomModal
        id="create-new-password"
        isOpen={isCustomModalOfEmailSentContentOpen}
        onClose={closeCustomModalOfEmailSentContent}
      >
        <CustomModalOfEmailSent />
      </CustomModal>
    </>
    // <DialogWrapper
    //   dialogContentClassName="flex flex-col gap-[20px] min-w-[260px]  max-w-[500px] !p-[40px]"
    //   Trigger={Trigger}
    // >
    //   <ForgotPasswordHeading />
    //   <LabelInput
    //     id="email"
    //     label="Email"
    //     placeholder="Enter your email"
    //     type="email"
    //   >
    //     <Mail
    //       className={cn("absolute text-[14px] left-[10px] cursor-pointer")}
    //     />
    //   </LabelInput>
    //   <ModalEmailSendWrapper
    //     Trigger={
    //       <Button variant={"purple"}>
    //         {t("auth.modal-forgot-password.email")}
    //       </Button>
    //     }
    //   />
    //   <LoginDescription />
    // </DialogWrapper>
  );
}
