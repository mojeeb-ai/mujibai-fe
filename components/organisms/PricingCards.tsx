import PricingCard from "../atoms/PricingCard";

/**
 * PricingCards Component
 * Displays a list of plan cards for a given billing period.
 */
function PricingCards({
  plans,
}: {
  plans: {
    id: number;
    name: string;
    price: string;
    period: string;
    features: { name: string; included: boolean }[];
    isPopular: boolean;
  }[];
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
      {plans.map((plan) => (
        <PricingCard plan={plan} key={plan.id.toString()} />
      ))}
    </div>
  );
}

export default PricingCards;
