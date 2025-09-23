"use client";
import { borderGradient } from "@/shared/constants/border-gradient";
import { Labels } from "@/shared/mock/labels";
import { GrettingsRegistration } from "./grettings-registration";
import { AgreeWithTermsOfUseAndPrivacyPolicy } from "./agree-with-terms-of-use-and-privacy-policy";
import { ButtonsBLock } from "./buttons-block";
import { DescriptionBlock } from "./description-block";
import { EyeOff } from "lucide-react";
import { LabelInput } from "./label-input";
import { FormData } from "../model/form-schema";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { useUiStore } from "../store/ui/ui-store";
import { Eye } from "lucide-react";

export interface ISignInContentOfDialog {
  labels?: typeof Labels;
  inOrUp?: "in" | "up";
}

export function SignInContentOfDialog({
  labels = Labels,
  inOrUp = "in",
}: ISignInContentOfDialog) {
  const [isNotClickedToClose, setIsNotClickedToClose] = useState<boolean>(true);
  const [isTypeOrPasswordInput, setIsTypeOrPasswordInput] = useState<
    "type" | "password"
  >("password");

  const handleClickEye = (isTypeOrPasswordInputs: "type" | "password") => {
    if (isTypeOrPasswordInputs === "type") setIsTypeOrPasswordInput("password");
    else setIsTypeOrPasswordInput("type");
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data.email, data.password);
  };
  return (
    <section
      className="flex-1 flex flex-col w-1/2 rounded-[8px] px-[24px] py-[54px]"
      style={{ padding: "54px 24px", ...borderGradient }}
    >
      <GrettingsRegistration inOrUp={inOrUp} />
      <div className="flex flex-col p-[10px] rounded-[14px]">
        <div className="flex flex-col mt-[40px]" style={{ gap: "16px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {labels.map((label, index) => (
              <Controller
                key={label.label}
                name={label.label.toLowerCase() as keyof FormData}
                control={control}
                rules={{
                  required: `${label.label} обов’язковий`,
                  minLength:
                    label.label.toLowerCase() === "password"
                      ? { value: 6, message: "Мінімум 6 символів" }
                      : undefined,
                }}
                render={({ field }) => (
                  <LabelInput
                    {...field}
                    type={(index !== 0 && isTypeOrPasswordInput) || label.type}
                    id={label.label.toLowerCase()}
                    label={label.label}
                    placeholder={label.label}
                    error={
                      errors[label.label.toLowerCase() as keyof FormData]
                        ?.message
                    }
                  >
                    {index === 1 && (
                      <EyeOff
                        onClick={() => handleClickEye(isTypeOrPasswordInput)}
                        className={cn(
                          "absolute right-[10px] cursor-pointer",
                          index === 1 &&
                            isTypeOrPasswordInput === "type" &&
                            "hidden"
                        )}
                      />
                    )}

                    {index === 1 && (
                      <Eye
                        onClick={() => handleClickEye(isTypeOrPasswordInput)}
                        className={cn(
                          "absolute right-[10px] cursor-pointer",
                          index === 1 &&
                            isTypeOrPasswordInput === "password" &&
                            "hidden"
                        )}
                      />
                    )}
                  </LabelInput>
                )}
              />
            ))}

            <AgreeWithTermsOfUseAndPrivacyPolicy
              setIsOpen={setIsNotClickedToClose}
              isOpen={isNotClickedToClose}
              inOrUp={inOrUp}
            />
            <ButtonsBLock inOrUp={inOrUp} />
          </form>
        </div>
      </div>

      <DescriptionBlock inOrUp={inOrUp} />
    </section>
  );
}
