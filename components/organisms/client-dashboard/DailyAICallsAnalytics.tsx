import DailyAICalls from "@/components/molecules/client-dashboard/DailyAICalls";
import IntentDetectionAccuracy from "@/components/molecules/client-dashboard/IntentDetectionAccuracy";

export default function DailyAICallsAnalytics() {
  return (
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <DailyAICalls />
      <IntentDetectionAccuracy />
    </div>
  );
}
