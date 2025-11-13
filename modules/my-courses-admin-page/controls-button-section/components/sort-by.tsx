import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import type { IBaseProps } from "@/shared/types/base-props";

export function SortBy({ className }: IBaseProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-[20px] rounded-[8px]  text-[rgba(45,30,99,1)] font-[600] h-[32px] px-[10px]",
        className,
      )}
    >
      <span className="">Sort by</span>
      <Image
        src="/img/sort.svg"
        className="font-[600]"
        alt="sort"
        width={16}
        height={10}
      />
    </div>
  );
}
