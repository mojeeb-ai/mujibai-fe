import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import PricingCards from "@/components/organisms/PricingCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plan } from "@/types/types";
export default function PlansPage() {
  const plans: { monthly: Plan[]; yearly: Plan[] } = {
    monthly: [
      {
        id: 1,
        name: "Starter",
        price: "$0",
        period: "month",
        features: [
          { name: "Lorem", included: true },
          { name: "Lorem Ipsum", included: false },
          { name: "Lorem Ipsum", included: false },
          { name: "Lorem Ipsum", included: false },
        ],
        isPopular: false,
      },
      {
        id: 2,
        name: "Pro",
        price: "$44",
        period: "month",
        features: [
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: false },
        ],
        isPopular: true,
      },
      {
        id: 3,
        name: "Enterprise",
        price: "$94",
        period: "month",
        features: [
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: true },
        ],
        isPopular: false,
      },
    ],
    yearly: [
      {
        id: 1,
        name: "Starter",
        price: "$0",
        period: "year",
        features: [
          { name: "Lorem", included: true },
          { name: "Lorem Ipsum", included: false },
          { name: "Lorem Ipsum", included: false },
          { name: "Lorem Ipsum", included: false },
        ],
        isPopular: false,
      },
      {
        id: 2,
        name: "Pro",
        price: "$399",
        period: "year",
        features: [
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: false },
        ],
        isPopular: true,
      },
      {
        id: 3,
        name: "Enterprise",
        price: "$899",
        period: "year",
        features: [
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: true },
          { name: "Lorem Ipsum", included: true },
        ],
        isPopular: false,
      },
    ],
  };
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title="Upgrade Plan" />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <Tabs
          defaultValue="monthly"
          className="w-full flex flex-col items-center"
        >
          <div className="mb-20 flex flex-col gap-5">
            <TabsList className="flex gap-4 bg-white/20 rounded-full p-1">
              <TabsTrigger
                value="monthly"
                className="
                              w-[200px] rounded-full  
                              transition-all duration-300
                              bg-transparent hover:bg-cyan-500/20
                              data-[state=active]:bg-cyan-500
                              data-[state=inactive]:bg-transparent
                              "
              >
                Monthly
              </TabsTrigger>

              <TabsTrigger
                value="yearly"
                className="
                            w-[200px] rounded-full 
                          transition-all duration-300
                            bg-transparent hover:bg-cyan-500/20
                            data-[state=active]:bg-cyan-500
                            data-[state=inactive]:bg-transparent
                          "
              >
                Yearly
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full">
            <PricingCards plans={plans.monthly} />
          </TabsContent>

          <TabsContent value="yearly" className="w-full">
            <PricingCards plans={plans.yearly} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
