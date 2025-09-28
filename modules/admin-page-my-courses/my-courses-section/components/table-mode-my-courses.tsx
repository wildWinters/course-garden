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

export function TableModeMyCourses() {
  return (
    <Table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
      <TableCaption className="text-gray-500">
        A list of your recent invoices.
      </TableCaption>

       <TableHeader className="bg-gray-50">
        <TableRow className="h-12 text-gray-500">
        
          <TableHead className="w-12 text-center">
            <Checkbox />
          </TableHead>


          {mockTableHead.map((item) => (
            <TableHead key={item} className="text-left font-semibold">
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {mockTableData.map((row) => (
          <TableRow
            key={row.id}
            className="h-12 border-t border-gray-200 hover:bg-gray-50"
          >

            <TableCell className="w-12 text-center">
              <Checkbox />
            </TableCell>
          
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.passed}</TableCell>
            <TableCell>{row.rating}</TableCell>
            <TableCell>{row.views}</TableCell>
            <TableCell>{row.reviews}</TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
