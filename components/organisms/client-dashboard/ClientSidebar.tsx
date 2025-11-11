"use client";
import {
  LayoutDashboard,
  PhoneCall,
  Mic,
  BarChart2,
  Lightbulb,
  Key,
  Settings,
  EllipsisVertical,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "@/components/atoms/Logo";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/types";
import useAuth from "@/hooks/useAuth";
export default function ClientSidebar({
  dir,
  user,
}: {
  dir: "left" | "right";
  user: User;
}) {
  const t = useTranslations("sidebar");
  const pathname = usePathname();

  const menuItems = [
    {
      title: t("dashboard"),
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      title: t("calls-tickets"),
      icon: PhoneCall,
      href: "/dashboard/calls-tickets",
    },
    { title: t("voice-script"), icon: Mic, href: "/dashboard/voice-script" },
    {
      title: t("performance-analytics"),
      icon: BarChart2,
      href: "/dashboard/performance-analytics",
    },
    {
      title: t("ai-outbound"),
      icon: Lightbulb,
      href: "/dashboard/ai-outbound",
    },
    { title: t("api-keys"), icon: Key, href: "/dashboard/api-keys" },
    { title: t("settings"), icon: Settings, href: "/dashboard/settings" },
  ];

  const { handleLogout } = useAuth();

  return (
    <Sidebar
      side={dir}
      className="w-[250px] bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm flex flex-col justify-between p-4 my-2"
    >
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-6 mt-2">
        <Logo />
      </div>

      {/* Menu Section */}
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`flex items-center gap-3 py-2 px-3 my-2 rounded-md transition-all cursor-pointer active:bg-[#06B6D40F] active:text-[#06B6D4] ${
                    isActive
                      ? "bg-[#06B6D40F] text-[#06B6D4] hover:bg-[#06B6D40F] hover:text-[#06B6D4]"
                      : "text-gray-700 dark:text-gray-300 hover:bg-[#06B6D40F]"
                  }`}
                >
                  <Link href={String(item.href)}>
                    <item.icon
                      className={`w-5 h-5 ${
                        isActive
                          ? "text-[#06B6D4]"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    />
                    <span className="text-sm font-semibold">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* User Section */}
      <div className="bg-[#06B6D40F] dark:bg-[#0e2235] p-3 rounded-xl flex items-center gap-3 mt-6">
        <Avatar>
          <AvatarImage
            src={`https://api.dicebear.com/6.x/initials/svg?seed=${user?.fullName}&backgroundColor=2563eb&backgroundType=solid`}
            alt={user?.fullName}
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <AvatarFallback>{user?.fullName}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col text-sm">
          <span className="font-semibold text-gray-900 dark:text-white">
            {user?.fullName}
          </span>
          <span className="text-gray-500 text-xs">{user?.role}</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="p-0 hover:bg-transparent m-0 dark:bg-transparent"
            >
              <EllipsisVertical className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 dark:bg-[#0e2235] bg-[#fff]"
            align="start"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>

            <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Sidebar>
  );
}
