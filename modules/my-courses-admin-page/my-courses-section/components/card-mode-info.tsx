import { ReactNode } from "react";
export interface ICardInfoProps {
  isActive: boolean;
  titleCourse: string;
  descriptionCours: string;
  children: ReactNode;
}

export function CardInfo({
  isActive,
  titleCourse,
  descriptionCours,
  children,
}: ICardInfoProps) {
  return (
    <>
      <div className="flex flex-col gap-[10px] text-[rgba(45,30,99,1)]">
        <div className="flex items-center justify-between">
          <span className="text-[20px] text-ellipsis font-[500]">
            {titleCourse}
          </span>
          <span className="text-[rgba(157,130,253,1)] text-[16px]">
            {isActive ? "Active" : "Unactive"}
          </span>
        </div>
        <span className="text-[16px] text-[16px] text-ellipsis">
          {descriptionCours}
        </span>
        {children}
      </div>
    </>
  );
}
