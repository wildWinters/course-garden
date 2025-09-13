import { Background } from "@/shared/ui/background";
import { Button } from "@/shared/shad-cn/ui/button";
import { Headings } from "./components/headings";
import { PictureSection } from "./components/picture-section";

export function HeadingsWrapper() {
  return (
    <Background>
      <Headings LettesImages={<PictureSection />}>
        <Button
          style={{ maxWidth: "220px" }}
          className="mt-[40px]"
          variant="purple"
        >
          Create online course
        </Button>
      </Headings>
    </Background>
  );
}
