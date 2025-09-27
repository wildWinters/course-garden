import { IBaseProps } from "../types/base-props";
import { cn } from "../lib/utils";

export function Background({ children, className }: IBaseProps) {
  return (
    <section
      style={{
        background:
          "linear-gradient(246.14deg, #C2CCE3 19.44%, #9D82FD 49.71%, #5E4E97 75.58%)",
      }}
      className={cn(
        "min-h-[calc(100vh-118px)] flex h-full items-center justify-between w-full text-white",
        className,
      )}
    >
      {children}
    </section>
  );
}
