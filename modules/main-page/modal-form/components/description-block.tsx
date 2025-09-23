"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export interface IDescriptionBlock {
  inOrUp?: "in" | "up";
}

export function DescriptionBlock({ inOrUp = "in" }: IDescriptionBlock) {
  const { t } = useTranslation();

  const leftText =
    inOrUp === "in"
      ? t("auth.login.footer.text", { defaultValue: "Don't have an account?" })
      : t("auth.login.footer.textHave", { defaultValue: "Already have an account?" });

  const linkLabel =
    inOrUp === "in"
      ? t("auth.login.footer.link.label", { defaultValue: "Sign Up" })
      : t("auth.login.footer.link.label2", { defaultValue: "Sign In" });

  const linkHref =
    inOrUp === "in"
      ? t("auth.login.footer.link.href", { defaultValue: "/signup" })
      : t("auth.login.footer.link.href2", { defaultValue: "/login" });

  return (
    <section className="flex items-center gap-[15px] text-[14px] mt-[40px]">
      <span className="font-[500] text-[rgba(114,77,247,1)]">{leftText}</span>
      <Link href={linkHref} className="font-[500] text-[14px] text-[rgba(45,30,99,1)]">
        {linkLabel}
      </Link>
    </section>
  );
}
