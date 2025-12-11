import { featuresData } from '@/data/featuresData';

import FeatureCard from '../../atoms/FeatureCard';

export default function FeaturesSection() {
  return (
    <section className="relative py-10">
      <div className="my-10 flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="text-4xl leading-tight font-bold text-gray-900 dark:text-white">
          Features
        </h1>
        <p className="max-w-[700px] text-base text-gray-600 dark:text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-1/2 z-0 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/40 opacity-60 blur-[160px]"></div>
        <div className="z-50 mx-auto grid max-w-[80%] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map(feature => (
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
