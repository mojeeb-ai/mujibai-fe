import Top5ActiveClients from "@/components/molecules/admin-dashboard/Top5ActiveClients";
import AnalyticsStatistics from "@/components/organisms/admin-dashboard/AnalyticsStatistics";
import CallsOverTimeAnalytics from "@/components/organisms/admin-dashboard/CallsOverTimeAnalytics";
import TicketVolumeAnalytics from "@/components/organisms/admin-dashboard/TicketVolumeAnalytics";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";

export default function AdminAnalyticsPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title="Analytics" />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <AnalyticsStatistics />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 my-10">
          <CallsOverTimeAnalytics />
          <TicketVolumeAnalytics />
        </div>
        <Top5ActiveClients />
      </div>
    </div>
  );
}
