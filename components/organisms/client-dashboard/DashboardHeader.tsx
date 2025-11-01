import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/atoms/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";

export default function DashboardHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="w-full flex justify-between items-center flex-wrap gap-2 py-4 px-5 z-50 bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <div className="flex items-start flex-col">
          <h1 className="font-bold text-xl text-gray-800 dark:text-gray-100">
            {title}
          </h1>
          {subtitle && <p className="text-sm text-foreground">{subtitle}</p>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-white/10 dark:hover:bg-black/10 rounded-full"
        >
          <div className="relative">
            <Bell className="size-5" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          </div>
        </Button>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
