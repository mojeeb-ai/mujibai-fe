"use client";

import {
  LayoutDashboard,
  PhoneCall,
  Mic,
  BarChart2,
  Lightbulb,
  Key,
  Settings,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "@/components/atoms/Logo";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

/**
 * AdminSidebar Component
 *
 * Displays the admin sidebar navigation menu with localized titles.
 * Uses `next-intl` for translations.
 *
 * @param {Object} props - Component props
 * @param {"left" | "right"} props.dir - Sidebar position (left or right)
 * @returns {JSX.Element} Sidebar navigation component
 */
export default function AdminSidebar({ dir }: { dir: "left" | "right" }) {
  const t = useTranslations("adminSidebar");
  const pathname = usePathname();
  const menuItems = [
    {
      title: t("dashboard"),
      icon: LayoutDashboard,
      active: true,
      href: "/admin-dashboard",
    },
    { title: t("clients"), icon: PhoneCall, href: "/admin-dashboard/clients" },
    { title: t("analytics"), icon: Mic, href: "/admin-dashboard/analytics" },
    {
      title: t("userRoles"),
      icon: BarChart2,
      href: "/admin-dashboard/user-roles",
    },
    { title: t("plans"), icon: Lightbulb, href: "/admin-dashboard/plans" },
    {
      title: t("subscription"),
      icon: Key,
      href: "/admin-dashboard/subscription",
    },
    {
      title: t("enrollmentForm"),
      icon: FileText,
      href: "/admin-dashboard/enrollment-form",
    },
    { title: t("settings"), icon: Settings, href: "/admin-dashboard/settings" },
  ];

  return (
    <Sidebar
      side={dir}
      className="w-[250px] bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm flex flex-col justify-between p-4 my-2"
    >
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-6 mt-2">
        <Link href="/">
          <Logo />
        </Link>
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
      <div className="bg-[#284b520f] dark:bg-[#0e2235] p-3 rounded-xl flex items-center gap-3 mt-6">
        <Image
          src="/assets/salman.jpg"
          alt="Salman"
          width={40}
          height={40}
          className="rounded-full object-cover"
          loading="lazy"
        />
        <div className="flex flex-col text-sm">
          <span className="font-semibold text-gray-900 dark:text-white">
            Salman K.
          </span>
          <span className="text-gray-500 text-xs">{t("memberRole")}</span>
        </div>
        <div className="ml-auto text-gray-500">⋮</div>
      </div>
    </Sidebar>
  );
}
