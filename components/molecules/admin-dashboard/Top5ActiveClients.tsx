import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Top5ActiveClients() {
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle>Top 5 Active Clients</CardTitle>
      </CardHeader>
      <CardContent className="bg-[#FFFFFFBF] dark:bg-[#00143473] py-7 rounded-2xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Client Name</TableHead>
              <TableHead className="w-[100px]">Calls</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Client Name</TableCell>
              <TableCell>Client Name</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
