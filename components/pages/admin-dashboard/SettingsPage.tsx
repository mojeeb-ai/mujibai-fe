"use client";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Moon, Settings, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("adminSettings");

  const options = [
    { label: t("theme.options.light"), value: "light", Icon: Sun },
    { label: t("theme.options.dark"), value: "dark", Icon: Moon },
    { label: t("theme.options.system"), value: "system", Icon: Settings },
  ];

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title={t("welcome") + " " + "Abdulrahman Alharbi"} />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        {/* Theme Section */}
        <Card className="border-none shadow-none bg-transparent">
          <CardHeader>
            <CardTitle>{t("theme.title")}</CardTitle>
            <CardDescription>{t("theme.description")}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {options.map(({ label, value, Icon }) => (
                <label
                  key={value}
                  htmlFor={value}
                  className={cn(
                    "cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center border transition-all duration-200",
                    "bg-[#FFFFFFBF] dark:bg-[#FFFFFF0F]",
                    "hover:ring-2 hover:ring-primary/40",
                    theme === value
                      ? "border-primary ring-2 ring-primary/60"
                      : "border-transparent"
                  )}
                >
                  <div className="dark:bg-[#00143440] bg-[#3B82F640] rounded-full p-2 my-5">
                    <Icon className="size-7 text-white" fill="white" />
                  </div>
                  <input
                    id={value}
                    type="radio"
                    name="theme"
                    value={value}
                    checked={theme === value}
                    onChange={() => setTheme(value)}
                    className="hidden"
                  />
                  <Label className="cursor-pointer font-medium">{label}</Label>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications Section */}
        <Card className="border-none shadow-none bg-transparent">
          <CardHeader>
            <CardTitle>{t("notifications.title")}</CardTitle>
            <CardDescription>{t("notifications.description")}</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 flex-col dark:bg-[#001434A6] bg-[#FFFFFFBF] py-7 rounded-2xl">
            <div className="flex items-center justify-between py-3 px-3 rounded-xl bg-[#3B82F614] dark:bg-[#3B82F614]">
              <h1>{t("notifications.email")}</h1>
              <Switch />
            </div>
            <div className="flex items-center justify-between py-3 px-3 rounded-xl bg-[#3B82F614] dark:bg-[#3B82F614]">
              <h1>{t("notifications.sms")}</h1>
              <Switch />
            </div>
            <div className="flex items-center justify-between py-3 px-3 rounded-xl bg-[#3B82F614] dark:bg-[#3B82F614]">
              <h1>{t("notifications.browser")}</h1>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
