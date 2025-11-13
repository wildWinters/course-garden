import { Checkbox } from "@radix-ui/react-checkbox";
import { LabelInput } from "@/modules/main-page/modal-form-sign-in-or-up-component/components/label-input";

export interface ILabelBlock {
  label: string;
  labelOFLabelInput: string;
  placeholder: string;
}

export function LabelBlock({
  label = "Save as Draft",
  labelOFLabelInput = "Title",
  placeholder = "Write  title",
}: ILabelBlock) {
  return (
    <div className="flex justify-between">
      <LabelInput InputClassName="w-[17vw] rounded-[8px] text-[rgba(186,186,186,1)] border-1 border-[rgba(186,186,186,1)]" label={labelOFLabelInput} placeholder={placeholder} />
      <div className="flex items-start gap-[8px]">
        <Checkbox className="w-[12px] border-[rgba(157,130,253,1)] aspect-square" />
        <span className="text-[clamp(10px,4vw,14px)] text-[rgba(45,30,99,1)] font-[600]">{label}</span>
      </div>
    </div>
  );
}
