"use client";
import { useTranslation } from "react-i18next";

export interface IGrettingsRegistrationMode {
  inOrUp?: "in" | "up" | null;
}

export function GrettingsRegistration({
  inOrUp = "in",
}: IGrettingsRegistrationMode) {
  const { t } = useTranslation();

  return (
    <>
      <span className="font-[500] mb-[8px] text-[30px] text-[rgba(45,30,99,1)]">
        {t("auth.login.title")}
      </span>
      <span className="text-[16px] font-[500] text-[rgba(45,30,99,1)]">
        {inOrUp === "in" ? t("auth.login.subtitle") : t("app.create")}
      </span>
    </>
  );
}
