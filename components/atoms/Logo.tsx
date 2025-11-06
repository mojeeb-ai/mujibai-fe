import logoImage from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block w-[200px] h-[50px]">
      <div className="relative w-full h-full">
        <Image
          src={logoImage}
          alt="Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </Link>
  );
}
