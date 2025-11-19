'use client'
import DashboardHeader from '@/components/organisms/client-dashboard/DashboardHeader'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { Moon, Settings, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const t = useTranslations('adminSettings')

  const options = [
    { label: t('theme.options.light'), value: 'light', Icon: Sun },
    { label: t('theme.options.dark'), value: 'dark', Icon: Moon },
    { label: t('theme.options.system'), value: 'system', Icon: Settings },
  ]

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <DashboardHeader title={t('welcome') + ' ' + 'Abdulrahman Alharbi'} />

      <div className="z-50 h-full w-full rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
        {/* Theme Section */}
        <Card className="border-none bg-transparent shadow-none">
          <CardHeader>
            <CardTitle>{t('theme.title')}</CardTitle>
            <CardDescription>{t('theme.description')}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {options.map(({ label, value, Icon }) => (
                <label
                  key={value}
                  htmlFor={value}
                  className={cn(
                    'flex cursor-pointer flex-col items-center justify-center rounded-2xl border p-4 transition-all duration-200',
                    'bg-[#FFFFFFBF] dark:bg-[#FFFFFF0F]',
                    'hover:ring-primary/40 hover:ring-2',
                    theme === value
                      ? 'border-primary ring-primary/60 ring-2'
                      : 'border-transparent',
                  )}
                >
                  <div className="my-5 rounded-full bg-[#3B82F640] p-2 dark:bg-[#00143440]">
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
        <Card className="border-none bg-transparent shadow-none">
          <CardHeader>
            <CardTitle>{t('notifications.title')}</CardTitle>
            <CardDescription>{t('notifications.description')}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 rounded-2xl bg-[#FFFFFFBF] py-7 dark:bg-[#001434A6]">
            <div className="flex items-center justify-between rounded-xl bg-[#3B82F614] px-3 py-3 dark:bg-[#3B82F614]">
              <h1>{t('notifications.email')}</h1>
              <Switch />
            </div>
            <div className="flex items-center justify-between rounded-xl bg-[#3B82F614] px-3 py-3 dark:bg-[#3B82F614]">
              <h1>{t('notifications.sms')}</h1>
              <Switch />
            </div>
            <div className="flex items-center justify-between rounded-xl bg-[#3B82F614] px-3 py-3 dark:bg-[#3B82F614]">
              <h1>{t('notifications.browser')}</h1>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
