"use client";

import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useTransition } from "react";
import { AxiosAPI } from "@/axios/axiosInstance";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function LanguageSwitcher() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [, startTransition] = useTransition();

  function switchTo(locale: string) {
    startTransition(() => {
      if (typeof window !== "undefined") {
        document.cookie = `LANG=${locale}; path=/; max-age=31536000; SameSite=Lax`;
      }
      router.refresh();
    });
    AxiosAPI.defaults.headers["Accept-Language"] = locale;
    queryClient.invalidateQueries();
  }

  const currentLang =
    typeof document !== "undefined"
      ? document.cookie.match(/LANG=(\w+)/)?.[1] || "en"
      : "en";

  const currentFlag =
    currentLang === "ar"
      ? "https://flagcdn.com/w20/sa.png"
      : "https://flagcdn.com/w20/gb.png";

  return (
    <div className="w-full sm:w-auto flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="
              w-full sm:w-auto
              flex items-center justify-between sm:justify-center gap-2 
              px-4 py-2 rounded-full border border-border/40
              bg-transparent text-foreground hover:bg-accent 
              transition-colors duration-300
              shadow-none outline-none
            "
          >
            <div className="flex items-center gap-2">
              <div className="w-[18px] h-[18px] rounded-full overflow-hidden">
                <Image
                  src={currentFlag}
                  width={18}
                  height={18}
                  alt="flag"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-medium">
                {currentLang === "en" ? "EN" : "AR"}
              </span>
            </div>
            <ChevronDown size={16} className="opacity-70" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="center"
          className="w-full sm:w-40 text-center"
        >
          <DropdownMenuItem
            onClick={() => switchTo("en")}
            className="flex items-center justify-center gap-2 cursor-pointer"
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
            onClick={() => switchTo("ar")}
            className="flex items-center justify-center gap-2 cursor-pointer"
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
