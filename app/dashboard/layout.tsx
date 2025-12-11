import { getLocale } from 'next-intl/server';
import { cookies } from 'next/headers';

import axios from 'axios';

import ClientSidebar from '@/components/organisms/client-dashboard/ClientSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

async function getUserFromServer() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT
        : process.env.NEXT_PUBLIC_BACKEND_PRODUCTION;

    const cookieHeader = (await cookies()).toString();

    const res = await axios.get(`${baseUrl}/api/v1/auth/check-auth`, {
      headers: {
        Cookie: cookieHeader,
      },
    });

    return res.data?.data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const user = await getUserFromServer();

  return (
    <main className="relative h-screen w-full overflow-x-hidden p-2">
      <div className="fixed top-1/2 left-1/2 z-0 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded bg-[#06B6D4]/70 opacity-80 blur-[120px]"></div>
      <SidebarProvider>
        <ClientSidebar dir={locale === 'ar' ? 'right' : 'left'} user={user} />
        {children}
      </SidebarProvider>
    </main>
  );
}
