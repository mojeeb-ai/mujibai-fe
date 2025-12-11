'use client';

import * as React from 'react';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

/**
 * ClientsTable Component
 * ----------------------
 * Displays a table of clients with selection checkboxes,
 * status badges, and action buttons.
 * Uses `next-intl` for multilingual support (Arabic / English).
 */
export default function ClientsTable() {
  const t = useTranslations('adminClients.clientsTable');
  const locale = useLocale();

  type Client = {
    id: number;
    name: string;
    company: string;
    phone: string;
    email: string;
    status: 'Active' | 'Inactive';
    users: number;
    startDate: string;
  };

  // 🧑‍💼 Mock client data for demonstration
  const clients: Client[] = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `John Doe ${i + 1}`,
    company: `Company ${String.fromCharCode(65 + i)}`,
    phone: `+12345678${i}`,
    email: `john${i}@example.com`,
    status: i % 2 === 0 ? 'Active' : 'Inactive',
    users: i + 2,
    startDate: `2022-01-${String(i + 1).padStart(2, '0')}`,
  }));

  const [selected, setSelected] = React.useState<number[]>([]);
  const allChecked = selected.length === clients.length;

  /** Toggle all checkboxes at once */
  const toggleAll = () => {
    setSelected(allChecked ? [] : clients.map(c => c.id));
  };

  /** Toggle individual client selection */
  const toggleOne = (id: number) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  /** Render colored badge based on client status */
  const renderStatusBadge = (status: Client['status']) => {
    const styles =
      status === 'Active'
        ? 'bg-green-500/20 text-green-600 dark:text-green-400'
        : 'bg-red-500/20 text-red-600 dark:text-red-400';

    return (
      <Badge variant="secondary" className={styles}>
        {t(status.toLowerCase())}
      </Badge>
    );
  };

  return (
    <Table className="my-10 rounded-2xl bg-[#FFFFFFBF] dark:bg-[#001434A6]">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox checked={allChecked} onCheckedChange={toggleAll} />
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('name')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('company')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('phone')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('email')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('status')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('users')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('startDate')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('actions')}
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {clients.map(client => (
          <TableRow
            key={client.id}
            className="transition-colors hover:bg-white/10"
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
                {t('view')}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
