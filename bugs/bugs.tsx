"use client";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/shad-cn/ui/dialog";
import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { borderGradient } from "@/shared/constants/border-gradient";
import { useTranslation } from "react-i18next";

export interface DialogWrapper {
  Trigger: ReactNode;
  children: ReactNode;
  dialogContentClassName?: string;
}

export function DialogWrapper({
  Trigger,
  children,
  dialogContentClassName,
}: DialogWrapper) {
  return (
    <Dialog>
      <DialogTrigger asChild>{Trigger}</DialogTrigger>
      <DialogContent
        className={cn(
          "flex w-[92vw] md:w-[80vw] !p-[0px] gap-2 rounded-2xl",
          dialogContentClassName
        )}
        style={borderGradient}
      >
        <DialogTitle className="hidden">{null}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
}


import { LabelInput } from "@/shared/ui/label-input";
interface ISignInContentOfDialog {
  labels?: typeof Labels;
  inOrUp?: "in" | "up";
}

export function SignInContentOfDialog({
  labels = Labels,
  inOrUp = "in",
}: ISignInContentOfDialog) {
  return (
    <section
      className="flex-1 flex flex-col w-1/2 rounded-[8px] px-[24px] py-[54px]"
      style={{
        padding: "54px 24px",
        ...borderGradient,
      }}
    >
      <GrettingsRegistration inOrUp={inOrUp} />
      <div className="flex flex-col p-[10px] rounded-[14px]">
        <div className="flex flex-col mt-[40px]" style={{ gap: "16px" }}>
          {labels.map((label, index) => (
            <LabelInput
              key={label.label}
              id={label.label.toLowerCase()}
              label={label.label}
              placeholder={label.label}
            >
              {index === 1 && (
                <EyeOff className={`absolute right-[10px] cursor-pointer`} />
              )}
            </LabelInput>
          ))}
          <AgreeWithTermsOfUseAndPrivacyPolicy inOrUp={inOrUp} />
        </div>
      </div>
      <ButtonsBLock inOrUp={inOrUp} />
      <DescriptionBlock inOrUp={inOrUp} />
    </section>
  );
}

export interface IGrettingsRegistrationMode {
  inOrUp?: "in" | "up";
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

import { Checkbox } from "@/shared/shad-cn/ui/checkbox";
import { EyeOff } from "lucide-react";
import Link from "next/link";
interface IAgreeWithTermsOfUseAndPrivacyPolicy {
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


import { Button } from "@/shared/shad-cn/ui/button";
import Image from "next/image";
import { Labels } from "@/shared/constants/labels";
import { DialogTitle } from "@radix-ui/react-dialog";

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
        <Image src="/google.png" alt="google" width={20} height={20} />
        {t("auth.login.buttons.1.label")}
      </Button>
    </div>
  );
}



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
