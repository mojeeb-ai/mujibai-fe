import { getLocale } from 'next-intl/server';

import AdminSidebar from '@/components/organisms/admin-dashboard/AdminSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <main className="relative h-screen w-full overflow-x-hidden p-2">
      <div className="fixed top-1/2 left-1/2 z-0 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded bg-[#06B6D4]/70 opacity-80 blur-[120px]"></div>
      <SidebarProvider>
        <AdminSidebar dir={locale === 'ar' ? 'right' : 'left'} />
        {children}
      </SidebarProvider>
    </main>
  );
}
