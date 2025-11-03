import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * PlansSearchAndFiltering component
 * -----------------------------------
 * Provides search input and action buttons for filtering and adding plans.
 */
export default function PlansSearchAndFiltering() {
  const t = useTranslations("adminPlans");

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 justify-between items-center">
      {/* Search Section */}
      <div className="col-span-3 w-full flex items-center gap-2 bg-[#06B6D426] dark:bg-g-white/10 px-3 py-2 rounded-full">
        <Input
          placeholder={t("searchPlaceholder")}
          className="flex-1 border-0 dark:bg-transparent shadow-none focus-visible:ring-0 py-0"
        />
        <div className="flex items-center rounded-full dark:bg-[#FFFFFF26] p-2 text-primary bg-white">
          <Search className="size-4" />
        </div>
      </div>

      {/* Actions Section */}
      <div className="col-span-3 flex items-center justify-end gap-2">
        <Button className="rounded-full py-5">
          <Plus className="size-4" />
          {t("addNewPlan")}
        </Button>
      </div>
    </div>
  );
}
