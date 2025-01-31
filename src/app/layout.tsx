import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";

import { Navbar, Footer } from "@/components/layout";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TEST PAGE",
  description: "TEST PAGE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          "overflow-x-hidden bg-background font-sans antialiased"
        )}
      >
        
            <main className="relative h-[calc(100vh-6rem)] overflow-y-auto px-2 sm:px-4">
              {children}
            </main>
      </body>
    </html>
  );
}
