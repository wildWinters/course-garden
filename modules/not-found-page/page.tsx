"use client";
import Image from "next/image";
import { LabelInput } from "../main-page/modal-form-sign-in-or-up/components/label-input";
import { Button } from "@/shared/shad-cn/ui/button";
import { Search } from "lucide-react";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export function MainPartOfNotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col mt-[-80px] items-center justify-center text-[rgba(45,30,99,1)] px-4">
      <div className="text-center ">
        <h1 className="text-[clamp(48px,10vw,80px)] font-black leading-none">
          404
        </h1>
        <p className="text-xl font-medium">Something went wrong</p>

        <div className="my-6">
          <Image
            src="/img/tree-down.png"
            width={139}
            height={139}
            alt="tree-icon"
            className="mx-auto"
          />
        </div>

        <p className="text-gray-600 max-w-md">
          Sorry, the page you are looking for doesn't exist or has been moved.
          <br /> Try searching our site:
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
          <div className="relative w-full">
            <LabelInput
              InputClassName="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              isLabelEsists={false}
              placeholder="Search..."
            >
              <Search
                size={18}
                className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              />
            </LabelInput>
          </div>
          <Button
            className="w-full sm:w-auto px-6 py-3 text-base font-medium whitespace-nowrap"
            variant={"purple"}
          >
            Search
          </Button>
        </div>

        <div className="pt-6">
          <Link
            href="/my-courses-edit-user-admin-page"
            className="inline-flex items-center text-purple-900 hover:text-purple-700 font-medium transition-colors border-b-2 border-transparent hover:border-purple-500 pb-1"
          >
            <Undo2 className="w-6 h-6 mr-2" />
            <span>Go to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
