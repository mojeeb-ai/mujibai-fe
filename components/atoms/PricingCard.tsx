"use client";

import { Button } from "../ui/button";
import { CheckCircle, X } from "lucide-react";

/**
 * PricingCard Component
 * Glassmorphic pricing card with smooth shadows and gradient glow
 * matching the Figma design (dark and light modes supported)
 */
export default function PricingCard({
  plan,
}: {
  plan: {
    id: string;
    name: string;
    price: string;
    period: string;
    features: { name: string; included: boolean }[];
    isPopular: boolean;
  };
}) {
  return (
    <div
      key={plan.id}
      className={`relative flex flex-col items-center gap-2 w-full lg:w-[344px] backdrop-blur-xl 
      rounded-2xl py-10 px-8 transition-all duration-300 
      border border-white/20 shadow-[0_8px_60px_-10px_rgba(0,0,0,0.2)]
      ${
        plan.isPopular
          ? "bg-[linear-gradient(180deg,_rgba(59,130,246,0.2)_0%,_rgba(59,130,246,0.1)_100%)] shadow-[0_0_60px_rgba(59,130,246,0.4)]"
          : "bg-[linear-gradient(180deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.1)_100%)] dark:bg-[linear-gradient(180deg,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0.02)_100%)]"
      }`}
    >
      <div className="w-full flex flex-col gap-4 text-left">
        {plan.isPopular ? (
          <div className="flex items-center justify-between">
            <h3 className="text-[20px] md:text-[32px] font-bold">
              {plan.name}
            </h3>
            <Button className="text-xs md:text-sm font-medium  bg-cyan-500/20 rounded-full px-4 py-1 shadow-md">
              Trending
            </Button>
          </div>
        ) : (
          <h3 className="text-[18px] md:text-[28px] font-bold">{plan.name}</h3>
        )}

        <div className="text-[28px] md:text-[40px] font-bold">
          <span className="text-cyan-400">{plan.price}</span>
          <span className="text-xs mx-1">/</span>
          <span className="text-[14px] md:text-lg">{plan.period}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full mt-2">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            {feature.included ? (
              <div className="p-1 rounded-full bg-green-600/10">
                <CheckCircle className="size-4 text-green-600" />
              </div>
            ) : (
              <div className="p-1 rounded-full bg-red-600/10">
                <X className="size-4 text-red-600" />
              </div>
            )}
            <span className="text-sm md:text-base">{feature.name}</span>
          </div>
        ))}
      </div>

      <Button
        className="w-full mt-4 font-semibold  rounded-full py-3 
        bg-cyan-500 hover:bg-cyan-400 transition-all duration-200 shadow-[0_4px_30px_rgba(6,182,212,0.3)]"
      >
        Select
      </Button>

      {plan.isPopular && (
        <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-[100px] -z-10"></div>
      )}
    </div>
  );
}
