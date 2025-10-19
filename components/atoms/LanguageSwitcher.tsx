"use client";

import { AxiosAPI } from "@/axios/axiosInstance";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "../ui/button";

export default function LanguageSwitcher() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [, startTransition] = useTransition();

  function switchTo(locale: string) {
    startTransition(() => {
      document.cookie = `LANG=${locale}; path=/; max-age=31536000; SameSite=Lax`;
      router.refresh();
    });
    AxiosAPI.defaults.headers["Accept-Language"] = locale;
    queryClient.invalidateQueries();
  }

  return (
    <div style={{ padding: "1rem", display: "flex", gap: "0.5rem" }}>
      <Button className="text-[22px]" onClick={() => switchTo("en")}>
        English
      </Button>
      <Button className="text-[22px]" onClick={() => switchTo("ar")}>
        العربية
      </Button>
    </div>
  );
}
