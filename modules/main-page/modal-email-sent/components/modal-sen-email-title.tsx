import { Mail } from "lucide-react";
import { ReactNode } from "react";

export interface IModalSendEmailTitle {
  email: string;
  children?: ReactNode;
}

export function ModalSendEmailTitle({ email, children }: IModalSendEmailTitle) {
  return (
    <section className="flex items-start gap-[20px]">
      <div className="flex items-center justify-center min-w-[40px] h-[40px] rounded-[5px] bg-green-100">
        <Mail className="w-[20px]  h-[20px] text-green-600" />
      </div>

      <div className="flex flex-col gap-[15px] font-[400] text-gray-600">
        <h2 className="text-lg font-semibold">Email Sent</h2>
        <span className="text-sm leading-relaxed">
          We have sent you an email at <strong>{email}</strong>. Check your
          inbox and follow the instructions to reset your account password.
        </span>

        <div className="flex flex-col gap-[20px]">{children}</div>

      </div>
    </section>
  );
}
