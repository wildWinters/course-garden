"use client";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/shad-cn/ui/button";
import { useModalStore } from "@/shared/store/use-modal-store";

export function LoginDescription() {
  const { t } = useTranslation();
  const closeCustomModalOfForgotPassword = useModalStore(
    (state) => state.closeCustomModalOfForgotPassword
  );
  const openCustomModalOfSignIn = useModalStore(
    (state) => state.openCustomModalOfSignIn
  );
  

  return (
    <section className="flex gap-2 items-center justify-center text-center">
      <span className="text-[14px] font-[400] text-gray-500">
        Remember Password?
      </span>

      <Button
        onClick={() => {
          openCustomModalOfSignIn();
          closeCustomModalOfForgotPassword();
        }}
        className="bg-transparent text-[14px] font-[600] text-[rgba(35,111,246,1)] hover:bg-transparent"
      >
        Login
      </Button>
      
    </section>
  );
}
