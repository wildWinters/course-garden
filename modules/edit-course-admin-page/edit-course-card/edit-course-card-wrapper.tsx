import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/shad-cn/ui/tabs";
import { LabelInput } from "@/modules/main-page/modal-form-sign-in-or-up/components/label-input";
import { Textarea } from "@/shared/shad-cn/ui/textarea";
import { Button } from "@/shared/shad-cn/ui/button";
import { stats } from "./mock/mock-stats";

export function EditCourseCardWrapper() {
  return (
    <>
      <section className="grid grid-cols-3 gap-x-6 w-full h-[393px] rounded-[8px] bg-[rgba(247,249,251,1)] p-[16px]">
        <Image
          src="/img/card.jpg"
          width={180}
          height={180}
          alt="card-image-course"
        />
        <div className="flex flex-col gap-[16px]">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Public</TabsTrigger>
              <TabsTrigger value="password">Private</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Public</TabsContent>
            <TabsContent value="password">Private</TabsContent>
          </Tabs>
          <LabelInput
            label="Title"
            placeholder="English grammar in A1 course"
          />
          <LabelInput
            label="Type"
            placeholder="Languages then need to correct"
          />
          <label>Description</label>
          <Textarea placeholder="This English Grammar A1 course is designed for absolute beginners who want to build a solid foundation in the English language" />
          <Button variant={"purpleBorder"} className="w-[13vw] min-w-[100px]">
            Save
          </Button>
        </div>
        <Statistics mockMap={stats} />
      </section>
    </>
  );
}

interface Stats {
  mockMap: typeof stats;
}

export function Statistics({ mockMap }: Stats) {
  return (
    <div className="border-l border-l-2 flex flex-col gap-[16px] pl-[12px]">
      <span className="text-[rgba(45,30,99,1)] font-semibold">Statistics</span>

      {mockMap.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <span>{item.label}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/shad-cn/ui/accordion"; 

export function SaveCourseSection() {
  return (
    <section className="w-full grid grid-cols-3 gap-x-[16px] bg-[rgba(247,249,251,1)]  text-[rgba(45,30,99,1)]">
      <div className="flex flex-col p-4">
        <span className="text-5 ">Cards</span>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>video</AccordionTrigger>
            <AccordionContent>
              here must be some ui of video please fill this part if later  or now if you have a plan to fill this 
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Image</AccordionTrigger>
            <AccordionContent>
              here must be some ui of video please fill this part if later  or now if you have a plan to fill this 
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Text</AccordionTrigger>
            <AccordionContent>
              here must be some ui of video please fill this part if later  or now if you have a plan to fill this 
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Quiz</AccordionTrigger>
            <AccordionContent>
              here must be some ui of video please fill this part if later  or now if you have a plan to fill this  
            </AccordionContent>
          </AccordionItem>
        </Accordion>


      </div>
    </section>
  );
}


export function AccordionContentWrapper() {

  return  ( 
    <>
      <section className="flex flex-col rounded-[8px] border-[rgba(157,130,253,1)] "> 
        <div className="flex justify-between"> 
          {/* <Image src={} width={} height={} alt="" /> */}

        </div>
      </section>
    </>
  )
}
