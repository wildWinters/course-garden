import { ReactNode } from "react";

export interface ISaveCourseWrapper {
  children: ReactNode;
}

export  function SaveCourseWrapper({ children }: ISaveCourseWrapper) 
{
  return (
    <section className="flex flex-col items-center jusitfy-center w-[13vw]">
      {children}
    </section>
  )
}