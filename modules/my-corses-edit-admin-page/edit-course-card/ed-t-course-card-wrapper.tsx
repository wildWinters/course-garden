import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/shad-cn/ui/tabs";
import { LabelInput } from "@/modules/main-page/modal-form-sign-in-or-up/components/label-input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/shad-cn/ui/accordion";
import { Textarea } from "@/shared/shad-cn/ui/textarea";
import { Button } from "@/shared/shad-cn/ui/button";
import { LabelInput } from "@/modules/main-page/modal-form-sign-in-or-up/components/label-input";

export function EditCourseCardWrapper() {
  return (
    <>
      <section className="grid grid-cols-3 gap-x-[24px] bg-[rgba(247,249,251,1)] p-4 rounded-[8px]">
        <Image
          src="/img/Card.jpg"
          alt="Sign"
          width={180}
          height={180}
          className="rounded-[8px]"
        />
        <div className="flex flex-col gap-4">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="public">Public</TabsTrigger>
              <TabsTrigger value="private">Private</TabsTrigger>
            </TabsList>
            <TabsContent value="public">Public</TabsContent>
            <TabsContent value="private">Private</TabsContent>
          </Tabs>
          <LabelInput
            id="title"
            label="title"
            placeholder="EnglishGrammarCourse"
          />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <label>Descritpion</label>
        <Textarea className="border-2 border-[rgba(186,186,186,1)] rounded-[]">
          This English Grammar A1 course is designed for absolute beginners who
          want to build a solid foundation in the English language
        </Textarea>
        <Button variant={"purple"}>Save</Button>
      </section>
    </>
  );
}
