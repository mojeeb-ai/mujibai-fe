import Image from 'next/image';
import Link from 'next/link';

import logoImage from '@/public/logo.svg';

export default function Logo() {
  return (
    <Link href="/" className="block h-[50px] w-[200px]">
      <div className="relative h-full w-full">
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
