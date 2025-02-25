import "./globals.css";

import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import { client } from "@/sanity/lib/client";
import { SETTINGS_QUERY } from "@/lib/queries";

import { ThemeProvider } from "@/components/context/ThemeProvider";
import { SettingsProvider } from "@/components/context/SettingsContext";

import { validateSettings } from "@/lib/utils";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const options = { next: { revalidate: 60 } };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settingsData = await client.fetch(SETTINGS_QUERY, {}, options);
  const validatedSettings = validateSettings(settingsData);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SettingsProvider settings={settingsData}>
          <ThemeProvider settings={validatedSettings}>
            <Header />
            <main className="flex flex-col gap-y-[calc(var(--space-between-sections)*.75)] sm:gap-y-[--space-between-sections] px-3 sm:px-24 overflow-hidden">
              {children}
            </main>
          </ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
