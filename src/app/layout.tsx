import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ColorPolygon, Footer, Header } from './components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'DM Electricals',
    description: 'Dilan Moters. Electrical Motors and Generators Repair and Rewinding ',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} pt-24 sm:pt-14`}>
                <div className="bg-white">
                    <div className="relative isolate px-6 lg:px-9 max-w-screen-2xl m-auto">
                        <Header />
                        <ColorPolygon> {children}</ColorPolygon>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
