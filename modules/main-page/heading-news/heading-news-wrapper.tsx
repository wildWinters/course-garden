"use client";
import { Background } from "@/shared/ui/background";
import { Button } from "@/shared/shad-cn/ui/button";
import { Headings } from "./components/headings";
import { PictureSection } from "./components/picture-section";
import { useTranslation } from "react-i18next";
import { ForgotPasswordWrapper } from "../modal-forgot-password/forgot-password-wrapper";
import { ModalEmailSendWrapper } from "../modal-email-sent/modal-email-sent-wrapeer";
import { CreateNewPasswordWrapper } from "../modal-create-new-password/create-new-passsword-wrapper";

export function HeadingsWrapper() {
  const { t } = useTranslation();
  return (
    <>
      <Background>
        <Headings LettesImages={<PictureSection />}>
          <Button
            style={{ maxWidth: "220px" }}
            className="mt-[40px]"
            variant="purple"
          >
            {t("app.features.createCourseAction")}
          </Button>
        </Headings>
      </Background>

      <ForgotPasswordWrapper
        Trigger={
          <Button variant="purple">
            {t("app.features.createCourseAction")}
          </Button>
        }
      />
      <ModalEmailSendWrapper />
      <CreateNewPasswordWrapper />
    </>
  );
}
