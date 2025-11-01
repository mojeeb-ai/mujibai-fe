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
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "@/components/atoms/Logo";
import Link from "next/link";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
    href: "/admin-dashboard",
  },
  {
    title: "Clients",
    icon: PhoneCall,
    href: "/admin-dashboard/clients",
  },
  { title: "Analytics", icon: Mic, href: "/admin-dashboard/analytics" },
  {
    title: "User Roles",
    icon: BarChart2,
    href: "/admin-dashboard/user-roles",
  },
  { title: "Plans", icon: Lightbulb, href: "/admin-dashboard/plans" },
  {
    title: "Subscription",
    icon: Key,
    href: "/admin-dashboard/subscription",
  },
  {
    title: "Enrollment Form",
    icon: FileText,
    href: "/admin-dashboard/enrollment-form",
  },
  {
    title: "API Keys",
    icon: Key,
    href: "/admin-dashboard/api-keys",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin-dashboard/settings",
  },
];

export default function AdminSidebar({ dir }: { dir: "left" | "right" }) {
  return (
    <Sidebar
      side={dir}
      className="w-[250px] bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm flex flex-col justify-between p-4 my-2"
    >
      <div className="flex flex-col items-center mb-6 mt-2">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${
                  item.active
                    ? "bg-[#06B6D40F] text-[#06B6D4]"
                    : " hover:bg-[#06B6D40F]"
                }`}
              >
                <Link href={String(item.href)}>
                  <item.icon
                    className={`w-5 h-5 ${
                      item.active
                        ? "text-[#06B6D4]"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  />
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <div className="bg-[#06B6D40F] dark:bg-[#0e2235] p-3 rounded-xl flex items-center gap-3 mt-6">
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
          <span className="text-gray-500 text-xs">Member</span>
        </div>
        <div className="ml-auto text-gray-500">⋮</div>
      </div>
    </Sidebar>
  );
}
