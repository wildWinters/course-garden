"use client";
import { Input } from "@/shared/shad-cn/ui/input";
import { ReactNode } from "react";

export interface LabelInputProps {
  id: string;
  label: string;
  placeholder: string;
  children?: ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
}

export function LabelInput({
  id,
  label,
  placeholder,
  children,
  value,
  onChange,
  onBlur,
  error,
}: LabelInputProps) {
  return (
    <div className="flex flex-col gap-[4px]">
      <label className="text-[rgba(45,30,99,1)] font-[400]" htmlFor={id}>
        {label}
      </label>
      <div className="relative flex items-center space-between pl-[10px]">
        <Input
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full h-[40px] rounded-[9px] placeholder:text-gray-600 border-2 ${
            error ? "border-red-500" : "border-[rgba(228,228,231,1)]"
          }`}
        />
        {children}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
