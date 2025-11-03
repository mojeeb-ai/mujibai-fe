import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLocale, useTranslations } from "next-intl";

export default function Top5ActiveClients() {
  const t = useTranslations("adminAnalyticsPage.top5ActiveClients");
  const locale = useLocale();
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="bg-[#FFFFFFBF] dark:bg-[#00143473] py-7 rounded-2xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className={`${locale === "ar" ? "text-right" : "text-left"}`}
              >
                {t("clientName")}
              </TableHead>
              <TableHead
                className={`${locale === "ar" ? "text-right" : "text-left"}`}
              >
                {t("calls")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>simple client</TableCell>
              <TableCell>25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>simple client</TableCell>
              <TableCell>19</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>simple client</TableCell>
              <TableCell>17</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>simple client</TableCell>
              <TableCell>13</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>simple client</TableCell>
              <TableCell>11</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
