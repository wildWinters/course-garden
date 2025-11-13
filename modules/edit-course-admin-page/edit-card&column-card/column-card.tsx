import { SquareCard } from "./edit-card-wrapper"
import { mockColumnCard } from "./mock/mock-column-card";
import { IMockBlocks } from "./mock/mock-column-card";

export interface IColumnCard {
 mockCards: IMockBlocks[];
}

export function ColumnCard({mockCards}: IColumnCard) {
  return (
    <aside className="flex flex-col gap-[16px] justify-center">
      {mockCards.map((card, index) => (
        <SquareCard key={index} description={card.title} icon={card.icon} isGriVerticalExists={true} />
      ))}
    </aside>
  )
}