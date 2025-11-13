import {
  type LeftSideCard,
  mockLeftSideCards,
} from "../mock/mock-left-side-cards";
import { CardWrapper } from "./card-wrapper";
import { IconDescription } from "./icon-description";

export interface IColumnCard<MockDataColumn> {
  mockDataColumn: MockDataColumn[];
}

export function ColumnCardWrapper({
  mockDataColumn,
}: IColumnCard<LeftSideCard>) {
  return (
    <>
      <section className="flex flex-col gap-[6px]">
        {mockDataColumn.map((cardItem, index) => (
          <CardWrapper
            key={index}
            sideIcon={
              <img
                src="/img"
                alt="side-icon"
                className="w-[24px] aspect-square"
              />
            }
          >
            <IconDescription
              icon={<cardItem.Icon />}
              description={cardItem.description}
            />
          </CardWrapper>
        ))}
      </section>
    </>
  );
}
