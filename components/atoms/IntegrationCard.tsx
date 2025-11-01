import Image from "next/image";
import { Button } from "../ui/button";

export default function IntegrationCard({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 p-4 rounded-lg bg-white dark:bg-[#FFFFFF0F]">
      <div className="rounded-full p-3 bg-white dark:bg-[#00143473] shadow-sm">
        <Image src={image} alt={title} width={40} height={40} loading="lazy" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 capitalize ">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 w-[80%] mx-auto">
        {subtitle}
      </p>
      <Button className="w-full rounded-full py-6 mt-5">Add</Button>
    </div>
  );
}
