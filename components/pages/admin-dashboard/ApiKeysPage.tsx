import DashboardHeader from '@/components/organisms/client-dashboard/DashboardHeader'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Edit, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function ApiKeysPage() {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <DashboardHeader
        title="API Keys"
        subtitle="You have permission to view and manage all API keys in this project"
      />
      <div className="z-50 h-full w-full rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
        <div className="flex items-center justify-between px-2">
          <h4>
            View usage per API key on the{' '}
            <Link
              href="/dashboard/usage"
              className="text-primary border-primary border-b-1 border-dashed"
            >
              Usage Page
            </Link>
          </h4>
          <Button className="rounded-full py-5">
            <Plus className="size-4" />
            Create New Secret Key
          </Button>
        </div>
        <Table className="my-10 bg-white dark:bg-[#00143473]">
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
                    className="bg-primary/20 text-primary hover:bg-primary/20 hover:text-primary h-10 w-10 rounded-full"
                  >
                    <Edit className="size-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="h-10 w-10 rounded-full bg-red-500/20 text-red-700 hover:bg-red-500/20 hover:text-red-700"
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
  )
}
