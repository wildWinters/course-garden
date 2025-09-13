import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/shad-cn/ui/dialog";
import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

export interface DialogWrapper {
  Trigger: ReactNode;
  children: ReactNode;
}

export function DialogWrapper({ Trigger, children }: DialogWrapper) {
  return (
    <Dialog>
      <DialogTrigger asChild>{Trigger}</DialogTrigger>
      <DialogContent className={cn("!flex sm:!w-[100vw]   gap-2 rounded-2xl")}>
        {children}
      </DialogContent>
    </Dialog>
  );
}

import { LabelInput } from "@/shared/ui/label-input";

export function SignInContentOfDialog({
  labels = Labels,
}: {
  labels: typeof Labels;
}) {
  return (
    <section
      className="flex-1 flex flex-col w-full bg-white border-2 border-[rgba(45,30,99,1)] rounded-[8px] px-[24px] py-[54px]"
      style={{
        padding: "54px 24px",
        border: "2px solid",
        borderImageSlice: 1,
        borderImageSource:
          "linear-gradient(246.14deg, #C2CCE3 19.44%, #9D82FD 49.71%, #5E4E97 75.58%)",
      }}
    >
      <GrettingsRegistration />
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
                <EyeOff
                  style={{ right: "80px" }}
                  className={`absolute cursor-pointer`}
                />
              )}
            </LabelInput>
          ))}
          <AgreeWithTermsOfUseAndPrivacyPolicy />
        </div>
      </div>
      <ButtonsBLock />
      <DescriptionBlock />
    </section>
  );
}

export function GrettingsRegistration() {
  return (
    <>
      <span className="font-[500] mb-[8px] text-[30px] text-[rgba(45,30,99,1)]">
        Hello👋
      </span>
      <span className="text-[16px] font-[500] text-[rgba(45,30,99,1)]">
        Sign in to access your account
      </span>
    </>
  );
}

import { Checkbox } from "@/shared/shad-cn/ui/checkbox";
import { EyeOff } from "lucide-react";
import Link from "next/link";
export function AgreeWithTermsOfUseAndPrivacyPolicy() {
  return (
    <div className="w-full flex items-center justify-between mt-[16px]">
      <div style={{ gap: "15px" }} className="flex items-center gap-[15px]">
        <Checkbox
          className="rounded-[10px] w-[12px] h-[12px]"
          style={{
            border: "1px solid",
            borderImageSlice: 1,
            borderImageSource:
              "linear-gradient(246.14deg, #C2CCE3 19.44%, #9D82FD 49.71%, #5E4E97 75.58%)",
          }}
        />

        <span className="text-[rgba(45,30,99,1)] font-[500]">
          Keep me signed in
        </span>
      </div>
      <Link
        href="#"
        className="font-[500] text-[rgba(114,77,247,1)] text-[14px]"
      >
        Forgot Password?
      </Link>
    </div>
  );
}

import { borderGradient } from "@/shared/constants/border-gradient";
import { Button } from "@/shared/shad-cn/ui/button";
import Image from "next/image";
import { Labels } from "@/shared/constants/labels";
export function ButtonsBLock() {
  return (
    <div className="flex gap-[20px] mt-[40px]">
      <Button className="flex-1" variant="purple">
        Sign In
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
        Sign in with Google
      </Button>
    </div>
  );
}

export function DescriptionBlock() {
  return (
    <section className="flex items-center gap-[15px] text-[14px] mt-[40px]">
      <span className="font-[500] text-[rgba(114,77,247,1)]">
        Don`t have an account?
      </span>
      <Link href="#" className="font-[500] text-[14px] text-[rgba(45,30,99,1)]">
        Sign Up
      </Link>
    </section>
  );
}
