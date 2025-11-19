import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search } from 'lucide-react'
import { useTranslations } from 'next-intl'

/**
 * UserRolesSearchAndFiltering component
 * -----------------------------------
 * Provides search input and action buttons for filtering and adding user roles.
 */
export default function UserRolesSearchAndFiltering() {
  const t = useTranslations('adminUserRoles')

  return (
    <div className="grid w-full grid-cols-1 items-center justify-between md:grid-cols-6 lg:grid-cols-6">
      {/* Search Section */}
      <div className="dark:bg-g-white/10 col-span-3 flex w-full items-center gap-2 rounded-full bg-[#06B6D426] px-3 py-2">
        <Input
          placeholder={t('searchPlaceholder')}
          className="flex-1 border-0 py-0 shadow-none focus-visible:ring-0 dark:bg-transparent"
        />
        <div className="text-primary flex items-center rounded-full bg-white p-2 dark:bg-[#FFFFFF26]">
          <Search className="size-4" />
        </div>
      </div>

      {/* Actions Section */}
      <div className="col-span-3 flex items-center justify-end gap-2">
        <Button className="rounded-full py-5">
          <Plus className="size-4" />
          {t('addNewUser')}
        </Button>
      </div>
    </div>
  )
}
