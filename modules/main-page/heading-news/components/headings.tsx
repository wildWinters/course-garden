"use client"
import { IBaseProps } from "@/shared/types/base-props";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface IHeadings extends IBaseProps {
  LettesImages?: ReactNode;
}

export function Headings({ children, LettesImages }: IHeadings) {
  const { t } = useTranslation();
  return (
    <main className="flex items-center justify-between  w-full min-h-[100vh] pl-[5vw] pr-[2vw]">
      <section className="flex flex-col gap-5">
        <h1 className="flex flex-col gap-1 sm:text-6 md:text-[30px] lg:text-[36px] xl:text-[46px]  font-bold leading-tight text-white">
          {t("app.metaDescription")}
        </h1>

        <p className="text-[clamp(12px,4vw,20px)] text-white leading-relaxed max-w-[800px]">
          {t("app.features.miniCourse")}
        </p>

        {children}
      </section>

      <div className="flex-shrink-0">{LettesImages}</div>
    </main>
  );
}
