'use client';

import { useState } from 'react';

import { Plan } from '@/types/types';
import { AnimatePresence, motion } from 'framer-motion';

import PricingCards from '@/components/organisms/PricingCards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * PricingSection Component
 * Displays pricing plans using ShadCN Tabs for billing period selection.
 */
export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('monthly');

  /**
   * Pricing plan definitions for both billing periods.
   * You can easily extend these or connect to a backend.
   */
  const plans: { monthly: Plan[]; yearly: Plan[] } = {
    monthly: [
      {
        id: 1,
        name: 'Starter',
        price: '$0',
        period: 'month',
        features: [
          { name: 'Lorem', included: true },
          { name: 'Lorem Ipsum', included: false },
          { name: 'Lorem Ipsum', included: false },
          { name: 'Lorem Ipsum', included: false },
        ],
        isPopular: false,
      },
      {
        id: 2,
        name: 'Pro',
        price: '$44',
        period: 'month',
        features: [
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: false },
        ],
        isPopular: true,
      },
      {
        id: 3,
        name: 'Enterprise',
        price: '$94',
        period: 'month',
        features: [
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: true },
        ],
        isPopular: false,
      },
    ],
    yearly: [
      {
        id: 1,
        name: 'Starter',
        price: '$0',
        period: 'year',
        features: [
          { name: 'Lorem', included: true },
          { name: 'Lorem Ipsum', included: false },
          { name: 'Lorem Ipsum', included: false },
          { name: 'Lorem Ipsum', included: false },
        ],
        isPopular: false,
      },
      {
        id: 2,
        name: 'Pro',
        price: '$399',
        period: 'year',
        features: [
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: false },
        ],
        isPopular: true,
      },
      {
        id: 3,
        name: 'Enterprise',
        price: '$899',
        period: 'year',
        features: [
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: true },
          { name: 'Lorem Ipsum', included: true },
        ],
        isPopular: false,
      },
    ],
  };

  return (
    <>
      <section className="bg-background-darker relative py-20">
        {/* Animated pulsing background blur */}
        <motion.div
          className="absolute top-1/2 left-1/2 z-0 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/40 opacity-60 blur-[160px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1, 1.1, 1],
            opacity: [0, 0.6, 0.4, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Tabs
              defaultValue="monthly"
              value={activeTab}
              onValueChange={setActiveTab}
              className="flex w-full flex-col items-center"
            >
              {/* Header section with smooth entrance */}
              <motion.div
                className="mb-20 flex flex-col gap-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-150px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Title with scale animation */}
                <motion.h2
                  className="text-text-light text-[22px] font-bold md:text-[44px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    type: 'spring',
                    stiffness: 100,
                  }}
                >
                  Pricing
                </motion.h2>

                {/* Description with slide up */}
                <motion.p
                  className="text-text-light mt-2 text-sm md:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Plans depending on your needs and use case
                </motion.p>

                {/* Tab buttons with entrance animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <TabsList className="flex gap-4 rounded-full bg-white/20 p-1">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <TabsTrigger
                        value="monthly"
                        className="w-[200px] rounded-full bg-transparent transition-all duration-300 hover:bg-cyan-500/20 data-[state=active]:bg-cyan-500 data-[state=inactive]:bg-transparent"
                      >
                        Monthly
                      </TabsTrigger>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <TabsTrigger
                        value="yearly"
                        className="w-[200px] rounded-full bg-transparent transition-all duration-300 hover:bg-cyan-500/20 data-[state=active]:bg-cyan-500 data-[state=inactive]:bg-transparent"
                      >
                        Yearly
                      </TabsTrigger>
                    </motion.div>
                  </TabsList>
                </motion.div>
              </motion.div>

              {/* Tab content with smooth transitions */}
              <AnimatePresence mode="wait">
                {activeTab === 'monthly' && (
                  <TabsContent value="monthly" className="w-full">
                    <motion.div
                      key="monthly-content"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <PricingCards plans={plans.monthly} />
                    </motion.div>
                  </TabsContent>
                )}

                {activeTab === 'yearly' && (
                  <TabsContent value="yearly" className="w-full">
                    <motion.div
                      key="yearly-content"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <PricingCards plans={plans.yearly} />
                    </motion.div>
                  </TabsContent>
                )}
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
