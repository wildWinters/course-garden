import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { useModalStore } from "@/shared/store/use-modal-store";

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
  const closeCustomModalOfEmailSentContent = useModalStore(
    (state) => state.closeCustomModalOfEmailSentContent,
  );

  const openCustomModalOfForgotPassword = useModalStore(
    (state) => state.openCustomModalOfForgotPassword,
  );

  return (
    <section
      className={cn("flex items-center gap-[8px] text-sm ", sectionClassName)}
    >
      <span className="font-[500]">{message}</span>

      <Link
        onClick={(e) => {
          e.preventDefault();
          openCustomModalOfForgotPassword();
          closeCustomModalOfEmailSentContent();
        }}
        href={href}
        className="text-blue-600 font-medium hover:underline font-[500] underline"
      >
        {link}
      </Link>
    </section>
  );
}
