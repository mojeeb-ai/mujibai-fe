import PlansSearchAndFiltering from '@/components/molecules/admin-dashboard/PlansSearchAndFiltering'
import PlansTable from '@/components/molecules/admin-dashboard/PlansTable'
import DashboardHeader from '@/components/organisms/client-dashboard/DashboardHeader'
export default function PlansPage() {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <DashboardHeader title="Upgrade Plan" />

      <div className="z-50 h-full w-full rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
        <PlansSearchAndFiltering />
        <PlansTable />
      </div>
    </div>
  )
}
