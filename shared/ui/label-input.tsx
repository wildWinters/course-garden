import { Input } from "@/shared/shad-cn/ui/input";
import { ReactNode } from "react";

interface LabelInput {
  id: string;
  label: string;
  placeholder: string;
  children?: ReactNode;
  value?: string;
}

export function LabelInput({ id, label, placeholder, children }: LabelInput) {
  return (
    <div className="flex flex-col gap-[4px]">
      <label className="text-[rgba(45,30,99,1)] font-[400]" htmlFor={id}>
        {label}
      </label>
      <div className="flex items-center space-between pl-[10px]">
        <Input
          className="relative w-full h-[40px] rounded-[9px] border-[2px] border-[rgba(228,228,231,1)] placeholder:text-gray-600"
          id={id}
          placeholder={placeholder}
        />
        {children}
      </div>
    </div>
  );
}
