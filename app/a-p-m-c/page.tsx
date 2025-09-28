import { ControlButtonSectionWrapper } from "@/modules/admin-page-my-courses/controls-button-section/contols-button-section-wrapper";
import { Toggle } from "@/modules/admin-page-my-courses/controls-button-section/components/toggle";
import { SortBy } from "@/modules/admin-page-my-courses/controls-button-section/components/sort-by";
import { MyCoursesSectionWrapper } from "@/modules/admin-page-my-courses/my-courses-section/my-courses-section-wrapper";
import { MyCoursesCardMode } from "@/modules/admin-page-my-courses/my-courses-section/components/card-mode-my-courses";
import { AppSidebar } from "@/shared/widgets/aside-panel/aside-panel-wrapper";
import { ListElement } from "@/shared/widgets/aside-panel/components/list-element";
import { sidebarMenu } from "@/shared/widgets/aside-panel/mock/mock-panel";
import { PaginationWrapper } from "@/modules/admin-page-my-courses/pagination/pagination-wrapper";

export default function AdminPageMyCourses() {
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

      <div className="flex flex-col flex-1 gap-[20px]">
        <ControlButtonSectionWrapper>
          <Toggle />
          <SortBy />
        </ControlButtonSectionWrapper>
        <MyCoursesSectionWrapper>
          <MyCoursesCardMode />
        </MyCoursesSectionWrapper>
        <PaginationWrapper />
      </div>
    </section>
  );
}

