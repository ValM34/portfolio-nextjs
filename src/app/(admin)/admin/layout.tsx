import type { Metadata } from 'next';
import '@/app/globals.scss';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminAppSidebar } from '@/components/layouts/admin/admin-app-sidebar';

export const metadata: Metadata = {
  title: 'Admin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarProvider>
        <AdminAppSidebar />
        <main>
          <SidebarTrigger />
          <div className="px-4 sm:px-8 lg:px-20">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
