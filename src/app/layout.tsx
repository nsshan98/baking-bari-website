import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import Menubar from "@/components/Menubar";
import { ToastContainer } from 'react-toastify';
import { auth } from "@/auth";
import { Session } from "next-auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baking Bari - Home",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Providers>
            <header className="flex-shrink-0">
              <Menubar session={session as Session} />
            </header>
            <main className="flex-grow">{children}</main>
            <footer>
              <Footer />
            </footer>
            <ToastContainer pauseOnFocusLoss={false} />
          </Providers>
        </div>
      </body>
    </html>
  );
}
