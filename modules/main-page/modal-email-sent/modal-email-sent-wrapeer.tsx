"use client";
import { useTranslation } from "react-i18next";
import { DialogWrapper } from "@/shared/ui/dialog-wrapper";
import { ReactNode } from "react";
import { MessageWithLink } from "./components/message-with-link";
import { ModalSendEmailTitle } from "./components/modal-sen-email-title";
import { CustomModal } from "@/shared/widgets/custom-modal/custom-modal-wrapper";
import { useModalStore } from "@/shared/store/use-modal-store";
import { CustomModalOfEmailSent } from "@/shared/widgets/custom-modal/components/custom-modal-of-email-sent-content";

export function ModalEmailSendWrapper() {
  const {
    isCustomModalOfEmailSentContentOpen,
    closeCustomModalOfEmailSentContent,
  } = useModalStore();

  return (
    <CustomModal
      id="create-new-password"
      isOpen={isCustomModalOfEmailSentContentOpen}
      onClose={closeCustomModalOfEmailSentContent}
    >
      <CustomModalOfEmailSent />
    </CustomModal>
  );
}


