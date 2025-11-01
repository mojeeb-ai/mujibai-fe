import AnalyticsStatisticsCard from "@/components/atoms/AnalyticsStatisticsCard";

export default function AnalyticsStatistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
      <AnalyticsStatisticsCard />
      <AnalyticsStatisticsCard />
      <AnalyticsStatisticsCard />
    </div>
  );
}
