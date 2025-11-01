import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen relative flex justify-center">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[65%] h-[65%] rounded-full 
            bg-[#06B6D4]/40 blur-[160px] 
            opacity-60 z-[-1]"
      ></div>
      <div className="w-full flex items-center justify-center flex-col gap-10 z-10">
        <Image
          src="/page-not-found.svg"
          alt="Page Not Found"
          width={500}
          height={500}
          className="w-[50%] h-[50%]"
          loading="lazy"
        />
        <Button>
          <Link className="text-foreground" href="/">
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
