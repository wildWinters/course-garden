import { EditCourseAccordionWrapper } from "@/modules/edit-course-admin-page/edit-course-accordion-component/edit-course-accordion-wrapper";
import { LabelBlock } from "@/modules/edit-course-admin-page/edit-course-accordion-component/components/label-block";
import { OpenHeadingAccordion } from "@/modules/edit-course-admin-page/edit-course-accordion-component/components/description-accordion"
import { mockTextEditorIcons } from "@/modules/edit-course-admin-page/edit-course-accordion-component/mock/mock-text-editor-icons";

export default function CheckPage() {
  return (
    <section className="relative w-[42vw] rounded-[8px] bg-[rgba(247,249,251,1)] p-4">
     <span className="text-[clamp(12px,4vw,20px)] font-[500] text-[rgba(rgba(45,30,99,1))]">Cards</span>
      <EditCourseAccordionWrapper
        buttoDescitpion="Save Card"
        value="description"
        accordionTriggerText="Text card_1"
      >
        <OpenHeadingAccordion description="Text-Card_1" />
        <LabelBlock
          label="Text_Card_1"
          labelOFLabelInput="Title"
          placeholder="Write title"
        />
      </EditCourseAccordionWrapper>
   </section>
  );
}
