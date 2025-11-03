"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLocale, useTranslations } from "next-intl";

type Client = {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  industry: string;
  status: "Active" | "Inactive";
  users: number;
  startDate: string;
};

const clients: Client[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: `John Doe ${i + 1}`,
  company: `Company ${String.fromCharCode(65 + i)}`,
  phone: `+12345678${i}`,
  email: `john${i}@example.com`,
  industry: `tech${i}`,
  status: i % 2 === 0 ? "Active" : "Inactive",
  users: i,
  startDate: `2022-01-${String(i + 1).padStart(2, "0")}`,
}));

export default function EnrollsTable() {
  const t = useTranslations("adminEnrollmentForms");
  const locale = useLocale();
  const [selected, setSelected] = React.useState<number[]>([]);
  const allChecked = selected.length === clients.length;

  const toggleAll = () => {
    setSelected(allChecked ? [] : clients.map((c) => c.id));
  };

  const toggleOne = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const renderStatusBadge = (status: Client["status"]) => {
    const styles =
      status === "Active"
        ? "bg-green-500/20 text-green-600 dark:text-green-400"
        : "bg-red-500/20 text-red-600 dark:text-red-400";

    return (
      <Badge variant="secondary" className={styles}>
        {t(`status.${status.toLowerCase()}`)}
      </Badge>
    );
  };

  return (
    <Table className="my-10 dark:bg-[#001434A6] bg-[#FFFFFFBF] rounded-2xl">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox checked={allChecked} onCheckedChange={toggleAll} />
          </TableHead>
          <TableHead
            className={`${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("table.name")}
          </TableHead>
          <TableHead
            className={`${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("table.company")}
          </TableHead>
          <TableHead
            className={`${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("table.email")}
          </TableHead>
          <TableHead
            className={`${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("table.phone")}
          </TableHead>
          <TableHead
            className={`${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("table.industry")}
          </TableHead>
          <TableHead
            className={`${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("table.status")}
          </TableHead>
          <TableHead
            className={`${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("table.submittedOn")}
          </TableHead>
          <TableHead
            className={`${locale === "ar" ? "text-right" : "text-left"}`}
          >
            {t("table.actions")}
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {clients.map((client) => (
          <TableRow
            key={client.id}
            className="hover:bg-white/10 transition-colors"
          >
            <TableCell>
              x
              <Checkbox
                checked={selected.includes(client.id)}
                onCheckedChange={() => toggleOne(client.id)}
              />
            </TableCell>
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.company}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>{client.phone}</TableCell>
            <TableCell>{client.industry}</TableCell>
            <TableCell>{renderStatusBadge(client.status)}</TableCell>
            <TableCell>{client.startDate}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                {t("actions.view")}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
