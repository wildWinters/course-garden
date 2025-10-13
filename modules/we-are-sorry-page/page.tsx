"use client";
import Image from "next/image";
import { Button } from "@/shared/shad-cn/ui/button";

export function WeAreSorryPage() {
  return (
    <main className="flex flex-col  gap-[20px] items-center justify-center text-[rgba(45,30,99,1)] px-4">
      <div className="text-center flex justify-center flex-col items-center">
        <h1 className="text-[clamp(24px,4vw,48px)] font-[700]">
          We Are Sorry!
        </h1>

        <div className="mt-4 mb-8">
          <Image
            src="/img/remake-tree.jpg"
            width={139}
            height={139}
            alt="tree-icon"
            className="mx-auto"
          />
        </div>

        <span className="mt-[20px] font-[600] text-[rgba(45,30,99,1)]">
          The page you’re looking for is under construction, we’re working on
          it.
        </span>

        <Button
          variant={"purple"}
          className="w-[13vw] min-w-[120px] text-white mt-[40px]"
        >
          Go to Home
        </Button>
      </div>
    </main>
  );
}
