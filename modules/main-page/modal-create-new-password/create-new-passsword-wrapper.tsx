"use client";
import { DialogWrapper } from "@/shared/ui/dialog-wrapper";
import { Button } from "@/shared/shad-cn/ui/button";
import { LabelInput } from "../modal-form/components/label-input";
import { Eye } from "lucide-react";
import { CreateNewPasswordTitle } from "./components/create-new-password-title";
import { useState } from "react";
import { useEffect } from "react";

export function CreateNewPasswordWrapper() {
  const [isOpen, setisOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => { 
      setisOpen(true);
    }, 3000);
  }, []);

  return (
    <DialogWrapper
      isOpen={isOpen}
      setIsOpen={setisOpen}
      dialogContentClassName="flex flex-col gap-[20px] min-w-[300px] max-w-[500px] !p-[40px] rounded-2xl bg-white"
      Trigger={null}
    >
      <CreateNewPasswordTitle />
      <LabelInput
        label="New Passwword"
        type="password"
        id="new-password"
        placeholder="Enter your password"
      >
        <Eye className="absolute left-[20px] w-[10px] h-[10px]" />
      </LabelInput>

      <LabelInput
        label="Confirm-password"
        type="password"
        id="re-enter-password"
        placeholder="Re-enter your password"
      >
        <Eye className="absolute left-[20px] w-[10px] h-[10px]" />
      </LabelInput>
      <Button variant="purple">Reset Password</Button>
    </DialogWrapper>
  );
}
