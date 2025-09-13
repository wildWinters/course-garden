import { IBaseProps } from "../types/base-props";
import { cn } from "../lib/utils";

export function Background({ children, className }: IBaseProps) {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #C2CCE3, #9D82FD, #5E4E97)",
      }}
      className={cn("min-h-[calc(100vh-118px)] flex h-full items-center justify-between w-full text-white", className)}
    >
      {children}
    </section>
  );
}
