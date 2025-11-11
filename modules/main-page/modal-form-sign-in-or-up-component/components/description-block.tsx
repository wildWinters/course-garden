"use client";
import { useTranslation } from "react-i18next";
import { useModalStore } from "@/shared/store/use-modal-store";

export function DescriptionBlock() {
  const { t } = useTranslation();

  const inOrUp = useModalStore((state) => state.inOrUp);

  const closeSignUpShadCnModal = useModalStore(
    (state) => state.closeSignUpShadCnModal,
  );
  const openCustomModalOfSignIn = useModalStore(
    (state) => state.openCustomModalOfSignIn,
  );

  const leftText =
    inOrUp === "in"
      ? t("auth.login.footer.text", { defaultValue: "Don't have an account?" })
      : t("auth.login.footer.textHave", {
          defaultValue: "Already have an account?",
        });

  const linkLabel =
    inOrUp === "in"
      ? t("auth.login.footer.link.label", { defaultValue: "Sign Up" })
      : t("auth.login.footer.link.label2", { defaultValue: "Sign In" });

  console.log(inOrUp);
  return (
    <section className="flex items-center gap-[15px] text-[14px] mt-[40px]">
      <span className="font-[500] text-[rgba(114,77,247,1)]">{leftText}</span>
      <span
        onClick={() => {
          openCustomModalOfSignIn();
          closeSignUpShadCnModal();
          setTimeout(() => console.log(useModalStore.getState().inOrUp), 1000);
        }}
        className="font-[500] text-[14px] text-[rgba(45,30,99,1)] cursor-pointer"
      >
        {linkLabel}
      </span>
    </section>
  );
}
