import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ColorPolygon, Header } from './components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="bg-white">
                    <div className="relative isolate px-6 pt-14 lg:px-8">
                        <Header />
                        <ColorPolygon> {children}</ColorPolygon>
                    </div>
                </div>
            </body>
        </html>
    );
}
