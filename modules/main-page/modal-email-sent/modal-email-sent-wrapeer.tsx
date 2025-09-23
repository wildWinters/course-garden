"use client";
import { useTranslation } from "react-i18next";
import { DialogWrapper } from "@/shared/ui/dialog-wrapper";
import { ReactNode } from "react";
import { MessageWithLink } from "./components/message-with-link";
import { ModalSendEmailTitle } from "./components/modal-sen-email-title";

export function ModalEmailSendWrapper({ Trigger }: { Trigger: ReactNode }) {
  const { t } = useTranslation();

  return (
    <DialogWrapper
      dialogContentClassName="flex flex-col gap-[20px] min-w-[300px] max-w-[500px] !p-[40px] rounded-2xl bg-white"
      Trigger={Trigger}
    >
      <ModalSendEmailTitle email={t("modal-email-sent.email")}>
        <MessageWithLink
          message="Did not receive the email?"
          link="Resend Email"
        />

        <MessageWithLink
          message="Wrong Email Address?"
          link="Change Email Address"
        />
      </ModalSendEmailTitle>
    </DialogWrapper>
  );
}
