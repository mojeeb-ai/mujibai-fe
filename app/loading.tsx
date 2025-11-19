import Image from 'next/image'

export default function loading() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute top-1/2 left-1/2 z-[-1] h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/40 opacity-60 blur-[160px]"></div>
      <Image
        src="/loader-logo.svg"
        alt="Loader Logo"
        width={30}
        height={30}
        className="h-[10%] w-[10%]"
        loading="lazy"
      />
    </div>
  )
}
