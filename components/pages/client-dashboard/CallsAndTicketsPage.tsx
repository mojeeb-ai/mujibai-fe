import CallsAndTicketsFiltering from "@/components/molecules/client-dashboard/CallsAndTicketsFiltering";
import CallsAndTicketsTable from "@/components/organisms/client-dashboard/CallsAndTicketsTable";

export default function CallsAndTicketsPage() {
  return (
    <section className="flex flex-col">
      <CallsAndTicketsFiltering />
      <CallsAndTicketsTable />
    </section>
  );
}
