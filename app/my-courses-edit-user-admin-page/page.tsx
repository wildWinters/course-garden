import { ControlButtonSectionWrapper } from "@/modules/my-courses-admin-page/controls-button-section/contols-button-section-wrapper";
import { AppSidebar } from "@/shared/widgets/aside-panel/aside-panel-wrapper";
import { ListElement } from "@/shared/widgets/aside-panel/components/list-element";
import { sidebarMenu } from "@/shared/widgets/aside-panel/mock/mock-panel";
import { TableModeButtonsSections } from "@/modules/my-courses-admin-page/controls-button-section/components/table-mode-buttons-section";
import { EditCourseHeading } from "@/modules/edit-course-admin-page/headings-component/components/heading-edit-course";
import { HeadingLinks } from "@/modules/edit-course-admin-page/headings-component/components/heading-links";
import { Links } from "@/modules/edit-course-admin-page/headings-component/mock/mock-links";
import { EditCourseCardWrapper } from "@/modules/edit-course-admin-page/edit-course-card-component/edit-course-card-wrapper";

export default function Page() {
  return (
    <section className="flex gap-[20px] mx-[10vw]">
      <AppSidebar progress={1} generalCount={3}>
        {sidebarMenu.map((item) => (
          <ListElement
            key={item.id}
            title={item.label}
            iconName={item.iconName}
            path={item.path}
          />
        ))}
      </AppSidebar>

      <div className="flex-1">
        <div className="flex justify-between h-[40px] mb-[10px]">
          <ControlButtonSectionWrapper isLeftHeadingExists={false}>
            <HeadingLinks mock={Links} />
          </ControlButtonSectionWrapper>
        </div>

        <EditCourseHeading>
          <TableModeButtonsSections />
        </EditCourseHeading>
        <EditCourseCardWrapper />
      </div>
    </section>
  );
}
