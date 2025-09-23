"use client";
import { Input } from "@/shared/shad-cn/ui/input";
import { ReactNode } from "react";

export interface LabelInputProps {
  id: string;
  label: string;
  value?: string;
  error?: string;
  type?: string;
  placeholder: string;
  children?: ReactNode;
  isClickedOnEye?: boolean;
  onBlur?: () => void;
  setIsClickedOnEye?: (value: boolean) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  type,
}: LabelInputProps) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="relative left-[5px] text-[rgba(45,30,99,1)] font-[400]" htmlFor={id}>
        {label}
      </label>
      <div className="relative flex items-center">
        <Input
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full h-11 rounded-xl placeholder:text-gray-600 border ${
            error ? "border-red-500" : "border-[rgba(228,228,231,1)]"
          } ${
            children ? "pl-9" : "pl-3"
          } focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500`}
          type={type}
        />
        {children}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
