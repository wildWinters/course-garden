"use client";
import { BellDot, Search, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LabelInput } from "@/modules/main-page/modal-form-sign-in-or-up-component/components/label-input";
import { cn } from "@/shared/lib/utils";

export function HeaderUserRightPanel({ className }: { className?: string }) {
  const pathname = usePathname();
  const isRenderComponent =
    pathname.includes("admin") || pathname.includes("user");

  return (
    <div
      className={cn(
        "flex items-center gap-4",
        className,
        !isRenderComponent && "hidden",
      )}
    >
      <LabelInput
        InputClassName="w-[20vw] pl-9 pr-3 py-2 placeholder:text-gray-400"
        isLabelEsists={false}
        placeholder="Search..."
      >
        <Search
          size={15}
          className="text-gray-600 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        />
      </LabelInput>

      <Settings className="w-6 h-6 text-[rgba(45,30,99,1)] cursor-pointer hover:opacity-75 transition" />
      <BellDot className="w-6 h-6 text-[rgba(45,30,99,1)] cursor-pointer hover:opacity-75 transition" />

      <Image
        src="/avatar.png"
        width={40}
        height={40}
        alt="avatar"
        className="rounded-full border border-gray-200"
      />

      <span className="text-[rgba(45,30,99,1)] text-[16px] font-medium select-none">
        John Doe
      </span>
    </div>
  );
}
