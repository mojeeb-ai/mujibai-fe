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

type Client = {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
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
  status: i % 2 === 0 ? "Active" : "Inactive",
  users: i,
  startDate: `2022-01-${String(i + 1).padStart(2, "0")}`,
}));

export default function ClientsTable() {
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
        {status}
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
          <TableHead>Name</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Users</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {clients.map((client) => (
          <TableRow
            key={client.id}
            className="hover:bg-white/10 transition-colors"
          >
            <TableCell>
              <Checkbox
                checked={selected.includes(client.id)}
                onCheckedChange={() => toggleOne(client.id)}
              />
            </TableCell>
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.company}</TableCell>
            <TableCell>{client.phone}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>{renderStatusBadge(client.status)}</TableCell>
            <TableCell>{client.users}</TableCell>
            <TableCell>{client.startDate}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
