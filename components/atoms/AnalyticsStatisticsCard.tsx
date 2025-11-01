import Image from "next/image";
import React from "react";

export default function AnalyticsStatisticsCard() {
  return (
    <div className="p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#FFFFFF0F] rounded-2xl shadow-sm">
      <p className="text-sm">Lorem Ipsum</p>
      <div className="flex justify-between items-center">
        <div className="my-2 flex justify-start items-end gap-2">
          <h5 className="text-4xl font-semibold">1245</h5>
          <span className="text-xl font-semibold text-green-500">+12%</span>
        </div>
        <Image
          src={"/dashboard-images/call.svg"}
          alt="call"
          width={24}
          height={24}
          loading="lazy"
        />
      </div>
    </div>
  );
}
