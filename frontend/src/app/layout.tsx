import { Toaster } from 'react-hot-toast';
import './globals.css';
import { Inter } from 'next/font/google';
import PovButton from '@/components/PovButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'OnPath',
  description: 'Interal Career Pathway Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <PovButton />
        {children}
      </body>
    </html>
  );
}
