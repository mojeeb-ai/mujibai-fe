import logoImage from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src={logoImage} alt="Logo" width={200} height={200} />
      </Link>
    </div>
  );
}
