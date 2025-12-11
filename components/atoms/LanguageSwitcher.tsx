'use client';

import { useTransition } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { api } from '@/utils/axios';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [, startTransition] = useTransition();

  function switchTo(locale: string) {
    startTransition(() => {
      if (typeof window !== 'undefined') {
        document.cookie = `LANG=${locale}; path=/; max-age=31536000; SameSite=Lax`;
      }
      router.refresh();
    });
    api.defaults.headers['Accept-Language'] = locale;
  }

  const currentLang =
    typeof document !== 'undefined'
      ? document.cookie.match(/LANG=(\w+)/)?.[1] || 'en'
      : 'en';

  const currentFlag =
    currentLang === 'ar'
      ? 'https://flagcdn.com/w20/sa.png'
      : 'https://flagcdn.com/w20/gb.png';

  return (
    <div className="flex w-full justify-center sm:w-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-border/40 text-foreground hover:bg-accent flex w-full items-center justify-between gap-2 rounded-full border bg-transparent px-4 py-2 shadow-none transition-colors duration-300 outline-none sm:w-auto sm:justify-center"
          >
            <div className="flex items-center gap-2">
              <div className="h-[18px] w-[18px] overflow-hidden rounded-full">
                <Image
                  src={currentFlag}
                  width={18}
                  height={18}
                  alt="flag"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-medium">
                {currentLang === 'en' ? 'EN' : 'AR'}
              </span>
            </div>
            <ChevronDown size={16} className="opacity-70" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="center"
          className="w-full text-center sm:w-40"
        >
          <DropdownMenuItem
            onClick={() => switchTo('en')}
            className="flex cursor-pointer items-center justify-center gap-2"
          >
            <Image
              src="https://flagcdn.com/w20/gb.png"
              width={24}
              height={24}
              className="rounded-full"
              alt="English"
              loading="lazy"
            />
            <span>English</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => switchTo('ar')}
            className="flex cursor-pointer items-center justify-center gap-2"
          >
            <Image
              src="https://flagcdn.com/w20/sa.png"
              width={24}
              height={24}
              className="rounded-none"
              alt="العربية"
              loading="lazy"
            />
            <span>العربية</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
