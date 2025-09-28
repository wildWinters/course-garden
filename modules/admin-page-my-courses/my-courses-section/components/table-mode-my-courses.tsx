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
import { Checkbox } from "@radix-ui/react-checkbox";

export function TableModeMyCourses() {
  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="h-[48px] text-[rgba(160,160,181,1)]">
            <TableHead className="relative">
              <Checkbox className="w-4 h-4 border-2 border-[rgba(45,30,99,1)] rounded-[4px]" />
            </TableHead>
            {mockTableHead.map((item) => (
              <TableHead key={item}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="flex items-center h-[48px]">
            <TableCell className="font-medium">
              <Checkbox className="w-4 h-4 border-2 border-[rgba(45,30,99,1)] rounded-[8px]" />
            </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
