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
import { useLocale, useTranslations } from "next-intl";

export default function ApiKeysPage() {
  const t = useTranslations("APIKeys");
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title={t("title")} subtitle={t("subTitle")} />
      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <div className="flex justify-between items-center px-2">
          <h4>
            {t("viewUsage")}{" "}
            <Link
              href="/dashboard/usage"
              className="text-primary border-b-1 border-dashed border-primary"
            >
              {t("usagePage")}
            </Link>
          </h4>
          <Button className="rounded-full py-5">
            <Plus className="size-4" />
            {t("createNewSecretKey")}
          </Button>
        </div>
        <Table className="dark:bg-[#00143473] bg-white my-10">
          <TableHeader>
            <TableRow>
              <TableHead
                className={`${locale === "ar" ? "text-right" : "text-left"}`}
              >
                {t("name")}
              </TableHead>
              <TableHead
                className={`${locale === "ar" ? "text-right" : "text-left"}`}
              >
                {t("secretKey")}
              </TableHead>
              <TableHead
                className={`${locale === "ar" ? "text-right" : "text-left"}`}
              >
                {t("createdOn")}
              </TableHead>
              <TableHead
                className={`${locale === "ar" ? "text-right" : "text-left"}`}
              >
                {t("createdBy")}
              </TableHead>
              <TableHead
                className={`${locale === "ar" ? "text-right" : "text-left"}`}
              >
                {t("lastUsed")}
              </TableHead>
              <TableHead
                className={`${locale === "ar" ? "text-right" : "text-left"}`}
              >
                {t("permission")}
              </TableHead>
              <TableHead
                className={`${locale === "ar" ? "text-right" : "text-left"}`}
              >
                {t("actions")}
              </TableHead>
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
