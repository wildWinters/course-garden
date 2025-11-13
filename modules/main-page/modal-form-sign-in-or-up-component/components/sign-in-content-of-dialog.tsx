"use client";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { borderGradient } from "@/shared/constants/border-gradient";
import { kyInstance } from "@/shared/lib/ky-instance";
import { cn } from "@/shared/lib/utils";
import { Labels } from "@/shared/mock/labels";
import { useModalStore } from "@/shared/store/use-modal-store";
import { useAuthStore } from "@/shared/store/useAuthStore";
import type { FormData } from "../model/form-schema";
import { getCurrentUser } from "../utils/auth";
import { AgreeWithTermsOfUseAndPrivacyPolicy } from "./agree-with-terms-of-use-and-privacy-policy";
import { ButtonsBLock } from "./buttons-block";
import { DescriptionBLockSignIn } from "./DescriptionBLockSignIn";
import { DescriptionBLockSignUp } from "./DescriptionBLockSignUp";
import { GrettingsRegistration } from "./grettings-registration";
import { LabelInput } from "./label-input";

export interface ISignInOrUpContentOfDialog {
  labels?: typeof Labels;
  inOrUp?: "in" | "up" | null;
}

export function SignInOrUpContentOfDialog({
  labels = Labels,
  inOrUp = "in",
}: ISignInOrUpContentOfDialog) {
  const router = useRouter();
  const inOrUps = useModalStore((state) => state.inOrUp);
  const login = useAuthStore((state) => state.login);
  const [isNotClickedToClose, setIsNotClickedToClose] = useState<boolean>(true);
  const [isTypeOrPasswordInput, setIsTypeOrPasswordInput] = useState<
    "type" | "password"
  >("password");

  const handleClickEye = (isTypeOrPasswordInputs: "type" | "password") => {
    setIsTypeOrPasswordInput(
      isTypeOrPasswordInputs === "type" ? "password" : "type",
    );
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { email: "", password: "" },
  });

  const handleLogin = async (data: FormData) => {
    try {
      const res = await kyInstance
        .post("/login", { json: data })
        .json<{ token: string }>();

      if (res.token) {
        const user = getCurrentUser();
        if (user) {
          login(res.token, user.role as "admin" | "user", user.id);

          if (user.role === "admin") {
            router.push("/admin");
          } else {
            router.push("/student-page");
          }
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Помилка логіну! Перевір email та пароль.");
    }
  };

  return (
    <section
      className="flex-1 flex flex-col w-1/2 rounded-[8px] px-[24px] py-[54px]"
      style={{ padding: "54px 24px", ...borderGradient }}
    >
      <GrettingsRegistration inOrUp={inOrUp} />
      <div className="flex flex-col p-[10px] rounded-[14px]">
        <div className="flex flex-col mt-[40px]" style={{ gap: "16px" }}>
          <form onSubmit={handleSubmit(handleLogin)}>
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
                  pattern:
                    label.label.toLowerCase() === "email"
                      ? {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Некоректний email",
                        }
                      : undefined,
                }}
                render={({ field }) => (
                  <LabelInput
                    {...field}
                    type={index === 1 ? isTypeOrPasswordInput : label.type} // ✅ чистіше
                    id={label.label.toLowerCase()}
                    label={label.label}
                    placeholder={label.label}
                    error={
                      errors[label.label.toLowerCase() as keyof FormData]
                        ?.message
                    }
                  >
                    {index === 1 && (
                      <>
                        <EyeOff
                          onClick={() => handleClickEye(isTypeOrPasswordInput)}
                          className={cn(
                            "absolute right-[10px] cursor-pointer",
                            isTypeOrPasswordInput === "type" && "hidden",
                          )}
                        />
                        <Eye
                          onClick={() => handleClickEye(isTypeOrPasswordInput)}
                          className={cn(
                            "absolute right-[10px] cursor-pointer",
                            isTypeOrPasswordInput === "password" && "hidden",
                          )}
                        />
                      </>
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

      {inOrUp === "in" ? (
        <DescriptionBLockSignIn />
      ) : (
        <DescriptionBLockSignUp />
      )}
    </section>
  );
}
