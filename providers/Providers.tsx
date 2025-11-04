"use client";

import { NextIntlClientProvider } from "next-intl";
import { ErrorMessageProvider } from "@/hooks/useErrorMessage";
import { Provider } from "react-redux";
import store from "@/store/store";
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
      <Provider store={store}>
        <ErrorMessageProvider>{children}</ErrorMessageProvider>
      </Provider>
    </NextIntlClientProvider>
  );
}
