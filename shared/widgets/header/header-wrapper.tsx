import { ReactNode } from "react";

export function DesktopHeader({ children }: { children: ReactNode }) {
  return (
    <header id="header" className="hidden lg:flex items-center justify-between bg-white mt-[24px] px-[10vw] mb-[13px]">
      {children}
    </header>
  );
}
