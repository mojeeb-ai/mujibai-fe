import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
 * Pagination bar for Recent Clients table
 * Includes page selector and items-per-page dropdown.
 */
export default function RecentClientsTablePagination({
  t,
  locale,
}: {
  t: any;
  locale: string;
}) {
  return (
    <div className="flex w-full items-center justify-between bg-transparent py-2">
      {/* Clients-per-page selector */}
      <div className="flex items-center gap-2">
        <Select>
          <SelectTrigger className="text-foreground w-[80px] rounded-md bg-[#FFFFFFBF] text-sm transition-colors focus:ring-2 focus:ring-[#00d9ff]/40 dark:bg-[#001434A6]">
            <SelectValue placeholder="06" />
          </SelectTrigger>
          <SelectContent className="text-foreground border-[#0b254a] bg-[#FFFFFFBF] dark:bg-[#001434A6]">
            <SelectItem value="06">06</SelectItem>
            <SelectItem value="12">12</SelectItem>
            <SelectItem value="24">24</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-300">
          {t('of')} 120 {t('clients')}
        </p>
      </div>

      {/* Pagination navigation */}
      <Pagination className="mx-0 w-fit rounded-[6px] bg-[#FFFFFFBF] py-1 dark:bg-[#001434A6]">
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationPrevious locale={locale} text={t('previous')} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="text-foreground rounded-md bg-[#00d9ff] font-medium hover:bg-[#00b9e6]">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="text-foreground rounded-md">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="text-foreground rounded-md">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className="text-foreground" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="text-foreground rounded-md">
              12
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext text={t('next')} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
