import { cn } from "@/shared/lib/utils";
import HEADER_LINKS from "@/shared/constants/header-links";
import { Last_LIST_ELEMENT_BUTTON } from "@/shared/widgets/header/const/tw-list-button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/shad-cn/ui/dialog";
import { ReactNode } from "react";

export function HeaderLinks({ links = HEADER_LINKS }: { links: string[] }) {
  return (
    <ul className="flex space-x-[40px] items-center">
      {links.map((link, index) => (
        <Dialog key={link}>
          <DialogTrigger asChild>
            <li
              className={cn(
                "text-[14px] font-medium cursor-pointer hover:opacity-80 transition-opacity list-none",
                index === links.length - 1 && Last_LIST_ELEMENT_BUTTON
              )}
            >
              {link}
            </li>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{link}</h2>
            <div className="text-gray-600">
              <p>This is a dialog for {link}</p>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </ul>
  );
}

import { LabelInput } from "@/shared/ui/label-input";
const Labels = ["Email", "Password"];
export function SignInContentOfDialog({
  labels = Labels,
}: {
  labels: string[];
}) {
  return (
    <section className="flex bg-white rounded-[8px] flex flex-col">
      <div className="flex flex-col p-[10px] rounded-[14px]">
        <span className="font-[500] text-[30px] text-[rgba(45,30,99,1)]">
          Hello👋
        </span>
        <span className="text-[16px]">Sign in to access your account</span>
        {labels.map((label, index) => (
          <LabelInput
            key={index}
            id={label.toLowerCase()}
            label={label}
            value=""
            placeholder={label}
          />
        ))}
      </div>
    </section>
  );
}

import { Checkbox } from "@/shared/shad-cn/ui/checkbox";
import { Link } from "lucide-react";
export function AgreeWithTermsOfUseAndPrivacyPolicy() {
  return (
    <div className="flex items-center space-between">
      <div className="flex gap-[20px]">
        <Checkbox />
        <span className="text-[rgba(45,30,99,1)]">Keep me signed in</span>
      </div>
      <Link href="#" className="text-[rgba(114,77,247,1)] text-[14px]">
        Forgot Password?
      </Link>
      <ButtonsBLock/>
    </div>
  );
}

import { Button } from "@/shared/shad-cn/ui/button";
import Image from "next/image";

export function ButtonsBLock() {
  return (
    <div className="flex gap-[20px]">
      <Button variant={"purple"}>Sign In</Button>
      <Button
        className=" relative inline-flex items-center justify-center  rounded-lg p-[2px]  bg-gradient-to-br from-[#C2CCE3] via-[#9D82FD] to-[#5E4E97]"
      >
        <Image
          className=""
          src="/google.png"
          alt="google"
          width={20}
          height={20}
        />
        Sign in with Goggle
      </Button>
    </div>
  );
}
