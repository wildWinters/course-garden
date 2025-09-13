import { ReactNode } from "react";

export function HeaderWrapper({ children }: { children: ReactNode }) {
  return (
    <header className="flex items-center justify-between bg-white mt-[24px] px-[10vw] mb-[13px]">
      {children}
    </header>
  );
}
