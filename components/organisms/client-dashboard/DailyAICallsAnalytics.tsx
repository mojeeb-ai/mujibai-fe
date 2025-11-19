import DailyAICalls from '@/components/molecules/client-dashboard/DailyAICalls'
import IntentDetectionAccuracy from '@/components/molecules/client-dashboard/IntentDetectionAccuracy'
import { useTranslations } from 'next-intl'

export default function DailyAICallsAnalytics() {
  const t = useTranslations('performanceAnalytics')
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <DailyAICalls t={t} />
      <IntentDetectionAccuracy t={t} />
    </div>
  )
}
