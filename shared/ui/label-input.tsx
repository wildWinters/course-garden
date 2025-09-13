import { Input } from "@/shared/shad-cn/ui/input";

export function LabelInput({
  id,
  label,
  value,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-[4px]">
      <label htmlFor={id}>{label}</label>
      <Input
        className="w-full h-[40px] rounded-[9px] border-[2px] border-[rgba(228,228,231,1)] placeholder:text-[rgba(228,228,231,1)]"
        id={id}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
