'use client';
import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';

import { motion } from 'framer-motion';

export default function FeatureCard({
  title,
  description,
  image,
  imageDark,
  index = 0,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  imageDark: StaticImageData;
  index?: number;
}) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const currentImage = currentTheme === 'dark' ? image : imageDark;

  return (
    <motion.div
      className="relative rounded-lg border-1 border-gray-200 bg-[#06B6D40F] p-6 shadow-md dark:border-gray-700 dark:bg-transparent"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px rgba(6, 182, 212, 0.15)',
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated gradient border on hover */}
      <motion.div
        className="absolute -inset-[1px] -z-10 rounded-lg bg-gradient-to-r from-[#6EEAFF] to-[#94BDFF]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="z-50 flex h-full w-full flex-col items-center gap-4">
        {/* Animated icon container */}
        <motion.div
          className="rounded-xl bg-[#06B6D40F] p-5 dark:bg-white/5"
          whileHover={{
            rotate: [0, -5, 5, -5, 0],
            scale: 1.05,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1 + 0.2,
              type: 'spring',
              stiffness: 200,
            }}
          >
            <Image
              src={currentImage}
              alt={title}
              width={60}
              height={60}
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Animated divider */}
        <motion.hr
          className="w-full border-gray-300 dark:border-gray-700"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        />

        {/* Animated text content */}
        <motion.div
          className="flex w-full flex-col text-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        >
          <motion.h2
            className="text-xl font-bold"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-300"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
