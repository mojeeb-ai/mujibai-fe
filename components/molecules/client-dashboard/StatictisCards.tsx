import StatictisCard from "@/components/atoms/StatictisCard";
import React from "react";

const statictisCardsData = [
  {
    icon: "/dashboard-images/calla.svg",
    number: "9",
    title: "Total Calls",
  },
  {
    icon: "/dashboard-images/timer.svg",
    number: "124",
    title: "Average Call Duration",
  },
  {
    icon: "/dashboard-images/tickets.svg",
    number: "4",
    title: "Tickets Created",
  },
  {
    icon: "/dashboard-images/correct-call.svg",
    number: "124",
    title: "Answered Calls",
  },
  {
    icon: "/dashboard-images/success-calls.svg",
    number: "104",
    title: "Customer Satisfaction",
  },
];

export default function StatictisCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {statictisCardsData?.map((item, index) => (
        <StatictisCard
          key={index}
          icon={item.icon}
          number={item.number}
          title={item.title}
        />
      ))}
    </div>
  );
}
