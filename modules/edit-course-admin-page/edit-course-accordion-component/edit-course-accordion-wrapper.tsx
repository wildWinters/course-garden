import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/shad-cn/ui/accordion";
import { Button } from "@/shared/shad-cn/ui/button";

export interface IEditCourseAccordionWrapper {
  children: ReactNode;
  accordionTriggerText: string;
  value: string;
  buttoDescitpion: string;
}

export function EditCourseAccordionWrapper({
  children,
  accordionTriggerText,
  value,
  buttoDescitpion,
}: IEditCourseAccordionWrapper) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={value}>
        <AccordionTrigger className="text-[rgba(9,9,11,1)] border-b-2 border-b-[1px] border-b-[rgba(186,186,186,1)] rounded-[0px]">{accordionTriggerText}</AccordionTrigger>
        <AccordionContent className="relative  rounded-[8px] border-[2px] border-[rgba(157,130,253,1)]  flex flex-col gap-4 w-[40vw] p-4 bg-[rgba(255,255,255,1)]">
          {children}
          <Button className="ml-auto"  variant={"purpleBorder"}>{buttoDescitpion}</Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
