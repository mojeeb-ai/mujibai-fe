import ConversionsOverview from "@/components/molecules/client-dashboard/ConversionsOverview";
import ScenarioPerformance from "@/components/molecules/client-dashboard/ScenarioPerformance";

export default function ScenarioPerformanceAnalytics({
  t,
}: {
  t: (key: string) => string;
}) {
  return (
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <ScenarioPerformance t={t} />
      <ConversionsOverview t={t} />
    </div>
  );
}
