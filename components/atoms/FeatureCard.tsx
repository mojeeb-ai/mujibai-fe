'use client'
import { useTheme } from 'next-themes'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

export default function FeatureCard({
  title,
  description,
  image,
  imageDark,
}: {
  title: string
  description: string
  image: StaticImageData
  imageDark: StaticImageData
}) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const currentTheme = theme === 'system' ? resolvedTheme : theme
  const currentImage = currentTheme === 'dark' ? image : imageDark

  return (
    <div className="relative rounded-lg border-1 border-gray-200 bg-[#06B6D40F] p-6 shadow-md dark:border-gray-700 dark:bg-transparent">
      <div className="z-50 flex h-full w-full flex-col items-center gap-4">
        <div className="rounded-xl bg-[#06B6D40F] p-5 dark:bg-white/5">
          <Image
            src={currentImage}
            alt={title}
            width={60}
            height={60}
            loading="lazy"
          />
        </div>
        <hr className="w-full border-gray-300 dark:border-gray-700" />
        <div className="flex w-full flex-col text-start">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 w-[100%+2px] h-[100%+2px] bg-gradient-to-r from-[#6EEAFF] to-[#94BDFF] z-10"></div> */}
    </div>
  )
}
