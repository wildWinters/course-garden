"use client";
import { Button } from "@/shared/shad-cn/ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { borderGradient } from "@/shared/constants/border-gradient";

interface IButtonsBLock {
  inOrUp?: "in" | "up";
}

export function ButtonsBLock({ inOrUp = "in" }: IButtonsBLock) {
  const { t } = useTranslation();
  const textButton =
    inOrUp === "in"
      ? t("auth.login.buttons.0.label")
      : t("auth.login.footer.link.label");

  return (
    <div className="flex gap-[20px] mt-[40px] flex-col md:flex-row">
      <Button className="flex-1" variant="purple">
        {textButton}
      </Button>
      <Button
        variant="google"
        className="flex-1 rounded-[8px]"
        style={{
          ...borderGradient,
          padding: "0.5rem 1rem",
        }}
      >
        <Image src="/img/google.png" alt="google" width={20} height={20} />
        {t("auth.login.buttons.1.label")}
      </Button>
    </div>
  );
}
