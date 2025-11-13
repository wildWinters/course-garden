"use client";
import { SortBy } from "@/modules/my-courses-admin-page/controls-button-section/components/sort-by";
import { TableModeButtonsSections } from "@/modules/my-courses-admin-page/controls-button-section/components/table-mode-buttons-section";
import { Toggle } from "@/modules/my-courses-admin-page/controls-button-section/components/toggle";
import { ControlButtonSectionWrapper } from "@/modules/my-courses-admin-page/controls-button-section/contols-button-section-wrapper";
import { useVisualModeStore } from "@/modules/my-courses-admin-page/controls-button-section/store/use-visual-mode-store";
import { MyCoursesCardMode } from "@/modules/my-courses-admin-page/my-courses-section/components/card-mode-my-courses";
import { TableModeMyCourses } from "@/modules/my-courses-admin-page/my-courses-section/components/table-mode-my-courses";
import { MyCoursesSectionWrapper } from "@/modules/my-courses-admin-page/my-courses-section/my-courses-section-wrapper";
import { PaginationWrapper } from "@/modules/my-courses-admin-page/pagination-section/pagination-wrapper";
import { cn } from "@/shared/lib/utils";
import { AppSidebar } from "@/shared/widgets/aside-panel/aside-panel-wrapper";
import { ListElement } from "@/shared/widgets/aside-panel/components/list-element";
import { sidebarMenu } from "@/shared/widgets/aside-panel/mock/mock-panel";

export default function AdminPageMyCourses() {
  const visualModeCard = useVisualModeStore((state) => state.visualModeCard);

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
          <SortBy className={cn(visualModeCard === "table" && "hidden")} />
          <TableModeButtonsSections
            className={cn(visualModeCard === "card" && "hidden")}
          />
        </ControlButtonSectionWrapper>
        <MyCoursesSectionWrapper
          className={`${visualModeCard !== "card" && "hidden"}`}
        >
          <MyCoursesCardMode />
        </MyCoursesSectionWrapper>
        <TableModeMyCourses
          className={`${visualModeCard !== "table" && "hidden"}`}
        />
        <PaginationWrapper />
      </div>
    </section>
  );
}
