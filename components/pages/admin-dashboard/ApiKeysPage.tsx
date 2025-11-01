import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

export default function ApiKeysPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader
        title="API Keys"
        subtitle="You have permission to view and manage all API keys in this project"
      />
      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <div className="flex justify-between items-center px-2">
          <h4>
            View usage per API key on the{" "}
            <Link
              href="/dashboard/usage"
              className="text-primary border-b-1 border-dashed border-primary"
            >
              Usage Page
            </Link>
          </h4>
          <Button className="rounded-full py-5">
            <Plus className="size-4" />
            Create New Secret Key
          </Button>
        </div>
        <Table className="dark:bg-[#00143473] bg-white my-10">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Secret Key</TableHead>
              <TableHead>Created On</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>Last Used</TableHead>
              <TableHead>Permission</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Secret Key</TableCell>
              <TableCell>sk*****gkbs</TableCell>
              <TableCell>Sep 22, 2025</TableCell>
              <TableCell>Abdulrhman A...</TableCell>
              <TableCell>Oct 11, 2025</TableCell>
              <TableCell>All</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    className="bg-primary/20 text-primary rounded-full w-10 h-10 hover:bg-primary/20 hover:text-primary"
                  >
                    <Edit className="size-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="bg-red-500/20 text-red-700 rounded-full w-10 h-10 hover:bg-red-500/20 hover:text-red-700"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
