import type { Metadata } from "next";
import { Cabin, Geist, Geist_Mono } from "next/font/google";
import { HeaderLogo } from "@/shared/widgets/header/components/header-logo";
import { HeaderUserRightPanel } from "@/shared/widgets/header/components/header-user-right-panel";
import { MobileHeader } from "@/shared/widgets/header/components/mobile-header";
import { DesktopHeader } from "@/shared/widgets/header/header-wrapper";
import { Providers } from "./providers";
import "./globals.css";
import "@/shared/i18n/i18n";
import { ReactNode } from "react";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Course Garden",
  description: "mini-courses AI creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/Sign.jpg" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${cabin.variable}`}
      >
        <Providers>
          <DesktopHeader>
            <HeaderLogo />
            {/* <HeaderLinks /> */}
            <HeaderUserRightPanel />
          </DesktopHeader>
          <MobileHeader />
          <div id="modal-root"></div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
