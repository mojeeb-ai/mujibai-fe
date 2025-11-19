'use client'

import {
  LayoutDashboard,
  PhoneCall,
  Mic,
  BarChart2,
  Lightbulb,
  Key,
  Settings,
  FileText,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Logo from '@/components/atoms/Logo'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

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
export default function AdminSidebar({ dir }: { dir: 'left' | 'right' }) {
  const t = useTranslations('adminSidebar')
  const pathname = usePathname()
  const menuItems = [
    {
      title: t('dashboard'),
      icon: LayoutDashboard,
      active: true,
      href: '/admin-dashboard',
    },
    { title: t('clients'), icon: PhoneCall, href: '/admin-dashboard/clients' },
    { title: t('analytics'), icon: Mic, href: '/admin-dashboard/analytics' },
    {
      title: t('userRoles'),
      icon: BarChart2,
      href: '/admin-dashboard/user-roles',
    },
    { title: t('plans'), icon: Lightbulb, href: '/admin-dashboard/plans' },
    {
      title: t('subscription'),
      icon: Key,
      href: '/admin-dashboard/subscription',
    },
    {
      title: t('enrollmentForm'),
      icon: FileText,
      href: '/admin-dashboard/enrollment-form',
    },
    { title: t('settings'), icon: Settings, href: '/admin-dashboard/settings' },
  ]

  return (
    <Sidebar
      side={dir}
      className="my-2 flex w-[250px] flex-col justify-between rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]"
    >
      {/* Logo Section */}
      <div className="mt-2 mb-6 flex flex-col items-center">
        <Link href="/">
          <Logo />
        </Link>
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
      <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#284b520f] p-3 dark:bg-[#0e2235]">
        <Image
          src="/salman.jpg"
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
          <span className="text-xs text-gray-500">{t('memberRole')}</span>
        </div>
        <div className="ml-auto text-gray-500">⋮</div>
      </div>
    </Sidebar>
  )
}
