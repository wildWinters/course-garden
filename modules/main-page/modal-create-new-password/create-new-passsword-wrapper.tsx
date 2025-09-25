"use client";
import { CustomModal } from "@/shared/widgets/custom-modal/custom-modal-wrapper";
import { CustomModalOfOnePassword } from "@/shared/widgets/custom-modal/components/custom-modal-of-new-password-content";
import { useModalStore } from "@/shared/store/use-modal-store";



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
