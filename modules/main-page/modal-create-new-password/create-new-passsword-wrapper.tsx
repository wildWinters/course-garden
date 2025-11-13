"use client";
import { useModalStore } from "@/shared/store/use-modal-store";
import { CustomModalOfOnePassword } from "@/shared/widgets/custom-modal/components/custom-modal-of-new-password-content";
import { CustomModal } from "@/shared/widgets/custom-modal/custom-modal-wrapper";

export function CreateNewPasswordWrapper() {
  const {
    isCustomModalOfCreateNewPasswordOpen,
    closeCustomModalOfCreateNewPassword,
  } = useModalStore();

  return (
    <>
      <CustomModal
        id="create-new-password"
        isOpen={isCustomModalOfCreateNewPasswordOpen}
        onClose={closeCustomModalOfCreateNewPassword}
      >
        <CustomModalOfOnePassword />
      </CustomModal>
    </>
  );
}
