"use client";

import { NextIntlClientProvider } from "next-intl";
import { ErrorMessageProvider } from "@/hooks/useErrorMessage";
import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
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
        <PersistGate loading={null} persistor={persistor}>
          <ErrorMessageProvider>{children}</ErrorMessageProvider>
        </PersistGate>
      </Provider>
    </NextIntlClientProvider>
  );
}
