"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface IDescriptionBlock {
  inOrUp?: "in" | "up";
}

export function DescriptionBlock({ inOrUp = "in" }: IDescriptionBlock) {
  const { t } = useTranslation();

  return (
    <section className="flex items-center gap-[15px] text-[14px] mt-[40px]">
      <span className="font-[500] text-[rgba(114,77,247,1)]">
        {inOrUp === "in"
          ? t("auth.login.footer.notHaveAccount")
          : t("auth.login.footer.haveAccount")}
      </span>
      <Link href="#" className="font-[500] text-[14px] text-[rgba(45,30,99,1)]">
        {inOrUp === "up"
          ? t("auth.login.footer.link.label")
          : t("auth.login.footer.link.label2")}
      </Link>
    </section>
  );
}
