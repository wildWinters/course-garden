"use client";

import Image from "next/image";
import { useModalStore } from "@/shared/store/use-modal-store";
import { CustomModal } from "@/shared/widgets/custom-modal/custom-modal-wrapper";
import { SignInContentOfDialog } from "./components/sign-in-content-of-dialog";
import { Labels } from "@/shared/mock/labels";

export function ModalFormWrapper() {
  const { isCustomModalOfSignInOpen, closeCustomModalOfSignIn } =
    useModalStore();

  return (
    <CustomModal
      id="sign-in"
      isOpen={isCustomModalOfSignInOpen}
      onClose={closeCustomModalOfSignIn}
      customModalClassName="w-[80vw]"
    >
      <div className="flex w-full">
        <SignInContentOfDialog labels={Labels} />
        <img
          style={{
            minHeight: "100%",
          }}
          src="/img/robo-handlers.png"
          alt="robo-handlers"
          className="w-1/2 h-full hidden md:block"
        />
      </div>
    </CustomModal>
  );
}
