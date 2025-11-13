import type { ReactNode } from "react";
import { Button } from "@/shared/shad-cn/ui/button";

export interface ISaveCourseWrapper {
  children: ReactNode;
}

export function SaveCourseWrapper({ children }: ISaveCourseWrapper) {
  return (
    <section className="flex flex-col items-center justify-center">
      {children}
      <Button className="w-[12vw] mt-[16px]" variant={"purpleBorder"}>
        Save Course
      </Button>
    </section>
  );
}
