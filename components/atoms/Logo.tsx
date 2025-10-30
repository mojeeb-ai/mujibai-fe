import logoImage from "@/public/logo.svg";
import Image from "next/image";
export default function Logo() {
  return (
    <div>
      <Image
        src={logoImage}
        alt="Logo"
        width={200}
        height={200}
        loading="lazy"
      />
    </div>
  );
}
