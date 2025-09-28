import { Play } from "lucide-react";
import { Trash } from "lucide-react";
import { Share2 } from "lucide-react";
import { Button } from "@/shared/shad-cn/ui/button";

export interface IButtonsSection {
  cardsCount: number;
}

export function ButtonsSection({ cardsCount }: IButtonsSection) {
  return (
    <>
      <div className="flex justify-between items-center w-full ">
        <div className="flex items-center gap-[10px]">
          <Play className="flex items-center justify-center text-[12px] p-[6px] w-[36px] h-[36px] border-2 border-[rgba(45,30,99,1)] rounded-[8px]" />
          <Trash className="flex items-center justify-center text-[12px] p-[6px] w-[36px] h-[36px] border-2 border-[rgba(45,30,99,1)] rounded-[8px]" />
          <Share2 className="flex items-center justify-center text-[12px] p-[6px] w-[36px] h-[36px] text-white bg-[rgba(241,120,182,1)] rounded-[8px]" />
        </div>

        <Button className="border-[rgba(157,130,253,1)] border-[1px] bg-transparent text-[rgba(157,130,253,1)] rounded-[8px]">
          Cards: {cardsCount}
        </Button>
      </div>
    </>
  );
}
