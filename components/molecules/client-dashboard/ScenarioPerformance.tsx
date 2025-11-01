import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import CallsAndTicketsTablePagination from "./CallsAndTicketsTablePagination";
export default function ScenarioPerformance() {
  return (
    <Card className="border-none bg-transparent shadow-none gap-3 col-span-2">
      <CardHeader className="p-2">
        <CardTitle className="font-semibold text-xl">
          Scenario Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="dark:bg-[#00143473] bg-[#FFFFFFBF] rounded-2xl p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Scenario Name</TableHead>
              <TableHead>Calls</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Satisfaction</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>Scenario {index + 1}</TableCell>
                <TableCell>31</TableCell>
                <TableCell>3</TableCell>
                <TableCell>
                  <div className="w-full">
                    <p className="text-[#000000BF] dark:text-[#FFFFFFBF]">
                      30%
                    </p>
                    <Progress value={30} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CallsAndTicketsTablePagination />
      </CardContent>
    </Card>
  );
}
