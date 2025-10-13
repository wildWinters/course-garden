import Link from "next/link";
// import { Links } from "../constant/con-links";
import { Links } from "../mock/mock-links";
import { cn } from "@/shared/lib/utils";

export interface HeadingLinksProps {
  mock: typeof Links;
}

export function HeadingLinks({ mock }: HeadingLinksProps) {
  return (
    <div className="flex gap-4">
      {mock.map((link, index) => (
        <Link key={index} href={link.href}>
          {link.name} <span className={cn(index === 2 && "hidden")}>/</span>
        </Link>
      ))}
    </div>
  );
}
