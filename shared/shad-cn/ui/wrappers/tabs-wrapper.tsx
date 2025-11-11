import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/shad-cn/ui/tabs";
import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

export interface ITabsWarapperProps<TC, TT> {
  children?: ReactNode;
  tabsTriggerVariant?: "default" | "not-default";
  tasbWrapperVariant?: "default" | "not-default";
  tabListVariant?: "default" | "not-default";
  tabContentVariant?: "default" | "not-default";
  tabContentValue?: TC[];
  tabsValue?: TT[];
}

export function TabsWrapper<TC, TT>({
  children,
  tabsTriggerVariant,
  tasbWrapperVariant,
  tabListVariant,
  tabContentVariant,
  tabContentValue,
  tabsValue,
}: ITabsWarapperProps<TC, TT>) {
  return (
    <>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className={cn("bg-[rgba(227,240,253,1)]")}>
          <TabsTrigger
            className={cn(
              "text-[rgba(160,160,181,1)] data-[state=active]:text-black",
            )}
            value="account"
            // variant={tabsTriggerVariant}
          >
            Public
          </TabsTrigger>
          <TabsTrigger
            className={cn(
              "text-[rgba(160,160,181,1)] data-[state=active]:text-black",
            )}
            value="password"
            // variant={tabsTriggerVariant}
          >
            Private
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="account"
          //  variant={tabContentVariant}
        >
          Public
        </TabsContent>
        <TabsContent
          value="password"
          //  variant={tabContentVariant}
        >
          Private
        </TabsContent>
      </Tabs>
    </>
  );
}
