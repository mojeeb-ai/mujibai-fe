"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import RecentClientsTablePagination from "@/components/molecules/client-dashboard/RecentClientsTablePagination";
import { useLocale, useTranslations } from "next-intl";

/**
 * RecentClientsTable component
 * Displays a styled table of recent clients with pagination.
 */
export default function RecentClientsTable({ title }: { title: string }) {
  const clients = [
    {
      name: "Cristiano Ronaldo",
      id: "C001",
      duration: "20",
      date: "26 Jan 2025",
    },
    {
      name: "Cristiano Ronaldo",
      id: "C001",
      duration: "20",
      date: "26 Jan 2025",
    },
    {
      name: "Cristiano Ronaldo",
      id: "C001",
      duration: "20",
      date: "26 Jan 2025",
    },
    {
      name: "Cristiano Ronaldo",
      id: "C001",
      duration: "20",
      date: "26 Jan 2025",
    },
    {
      name: "Cristiano Ronaldo",
      id: "C001",
      duration: "20",
      date: "26 Jan 2025",
    },
    {
      name: "Cristiano Ronaldo",
      id: "C001",
      duration: "20",
      date: "26 Jan 2025",
    },
    {
      name: "Cristiano Ronaldo",
      id: "C001",
      duration: "20",
      date: "26 Jan 2025",
    },
    {
      name: "Cristiano Ronaldo",
      id: "C001",
      duration: "20",
      date: "26 Jan 2025",
    },
    {
      name: "Cristiano Ronaldo",
      id: "C001",
      duration: "20",
      date: "26 Jan 2025",
    },
    {
      name: "Cristiano Ronaldo",
      id: "C001",
      duration: "20",
      date: "26 Jan 2025",
    },
  ];

  const t = useTranslations("dashboardOverview");
  const locale = useLocale();
  return (
    <Card className="w-full bg-transparent border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-lg border">
          <Table className="dark:bg-[#001434A6] bg-[#FFFFFFBF] rounded-lg border-0 ">
            <TableHeader>
              <TableRow>
                <TableHead
                  className={`${locale === "ar" ? "text-right" : "text-left"}`}
                >
                  {t("clientName")}
                </TableHead>
                <TableHead
                  className={`${locale === "ar" ? "text-right" : "text-left"}`}
                >
                  {t("date")}
                </TableHead>
                <TableHead
                  className={`${locale === "ar" ? "text-right" : "text-left"}`}
                >
                  {t("duration")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.date}</TableCell>
                  <TableCell>{client.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex justify-center">
          <RecentClientsTablePagination t={t} locale={locale} />
        </div>
      </CardContent>
    </Card>
  );
}
