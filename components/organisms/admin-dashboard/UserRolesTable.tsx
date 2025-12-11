'use client';
import { useState } from 'react';

import { useLocale, useTranslations } from 'next-intl';

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

type Client = {
  role: string;
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  status: 'Active' | 'Inactive';
  users: number;
  startDate: string;
};

const clients: Client[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: `John Doe ${i + 1}`,
  company: `Company ${String.fromCharCode(65 + i)}`,
  phone: `+12345678${i}`,
  email: `john${i}@example.com`,
  role: `Role ${String.fromCharCode(65 + i)}`,
  status: i % 2 === 0 ? 'Active' : 'Inactive',
  users: i,
  startDate: `2022-01-${String(i + 1).padStart(2, '0')}`,
}));

export default function UserRolesTable() {
  const t = useTranslations('adminUserRoles');
  const locale = useLocale();
  const [selected, setSelected] = useState<number[]>([]);

  const allChecked = selected.length === clients.length;

  const toggleAll = () => {
    setSelected(allChecked ? [] : clients.map(c => c.id));
  };

  const toggleOne = (id: number) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const renderStatusBadge = (status: Client['status']) => {
    const styles =
      status === 'Active'
        ? 'bg-green-500/20 text-green-600 dark:text-green-400'
        : 'bg-red-500/20 text-red-600 dark:text-red-400';

    return (
      <Badge variant="secondary" className={styles}>
        {status === 'Active'
          ? t('userRolesTable.active')
          : t('userRolesTable.inactive')}
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
            {t('userRolesTable.name')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('userRolesTable.email')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('userRolesTable.phone')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('userRolesTable.role')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('userRolesTable.status')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('userRolesTable.lastActive')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('userRolesTable.actions')}
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
            <TableCell>{client.email}</TableCell>
            <TableCell>{client.phone}</TableCell>
            <TableCell>{client.role}</TableCell>
            <TableCell>{renderStatusBadge(client.status)}</TableCell>
            <TableCell>{client.startDate}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                {t('userRolesTable.view')}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
