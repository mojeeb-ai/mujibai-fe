import CallsAndTicketsTablePagination from "@/components/molecules/client-dashboard/CallsAndTicketsTablePagination";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Plus } from "lucide-react";

export default function AiOutboundPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader
        title="AI Outbound Calls"
        subtitle="Reach your clients automatically with smart conversations"
      />
      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <div className="w-full flex justify-end items-center gap-3 my-6">
          <Button className="rounded-full py-5">
            <Plus className="size-4" />
            Add Call Task
          </Button>
          <Button className="rounded-full py-5 bg-transparent border-2 border-primary text-primary hover:bg-transparent">
            <Download className="size-4" /> Import CSV
          </Button>
        </div>
        <Table className="dark:bg-[#00143473] bg-[#FFFFFF73]">
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Scenario</TableHead>
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
                <TableCell>3</TableCell>
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
      </div>
    </div>
  );
}
