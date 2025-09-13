import Image from "next/image";

export function PictureSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-[0x]">
      <Image
        className="relative top-[230px] right-[100px]"
        src="/i.svg"
        alt="letter-i"
        width={385}
        height={280}
      />
      <Image
        className="relative top-[-60px] right-[260px]"
        src="/a.svg"
        alt="letter-a"
        width={586}
        height={325}
      />
    </section>
  );
}
