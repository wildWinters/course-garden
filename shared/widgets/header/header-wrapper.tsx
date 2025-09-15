import { ReactNode } from "react";
import { MobileHeader } from "./components/links";

export function HeaderWrapper({ children }: { children: ReactNode }) {
  return (
    <header className="hidden lg:flex items-center justify-between bg-white mt-[24px] px-[10vw] mb-[13px]">
      {children}
    </header>
  );
}
