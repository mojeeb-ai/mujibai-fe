import ClientSidebar from "@/components/organisms/client-dashboard/ClientSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getLocale } from "next-intl/server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <main className="relative w-screen h-screen p-2 overflow-x-hidden">
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[85%] h-[85%] rounded 
            bg-[#06B6D4]/70 blur-[120px] 
              opacity-80 z-0"
      ></div>
      <SidebarProvider>
        <ClientSidebar dir={locale === "ar" ? "right" : "left"} />
        {children}
      </SidebarProvider>
    </main>
  );
}
