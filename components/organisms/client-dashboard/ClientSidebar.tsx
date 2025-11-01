"use client";
import {
  LayoutDashboard,
  PhoneCall,
  Mic,
  BarChart2,
  Lightbulb,
  Key,
  Settings,
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
    href: "/dashboard",
  },
  {
    title: "Calls & Tickets",
    icon: PhoneCall,
    href: "/dashboard/calls-tickets",
  },
  { title: "Voice Script", icon: Mic, href: "/dashboard/voice-script" },
  {
    title: "Performance Analytics",
    icon: BarChart2,
    href: "/dashboard/performance-analytics",
  },
  { title: "AI Outbound", icon: Lightbulb, href: "/dashboard/ai-outbound" },
  { title: "API Keys", icon: Key, href: "/dashboard/api-keys" },
  { title: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function ClientSidebar({ dir }: { dir: "left" | "right" }) {
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
