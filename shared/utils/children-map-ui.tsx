import { cloneElement, type ReactElement, ReactNode } from "react";

export interface MapUIProps<T> {
  mockDataForMap: T[];
  children: ReactElement<{ item: T; index: number }>;
}

export function MapUIChildren<T>({ mockDataForMap, children }: MapUIProps<T>) {
  return (
    <>
      {mockDataForMap.map((item, index) =>
        cloneElement(children, { item, index, key: index }),
      )}
    </>
  );
}
