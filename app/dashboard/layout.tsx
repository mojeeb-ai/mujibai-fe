import ClientSidebar from "@/components/organisms/client-dashboard/ClientSidebar";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative w-screen h-screen p-2  overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[85%] h-[85%] rounded 
            bg-[#06B6D4]/70 blur-[120px] 
              opacity-80 z-0"
      ></div>
      <SidebarProvider>
        <ClientSidebar />
        <div className="flex flex-col gap-4 w-full h-full">
          <DashboardHeader />
          <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
}
