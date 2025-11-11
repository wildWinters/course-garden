"use client";
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
