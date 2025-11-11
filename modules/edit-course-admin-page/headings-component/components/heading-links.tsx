"use client";
import Link from "next/link";
// import { Links } from "../constant/con-links";
import { Links } from "../mock/mock-links";
import { cn } from "@/shared/lib/utils";
import { usePathname } from "next/navigation";
import { MapUI } from "@/shared/utils/map-ui";

export interface HeadingLinksProps {
  mock: typeof Links;
}

export function HeadingLinks({ mock }: HeadingLinksProps) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <section className="flex gap-4">
      <MapUI
        mockDataForMap={mock}
        children={(link, index) => (
          <Link
            className={cn(
              link.href === pathname
                ? "text-black font-[500]"
                : "text-[rgba(160,160,181,1)]",
            )}
            key={link.href}
            href={link.href}
          >
            {link.name}{" "}
            <span
              className={cn(
                link.href === pathname.slice(1, pathname.length - 1) &&
                  "hidden",
              )}
            >
              {index !== 2 && "/"}
            </span>
          </Link>
        )}
      />
    </section>
  );
}
