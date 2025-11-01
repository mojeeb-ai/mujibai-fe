import IntegrationCard from "@/components/atoms/IntegrationCard";

export default function IntegrationSettings() {
  return (
    <div>
      <div className="my-5 px-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Integration Settings
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Connect your favorite apps & services to streamline your workflow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 my-2">
        <IntegrationCard
          title="slack"
          subtitle="Connect with your team in slack for seamless collaboration"
          image="/dashboard-images/devicon_slack.svg"
        />
        <IntegrationCard
          title="whatsapp"
          subtitle="Connect with your in whatsapp for easy collaboration"
          image="/dashboard-images/logos_whatsapp-icon.svg"
        />
        <IntegrationCard
          title="google calnder"
          subtitle="Connect with your in calendar for easy scheduling"
          image="/dashboard-images/logos_google-calendar.svg"
        />
      </div>
    </div>
  );
}
