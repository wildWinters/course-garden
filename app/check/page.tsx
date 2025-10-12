"use client";
import { TableModeMyCourses } from "@/modules/my-courses-admin-page/my-courses-section/components/table-mode-my-courses";
import { HeaderUserRightPanel } from "@/shared/widgets/header/components/header-user-right-panel";

export default function CheckPage() {
  return (
    <>
      <HeaderUserRightPanel />
      <TableModeMyCourses />
    </>
  );
}
