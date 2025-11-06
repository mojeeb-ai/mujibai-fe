import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("LANG")?.value || "en";

  return {
    locale,
    messages: {
      ...(await import(`../messages/${locale}/dashboard.json`)).default,
      ...(await import(`../messages/${locale}/enrollPage.json`)).default,
      ...(await import(`../messages/${locale}/loginPage.json`)).default,
      ...(await import(`../messages/${locale}/forgetPasswordPage.json`))
        .default,
      ...(await import(`../messages/${locale}/resetPasswordPage.json`)).default,
      ...(await import(`../messages/${locale}/passwordResetRequested.json`))
        .default,
      ...(await import(`../messages/${locale}/adminDashboard.json`)).default,
      ...(await import(`../messages/${locale}/landingPage.json`)).default,
    },
  };
});
