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
        <AccordionTrigger>{accordionTriggerText}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 w-[40vw] p-4">
          {children}
          <Button variant={"purpleBorder"}>{buttoDescitpion}</Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
