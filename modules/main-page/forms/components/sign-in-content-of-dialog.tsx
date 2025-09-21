"use client";
import { borderGradient } from "@/shared/constants/border-gradient";
import { Labels } from "@/shared/mock/labels";
import { GrettingsRegistration } from "./grettings-registration";
import { AgreeWithTermsOfUseAndPrivacyPolicy } from "@/bugs/bugs";
import { ButtonsBLock } from "./buttons-block";
import { DescriptionBlock } from "./description-block";
import { EyeOff } from "lucide-react";
import { LabelInput } from "./label-input";
import { FormData } from "../model/form-schema";
import { useForm, Controller } from "react-hook-form";

export interface ISignInContentOfDialog {
  labels?: typeof Labels;
  inOrUp?: "in" | "up";
}

export function SignInContentOfDialog({
  labels = Labels,
  inOrUp = "in",
}: ISignInContentOfDialog) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
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
                    id={label.label.toLowerCase()}
                    label={label.label}
                    placeholder={label.label}
                    error={
                      errors[label.label.toLowerCase() as keyof FormData]
                        ?.message
                    }
                  >
                    {index === 1 && (
                      <EyeOff className="absolute right-[10px] cursor-pointer" />
                    )}
                  </LabelInput>
                )}
              />
            ))}

            <AgreeWithTermsOfUseAndPrivacyPolicy inOrUp={inOrUp} />
            <ButtonsBLock inOrUp={inOrUp} />
          </form>
        </div>
      </div>

      <DescriptionBlock inOrUp={inOrUp} />
    </section>
  );
}
