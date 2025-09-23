import { cn } from "@/shared/lib/utils";
import Link from "next/link";

export interface IMessageWithLink {
  message: string;
  link: string;
  href?: string; 
  sectionClassName?: string;
}

export function MessageWithLink({
  message,
  link,
  href = "#",
  sectionClassName,
}: IMessageWithLink) {
  return (
    <section
      className={cn("flex items-center gap-[8px] text-sm ", sectionClassName)}
    >

      <span className="font-[500]">{message}</span>

      <Link href={href} className="text-blue-600 font-medium hover:underline font-[500] underline">
        {link}
      </Link>

    </section>
  );
}
