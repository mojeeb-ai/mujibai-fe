import { useLocale } from "next-intl";
import { Switch } from "../ui/switch";

export default function NotificationController({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const locale = useLocale();
  return (
    <div className="bg-[#3B82F614] w-full p-4 flex justify-between items-center my-3 rounded-xl">
      <div className="flex items-start flex-col">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Switch id={title} className={`${locale === "ar" ? "mr-4" : "ml-4"}`} />
    </div>
  );
}
