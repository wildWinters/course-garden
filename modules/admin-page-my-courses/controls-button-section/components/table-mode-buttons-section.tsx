import { Share2 } from "lucide-react";
import { Pause } from "lucide-react";
import { Trash } from "lucide-react";

export function TableModeButtonsSections() {
  return (
      <div className="flex items-center justify-center gap-[10px]">
        <Share2 className="text-white flex items-center justify-center text-[12px] p-[6px] w-[36px] h-[36px] bg-[rgba(241,120,182,1)] rounded-[8px]" />
        <Pause className="text-white flex items-center justify-center text-[12px] p-[6px] w-[36px] h-[36px] bg-[rgba(241,120,182,1)] rounded-[8px]" />
        <Trash className="text-white flex items-center justify-center text-[12px] p-[6px] w-[36px] h-[36px] bg-[rgba(241,120,182,1)] rounded-[8px]" />
      </div>
  );
}


