import { Filter, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * EnrollsSearchAndFiltering component
 * -----------------------------------
 * Provides search input and action buttons for filtering and adding enrolls.
 */
export default function EnrollsSearchAndFiltering({
  t,
}: {
  t: (key: string) => string;
}) {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-between md:grid-cols-6 lg:grid-cols-6">
      {/* Search Section */}
      <div className="dark:bg-g-white/10 col-span-3 flex w-full items-center gap-2 rounded-full bg-[#06B6D426] px-3 py-2">
        <Input
          placeholder={t('searchPlaceholder')}
          className="flex-1 border-0 py-0 shadow-none focus-visible:ring-0 dark:bg-transparent"
        />
        <div className="text-primary flex items-center rounded-full bg-white p-2 dark:bg-[#FFFFFF26]">
          <Search className="size-4" />
        </div>
      </div>

      {/* Actions Section */}
      <div className="col-span-3 flex items-center justify-end gap-2">
        <Button
          variant="outline"
          size="icon"
          aria-label="Filter clients"
          className="border-primary text-primary hover:border-primary hover:text-primary border-2"
        >
          <Filter className="size-4" />
        </Button>
      </div>
    </div>
  );
}
