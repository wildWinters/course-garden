import Image from "next/image";

export function PictureSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-[0x]">
      <Image className="relative top-[30px] hidden lg:block"
       src="/gpts.png" alt="letter-a" width={586} height={325} />
    </section>
  );
}
