import { IBaseProps } from "@/shared/types/base-props";
import { ReactNode } from "react";

interface IHeadings extends IBaseProps {
  LettesImages?: ReactNode;
}

export function Headings({ children, LettesImages }: IHeadings) {
  return (
    <main className="flex items-center justify-between bg-black w-full min-h-[100vh] pl-[10vw] pr-[15vw]">
      <section className="flex flex-col gap-5">
        <h1 className="flex flex-col gap-1 text-[clamp(24px,4vw,54px)] font-bold leading-tight text-white">
          AI-ASSISTANT THAT CAN CREATE
          <span className="text-inherit">A COMPLETE MINI-COURSE</span>
        </h1>

        <p className="text-[clamp(12px,4vw,20px)] text-white leading-relaxed max-w-[800px]">
          Use our AI-powered tool to create accurate and complete mini-courses
          in minutes. Add your own unique revisions including questions, images,
          videos, and customized completions for your specific needs. You can
          use these courses on our app or website seamlessly.
        </p>

        {children}
      </section>

      <div className="flex-shrink-0">{LettesImages}</div>
    </main>
  );
}
