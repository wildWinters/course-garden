import { PlusIcon } from "lucide-react";

export interface IIconPlus {
  description?: string;
}

export function IconPlus({ description = "Drag and drop next card here" }: IIconPlus) {
  return (
    <>
      <span className="text-[rgba(160,160,181,1)] text-[clamp(12px,4vw,20px)] mt-[6px]">{description}</span>
      <div className="flex items-center justify-center w-[45px] aspect-square rounded-full border-2 border-dashed text-[rgba(160,160,181,1)]">
        <PlusIcon size={24} />
      </div>
    </>
  );
}
