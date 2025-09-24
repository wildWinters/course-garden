"use client";
import { CustomModal } from "./custom-modal-wrapper";
import { useModalStore } from "@/shared/store/use-modal-store";
import { CustomModalOfSignInForm } from "./components/custom-modal-of-sign-in-form";
import { CustomModalOfForgotPassword } from "./components/custom-modal-of-forgot-passsword-content";
import { CustomModalOfEmailSent } from "./components/custom-modal-of-email-sent-content";
import { CustomModalOfOnePassword } from "./components/custom-modal-of-new-password-content";

export function GlobalModals() {
  const {
    isCustomModalOfEmailSentContentOpen,
    isCustomModalOfSignInOpen,
    isCustomModalOfForgotPasswordOpen,
    isCustomModalOfCreateNewPasswordOpen,
    closeCustomModalOfEmailSentContent,
    closeCustomModalOfSignIn,
    closeCustomModalOfForgotPassword,
    closeCustomModalOfCreateNewPassword,
  } = useModalStore();

  return (
    <>
      <CustomModal
        id="modal-root"
        isOpen={isCustomModalOfSignInOpen}
        onClose={closeCustomModalOfSignIn}
      >
        <CustomModalOfSignInForm />
      </CustomModal>

      <CustomModal
        id="modal-root"
        isOpen={isCustomModalOfForgotPasswordOpen}
        onClose={closeCustomModalOfForgotPassword}
      >
        <CustomModalOfForgotPassword />
      </CustomModal>

      <CustomModal
        id="modal-root"
        isOpen={isCustomModalOfEmailSentContentOpen}
        onClose={closeCustomModalOfEmailSentContent}
      >
        <CustomModalOfEmailSent />
      </CustomModal>

      <CustomModal
        id="modal-root"
        isOpen={isCustomModalOfCreateNewPasswordOpen}
        onClose={closeCustomModalOfCreateNewPassword}
      >
        <CustomModalOfOnePassword />
      </CustomModal>
    </>
  );
}
