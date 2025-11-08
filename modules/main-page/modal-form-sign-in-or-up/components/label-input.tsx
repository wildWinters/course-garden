"use client";
import { Input } from "@/shared/shad-cn/ui/input";
import { ReactNode } from "react";
import { ChangeEvent } from "react";
import { Label } from "@/shared/shad-cn/ui/label";


export interface LabelInputProps {
  id?: string;
  label?: string;
  value?: string;
  error?: string;
  type?: string;
  placeholder?: string;
  children?: ReactNode;
  isClickedOnEye?: boolean;
  isLabelEsists?: boolean;
  InputClassName?: string;
  onBlur?: () => void;
  setIsClickedOnEye?: (value: boolean) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function LabelInput({
  id,
  label = "",
  placeholder = "Search...",
  children,
  value,
  onChange,
  onBlur,
  error,
  type,
  isLabelEsists = true,
  InputClassName,
}: LabelInputProps) {
  return (
    <div className="flex flex-col gap-[6px]">
      <Label
        className={
          isLabelEsists
            ? "relative left-[5px] text-[rgba(45,30,99,1)] font-[400]"
            : "hidden"
        }
        htmlFor={id}
      >
        {label}
      </Label>
      <div className="relative flex items-center">
        <Input
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          className={`w-full h-11 rounded-xl placeholder:text-gray-600 border ${
            error ? "border-red-500" : "border-[rgba(228,228,231,1)]"
          } ${
            children ? "pl-9" : "pl-3"
          } ${InputClassName} focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500`}
          type={type}
        />
        {children}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
