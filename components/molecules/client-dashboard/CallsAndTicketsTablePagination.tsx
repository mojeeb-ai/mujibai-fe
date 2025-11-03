import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * Pagination bar for Recent Clients table
 * Includes page selector and items-per-page dropdown.
 */
export default function CallsAndTicketsTablePagination({
  t,
}: {
  t: (key: string) => string;
}) {
  return (
    <div className="w-full flex justify-between items-center  py-2 bg-transparent">
      {/* Clients-per-page selector */}
      <div className="flex items-center gap-2">
        <Select>
          <SelectTrigger
            className="w-[80px] dark:bg-[#001434A6] bg-[#FFFFFFBF] text-foreground text-sm rounded-md 
                      focus:ring-2 focus:ring-[#00d9ff]/40  transition-colors"
          >
            <SelectValue placeholder="06" />
          </SelectTrigger>
          <SelectContent className="dark:bg-[#001434A6] bg-[#FFFFFFBF] text-foreground border-[#0b254a]">
            <SelectItem value="06">06</SelectItem>
            <SelectItem value="12">12</SelectItem>
            <SelectItem value="24">24</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-foreground">
          {t("of")} 120 {t("clients")}
        </p>
      </div>

      {/* Pagination navigation */}
      <Pagination className="dark:bg-[#001434A6] bg-[#FFFFFFBF] rounded-[6px] mx-0  py-1 w-fit">
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="rounded-md bg-[#00d9ff] text-foreground font-medium hover:bg-[#00b9e6]"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="rounded-md text-foreground ">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="rounded-md text-foreground ">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className="text-foreground" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="rounded-md text-foreground ">
              12
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
