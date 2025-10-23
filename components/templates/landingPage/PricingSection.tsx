"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingCards from "@/components/organisms/PricingCards";
import { Plan } from "@/types/types";

/**
 * PricingSection Component
 * Displays pricing plans using ShadCN Tabs for billing period selection.
 */
export default function PricingSection() {
  /**
   * Pricing plan definitions for both billing periods.
   * You can easily extend these or connect to a backend.
   */
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
    <>
      <section className=" bg-background-darker relative py-20">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[65%] h-[65%] rounded-full 
            bg-[#06B6D4]/40 blur-[160px] 
            opacity-60 z-0"
        ></div>

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Tabs
              defaultValue="monthly"
              className="w-full flex flex-col items-center"
            >
              <div className="mb-20 flex flex-col gap-5">
                <h2 className="text-[22px] md:text-[44px] font-bold text-text-light">
                  Pricing
                </h2>
                <p className="text-sm md:text-base text-text-light mt-2">
                  Plans depending on your needs and use case
                </p>
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
      </section>
    </>
  );
}
