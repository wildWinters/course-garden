"use client";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/shad-cn/ui/button";
import { Background } from "@/shared/ui/background";
import { CreateNewPasswordWrapper } from "../modal-create-new-password/create-new-passsword-wrapper";
import { ModalEmailSendWrapper } from "../modal-email-sent-component/modal-email-sent-wrapeer";
import { ForgotPasswordWrapper } from "../modal-forgot-password-compenent/forgot-password-wrapper";
import { Headings } from "./components/headings";
import { PictureSection } from "./components/picture-section";

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
