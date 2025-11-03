"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus, Search } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * ClientsSearchAndFiltering component
 * -----------------------------------
 * Provides search, filtering, and client creation actions.
 * Uses `next-intl` for multilingual interface support (Arabic / English).
 */
export default function ClientsSearchAndFiltering() {
  const t = useTranslations("adminClients.ClientsSearchAndFiltering");

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 justify-between items-center">
      {/* 🔍 Search Section */}
      <div className="col-span-3 w-full flex items-center gap-2 bg-[#06B6D426] dark:bg-g-white/10 px-3 py-2 rounded-full">
        <Input
          placeholder={t("searchPlaceholder")}
          className="flex-1 border-0 dark:bg-transparent shadow-none focus-visible:ring-0 py-0"
        />
        <div className="flex items-center rounded-full dark:bg-[#FFFFFF26] p-2 text-primary bg-white">
          <Search className="size-4" />
        </div>
      </div>

      {/* ⚙️ Actions Section */}
      <div className="col-span-3 flex items-center justify-end gap-2">
        <Button
          variant="outline"
          size="icon"
          aria-label={t("filterButton")}
          className="border-2 border-primary text-primary hover:border-primary hover:text-primary"
        >
          <Filter className="size-4" />
        </Button>

        <Button className="gap-2 rounded-full py-5">
          <Plus className="size-4 text-foreground" />
          <span className="text-foreground">{t("addClientButton")}</span>
        </Button>
      </div>
    </div>
  );
}
