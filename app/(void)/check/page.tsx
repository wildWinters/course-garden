import { OpenHeadingAccordion } from "@/modules/edit-course-admin-page/edit-course-accordion-component/components/description-accordion";
import { LabelBlock } from "@/modules/edit-course-admin-page/edit-course-accordion-component/components/label-block";
import { EditCourseAccordionWrapper } from "@/modules/edit-course-admin-page/edit-course-accordion-component/edit-course-accordion-wrapper";
import { SaveCourseWrapper } from "@/modules/edit-course-admin-page/save-course-component/save-course-wrapper";
import { IconPlus } from "@/modules/edit-course-admin-page/save-course-component/components/icon-plus";
import { ColumnCard } from "@/modules/edit-course-admin-page/edit-card&column-card/column-card";
import { mockColumnCard } from "@/modules/edit-course-admin-page/edit-card&column-card/mock/mock-column-card";
import { mockColumnCard2 } from "@/modules/edit-course-admin-page/edit-card&column-card/mock/mock-column-card";

export default function CheckPage() {
  return (
    <div className="flex justify-between items-start">
      <ColumnCard mockCards={mockColumnCard} />

      <section className="flex flex-col gap-[32px]">

      <section className="relative w-[42vw] rounded-[8px] bg-[rgba(247,249,251,1)] p-4">
        <div className="flex flex-col">
          <span className="text-[clamp(12px,4vw,20px)] font-[500] text-[rgba(45,30,99,1)]">
            Cards
          </span>
          <EditCourseAccordionWrapper
            buttoDescitpion="Save Card"
            value="description"
            accordionTriggerText="Text"
          >
            <OpenHeadingAccordion description="Text-Card_1" />
            <LabelBlock
              label="Save as Draft"
              labelOFLabelInput="Title"
              placeholder="Write title"
            />
          </EditCourseAccordionWrapper>

        </div>
      </section>
      <SaveCourseWrapper>
        <IconPlus />
      </SaveCourseWrapper>

      </section>

      <ColumnCard mockCards={mockColumnCard2} />
    </div>
  );
}
