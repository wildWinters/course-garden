"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/shad-cn/ui/table";
import { mockTableHead } from "../mock/mock-table-head";
import { Checkbox } from "@/shared/shad-cn/ui/checkbox";
import { mockTableData } from "../mock/mock-table-data";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { useState } from "react";

export interface ITableModeMyCourses {
  mockTableDataProps?: typeof mockTableData;
  className?: string;
}

export function TableModeMyCourses({
  mockTableDataProps = mockTableData,
  className,
}: ITableModeMyCourses) {
  const [data, setData] = useState<boolean[]>(
    Array(mockTableDataProps.length).fill(false)
  );

  return (
    <Table className={cn("w-[71vw] bg-[rgba(247,249,251,1)] border border-gray-200 rounded-lg overflow-hidden text-sm", className)}>
      <TableCaption className="text-gray-500">
        A list of your recent invoices.
      </TableCaption>

      <TableHeader className="bg-[rgba(247,249,251,1)]">
        <TableRow className="h-12 text-gray-500">
          <TableHead className="w-12 text-center">
            <Checkbox />
          </TableHead>

          {mockTableHead.map((item, index) => (
            <TableHead
              key={item}
              className={`${index !== 0 && "text-center"} font-semibold`}
            >
              <div
                className={`flex text-gray-400 items-center gap-[10px] ${
                  index !== 0 ? "justify-center" : "justify-left"
                }`}
              >
                {item}
                <ArrowUpDown size={16} />
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {mockTableDataProps.map((row, index) => (
          <TableRow
            tabIndex={0}
            key={row.id}
            className={`h-[65px] border-t border-gray-200  ${
              data[index] ? "bg-[rgba(245,243,255,1)]" : ""
            }`}
          >
            <TableCell className="w-12 text-center">
              <Checkbox
                className="border-[rgba(45,30,99,1)] border-[1.5px]"
                onClick={() =>
                  setData((current) => {
                    const copy = [...current];
                    copy[index] = !copy[index];
                    console.log(copy[index]);
                    return copy;
                  })
                }
              />
            </TableCell>

            <TableCell
              tabIndex={0}
              className="font-medium h-[65px] focus:bg-[rgb(232, 229, 252)]"
            >
              {row.name}
            </TableCell>
            <TableCell tabIndex={0} className="text-center">
              {row.passed}
            </TableCell>
            <TableCell tabIndex={0} className="text-center">
              {row.rating}
            </TableCell>
            <TableCell tabIndex={0} className="text-center">
              {row.views}
            </TableCell>
            <TableCell tabIndex={0} className="text-center">
              {row.reviews}
            </TableCell>
            <TableCell tabIndex={0} className="text-center">
              {row.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
