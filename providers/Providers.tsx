"use client";

import { NextIntlClientProvider } from "next-intl";
import { ErrorMessageProvider } from "@/hooks/useErrorMessage";

export function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, string>;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ErrorMessageProvider>{children}</ErrorMessageProvider>
    </NextIntlClientProvider>
  );
}
