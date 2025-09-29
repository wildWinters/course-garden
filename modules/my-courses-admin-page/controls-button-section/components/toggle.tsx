"use client";

import { List, Image } from "lucide-react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";

export function Toggle() {
  const [isToggled, setIsToggled] = useState<"left" | "right" | null>(null);

  const handleLeftClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    setIsToggled(isToggled === "left" ? null : "left");
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsToggled(isToggled === "right" ? null : "right");
  };

  return (
    <div
      onClick={() => setIsToggled(null)}
      className="flex items-center justify-center gap-[10px] rounded-[8px] bg-[rgba(227,240,253,1)] w-[66px] h-[32px]"
    >
      <Image
        onClick={handleLeftClick}
        className={cn(
          "text-black p-[2px] rounded-[5px]",
          isToggled === "left" && "bg-white text-[rgba(45,30,99,1)]",
        )}
      />

      <List
        onClick={handleRightClick}
        className={cn(
          "text-black rotate-180 p-[2px] rounded-[5px]",
          isToggled === "right" && "bg-white text-[rgba(45,30,99,1)]",
        )}
      />
    </div>
  );
}
