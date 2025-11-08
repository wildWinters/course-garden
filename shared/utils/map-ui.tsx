import { ReactNode } from "react";
import { Fragment } from "react";

interface MapUIProps<T> {
  mockDataForMap: T[];
  children: (item: T, index?:number) => ReactNode;
}

export function MapUI<T>({ mockDataForMap, children }: MapUIProps<T>) {
  console.log(mockDataForMap);
  return (
    <>
      {mockDataForMap.map((value, index) => (
        <Fragment key={index}>{children(value,index)}</Fragment>
      ))}
    </>
  );
}
