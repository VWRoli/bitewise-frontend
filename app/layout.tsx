import type { Metadata } from 'next';
import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Toaster } from '@/app/components/ui/toaster';

export const metadata: Metadata = {
  title: 'BiteWise - The Meal Planner',
  description:
    'BiteWise is a meal planner that helps you plan your meals and track your nutrition.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
