import type { ReactNode } from "react";
import { Textarea } from "@/shared/shad-cn/ui/textarea";
import type { mockTextEditorIcons } from "../mock/mock-text-editor-icons";

export interface IContentAccordion {
  description: string;
  placeholder: string;
  mockTextEditorIcons: typeof mockTextEditorIcons;
}

export function ContentAccordion({
  placeholder,
  mockTextEditorIcons,
}: IContentAccordion) {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="flex gap-[2px]">
        {mockTextEditorIcons.map((icon, index) => (
          <div key={index}>{icon.icon}</div>
        ))}
      </div>
      <div className="border-[rgba(186,186,186,1)] border-[8px] rounded-[20px]">
        <Textarea className="px-[8px] pt-[10px]" placeholder={placeholder} />
      </div>
    </div>
  );
}

export type IIconWrapperDiv = {};

export function IconWrapperDiv({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex items-center justify-center w-[24px] h-[24px] border-[1px] border-[rgba(186,186,186,1)] p-[5px] rounded-[4px]">
      {icon}
    </div>
  );
}
