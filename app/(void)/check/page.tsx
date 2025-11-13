import { OpenHeadingAccordion } from "@/modules/edit-course-admin-page/edit-course-accordion-component/components/description-accordion";
import { LabelBlock } from "@/modules/edit-course-admin-page/edit-course-accordion-component/components/label-block";
import { EditCourseAccordionWrapper } from "@/modules/edit-course-admin-page/edit-course-accordion-component/edit-course-accordion-wrapper";
import { SaveCourseWrapper } from "@/modules/edit-course-admin-page/save-course-component/save-course-wrapper";
import { IconPlus } from "@/modules/edit-course-admin-page/save-course-component/components/icon-plus";
import { SquareCard } from "@/modules/edit-course-admin-page/edit-card&column-card/edit-card-wrapper";
import { Play } from "lucide-react";
import { ColumnCard } from "@/modules/edit-course-admin-page/edit-card&column-card/column-card";
import { mockColumnCard } from "@/modules/edit-course-admin-page/edit-card&column-card/mock/mock-column-card";

export default function CheckPage() {
  return (
    // <section className="relative w-[42vw] rounded-[8px] bg-[rgba(247,249,251,1)] p-4">
    //   <span className="text-[clamp(12px,4vw,20px)] font-[500] text-[rgba(rgba(45,30,99,1))]">
    //     Cards
    //   </span>
    //   <EditCourseAccordionWrapper
    //     buttoDescitpion="Save Card"
    //     value="description"
    //     accordionTriggerText="Text card_1"
    //   >
    //     <OpenHeadingAccordion description="Text-Card_1" />
    //     <LabelBlock
    //       label="Text_Card_1"
    //       labelOFLabelInput="Title"
    //       placeholder="Write title"
    //     />
    //   </EditCourseAccordionWrapper>
    // </section>
    <>
    <SaveCourseWrapper>
      <IconPlus/>
    </SaveCourseWrapper>
    <SquareCard
      description="Video"
      icon={<Play size={40} className="aspect-square w-[40px] h-[40px] text-[rgba(45,30,99,1)]"/>}
      isGriVerticalExists={true}
    />
    <ColumnCard mockCards={mockColumnCard}/>
    </>
  );
}
