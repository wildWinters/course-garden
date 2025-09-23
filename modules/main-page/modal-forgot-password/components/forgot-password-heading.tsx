"use client"
import { useTranslation } from "react-i18next";

export function ForgotPasswordHeading() {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-[clamp(18px,3vw,22px)] font-[800] text-[rgba(45,30,99,1)]">
        {t("auth.modal-forgot-password.password", { defaultValue: "Forgot Password" })}
      </h2>
      <span className="text-[14px] font-[400] text-gray-600">
        {t("auth.modal-forgot-password.description", {
          defaultValue:
            "Enter the email address you used to create the account, and we will email you instructions to reset your password.",
        })}
      </span>
    </>
  );
}
