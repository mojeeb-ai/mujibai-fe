import UserRolesSearchAndFiltering from '@/components/organisms/admin-dashboard/UserRolesSearchAndFiltering'
import UserRolesTable from '@/components/organisms/admin-dashboard/UserRolesTable'
import DashboardHeader from '@/components/organisms/client-dashboard/DashboardHeader'
import { useTranslations } from 'next-intl'

export default function UsersRolesPage() {
  const t = useTranslations('adminUserRoles')
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <DashboardHeader title={t('welcome') + ' ' + 'Abdulrahman Alharbi'} />

      <div className="z-50 h-full w-full rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
        <UserRolesSearchAndFiltering />
        <UserRolesTable />
      </div>
    </div>
  )
}
