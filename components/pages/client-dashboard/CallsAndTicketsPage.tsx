import CallsAndTicketsFiltering from "@/components/molecules/client-dashboard/CallsAndTicketsFiltering";
import CallsAndTicketsTable from "@/components/organisms/client-dashboard/CallsAndTicketsTable";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";

export default function CallsAndTicketsPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title="Calls & Tickets" />
      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <section className="flex flex-col">
          <CallsAndTicketsFiltering />
          <CallsAndTicketsTable />
        </section>
      </div>
    </div>
  );
}
