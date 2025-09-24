"use client";
import { CustomModal } from "@/shared/widgets/custom-modal/custom-modal-wrapper";
import { CustomModalOfOnePassword } from "@/shared/widgets/custom-modal/components/custom-modal-of-new-password-content";
import { useModalStore } from "@/shared/store/use-modal-store";

export function CreateNewPasswordWrapper() {
  const {
    isCustomModalOfEmailSentContentOpen,
    isCustomModalOfSignInOpen,
    isCustomModalOfForgotPasswordOpen,
    isCustomModalOfCreateNewPasswordOpen,
    openCustomModalOfEmailSentContent,
    closeCustomModalOfEmailSentContent,
    openCustomModalOfForgotPassword,
    closeCustomModalOfForgotPassword,
    openCustomModalOfSignIn,
    closeCustomModalOfSignIn,
    openCustomModalOfCreateNewPassword,
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

// <DialogWrapper
//   isOpen={isOpen}
//   setIsOpen={setisOpen}
//   dialogContentClassName="flex flex-col gap-[20px] min-w-[300px] max-w-[500px] !p-[40px] rounded-2xl bg-white"
//   Trigger={null}
// >
//   <CreateNewPasswordTitle />
//   <LabelInput
//     label="New Passwword"
//     type="password"
//     id="new-password"
//     placeholder="Enter your password"
//   >
//     <Eye className="absolute left-[20px] w-[10px] h-[10px]" />
//   </LabelInput>

//   <LabelInput
//     label="Confirm-password"
//     type="password"
//     id="re-enter-password"
//     placeholder="Re-enter your password"
//   >
//     <Eye className="absolute left-[20px] w-[10px] h-[10px]" />
//   </LabelInput>
//   <Button variant="purple">Reset Password</Button>
// </DialogWrapper>
