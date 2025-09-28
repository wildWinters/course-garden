import { Button } from "@/shared/shad-cn/ui/button";
import { Card, CardContent, CardFooter } from "@/shared/shad-cn/ui/card";
import { mockCourses } from "../mock/mock-courses";
import { CardInfo } from "./card-mode-info";
import { ButtonsSection } from "./cards-mode-buttons-section";

export function MyCoursesCardMode() {
  return (
    <>
      {mockCourses.map((card) => (
        <Card key={card.id} className="border-none">
          <CardContent className="flex min-h-[180px] items-center gap-[16px]  p-4 bg-[rgba(247,249,251,1)]">
            <img
              src="/img/Picture.jpg"
              alt="image-of-course"
              className="object-cover rounded-[10px] w-[180px] h-[180px]"
            />
            <CardInfo
              isActive={true}
              titleCourse="English grammar A1"
              descriptionCours="This English Grammar A1 course is designed for absolute beginners who want to build a solid foundation in the English language"
            >
              <ButtonsSection cardsCount={5} />
            </CardInfo>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
