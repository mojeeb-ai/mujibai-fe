"use client";

import CallsAndTicketsTablePagination from "@/components/molecules/client-dashboard/CallsAndTicketsTablePagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Play, Eye } from "lucide-react";

/**
 * CallsAndTicketsTable — displays styled table of recent service calls & tickets.
 */
export default function CallsAndTicketsTable() {
  const calls = [
    {
      customer: "Toni Kroos",
      phone: "03:34",
      duration: "05:34",
      scenario: "Appointments Booking",
      date: "Sample date",
    },
    {
      customer: "Toni Kroos",
      phone: "03:34",
      duration: "05:34",
      scenario: "Appointments Booking",
      date: "Sample date",
    },
    {
      customer: "Toni Kroos",
      phone: "03:34",
      duration: "05:34",
      scenario: "Appointments Booking",
      date: "Sample date",
    },
    {
      customer: "Toni Kroos",
      phone: "03:34",
      duration: "05:34",
      scenario: "Appointments Booking",
      date: "Sample date",
    },
  ];

  return (
    <Card className="w-full bg-transparent border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">
          Calls & Tickets
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table className="w-full rounded-xl dark:bg-[#001434A6] bg-[#FFFFFFBF] border-0">
            <TableHeader>
              <TableRow className="border-none text-foreground">
                <TableHead className="text-sm font-semibold text-foreground">
                  Customer
                </TableHead>
                <TableHead className="text-sm font-semibold text-foreground">
                  Phone
                </TableHead>
                <TableHead className="text-sm font-semibold text-foreground">
                  Duration
                </TableHead>
                <TableHead className="text-sm font-semibold text-foreground">
                  Scenario
                </TableHead>
                <TableHead className="text-sm font-semibold text-foreground">
                  Date
                </TableHead>
                <TableHead className="text-sm font-semibold text-foreground text-center">
                  Status
                </TableHead>
                <TableHead className="text-sm font-semibold text-foreground text-center">
                  Receipt
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {calls.map((call, idx) => (
                <TableRow
                  key={idx}
                  className="border-none dark:hover:bg-[#00214f]/40 hover:bg-primary/40 transition-colors"
                >
                  <TableCell className="text-foreground font-medium">
                    {call.customer}
                  </TableCell>
                  <TableCell className="text-foreground">
                    {call.phone}
                  </TableCell>
                  <TableCell className="text-foreground">
                    {call.duration}
                  </TableCell>
                  <TableCell className="text-foreground">
                    {call.scenario}
                  </TableCell>
                  <TableCell className="text-foreground">{call.date}</TableCell>

                  {/* Status icon */}
                  <TableCell className="text-center">
                    <button className="p-2 rounded-full dark:bg-[#00214f] bg-[#06B6D426] transition-colors">
                      <Play fill="#06B6D4" className="size-4" />
                    </button>
                  </TableCell>

                  {/* Receipt icon */}
                  <TableCell className="text-center">
                    <button className="p-2 rounded-full dark:bg-[#00214f] bg-[#06B6D426] transition-colors">
                      <Eye className="size-4 text-primary" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <CallsAndTicketsTablePagination />
      </CardContent>
    </Card>
  );
}
