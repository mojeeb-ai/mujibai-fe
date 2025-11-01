import Image from "next/image";
import React from "react";

export default function StatictisCard({
  icon,
  number,
  title,
}: {
  icon: string;
  number: string;
  title: string;
}) {
  return (
    <div className="min-w-[182px] min-h-[129px] rounded-xl p-[16px] flex flex-col gap-[12px] dark:bg-[#FFFFFF0F] bg-[#FFFFFFBF]">
      <Image src={icon} alt="icon" width={24} height={24} loading="lazy" />
      <h2 className="font-semibold text-3xl">{number}</h2>
      <p className=" text-gray-400">{title}</p>
    </div>
  );
}
