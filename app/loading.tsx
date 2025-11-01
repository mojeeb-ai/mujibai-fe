import Image from "next/image";

export default function loading() {
  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[65%] h-[65%] rounded-full 
            bg-[#06B6D4]/40 blur-[160px] 
            opacity-60 z-[-1]"
      ></div>
      <Image
        src="/loader-logo.svg"
        alt="Loader Logo"
        width={30}
        height={30}
        className="w-[10%] h-[10%]"
        loading="lazy"
      />
    </div>
  );
}
