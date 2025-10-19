import type { Metadata } from "next";
import { getMessages, getLocale } from "next-intl/server";
import { Providers } from "@/providers/Providers";
import "@/styles/globals.css";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import { ThemeProvider } from "@/components/atoms/ThemeProvider";
import { ThemeSwitcher } from "@/components/atoms/ThemeSwitcher";

export const metadata: Metadata = {
  title: "starter-theme-nextjs",
  description: "Order direct from Demo",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body suppressHydrationWarning>
        <Providers locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ThemeSwitcher />
            <LanguageSwitcher />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
