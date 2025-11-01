import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

/**
 * EnrollsSearchAndFiltering component
 * -----------------------------------
 * Provides search input and action buttons for filtering and adding enrolls.
 */
export default function EnrollsSearchAndFiltering() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 justify-between items-center ">
      {/* Search Section */}
      <div className="col-span-3 w-full flex items-center gap-2 bg-[#06B6D426] dark:bg-g-white/10 px-3 py-2 rounded-full">
        <Input
          placeholder="Search by name, email or sector..."
          className="flex-1 border-0 dark:bg-transparent shadow-none focus-visible:ring-0 py-0"
        />
        <div className="flex items-center rounded-full  dark:bg-[#FFFFFF26] p-2 text-primary bg-white">
          <Search className="size-4" />
        </div>
      </div>

      {/* Actions Section */}
      <div className="col-span-3 flex items-center justify-end gap-2">
        <Button
          variant="outline"
          size="icon"
          aria-label="Filter clients"
          className="border-2 border-primary text-primary hover:border-primary hover:text-primary"
        >
          <Filter className="size-4" />
        </Button>
      </div>
    </div>
  );
}
