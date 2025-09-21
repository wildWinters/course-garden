"use client";
import { cn } from "@/shared/lib/utils";
import { borderGradient } from "@/shared/constants/border-gradient";
import { useTranslation } from "react-i18next";
import { Checkbox } from "@/shared/shad-cn/ui/checkbox";
import Link from "next/link";

export interface IAgreeWithTermsOfUseAndPrivacyPolicy {
  inOrUp?: "in" | "up";
}

export function AgreeWithTermsOfUseAndPrivacyPolicy({
  inOrUp = "in",
}: IAgreeWithTermsOfUseAndPrivacyPolicy) {
  const { t } = useTranslation();
  const description =
    inOrUp === "in" ? t("auth.login.options.0.label") : t("app.agree");
  return (
    <div className="w-full flex items-center justify-between mt-[16px]">
      <div style={{ gap: "15px" }} className="flex items-center gap-[15px]">
        <Checkbox
          className="rounded-[10px] w-[12px] h-[12px]"
          style={borderGradient}
        />

        <p className="text-[rgba(45,30,99,1)] font-[500]">
          {description}
          <span
            className={cn(
              "text-[rgba(114,77,247,1)]",
              inOrUp === "in" && "hidden"
            )}
          >
            {t("app.terms")}
          </span>

          <span className={cn(inOrUp === "in" && "hidden")}>
            {t("app.and")}
          </span>

          <span
            className={cn(
              "text-[rgba(114,77,247,1)]",
              inOrUp === "in" && "hidden"
            )}
          >
            {t("app.conditions")}
          </span>
        </p>
      </div>
      <Link
        href="#"
        className={cn(
          "font-[500] text-[rgba(114,77,247,1)] text-[14px]",
          inOrUp === "up" && "hidden"
        )}
      >
        {t("auth.login.options.1.label")}
      </Link>
    </div>
  );
}
