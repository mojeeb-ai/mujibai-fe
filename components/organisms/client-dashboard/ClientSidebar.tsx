'use client'
import {
  LayoutDashboard,
  PhoneCall,
  Mic,
  BarChart2,
  Lightbulb,
  Key,
  Settings,
  EllipsisVertical,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Logo from '@/components/atoms/Logo'
import { useTranslations } from 'next-intl'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User } from '@/types/types'
import useAuth from '@/hooks/useAuth'
export default function ClientSidebar({
  dir,
  user,
}: {
  dir: 'left' | 'right'
  user: User
}) {
  const t = useTranslations('sidebar')
  const pathname = usePathname()

  const menuItems = [
    {
      title: t('dashboard'),
      icon: LayoutDashboard,
      href: '/dashboard',
    },
    {
      title: t('calls-tickets'),
      icon: PhoneCall,
      href: '/dashboard/calls-tickets',
    },
    { title: t('voice-script'), icon: Mic, href: '/dashboard/voice-script' },
    {
      title: t('performance-analytics'),
      icon: BarChart2,
      href: '/dashboard/performance-analytics',
    },
    {
      title: t('ai-outbound'),
      icon: Lightbulb,
      href: '/dashboard/ai-outbound',
    },
    { title: t('api-keys'), icon: Key, href: '/dashboard/api-keys' },
    { title: t('settings'), icon: Settings, href: '/dashboard/settings' },
  ]

  const { handleLogout } = useAuth()

  return (
    <Sidebar
      side={dir}
      className="my-2 flex w-[250px] flex-col justify-between rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]"
    >
      {/* Logo Section */}
      <div className="mt-2 mb-6 flex flex-col items-center">
        <Logo />
      </div>

      {/* Menu Section */}
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`my-2 flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 transition-all active:bg-[#06B6D40F] active:text-[#06B6D4] ${
                    isActive
                      ? 'bg-[#06B6D40F] text-[#06B6D4] hover:bg-[#06B6D40F] hover:text-[#06B6D4]'
                      : 'text-gray-700 hover:bg-[#06B6D40F] dark:text-gray-300'
                  }`}
                >
                  <Link href={String(item.href)}>
                    <item.icon
                      className={`h-5 w-5 ${
                        isActive
                          ? 'text-[#06B6D4]'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    />
                    <span className="text-sm font-semibold">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* User Section */}
      <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#06B6D40F] p-3 dark:bg-[#0e2235]">
        <Avatar>
          <AvatarImage
            src={`https://api.dicebear.com/6.x/initials/svg?seed=${user?.fullName}&backgroundColor=2563eb&backgroundType=solid`}
            alt={user?.fullName}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <AvatarFallback>{user?.fullName}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col text-sm">
          <span className="font-semibold text-gray-900 dark:text-white">
            {user?.fullName}
          </span>
          <span className="text-xs text-gray-500">{user?.role}</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="m-0 p-0 hover:bg-transparent dark:bg-transparent"
            >
              <EllipsisVertical className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-[#fff] dark:bg-[#0e2235]"
            align="start"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>

            <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Sidebar>
  )
}
