import { DialogWrapper, SignInContentOfDialog } from "@/bugs/bugs";
import { Button } from "@/shared/shad-cn/ui/button";
import { Labels } from "@/shared/constants/labels";
import { LabelInput } from "@/shared/ui/label-input";
import Image from "next/image";

export default function CheckPage() {
  return (
    <>
      <DialogWrapper Trigger={<Button variant="purple">sign in</Button>}>
        <div className="flex w-full">
          <SignInContentOfDialog labels={Labels} />
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/robo-handlers.png"
              alt="robo-handlers"
              width={400}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </DialogWrapper>
    </>
  );
}
