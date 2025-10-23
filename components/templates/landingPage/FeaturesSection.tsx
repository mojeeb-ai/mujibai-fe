import { featuresData } from "@/data/featuresData";
import FeatureCard from "../../atoms/FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="relative py-10">
      <div className="flex justify-center items-center flex-col gap-3 my-10 text-center">
        <h1 className="font-bold leading-tight text-gray-900 dark:text-white text-4xl">
          Features
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base max-w-[700px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[65%] h-[65%] rounded-full 
            bg-[#06B6D4]/40 blur-[160px] 
              opacity-60 z-0"
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[80%] z-50">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              imageDark={feature.imageDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
